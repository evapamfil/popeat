<template>
  <section class="container container-body">
    <h1>Connexion</h1>
    <form @submit.prevent="connexion">
      <label for="mail">Adresse mail</label>
      <input type="mail" name="mail" v-model="mail">
      <label for="password">Mot de passe</label>
      <input type="password" name="password" v-model="password">
      <button class="btn" type="submit">Connexion</button>
      <router-link to="/Inscription">Toujours pas inscrit ?</router-link>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Connexion",

    data () {
      return {
        mail: '',
        password: '',
      }
    },
    methods :{
      connexion(){
        this.$http.post('http://localhost:3000/users/connexion', {
          mail : this.mail,
          password : this.password
        })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  .container-body{
    background-image: url("../assets/image/burger-yellow.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 55%;
  }
  h1{
    margin-top: 40px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .btn{
    margin-top: 50px;
  }
  a{
    color: $pink;
  }

</style>
