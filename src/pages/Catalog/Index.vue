<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Table from '@/components/Table.vue'

const route = useRoute()

const tableFields = [
  { name: 'Id', header: 'ID', alignment: 'right' },
  { name: 'Image', header: 'Image', alignment: 'right' },
  { name: 'Name', header: 'Name', alignment: 'right' },
  { name: 'Price', header: 'Price', alignment: 'right' },
  { name: 'Quantity', header: 'Quantity', alignment: 'right' },
  { name: 'actions', header: 'Actions', alignment: 'right' }
]

const products = ref([])

const fetchProducts = () => {
  axios
    .get(`/api/products`)
    .then(response => (products.value = response.data))
    .catch(error => console.log(error.response))
}

const handleAddToCart = order => {
  alert(`Added to cart: ${order.Name}`)
}

const handleAddToWishlist = order => {
  alert(`Added to wishlist: ${order.Name}`)
}

const handleDelete = product => {
  const confirmed = confirm(`Are you sure you want to delete ${product.Name}?`)

  if (confirmed) {
    axios
      .post(`/api/products/delete/${product.Id}`)
      .then(() => fetchProducts())
      .catch(error => console.log(error.response))
  }
}

onMounted(() => fetchProducts())

onUpdated(() => fetchProducts())
</script>

<template>
  <div class="mt-12">
    <template v-if="route.path === '/catalogs'">
      <Table :fields="tableFields" :data="products">
        <template v-slot:actions="slotProps">
          <div class="px-6 py-4 flex items-center justify-end">
            <button @click="handleAddToCart(slotProps.data)" class="text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase">Add To Cart</button>

            <button @click="handleAddToWishlist(slotProps.data)" class="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase">Add to Wishlist</button>
          </div>
        </template>
      </Table>
    </template>
    <RouterView v-else />
  </div>
</template>
