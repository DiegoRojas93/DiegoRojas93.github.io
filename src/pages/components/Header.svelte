<script>
	let logoMobile = 'https://i.imgur.com/EPVB8vn.png';
	let logoDesk = 'https://i.imgur.com/aZpDsl4.png';

	import MediaQuery from "../utils/MediaQuery.svelte";
	import Burger from "./Burger_Button.svelte";
</script>

<style>

	header{
		margin: 2rem 0;
		height: auto;
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		position: absolute;
		z-index: 1;
		top:0;
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
		align-items: center;
	}

	ul{
		margin: 0px;
		padding: 0px;
		display: flex;
	}

	.tablet ul {
		margin-top: 2rem;
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

	.logo {
		height: 6rem;
		display: inline-block;
	}

	.logo img {
		width: auto;
		height: 100%;
		display: inline-block;
	}

	a {
		font-size: 1.6rem;
		font-family: 'Orbitron', sans-serif;
		color: #008891;
		text-decoration: none;
	}

</style>


<MediaQuery query="(min-width: 1152px)" let:matches>
	{#if matches}
		<header class="header desktop">
			<div class="logo">
				<img src={logoDesk} alt="logo">
			</div>
			<nav>
				<ul>
					<li><a href="#AboutMe2">Abaut me</a></li>
					<li><a href="#certification">Certification</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#certification">Certification</a></li>
					<li><a href="#porfolio">Portfolio</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 768px) and (max-width: 1151px)" let:matches>
	{#if matches}
		<header class="header tablet">
			<img src={logoMobile} alt="logo" >
			<nav>
				<ul>
					<li><a href="#AboutMe2">Abaut me</a></li>
					<li><a href="#certification">Certification</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#certification">Certification</a></li>
					<li><a href="#porfolio">Portfolio</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 767px)" let:matches>
	{#if matches}
		<header class="header mobile">
			<img src={logoMobile} alt="logo" id="Home">
			<Burger class="Menu"/>
		</header>
	{/if}
</MediaQuery>