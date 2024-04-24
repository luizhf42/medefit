<template>
	<div ></div>
	<fieldset>
		<legend>Sexo</legend>
		<div class="wrapper">
			<SexInput radioSex="male" sexInPortuguese="Masculino" />
			<SexInput radioSex="female" sexInPortuguese="Feminino" />
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
