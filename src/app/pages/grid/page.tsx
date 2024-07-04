import React from 'react'

function page() {
  return (
    <div className="p-10">

{/* https://tailwindcss.com/docs/grid-template-rows */}
    {/* Grid cols and rows */}
    <div className="w-100 grid grid-cols-3 grid-rows-4 gap-4">
      <div className="p-10 bg-green-200">01</div>
      <div className="p-10 bg-green-200">02</div>
      <div className="p-10 bg-green-200">03</div>
      <div className="p-10 bg-green-200">04</div>
      <div className="p-10 bg-green-200">05</div>
      <div className="p-10 bg-green-200">06</div>
      <div className="p-10 bg-green-200">07</div>
      <div className="p-10 bg-green-200">08</div>
      <div className="p-10 bg-green-200">09</div>
    </div>

    {/* Col and row span */}
    <div className="w-100 grid grid-cols-3 gap-4">
      <div className="bg-teal-200 col-span-2 row-span-2 p-10">01</div>
      <div className="p-10 bg-teal-200">02</div>
      <div className="p-10 bg-teal-200">03</div>
      <div className="p-10 bg-teal-200">04</div>
      <div className="p-10 bg-teal-200">05</div>
      <div className="p-10 bg-teal-200">06</div>

      <br />
      <br />
      <br />
      <br />

      <div className="p-10 bg-teal-200 col-span-3">07</div>
      <div className="p-10 bg-teal-200">08</div>
      <div className="p-10 bg-teal-200 col-span-2">09</div>
    </div>

    </div>
  )
}

export default page