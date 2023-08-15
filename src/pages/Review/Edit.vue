<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const product = ref({
    Id: '',
    CustomerId: '',
    ProductId: '',
    Status: ''
})

const fetchProduct = () => {
  axios.get(`/api/orders/${route.params.id}`)
    .then(response => product.value = response.data)
    .catch(error => console.log(error.response))
}

const handleUpdate = () => {
  axios.put(`/api/orders/update`, product.value)
    .then(() => router.push('/orders'))
    .catch(error => console.log(error.response))
}

onMounted(() => fetchProduct())
</script>

<template>
  <div>
    <form @submit.prevent="handleUpdate" class="max-w-full px-4 sm:px-6 lg:px-12">
      <p class="text-2xl tracking-wide text-gray-900">Create Order</p>
      <div class="mt-4 flex flex-col space-y-4">
        <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
        <div>
          <label for="CustomerId" class="block font-medium text-sm text-gray-700">Customer_ID</label>
          <input type="text" name="CustomerId" id="CustomerId" v-model="product.CustomerId" placeholder="Customer Id" autofocus="on" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="ProductId" class="block font-medium text-sm text-gray-700">Product_ID</label>
          <input type="text" name="ProductId" id="ProductId" v-model="product.ProductId" placeholder="$99.99" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Status" class="block font-medium text-sm text-gray-700">Status</label>
          <input type="text" name="Status" id="Status" v-model="product.Status" placeholder="Status" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div class="flex items-center justify-end">
          <RouterLink
            to="/orders"
            type="button"
            class="mt-3 inline-flex items-center px-4 py-2 border-2 text-gray-900 border-gray-900 rounded-md font-semibold text-xs hover:text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4"
          >
            Cancel
          </RouterLink>

          <button
            type="submit"
            class="mt-3 inline-flex items-center px-4 py-2 bg-cyan-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
