<template>
	<p>sua gordura corporal é {{ bodyFat }}</p>
	<p>seu IMC é {{ bmi }}</p>
</template>

<script setup lang="ts">
const { bmi, bodyFat } = defineProps<{
	bmi: number;
	bodyFat: number;
}>();
</script>

<style scoped lang="postcss"></style>
