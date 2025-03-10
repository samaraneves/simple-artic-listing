import dateFormatted from "../../helpers/dateFormatted"

interface CardProps {
    title: string
    time: string
}

export default function Card({ title = '', time = '' }: CardProps) {
    const date = dateFormatted(time)

    return (
        <article>
            <header>
                {title && <h2>{title}</h2>}
                {time && (
                    <time dateTime={time}>{date}</time>
                )}
            </header>
        </article>
    )
}