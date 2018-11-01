<template>
    <div class="">
        <div class="row">
            <div class="form-group col-md-4 offset-md-4">
                <p>Login</p>
                <input type="text" placeholder="email" aria-label="email" class="form-control">
                <button class="form-control btn-primary">login</button>
                <button @click="authenticate('oauth2')">auth core</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   methods: {
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
        // Execute application logic after successful social authentication
      })
    }
  }   
};
</script>

<style scoped>
    input {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    button {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>

