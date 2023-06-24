import { Link } from 'react-scroll'
import video from '../../assets/vid1.mp4'
import video2 from '../../assets/vid2.mp4'
import thumbnail from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'

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
                    <video
                      poster={thumbnail}
                      controls
                      src={video}
                      type="video/mp4"
                      className="object-cover w-full rounded aspect-square"
                    />
                  </div>
                </li>

                <li>
                  <div className="block group">
                    <video
                      poster={thumbnail2}
                      controls
                      src={video2}
                      type="video/mp4"
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
