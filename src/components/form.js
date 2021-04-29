import React from "react"

const Form = () => (
  <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-2 md:gap-6">
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                  Your budget
                </label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  autoComplete="budget"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                  Inquiry description
                </label>
                <textarea
                  type="text"
                  name="inquiry"
                  id="Inquiry"
                  autoComplete="Inquiry"
                  className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
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