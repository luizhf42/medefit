<template>
	<label
		><span class="metric">{{ metricInPortuguese }}</span>
		<div>
			<input
				type="text"
				inputmode="decimal"
				v-model="input"
				@keypress="updateLocalStorage"
				:class="{
					'invalid-input focus-visible:outline-red-600': !isInputValid,
				}"
			/>
			<span :class="{ 'invalid-input': !isInputValid }">{{ suffix }}</span>
		</div></label
	>
</template>

<script setup lang="ts">
const { metric, metricInPortuguese, suffix } = defineProps<{
	metric: string;
	metricInPortuguese: string;
	suffix: string;
}>();

const emit = defineEmits(["update"]);

onMounted(() => {
	if (process.client) {
		const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");
		input.value = userInputs[metric.toLowerCase()] ?? "";
	}
});

const input = ref<string>();
const regex = /^\d*([\.,]?\d*)?$/;
const isInputValid = computed(() => {
	if (!input.value) return true;
	return regex.test(input.value);
});

const updateLocalStorage = () => {
	if (process.client) {
		const inputValue = Number(input.value?.replace(",", "."));
		const userInputs = JSON.parse(localStorage.getItem("user-inputs") ?? "{}");

		const updatedUserInputs = {
			...userInputs,
			[metric]: inputValue > 0 ? inputValue : null,
		};
		updatedUserInputs.areInputsValid = Object.values(updatedUserInputs).every(
			(value) => value !== null && !Number.isNaN(value)
		);

		localStorage.setItem("user-inputs", JSON.stringify(updatedUserInputs));
		emit("update");
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
			@apply flex h-10 w-full rounded-md border px-3 py-2 pr-9 text-sm transition-all;
		}

		span {
			@apply ml-[-32px] text-right transition-all;
		}
	}
}
</style>
