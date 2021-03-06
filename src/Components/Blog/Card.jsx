

export const Card = ({img,btnText,heading,tagline,altText,bg1,bg2,textColor,radius}) => {
    return (
        <div className='flex flex-col border w-72 justify-center items-center rounded-lg  '>
            <div className={`${bg1} w-full flex items-center justify-center ${radius}`}>
                <img src={`/images/blog/${img}.png`} className='h-72' alt={altText}/>
            </div>
            <div className={`${bg2} w-full rounded-b-lg `} >
                <div className='relative p-4'>
                    <button style={{fontSize:"10px"}} className={`shadow-md absolute  -top-3 left-4 bg-white rounded-lg px-4 py-1 text-sm ${textColor} font-bold`}>{btnText}</button>
                </div>
                <div className='p-3 text-white' >
                    <h1 className='text-4xl font-bold mb-4'>{heading}</h1>
                    <span className='space-y-12'>{tagline}</span>
                </div>
            </div>
        </div>
    )
}
