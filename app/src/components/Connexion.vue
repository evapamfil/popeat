<template>
  <section class="container container-body">
    <h1>Connexion</h1>
    <form @submit.prevent="connexion">
      <label for="mail">Adresse mail</label>
      <input type="mail" name="mail" v-model="mail">
      <label for="password">Mot de passe</label>
      <input type="password" name="password" v-model="password">
      <button class="btn" type="submit" @click="goToHome">Connexion</button>
      <router-link to="/Inscription">Toujours pas inscrit ?</router-link>
    </form>
    <div class="overlay" v-if="showPopup == true"></div>
    <div class="popup" v-if="showPopup == true">
      <p class="title-popup">Vous êtes déjà connecté</p>
      <div>
        <router-link to="/Profil" class="btn">Voir mon profil</router-link>
        <router-link to="/" class="btn">Revenir à l'accueil</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Connexion",

    data() {
      return {
        mail: '',
        password: '',
        showPopup: false,
      }
    },
    mounted() {
      this.$http.get('https://popeat.tk/users/register')
        .then((response) => {
          if (response.data == ""){
            this.showPopup = false;
          } else {
            this.showPopup = true;
          }

        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      connexion() {
        this.$http.post('https://popeat.tk/users/connexion', {
          mail: this.mail,
          password: this.password
        })
          .then(function () {

          })
          .catch((error) => {
            console.log(error)
          })
      },
      goToHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  .container-body {
    background-image: url("../assets/image/burger-yellow.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 55%;
  }
  .popup .btn{
    margin-top: inherit;
  }

  h1 {
    margin-top: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .btn {
    margin-top: 50px;
  }

  a {
    color: $pink;
  }

</style>
