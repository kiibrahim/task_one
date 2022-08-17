<template>
  <div class="login">
    <div class="info">
        <img src="../assets/katma_logo.png"/>
        <h4>The KATMA CleanControl developed by KATMA innovates the cleaning of truck trailers by replacing manual cleaning with a high-pressure cleaner with a faster, fully automated solution.</h4>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia, molestiae saepe, sit laboriosam nam aperiam itaque dignissimos odio repellendus amet ipsa? Voluptatum enim dicta minus corporis! Maxime, neque voluptas.</h4>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium accusamus voluptatum mollitia quam sunt at non odit velit pariatur assumenda minima nesciunt corrupti, ullam excepturi qui consectetur, sint aspernatur.</h4>
        <button><router-link id="link" to="/signup">Create new account!</router-link></button>
        
    </div>  
    <div class="login_form">
        <div id="logo">
            <img id="img_logo" src="../assets/katma_logo.png"/>
            <h2>Greetings!</h2>
            <h3>Please sign in to continue.</h3>
        </div>
        <form id="form">
            <input type="email"
                    name="email"
                    v-model="email" 
                    placeholder="email"
                    required/>
            <br/>
            <br/>
            <input type="password" 
                    name="password"
                    placeholder="password"
                    required/>
            <br/>
            <div id="check">
            <input type="checkbox" ><label>remember me!</label>
            </div>
            <br/>
            <router-link id="link" to="/recover_password">Forgot password?</router-link>
            <br>
             <button v-on:click="register" ><router-link id="link" to="/dashboard">Sign in</router-link></button>
        </form>
        
    </div>
    
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Authentication from '@/services/Authentication';
export default {
    name: "Login",
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async register(){
            const response = await Authentication.register({
                email: this.email
            })
            console.log(response.data)
            //console.log("clicked", this.email, this.passowrd)
        }
    },
    components: { 
        Footer
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_form{
    border: 1px solid black;
    padding: 60px;
    margin: 100px;
    border-radius: 40px 40px 40px 40px;
}
.login{
    display: flex;
    
}.info{
    margin: 80px auto;
}
img{
    height: 140px;
    width: 300px;
}
#img_logo{
   height: 120px;
    width: 250px; 
}
#link{
    color: black;
    text-decoration: none;
    
}
#link:link{
    text-decoration: none;
}
#link:visited{
    text-decoration: none;
}
button{
    background-color: #97bf0d;
    padding: 16px 20px;
    color: white;
    font-weight: 500;
}
#check{
    float: left;
    margin-left: 70px;
}
</style>
