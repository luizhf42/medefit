<template>
	<label>{{ metric }}<input type="number" :placeholder="metric" /></label>
</template>

<script setup lang="ts">
const { metric } = defineProps<{
	metric: string;
}>();
</script>

<style scoped lang="postcss">
label {
	@apply text-sm font-medium w-5/12 mb-3;

	input {
		@apply flex h-10 w-full rounded-md border px-3 py-2 text-sm;
	}
}
</style>
