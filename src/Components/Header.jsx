import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-70"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to Our World
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:mt-6 sm:text-xl">
            Explore our services and join the community of innovators. Let's build the future together.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded-lg bg-gray-700 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-600"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  )
}

export default Header
