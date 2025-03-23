export default function CreateAccount() {
  return (
    <>
      <section className="bg-gray-100">
        <div className=" ml-18 mr-16 mb-16 pl-2 pr-2 pb-4 pt-4">
          <div className="mb-8">
            <img src="Image\KekaLogoBlack.svg" alt="Logo" />
          </div>

          <div className=" grid grid-cols-2 gap-4">
            {/* Left Section end */}
            <div className="p-6 bg-white drop-shadow-lg rounded-lg">
              <div className="text-2xl font-semibold mb-6">
                <p>Get free trial</p>
              </div>
              <form action="">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col  border-1 border-gray-200 rounded-sm p-2 text-sm text-gray-600">
                    <label htmlFor="FirstName">First Name*</label>
                    <input
                      type="text"
                      id="FirstName"
                      name="FirstName"
                      required
                      className=" border-none outline-none"
                    ></input>
                  </div>
                  <div className="flex flex-col border-1 border-gray-200 rounded-sm p-2 text-sm text-gray-600">
                    <label htmlFor="LastName">Last Name*</label>
                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      required
                      className=" border-none outline-none"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col mt-6 border-1 border-gray-200 rounded-sm p-2 text-sm text-gray-600">
                  <label htmlFor="WorkEmail">Work Email*</label>
                  <input
                    type="text"
                    id="WorkEmail"
                    name="WorkEmail"
                    required
                    className=" border-none outline-none"
                  ></input>
                </div>

                <div className="flex flex-col mt-6 border-1 border-gray-200 rounded-sm p-2 text-sm text-gray-600">
                  <label htmlFor="PhoneNumber">Phone Number*</label>
                  <input
                    type="text"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    required
                    className=" border-none outline-none"
                  ></input>
                </div>

                <div className="flex flex-col mt-6 border-1 border-gray-200 rounded-sm p-2 text-sm text-gray-600">
                  <label htmlFor="CompanyName">Company Name*</label>
                  <input
                    type="text"
                    id="CompanyName"
                    name="CompanyName"
                    required
                    className=" border-none outline-none"
                  ></input>
                </div>

                <div className="flex flex-col mt-6 border-1 border-gray-200 rounded-sm p-2 text-sm text-gray-600">
                  <label htmlFor="NoOfEmployees">Number of Employees*</label>
                  <div className="grid grid-cols-2 ">
                    <label for="Numb" className="text-lg text-black">
                      Please Select
                    </label>
                    <select
                      id="Numb"
                      name="Numb"
                      className="border-none outline-none"
                    >
                      <option value="1 to 49">1 to 49</option>
                      <option value="50 to 99">50 to 99</option>
                      <option value="100 to 249">100 to 249</option>
                      <option value="250 to 499">250 to 499</option>
                      <option value="500 to 999">500 to 999</option>
                      <option value="1000 to 5000">1000 to 5000</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1">
                  <button className="bg-blue-600 rounded-md p-3 text-white text-lg">
                    Get Started
                  </button>
                </div>

                <div className="mt-4 ml-34 ">
                  <p className="text-gray-400 ">
                    Already have an account?{" "}
                    <span className="text-blue-500 cursor-pointer">
                      Login here
                    </span>
                  </p>
                </div>
              </form>
            </div>

            {/* Left Section end */}

            {/* Right Section Start */}
            <div className="">
              <div className="flex pl-22 pt-4">
                <div className="pr-12">
                  <img src="Image\Parul_Bhat.jpg" alt="Image_Cus" className="w-78  rounded-full"/>
                </div>
                <div>
                  <p className="mb-4 text-[17px] text-gray-500">
                    "After careful evaluation of every other HR Payroll product,
                    we picked Keka and never regretted the decision. It helped
                    us scale from 50 to 400+ employees in last two years"
                  </p>
                  <h4 className="text-lg text-black font-semibold">Parul Bhat</h4>
                  <span className="text-[17px] text-gray-500">Srijan Technologies</span>
                </div>
              </div>
            </div>
            {/* Right Section Start */}
          </div>
        </div>
      </section>
    </>
  );
}
