import _ from "lodash";

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

function playerWinPercentage(data, username) {
  const winPercentage = Number(
    (
      (playerWins(data, username) / numberOfPlayersWithScores(data, username)) *
      100
    ).toFixed(2)
  ).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return !isNaN(winPercentage) ? winPercentage : 0;
}

function playerGamesPlayedPercentage(data, username) {
  return (
    data.filter((week) =>
      week.scores.some((s) => s.username === username && s.score > 0)
    ).length / data.length
  );
}

function rankingStats(data) {
  return Array.from(
    data
      .flatMap((week) => week.scores)
      .reduce((acc, user) => {
        if (user.gamesPlayedPercentage > 0.5 && !acc.has(user.username)) {
          acc.set(user.username, {
            username: user.username,
            userAvatarUrl: user.userAvatarUrl,
            winPercentage: user.winPercentage,
            rollingAveragePosition: user.rollingAveragePosition,
          });
        }
        return acc;
      }, new Map())
      .values()
  )
    .sort((a, b) => b.winPercentage - a.winPercentage)
    .map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
}

export function positionStats(data) {
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
    if (week.scores.length === 0) {
      week.scores.push({
        username: "No Score",
        position: "1",
        score: "0",
        rollingAveragePosition: "1",
      });
    } else {
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
                  validScores.length +
                  Number.EPSILON) *
                  10
              ) / 10
            : null;
      });
    }
  });

  // calculate the win percentage for each username
  weeksData.forEach((week, index) => {
    week.scores.forEach((score) => {
      score.winPercentage = playerWinPercentage(
        weeksData.slice(0, weeksData.length - index),
        score.username
      );
      console.log(score.username, score.winPercentage);
    });
  });

  // calculate the game played percentage for each username
  weeksData.forEach((week, index) => {
    week.scores.forEach((score) => {
      score.gamesPlayedPercentage = playerGamesPlayedPercentage(
        weeksData,
        score.username
      );
    });
  });

  return weeksData;
}

export function seasonStats(data) {
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

  const cumulativeWeeksData = sortedWeeks.map((week, index) => {
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

  const sortedCumulativeWeeksData = cumulativeWeeksData.map((weekData) => {
    const scores = weekData.scores.map((score) => ({
      ...score,
      seasonWinPercentage: playerWinPercentage(
        cumulativeWeeksData,
        score.username
      ),
    }));

    return {
      ...weekData,
      scores,
    };
  });

  const weeksData = sortedCumulativeWeeksData.map((weekData) => {
    const scores = weekData.scores
      .sort((a, b) => {
        const cumulativePointsDiff = b.cumulativePoints - a.cumulativePoints;
        if (cumulativePointsDiff !== 0) {
          return cumulativePointsDiff;
        }
        return b.seasonWinPercentage - a.seasonWinPercentage;
      })
      .map((score, index) => ({
        ...score,
        seasonPosition: index + 1,
      }));

    return {
      ...weekData,
      scores,
    };
  });

  return weeksData;
}

export default function LeaderboardStats(data) {
  const positionWeeksData = positionStats(data);
  const seasonWeeksData = seasonStats(data);
  const rankedPlayers = rankingStats(positionWeeksData);

  return {
    rankedPlayers,
    positionWeeksData,
    seasonWeeksData,
  };
}
