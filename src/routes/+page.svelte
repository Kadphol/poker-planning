<script lang="ts">
	import { goto } from '$app/navigation'
	import { currentRoom, currentUser } from '$lib/room.svelte'
	let nickname = $state('')
	let roomName = $state('')

	function joinRoom() {
		if (nickname.trim()) {
			sessionStorage.setItem('nickname', nickname)
			currentRoom.set(roomName)
			currentUser.set(nickname)
			goto('/room/' + roomName)
		}
	}

	function createRoom() {
		if (nickname.trim()) {
			sessionStorage.setItem('nickname', nickname)
			currentRoom.set(roomName)
			currentUser.set(nickname)
			goto('/room/' + roomName)
		}
	}
</script>

<div class="container mx-auto p-4 md:p-8">
	<div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
		<h2 class="text-2xl font-bold mb-6 text-center">Join Planning Poker</h2>
		
		<div class="mb-4">
			<label for="nickname" class="block text-sm font-medium mb-1">Your Name</label>
			<input 
				type="text" 
				id="nickname" 
				bind:value={nickname} 
				class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				placeholder="Enter your name"
			/>
		</div>
		
		<div class="mb-6">
			<label for="roomId" class="block text-sm font-medium mb-1">Room ID</label>
			<input 
				type="text" 
				id="roomId" 
				bind:value={roomName} 
				class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				placeholder="Enter room name to join or create a new room"
			/>
		</div>
		
		<div class="flex gap-4">
			<button 
				onclick={joinRoom} 
				disabled={!nickname || !roomName}
				class="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				Join Room
			</button>
			<button 
				onclick={createRoom} 
				disabled={!nickname || !roomName}
				class="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				Create Room
			</button>
		</div>
	</div>
</div>
