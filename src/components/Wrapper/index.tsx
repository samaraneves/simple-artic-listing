interface WrapperProps {
    children?: React.ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <main className="w-full flex flex-col justify-center items-center">
            <section>
                {children}
            </section>
        </main>
    )
}