import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Card from ".";

const mock = {
    title: 'Unlocking the Power of Cloud Computing',
    time: '2024-11-12',
    timeFormatted: 'November 12, 2024'
}
describe('<Card /> Component', () => {
    beforeEach(() => {
         render(<Card 
                title={mock.title}
                time={mock.time}
            />)
    })
    it('should render card', () => {
        const card = screen.getByRole('article')

        expect(card).toBeInTheDocument()
        expect(card).toBeVisible()
    })

    it('should render title', () => {
        const title = screen.getByRole('heading')

        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
        expect(title.textContent).toBe(mock.title)
    })
    
    it('should render time', () => {
        const time = screen.getByRole('time')

        expect(time).toBeInTheDocument()
        expect(time).toBeVisible()
        expect(time.textContent).toBe(mock.timeFormatted)
    })
})