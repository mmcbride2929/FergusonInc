const Contact = () => {
  return (
    <div
      id="location"
      className="px-4 py-8 w-full rounded  sm:px-6 lg:px-8
        shrink-0 grow-0 basis-auto flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto gap-4"
    >
      <div className="w-full lg:w-1/2  ">
        <h2 className="pt-6 pb-2 text-center bg-gray-100 rounded text-xl font-bold text-black sm:text-3xl">
          Location & Hours
        </h2>
        <div className="flex flex-col justify-center p-8  bg-gray-100 max-w-100  rounded">
          <div className="mb-8 w-full shrink-0 grow-0 basis-auto   xl:px-12  mx-auto  max-w-sm ">
            <div className="flex items-start max-w-xs sm:max-w-sm">
              <div className=" grow text-md">
                <p className="mb-1 font-bold dark:text-white">Location </p>
                <p className="text-black dark:text-neutral-200">
                  1234 Broad St. City, Ohio 12345
                </p>

                {/* <p className="text-black dark:text-neutral-200">
                  1496 Huguelet St. Akron, Ohio 44305
                </p> */}
              </div>
            </div>
          </div>
          <div className="mb-8 w-full shrink-0 grow-0 basis-auto   xl:px-12 max-w-sm mx-auto">
            <div className="flex items-start">
              <div className=" grow text-md max-w-xs sm:max-w-sm">
                <p className="mb-1 font-bold dark:text-white">Contact</p>
                {/* <p className="text-black dark:text-neutral-200">
                  cjrobinson326@gmail.com
                </p>
                <p className="text-black dark:text-neutral-200">
                  (330)-957-2041
                </p> */}
                <p className="text-black dark:text-neutral-200">
                  genericemail@gmail.com
                </p>
                <p className="text-black dark:text-neutral-200">
                  (330)-123-1234
                </p>
              </div>
            </div>
          </div>
          <div className=" mb-4 w-full shrink-0 grow-0 basis-auto   xl:px-12  mx-auto  max-w-sm ">
            <div className="align-start text-md flex">
              <div className=" grow">
                <p className="mb-1 font-bold dark:text-white">Hours</p>
                <ul className="flex flex-col text-md max-w-xs sm:max-w-sm">
                  <li className="flex justify-between">
                    Monday<span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                    Tuesday<span>5:45pm - 7:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    Wednesday<span>4:45pm - 7:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    Thursday<span>4:45pm - 7:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    Friday<span>5:45pm - 7:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    Saturday<span>8:30am - 2:30pm</span>
                  </li>
                  <li className="flex justify-between">
                    Sunday<span>12:00pm - 3:00pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white lg:mt-0   block w-full lg:w-1/2 rounded shrink-0 grow-0 basis-auto lg:flex  ">
        <div className="h-[400px] lg:h-full w-full">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.529969831041!2d-81.46769972374376!3d41.079265871340674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883129041286fb3b%3A0xe88c3f277792e8be!2s1496%20Huguelet%20St%2C%20Akron%2C%20OH%2044305!5e0!3m2!1sen!2sus!4v1687186440914!5m2!1sen!2sus"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3057.9017169566546!2d-82.97258172402131!3d39.96595005225089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1687445201355!5m2!1sen!2sus"
            className=" inset-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
