import React from 'react';

export default function Pagination({ current, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        className="px-3 py-1 rounded bg-slate-700 text-sm"
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 rounded ${p === current ? 'bg-indigo-500' : 'bg-slate-700'} text-sm`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, current + 1))}
        className="px-3 py-1 rounded bg-slate-700 text-sm"
      >
        Next
      </button>
    </div>
  );
}
