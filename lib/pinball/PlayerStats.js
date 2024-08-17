import _ from "lodash";
import LeaderboardStats from "@/lib/pinball/LeaderboardStats";

function worstPerformanceWeek(data, username) {
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
    );
}

function bestPerformanceWeek(data, username) {
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
    );
}

function userSummaryData(positionWeeksData, seasonWeeksData, username) {
  const sortedUsers = Array.from(
    positionWeeksData
      .flatMap((week) => week.scores)
      .reduce((acc, user) => {
        if (user.gamesPlayedPercentage > 0.5 && !acc.has(user.username)) {
          acc.set(user.username, {
            username: user.username,
            userAvatarUrl: user.userAvatarUrl,
            winPercentage: user.winPercentage,
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
      annualWinPercentage: score.winPercentage,
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
   * SEASON STATS
   ********************************** */
  user.seasonBestPerformanceTable = "N/A";
  user.seasonBestPerformancePosition = 0;
  user.seasonBestPerformancePlayers = 0;
  user.seasonWorstPerformanceTable = "N/A";
  user.seasonWorstPerformancePosition = 0;
  user.seasonWorstPerformancePlayers = 0;

  const seasonBestPerformanceWeek = bestPerformanceWeek(
    positionWeeksData.filter((week) => week.season === 5),
    username
  );
  if (seasonBestPerformanceWeek.overPerformed !== 0) {
    user.seasonBestPerformanceTable = seasonBestPerformanceWeek.table;
    user.seasonBestPerformancePosition =
      seasonBestPerformanceWeek.scores.findIndex(
        (s) => s.username === username
      ) + 1;
    user.seasonBestPerformancePlayers = seasonBestPerformanceWeek.scores.length;
  }

  const seasonWorstPerformanceWeek = worstPerformanceWeek(
    positionWeeksData.filter((week) => week.season === 5),
    username
  );
  if (seasonWorstPerformanceWeek.underPerformed !== 0) {
    user.seasonWorstPerformanceTable = seasonWorstPerformanceWeek.table;
    user.seasonWorstPerformancePosition =
      seasonWorstPerformanceWeek.scores.findIndex(
        (s) => s.username === username
      ) + 1;
    user.seasonWorstPerformancePlayers =
      seasonWorstPerformanceWeek.scores.length;
  }

  const seasonUser = seasonWeeksData
    .flatMap((week) => week.scores)
    .find((score) => score.username === username);
  user.seasonWinPercentage = seasonUser ? seasonUser.seasonWinPercentage : 0;

  /*************************************
   * ANNUAL STATS
   ********************************** */
  user.annualBestPerformanceTable = "N/A";
  user.annualBestPerformancePosition = 0;
  user.annualBestPerformancePlayers = 0;
  user.annualWorstPerformanceTable = "N/A";
  user.annualWorstPerformancePosition = 0;
  user.annualWorstPerformancePlayers = 0;

  const annualBestPerformanceWeek = bestPerformanceWeek(
    positionWeeksData,
    username
  );
  if (annualBestPerformanceWeek.overPerformed !== 0) {
    user.annualBestPerformanceTable = annualBestPerformanceWeek.table;
    user.annualBestPerformancePosition =
      annualBestPerformanceWeek.scores.findIndex(
        (s) => s.username === username
      ) + 1;
    user.annualBestPerformancePlayers = annualBestPerformanceWeek.scores.length;
  }

  const annualWorstPerformanceWeek = worstPerformanceWeek(
    positionWeeksData,
    username
  );
  if (annualWorstPerformanceWeek.underPerformed !== 0) {
    user.annualWorstPerformanceTable = annualWorstPerformanceWeek.table;
    user.annualWorstPerformancePosition =
      annualWorstPerformanceWeek.scores.findIndex(
        (s) => s.username === username
      ) + 1;
    user.annualWorstPerformancePlayers =
      annualWorstPerformanceWeek.scores.length;
  }

  return user;
}

export default function PlayerSummaryData(data, username) {
  const { rankedPlayers, positionWeeksData, seasonWeeksData } = LeaderboardStats(data);
  const user = userSummaryData(positionWeeksData, seasonWeeksData, username);
  let userPositionData,
    playerRivals,
    userSeasonData,
    userSeasonRivalsByWinPercentage,
    userSeasonRivalsByPoints,
    userSeasonSummary = null;

  if (user) {
    const sortedUsernames = seasonWeeksData[0].scores
      .sort((a, b) => b.cumulativePoints - a.cumulativePoints)
      .map((user) => user.username);

    userSeasonSummary = seasonWeeksData[0].scores.find(
      (score) => score.username === username
    );
    userSeasonSummary.numberOfPlayers = seasonWeeksData[0].scores.length;
    userSeasonSummary.position = sortedUsernames.indexOf(username) + 1;

    const sortedByWinPercentage = seasonWeeksData[0].scores.sort(
      (a, b) => b.seasonWinPercentage - a.seasonWinPercentage
    );

    const startIndex = Math.max(
      0,
      sortedByWinPercentage.findIndex((s) => s.username === username) - 2
    );
    const endIndex = Math.min(sortedByWinPercentage.length - 1, startIndex + 5);

    userSeasonRivalsByWinPercentage = {
      ...seasonWeeksData[0],
      scores: sortedByWinPercentage.slice(startIndex, endIndex),
    };

    const sortedByPoints = seasonWeeksData[0].scores.sort(
      (a, b) => b.cumulativePoints - a.cumulativePoints
    );

    const startIndexByPoints = Math.max(
      0,
      sortedByPoints.findIndex((s) => s.username === username) - 2
    );
    const endIndexByPoints = Math.min(
      sortedByPoints.length,
      startIndexByPoints + 5
    );

    userSeasonRivalsByPoints = {
      ...seasonWeeksData[0],
      scores: sortedByPoints.slice(startIndexByPoints, endIndexByPoints),
    };

    userSeasonData = seasonWeeksData.map((week) => ({
      ...week,
      scores: week.scores.filter((score) => score.username === username),
    }));

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
      rankedPlayerIndex >= 2
        ? rankedPlayers[rankedPlayerIndex - 2]
        : undefined;
    const higherRankPlayer =
      rankedPlayerIndex >= 1
        ? rankedPlayers[rankedPlayerIndex - 1]
        : undefined;
    const lowerRankPlayer =
      rankedPlayerIndex >= 0 &&
      rankedPlayerIndex < rankedPlayers.length
        ? rankedPlayers[rankedPlayerIndex + 1]
        : undefined;

    playerRivals = [{ ...twoUpRankPlayer }, { ...higherRankPlayer }, { ...lowerRankPlayer }].filter(
      (rival) => rival !== undefined
    );
  }

  return {
    user,
    playerRivals,
    userSeasonRivalsByWinPercentage,
    userSeasonRivalsByPoints,
    userSeasonSummary,
    userPositionData,
    userSeasonData,
  };
}
