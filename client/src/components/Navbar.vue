<template>
  <div class="navbar">
    <div class="title">
       <router-link to="dashboard"> <img class="logo" src="../assets/katma_logo.png"/></router-link>
    </div>
    <div class="menu-item">
        <router-link to="dashboard" active-class="active" tag="button" class="side-btn">
            <div class="link_container">
                Dashboard
            </div>
        </router-link>
        <router-link to="profile" active-class="active" tag="button" class="side-btn">
            <div class="link_container">
                Profile
            </div>
        </router-link>
        <router-link to="about" active-class="active" tag="button" class="side-btn">
            <div class="link_container">
                About Us
            </div>
        </router-link>
        <router-link to="contact" active-class="active" tag="button" class="side-btn">
            <div class="link_container">
                Contact Us
            </div>
        </router-link>
        <router-link to="/" tag="button" class="side-btn">
            <div class="link_container">
                Log out
            </div>
        </router-link>
        
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
    height: 80px;
    width: 180px;
    margin-top: 20px;
    padding: 40px;
    background-color: rgb(238, 241, 247);
    border-radius: 40px 40px 40px 40px;
}
.menu-item{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}
.menu-item >*{
    margin-top: 60px;
}
.side-btn:focus{
    outline: none;
}
.side-btn{
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    background-color: transparent;
    border-radius: 0px 40px 40px 0px;
}
.side-btn.active{
    background-color: #97bf0d;
    color: black;
    font-weight: 500px;
} 
.logout{
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 20px;
    color: black;
    background-color: red;
}
</style>
