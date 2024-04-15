<template>
	<Form @calculate="calculateResults" />
	<Result :bmi="bmi!" :body-fat="bodyFat!" v-if="bmi && bodyFat" />
</template>

<script setup lang="ts">
import type { UserInputs } from "./models/userInputs";
const bmi = ref<number>();
const bodyFat = ref<number>();

const calculateResults = () => {
	const userInputs = JSON.parse(localStorage.getItem("user-inputs")!);
	bmi.value = calculateBmi(userInputs.weight, userInputs.height);
	bodyFat.value = calculateBodyFat(userInputs);
};

const calculateBmi = (weight: number, height: number) =>
	weight / Math.pow(height / 100, 2);

const calculateBodyFat = (userInputs: UserInputs) => {
	return userInputs.sex === "male"
		? calculateMaleBodyFat(userInputs)
		: calculateFemaleBodyFat(userInputs);
};

const calculateMaleBodyFat = (userInputs: UserInputs) => {
	const bodyFat =
		495 /
			(1.0324 -
				0.19077 * Math.log10(userInputs.waist - userInputs.neck) +
				0.15456 * Math.log10(userInputs.height)) -
		450;

	return bodyFat;
};

const calculateFemaleBodyFat = (userInputs: UserInputs) => {
	const bodyFat =
		495 /
			(1.29579 -
				0.35004 * Math.log10(userInputs.waist + userInputs.hip - userInputs.neck) +
				0.221 * Math.log10(userInputs.height)) -
		450;
	return bodyFat;
};
</script>

<style scoped lang="postcss"></style>
