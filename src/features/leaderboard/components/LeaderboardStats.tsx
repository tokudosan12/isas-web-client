import { useLanguage } from "../../../shared/languages";

const stats = [
  { labelKey: "leaderboard.totalCandidates", value: "1,250" },
  { labelKey: "leaderboard.totalInterviews", value: "5,430" },
  { labelKey: "leaderboard.averageScore", value: "84.6" },
];

export default function LeaderboardStats() {
  const { t } = useLanguage();

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.labelKey} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t(stat.labelKey)}</p>
          <h3 className="mt-3 text-4xl font-extrabold text-pine">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}
