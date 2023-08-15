import Login from '@/pages/Login.vue'

import Dashboard from '@/pages/Dashboard.vue'

import ProductsIndex from '@/pages/Products/Index.vue'
import ProductsCreate from '@/pages/Products/Create.vue'
import ProductsEdit from '@/pages/Products/Edit.vue'

import OredersIndex from '@/pages/Orders/Index.vue'
import OrdersCreate from '@/pages/Orders/Create.vue'
import OrdersEdit from '@/pages/Orders/Edit.vue'

import UsersIndex from '@/pages/Users/Index.vue'
import UsersCreate from '@/pages/Users/Create.vue'
import UsersEdit from '@/pages/Users/Edit.vue'

// OrderItems
import OrderItemsIndex from '@/pages/OrderItems/Index.vue'
import OrderItemsCreate from '@/pages/OrderItems/Create.vue'
import OrderItemsEdit from '@/pages/OrderItems/Edit.vue'

// Delivery
import DeliveryIndex from '@/pages/Delivery/Index.vue'
import DeliveryCreate from '@/pages/Delivery/Create.vue'
import DeliveryEdit from '@/pages/Delivery/Edit.vue'

// CustomerService
import CustomerServiceIndex from '@/pages/CustomerService/Index.vue'
import CustomerServiceCreate from '@/pages/CustomerService/Create.vue'
import CustomerServiceEdit from '@/pages/CustomerService/Edit.vue'

// Wishlist
import WishlistIndex from '@/pages/Wishlist/Index.vue'
import WishlistCreate from '@/pages/Wishlist/Create.vue'
import WishlistEdit from '@/pages/Wishlist/Edit.vue'

// Payments
import PaymentsIndex from '@/pages/Payments/Index.vue'
import PaymentsCreate from '@/pages/Payments/Create.vue'
import PaymentsEdit from '@/pages/Payments/Edit.vue'

// Review
import ReviewIndex from '@/pages/Review/Index.vue'
import ReviewCreate from '@/pages/Review/Create.vue'
import ReviewEdit from '@/pages/Review/Edit.vue'

// Inventory
import InventoryIndex from '@/pages/Inventory/Index.vue'
import InventoryCreate from '@/pages/Inventory/Create.vue'
import InventoryEdit from '@/pages/Inventory/Edit.vue'

// CategoryProduct
import CategoryProductIndex from '@/pages/CategoryProduct/Index.vue'
import CategoryProductCreate from '@/pages/CategoryProduct/Create.vue'
import CategoryProductEdit from '@/pages/CategoryProduct/Edit.vue'
// CategoryProduct
import CatalogIndex from '@/pages/Catalog/Index.vue'
import CatalogCreate from '@/pages/Catalog/Create.vue'
import CatalogEdit from '@/pages/Catalog/Edit.vue'


import Employee from '@/pages/Employee.vue'
import Setting from '@/pages/Settings.vue'


const routes = [
  { path: '/', component: Dashboard, meta: {title: "Dashboard", auth: true} },
  { 
    path: '/products',
    component: ProductsIndex, 
    meta: {title: "Products List", auth: true},
    children: [
      { path: 'create', component: ProductsCreate, meta: {title: "Create Product", auth: true} },
      { path: ':id/edit', component: ProductsEdit, meta: {title: "Edit Product", auth: true} },
    ]
  },
  {
    path: '/orders', component: OredersIndex, meta: { title: "Orders", auth: true },
    children: [
      { path: 'create', component: OrdersCreate, meta: {title: "Create Order", auth: true} },
      { path: ':id/edit', component: OrdersEdit, meta: {title: "Edit Order", auth: true} },
    ]
  },
  {
    path: '/users', component: UsersIndex, meta: { title: "Users", auth: true },
  children: [
      { path: 'create', component: UsersCreate, meta: {title: "Create User", auth: true} },
      { path: ':id/edit', component: UsersEdit, meta: {title: "Edit User", auth: true} },
    ]
  },
  {
    path: '/catalogs', component: CatalogIndex, meta: { title: "Catalog", auth: true },
  children: [
      { path: 'create', component: CatalogCreate, meta: {title: "Create Catalog", auth: true} },
      { path: ':id/edit', component: CatalogEdit, meta: {title: "Edit Catalog", auth: true} },
    ]
  },
  { path: '/marketing', component: Employee, meta: {title: "Marketing", auth: true} },
  { path: '/settings', component: Setting, meta: {title: "Settings", auth: true} },
  
  // auth routes
  { path: '/login', component: Login, meta: { title: "Login" } },
  
  {
  path: '/order-items',
  component: OrderItemsIndex,
  meta: {
    title: 'Order Items',
    auth: true,
  },
  children: [
    {
      path: 'create',
      component: OrderItemsCreate,
      meta: {
        title: 'Create Order Item',
        auth: true,
      },
    },
    {
      path: ':id/edit',
      component: OrderItemsEdit,
      meta: {
        title: 'Edit Order Item',
        auth: true,
      },
    },
  ],
},
{
  path: '/delivery',
  component: DeliveryIndex,
  meta: {
    title: 'Delivery',
    auth: true,
  },
  children: [
    {
      path: 'create',
      component: DeliveryCreate,
      meta: {
        title: 'Create Delivery',
        auth: true,
      },
    },
    {
      path: ':id/edit',
      component: DeliveryEdit,
      meta: {
        title: 'Edit Delivery',
        auth: true,
      },
    },
  ],
},
{
  path: '/customer-service',
  component: CustomerServiceIndex,
  meta: {
    title: 'Customer Service',
    auth: true,
  },
  children: [
    {
      path: 'create',
      component: CustomerServiceCreate,
      meta: {
        title: 'Create Customer Service',
        auth: true,
      },
    },
    {
      path: ':id/edit',
      component: CustomerServiceEdit,
      meta: {
        title: 'Edit Customer Service',
        auth: true,
      },
    },
  ],
},
{
  path: '/wishlist',
  component: WishlistIndex,
  meta: {
    title: 'Wishlist',
    auth: true,
  },
  children: [
    {
      path: 'create',
      component: WishlistCreate,
      meta: {
        title: 'Create Wishlist',
        auth: true,
      },
    },
    {
      path: ':id/edit',
      component: WishlistEdit,
      meta: {
        title: 'Edit Wishlist',
        auth: true,
      },
    },
  ],
},
{
  path: '/payments',
  component: PaymentsIndex,
  meta: {
    title: 'Payments',
    auth: true,
  },
  children: [
    {
      path: 'create',
      component: PaymentsCreate,
      meta: {
        title: 'Create Payment',
        auth: true,
      },
    },
    {
      path: ':id/edit',
      component: PaymentsEdit,
      meta: {
        title: 'Edit Payment',
        auth: true,
      },
    },
  ],
},
{
  path: '/review',
  component: ReviewIndex,
  meta: {
    title: 'Review',
    auth: true,
  },
  children: [
    {
      path: 'create',
      component: ReviewCreate,
      meta: {
        title: 'Create Review',
        auth: true,
      },
    },
    {
      path: ':id/edit',
      component: ReviewEdit,
      meta: {
        title: 'Edit Review',
        auth: true,
      },
    },
  ],
},
{
  path: '/inventory',
  component: InventoryIndex,
  meta: { title: "Inventory", auth: true },
  children: [
    {
      path: 'create',
      component: InventoryCreate,
      meta: { title: "Create Inventory", auth: true }
    },
    {
      path: ':id/edit',
      component: InventoryEdit,
      meta: { title: "Edit Inventory", auth: true }
    }
  ]
},
{
  path: '/category-product',
  component: CategoryProductIndex,
  meta: { title: "Category Product", auth: true },
  children: [
    {
      path: 'create',
      component: CategoryProductCreate,meta: { title: "Create Category Product", auth: true }
    },
    {
      path: ':id/edit',
      component: CategoryProductEdit,
      meta: { title: "Edit Category", auth: true }
    }
  ]
},

]

export default routes
