<template>
	<label>
		<input
			type="radio"
			name="gender"
			:value="radioSex"
			:checked="checked"
			@change="updateLocalStorage"
		/>
		<div :class="radioSex">{{ sexInPortuguese }}</div>
	</label>
</template>

<script setup lang="ts">
import type { Sex } from "~/models/userInputs";
const { radioSex, sexInPortuguese } = defineProps<{
	radioSex: Sex;
	sexInPortuguese: string;
}>();

const checked = ref<boolean>(radioSex == "male");

onMounted(() => {
	const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");
	if (!userInputs.sex) {
		const updatedUserInputs = {
			...userInputs,
			sex: "male",
		};
		localStorage.setItem("user-inputs", JSON.stringify(updatedUserInputs));
	} else {
		checked.value = radioSex === userInputs.sex;
	}
});

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
		@apply transition-colors capitalize text-lg font-bold w-32 h-10 flex items-center justify-center text-white border border-gray-500;

		&.female {
			@apply bg-pink-600 rounded-r-md border-l-0;
		}

		&.male {
			@apply bg-blue-600 rounded-l-md border-r-0;
		}
	}
}
</style>
