import React from 'react'

function Background() {
  return (
    <>
        <div className=' fixed w-full h-screen z-[2]'>
        <div className='w-full py-10 text-zinc-300 text-xl font-bold flex justify-center'>Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] font-normal leading-none tracking-tighter'>Docs.</h1>
        </div>
    </>
  )
}

export default Background
