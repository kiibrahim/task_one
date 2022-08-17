<template>
    <div class="something">
        <div class="container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text"  name="lastname" placeholder="Your last name..">

    <label for="email">email</label>
    <input type="email"  name="email" placeholder="Your email">

    <label for="subject">Subject</label>
    <textarea name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>
    </div>
</template>
<script>
export default {   
}
</script>
<style scoped>
    .something{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    input[type=text], input[type=email],select, textarea {
  width: 100%; 
  padding: 12px; 
  border: 1px solid #ccc;
  border-radius: 4px; 
  box-sizing: border-box; 
  margin-top: 6px; 
  margin-bottom: 16px; 
  resize: vertical 
}


input[type=submit] {
  background-color: #97bf0d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

textarea:hover {
  background-color: #97bf0d;
}
input[type=text]:hover{
    background-color: #97bf0d;
}
input[type=email]:hover{
    background-color: #97bf0d;;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>