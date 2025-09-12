export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-400 text-xs text-gray-800 px-3 py-2 flex justify-between items-center z-50">
      {/* Left: Language & Currency */}
      <div className="flex gap-2">
        <span className="cursor-pointer">ENGLISH ▼</span>
        <span className="cursor-pointer">$ DOLLAR (US) ▼</span>
      </div>

      {/* Right: Quick Links */}
      <div className="flex gap-4">
        <span>WELCOME</span>
        <span className="cursor-pointer hover:underline">BLOG</span>
        <span className="cursor-pointer hover:underline">FAQ</span>
        <span className="cursor-pointer hover:underline">CONTACT US</span>
      </div>
    </div>
  );
}
