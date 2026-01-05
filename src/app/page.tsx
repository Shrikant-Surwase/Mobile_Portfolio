import Image from 'next/image';
import { doto, figtree } from './fonts';
import dp from '../../public/dp.jpeg';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center antialiased">
      <header className="w-full flex flex-wrap items-center justify-between px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4">
        <div className="flex items-baseline gap-2 text-xs sm:text-sm text-[#fafafa]">
          <span className="tracking-widest">IN 09:02 pm</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-locate-fixed text-gray-400"
            aria-hidden="true"
          >
            <line x1="2" x2="5" y1="12" y2="12"></line>
            <line x1="19" x2="22" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="2" y2="5"></line>
            <line x1="12" x2="12" y1="19" y2="22"></line>
            <circle cx="12" cy="12" r="7"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-xs sm:text-sm text-[#fafafa]">Maharashtra, India</span>
        </div>
      </header>
      <section className="flex justify-center pt-6 sm:pt-10 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-700 flex items-center justify-center transition-transform duration-200 hover:scale-[1.04] focus:scale-[1.04]"
                aria-label="Shrikant's GitHub"
                href="https://github.com"
              >
                <Image
                  src={dp}
                  className="object-cover w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full pointer-events-none select-none"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </a>
            </div>
            <div>
              <h1 className="font-bold font-doto tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
                Shrikant Survase
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-[#8ab4f8] text-left font-normal tracking-wider">
                React Native Developer • SDE 1 at Greytip Software
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 font-figtree max-w-xl text-xs sm:text-sm text-[#fafafa] leading-5 sm:leading-6 text-left font-normal">
            <p className="text-gray-400">
              I&apos;m <span className="text-white">Shrikant Survase</span>, a React Native
              Developer currently working as <span className="text-white">SDE 1</span> at{' '}
              <span className="text-white">Greytip Software Pvt</span>. I love building mobile
              applications that make a difference.
            </p>
            <p className="text-gray-400">
              I&apos;ve worked on <span className="text-white">three mobile apps</span> including{' '}
              <span className="text-white">Greythr</span> (an HRMS platform),{' '}
              <span className="text-white">Drively</span> (a car booking app), and a college mobile
              app for students to view notices and timetables.
            </p>
            <p className="text-gray-400">
              I&apos;m passionate about <span className="text-white">React Native</span> development
              and always eager to learn new technologies and best practices to build better mobile
              experiences.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 mb-3 sm:mb-4">
            <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              >
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c766ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c766ff]"></span>
                </span>
                <span className="whitespace-nowrap sm:whitespace-normal">
                  Available for new opportunities
                </span>
                <svg
                  height="16"
                  width="16"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 382 382"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      style={{ fill: '#0077B7' }}
                      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1u4u70fgH880BDfA5F4m6MlsVlrDQuENx/view"
                target="_blank"
                rel="noopener noreferrer"
                download=""
                className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download text-gray-400"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-4">
            <p className="text-gray-400 text-sm border-dashed border-t border-[#27272a] pt-2 mb-4">
              Where to find me <span className="text-white font-medium">(digitally)</span> if you
              wish to
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
              href="mailto:heysurvase@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail text-gray-400"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              Email Me
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
              href="https://x.com/SuvaseShrikant"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter text-gray-400"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
              href="https://github.com/Shrikant-Surwase"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github text-gray-400"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
              href="https://www.linkedin.com/in/shrikant-survase-5211531b1/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin text-gray-400"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              Linkedin
            </a>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <h1 className="font-bold font-doto tracking-wider text-xl sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa] border-dashed border-t border-[#27272a] pt-2">
            Skills{' '}
            <span className="text-xs sm:text-sm text-[#404040] font-normal font-jetbrains-mono tracking-wider block sm:inline mt-1 sm:mt-0">
              Which I use/know
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 mb-4">
            These are the technologies I&apos;ve learned and worked with. This list is constantly
            evolving as I continue to learn and grow as a developer.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  className="flex items-center cursor-pointer bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
                  type="button"
                  aria-label="JavaScript"
                >
                  <Image
                    alt="JavaScript icon"
                    loading="lazy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    src="/skills/javascript.svg"
                  />
                  <span>JavaScript</span>
                </button>
                <button
                  className="flex items-center cursor-pointer bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
                  type="button"
                  aria-label="TypeScript"
                >
                  <Image
                    alt="TypeScript icon"
                    loading="lazy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    src="/skills/typescript.svg"
                  />
                  <span>TypeScript</span>
                </button>
                <button
                  className="flex items-center cursor-pointer bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
                  type="button"
                  aria-label="React Native"
                >
                  <Image
                    alt="React Native icon"
                    loading="lazy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    src="/skills/react-native.png"
                  />
                  <span>React Native</span>
                </button>
              </div>
            </div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
                Frameworks / Libraries
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  className="flex items-center cursor-pointer bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none"
                  type="button"
                  aria-label="React"
                >
                  <Image
                    alt="React icon"
                    loading="lazy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    src="/skills/react.svg"
                  />
                  <span>React</span>
                </button>
              </div>
            </div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
                Backend &amp; Runtime
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {/* Add your backend/runtime skills here */}
              </div>
            </div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
                Database
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {/* Add your database skills here */}
              </div>
            </div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
                Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {/* Add your developer tools here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <h1 className="font-bold font-doto tracking-wider text-[26px] leading-6 sm:leading-8 text-[#fafafa] border-dashed border-t border-[#27272a] pt-2">
            Work
            <span className="text-xs pl-5 font-jetbrains-mono sm:text-sm text-[#404040] font-normal tracking-wider">
              Here is my work experience!
            </span>
          </h1>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="border border-[#27272a] rounded-lg p-4 sm:p-6 hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-white text-base sm:text-xl font-medium mb-1">
                    SDE 1 • React Native Developer
                  </h3>
                  <p className="text-[#8ab4f8] text-sm">Greytip Software Pvt Ltd</p>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Present</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Working as a Software Development Engineer 1, specializing in React Native mobile
                app development.
              </p>
              <div className="space-y-3">
                <div className="border-l-2 border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent px-3 py-2">
                  <p className="text-white text-sm font-medium mb-1">Greythr</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    HRMS platform - A comprehensive human resource management system mobile
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="border border-[#27272a] rounded-lg p-4 sm:p-6 hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-white text-base sm:text-xl font-medium mb-1">
                    Freelance Developer
                  </h3>
                  <p className="text-[#8ab4f8] text-sm">Freelance</p>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Present</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Developed a car booking mobile application as a freelance project, delivering a
                complete solution for seamless car rental bookings and management.
              </p>
              <div className="space-y-3">
                <div className="border-l-2 border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent px-3 py-2">
                  <p className="text-white text-sm font-medium mb-1">Drively</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Car booking app - A mobile application for booking and managing car rentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-6 sm:mb-8 border-dashed border-t border-[#27272a] pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm text-gray-400">
              Here are some of my <span className="text-white font-medium">Projects</span>
            </p>
          </div>
          <div className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6 border-dashed border-b border-[#27272a] pb-2">
              Web
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: SocialX"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="SocialX"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2FsocialX.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2FsocialX.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2FsocialX.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">SocialX</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          className="text-gray-400 pr-1 sm:pr-2 cursor-pointer opacity-65 hover:opacity-100 transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="View Demo"
                        >
                          <img
                            alt="Play demo"
                            loading="lazy"
                            width="18"
                            height="18"
                            decoding="async"
                            data-nimg="1"
                            className="w-[18px] h-[18px] sm:w-5 sm:h-5"
                            style={{ color: 'transparent' }}
                            src="/Projects/play.svg"
                          />
                        </button>
                        <button
                          className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      SocialX - An Instagram scheduler that lets you plan, schedule, and post with
                      ease.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: Polaroid"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="Polaroid"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2Fpolaroid.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2Fpolaroid.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2Fpolaroid.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">Polaroid</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0"></div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      Polaroid - A free polaroid photo generator app
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: MusicBass"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="MusicBass"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2FMusic%20bass.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2FMusic%20bass.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2FMusic%20bass.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">MusicBass</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      A web app that turns sheet music into sound and insight, helping musicians
                      learn faster and play smarter.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: StudyBro"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="StudyBro"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2FstudyBro.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2FstudyBro.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2FstudyBro.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">StudyBro</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      A study app that combines all of the prove studying technique to help you
                      study better.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: Ecolens"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="Ecolens"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2Fecolens.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2Fecolens.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2Fecolens.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">Ecolens</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      A smart app that unites air and water quality tracking to help you make
                      eco-friendly choices effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6 border-dashed border-b border-[#27272a] pb-2">
              Chrome Extension
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: BagThat"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="BagThat"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2FBag%20That.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2FBag%20That.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2FBag%20That.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">BagThat</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      A browser extension that automatically finds and applies the best coupons,
                      making online shopping effortless and affordable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6 border-dashed border-b border-[#27272a] pb-2">
              VSCode Extension
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div
                className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
                role="button"
                tabIndex={0}
                aria-label="Open project: Icetea"
              >
                <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
                  <img
                    alt="Icetea"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ color: 'transparent' }}
                    srcSet="/_next/image?url=%2FProjects%2Ficetea.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2FProjects%2Ficetea.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FProjects%2Ficetea.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl text-white truncate">Icetea</h3>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                          className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                          aria-label="GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github sm:w-5 sm:h-5"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                      Enjoy a collection of unique, dark, and vibrant themes inspired by popular
                      anime series and characters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-6 sm:mb-8 border-dashed border-t border-[#27272a] pt-6">
            <p className="text-gray-400 text-sm sm:text-base">
              Here are some <span className="text-white font-medium">blogs</span> I&apos;ve written
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#27272a] rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 w-full transition-all duration-300 hover:bg-[#0e0e0e] hover:border-[#35353a] hover:scale-[1.01] cursor-pointer"
              aria-label="Read blog: How to Create Your First Vs Code Extension"
              href="https://medium.com/@EvapourtedSoul/how-to-build-publish-your-first-vs-code-theme-extension-20668e8a0b30"
            >
              <span className="font-figtree text-sm sm:text-base text-white truncate">
                How to Create Your First Vs Code Extension
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-white transition-colors flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#27272a] rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 w-full transition-all duration-300 hover:bg-[#0e0e0e] hover:border-[#35353a] hover:scale-[1.01] cursor-pointer"
              aria-label="Read blog: Get Your Own Free Domain via GitHub"
              href="https://medium.com/@EvapourtedSoul/get-your-own-free-domain-via-github-ed6785f86817"
            >
              <span className="font-figtree text-sm sm:text-base text-white truncate">
                Get Your Own Free Domain via GitHub
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-white transition-colors flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#27272a] rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 w-full transition-all duration-300 hover:bg-[#0e0e0e] hover:border-[#35353a] hover:scale-[1.01] cursor-pointer"
              aria-label="Read blog: I’ve Always Been Good at Leaving (a non-tech read)"
              href="https://medium.com/@EvapourtedSoul/ive-always-been-good-at-leaving-1facafa610af"
            >
              <span className="font-figtree text-sm sm:text-base text-white truncate">
                I’ve Always Been Good at Leaving (a non-tech read)
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-white transition-colors flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <p className="text-gray-400 pb-3 sm:pb-4 text-xs sm:text-sm mt-3 sm:mt-4">
            Still <span className="text-white font-medium">Scrolling?</span> Now I think, you should
            hire me
          </p>
          <div className="text-left border-dashed border-t border-[#27272a] pt-4 sm:pt-6">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/5fFQBL8Pnvnc9uszdadT7i?utm_source=generator&amp;theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
            ></iframe>
            <p className="text-white text-xs sm:text-sm mt-3 sm:mt-4">
              currently on repeat{' '}
              <span className="text-gray-400 font-medium">You should listen to her </span>
              <span className="text-white">other songs</span>
              <span className="text-gray-400"> as well.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="py-4 w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-2 gap-2 pt-2">
            <h1 className="font-bold font-doto tracking-wider text-lg sm:text-[26px] leading-6 sm:leading-8 text-[#fafafa] border-dashed border-t border-[#27272a] pt-3 sm:pt-4">
              Interactive Experience
            </h1>
            <p className="text-[10px] pb-2 font-figtree sm:text-sm text-[#404040] font-normal tracking-wider">
              i love interactive stuff so enjoy this!
            </p>
            <div className="mx-auto w-full max-w-2xl">
              <div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-white/10 shadow-sm bg-white/5">
                <iframe
                  src="https://patatap.com/"
                  title="Patatap - Interactive Audio Visual Experience"
                  loading="lazy"
                  className="w-full h-[280px] sm:h-[380px] md:h-[420px] border-0"
                ></iframe>
              </div>
              <p className="text-[10px] font-jetbrains-mono pt-2 sm:text-sm text-[#404040] font-normal italic tracking-wider">
                press any key (a-z or spacebar) to create sounds and animations
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-5 sm:py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-6 sm:mb-8 border-dashed border-t border-[#27272a] pt-5 sm:pt-6">
            <p className="text-base sm:text-lg font-bold font-doto text-[#c766ff] tracking-wider">
              Shrikant Survase
            </p>
          </div>
          <div className="text-left font-jetbrains-mono space-y-1.5 sm:space-y-2">
            <p className="text-gray-600 text-[10px] sm:text-xs break-words">
              That&apos;s all, folks | Designed &amp; built with some caffiene ☕ and headache...
            </p>
            <p className="text-gray-600 text-[10px] sm:text-xs break-words">
              © Shrikant Survase. All rights reserved (even the bugs).
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
