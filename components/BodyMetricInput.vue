<template>
	<label
		><span class="metric">{{ metric }}</span>
		<div>
			<input
				type="text"
				inputmode="decimal"
				v-model="input"
				@keyup="updateLocalStorage"
			/>
			<span :class="isInputValid ? 'text-black' : 'text-red-600'">{{
				suffix
			}}</span>
		</div></label
	>
</template>

<script setup lang="ts">
const { metric, suffix } = defineProps<{
	metric: string;
	suffix: string;
}>();

onMounted(() => {
	const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");
	input.value = userInputs[metric.toLowerCase()] ?? "";
});

const input = ref<string>();
const regex = /^\d*\,?\.?\d*$/;
const isInputValid = computed(() => {
	if (!input.value) return true;
	return regex.test(input.value);
});

const updateLocalStorage = () => {
	if (isInputValid.value) {
		const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");
		const updatedUserInputs = {
			...userInputs,
			[metric.toLowerCase()]: Number(input.value?.replace(",", ".")),
		};
		localStorage.setItem("user-inputs", JSON.stringify(updatedUserInputs));
	}
};
</script>

<style scoped lang="postcss">
label {
	@apply text-sm font-medium w-4/5 mx-auto mb-4;

	.metric {
		@apply py-2 px-1;
	}

	div {
		@apply flex items-center;

		input {
			@apply flex h-10 w-full rounded-md border px-3 py-2 pr-9 text-sm;
		}

		span {
			@apply ml-[-32px] text-right;
		}
	}
}
</style>
