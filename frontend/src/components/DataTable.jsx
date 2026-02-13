import React, { useMemo, useState } from 'react';
import Pagination from './Pagination';

function TableRow({ row }) {
  return (
    <tr className="border-b border-slate-700">
      <td className="px-4 py-2 text-sm">{row.id}</td>
      <td className="px-4 py-2 text-sm">{row.name}</td>
      <td className="px-4 py-2 text-sm">{row.email}</td>
      <td className="px-4 py-2 text-sm">{row.role}</td>
      <td className="px-4 py-2 text-sm">{row.status}</td>
    </tr>
  );
}

export default function DataTable({ data }) {
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  return (
    <div className="bg-slate-800/50 rounded-lg p-4">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-slate-400 text-sm border-b border-slate-700">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((r) => (
            <TableRow key={r.id} row={r} />
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <Pagination
          current={page}
          totalPages={Math.ceil(data.length / pageSize)}
          onChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
}
