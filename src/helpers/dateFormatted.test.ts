import { describe, expect, it } from "vitest";
import dateFormatted from "./dateFormatted";

describe('dateFormatted helper', () => {
    it('should format the date', () => {
        const date = dateFormatted('2024-11-12')

        expect(date).toBe('November 12, 2024')
    })

    it('should not format date invalid value', () => {
        const date = dateFormatted('')

        expect(date).toBe('')

        const newDate = dateFormatted('invalid date')

        expect(newDate).toBe('')
    })
})