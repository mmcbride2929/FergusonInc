import Sidebar from './Sidebar'
import { Link } from 'react-scroll'

const Nav = ({ sidebarActive, setSidebarActive }) => {
  return (
    <header className="bg-white">
      {sidebarActive ? (
        <Sidebar
          setSidebarActive={setSidebarActive}
          sidebarActive={sidebarActive}
        />
      ) : (
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between ">
          <a className="block font-bold" href="/">
            Pressure Cuts
          </a>

          <div className="flex items-center gap-4  ">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    <a
                      className="text-black transition border-b border-solid border-transparent hover:border-black hover:border-b-2 cursor-pointer"
                      href="#about"
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="gallery" smooth={true} duration={500}>
                    <a
                      className="text-black transition border-b border-solid border-transparent hover:border-black hover:border-b-2 cursor-pointer"
                      href="gallery"
                    >
                      Gallery
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="location" smooth={true} duration={500}>
                    <a
                      className="text-black transition border-b border-solid border-transparent hover:border-black hover:border-b-2 cursor-pointer"
                      href="#location"
                    >
                      Location
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              className="block rounded bg-gray-200 p-2.5 text-gray-500 transition hover:text-gray-900/75 md:hidden"
              onClick={() => setSidebarActive(true)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
export default Nav
