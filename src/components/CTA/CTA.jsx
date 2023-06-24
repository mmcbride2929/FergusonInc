import { Link } from 'react-scroll'
import before from '../../assets/image_2.png'
import after from '../../assets/image_3.png'
const CTA = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left  py-6">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Experience It Firsthand
                  </h2>

                  <p className="mt-1 text-black text-left">
                    At Pressure Cuts we take pride in providing unmatched,
                    consistently great cuts for a sharp and unique look.
                  </p>
                </header>

                <Link
                  to="gallery"
                  smooth={true}
                  duration={500}
                  className="inline-block px-12 py-3 mt-8 text-sm border font-bold text-white transition bg-black rounded hover:shadow  hover:bg-transparent hover:border hover:border-black shadow hover:text-black focus:ring active:text-gray-600"
                >
                  <a href="#gallery">GALLERY</a>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 ">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <div className="block group">
                    <img
                      src={before}
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />
                  </div>
                </li>

                <li>
                  <div className="block group">
                    <img
                      src={after}
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CTA
