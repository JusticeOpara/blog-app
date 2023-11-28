import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between '>
      <button className='w-[100px] border-none p-[16px] bg-red-300 text-white cursor-pointer disabled:bg-grey-500 disabled:cursor-not-allowed'>Previous</button>
      <button className='w-[100px] border-none p-[16px] bg-red-300 text-white cursor-pointer disabled:bg-grey-500 disabled:cursor-not-allowed'>Next</button>
      

    </div>
  )
}

export default Pagination