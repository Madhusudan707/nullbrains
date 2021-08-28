import './navbar.css'
export const Navbar = ()=>{
    return (
        <>
        <div className='fixed w-full top-0 z-10 '>
        <div className='flex justify-between items-center p-4  shadow-md  bg-purple-600 text-white mb-36'>
            <div>
                <h1 className='text-2xl'>nullBrains.</h1>
            </div>
            <div className='lg:w-96 w-24'>
                <ul className='lg:flex hidden lg:justify-between lg:items-center '>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#feature'>Features</a></li>
                    <li><a href='#blog'>Blog</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#!'><i className="fas fa-search  "></i></a></li>
                </ul>
            </div>
            <div className='lg:w-36 w-40 flex justify-between items-center'>
                <button>Sign In</button>
                <button className='bg-purple-800 text-white rounded-full py-2 px-4 text-sm shadow-md '>Sign Up</button>
            </div>
           
        </div>
        </div>
         <ul className='lg:hidden flex justify-between items-center px-8 mt-24 '>
             <li><a href='#!'>Home</a></li>
             <li><a href='#!'>Features</a></li>
             <li><a href='#!'>Blog</a></li>
             <li><a href='#!'>Contact</a></li>
             <li><a href='#!'><i className="fas fa-search  "></i></a></li>
         </ul>
     
     </>
    )
}