<template>
    <div class="profile"> 
        <div class="container">   
            <h1>Dumb Newbee</h1>
            <h3>Intern</h3>
            <br/>
            <img src="@/assets/profile.jpeg">
            <br/>
            <h4>Favourite Quote</h4>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, quo illo iusto delectus dolorum sunt dolorem, explicabo nulla ipsam, debitis dicta? Quod id excepturi odio? Aspernatur magnam consequatur ex!</p>
            <br/>
            <h4>Contact Details</h4>
            <br/>
            <div class="listFlex">
                <div>
                    <ul>
                        <li>Phone:+4800000000</li>
                        <li>email:dumb@dissapoint.hell</li>
                        <li>Linkedin: dumb</li>
                    </ul>
                </div>
            </div>
            <h4>&copy; Katma Clean Control</h4>
        </div>
    </div>

</template>
<script>

export default {
    components:{
    }
}
</script>
<style scoped>
    .profile{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    img{
        border-radius: 48%;
    }
    h1, h2, h3, h4, h5 {
        border-bottom: 1px solid #ccc;
        color: #97bf0d;
        padding-bottom: 8px
    }
    .container {
        margin: auto;
        width: 350px;
        text-align: center;
    }
    .listFlex {display: flex; justify-content: center;}

    ul{
        list-style-type: none;
    }
</style>