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

<script setup lang="ts">
</script>

<style scoped lang="postcss">
form {
	@apply bg-white rounded-lg mx-auto border shadow w-11/12 max-w-lg grid gap-3 p-6;

	div {
		@apply flex flex-col xs:flex-row flex-wrap justify-between;
	}

	button {
		@apply bg-blue-500 text-white font-semibold py-2 px-4 rounded-md;
	}
}
</style>