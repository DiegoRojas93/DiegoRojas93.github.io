<script>

	export let info;

	let confirmation = {toggle: false};

	let random = 0;
	let data;
	let alt;
	let src;
	let href;
	let marco;

	const comprovationLink = (link) => {
		if (link){
			return link
		}else{
			return null
		}
	}

	const interval = setInterval(()=>{
		random = Math.round( Math.random() * (info.length - 1) + 1);

		data = info[random];
		alt = data.name;
		src = data.image;
		href = comprovationLink(data.link)
		marco = data.marco

	}, 3000);

	const recarga = () => {
		if(confirmation.toggle){
			confirmation.toggle = !confirmation.toggle;
		}
	};

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

	img{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
</style>

<section>
	<figure transition:fade>
		<a {href} target="_blank" class:marco="{marco === true}">
			<img {src} {alt} on:load={recarga()} transition:fade="{confirmation.toggle}" title={alt}/>
		</a>
	</figure>
</section>