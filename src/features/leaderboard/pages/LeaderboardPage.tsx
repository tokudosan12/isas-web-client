import LeaderboardStats from "../components/LeaderboardStats";
import TopCandidates from "../components/TopCandidates";
import LeaderboardFilters from "../components/LeaderboardFilters";
import LeaderboardTable from "../components/LeaderboardTable";
import { useLanguage } from "../../../shared/languages";

export default function LeaderboardPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 pb-16 pt-8">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16 xl:px-20">
        <div className="mb-4 inline-flex items-center rounded-full border border-[#FACC15]/50 bg-[#FACC15]/20 px-4 py-2 text-sm font-bold uppercase tracking-wide text-pine">
          {t("leaderboard.badge")}
        </div>

        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl">
          {t("leaderboard.title")}
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-slate-500">
          {t("leaderboard.subtitle")}
        </p>

        <LeaderboardStats />
        <TopCandidates />
        <LeaderboardFilters />
        <LeaderboardTable />
      </div>
    </div>
  );
}
