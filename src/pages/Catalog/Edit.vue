<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const product = ref({
  Name: '',
  Price: '',
  Quantity: '',
  CategoryId: '',
  Image: ''
})

const fetchProduct = () => {
  axios.get(`/api/products/${route.params.id}`)
    .then(response => product.value = response.data)
    .catch(error => console.log(error.response))
}

const handleUpdate = () => {
  axios.put(`/api/products/update`, product.value)
    .then(() => router.push('/products'))
    .catch(error => console.log(error.response))
}
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    product.value.Image = reader.result;
  };
};


onMounted(() => fetchProduct())
</script>

<template>
  <div>
    <form @submit.prevent="handleUpdate" class="max-w-full px-4 sm:px-6 lg:px-12">
      <p class="text-2xl tracking-wide text-gray-900">Edit product</p>
      <div class="mt-4 flex flex-col space-y-4">
        <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
        <div>
          <label for="Name" class="block font-medium text-sm text-gray-700">Name</label>
          <input type="text" name="Name" id="Name" v-model="product.Name" placeholder="Product Name" autofocus="on" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="price" class="block font-medium text-sm text-gray-700">Price</label>
          <input type="text" name="price" id="price" v-model="product.Price" placeholder="$99.99" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="quantity" class="block font-medium text-sm text-gray-700">Quantity</label>
          <input type="text" name="quantity" id="quantity" v-model="product.Quantity" placeholder="Quantity" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="category-id" class="block font-medium text-sm text-gray-700">Category ID</label>
          <input type="text" name="category-id" id="category-id" v-model="product.CategoryId" placeholder="Category ID" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        
          <div>
            <label for="Image" class="block font-medium text-sm text-gray-700">Image</label>
            <img :src="product.Image" width="150" height="150">
             <input type="file" @change="handleFileUpload">
          </div>

        <div class="flex items-center justify-end">
          <RouterLink
            to="/products"
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
