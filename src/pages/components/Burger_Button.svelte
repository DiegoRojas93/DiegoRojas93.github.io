<script>
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<style>
	div{
		width: auto;
		height: auto;
		background-color: orchid;
	}

	button{
		position: fixed;
		top: 2rem;
		right: 1rem;
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		text-align: center;
	}

	.hexagon {
		position: relative;
		width: 30px;
		height: 17.321px;
		background-color: #A3399F;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.hexagon:before,
	.hexagon:after {
		content: "";
		position: absolute;
		width: 0;
		border-left: 15px solid transparent;
		border-right: 15px solid transparent;
	}

	.hexagon:before {
		bottom: 100%;
		border-bottom: 10px solid #A3399F;
	}

	.hexagon:after {
		top: 100%;
		width: 0;
		border-top: 10px solid #A3399F;
	}
	
	i {
		width: 1rem;
		height: 13.78px;
		color: #008890;
		margin: 0;
		padding: 0;
	}

</style>

<button on:click="{() => showModal = true}">
	<div class="hexagon">
			<i class="fas fa-bars"></i>
	</div>
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
	</Modal>
{/if}
