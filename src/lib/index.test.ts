import { cn } from '$lib'
import { describe, expect, it } from 'vitest'

describe('cn', () => {
	it('should return a string', () => {
		expect(cn()).toBe('')
	})
})
