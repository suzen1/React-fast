import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
        <div className='w-full h-32  bg-yellow-200	'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='w-full  px-4 py-5 bg-red-300	'>
          <h2 className='text-lg font-semibold	'>React Start</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, numquam?</p>
        </div>

      </div>
    </div>
  )
}

export default Card