import React from "react"

const Form = () => (
  <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-2 md:gap-6">

    <div className="mt-5 md:mt-0 md:col-span-2">
    <p className="text-5xl text-center mb-5">Contact us</p>

      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white dark:bg-gray-900 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-50">
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm text-gray-800 border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium dark:text-gray-50">
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm text-gray-800 border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email_address" className="block text-sm font-medium dark:text-gray-50">
                  Email address
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm text-gray-800 border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium dark:text-gray-50">
                  Your budget
                </label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  autoComplete="budget"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm text-gray-800 sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium dark:text-gray-50">
                  Inquiry description
                </label>
                <textarea
                  type="text"
                  name="inquiry"
                  id="Inquiry"
                  autoComplete="Inquiry"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm text-gray-800 sm:text-sm border-gray-300 rounded-md"
                />
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-gray-50 font-medium rounded-md bg-blue-500 dark:text-gray-800 dark:bg-gray-50 hover:bg-blue-600 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

)

export default Form