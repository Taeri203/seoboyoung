export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-[#B9DBFF] bg-white/90 p-5 shadow-sm">
      <p className="text-sm font-black text-[#0052B8]">{label}</p>
      <strong className="mt-2 block text-2xl font-black text-[#11205A] md:text-3xl">{value}</strong>
    </div>
  );
}
