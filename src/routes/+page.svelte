<script>
	import { goto } from '$app/navigation'
	let nickname = ''

	function joinRoom() {
		if (nickname.trim()) {
			sessionStorage.setItem('nickname', nickname)
			goto('/room/' + crypto.randomUUID())
		}
	}
</script>

<div class="flex h-screen flex-col items-center justify-center gap-4">
	<h1 class="text-3xl font-bold">Planning Poker</h1>
	<input type="text" bind:value={nickname} placeholder="Enter nickname" class="input" />
	<button on:click={joinRoom} class="rounded bg-blue-600 px-4 py-2 text-white">Create Room</button>
</div>

<style>
	.input {
		@apply w-64 rounded border p-2;
	}
</style>
