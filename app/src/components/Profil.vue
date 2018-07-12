<template>
  <section class="container-body container">
    <h1>Profil</h1>
    <h2>Vos informations</h2>
    <p><span> Prénom : </span>{{ infoUser.firstname }}</p>
    <p><span> Nom : </span>{{ infoUser.lastname }}</p>
    <p><span> Mail : </span>{{ infoUser.mail }}</p>
    <p><span> Adresse : </span>{{ infoUser.adresse}}</p>
    <p><span> Ville : </span>{{ infoUser.ville }}</p>
    <p><span> Code postal : </span>{{infoUser.code_postal }} </p>

    <a class="btn" @click="deconnexion"> Déconnexion</a>
    <div class="overlay" v-if="showPopup == true" @click="closePopup"></div>
    <div class="popup" v-if="showPopup == true">
      <p class="title-popup">Vous êtes déconnecté</p>
    </div>
    <div class="overlay" v-if="popupNonConnect == true"></div>
    <div class="popup" v-if="popupNonConnect == true">
      <p class="title-popup">Vous devez vous connecter pour accéder à votre profil</p>
      <div>
        <router-link to="/Inscription" class="btn">S'inscrire</router-link>
        <router-link to="/Connexion" class="btn">Se connecter</router-link>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "Profil",
    data() {
      return {
        infoUser: {},
        showPopup: false,
        popupNonConnect: false,
      }

    },
    mounted() {
      this.$http.get('https://popeat.tk/users/register')
        .then((response) => {
          console.log(response)
          if (response.data) {
            this.infoUser = response.data;
            console.log(response.data);
            this.popupNonConnect = false;
          } else {
            this.popupNonConnect = true;
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      deconnexion() {
        this.$http.get('https://popeat.tk/users/deconnexion')
          .then((response) => {
            console.log(response)

          })
          .catch((error) => {
            console.log(error)
          })
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false
        this.$router.push('/')
      },
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

  h1 {
    margin-top: 40px;
  }

  h2 {
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
    span {
      font-weight: 700;
    }
  }

  .btn {
    margin-top: 20px;
    margin-bottom: 40px;
  }

</style>
