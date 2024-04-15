<template>
	<form>
		<SexField />
		<div>
			<BodyMetricInput metric="Weight" suffix="kg" />
			<BodyMetricInput metric="Height" suffix="cm" />
			<BodyMetricInput metric="Neck" suffix="cm" />
			<BodyMetricInput metric="Waist" suffix="cm" />
			<BodyMetricInput metric="Hip" suffix="cm" />
		</div>
		<button @click.prevent="$emit('calculate')">Calculate</button>
	</form>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
form {
	@apply bg-white rounded-lg mx-auto border shadow w-11/12 max-w-lg grid gap-3 p-6;

	div {
		@apply grid grid-cols-2 grid-rows-3 gap-0;
	}

	button {
		@apply bg-blue-500 text-white font-semibold py-2 px-4 rounded-md;
	}
}
</style>
