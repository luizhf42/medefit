<template>
	<label
		><span class="metric">{{ metric }}</span>
		<div>
			<input type="text" inputmode="decimal" />
			<span>{{ suffix }}</span>
		</div></label
	>
</template>

<script setup lang="ts">
const { metric, suffix } = defineProps<{
	metric: string;
	suffix: string;
}>();
</script>

<style scoped lang="postcss">
label {
	@apply text-sm font-medium w-4/5 mx-auto xs:w-[45%] mb-4;

	.metric {
		@apply py-2 px-1;
	}

	div {
		@apply flex items-center;
		input {
			@apply flex h-10 w-full rounded-md border px-3 py-2 pr-8 text-sm;
		}
		span {
			@apply ml-[-32px] text-right;
		}
	}
}
</style>
