<template>
	<fieldset>
		<legend>Gender</legend>
		<div class="wrapper">
			<SexInput radioSex="male" />
			<SexInput radioSex="female" />
		</div>
	</fieldset>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
fieldset {
	@apply border border-gray-200 dark:border-gray-800 rounded-lg p-2;

	.wrapper {
		@apply flex justify-center items-center;
	}
}
</style>
