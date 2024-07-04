import React from 'react'

function page() {
  return (
    <div>
        <h1>1. Colors With Different Shades</h1>
        <p className="text-indigo-50">Tailwind</p>
        <p className="text-indigo-100">Tailwind</p>
        <p className="text-indigo-200">Tailwind</p>
        <p className="text-indigo-300">Tailwind</p>
        <p className="text-indigo-400">Tailwind</p>
        <p className="text-indigo-500">Tailwind</p>
        <p className="text-indigo-600">Tailwind</p>
        <p className="text-indigo-700">Tailwind</p>
        <p className="text-indigo-800">Tailwind</p>
        <p className="text-indigo-900">Tailwind</p>

        <br />
        <hr />
        <br />

        <h1>2. Background Colors</h1>
        <p className="bg-pink-600 text-white">Tailwind</p>
        <p className="bg-red-400 text-white">Tailwind</p>
        <p className="bg-blue-600 text-white">Tailwind</p>

        <br />
        <hr />
        <br />

        <h1>3. Text Decoration</h1>
        <p className="line-through">Tailwind</p>
        <p className="underline">Tailwind</p>
        <p className="overline">Tailwind</p>
        <p className="underline decoration-purple-400">Tailwind</p>
        <p className="text-purple-600 underline decoration-purple-400">Tailwind</p>

        <br />
        <hr />
        <br />

        <h1>4. Accent Colors</h1>
        <input type="checkbox" className="accent-indigo-500" defaultChecked />
        <input type="checkbox" className="accent-yellow-500" defaultChecked />
        <input type="checkbox" className="accent-red-300" defaultChecked />

        <br />
        <hr />
        <br />

        <h1>5. Arbitrary Colors</h1>
        <div className="bg-[#c0c0c0] h-10">Hello</div>
        <div className="text-[#ff0cd0] h-10">Hello</div>
        <div className="border border-[#ccc000] h-10">Hello</div>
        <br />
        <br />
    </div>
  )
}

export default page