import React from 'react'

function page() {
  return (
    <div>

        <h1>Width All Around</h1>
        <div className="bg-teal-100 p-5">
            <div className="bg-teal-600 w-0">0</div>
            <div className="bg-teal-600 w-1">1</div>
            <div className="bg-teal-600 w-1.5">1.5</div>
            <div className="bg-teal-600 w-2">2</div>
            <div className="bg-teal-600 w-3">3</div>
            <div className="bg-teal-600 w-5">5</div>
            <div className="bg-teal-600 w-6">6</div>
            <div className="bg-teal-600 w-7">7</div>
            <div className="bg-teal-600 w-8">8</div>
            <div className="bg-teal-600 w-9">9</div>
            <div className="bg-teal-600 w-10">10</div>
            <div className="bg-teal-600 w-11">11</div>
            <div className="bg-teal-600 w-12">12</div>
            <div className="bg-teal-600 w-14">14</div>
            <div className="bg-teal-600 w-16">16</div>
            <div className="bg-teal-600 w-20">20</div>
            <div className="bg-teal-600 w-24">24</div>
            <div className="bg-teal-600 w-28">28</div>
            <div className="bg-teal-600 w-32">32</div>
            <div className="bg-teal-600 w-36">36</div>
            <div className="bg-teal-600 w-64">64</div>
            <div className="bg-teal-600 w-80">80</div>
            <div className="bg-teal-600 w-96">96</div>
        </div>

        <h1 className="mt-5">Percentages</h1>
        <div className="bg-teal-200 mb-5 p-5">
            <div className="bg-green-400 p-2 mb-4 w-1/2">1/2</div>
            <div className="bg-green-400 p-2 mb-4 w-1/3">1/3</div>
            <div className="bg-green-400 p-2 mb-4 w-2/3">2/3</div>
            <div className="bg-green-400 p-2 mb-4 w-1/4">1/4</div>
            <div className="bg-green-400 p-2 mb-4 w-2/4">2/4</div>
            <div className="bg-green-400 p-2 mb-4 w-3/4">3/4</div>
            <div className="bg-green-400 p-2 mb-4 w-1/5">1/5</div>
        </div>

        <h1 className="mt-5">Max Width</h1>
        <div className="bg-yellow-100 p-10 mb-10 max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia
        soluta harum officia, repellat odit ratione, eligendi voluptatem dolor
        magni ad ipsum eaque quae iusto ullam odio voluptate. Eos culpa dolore
        fugit ad enim consectetur iure temporibus explicabo voluptas ratione. Fuga
        expedita dicta vero, ipsa accusantium illo aut corrupti nulla ipsam ex, a
        sunt alias natus ratione. Explicabo sunt, dolor optio harum possimus quo
        blanditiis velit fugiat officiis, voluptatem, pariatur quisquam omnis?
        Debitis porro id aspernatur possimus, earum dolorum quia! Aperiam aliquam
        totam illo praesentium, fugit repellendus! Assumenda optio autem quae odit
        voluptatem ad facere et quas, itaque, inventore nihil.
        </div>

        <h1 className="mt-5">VW & Width100%</h1>
        <div className="bg-green-500 my-2 p-5 w-screen">(vw) screen</div>

        <div className="bg-green-500 my-2 p-5 w-full">(width 100%) w-full</div>

        <div className="bg-teal-500 text-white my-2 w-[500px]">
        Arbitrary Width (500px)
        </div>

        <h1 className="mt-5">Height All Around</h1>
        <div className="flex items-end mt-20 mb-10">
        <div className="bg-indigo-400 ml-5 h-24">height 24</div>
        <div className="bg-indigo-400 ml-5 h-32">height 32</div>
        <div className="bg-indigo-400 ml-5 h-40">height 40</div>
        <div className="bg-indigo-400 ml-5 h-48">height 48</div>
        <div className="bg-indigo-400 ml-5 h-64">height 64</div>
        <div className="bg-indigo-400 ml-5 h-80">height 80</div>
        </div>

        <h1 className="mt-5">Min Height Full</h1>
        <div className="p-5 h-[400px] bg-green-300 mb-5">
        <div className="min-h-full bg-teal-400">Take Full Height</div>
        </div>

        <div className="h-[150px] bg-orange-200 mb-10">
        <div className="m-20 bg-orange-500 h-48 max-h-full">Max Height Full</div>
        </div>

        <h1 className="mb-2">Full Screen Height</h1>
        <div className="bg-pink-300 mb-4 h-screen">Hello</div>

        <div className="bg-green-400 p-5 w-auto">Auto</div>

    </div>
  )
}

export default page