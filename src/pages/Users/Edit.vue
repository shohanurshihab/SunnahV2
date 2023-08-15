<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const product = ref({
  Name: '',
  Email: '',
  Address: '',
  Phone: '',
  Dob: '',
  Password: '',
  Type: '',
  Image: ''
})


const fetchProduct = () => {
  axios.get(`/api/users/${route.params.id}`)
    .then(response => product.value = response.data)
    .catch(error => console.log(error.response))
}

const handleUpdate = () => {
  axios.put(`/api/users/update`, product.value)
    .then(() => router.push('/users'))
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
      <div class="mt-4 flex flex-col space-y-4">
        <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
        <div class="mx-auto">
            <label for="Image" class="block font-medium text-sm text-gray-700">Image</label>
            <img :src="product.Image" width="150" height="150">
             <input type="file" @change="handleFileUpload">
          </div>
        <div>
          <label for="email" class="block font-medium text-sm text-gray-700">Name</label>
          <input type="text" name="email" id="email" v-model="product.Name" placeholder="Product Name" autofocus="on" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Email" class="block font-medium text-sm text-gray-700">Email</label>
          <input type="text" name="Email" id="Email" v-model="product.Email" placeholder="$99.99" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Address" class="block font-medium text-sm text-gray-700">Address</label>
          <input type="text" name="Address" id="Address" v-model="product.Address" placeholder="Address" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Phone" class="block font-medium text-sm text-gray-700">Phone</label>
          <input type="text" name="Phone" id="Phone" v-model="product.Phone" placeholder="Phone" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Dob" class="block font-medium text-sm text-gray-700">Dob</label>
          <input type="text" name="Dob" id="Dob" v-model="product.Dob" placeholder="Dob" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Password" class="block font-medium text-sm text-gray-700">Password</label>
          <input type="text" name="Password" id="Password" v-model="product.Password" placeholder="Password" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="Type" class="block font-medium text-sm text-gray-700">Type</label>
          <input type="text" name="Type" id="Type" v-model="product.Type" placeholder="Type" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>


        <div class="flex items-center justify-end">
          <RouterLink
            to="/users"
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
