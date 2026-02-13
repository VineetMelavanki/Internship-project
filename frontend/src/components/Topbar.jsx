import React from 'react';

export default function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-transparent border-b border-slate-700">
      <div className="flex items-center gap-4">
        <button className="md:hidden btn">Menu</button>
        <div className="relative">
          <input
            placeholder="Search..."
            className="bg-slate-800/50 rounded-md px-3 py-2 w-64 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-slate-400">Notifications</div>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/32" alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="text-sm">Jane Doe</div>
        </div>
      </div>
    </header>
  );
}
