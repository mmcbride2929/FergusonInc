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
                    Before/after section
                  </h2>

                  <p className="mt-1 text-black text-left">
                    At Pressure Cuts we take pride in providing unmatched,
                    consistently great cuts for a sharp and unique look.
                  </p>
                </header>

                <a
                  to="/gallery"
                  className="inline-block px-12 py-3 mt-5 text-sm border font-bold text-white transition bg-black rounded hover:shadow  hover:bg-transparent hover:border hover:border-black shadow hover:text-black focus:ring active:text-gray-600"
                >
                  GALLERY
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 ">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <div className="block group">
                    <img
                      src="https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2016/07/10-skin-fade-with-line-up.jpg?resize=500%2C600&ssl=1"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />
                  </div>
                </li>

                <li>
                  <div className="block group">
                    <img
                      src="https://menshairstyle.funtouzy.com/wp-content/uploads/2019/12/Top-30-Best-African-American-Mens-Hairstyles-2020-Cool-Haircuts-for-Black-Men-Short-Line-up-with-Goatee.jpg"
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
