<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Table from '@/components/TableForProduct.vue'

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
  axios.get(`/api/products`)
    .then(response => products.value = response.data)
    .catch(error => console.log(error.response))
}

const handleDelete = product => {
  const confirmed = confirm(`Are you sure you want to delete ${product.Name}?`)

  if(confirmed) {
    axios.post(`/api/products/delete/${product.Id}`)
      .then(() => fetchProducts())
      .catch(error => console.log(error.response))
  }
}

onMounted(() => fetchProducts())

onUpdated(() => fetchProducts())
</script>

<template>
  <div class="mt-12">
    <template v-if="route.path === '/products'">
      <div class="flex justify-end items-center">
      <RouterLink to="/products/create" class="inline-flex items-center px-4 py-2 mr-12 bg-cyan-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4">
        Add Product
      </RouterLink>
    </div>
    <Table :data="products">
        <template v-slot:default="{ item }">
          <RouterLink
            :to="`/products/${item.Id}/edit`"
            class="text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase mr-2"
          >
            Edit
          </RouterLink>
          <button
            @click="() => handleDelete(item)"
            class="text-xs bg-red-500 text-white px-2 py-0.5 rounded-md font-semibold uppercase"
          >
            Delete
          </button>
        </template>
      </Table>
    </template>
    <RouterView v-else />
  </div>
</template>
