import LeaderboardStats from "@/lib/pinball/LeaderboardStats";

function calculatePerformanceDifference(week, username, isWorst) {
  const userScore = week.scores.find((s) => s.username === username);
  if (!userScore) return 0;

  const difference = userScore.position - userScore.rollingAveragePosition;
  return isWorst ? Math.max(difference, 0) : Math.max(-difference, 0);
}

function worstPerformanceWeek(data, username) {
  return data
    .filter((week) =>
      week.scores.find((s) => s.username === username && s.score > 0)
    )
    .map((week) => ({
      ...week,
      underPerformed: calculatePerformanceDifference(week, username, true),
    }))
    .filter((week) => week.underPerformed)
    .reduce(
      (max, week) => (max.underPerformed > week.underPerformed ? max : week),
      { underPerformed: 0 }
    );
}

function bestPerformanceWeek(data, username) {
  return data
    .map((week) => ({
      ...week,
      overPerformed: calculatePerformanceDifference(week, username, false),
    }))
    .filter((week) => week.overPerformed)
    .reduce(
      (max, week) => (max.overPerformed > week.overPerformed ? max : week),
      { overPerformed: 0 }
    );
}

function updatePerformance(user, performanceWeek, type, username) {
  if (performanceWeek[type] !== 0) {
    const performanceType = type === 'overPerformed' ? 'annualBestPerformance' : 'annualWorstPerformance';
    user[performanceType].week = performanceWeek.weekNumber;
    user[performanceType].table = performanceWeek.table;
    user[performanceType].position = performanceWeek.scores.findIndex((s) => s.username === username) + 1;
    user[performanceType].players = performanceWeek.scores.length;
  }
}

function userSummaryData(positionWeeksData, username) {
  const sortedUsers = Array.from(
    positionWeeksData
      .flatMap((week) => week.scores)
      .reduce((acc, user) => {
        if (user.gamesPlayedPercentage > 0.5 && !acc.has(user.username)) {
          acc.set(user.username, {
            username: user.username,
            userAvatarUrl: user.userAvatarUrl,
            winPercentage: user.annualWinPercentage,
          });
        }
        return acc;
      }, new Map())
      .values()
  ).sort((a, b) => b.winPercentage - a.winPercentage);

  /*************************************
   * BASE META AND STATS
   * ********************************* */
  let user = positionWeeksData
    .flatMap((week) => week.scores)
    .map((score) => ({
      username: score.username,
      userAvatarUrl: score.userAvatarUrl,
      rollingAveragePosition: score.rollingAveragePosition,
      annualWinPercentage: score.annualWinPercentage,
      annualGamesPlayedPercentage: score.gamesPlayedPercentage,
      annualRank:
        score.gamesPlayedPercentage > 0.5
          ? sortedUsers.findIndex((u) => u.username === score.username) + 1
          : 0,
    }))
    .find((user) => user.username === username);

  if (user === undefined) {
    return null;
  }

  /*************************************
   * ANNUAL STATS
   ********************************** */
  user.annualBestPerformance = {
    week: 0,
    table: "N/A",
    position: 0,
    players: 0,
  };
  user.annualWorstPerformance = {
    week: 0,
    table: "N/A",
    position: 0,
    players: 0,
  };

  const annualBestPerformanceWeek = bestPerformanceWeek(positionWeeksData, username);
  updatePerformance(user, annualBestPerformanceWeek, 'overPerformed', username);
  
  const annualWorstPerformanceWeek = worstPerformanceWeek(positionWeeksData, username);
  updatePerformance(user, annualWorstPerformanceWeek, 'underPerformed', username);

  return user;
}

export default function PlayerSummaryData(data, username) {
  const { rankedPlayers, positionWeeksData } = LeaderboardStats(data);
  const user = userSummaryData(positionWeeksData, username);
  let userPositionData, playerRivals;
  if (user) {
    const positionWeeksDataPlusPosition = positionWeeksData.map((week) => ({
      ...week,
      score: week.scores.find((score) => score.username === username)?.score,
      points: week.scores.find((score) => score.username === username)?.points,
      position: week.scores.find((score) => score.username === username)
        ?.position,
      numberOfParticipants: week.scores.length,
    }));

    userPositionData = positionWeeksDataPlusPosition.map((week) => ({
      ...week,
      nextScore: week.scores[week.position - 2]?.score,
      nextPosition: week.scores[week.position - 2]?.position,
      nextPlayer: week.scores[week.position - 2]?.username || "1st Place",
    }));

    const rankedPlayerIndex = rankedPlayers.findIndex(
      (player) => player.username === username
    );

    const twoUpRankPlayer =
      rankedPlayerIndex >= 2 ? rankedPlayers[rankedPlayerIndex - 2] : undefined;
    const higherRankPlayer =
      rankedPlayerIndex >= 1 ? rankedPlayers[rankedPlayerIndex - 1] : undefined;
    const lowerRankPlayer =
      rankedPlayerIndex >= 0 && rankedPlayerIndex < rankedPlayers.length
        ? rankedPlayers[rankedPlayerIndex + 1]
        : undefined;

    playerRivals = [
      { ...twoUpRankPlayer },
      { ...higherRankPlayer },
      { ...lowerRankPlayer },
    ].filter((rival) => rival !== undefined);
  }

  return {
    user,
    playerRivals,
    userPositionData,
  };
}

