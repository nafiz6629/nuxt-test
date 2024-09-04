<template>
    <div>
        <h1>Home Page</h1>
        <a href="/about">About</a>
    </div>
</template>

<script setup>
const url = "angelica-divan-bfl-dv-116-74"
const { data, status, error, refresh, clear } = await useAsyncData(() => $fetch('https://mislayer.com/public/api/ecom/product-detail', {
    method: "POST",
    body: {
        company_code: "d05049134c17ed5289ff4e810c2618e4",
        fg_url: url,
    }
}))

watchEffect(() => {
    if (data.value) {
        const metaTitle = computed(() => data.value.data.acc_ledger_name) // Access reactively
        useHead({
            title: metaTitle.value, // Use computed value directly
            meta: [
                { name: 'description', content: metaTitle.value }
            ],
        })
    }
})
</script>