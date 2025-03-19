import dateFormatted from "../../helpers/dateFormatted"

interface CardProps {
    title: string
    time: string
    image: string
}

export default function Card({ title = '', time = '', image = '' }: CardProps) {
    const date = dateFormatted(time)

    return (
        <article className="w-full flex flex-col gap-4 items-center sm:flex-row lg:gap-16">
            {image && (
                <picture>
                    <source srcSet={image} type="image/webp" />
                    <source srcSet={image} type="image/jpeg" />
                    <img 
                        className="rounded-md"
                        src={image}
                        width="150"
                        height="150"
                        alt=""
                        loading="eager"
                        fetchPriority="high"
                    />
                </picture>
            )}
            
            <header className="w-full flex flex-col justify-center gap-4">
                {title && <h2 className="text-xl text-black font-semibold lg:text-2xl">{title}</h2>}
                {time && (
                    <time className="text-sm text-bluishgray font-medium" dateTime={time}>{date}</time>
                )}
            </header>
        </article>
    )
}