<template>
	<div class="">
		<div class="box">One</div>
		<div class="box">Two</div>
		<div class="box">Three
			<p>I have some more content in.</p>
    		<p>This makes me taller than 100 pixels.</p>
		</div>
		<div class="box">Four</div>
		<div class="box">Five</div>
	</div>
</template>

<script>
	import Container from './Container.vue'

	export default {
		name: 'App',
		components: {
			Container
		}
	}
</script>

<style scoped>
.header-full {
	display: grid;
	border: 3px solid;
	grid-template-columns: repeat(3, 1fr 2fr);
	grid-auto-rows: minmax(100px, auto);
	row-gap: 2rem;
}
.box {
	border: 1px solid #f76707;
	border-radius: 5px;
	height: 8rem;
	background: antiquewhite;
}
</style>