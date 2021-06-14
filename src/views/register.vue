<template>
  <div id="register">
    <h1>Register</h1>
        <div class="form-inputs">
            <label for="e-mail">E-mail</label>
            <input type="text" id="e-mail" name="E-mail" v-model="user.email" placeholder="e-mail" />
        </div>
        <div class="form-inputs">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="user.username" placeholder="Username" />
        </div>
        <div class="form-inputs">
            <label for="date of birth">date of birth</label>
            <input type="text" id="date of birth" name="date of birth" v-model.number="user.dateofbirth" placeholder="date of birth" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="user.password" placeholder="Password" />
        </div>
        <div class="form-inputs">
            <label for="gender">gender</label>
            <input type="gender" id="gender" name="gender" v-model="user.gender" placeholder="gender" />
        </div>
        <button type="button" v-on:click="Register()">Register</button>
  </div>
</template>


<script>
    export default {
        name: 'register',
        data() {
          return { user: {
                    username: "",
                    dateofbirth: "",
                    email: "",
                    gender:"",
                    password: ""}
                    }
        },
        methods: {
          Register(){
            if(this.user.username != "" && this.user.password != "" && this.user.gender != "" && this.user.email != "" && this.user.dateofbirth != "") {
                    // This should actually be an api call not a check against this.$parent.mockAccount
                        this.$set(this.$parent.mockAccount,'password',user.password);
                        this.$set(this.$parent.mockAccount,'username',user.username);
                        this.$set(this.$parent.mockAccount,'dateofbirth',user.dateofbirth);
                        this.$set(this.$parent.mockAccount,'email',user.email);
                        this.$set(this.$parent.mockAccount,'gender',user.gender);                
                } else {
                    console.log("Fill all column");
                }
          }
        }
    }
</script>
<style>
#register .form-inputs {
    padding-bottom:10px;
}

#register .form-inputs label {
    padding-right: 10px;
}
</style>
