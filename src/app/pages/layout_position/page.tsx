import React from 'react'

function page() {
  return (
    <div>

<h1 className="mb-3">Position</h1>
    <div className="relative w-1/2 h-40 bg-green-200">
      <p>Relative</p>
      <div className="absolute bottom-0 right-0 bg-teal-500 p-4">
        <p>Absolute</p>
      </div>
    </div>

    <div className="relative w-1/2 h-40 bg-green-200 mt-5 mb-5">
      <p>Relative</p>
      <div className="absolute left-0 top-0 h-16 w-16 bg-teal-500">
        <p>Absolute</p>
      </div>
    </div>

    <div className="relative w-1/2 h-40 bg-green-200 mt-5 mb-5">
      <p>Relative</p>
      <div className="absolute right-0 top-0 h-16 w-16 bg-teal-500">
        <p>Absolute</p>
      </div>
    </div>

    <div className="relative w-1/2 h-40 bg-green-200 mt-5 mb-5">
      <p>Relative</p>
      <div className="absolute bottom-0 h-16 w-16 bg-teal-500">
        <p>Absolute</p>
      </div>
    </div>

    <h1 className="mb-3">Display</h1>
    <div className="bg-indigo-100 p-10 mb-10 w-[600px]">
      <span className="inline">1. This is display inline and will wrap normally</span>
      (this gebrish will added as an inline text)
      <span className="inline-block">2. This is display inline-block and will not extend beyond its
        parent</span>
      <span className="block"
        >3. This is display block and will move to its own line</span>
      <span className="hidden">This is display none and will not display at all</span>
    </div>

    </div>
  )
}

export default page