import React from "react"

export function Title() {
    return (
        <h1 className="text-2xl text-center font-bold text-black lg:text-4xl">
            We release interesting articles about technology
        </h1>
    )
}

export default React.memo(Title)