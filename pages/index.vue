<template>
    <div>
        <h1>Home Page</h1>
        <!-- <NuxtImg provider="myProvider" src="/no_profile.jpg" class="fit" fit="cover" sizes="410px" width="410"
            height="410" :placeholder="[50, 50, 50, 1]" loading="lazy" alt="Product" /> -->
        <img :src="imageUrl" alt="">
        <!-- <img :src="'https://mislayer.com/public/img/' + 'no_profile.jpg'" alt=""> -->
    </div>
</template>

<script setup lang="ts">
const imageUrl = ref("");

onMounted(async () => {
    try {
        const response = await fetch('/api/test');
        const blob = await response.blob();
        imageUrl.value = URL.createObjectURL(blob);
    } catch (error) {
        console.error('Error fetching image:', error);
    }
});

onUnmounted(() => {
    URL.revokeObjectURL(imageUrl.value);
});
</script>