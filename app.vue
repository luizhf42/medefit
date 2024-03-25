<template>
	<form>
		<div class="grid gap-3 p-6">
			<SexField />
			<div class="flex flex-col xs:flex-row  flex-wrap justify-between">
				<BodyMetricInput metric="Age" suffix="yrs" />
				<BodyMetricInput metric="Weight" suffix="kg" />
				<BodyMetricInput metric="Height" suffix="cm" />
				<BodyMetricInput metric="Neck" suffix="cm" />
				<BodyMetricInput metric="Waist" suffix="cm" />
				<BodyMetricInput metric="Hip" suffix="cm" />
			</div>
			<button>manda</button>
		</div>
	</form>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
form {
	@apply bg-white rounded-lg mx-auto border shadow w-11/12 max-w-lg;
}
</style>
