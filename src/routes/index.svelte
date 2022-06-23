<script>
	import { onMount } from 'svelte';
	import augmentTransform from '$lib/augment-transform';
	let augments = [];
	onMount(() => {
		fetch('/api/augments')
			.then(res => res.json())
			.then(val => {
				augments = val.map(e => augmentTransform(e));
			})
			.catch(console.error);
	});
	$: console.log(augments);
</script>
