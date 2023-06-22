import { Link } from 'react-scroll'

const Sidebar = ({ setSidebarActive }) => {
  return (
    <div>
      <div className="flex h-screen flex-col  justify-between  bg-white">
        <div className="px-4 py-4 h-full ">
          <button
            className=" block rounded bg-gray-200 p-2.5 text-gray-500 transition hover:text-gray-900/75 md:hidden"
            onClick={() => setSidebarActive(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.95 5.636l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <ul className="h-full flex flex-col justify-center space-y-1">
            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#about"
                className="block rounded-lg px-4 py-2 text-5xl  font-medium text-black hover:bg-gray-100 "
              >
                About
              </a>
            </li>

            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#gallery"
                className="block rounded-lg px-4 py-2 text-5xl font-medium text-black hover:bg-gray-100 "
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                onClick={() => setSidebarActive(false)}
                href="#location"
                className="block rounded-lg px-4 py-2 text-5xl font-medium text-black hover:bg-gray-100 "
              >
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
