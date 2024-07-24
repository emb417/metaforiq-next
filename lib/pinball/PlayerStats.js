import _ from "lodash";

function positionStats(data) {
  const sortedWeeks = _.chain(
    data.find((obj) => obj.channelName === "competition-corner").weeks
  )
    .filter((week) => !isNaN(parseInt(week.weekNumber)))
    .orderBy(["weekNumber"], ["desc"])
    .take(52)
    .value()
    .map((week) => ({
      ...week,
      weekNumber: parseInt(week.weekNumber),
      numberOfPlayers: week.scores.length,
    }));

  // fill in position values
  let weeksData = sortedWeeks.map((week, weekIndex) => {
    const scoresData = week.scores.map((score, scoreIndex) => ({
      ...score,
      position: scoreIndex + 1,
    }));
    return {
      ...week,
      scores: scoresData,
    };
  });

  // calculate the rolling averages over a 24-week period for each username
  weeksData.forEach((week, weekIndex) => {
    week.scores.forEach((score) => {
      const startIndex = weekIndex;
      const endIndex = Math.min(weeksData.length, weekIndex + 13);
      const scores = weeksData
        .slice(startIndex, endIndex)
        .flatMap((w) => w.scores.filter((s) => s.username === score.username))
        .reverse();
      const validScores = scores.filter((s) => s.position !== null);
      score.rollingAveragePosition =
        validScores.length > 0
          ? Math.round(
              (validScores.reduce((sum, s) => sum + s.position, 0) /
                validScores.length) *
                1000
            ) / 1000
          : null;
    });
  });

  return weeksData;
}

function seasonStats(data) {
  const sortedWeeks = _.chain(
    data.find((obj) => obj.channelName === "competition-corner").weeks
  )
    .filter((week) => week.season === 5)
    .orderBy(["currentSeasonWeekNumber"], ["desc"])
    .value()
    .map((week) => ({
      ...week,
      currentSeasonWeekNumber: parseInt(week.currentSeasonWeekNumber),
    }));

  const allUsernames = new Set(
    sortedWeeks.flatMap((week) => week.scores.map((score) => score.username))
  );

  const weeksData = sortedWeeks.map((week, index) => {
    // add a score of 0 for any username in allUsernames but not in the scores
    allUsernames.forEach((username) => {
      if (!week.scores.find((s) => s.username === username)) {
        week.scores.push({ username, points: 0 });
      }
    });
    const scores = week.scores.map((score) => {
      let cumulativePoints = 0;
      for (let i = index; i < sortedWeeks.length; i++) {
        const weekScores = sortedWeeks[i].scores;
        const scoreObj = weekScores.find((s) => s.username === score.username);
        if (scoreObj) {
          cumulativePoints += scoreObj.points;
        }
      }
      return { ...score, cumulativePoints };
    });
    return { ...week, scores };
  });

  return weeksData;
}

function numberOfPlayersWithScores(data, username) {
  return data
    .filter((week) =>
      week.scores.find((s) => s.username === username && s.points > 0)
    )
    .map((week) => week.scores.filter((s) => s.score > 0).length - 1)
    .reduce((acc, cur) => acc + cur, 0);
}

function playerWins(data, username) {
  return data
    .filter((week) =>
      week.scores.find((s) => s.username === username && s.score > 0)
    )
    .map(
      (week) =>
        week.scores.filter((s) => s.score > 0).length -
        week.scores.findIndex((s) => s.username === username && s.score > 0) -
        1
    )
    .reduce((acc, cur) => acc + cur, 0);
}

function underPerformedTable(data, username) {
  return data
    .filter((week) =>
      week.scores.find((s) => s.username === username && s.score > 0)
    )
    .map((week) => ({
      ...week,
      underPerformed:
        week.scores.find((s) => s.username === username)?.position >
        week.scores.find((s) => s.username === username)?.rollingAveragePosition
          ? week.scores.find((s) => s.username === username)?.position -
            week.scores.find((s) => s.username === username)
              ?.rollingAveragePosition
          : 0,
    }))
    .filter((week) => week.underPerformed)
    .reduce(
      (max, week) => (max.underPerformed > week.underPerformed ? max : week),
      { underPerformed: 0 }
    ).table;
}

function overPerformedTable(data, username) {
  return data
    .map((week) => ({
      ...week,
      overPerformed:
        week.scores.find((s) => s.username === username)?.position <
        week.scores.find((s) => s.username === username)?.rollingAveragePosition
          ? week.scores.find((s) => s.username === username)
              ?.rollingAveragePosition -
            week.scores.find((s) => s.username === username)?.position
          : 0,
    }))
    .filter((week) => week.overPerformed)
    .reduce(
      (max, week) => (max.overPerformed > week.overPerformed ? max : week),
      { overPerformed: 0 }
    ).table;
}

export function PlayerSummaryData(data, username) {
  const positionWeeksData = positionStats(data);
  const seasonWeeksData = seasonStats(data);

  let user = positionWeeksData
    .flatMap((week) => week.scores)
    .map((score) => ({
      username: score.username,
      userAvatarUrl: score.userAvatarUrl,
      rollingAveragePosition: score.rollingAveragePosition,
    }))
    .find((user) => user.username === username);

  user.annualGamesPlayed = positionWeeksData.filter((week) =>
    week.scores.some((s) => s.username === username && s.score > 0)
  ).length;

  user.seasonGamesPlayed = seasonWeeksData.filter((week) =>
    week.scores.some((s) => s.username === username && s.score > 0)
  ).length;
  user.annualOverPerformedTable = overPerformedTable(
    positionWeeksData,
    username
  );
  user.seasonOverPerformedTable = overPerformedTable(
    positionWeeksData.filter((week) => week.season === 5),
    username
  );
  user.annualUnderPerformedTable = underPerformedTable(
    positionWeeksData,
    username
  );
  user.seasonUnderPerformedTable = underPerformedTable(
    positionWeeksData.filter((week) => week.season === 5),
    username
  );
  user.annualWins = playerWins(positionWeeksData, username);
  user.seasonWins = playerWins(seasonWeeksData, username);
  user.annualNumberOfPlayers = numberOfPlayersWithScores(
    positionWeeksData,
    username
  );
  user.seasonNumberOfPlayers = numberOfPlayersWithScores(
    seasonWeeksData,
    username
  );

  const seasonBestResultWeek = positionWeeksData
    .filter(
      (week) =>
        week.season === 5 && week.scores.some((s) => s.username === username)
    )
    .reduce((max, week) =>
      week.scores.find((s) => s.username === username)?.position <
      max.scores.find((s) => s.username === username)?.position
        ? week
        : max
    );

  user.seasonBestResult = seasonBestResultWeek.scores.find(
    (s) => s.username === username
  )?.position;

  user.seasonBestResultNumberOfPlayers = seasonBestResultWeek.scores.length;

  const annualBestResultWeek = positionWeeksData
    .filter((week) => week.scores.some((s) => s.username === username))
    .reduce((max, week) =>
      week.scores.find((s) => s.username === username)?.position <
      max.scores.find((s) => s.username === username)?.position
        ? week
        : max
    );

  user.annualBestResult = annualBestResultWeek.scores.find(
    (s) => s.username === username
  )?.position;

  user.annualBestResultNumberOfPlayers = annualBestResultWeek.scores.length;

  user.annualWinPercentage = Number(
    ((user.annualWins / user.annualNumberOfPlayers) * 100).toFixed(2)
  );

  user.seasonWinPercentage = Number(
    ((user.seasonWins / user.seasonNumberOfPlayers) * 100).toFixed(2)
  );

  const [firstWeek] = positionWeeksData;
  const userPositionDetails = {
    table: firstWeek.table,
    weekNumber: firstWeek.weekNumber,
    numberOfParticipants: firstWeek.scores.length,
    ...firstWeek.scores.find((score) => score.username === username),
  };

  const sortedUsernames = seasonWeeksData[0].scores
    .sort((a, b) => b.cumulativePoints - a.cumulativePoints)
    .map((user) => user.username);

  const userSeasonDetails = seasonWeeksData[0].scores.find(
    (score) => score.username === username
  );
  userSeasonDetails.numberOfPlayers = seasonWeeksData[0].scores.length;
  userSeasonDetails.position = sortedUsernames.indexOf(username) + 1;

  const userSeasonData = seasonWeeksData.map((week) => ({
    ...week,
    scores: week.scores.filter((score) => score.username === username),
  }));

  const userPositionData = positionWeeksData.map((week) => ({
    ...week,
    score: week.scores.find((score) => score.username === username)?.score,
    points: week.scores.find((score) => score.username === username)?.points,
    position: week.scores.find((score) => score.username === username)
      ?.position,
    numberOfParticipants: week.scores.length,
  }));

  return {
    user,
    userPositionDetails,
    userSeasonDetails,
    userPositionData,
    userSeasonData,
  };
}

export default function LeaderboardStats(data) {
  return {
    positionWeeksData: positionStats(data),
    seasonWeeksData: seasonStats(data),
  };
}
