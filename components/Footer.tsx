export default function MinimalFooter() {
  return (
    <footer className="w-full py-10 flex flex-col items-center justify-center text-center">
      <p className="text-sm opacity-70 font-mono tracking-wide">
        Designed & Built by Anchal Sahani
      </p>

      {/* Optional GitHub stars + forks line */}
      <div className="flex items-center gap-4 mt-2 text-xs opacity-60 font-mono">
        <span>★ 0,123</span>
        <span>⤷ 0,045</span>
      </div>
    </footer>
  );
}
