<script setup></script>

<template>
  <nav class="mt-14 flex flex-col gap-y-6">
    <RouterLink to="/" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/dashboard.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Dashboard</span>
    </RouterLink>

    <RouterLink to="/users" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/products.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Users</span>
    </RouterLink>

    <RouterLink to="/products" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/products.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Products</span>
    </RouterLink>

    <RouterLink to="/orders" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/orders.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Orders</span>
    </RouterLink>

    <RouterLink to="#" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/products.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Marketing</span>
    </RouterLink>
    <slot></slot>
  </nav>
</template>
