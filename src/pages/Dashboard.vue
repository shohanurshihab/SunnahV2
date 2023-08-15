<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Chart from 'chart.js/auto'

export default {
  setup() {
    let users = ref(0)
    let orders = ref(0)
    let product = ref(0)

    const fetchUsers = () => {
      return axios
        .get(`/api/users`)
        .then(response => {
          users.value = response.data.length
        })
        .catch(error => console.log(error.response))
    }

    const fetchOrders = () => {
      return axios
        .get(`/api/orders`)
        .then(response => {
          orders.value = response.data.length
        })
        .catch(error => console.log(error.response))
    }

    const fetchProduct = () => {
      return axios
        .get(`/api/products`)
        .then(response => {
          product.value = response.data.length
        })
        .catch(error => console.log(error.response))
    }

    onMounted(() => {
      Promise.all([fetchUsers(), fetchOrders(), fetchProduct()])
        .then(() => {
          const ctx = document.getElementById('orders-chart').getContext('2d')
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Users', 'Orders', 'Products'],
              datasets: [
                {
                  label: 'Count',
                  data: [users.value, orders.value, product.value],
                  backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                  borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                  borderWidth: 5
                }
              ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          })
        })
        .catch(error => console.log(error))
    })

    return {
      users,
      orders,
      product
    }
  }
}
</script>
<template>
  <div class="dashboard">
    <div class="bars">
      <RouterLink to="/users" class="bar bar-users">
        <h2>Users</h2>
        <div class="bar-value">{{ users }}</div>
      </RouterLink>
      <RouterLink to="/orders" class="bar bar-orders">
        <h2>Orders</h2>
        <div class="bar-value">{{ orders }}</div>
      </RouterLink>
      <RouterLink to="/products" class="bar bar-products">
        <h2>Products</h2>
        <div class="bar-value">{{ product }}</div>
      </RouterLink>
    </div>
    <div class="chart-container">
      <canvas id="orders-chart"></canvas>
    </div>
  </div>
</template>

<style>
.dashboard {
  translate: 0px -20px;
  padding: 1.14rem;
  
}

.bars {
  display: flex;
  justify-content:space-evenly;
  margin-bottom: 2rem;
}

.bar {
  flex-basis: calc(33.33% - 1rem);
  background-color: rgba(255, 99, 132, 0.2);
  max-width: 28%;
  border-radius: 25px;
  padding: 0.8rem;
  box-sizing: border-box;
  height: 130px;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar-users {
  background-color: rgba(255, 99, 132, 1);
}

.bar-orders {
  background-color: rgba(54, 162, 235, 1);
}

.bar-products {
  background-color: rgba(255, 206, 86, 1);
}

.bar h2 {
  font-size: 30px;
  text-align: left;
  margin-top: -5px;
}

.bar-value {
  font-size: 80px;
  font-weight: bold;
  text-align: right;
  margin: 0;
  translate: 0px -55px;
}

.chart-container {
  flex: 1;
  margin: 1rem 0;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 500px;
}

.chart-container canvas {
  max-width: 100%;
  max-height: 100%;
}

/* New style for RouterLink */
.RouterLink-bar {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
</style>

