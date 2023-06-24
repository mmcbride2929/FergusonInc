import image1 from '../../assets/image_4.png'
import image2 from '../../assets/image_5.png'
import image3 from '../../assets/image_7.png'
import image4 from '../../assets/image_8.png'

const RecentClients = () => {
  return (
    <div className="px-4   sm:px-6 lg:px-8">
      <section>
        <div className="max-w-screen-xl py-8 mx-auto ">
          {/* <header className="text-center bg-gray-100 px-8 sm:px-16 p-16 rounded">
            <h2 className="text-xl font-bold text-black sm:text-3xl">
              Recent Clients
            </h2>

            <p className="max-w-md  mx-auto mt-2 text-black text-left">
              Discover Our Impressive Portfolio of Recent Work. Book An
              Appointment With Us Today.
            </p>
          </header> */}

          <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <div className="block overflow-hidden group">
                <img
                  src={image1}
                  alt=""
                  className="rounded h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
            <li>
              <div className="block overflow-hidden group">
                <img
                  src={image2}
                  alt=""
                  className="rounded h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
            <li>
              <div className="block overflow-hidden group">
                <img
                  src={image3}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
            <li>
              <div className="block overflow-hidden group">
                <img
                  src={image4}
                  alt=""
                  className="rounded rounded h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
export default RecentClients
