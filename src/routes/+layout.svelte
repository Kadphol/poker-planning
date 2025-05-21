<script lang="ts">
	import '../app.css'
	import { currentRoom, currentUser } from '$lib/room.svelte'
	let { children } = $props()
</script>

<main class="min-h-screen bg-gray-100 text-gray-900">
  <header class="bg-emerald-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Planning Poker</h1>
      {#if $currentRoom}
        <div class="flex items-center gap-2">
          <span class="bg-emerald-700 px-3 py-1 rounded-md text-sm font-mono">
            Room: {$currentRoom}
          </span>
          <span class="bg-emerald-800 px-3 py-1 rounded-md text-sm">
            {$currentUser}
          </span>
        </div>
      {/if}
    </div>
  </header>
{@render children()}
</main>
