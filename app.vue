<template>
	<Result
		@reset="reset"
		:bmi="bmi!"
		:body-fat="bodyFat!"
		:waist-hip-ratio="waistHipRatio!"
		:sex="sex!"
		v-if="bmi && bodyFat"
	/>
	<Form @calculate="calculateResults" v-else />
</template>

<script setup lang="ts">
import type { Sex, UserInputs } from "./models/userInputs";
const bmi = ref<number>();
const bodyFat = ref<number>();
const waistHipRatio = ref<number>();
const sex = ref<Sex>();

onBeforeMount(() => {
	if (process.client) {
		if (!localStorage.getItem("user-inputs")) {
			const userInputs: UserInputs = {
				areInputsValid: false,
				height: 0,
				hip: 0,
				neck: 0,
				sex: "male",
				waist: 0,
				weight: 0,
			};
			localStorage.setItem("user-inputs", JSON.stringify(userInputs));
		}
	}
});

const calculateResults = () => {
	if (process.client) {
		const userInputs = JSON.parse(localStorage.getItem("user-inputs")!);
		sex.value = userInputs.sex;
		bmi.value = calculateBmi(userInputs.weight, userInputs.height);
		bodyFat.value = calculateBodyFat(userInputs);
		waistHipRatio.value = calculateWaistHipRatio(
			userInputs.waist,
			userInputs.hip
		);
	}
};

const calculateBmi = (weight: number, height: number) =>
	weight / Math.pow(height / 100, 2);

const calculateWaistHipRatio = (waist: number, hip: number) => waist / hip;

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
				0.35004 *
					Math.log10(userInputs.waist + userInputs.hip - userInputs.neck) +
				0.221 * Math.log10(userInputs.height)) -
		450;
	return bodyFat;
};

const reset = () => {
	bmi.value = undefined;
	bodyFat.value = undefined;
	waistHipRatio.value = undefined;
};
</script>

<style scoped lang="postcss"></style>
