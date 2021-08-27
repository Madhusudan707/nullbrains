import { Card } from "./Card"

export const Features = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div className='flex flex-col space-y-12'>
                <div className='text-center'>
                    <h1 className='text-3xl '>Our Features</h1>
                    <span>Check out our list of awesome features below.</span>
                </div>
                <div className='flex flex-wrap items-center justify-center   '>
                    <Card img="f1" altText="certifications" heading="Certifications" tagline="Each of our plan will provide you and your team with certifications."/>
                    <Card img="f2" altText="notifications" heading="Notifications" tagline="Send out notifications to all your customers to keep them engaged."/>
                    <Card img="f3" altText="bundles" heading="Bundles" tagline="High-quality bundles of awesome tools to help you out."/>
                    <Card img="f4" altText="developer tools" heading="Developer Tools" tagline="Developer tools to help grow you application and keep it up-to-date."/>
                    <Card img="f5" altText="building blocks" heading="Building Blocks" tagline="The right kind of building blocks to take you company to the next level."/>
                    <Card img="f6" altText="coupons" heading="Coupons" tagline="Coupons system to provide special offers and discounts for your app."/>
                </div>
                
            </div>
        </div>
    )
}
