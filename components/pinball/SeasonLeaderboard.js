export default function SeasonLeaderboard({ weeksData }) {
    const sortedUsernames = weeksData[0].scores
        .filter((score) => score.cumulativePoints !== null)
        .reduce((acc, score) => {
            if (!acc.some((item) => item.username === score.username)) {
                acc.push({ username: score.username, cumulativePoints: score.cumulativePoints });
            } else {
                const user = acc.find((item) => item.username === score.username);
                user.cumulativePoints += score.cumulativePoints;
            }
            return acc;
        }, [])
        .sort((a, b) => b.cumulativePoints - a.cumulativePoints)
        .map((user) => user.username);

    return (
        <div className="flex flex-col items-center ml-4">
            {sortedUsernames.map((username, index) => (
                <div key={username} className="flex items-center mb-1 text-white justify-center border-2 border-teal-950 rounded-lg px-1 w-full bg-slate-950">
                    {index + 1}. {username} ({weeksData[0].scores.find((score) => score.username === username).cumulativePoints})
                </div>
            ))}
        </div>
    );
}
