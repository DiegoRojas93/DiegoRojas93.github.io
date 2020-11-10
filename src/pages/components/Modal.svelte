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

	let src = 'https://i.imgur.com/VMiH19e.png';

	const title = '</ contact >';
</script>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} transition:fade>

	<div class="modal__container">

		<div class="figure">
			<img {src} alt="Foto" in:fly="{{ y: -200, duration: 300 }}"/>
			<figcaption>
				<h3>Diego Rojas</h3>
				<p>Puedes estar seguro que siempre pongo todo mi compromiso en lo que realizo para entregar el mejor proyecto posible.</p>
				<hr/>
			</figcaption>
		</div>

		<nav>
			<ul>
				<li>
					{#if animation===1}
						<a in:fly="{{ y: 20, duration: 300 }}"  href="#Home" on:click={close}>Home</a>
					{/if}
					<i transition:fly="{{ x: 20, duration: 200} }" class="fas fa-angle-double-left"></i>
				</li>
				<li>
					{#if animation===1}
						<a in:fly="{{ y: 20, duration: 300 }}"  href="#AboutMe2" on:click={close}>Abaut me</a>
					{/if}
					<i transition:fly="{{ x: 20, duration: 200} }" class="fas fa-angle-double-left"></i>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#certification" on:click={close}>Certification</a>
					{/if}
					<i transition:fly="{{ x: 20, duration: 200} }" class="fas fa-angle-double-left"></i>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#skills" on:click={close}>Skills</a>
					{/if}
					<i transition:fly="{{ x: 20, duration: 200} }" class="fas fa-angle-double-left"></i>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#porfolio" on:click={close}>Porfolio</a>
					{/if}
					<i transition:fly="{{ x: 20, duration: 200} }" class="fas fa-angle-double-left"></i>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#certification" on:click={close}>Certification</a>
					{/if}
					<i transition:fly="{{ x: 20, duration: 200} }" class="fas fa-angle-double-left"></i>
				</li>
				<li>
					{#if animation===1}
						<a in:fly={{ y: 20, duration: 300 }} href="#contact" on:click={close}>Contact</a>
					{/if}

					<i
						class="fas fa-angle-double-left"
						transition:fly="{{ x: 20, duration: 200} }"
						on:introstart="{() => animation = 0}"
						on:outrostart="{() => animation = 1}"
						on:introend="{() => animation = 1}"
						on:outroend="{() => animation = 1}"
					></i>
				</li>
			</ul>
		</nav>

		<section class="contact">
			<div class="title">
				<h3>{title}</h3>
			</div>

			<article class="contact__container">
				<div class="icon__space"> <a type="buttom" href="https://twitter.com/DiegoFrontend" class="buttom" target="_blank"><i class="fab fa-twitter-square" /></a> </div>
				<div class="icon__space"> <a type="buttom" href="https://www.linkedin.com/in/diego-rojas-4304/" class="buttom" target="_blank"> <i class="fab fa-linkedin"/></a> </div>
				<div class="icon__space"> <a type="buttom" href="https://github.com/DiegoRojas93" class="buttom" target="_blank"> <i class="fab fa-github-square"/> </a> </div>
				<div class="icon__space"> <a type="buttom" href="https://es.stackoverflow.com/users/167631/diego-rojas?tab=profile" class="buttom" target="_blank"> <i class="fab fa-stack-overflow"/> </a> </div>
				<div class="icon__space"> <a type="buttom" href="https://codepen.io/diegorojas93" class="buttom" target="_blank"> <i class="fab fab fa-codepen"/> </a> </div>
				<div class="icon__space"> <a type="buttom" href="https://co.pinterest.com/diegorojas431/_saved/" class="buttom" target="_blank"> <i class=" fab fa-pinterest-square"/> </a> </div>
			</article>
		</section>
	</div>
</div>

<style>

	.modal {
		box-sizing: border-box;
		background-image: url(https://i.imgur.com/4FDLPLy.png);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1000;
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
		background: linear-gradient(0deg, #151141 0%, rgba(21, 17, 65, 0.85) 100%);
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
		grid-area: hero;
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
		padding-top: 4rem;
		width: auto;
		max-width: 100%;
		height: auto;
		object-fit: contain;
	}

	.figure figcaption{
		box-sizing: border-box;
		text-align: center;
		padding-top: 1rem;
	}

	figcaption p{
		color: #302F3E;
	}

	figcaption hr {
		background-color: blueviolet;
		height: 2px;
		border: none;
	}

	nav{
		grid-area: nav;
		height: 50%;
		width: 100%;
		margin: auto 0;

	}

	ul{
		margin: 0;
		height: 100%;
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

  i{
		padding: auto;
	}

	.contact{
		grid-area: contact;
		width: 100%;
	}

	.title{
		text-align: center;
		margin-bottom: 1rem;
		height: 1rem;
	}

	.contact__container{
		width: 100%;
		height: calc(100% - 2rem);
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(2, 1fr);
		gap: 1rem;
	}

	.icon__space{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.buttom{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background 300ms ease-in-out;
	}
	.buttom i{
		cursor: pointer;
		background-color: transparent;
		font-size: 8vh;
	}

	.fab {
		color: blueviolet;
	}
</style>
