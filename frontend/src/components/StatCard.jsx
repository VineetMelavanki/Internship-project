import React from 'react';

export default function StatCard({ title, value, change, icon }) {
  return (
    <div className="bg-slate-800/60 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-300">{title}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
        </div>
        {icon && <div className="text-indigo-400">{icon}</div>}
      </div>
      {change && (
        <p className="mt-3 text-sm text-slate-400">{change}</p>
      )}
    </div>
  );
}
