"use client"

import React from 'react'

// const Pagination = ({ page, hasPrev, hasNext }) => {
//   const router = useRouter();

//   return (
//     <div className={styles.container}>
//       <button
//         className={styles.button}
//         disabled={!hasPrev}
//         onClick={() => router.push(`?page=${page - 1}`)}
//       >
//         Previous
//       </button>//       <button
//         disabled={!hasNext}
//         className={styles.button}
//         onClick={() => router.push(`?page=${page + 1}`)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;


const Pagination = () => {
  return (
    <div className='flex justify-between '>
      <button className='w-[100px] border-none p-4 rounded-md bg-[#6B46C1] text-white cursor-pointer disabled:bg-grey-500 disabled:cursor-not-allowed'>Previous</button>
      <button className='w-[100px] border-none p-4 rounded-md bg-[#6B46C1] text-white cursor-pointer disabled:bg-grey-500 disabled:cursor-not-allowed'>Next</button>
      

    </div>
  )
}

export default Pagination