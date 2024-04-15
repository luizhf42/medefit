<template>
	<label>
		<input
			type="radio"
			name="gender"
			:value="radioSex"
			:checked="radioSex == 'male'"
			@change="updateLocalStorage"
		/>
		<div :class="radioSex">{{ radioSex }}</div>
	</label>
</template>

<script setup lang="ts">
import type { Sex } from "~/models/userInputs";
const { radioSex } = defineProps<{
	radioSex: Sex;
}>();

const updateLocalStorage = () => {
	const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");
	const updatedUserInputs = {
		...userInputs,
		sex: radioSex,
	};
	localStorage.setItem("user-inputs", JSON.stringify(updatedUserInputs));
};
</script>

<style scoped lang="postcss">
label {
	@apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center;

	input {
		@apply hidden;

		&:not(:checked) + div {
			@apply bg-transparent text-gray-900;
		}
	}

	div {
		@apply transition-colors capitalize text-lg font-bold w-20 h-10 flex items-center justify-center text-white border border-gray-500;

		&.female {
			@apply bg-pink-600 rounded-r-md border-l-0;
		}

		&.male {
			@apply bg-blue-600 rounded-l-md border-r-0;
		}
	}
}
</style>
