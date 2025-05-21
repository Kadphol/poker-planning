<script lang="ts">
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import type { PageProps } from './$types'
	import { currentUser } from '$lib/room.svelte';
	import { goto } from '$app/navigation'

	let { data }: PageProps = $props()
	let selected = $state<string | null>(null)

	const deck = ['0', '1', '2', '3', '5', '8', '13', '21', '?']

	onMount(() => {
		if (browser) {
			if (!$currentUser && !sessionStorage.getItem('nickname')) {
				goto('/');
			}

			if(!$currentUser) {
				currentUser.set(sessionStorage.getItem('nickname'))
			}

			if(!sessionStorage.getItem('nickname') && $currentUser) {
				sessionStorage.setItem('nickname', $currentUser)
			}
		}
	})

	function vote() {
		// Later: send vote via WebSocket
	}
</script>

<div class="space-y-4 p-4">
	<h2 class="text-xl font-bold">Room: {data.id}</h2>
	<p class="text-gray-700">Nickname: {$currentUser}</p>

	<div class="mt-6 flex flex-wrap gap-4">
		{#each deck as card (card)}
			<button
				class="flex h-20 w-16 items-center justify-center rounded border bg-white text-xl shadow-md transition-all duration-200 hover:bg-blue-100 {selected ===
				card
					? 'ring-4 ring-blue-500'
					: ''}"
				onclick={() => vote()}
			>
				{card}
			</button>
		{/each}
	</div>

	{#if selected}
		<p class="mt-4 text-green-700">You selected: <strong>{selected}</strong></p>
	{/if}
</div>
