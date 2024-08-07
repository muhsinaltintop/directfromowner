import Link from 'next/link'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { FaAt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const ContactDetails = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8">
          <div className="lg:py-10 text-center">
            <h1 className="max-w-xl mx-auto text-gray-900 text-2xl font-semibold mb-2">
              Contact Information
            </h1>
            <p className="text-lg">
              Feel free to contact us via our contact information.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <div className="mt-4">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-around">
                <div className="flex items-center gap-4">
                  <span className="inline-block rounded-lg bg-primary p-3">
                    <FaPhone className="text-xl sm:text-2xl" />
                  </span>
                  <div className="flex flex-col gap-4">
                    <Link
                      className="flex items-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                      href="tel:+447857399777"
                    >
                      <ReactCountryFlag
                        countryCode="GB"
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title="GB"
                        style={{
                          marginRight: "10px",
                          borderRadius: "50%",
                        }}
                      />
                      +44 7857 399 777
                    </Link>
                    <Link
                      className="flex items-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                      href="tel:+905322663463"
                    >
                      <ReactCountryFlag
                        countryCode="TR"
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title="TR"
                        style={{
                          marginRight: "10px",
                          borderRadius: "50%",
                        }}
                      />
                      +90 532 266 3463
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-block rounded-lg bg-primary p-3">
                    <FaAt className="text-xl sm:text-2xl" />
                  </span>
                  <Link
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="mailto:property@theglobalproperty.co.uk"
                  >
                    property@theglobalproperty.co.uk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
