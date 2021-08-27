

export const Card = ({img,heading,tagline,altText}) => {
    return (
        <div className='flex flex-col  items-center  lg:w-1/4 space-y-4 w-full bg-blue-50 p-8 m-4 rounded-md'>
            <img src={`/images/features/${img}.png`} alt={altText} />
            <h3 className='text-2xl'>{heading}</h3>
            <p className='text-1xl text-gray-500 text-center'>{tagline}</p>
            {/* <img src='/images/features/f1.png' className='w-20' alt='f1' />
            <h3 className='text-2xl'>Certifications</h3>
            <p className='text-1xl text-gray-500 text-center'>Each of our plan will provide you and your team with certifications.</p> */}
        </div>
    )
}
