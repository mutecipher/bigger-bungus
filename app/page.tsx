import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center px-8">
        <main className="flex flex-col justify-center px-8 mb-16">
          <h1 className="text-white font-bold text-5xl mb-2">Cory Hutchison</h1>
          <h2 className="tracking-wide mb-4">Software Engineer III at <span className="font-bold">Weedmaps</span></h2>
          <p className="text-slate-500 max-w-lg">Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.</p>
        </main>

        <section className="flex flex-col justify-center px-8 mb-16">
          <h3 className="text-white font-bold text-4xl mb-4">Featured Posts</h3>

          <div className="flex gap-6 flex-col md:flex-row">
            <Link href="#" className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold pb-10">
                  Everything I Know About Style Guides, Design Systems, and Component Libraries
                </div>
                <div className="flex items-center text-gray-200 capsize">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg>
                  <span className="pl-2">123,123</span>
                </div>
              </div>
            </Link>
            <Link href="#" className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold pb-10">
                  Rust Is The Future of Web Development
                </div>
                <div className="flex items-center text-gray-200 capsize">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg>
                  <span className="pl-2">32,432</span>
                </div>
              </div>
            </Link>
            <Link href="#" className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold pb-10">
                  Past, Present, and Future of React State Management
                </div>
                <div className="flex items-center text-gray-200 capsize">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg>
                  <span className="pl-2">183,281</span>
                </div>
              </div>
            </Link>
          </div>

          <Link href="#" className="flex items-center mt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6">
            <span>
              Read all posts
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </Link>
        </section>

        <section className="flex flex-col justify-center px-8 mb-16">
          <h3 className="text-white font-bold text-4xl mb-4">Learn Ruby on Rails &amp; Next.js</h3>
          <p className="text-gray-400 mb-4">Build and deploy a modern Saas application using the most popular open-source software. This course is 12 hours long and is completely live streamed.</p>
          <Link href="#" className="w-full">
            <div className="w-full border-b border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-baseline">
                <div className="flex space-x-6">
                  <span className="text-gray-500 dark:text-gray-400 text-left mr-6">01</span>
                  <h4 className="text-lg font-medium w-full text-gray-100">Introduction to Ruby on Rails</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">1:03:43</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-100">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="w-full">
            <div className="w-full border-b border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-baseline">
                <div className="flex space-x-6">
                  <span className="text-gray-500 dark:text-gray-400 text-left mr-6">02</span>
                  <h4 className="text-lg font-medium w-full text-gray-100">Working with ActiveRecord</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">23:12</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-100">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="w-full">
            <div className="w-full border-b border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-baseline">
                <div className="flex space-x-6">
                  <span className="text-gray-500 dark:text-gray-400 text-left mr-6">03</span>
                  <h4 className="text-lg font-medium w-full text-gray-100">Scaffolding Your Next.js Project</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">3:23:34</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-100">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="w-full">
            <div className="w-full border-b border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-baseline">
                <div className="flex space-x-6">
                  <span className="text-gray-500 dark:text-gray-400 text-left mr-6">04</span>
                  <h4 className="text-lg font-medium w-full text-gray-100">Connecting Next.js to Your Rails Backend</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">2:12:32</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-100">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="flex items-center mt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6">
            <span>
              Watch all videos
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </Link>
        </section>
      </div>
    </>
  )
}
