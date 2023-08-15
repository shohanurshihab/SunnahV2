<script setup></script>

<template>
  <nav class="mt-14 flex flex-col gap-y-6">
    <RouterLink to="/catalogs" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Catalogs</span>
    </RouterLink>
    <RouterLink to="/wishlist" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Wishlist</span>
    </RouterLink>
    <RouterLink to="/payments" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Payments</span>
    </RouterLink>
    <RouterLink to="/review" class="flex items-center mx-6 hover:bg-slate-100 px-7 py-1 rounded-md">
      <img src="../assets/icons/settings.png" class="h-6 w-6" />
      <span class="ml-7 text-gray-900 text-lg">Review</span>
    </RouterLink>
  </nav>
</template>
