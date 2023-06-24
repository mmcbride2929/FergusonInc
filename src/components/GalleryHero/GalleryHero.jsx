import image from '../../assets/image_1.png'
import image2 from '../../assets/image_4.png'
import image3 from '../../assets/image_6.png'

const GalleryHero = () => {
  return (
    <div className="px-4  mx-auto sm:px-6 lg:px-8  py-8" id="gallery">
      <section>
        <div className="max-w-screen-xl  mx-auto gap-4    ">
          <header className="text-center bg-gray-100 px-8 sm:px-16 p-16 p-16 rounded">
            <h2 className="text-xl font-bold black sm:text-3xl">
              Check Out Our Recent Work
            </h2>

            <p className="max-w-md mx-auto mt-2 text-black text-left">
              {' '}
              We Provide a barbershop experience that leaves our customers
              pleased on their very first visit. Our commitment to exceptional
              service ensures that our customers not only return but choose us
              as their trusted go-to barber.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full transition duration-500 rounded aspect-square  group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <a
                    href="https://pressure-cuts.square.site/"
                    className="mt-1.5 inline-block rounded bg-black hover:bg-transparent hover:border border-black hover:border-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src={image2}
                  alt=""
                  className="object-cover rounded w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <a
                    href="https://pressure-cuts.square.site/"
                    className="mt-1.5 inline-block rounded bg-black hover:bg-transparent hover:border border-black hover:border-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src={image3}
                  alt=""
                  className="object-cover w-full rounded transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <a
                    href="https://pressure-cuts.square.site/"
                    className="mt-1.5 inline-block rounded bg-black hover:bg-transparent hover:border border-black hover:border-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
export default GalleryHero
