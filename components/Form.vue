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
	@apply default-wrapper max-w-lg grid gap-3 p-6;

	div {
		@apply grid grid-cols-1 grid-rows-5 xs:grid-cols-2 xs:grid-rows-3 gap-0;
	}

	button {
		@apply button;
	}
}
</style>
