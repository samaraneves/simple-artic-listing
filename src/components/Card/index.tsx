import dateFormatted from "../../helpers/dateFormatted"

interface CardProps {
    title: string
    time: string
    image: string
}

export default function Card({ title = '', time = '', image = '' }: CardProps) {
    const date = dateFormatted(time)

    return (
        <article className="w-full flex gap-8">
            {image && (
                <img role="img" src="https://placehold.co/150.png" alt="" />
            )}
            
            <header className="flex flex-col gap-4">
                {title && <h2 className="text-lg text-black text-sm/6 font-semibold ">{title}</h2>}
                {time && (
                    <time className="text-sm text-bluishgray font-medium" dateTime={time}>{date}</time>
                )}
            </header>
        </article>
    )
}