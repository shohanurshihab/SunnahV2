<script setup></script>

<template>
  <nav class="mt-14 flex flex-col gap-y-6">
    <RouterLink to="/" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Dashboard</span>
    </RouterLink>
    <RouterLink to="/delivery" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Delivery</span>
    </RouterLink>
    <RouterLink to="/customer-service" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Customer Service</span>
    </RouterLink>
    <RouterLink to="/category-product" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Category Product</span>
    </RouterLink>
  </nav>
</template>
