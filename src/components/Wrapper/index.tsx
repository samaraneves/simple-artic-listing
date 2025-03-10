interface WrapperProps {
    children?: React.ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <main className="w-full">
            <section>
                {children}
            </section>
        </main>
    )
}