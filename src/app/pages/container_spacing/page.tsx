import React from 'react'

function page() {
  return (
    <div>

        <h1>Container Spacing</h1>

        <h3 className="uppercase">1. Margin</h3>
        <div className="m-4 bg-yellow-100">Margin all around</div>
        <div className="mx-4 bg-yellow-200">Margin from x axies</div>
        <div className="my-4 bg-yellow-300">Margin Y axies</div>
        <div className="mt-6 bg-yellow-400">Margin Top</div>
        <div className="mr-4 bg-yellow-500">Margin Right</div>
        <div className="ml-2 bg-yellow-700">Margin Left</div>
        <div className="mb-8 bg-yellow-600">Margin Bottom</div>

        <div className="m-[200px] bg-slate-700">2. Margin all around</div>

        <h3 className="my-4">3. Padding</h3>
        <div className="p-4 bg-lime-100">Padding all around</div>
        <div className="px-4 bg-lime-200">Padding X axies</div>
        <div className="py-4 bg-lime-300">Padding Y axies</div>
        <div className="pt-6 bg-lime-400">Padding Top</div>
        <div className="pr-4 bg-lime-500">Padding Right</div>
        <div className="pb-8 bg-lime-600">Padding Bottom</div>
        <div className="pl-2 bg-lime-700">Padding Left</div>


        <h3 className="my-4">Space Between X</h3>
        <div className="flex space-x-4">
        <div className="p-3 bg-teal-100">01</div>
        <div className="p-3 bg-teal-200">02</div>
        <div className="p-3 bg-teal-300">03</div>
        </div>

        <h3 className="my-4">Space Between Y</h3>
        <div className="flex flex-col space-y-4">
        <div className="p-3 bg-teal-400">01</div>
        <div className="p-3 bg-teal-500">02</div>
        <div className="p-3 bg-teal-600">03</div>
        </div>

    </div>
  )
}

export default page