import { useState } from 'react';

export default function Dashboard() {
  const [stats] = useState([
    { name: 'Active Orders', value: '12' },
    { name: 'Inventory Items', value: '45' },
    { name: 'Partner Shops', value: '8' },
    { name: 'Monthly Revenue', value: '$24,500' },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-4 bg-white shadow rounded-lg p-6">
          <p className="text-gray-500">Your recent activity will appear here.</p>
        </div>
      </div>
    </div>
  );
}