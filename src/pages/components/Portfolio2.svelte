<script>
	let title ='</Portfolio>';

	let IMAGES = [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
		{id: 5},
		{id: 6}
	];
</script>

<style>
	section{
		box-sizing: border-box;
		max-width: 100vw;
		width: auto;
		height: auto;
		padding: 2rem 5rem 2rem 1rem;
	}


	.title{
		text-align: center;
		margin-bottom: 2rem;
	}

	.container{
		width: 100%;
		height: auto;
		display: grid;
		grid-template: repeat(6, auto) / 100vw;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
    /* float: left; */
    width: 250px;
    height: 215px;
    padding: 4px;
    background-image: url("https://raw.githubusercontent.com/TridiamStudios/blog_images/master/files/blog-css-mask-4.png");
    background-size: 250px 215px;
		background-color: aqua;
    box-sizing: border-box;
	}
	.fotoPerfil_mask {
    position: relative;
    /* float: left; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: url("https://raw.githubusercontent.com/TridiamStudios/blog_images/master/files/blog-css-mask-4.png");
    mask-image: url("https://raw.githubusercontent.com/TridiamStudios/blog_images/master/files/blog-css-mask-4.png");
    -webkit-mask-size: 242px 207px;
    mask-size: 242px 207px;
		background-color: red;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
}
	/* #user_fotoPerfil {
    background-image: url("https://raw.githubusercontent.com/TridiamStudios/blog_images/master/files/blog-css-mask-2.jpg");
} */

	/* .hexagon{
		width: 100%;
		height: 100%;
		background: red;
		transform: rotate(120deg);
		margin: 0px auto;
		overflow: hidden;
		/* visibility: hidden;
	} */

	@media screen and (min-width: 768px){
		section{
			padding: 2rem;
		}
	}
</style>

<section>
	<div class="title">
		<h1>{title}</h1>
	</div>
	<div class="container">
		{#each IMAGES as image (image.id)}
			<article class="item">
				<div class="fotoPerfil_mask" id="user_fotoPerfil">
					<div class="contenido">pgsrgdsfgdfgd</div>
				</div>
			</article>
		{/each}
	</div>
</section>