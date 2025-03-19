import Separator from "../../components/Separator"
import Title from "../../components/Title"
import Wrapper from "../../components/Wrapper"

import Photo1 from '../../assets/photo_1.webp'
import Photo2 from '../../assets/photo_2.webp'
import Photo3 from '../../assets/photo_3.webp'

import { lazy } from "react"

const Card = lazy(() => import("../../components/Card"))

type Card = {
    title: string
    time: string
    image: string
}

export default function Home() {
    const cards: Card[] = [
        {
            title: 'Unlocking the Power of Cloud Computing: A Guide to Scalable Solutions',
            time: '2024-11-12',
            image: Photo1
        },
        {
            title: 'The Future of AI: How Machine Learning is Revolutionizing Industries',
            time: '2024-11-12',
            image: Photo2
        },
        {
            title: 'The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work',
            time: '2024-11-12',
            image: Photo3
        }
    ]

    return (
        <Wrapper>
            <Title />
            
            <Separator />

            <aside className="w-full flex flex-col justify-center items-center gap-16 lg:max-w-3xl lg:mx-auto">
                { 
                    cards.map((card: Card, index: number) => (
                         <Card
                            key={index}
                            title={card.title}
                            time={card.time}
                            image={card.image}
                        />
                    ))
                }
            </aside>
            
        </Wrapper>
    )
}