<template>
	<div>
		<p>
			Gordura Corporal:
			<span :class="getBodyFatColor()">{{ bodyFat.toFixed(2) }}%</span>
		</p>
		<p>
			IMC: <span :class="getBmiColor()">{{ bmi.toFixed(2) }}</span>
		</p>
		<p>
			Relação Cintura-Quadril:
			<span :class="getWaistHipRatioColor()">{{ waistHipRatio.toFixed(2) }}</span>
		</p>

		<button @click.prevent="$emit('reset')">Calcular novamente</button>
	</div>
</template>

<script setup lang="ts">
import type { Sex } from "~/models/userInputs";

const { bmi, bodyFat, waistHipRatio, sex } = defineProps<{
	bmi: number;
	bodyFat: number;
	waistHipRatio: number;
	sex: Sex;
}>();

const getBmiColor = () => {
	if (bmi < 18.5) return "text-blue-600";
	else if (bmi < 24.9) return "text-green-600";
	else if (bmi < 29.9) return "text-yellow-600";
	return "text-red-600";
};

const getWaistHipRatioColor = () => {
	if (sex === "male") {
		if (waistHipRatio < 0.9) return "text-green-600";
		else if (waistHipRatio < 1) return "text-yellow-600";
	} else {
		if (waistHipRatio < 0.8) return "text-green-600";
		else if (waistHipRatio < 0.85) return "text-yellow-600";
	}

	return "text-red-600";
};

const getBodyFatColor = () => {
	if (sex === "male") {
		if (bodyFat < 5) return "text-blue-600";
		else if (bodyFat < 20) return "text-green-600";
		else if (bodyFat < 30) return "text-yellow-600";
	} else {
		if (bodyFat < 18) return "text-blue-600";
		else if (bodyFat < 28) return "text-green-600";
		else if (bodyFat < 35) return "text-yellow-600";
	}

	return "text-red-600";
};
</script>

<style scoped lang="postcss">
div {
	@apply default-wrapper max-w-2xl p-6 text-center;

	p {
		@apply text-xl mt-1;
	}

	button {
		@apply button w-1/2 mt-5 mb-3;
	}
}
</style>
