<template>
   <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
        <!-- <img src="@/assets/Katma_logo.png"> -->
      <h2>Create your account</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <form>
          <div class="input_field">
            <input type="email" name="email" placeholder="Email" required />
            <br/>
            <input type="text" name="name" placeholder="First Name" />
            <br/>
            <input type="text" name="name" placeholder="Last Name" required />
            <br/>
            <input type="password" name="password" placeholder="Password" required />
            <br/>
            <input type="password" name="password" placeholder="Re-type Password" required />
            <br/>
        </div>
            <div>
                <label>Sex</label>
                <br/>
              <input type="radio" name="radiogroup1" id="rd1">
              <label for="rd1">Male</label>
              <br/>
              <input type="radio" name="radiogroup1" id="rd2">
              <label for="rd2">Female</label>
              </div>
            <div >
            	<input type="checkbox" id="cb1">
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
             <input class="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
img{
    height: 180px;
    width: 350px;
}
</style>