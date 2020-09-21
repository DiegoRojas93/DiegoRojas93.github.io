<script>
	let logoMobile = '../../public/images/Logo.webp';
	let logoDesk = '../../public/images/LogoDesk.webp';

	import MediaQuery from "../utils/MediaQuery.svelte";
	import Burger from "./Burger_Button.svelte";
</script>

<style>

	header{
		margin: 2rem 0;
		height: auto;
		box-sizing: border-box;
		width: 100%;
		position: absolute;
		z-index: 1;
	}

	.mobile {
		display: flex;
		justify-content: center;
	}

	.tablet {
		display: flex;
		flex-direction:column;
		align-items: center;
	}

	.desktop {
		padding: 0px 32px;
		display: flex;
		justify-content: space-between;
	}

	ul{
		margin: 0px;
		padding: 0px;
		display: flex;
	}

	.tablet ul {
		width: 100vw;
		justify-content: space-evenly;
	}

	.desktop ul {
		width: calc(50vw - 32px);
		justify-content: space-evenly;
	}

	li {
		list-style: none;
	}

	.header img {
		width: auto;
		height: auto;
		display: inline-block;
	}

	p {
		font-size: 1.6rem;
	}

</style>


<MediaQuery query="(min-width: 1152px)" let:matches>
	{#if matches}
		<header class="header desktop">
			<img src={logoDesk} alt="logo">
			<nav>
				<ul>
					<li><p>Abaut me</p></li>
					<li><p>Certification</p></li>
					<li><p>Skills</p></li>
					<li><p>Certification</p></li>
					<li><p>Contact</p></li>
				</ul>
			</nav>
		</header>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 768px) and (max-width: 1151px)" let:matches>
	{#if matches}
		<header class="header tablet">
			<img src={logoMobile} alt="logo">
			<nav>
				<ul>
					<li><p>Abaut me</p></li>
					<li><p>Certification</p></li>
					<li><p>Skills</p></li>
					<li><p>Certification</p></li>
					<li><p>Contact</p></li>
				</ul>
			</nav>
		</header>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 767px)" let:matches>
	{#if matches}
		<header class="header mobile">
			<img src={logoMobile} alt="logo">
			<Burger class="Menu"/>
		</header>
	{/if}
</MediaQuery>