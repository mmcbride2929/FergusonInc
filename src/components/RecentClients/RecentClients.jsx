const RecentClients = () => {
  return (
    <div className="px-4   sm:px-6 lg:px-8">
      <section>
        <div className="max-w-screen-xl py-8 mx-auto ">
          <header className="text-center bg-gray-100 px-8 sm:px-16 p-16 rounded">
            <h2 className="text-xl font-bold text-black sm:text-3xl">
              Recent Clients
            </h2>

            <p className="max-w-md  mx-auto mt-2 text-black text-left">
              Here we can show multiple types of work you've done, or just past
              clients to show you have an established clientele.
            </p>
          </header>

          <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <div className="block overflow-hidden group">
                <img
                  src="https://www.menshairstyletrends.com/wp-content/uploads/2016/06/rokkmanbarbers-curly-hair-low-fade-lineup-e1587224231997.jpg"
                  alt=""
                  className="rounded h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
            <li>
              <div className="block overflow-hidden group">
                <img
                  src="https://menshaircuts.com/wp-content/uploads/2021/09/line-up-haircut-drop-fade-short-black-683x1024.jpg"
                  alt=""
                  className="rounded h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
            <li>
              <div className="block overflow-hidden group">
                <img
                  src="https://pbs.twimg.com/profile_images/462229452479401984/hu7HTUH7_400x400.jpeg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-1 bg-gray-100"></div>
              </div>
            </li>
            <li>
              <div className="block overflow-hidden group">
                <img
                  src="https://menshaircuts.com/wp-content/uploads/2021/09/line-up-haircut-low-fade-messy-short-683x1024.jpg"
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
