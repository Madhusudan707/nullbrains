import { MemberCard } from "./MemberCard"

export const Team = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div className='flex flex-col space-y-12'>
                <div className='text-center space-y-4'>
                    <h1 className='text-3xl '>Our Team</h1>
                    <p className='text-2xl '>An incredible team of amazing individuals</p>
                </div>
                <div className='flex flex-wrap items-center justify-center space-x-4 space-y-8  '>
                   <MemberCard/>
                   <MemberCard/>
                   <MemberCard/>
                   <MemberCard/>
                   <MemberCard/>
                   <MemberCard/>
                   <MemberCard/>
                   <MemberCard/>
                </div>
                
            </div>
        </div>
    )
}
