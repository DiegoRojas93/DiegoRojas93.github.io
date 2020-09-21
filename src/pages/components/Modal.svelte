<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let animation = 0;

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<!-- <div class="modal-background" on:click={close}></div> -->

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} on:click={close} transition:fade>
	<button on:click={close}>close modal</button>

	<nav>
		<ul>
			<li>
				{#if animation===1}
					<p in:fly={{ y: 20, duration: 300 }}>Abaut me</p>
				{/if}
				<span transition:fly="{{ x: 20, duration: 200}}">←</span>
			</li>
			<li>
				{#if animation===1}
					<p in:fly={{ y: 20, duration: 300 }}>Certification</p>
				{/if}
				<span transition:fly="{{ x: 20, duration: 200}}">←</span>
			</li>
			<li>
				{#if animation===1}
					<p in:fly={{ y: 20, duration: 300 }}>Skills</p>
				{/if}
				<span transition:fly="{{ x: 20, duration: 200}}">←</span>
			</li>
			<li>
				{#if animation===1}
					<p in:fly={{ y: 20, duration: 300 }}>Certification</p>
				{/if}
				<span transition:fly="{{ x: 20, duration: 200}}">←</span>
			</li>
			<li>
				{#if animation===1}
					<p in:fly={{ y: 20, duration: 300 }}>Contact</p>
				{/if}
				<span
					transition:fly="{{ x: 20, duration: 200 }}"
					on:introstart="{() => animation = 0}"
					on:outrostart="{() => animation = 1}"
					on:introend="{() => animation = 1}"
					on:outroend="{() => animation = 1}"
				>←</span>
			</li>
		</ul>
	</nav>

</div>

<style>

	.modal {
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=#f1f1f1ff&noise=cdcdcd&density=100&opacity=75);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100vw;

		height: 100%;
		overflow: auto;
		padding: 1em;
	}

	button {
		display: block;
	}

	ul{
		margin: 0 2em 0 0 0;
		height: 50vh;
		padding: 0px 2em 0px 0px;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	li {
		list-style: none;
		display: flex;
		justify-content: flex-end;
	}

	p {
		margin: 0;
		font-size: 2rem;
	}
</style>
