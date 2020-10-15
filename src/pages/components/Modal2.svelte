<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	const close = () => {
		setTimeout(()=>{dispatch('close')},500);
	}

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

	let src = '../../public/images/Foto2.webp';

	const title = '</ contact >';
</script>

<svelte:window on:keydown={handle_keydown}/>

<!-- <div class="modal-background" on:click={close}></div> -->

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} transition:fade>

	<div class="modal__container">
		<!-- <button on:click={close}>close modal</button> -->

		<div class="figure">
			<img {src} alt="Foto"/>
			<figcaption>
				<h1>Diego Rojas</h1>
				<p>Puedes estar seguro que siempre pongo todo mi compromiso en lo que realizo para entregar el mejor proyecto posible.</p>
				<hr/>
			</figcaption>
		</div>

		<nav>
			<ul>
				<li>
					{#if animation===1}
						<a in:fly="{{ y: 20, duration: 300 }}"  href="#AboutMe2" on:click={close}>Abaut me</a>
					{/if}
					<span transition:fly="{{ x: 20, duration: 200} }">←</span>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#certification" on:click={close}>Certification</a>
					{/if}
					<span transition:fly="{{ x: 20, duration: 200}}">←</span>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#skills" on:click={close}>Skills</a>
					{/if}
					<span transition:fly="{{ x: 20, duration: 200}}">←</span>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#porfolio" on:click={close}>Porfolio</a>
					{/if}
					<span transition:fly="{{ x: 20, duration: 200}}">←</span>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#certification" on:click={close}>Certification</a>
					{/if}
					<span transition:fly="{{ x: 20, duration: 200}}">←</span>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#contact" on:click={close}>Contact</a>
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

		<section class="contact">
			<div class="title">
				<h2>{title}</h2>
			</div>

			<article class="contact__container">
				<div class="icon__space">1</div>
				<div class="icon__space">2</div>
				<div class="icon__space">3</div>
				<div class="icon__space">4</div>
				<div class="icon__space">5</div>
				<div class="icon__space">6</div>
			</article>
		</section>
	</div>
</div>

<style>

	.modal {
		box-sizing: border-box;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=#f1f1f1ff&noise=cdcdcd&density=100&opacity=75);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
		overflow: auto;
		padding: 1em;
	}

	.modal__container{
		width: 100%;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
		display: grid;
		grid-template: repeat(2, 1fr) /repeat(2, 1fr);
		grid-template-areas: "hero nav"
												 "contact nav";
	}

	.modal__container:before{
		clip-path: polygon(50% 0, 100% 0, 100% 25%, 50% 10%);
		background-color: blueviolet;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
	}

	.figure{
		grid-area: "hero";
		box-sizing: border-box;
		width: auto;
		max-width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-flow: column;
	}

	.figure img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.figure figcaption{
		box-sizing: border-box;
		text-align: center;
		padding-top: 1rem;
	}

	figcaption p{
		color: #302F3E;
		font-size: 1rem;
	}

	figcaption hr {
		background-color: blueviolet;
		height: 2px;
		border: none;
	}

	nav{
		grid-area: "nav";
		position: absolute;
		top: 25%;
		left: 50%;
		bottom: 0;
		right: 0;
	}

	ul{
		margin: 0;
		height: 75%;
		padding: 0;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	li {
		list-style: none;
		display: flex;
		justify-content: flex-end;
	}

	a {
		margin: 0;
		font-size: 2rem;
		text-decoration: none;
	}

	span{
		padding: auto;
	}

	.contact{
		grid-area: "contact";
		width: 50%;
		/* position: absolute;
		left: 0;
		bottom: 0;
		right: 50%;
		top: 50%; */
	}

	.title{
		text-align: center;
	}
</style>
