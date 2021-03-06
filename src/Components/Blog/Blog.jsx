import { Card} from "./Card"
import { InfoCard } from "./InfoCard"

export const Blog = () => {
    return (
        <div id="blog" className='flex flex-col p-12'>
            <div className='flex flex-col w-88 space-y-4'>
                <h1 className='lg:text-6xl text-3xl font-bold '>The Project Blog</h1>
                <p className='lg:text-2xl text-sm text-gray-400 '>Designs and layouts to help you with your app</p>
            </div>
            <div className='flex flex-wrap items-center justify-around mt-12 lg:space-y-0 space-y-4 '>
                <Card  img="b1" bg1="bg-purple-700" bg2="bg-purple-500" textColor="text-purple-500" heading="Refreshing Designs" tagline="Quench satisfying designs to help you stir up emotion and tell a story." altText="resource" btnText="RESOURCES"/>
                <Card radius="rounded-t-lg" img="b2" bg1="bg-blue-500" bg2="bg-blue-400" textColor="text-blue-500" heading="Healthier Lifestyle" tagline="Living a healthier lifestyle will help with you productivity and your mind-set." altText="lifestyle" btnText="LIFESTYLE"/>
                <Card  img="b3" bg1="bg-yellow-500" bg2="bg-yellow-400" textColor="text-yellow-500" heading="Gaming Evolution" tagline="Learn about the evolution of gaming and how it started." altText="entertainment" btnText="ENTERTAINMENT"/>
            </div>
            <div className='flex flex-wrap  items-center justify-around mt-12 lg:space-y-0 space-y-4 '>
                <InfoCard img="b4" bgColor="bg-blue-500" heading="Best WorkStations of the Year" desc="Check out these inspiring workstations to get ideas on how to level-up your workstation." altText="resource" btnText="INSPIRATION"/>

                <InfoCard img="b5" bgColor="bg-red-500" heading="Eating for Productivity" desc="Learn how to be more disciplined in your diet and how you can eat to maximize productivity." altText="resource" btnText="FOOD"/>

                <InfoCard img="b6" bgColor="bg-purple-500" heading="A Design Mind-set" desc="What does it mean to have a design mind-set? Learn how to improve your eye for design." altText="resource" btnText="RESOURCES"/>
            </div>
        </div>
    )
}
