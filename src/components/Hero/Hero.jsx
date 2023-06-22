const Hero = () => {
  return (
    <div className="pb-8">
      <section className="relative hero-bg  bg-cover bg-center bg-no-repeat h-[65vh]">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
          <div className="max-w-xl text-center mx-auto">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              PRESSURE CUTS
            </h1>

            <p className="mt-2 max-w-sm m-auto sm:text-xl/relaxed text-white font-bold px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-center">
              <a
                // href="https://pressure-cuts.square.site/"
                className="block m-auto rounded bg-white hover:bg-transparent hover:border hover:border-white px-12 py-3 text-sm font-bold text-black  shadow hover:text-white focus:outline-none focus:ring active:text-gray-600 sm:w-auto ring-transparent"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero
