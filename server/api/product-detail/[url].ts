export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const products = await $fetch("https://mislayer.com/public/api/ecom/product-detail", {
		method: "POST",
		body: body
	})
	return products
})
