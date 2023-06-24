import image from '../../assets/cj.jpg'

const AboutHero = () => {
  return (
    <>
      <section id="about">
        <div className="mx-auto max-w-screen-xl py-8 px-4 sm:px-6 ">
          <div className="max-w-full bg-gray-100">
            <h2 className="text-xl px-4 sm:px-0 p-16 text-center font-bold sm:text-3xl max-w-md mx-auto rounded">
              How I Turned a Lifelong Passion into a Business That I Am Proud Of
            </h2>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="company-owner"
                src={image}
                className="absolute rounded inset-0 h-full w-full object-cover object-top"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-black">
                <p>
                  My name is CJ, and I am the owner of Pressure Cuts. With a
                  lifelong passion for personalized styling and maintenance,
                  I've been honing my skills since I can remember. What started
                  as a hobby has now become my dream business, allowing me to
                  serve the community and connect with amazing clients like you.
                </p>

                <p>
                  I take pride in providing exceptional haircuts and a welcoming
                  atmosphere where you can relax and leave looking your absolute
                  best. I'm constantly striving to improve both personally and
                  professionally, ensuring that every interaction with my
                  clients is an exceptional experience.
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
