import _ from "lodash";

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

export default function LeaderboardStats(data) {
  return {
    positionWeeksData: positionStats(data),
    seasonWeeksData: seasonStats(data),
  };
}
