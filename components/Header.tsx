import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around items-center pt-6 pb-16">
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="#" className="text-white font-bold tracking-wide">Home</Link></li>
          <li><Link href="#" className="text-slate-400">Guestbook</Link></li>
          <li><Link href="#" className="text-slate-400">Dashboard</Link></li>
          <li><Link href="#" className="text-slate-400">Blog</Link></li>
          <li><Link href="#" className="text-slate-400">Snippets</Link></li>
        </ul>
      </nav>
      <button type="button" className="bg-gray-600 bg-opacity-60 rounded-lg p-2 hover:ring-2 ring-gray-300 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </button>
    </header>
  )
}
