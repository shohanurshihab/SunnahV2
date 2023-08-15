<script setup>
import Pagination from './Pagination.vue'

const props = defineProps({
    fields: Array,
    data: Array,
    // meta: Object
})

const classes = field => {
    let classes = ''

    if (field.name.toLowerCase() === 'status1') {
        classes = 'hidden px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider md:block'
    } else {
        classes = 'px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'

        if (field.alignment) {
            classes += ` text-${field.alignment}`
        }
    }

    return classes
}

const statusStyles = {
    created: 'bg-green-100 text-green-800',
    updated: 'bg-yellow-100 text-yellow-800',
    success: 'bg-green-100 text-green-800',
    shipped: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
    delivered: 'bg-blue-100 text-blue-800',
    new: 'bg-gray-100 text-gray-800'
}
const typeSet = {
   0 : "Admin",
   1 : "Manager",
   2 : "Employee",
   3 : "Customer",
}
</script>

<template>
  <div class="max-w-full px-4 sm:px-6 lg:px-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in data" :key="item.id" class="bg-white rounded-lg shadow-md">
        <div class="p-4">
          <div class="flex justify-center">
            <img :src="item.Image" class="w-40 h-40 object-contain">
          </div>
          <div class="mt-4">
            <div class="text-lg text-gray-900">Product ID : {{ item.Id }}</div>
            <div class="text-xl font-bold text-gray-500">Product Name : {{ item.Name }}</div>
            <div class="mt-2 text-gray-900">Price : {{ item.Price }} ৳</div>
            <div class="mt-2 text-gray-900">In Stock :{{ item.Quantity }}</div>
            <div class="mt-2 text-gray-900"> Category : {{ item.CategoryId }}</div>
             <div class="mt-2 flex justify-end">
              <slot :item="item"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.length === 0" class="mt-4 text-gray-500">No Records Available</div>
  </div>
</template>
