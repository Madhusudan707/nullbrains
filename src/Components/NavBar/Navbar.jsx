
export const Navbar = ()=>{
    return (
        <div className='flex justify-between items-center p-4 border'>
            <div>
                <h1 className='text-2xl'>nullBrains.</h1>
            </div>
            <div className='w-96 '>
                <ul className='flex justify-between items-center'>
                    <li><a href='#!'>Home</a></li>
                    <li><a href='#!'>Features</a></li>
                    <li><a href='#!'>Blog</a></li>
                    <li><a href='#!'>Contact</a></li>
                    <li><a href='#!'><i className="fas fa-search  "></i></a></li>
                </ul>
            </div>
            <div className='w-36 flex justify-between items-center'>
                <button>Sign In</button>
                <button className='bg-purple-700 text-white rounded-full py-2 px-4 text-sm '>Sign Up</button>
            </div>
        </div>
    )
}