const GalleryHero = () => {
  return (
    <div className="px-4  mx-auto sm:px-6 lg:px-8  py-8" id="gallery">
      <section>
        <div className="max-w-screen-xl  mx-auto gap-4    ">
          <header className="text-center bg-gray-100 px-8 sm:px-16 p-16 p-16 rounded">
            <h2 className="text-xl font-bold black sm:text-3xl">
              Featured Work
            </h2>

            <p className="max-w-md mx-auto mt-2 text-black text-left">
              This is where we can add one of your best jobs, or a client who
              got the best package you offer with multiple shots of the job.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="object-cover w-full transition duration-500 rounded aspect-square  group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <a
                    // href="https://pressure-cuts.square.site/"
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
                  src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="object-cover rounded w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <a
                    // href="https://pressure-cuts.square.site/"
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
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  className="object-cover w-full rounded transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <a
                    // href="https://pressure-cuts.square.site/"
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
