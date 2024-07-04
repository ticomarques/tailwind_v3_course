import React from 'react'

function page() {
  return (
    <div className="p-10">

<div className="mb-10">
      {/* No Transition */}
      <button className="p-5 text-white bg-blue-500 hover:bg-blue-700">
        Click me
      </button>

      {/* Transition */}
      {/* 1. https://tailwindcss.com/docs/transition-property */}
      {/* 2. https://tailwindcss.com/docs/transition-duration */}
      {/* 3. https://tailwindcss.com/docs/transition-timing-function */}
      {/* 4. https://tailwindcss.com/docs/transition-delay */}
      {/* 5. https://tailwindcss.com/docs/animation */}

      <button
        className="ml-5 p-5 bg-blue-500 transition hover:bg-teal-500 duration-300 ease-in-out delay-150 text-white"
      >
        With Transition
      </button>

      {/* Transition & Transform */}
      <button
        className="p-5 ml-5 text-white bg-blue-500 transition ease-in-out delay-150 duration-1000 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500"
      >
        Transformation
      </button>

      {/* Animation */}
      <div className="flex justify-center">
        <div className="p-20 ml-20 mt-20 w-20 bg-teal-200 animate-spin">Spin</div>
        <div className="p-20 ml-20 mt-20 w-20 bg-teal-200 animate-ping">Ping</div>
        <div className="p-20 ml-20 mt-20 w-20 bg-teal-200 animate-pulse">Pulse</div>
        <div className="p-20 ml-20 mt-20 w-20 bg-teal-200 animate-bounce">
          Bounce
        </div>
      </div>
    </div>

    </div>
  )
}

export default page