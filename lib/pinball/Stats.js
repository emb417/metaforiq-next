export function calcPlayerStats(data) {
  const userStats = data
    .flatMap((week) => week.scores)
    .reduce((acc, user) => {
      if (!acc.has(user.username)) {
        acc.set(user.username, {
          username: user.username,
          userAvatarUrl: user.userAvatarUrl,
          weeksPlayed: 0,
          wins: 0,
          losses: 0,
          totalPoints: 0,
          winPercentage: 0,
          rollingAveragePosition: 0,
        });
      }
      const userData = acc.get(user.username);
      userData.wins += user.wins || 0;
      userData.losses += user.losses || 0;
      userData.totalPoints += user.points || 0;
      userData.weeksPlayed += user.weeksPlayed || 1;
      return acc;
    }, new Map());

  // Calculate end values
  userStats.forEach((userData) => {
    userData.winPercentage =
      userData.wins + userData.losses > 0
        ? ((userData.wins / (userData.wins + userData.losses)) * 100).toFixed(2)
        : 0;
    userData.averagePoints = (userData.totalPoints / userData.weeksPlayed).toFixed(2);
    userData.averagePosition =
      (data.reduce((sum, week) => {
        const score = week.scores.find((s) => s.username === userData.username);
        return sum + (score ? score.position : 0);
      }, 0) / data.filter((week) => week.scores.some((s) => s.username === userData.username)).length).toFixed(2);
    userData.recentAveragePosition =
      (data
        .slice(0, 13)
        .reduce((sum, week) => {
          const score = week.scores.find((s) => s.username === userData.username);
          return sum + (score ? score.position : 0);
        }, 0) / data.slice(0, 13).filter((week) => week.scores.some((s) => s.username === userData.username)).length).toFixed(2);
  });

  return Array.from(userStats.values())
    .sort((a, b) => b.gamesPlayed - a.gamesPlayed)
    .map((user, index) => ({ ...user, rank: index + 1 }));
}

function positionStats(data) {
  const sortedWeeks = Array.from(
    new Set(
      data
        .find((obj) => obj.channelName === "competition-corner")
        .weeks.filter((week) => !isNaN(parseInt(week.weekNumber)))
    )
  )
    .sort((a, b) => b.weekNumber - a.weekNumber)
    .slice(0, 52)
    .map((week) => ({
      ...week,
      weekNumber: parseInt(week.weekNumber),
      numberOfPlayers: week.scores.length,
    }));

  sortedWeeks.forEach((week) => {
    week.scores.forEach((score, index) => {
      score.position = index + 1;
      score.wins = week.numberOfPlayers - score.position;
      score.losses = score.position - 1;
    });
  });

  return sortedWeeks;
}

export default function PlayerStats(data) {
  const positionWeeksData = positionStats(data);
  const playerStats = calcPlayerStats(positionWeeksData);

  return playerStats;
}
