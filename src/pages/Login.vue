<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import transporter from './sendMail.js';
const router = useRouter()

const formData = ref({
  email: '',
  password: ''
})
const userData = ref({
  Email: '',
  Type: ''
})
const errorMessage = ref(null)

const submitLogin = () => {
  axios.post('/api/tlogin', formData.value)
    .then(response => {
      errorMessage.value = null
      localStorage.setItem('authToken', response.data.TKey)
      localStorage.setItem('userEmail', response.data.UserId)
      const userEmail = localStorage.getItem('userEmail')
      axios.get(`api/user?email=${userEmail}`, {
         
        })
        .then(userTypeResponse => {
          const userType = userTypeResponse.data;
          console.log(userType.Type);
          // router.push('/');
          if (userType.Type === 'Admin') {
            router.push('/')
          } else if (userType.Type === 'Customer') {
            // const userEmail = "skshihab531@gmail.com"; // Replace with the user's email address 
            //    // Define the email details
            // const mailOptions = {
            //   from: 'devile741@gmail.com', // Replace with your own email address
            //   to: userEmail,
            //   subject: 'Welcome to My App',
            //   text: 'Thank you for logging in. We appreciate your support!'
            // };

            // // Send the email
            // transporter.sendMail(mailOptions, (error, info) => {
            //   if (error) {
            //     console.error(error);
            //   } else {
            //     console.log('Email sent: ' + info.response);
            //   }
            // });  
            router.push('/')
          }
            else if (userType.Type === 'Manager') {
            router.push('/managerdash')
          }
           else if (userType.Type === 'Employee') {
            router.push('/employeedash')
          }
          else {
            router.push('/login', { state: { error: 'Invalid user type' } })
          }
        })
        .catch(error => {
          console.error(error);
         
        });
      // Router push to specific links based on user type
      
    })
    .catch(error => errorMessage.value = error.response.data.Message)
}
</script>



<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <form @submit.prevent="submitLogin" class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      <img src="../assets/logo.png" alt="Logo" class="mx-auto h-32 w-32" />
      
      <p class="text-gray-900">Welcome to Sunnah Store!</p>
      <p class="mt-2 text-xs text-gray-900">Please sign in to continue</p>

      <div class="mt-4 flex flex-col space-y-4">
        <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
        <div>
          <label for="email" class="block font-medium text-sm text-gray-700">Email</label>
          <input type="text" name="email" id="email" v-model="formData.email" placeholder="your@email.com" autofocus="on" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div>
          <label for="password" class="block font-medium text-sm text-gray-700">Password</label>
          <input type="password" name="password" id="password" v-model="formData.password" placeholder="********" class="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" />
        </div>

        <div class="flex items-center justify-between">
          <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="http://subify.test/forgot-password"> Forgot your password? </a>

          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 bg-[#F47458] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  </div>
</template>


