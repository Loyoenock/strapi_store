import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-black font-extrabold sm:text-5xl">
          Digital Market Place.
          <strong className="font-extrabold text-primary sm:block"> Access Free Learning Content. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed text-black">
         Browse through our online content and pick whatever is suitable for your learning need to acquire the most suitable skill of the 21 century
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
