import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Title from '.'

describe('<Title /> Component', () => {
    beforeEach(() => {
        render(<Title />)
    })
    it('should render component', () => {
        const title = screen.getByRole('heading')

        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
    })

    it('should render the written title "We release interesting articles about technology"', () => {
        const title = screen.getByRole('heading')

        expect(title.textContent).toBe('We release interesting articles about technology')
    })
})