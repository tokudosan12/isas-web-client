import { topCandidates } from "../services/leaderboardservice";

export default function TopCandidates() {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-3">
      {topCandidates.map((candidate) => (
        <div
          key={candidate.id}
          className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FACC15] text-lg font-extrabold text-slate-900">
            #{candidate.rank}
          </div>

          <img
            src={candidate.avatar}
            alt={candidate.name}
            className="mx-auto my-4 h-20 w-20 rounded-full border-4 border-slate-100 object-cover"
          />

          <h3 className="text-xl font-bold text-pine">{candidate.name}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">{candidate.position}</p>

          <div className="mt-4 text-3xl font-extrabold text-[#D9A900]">{candidate.score}</div>
        </div>
      ))}
    </div>
  );
}
