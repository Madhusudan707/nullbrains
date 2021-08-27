

export const ActionButton = () => {
    return (
        <div className='mt-8 flex flex-col items-center '>
             <button className=' relative bg-purple-700 text-white rounded-full py-4 px-8 text-1xl shadow-md'>Purchase Now
             <button className='absolute  bg-green-500 text-white rounded-full p-1 w-20  -top-3 left-28' style={{fontSize:"10px"}}>Only $15/mo</button>
           
             </button>
             <div className='mt-4 text-gray-500'>
                 <a href='#!' > <p>Learn More</p></a>
             </div>
           
             
        </div>
    )
}
