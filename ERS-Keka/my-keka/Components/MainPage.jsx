export default function MainPage() {
  return (
    <>
      <section className=" flex m-16">
        <div className=" w-2xl p-12 mb-5">
          <h1 className="text-4xl text-gray-800 font-bold mb-5 ">
            Everything you need to <br /> build a great company
          </h1>
          <p className="text-gray-500 text-lg mb-5">
            Keka is your people enabler. From automation of people <br />{" "}
            processes to creating an engaged and driven culture, Keka <br />
            is all you need to build a good to great company.
          </p>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-[450px] mb-5">
            {/* Email Icon & Input Field */}
            <div className="flex items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6.75l8.25 5.25a1.5 1.5 0 001.5 0L21 6.75"
                />
              </svg>
            </div>

            <input
              type="email"
              placeholder="Your work email"
              className="w-full  px-3 text-gray-600 outline-none "
            />

            {/* Signup Button */}
            <button className="bg-blue-500 text-white p-1 font-medium hover:bg-blue-600 text-sm ">
              Signup for demo
            </button>
          </div>

          <div className=" p-2">
            <img src="Image\Frame-1.svg" alt=""/>
          </div>
        </div>

        <div className="pt-12">
          <img src="Image\hero-home.svg" alt="" />
        </div>
      </section>
    </>
  );
}
