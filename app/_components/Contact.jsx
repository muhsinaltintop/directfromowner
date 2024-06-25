'use client'
import { useRef } from 'react';

const Contact = () => {
    const checkboxRef = useRef(null);
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
          <div className="lg:py-10 text-center">
            <h1 className="max-w-xl mx-auto  text-gray-900 text-2xl font-semibold mb-2">
              Personalised Real Estate Analysis Service!
            </h1>
            <p className="text-lg">
              Fill out the form below to schedule a free preliminary
              consultation with us.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
              <div className="grid gap-4 text-center lg:grid-cols-3 pb-8">
               <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="name"
                    id="name"
                  />
                  </div>
               
                <div>
                  <label className="sr-only" htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="mobile-number"
                    id="number"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="E-mail Address"
                    type="email"
                    id="email"
                  />
                </div>
                </div>
              </form>
           

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Your message here..."
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="flex items-start mt-3 ">
              <input
                type="checkbox"
                id="permission"
                ref={checkboxRef}
                className="h-5 w-5 relative rounded border-gray-300 bg-white shadow-sm mr-2"
              />
              <label htmlFor="permission" className="text-center font-light inline-block text-xs text-gray-500 hover:cursor-pointer">
                By filling out this form, you are giving permission for a consultant from the UK Property Analysis and Consultancy Firm to contact you via phone, SMS, or email. The information you have entered into the form will not be shared with third parties.
              </label>
            </div>
            
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex ring-1 px-7 py-2 hover:bg-blue-900 rounded-full bg-blue-600 font-medium text-white sm:w-auto"
                disabled={!checkboxRef.current?.checked}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
