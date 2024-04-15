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
		(86.01 * Math.log10(userInputs.waist - userInputs.neck) -
			70.041 * Math.log10(userInputs.height) +
			36.76);

	return bodyFat;
};

const calculateFemaleBodyFat = (userInputs: UserInputs) => {
	const bodyFat =
		(163.205 * Math.log10(userInputs.waist + userInputs.hip - userInputs.neck) -
			97.684 * Math.log10(userInputs.height) -
			78.387);
	return bodyFat;
};
</script>

<style scoped lang="postcss"></style>
