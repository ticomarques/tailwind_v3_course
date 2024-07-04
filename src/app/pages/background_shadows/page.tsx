import React from 'react'

function page() {
  return (
    <div>

<div className="h-screen w-full bg-blue-500 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')`}}></div>


    <div className="flex flex-wrap">
      <div className="w-[400px] mt-10 ml-4 p-3 shadow-md">Shadow Medium</div>
      <div className="w-[400px] mt-10 ml-7 p-3 shadow-lg">Shadow Large</div>
      <div className="w-[400px] mt-10 ml-7 p-3 shadow-xl">Shadow Extra Large</div>
      <div className="w-[400px] mt-10 ml-7 p-3 shadow-2xl">
        Shadow 2x Extra Large
      </div>
      <div className="w-[400px] mt-10 ml-7 p-3 shadow-inner">Inner Shadow</div>

      <div className="w-[400px] mt-10 ml-7 p-3 shadow-lg shadow-teal-300/40">
        Colord Shadow
      </div>
    </div>

    <div className="h-40 bg-gradient-to-r from-pink-100 to-red-500 m-10 text-center p-40">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quas
      eaque doloribus esse, obcaecati consectetur aperiam odit, deserunt
      officiis natus magni perspiciatis iure quos hic eveniet ipsum voluptas?
      Corrupti, neque?
    </div>
    <div className="h-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 m-10 text-center p-40">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi enim
      optio illum necessitatibus dolorem harum eaque. Necessitatibus velit
      consectetur quisquam consequuntur perspiciatis, similique ad libero,
      dolores eum, quia perferendis.
    </div>

    </div>
  )
}

export default page