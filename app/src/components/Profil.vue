<template>
  <section class="container-body container">
    <h1>Profil</h1>
    <!-- <form>
       <div>
         <label for="prenom">Modifier son prénom</label>
         <input type="text" name="prenom">
         <label for="nom">Modifier son nom</label>
         <input type="text" name="nom">
         <label for="mail">Modifier son adresse mail</label>
         <input type="mail" name="mail">
         <label for="password">Modifier son mot de passe</label>
         <input type="password" name="password">
       </div>
       <div>
         <label for="adresse">Modifier son adresse</label>
         <input type="text" name="adresse">
         <label for="ville">Modifier sa ville</label>
         <input type="text" name="ville">
         <label for="code-postal">Modifier son code postal</label>
         <input type="text" name="code-postal">
         <button class="btn">Valider</button>
       </div>
     </form> -->
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
  </section>

</template>

<script>
  export default {
    name: "Profil",
    data() {
      return {
        infoUser: {},
        showPopup: false,
      }

    },
    mounted() {
      this.$http.get('http://localhost:3000/users/register')
        .then((response) => {
          this.infoUser = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      deconnexion() {
        this.$http.get('http://localhost:3000/users/deconnexion')
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
  h2{
    margin-top: 20px;
  }
  p {
    margin: 10px 0;
    span {
      font-weight: 700;
    }
  }
  .btn{
    margin-top: 20px;
  }

    /* form{
       display: flex;
       justify-content: space-between;
       align-items: safe;
       margin-bottom: 100px;

       div{
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         &:last-child{
           margin-right: 100px;
         }
       }
       .btn{
         margin-top: 55px;
       }
     }*/
</style>
