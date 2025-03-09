interface WrapperProps {
    children?: React.ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <main className="container">
            <section>
                {children}
            </section>
        </main>
    )
}