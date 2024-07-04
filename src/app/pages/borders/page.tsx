import React from 'react'

function page() {
  return (
    <div>

<div className="border-2 border-green-100 m-10">
      <div className="w-96 m-3 p-5 border">Border All Around</div>
      <div className="w-96 m-3 p-5 border-4">Border Width</div>
      <div className="w-96 m-3 p-5 border-4 border-green-500">Colord Border</div>
      <div className="w-96 m-3 p-5 border-x-2 border-green-500">
        Border Applied To X Axies
      </div>

      <div className="w-96 m-3 p-5 border-y-2 border-green-500">
        Border Applied To Y Axies
      </div>
      <div className="w-96 m-3 p-5 border-r-2 border-green-500">Border Right</div>
      <div className="w-96 m-3 p-5 border-l-2 border-green-500">Border Left</div>
      <div className="w-96 m-3 p-5 border-b-2 border-green-500">Border Bottom</div>
      <div className="w-96 m-3 p-5 border-t-2 border-green-500">Border Top</div>
    </div>

    <div className="border-2 border-green-100 m-10">
      <div className="w-96 m-3 p-5 bg-teal-200 rounded">Border Rounded</div>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-lg">
        Border Rounded Large
      </div>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-xl">
        Border Rounded Extra Large
      </div>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-2xl">Border Rounded 2xl</div>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-3xl">Border 3xl</div>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-full">
        Border Rounded Full
      </div>

      <div className="w-96 m-3 p-5 bg-teal-200 rounded-t-xl">
        Border Top Rounded
      </div>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-b-xl">
        Border Bottom Rounded
      </div>
    </div>

    </div>
  )
}

export default page