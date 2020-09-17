<script>
	let logo = '../../public/images/logo.webp';

	import MediaQuery from "./MediaQuery.svelte";
</script>

<style>

	header{
		width: 100vw;
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
		display: flex;
		justify-content: space-between;
	}

	ul{
		margin: 0px;
		padding: 0px;
		display: flex;
	}

	li {
		list-style: none;
	}

	img {
		width: 118px;
		height: 53px;
		display: inline-block;
	}

</style>


<MediaQuery query="(min-width: 1152px)" let:matches>
	{#if matches}
		<header class="header desktop">
			<img src={logo} alt="logo">
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
			<img src={logo} alt="logo">
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
			<img src={logo} alt="logo">
			<!-- <nav>
				<ul>
					<li><p>Abaut me</p></li>
					<li><p>Certification</p></li>
					<li><p>Skills</p></li>
					<li><p>Certification</p></li>
					<li><p>Contact</p></li>
				</ul>
			</nav> -->
		</header>
	{/if}
</MediaQuery>