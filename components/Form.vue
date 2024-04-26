<template>
	<form>
		<SexField />
		<div>
			<BodyMetricInput
				@update="getAreInputsValid"
				metric="weight"
				suffix="kg"
				metricInPortuguese="Peso"
			/>
			<BodyMetricInput
				@update="getAreInputsValid"
				metric="height"
				suffix="cm"
				metricInPortuguese="Altura"
			/>
			<BodyMetricInput
				@update="getAreInputsValid"
				metric="neck"
				suffix="cm"
				metricInPortuguese="Pescoço"
			/>
			<BodyMetricInput
				@update="getAreInputsValid"
				metric="waist"
				suffix="cm"
				metricInPortuguese="Cintura"
			/>
			<BodyMetricInput
				@update="getAreInputsValid"
				metric="hip"
				suffix="cm"
				metricInPortuguese="Quadril"
			/>
		</div>
		<button :disabled="!areInputsValid" @click.prevent="$emit('calculate')">
			Calcular
		</button>
	</form>
</template>

<script setup lang="ts">
const areInputsValid = ref<Boolean>(false);

const getAreInputsValid = () => {
	if (process.client) {
		const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");
		areInputsValid.value = userInputs.areInputsValid;
	}
};

onMounted(() => {
	getAreInputsValid();
});
</script>

<style scoped lang="postcss">
form {
	@apply default-wrapper max-w-lg grid gap-3 p-6;

	div {
		@apply grid grid-cols-1 grid-rows-5 xs:grid-cols-2 xs:grid-rows-3 gap-0;
	}

	button {
		@apply button disabled:cursor-not-allowed disabled:opacity-70 transition-all;
	}
}
</style>
