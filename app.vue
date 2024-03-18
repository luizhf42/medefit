<template>
	<form>
		<div class="p-6">
			<div class="grid gap-3">
				<SexField />
				<div class="flex flex-wrap justify-between">
					<BodyMetricInput metric="Age" />
					<BodyMetricInput metric="Weight" />
					<BodyMetricInput metric="Height" />
					<BodyMetricInput metric="Neck" />
					<BodyMetricInput metric="Waist" />
					<BodyMetricInput metric="Hip" />
				</div>
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
