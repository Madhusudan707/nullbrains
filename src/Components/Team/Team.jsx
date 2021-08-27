import { MemberCard } from "./MemberCard"

export const Team = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div className='flex flex-col space-y-12'>
                <div className='text-center space-y-4'>
                    <h1 className='text-3xl '>Our Team</h1>
                    <p className='text-2xl '>An incredible team of amazing individuals</p>
                </div>
                <div className='flex flex-wrap items-center justify-center   '>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5RjA3cPIdFM8OnricqubDAHaIM%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JMCHMX2sjzLD4Zt3aIm7xAD6D6%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QEaD0EwLH68xe1DytG0x3QAAAA%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZxVJ6TBFA4CPNYd9yfVCBwHaHa%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5RjA3cPIdFM8OnricqubDAHaIM%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JMCHMX2sjzLD4Zt3aIm7xAD6D6%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QEaD0EwLH68xe1DytG0x3QAAAA%26pid%3DApi&f=1"/>
                   <MemberCard imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZxVJ6TBFA4CPNYd9yfVCBwHaHa%26pid%3DApi&f=1"/>
                </div>
                
            </div>
        </div>
    )
}
