import { leaderboardData } from "../services/leaderboardservice";
import { useLanguage } from "../../../shared/languages";

export default function LeaderboardTable() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead className="bg-pine text-white">
            <tr>
              <th className="px-5 py-4 text-sm font-bold">{t("leaderboard.rank")}</th>
              <th className="px-5 py-4 text-sm font-bold">{t("leaderboard.candidate")}</th>
              <th className="px-5 py-4 text-sm font-bold">{t("leaderboard.position")}</th>
              <th className="px-5 py-4 text-sm font-bold">{t("leaderboard.level")}</th>
              <th className="px-5 py-4 text-sm font-bold">{t("leaderboard.score")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {leaderboardData.map((candidate) => (
              <tr key={candidate.id} className="transition hover:bg-slate-50">
                <td className="px-5 py-4 font-bold text-pine">#{candidate.rank}</td>

                <td className="flex items-center gap-3 px-5 py-4 font-semibold text-slate-800">
                  <img
                    src={candidate.avatar}
                    alt={candidate.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  {candidate.name}
                </td>

                <td className="px-5 py-4 text-slate-600">{candidate.position}</td>
                <td className="px-5 py-4 text-slate-600">{candidate.level}</td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#FACC15] px-3 py-1 text-sm font-bold text-slate-900">
                    {candidate.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
