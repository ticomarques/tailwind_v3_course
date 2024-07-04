import React from 'react'

function page() {
  return (
    <div>

<div className="border m-10">
      <ul className="flex">
        <li className="bg-teal-100 m-5 p-5">01</li>
        <li className="bg-teal-100 m-5 p-5">02</li>
        <li className="bg-teal-100 m-5 p-5">03</li>
        <li className="bg-teal-100 m-5 p-5">04</li>
        <li className="bg-teal-100 m-5 p-5">05</li>
      </ul>
    </div>

    {/* https://tailwindcss.com/docs/flex-direction#column */}
    <div className="border m-10">
      <ul className="flex flex-col">
        <li className="bg-teal-100 m-5 p-5">01</li>
        <li className="bg-teal-100 m-5 p-5">02</li>
        <li className="bg-teal-100 m-5 p-5">03</li>
        <li className="bg-teal-100 m-5 p-5">04</li>
        <li className="bg-teal-100 m-5 p-5">05</li>
      </ul>
    </div>

    {/* https://tailwindcss.com/docs/justify-items */}
    <div className="border m-10">
      <div className="border">
        <ul className="flex justify-start">
          <li className="bg-teal-100 m-5 p-5">01</li>
          <li className="bg-teal-100 m-5 p-5">02</li>
          <li className="bg-teal-100 m-5 p-5">03</li>
          <li className="bg-teal-100 m-5 p-5">04</li>
          <li className="bg-teal-100 m-5 p-5">05</li>
        </ul>
      </div>
      <div className="border">
        <ul className="flex justify-end">
          <li className="bg-teal-100 m-5 p-5">01</li>
          <li className="bg-teal-100 m-5 p-5">02</li>
          <li className="bg-teal-100 m-5 p-5">03</li>
          <li className="bg-teal-100 m-5 p-5">04</li>
          <li className="bg-teal-100 m-5 p-5">05</li>
        </ul>
      </div>
      <div className="border">
        <ul className="flex justify-center">
          <li className="bg-teal-100 m-5 p-5">01</li>
          <li className="bg-teal-100 m-5 p-5">02</li>
          <li className="bg-teal-100 m-5 p-5">03</li>
          <li className="bg-teal-100 m-5 p-5">04</li>
          <li className="bg-teal-100 m-5 p-5">05</li>
        </ul>
      </div>
      <div className="border">
        <ul className="flex justify-between">
          <li className="bg-teal-100 m-5 p-5">01</li>
          <li className="bg-teal-100 m-5 p-5">02</li>
          <li className="bg-teal-100 m-5 p-5">03</li>
          <li className="bg-teal-100 m-5 p-5">04</li>
          <li className="bg-teal-100 m-5 p-5">05</li>
        </ul>
      </div>
      <div className="border">
        <ul className="flex justify-around">
          <li className="bg-teal-100 m-5 p-5">01</li>
          <li className="bg-teal-100 m-5 p-5">02</li>
          <li className="bg-teal-100 m-5 p-5">03</li>
          <li className="bg-teal-100 m-5 p-5">04</li>
          <li className="bg-teal-100 m-5 p-5">05</li>
        </ul>
      </div>
    </div>

    {/* https://tailwindcss.com/docs/order */}
    <div className="border m-10">
      <ul className="flex">
        <li className="bg-teal-100 m-5 p-5 order-5">01</li>
        <li className="bg-teal-100 m-5 p-5 order-4">02</li>
        <li className="bg-teal-100 m-5 p-5 order-3">03</li>
        <li className="bg-teal-100 m-5 p-5 order-2">04</li>
        <li className="bg-teal-100 m-5 p-5 order-1">05</li>
      </ul>
    </div>

    {/* Grow and shrink */}
    {/* https://tailwindcss.com/docs/flex-shrink */}
    <div className="border m-10">
      <div className="flex w-100">
        {/* flex-none: Prevent item from growing or shrinking */}
        <div className="p-5 m-3 w-64 bg-teal-100 flex-none">01</div>
        {/* flex-initial:  Allow item to shrink but not grow, taking into account its initial size  */}
        <div className="p-5 m-3 w-64 bg-teal-100 flex-initial">02</div>
        {/* flex-auto: Allow item to grow and shrink, taking into account its initial size */}
        <div className="p-5 m-3 w-64 bg-teal-100 flex-auto">03</div>
        {/* flex-1: Allow item to grow and shrink as needed, ignoring its initial size */}
        <div className="p-5 m-3 w-64 bg-teal-100 flex-1">04</div>
        <div className="p-5 m-3 bg-teal-100">05</div>
        <div className="p-5 m-3 bg-teal-100">06</div>
        <div className="p-5 m-3 bg-teal-100">07</div>
      </div>
    </div>

    </div>
  )
}

export default page