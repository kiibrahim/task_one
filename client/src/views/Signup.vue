<template>
   <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
        <!-- <img src="@/assets/Katma_logo.png"> -->
      <h2>Create your account</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <form @submit.prevent="save">
          <div class="input_field">
            <input type="email" name="email" placeholder="Email" v-model="email" required />
            <br/>
            <input type="text" name="text" placeholder="username" v-model="userName" required />
            <br/>
            <input type="text" name="name" placeholder="First Name" v-model="firstName" required />
            <br/>
            <input type="text" name="name" placeholder="Last Name" v-model="lastName" required />
            <br/>
            <input type="password" name="password" placeholder="Password" v-model="password" required />
            <br/>
            <input type="password" name="password" placeholder="Re-type Password" v-model="verifiedPassword" required />
            <br/>
        </div>
             <input class="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return{
        email:'',
        userName:'',
        firstName:'',
        lastName:'',
        password:'',
        verifiedPassword:''
      }
    },
   
    methods:{
      save(){
        if(this.password == this.verifiedPassword){
          axios.post('http://localhost:8082/registered',{
            email: this.email,
            userName: this.userName,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password
          })
          this.$router.push('/')
        }
        else{
          alert("Tow password have to be same")
        }
      }
    }
}
</script>
<style>
img{
    height: 180px;
    width: 350px;
}
</style>