<template>
  <div class="login">
    <Navbar/>
    <div class="content">
        <router-view/>
    </div> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name: "Login",
    data() {
        return {};
    },
    components: { 
        Navbar
         }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #575656;
    height: 125vh;
    width: 100vw;
   

}
.content{
    background-color: whitesmoke;
    border-radius: 20px;
    margin: 6px 6px 6px 6px;
} 
</style>
