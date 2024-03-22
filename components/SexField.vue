<template>
	<div ></div>
	<fieldset>
		<legend>Sex</legend>
		<div class="wrapper">
			<SexInput radioSex="male" />
			<SexInput radioSex="female" />
		</div>
	</fieldset>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
fieldset {
	@apply p-2;

	legend {
		@apply text-center text-sm font-medium;
	}

	.wrapper {
		@apply flex justify-center items-center;
	}
}
</style>
