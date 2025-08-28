import React from 'react'
import Link from 'next/link'

const KpiCard = ({ title, value, delta, negative }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        {delta && (
          <span className={`${negative ? 'text-red-600' : 'text-green-600'} text-xs font-medium`}>{delta}</span>
        )}
      </div>
    </div>
  )
}

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-64   flex-col bg-gray-900 text-white">
          <div className="h-16 flex items-center px-6 text-xl font-semibold border-b border-white/10">Admin Panel</div>
          <div className='flex flex-col justify-center items-center mt-6 mb-4'>
            <div className='rounded-full h-25 w-25  border  border-blue-600'>
            </div>
            <div className='text-white text-center mt-2'>
              shripad pawar
            </div>
          </div>

          <nav className="flex-1 p-4   space-y-1">
          <Link className="block rounded px-3 py-2 bg-white/10 hover:bg-white/15" href="#">Overview</Link>
            <Link className="block rounded px-3 py-2 hover:bg-white/10" href="/users">Users</Link>
            <Link className="block rounded px-3 py-2 hover:bg-white/10" href="/four_wheel">4 Wheelers</Link>
            <Link className="block rounded px-3 py-2 hover:bg-white/10" href="/two_wheel">2 Wheelers</Link>
            <Link className="block rounded px-3 py-2 hover:bg-white/10" href="/station">Stations</Link>
            <Link className="block rounded px-3 py-2 hover:bg-white/10" href="/payment">Payments</Link>
            <Link className="block rounded px-3 py-2 hover:bg-white/10" href="/setting">Settings</Link>
          </nav>
          <div className="p-4 border-t border-white/10 text-sm text-white/70">v1.0.0</div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="h-16  bg-white border-b border-gray-200 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center  gap-3">
              <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-gray-200 hover:bg-gray-50" aria-label="Open Menu">≡</button>
              <h1 className="text-lg md:text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <input className="hidden md:block h-9 w-56 rounded border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search…" />
              <button className="h-9 rounded px-3 bg-blue-600 text-white text-sm hover:bg-blue-500">New</button>
              <div className="h-9 w-9 rounded-full bg-gray-200" />
            </div>
          </header>

          {/* Content */}
          <section className="p-4 md:p-8 space-y-8">
            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <KpiCard title="Total Users" value="12,438" delta="↑ 4.2%" />
              <KpiCard title="Active Stations" value="312" delta="↑ 1.1%" />
              <KpiCard title="Monthly Revenue" value="$84,210" delta="↑ 6.7%" />
              <KpiCard title="Support Tickets" value="27" delta="↓ 12%" negative />
            </div>

            {/* Charts + Quick actions */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="xl:col-span-2 bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-semibold">Usage Trends</h2>
                  <span className="text-xs text-gray-500">Last 30 days</span>
                </div>
                <div className="h-56 grid place-items-center text-gray-400 text-sm">
                  Chart placeholder
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h2 className="font-semibold mb-3">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">Add User</button>
                  <button className="rounded border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">Create Station</button>
                  <button className="rounded border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">Issue Refund</button>
                  <button className="rounded border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">Send Notice</button>
                </div>
              </div>
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="font-semibold">Recent Users</h2>
                  <a href="#" className="text-sm text-blue-600 hover:underline">View all</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="text-left px-4 py-2 font-medium">Name</th>
                        <th className="text-left px-4 py-2 font-medium">Email</th>
                        <th className="text-left px-4 py-2 font-medium">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin' },
                        { name: 'Priya Sharma', email: 'priya@example.com', role: 'Manager' },
                        { name: 'Diego Pérez', email: 'diego@example.com', role: 'User' },
                        { name: 'Mina Lee', email: 'mina@example.com', role: 'User' }
                      ].map((u, i) => (
                        <tr key={i} className="odd:bg-white even:bg-gray-50">
                          <td className="px-4 py-2">{u.name}</td>
                          <td className="px-4 py-2">{u.email}</td>
                          <td className="px-4 py-2">
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{u.role}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="font-semibold">Recent Activity</h2>
                  <a href="#" className="text-sm text-blue-600 hover:underline">View all</a>
                </div>
                <ul className="divide-y divide-gray-200 text-sm">
                  {[
                    { title: 'New station approved', time: '2m ago' },
                    { title: 'User role updated', time: '18m ago' },
                    { title: 'Refund issued', time: '1h ago' },
                    { title: 'Weekly report generated', time: '3h ago' }
                  ].map((item, idx) => (
                    <li key={idx} className="px-4 py-3 flex items-center justify-between">
                      <span>{item.title}</span>
                      <span className="text-gray-500">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>
  )
}

export default page
