<script>
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<style>

	.menu{
		position: fixed;
		top: 2rem;
		right: 1rem;
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		text-align: center;
		z-index: 10;
	}

	.hexagon {
		position: relative;
		width: 30px;
		height: 17.321px;
		background-color: #8429D8;
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
		border-bottom: 10px solid #8429D8;
	}

	.hexagon:after {
		top: 100%;
		width: 0;
		border-top: 10px solid #8429D8;
	}

	i {
		width: 1rem;
		height: 13.78px;
		color: #008890;
		margin: 0;
		padding: 0;
	}

	.up{
		position: fixed;
		bottom: 5rem;
		right: 1rem;
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		text-align: center;
		z-index: 11;
	}

</style>

<button class="menu" on:click="{() => showModal = true}">
	<div class="hexagon">
		<i class="fas fa-bars"></i>
	</div>
</button>

<button class="up">
	<div class="hexagon">
		<a href="#Home"><i class="fas fa-angle-up"></i></a>
	</div>
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
	</Modal>
{/if}
