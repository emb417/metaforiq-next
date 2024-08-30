import _ from "lodash";

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
            winPercentage: user.annualWinPercentage,
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
            ? Number(
                (
                  validScores.reduce((sum, s) => sum + s.position, 0) /
                    validScores.length +
                  Number.EPSILON
                ).toFixed(1)
              ).toFixed(1)
            : null;
      });
    }
  });

  // calculate the win percentage for each score
  weeksData.forEach((week, weekIndex) => {
    week.scores.forEach((score) => {
      score.losses = score.position > 0 ? score.position - 1 : 0;
      score.wins = week.numberOfPlayers - score.position;
      score.winPercentage =
        week.numberOfPlayers > 0
          ? Number(
              (
                ((week.numberOfPlayers - score.position) /
                  week.numberOfPlayers) *
                100
              ).toFixed(1)
            ).toFixed(1)
          : 0.0;
    });
  });

  // calculate the win percentage for each username
  weeksData.reduceRight(
    (acc, week) => {
      week.scores.forEach((score) => {
        const totalWins =
          (acc.totalWinsByUser.get(score.username) || 0) + score.wins;
        acc.totalWinsByUser.set(score.username, totalWins);
        const totalNumberOfPlayers =
          (acc.totalNumberOfPlayers.get(score.username) || 0) +
          score.wins +
          score.losses;
        acc.totalNumberOfPlayers.set(score.username, totalNumberOfPlayers);
        score.annualWinPercentage =
          totalWins > 0
            ? Number((totalWins / totalNumberOfPlayers) * 100).toFixed(2)
            : "0.00";
      });
      return {
        totalWinsByUser: acc.totalWinsByUser,
        totalNumberOfPlayers: acc.totalNumberOfPlayers,
      };
    },
    { totalWinsByUser: new Map(), totalNumberOfPlayers: new Map() }
  );

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
      numberOfPlayers: week.scores.length,
    }));

  // fill in position values
  const sortedWeeksWithPositions = sortedWeeks.map((week, weekIndex) => {
    const scoresData = week.scores.map((score, scoreIndex) => ({
      ...score,
      position: scoreIndex + 1,
    }));
    return {
      ...week,
      scores: scoresData,
    };
  });

  const allUsernames = new Set(
    sortedWeeksWithPositions.flatMap((week) => week.scores.map((score) => score.username))
  );

  const cumulativeWeeksData = sortedWeeksWithPositions.map((week, index) => {
    // add a score of 0 for any username in allUsernames but not in the scores
    allUsernames.forEach((username) => {
      if (!week.scores.find((s) => s.username === username)) {
        week.scores.push({ username, points: 0 });
      }
    });
    const scores = week.scores.map((score) => {
      let cumulativePoints = 0;
      for (let i = index; i < sortedWeeksWithPositions.length; i++) {
        const weekScores = sortedWeeksWithPositions[i].scores;
        const scoreObj = weekScores.find((s) => s.username === score.username);
        if (scoreObj) {
          cumulativePoints += scoreObj.points;
        }
      }
      return { ...score, cumulativePoints };
    });
    return { ...week, scores };
  });

  cumulativeWeeksData.forEach((week, weekIndex) => {
    week.scores.forEach((score) => {
      score.losses = score.position > 0 ? score.position - 1 : 0;
      score.wins = week.numberOfPlayers - score.position;
      score.winPercentage =
        week.numberOfPlayers > 0
          ? Number(
              (
                ((week.numberOfPlayers - score.position) /
                  week.numberOfPlayers) *
                100
              ).toFixed(1)
            ).toFixed(1)
          : 0.0;
    });
  });

  // calculate the win percentage for each username
  cumulativeWeeksData.reduceRight(
    (acc, week) => {
      week.scores.forEach((score) => {
        const totalWins =
          (acc.totalWinsByUser.get(score.username) || 0) + (score.wins || 0);
        acc.totalWinsByUser.set(score.username, totalWins);
        const totalNumberOfPlayers =
          (acc.totalNumberOfPlayers.get(score.username) || 0) +
          (score.wins || 0) +
          (score.losses || 0);
        acc.totalNumberOfPlayers.set(score.username, totalNumberOfPlayers);
        score.seasonWinPercentage =
          totalWins > 0
            ? Number((totalWins / totalNumberOfPlayers) * 100).toFixed(2)
            : "0.00";
      });
      return {
        totalWinsByUser: acc.totalWinsByUser,
        totalNumberOfPlayers: acc.totalNumberOfPlayers,
      };
    },
    { totalWinsByUser: new Map(), totalNumberOfPlayers: new Map() }
  );

  const weeksData = cumulativeWeeksData.map((weekData) => {
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
