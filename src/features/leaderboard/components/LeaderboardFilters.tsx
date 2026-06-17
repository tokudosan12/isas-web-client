import { useLanguage } from "../../../shared/languages";

export default function LeaderboardFilters() {
  const { t } = useLanguage();
  const selectClassName =
    "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-pine/40 focus:border-pine";

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <select className={selectClassName}>
        <option>{t("leaderboard.allDomains")}</option>
      </select>

      <select className={selectClassName}>
        <option>{t("leaderboard.allLevels")}</option>
      </select>

      <select className={selectClassName}>
        <option>{t("leaderboard.thisMonth")}</option>
      </select>
    </div>
  );
}
