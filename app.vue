<template>
	<form>
		<div class="grid gap-3 p-6">
			<SexField />
			<div class="flex flex-wrap justify-between">
				<BodyMetricInput metric="Age" suffix="yrs" />
				<BodyMetricInput metric="Weight" suffix="kg" />
				<BodyMetricInput metric="Height" suffix="cm" />
				<BodyMetricInput metric="Neck" suffix="cm" />
				<BodyMetricInput metric="Waist" suffix="cm" />
				<BodyMetricInput metric="Hip" suffix="cm" />
			</div>
		</div>
	</form>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
form {
	@apply bg-white rounded-lg border shadow w-full max-w-lg;
}
</style>
