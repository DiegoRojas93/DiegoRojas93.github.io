<script>
		let logo = '../../public/images/Logo1.webp';
		let logo2 = '../../public/images/Logo2.png';
</script>

<style>
	header{
		box-sizing: border-box;
		width: 100Vw;
		height: auto;
		display: flex;
		justify-content: space-between;
	}

	nav {
		width: 50vw;
	}

	ul{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	li {
		list-style: none;
	}

	a{
		margin: 0;
		padding: 0;
		display: inline-block;
		text-decoration: none;
		font-size: 1.6rem;
	}



</style>

<header>
	<img src={logo2} alt="Logo">
	<nav>
		<ul>
			<li class=""><a href="/">enlace 1</a></li>
			<li class=""><a href="/">enlace 2</a></li>
			<li class=""><a href="/">enlace 3</a></li>
			<li class=""><a href="/">enlace 4</a></li>
			<li class=""><a href="/">enlace 5</a></li>
		</ul>
	</nav>
</header>