

export const Card = ({img,btnText,heading,tagline,altText,bg1,bg2,textColor}) => {
    return (
        <div className='flex flex-col border w-72 justify-center items-center rounded-lg  '>
            <div className={`${bg1} w-full flex items-center justify-center`}>
                <img src={`/images/blog/${img}.png`} alt={altText}/>
            </div>
            <div className={`${bg2} w-full `}>
                <div className='relative p-4'>
                    <button style={{fontSize:"10px"}} className={`absolute  -top-3 left-4 bg-white rounded-lg px-4 py-1 text-sm ${textColor} font-bold`}>{btnText}</button>
                </div>
                <div className='p-3 text-white '>
                    <h1 className='text-4xl font-bold mb-4'>{heading}</h1>
                    <span className='space-y-12'>{tagline}</span>
                </div>
            </div>
        </div>
    )
}
