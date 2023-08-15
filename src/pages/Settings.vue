<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const userData = ref({
  Id: '',
  Name: '',
  Email: '',
  Address: '',
  Phone: '',
  Dob: '',
  Image: '',
  Password: ''
})
const usid = ref({
  Id: ''
})
const typeMap = {
  Admin: 0,
  Manager: 1,
  Employee: 2,
  Customer: 3
}

const handleUpdate = () => {
  if (Object.keys(typeMap).includes(userData.value.Type)) {
    userData.value.Type = typeMap[userData.value.Type]
  }
  axios
    .put(`/api/users/update`, userData.value)
    .then(() => window.location.reload())
    .catch(error => console.log(error.response))
}

const uid = () => {
  return new Promise((resolve, reject) => {
    const userEmail = localStorage.getItem('userEmail')
    if (localStorage.getItem('authToken')) {
      axios
        .get(`api/user?email=${userEmail}`)
        .then(response => {
          usid.value.Id = response.data.Id
          resolve(usid.value.Id)
          // console.log(usid.value.Id)
        })
        // .then(response =>console.log(response.data.Id))
        .catch(error => console.log(error.response))
    }
  })
}

const fetchProduct = async () => {
  await uid()
  const userEmail = localStorage.getItem('userEmail')
  if (localStorage.getItem('authToken')) {
    console.log(usid.value.Id)
    axios
      .get(`api/users/${usid.value.Id}`)
      .then(response => (userData.value = response.data))
      .catch(error => console.log(error.response))
  }
}
const handleFileUpload = event => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    userData.value.Image = reader.result
  }
}
onMounted(() => uid())
onMounted(() => fetchProduct())
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <div class="container">
    <div class="profile-pic-container">
    <label for="image-upload" class="image-label">
      <img  :src="userData.Image" alt="Profile Pic" id="profile-pic" />
      <input type="file" id="image-upload" name="Image" @change="handleFileUpload" />
     <div class="upload-logo">
        <i class="fas fa-cloud-upload-alt"></i>
        <span>Click to Upload</span>
      </div>
    </label>
  </div>
     <form @submit.prevent="handleUpdate" class="update-form" method="post">
    <div class="form-row">
      <div class="column">
        <label for="name">Name:</label>
        <input type="text" id="name" name="Name" v-model="userData.Name" />
        <label for="email">Email:</label>
        <input type="email" id="email" name="Email" v-model="userData.Email" />
        <label for="dob">Date of Birth:</label>
        <input type="text" id="dob" name="Dob" v-model="userData.Dob" />
      </div>
      <div class="column">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="Phone" v-model="userData.Phone" />
        <label for="type">Type:</label>
        <input type="text" id="type" name="Type" v-model="userData.Type" />
        <label for="address">Address:</label>
        <textarea id="address" name="Address" v-model="userData.Address"></textarea>
      </div>
    </div>
    <button type="submit" class="btn">Update Profile</button>
    </form>
  </div>
</template>

<style>
.container {
  background: #e8f4ff42;
  width: 60%;
  margin-top: -50px;
  margin-left: 300px;
  padding: 3rem;
  border-radius: 3%;
}

.profile-pic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-pic-container img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.form-row {
  display: flex;
  margin-bottom: 2rem;
}

.column {
  flex: 1;
  margin-right: 1rem;
}

.column:last-child {
  margin-right: 0;
}

label {
  font-weight: bold;
}
.column label{
  width: 100%;
  padding: 0.5rem;
}

.column input{
  width: 100%;
  padding: 0.5rem;
  border: #007bff2d;
  border-style:solid;
}

.column textarea {
  width: 100%;
  padding: 0.4rem;
  border: #007bff2d;
  border-style:solid;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  align-self: flex-end; /* Align button to the right */
  translate: 750px 30px;
}
.image-label {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.image-label img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.image-label input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.upload-logo {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 12px;
}

.upload-logo i {
  margin-right: 4px;
}

.upload-logo span {
  font-weight: bold;
}


</style>
