import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import Home from ".";

describe('Home Page', () => {
    beforeEach(() => {
        render(<Home />)
    })
    it('should render title', () => {
        const title = screen.getByRole('heading', {  
            level: 1
        })

        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
        expect(title.textContent).toBe('We release interesting articles about technology')
    })

    it('should render separator', () => {
        const separator = screen.getByRole('separator')

        expect(separator).toBeInTheDocument()
        expect(separator).toBeVisible()
    })

    it('should render 3 cards', () => {
        const cards = screen.getAllByRole('article')

        expect(cards.length).toBe(3)

        cards.forEach((card) => {
            expect(card).toBeInTheDocument()
            expect(card).toBeVisible()
        })
    })
})