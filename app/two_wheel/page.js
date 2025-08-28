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
        <aside className="hidden md:flex md:w-64  flex-col bg-gray-900 text-white">
          <div className="h-16 flex items-center px-6 text-xl font-semibold border-b border-white/10">Admin Panel</div>
          <div className='flex flex-col justify-center items-center mt-6 mb-4'>
            <div className='rounded-full h-25 w-25  border  border-blue-600'>


            </div>
            <div className='text-white text-center mt-2'>
              shripad pawar
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
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
          <header className="h-16 bg-white border-b border-gray-200 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-gray-200 hover:bg-gray-50" aria-label="Open Menu">≡</button>
              <h1 className="text-lg md:text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <input className="hidden md:block h-9 w-56 rounded border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search…" />
              <button className="h-9 rounded px-3 bg-blue-600 text-white text-sm hover:bg-blue-500">New</button>
              <div className="h-9 w-9 rounded-full bg-gray-200" />
            </div>
          </header>
          <div className='h-10 w-full '>
            Two wheel 
          </div>

         
       
        </main>
      </div>
    </div>
  )
}

export default page
