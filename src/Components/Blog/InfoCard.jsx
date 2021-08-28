

export const InfoCard = ({img,altText,heading,desc,btnText,bgColor}) => {
    return (
        <div className='flex flex-col border w-72 justify-center items-center rounded-lg'>
            <div>
                <img src={`/images/blog/${img}.png`} className='rounded-t-lg'  alt={altText}/>
            </div>
            <div className={` w-full `}>
                <div className='relative p-4'>
                    <button style={{fontSize:"10px"}} className={`shadow-md absolute  -top-3 left-4 text-white rounded-lg px-4 py-1 text-sm ${bgColor} font-bold`}>{btnText}</button>
                </div>
                <div className='p-3  '>
                    <h1 className=' text-lg font-bold mb-4 text-black'>{heading}</h1>
                    <span className='space-y-12 text-sm'>{desc}</span>
                </div>
            </div>
        </div>
    )
}


