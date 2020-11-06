<script>


	export let info;

	let confirmation = {toggle: false};

	let random = 0;
	let data;
	let alt;
	let src;
	let href;
	let marco;
	let show;

	const comprovationLink = (link) => {
		if (link){
			return link
		}else{
			return null
		}
	}

	const INTERVAL = setInterval(()=>{
		random = Math.round( Math.random() * (info.length - 1) + 1);
		data = info[random] || null;

		if (data === null) {
			return data = ''
		}else{
			alt = data.name;
			src = data.image;
			href = comprovationLink(data.link);
			marco = data.marco;
			show = data.show;
		}
	}, 3000);


</script>

<style>
	section{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		position: relative;
	}

	figure{
		margin: 0;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	a{
		position: relative;
	}

	img{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}

	a:hover .tooltip-box {
		display: block;
	}

	.tooltip-box{
		display: none;
		position: absolute;
		background: #000;
		line-height: 2rem;
		z-index: 1;
		text-align: center;
		color: #f1f1f1;
		font-size: 1.6rem;
		padding: 5px 10px;
		border-radius: 5px;
		right: 0;
		bottom: 30px;
	}

	.tooltip-box::after{
		content: "";
		display: block;
		border-top: 7px solid #000;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		position: absolute;
		bottom: -7px;
		left: calc(50% - 7px);
	}
</style>

<section>
	<figure>
		<a {href} target="_blank" class:marco="{marco === true}">
			<img {src} {alt} />
			{#if show === true}
				<span class="tooltip-box">{alt}</span>
			{/if}
		</a>
	</figure>
</section>