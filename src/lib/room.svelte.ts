import { browser } from '$app/environment'
import { writable } from 'svelte/store'

export const currentRoom = writable<string | null>(null)
export const currentUser = writable<string | null>(
	browser ? sessionStorage.getItem('nickname') : null
)
