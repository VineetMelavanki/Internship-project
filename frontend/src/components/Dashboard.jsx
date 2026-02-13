import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StatCard from './StatCard';
import DataTable from './DataTable';

const sampleStats = [
  { title: 'Revenue', value: '$32,400', change: '+4.5%' },
  { title: 'Users', value: '4,210', change: '+2.1%' },
  { title: 'Orders', value: '1,124', change: '+1.8%' },
  { title: 'Growth', value: '12%', change: '+0.6%' },
];

const sampleData = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Admin' : 'Member',
  status: i % 2 === 0 ? 'Active' : 'Pending',
}));

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-slate-900 text-slate-100">
      <Sidebar />

      <div className="flex-1 p-4">
        <Topbar />

        <main className="mt-4 space-y-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleStats.map((s) => (
              <StatCard key={s.title} {...s} />
            ))}
          </section>

          <section>
            <h3 className="mb-3 text-lg font-semibold">Users</h3>
            <DataTable data={sampleData} />
          </section>
        </main>
      </div>
    </div>
  );
}
