import React from 'react';

const NavLink = ({ children }) => (
  <a className="block px-3 py-2 rounded-md text-slate-200 hover:bg-slate-700">{children}</a>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900/60 border-r border-slate-700 p-4 hidden md:block">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Acme UI</h2>
        <p className="text-sm text-slate-400">Admin Dashboard</p>
      </div>

      <nav className="space-y-1">
        <NavLink>Dashboard</NavLink>
        <NavLink>Users</NavLink>
        <NavLink>Settings</NavLink>
        <NavLink>Analytics</NavLink>
      </nav>
    </aside>
  );
}



