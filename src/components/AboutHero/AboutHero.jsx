const AboutHero = () => {
  return (
    <>
      <section id="about">
        <div className="mx-auto max-w-screen-xl py-8 px-4 sm:px-6 ">
          <div className="max-w-full bg-gray-100">
            <h2 className="text-xl px-4 sm:px-0 p-16 text-center font-bold sm:text-3xl max-w-xl mx-auto rounded">
              How CJ Started a Business by Turning a Passion Into a Profession
            </h2>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="company-owner"
                src="https://scontent.fosu2-2.fna.fbcdn.net/v/t39.30808-6/344360699_1291809301370818_3718486960849207241_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5hKfbtMCtScAX8aFlch&_nc_ht=scontent.fosu2-2.fna&oh=00_AfBy9sFgWeFg47aHRiZNNkYLiCFzMkcK3CmMD68qac3LGA&oe=6497A121"
                className="absolute rounded inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-black">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutHero
