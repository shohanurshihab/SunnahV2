<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Table from '@/components/Table.vue'

const route = useRoute()

const tableFields = [
  { name: 'Id', header: 'ID', alignment: 'right' },
  { name: 'ProductId', header: 'Product_ID', alignment: 'right' },
  { name: 'actions', header: 'Actions', alignment: 'right' }
]

const products = ref([])

const fetchProducts = () => {
  axios
    .get(`/api/wishlists`)
    .then(response => (products.value = response.data))
    .catch(error => console.log(error.response))
}

const handleDelete = product => {
  const confirmed = confirm(`Are you sure you want to delete ${product.Id}?`)

  if (confirmed) {
    axios
      .post(`/api/wishlists/delete/${product.Id}`)
      .then(() => fetchProducts())
      .catch(error => console.log(error.response))
  }
}

onMounted(() => fetchProducts())

onUpdated(() => fetchProducts())
</script>

<template>
  <div class="mt-12">
    <template v-if="route.path === '/wishlist'">
      <Table :fields="tableFields" :data="products">
        <template v-slot:actions="slotProps">
          <div class="px-6 py-4 flex items-center justify-end">
            <RouterLink :to="`/wishlists/${slotProps.data.Id}/edit`" class="text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase">Edit</RouterLink>

            <button @click="handleDelete(slotProps.data)" class="ml-1 text-xs bg-red-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase">Delete</button>
          </div>
        </template>
      </Table>
    </template>
    <RouterView v-else />
  </div>
</template>
