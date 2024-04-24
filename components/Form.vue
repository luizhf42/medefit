<template>
	<form>
		<SexField />
		<div>
			<BodyMetricInput metric="weight" suffix="kg" metricInPortuguese="Peso" />
			<BodyMetricInput metric="height" suffix="cm" metricInPortuguese="Altura" />
			<BodyMetricInput metric="neck" suffix="cm" metricInPortuguese="Pescoço" />
			<BodyMetricInput metric="waist" suffix="cm" metricInPortuguese="Cintura" />
			<BodyMetricInput metric="hip" suffix="cm" metricInPortuguese="Quadril" />
		</div>
		<button @click.prevent="$emit('calculate')">Calcular</button>
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
