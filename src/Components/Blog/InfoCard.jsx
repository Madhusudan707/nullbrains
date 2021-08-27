

export const InfoCard = ({img,altText,heading,desc,btnText,bgColor}) => {
    return (
        <div className='rounded-sm shadow-lg w-80'>
            <div>
                <img src={`/images/blog/${img}.png`} className='rounded-lg'  alt={altText}/>
            </div>
            <div className={` w-full `}>
                <div className='relative p-4'>
                    <button style={{fontSize:"10px"}} className={`shadow-md absolute  -top-3 left-4 bg-white rounded-lg px-4 py-1 text-sm ${bgColor} font-bold`}>{btnText}</button>
                </div>
                <div className='p-3  '>
                    <h1 className='text-2xl font-bold mb-4 text-black'>{heading}</h1>
                    <span className='space-y-12'>{desc}</span>
                </div>
            </div>
        </div>
    )
}


