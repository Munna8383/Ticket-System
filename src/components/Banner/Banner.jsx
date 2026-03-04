import React from 'react'

export default function Banner() {
  return (
    <div className='flex justify-around gap-20 mt-10'>
     <div className="w-96 h-72 bg-[url('/vector1.png')] bg-cover bg-center">
       <div  className='flex items-center justify-center text-center h-full w-full'>
        <div>
          <h1>In Progress</h1>

          
        <h1>0</h1>
        </div>
      </div>
     </div>

      <div>
        <h1>Resolved</h1>
        <h1>0</h1>
      </div>
    </div>
  );
}
