<template>
<section class="container-body container">
  <h1>Inscription</h1>
  <form @submit.prevent="submit">
    <div>
      <label for="prenom">Prénom</label>
      <input type="text" name="firstname" v-model="firstname">
      <label for="lastname">Nom</label>
      <input type="text" name="lastname" v-model="lastname">
      <label for="mail">Adresse mail</label>
      <input type="mail" name="mail" v-model="mail">
      <label for="password">Mot de passe</label>
      <input type="password" name="password" v-model="password">
    </div>
    <div>
      <label for="adresse">Adresse</label>
      <input type="text" name="adresse" v-model="adresse">
      <label for="ville">Ville</label>
      <input type="text" name="ville" v-model="ville">
      <label for="code-postal">Code postal</label>
      <input type="text" name="code_postal" v-model="code_postal">
      <button class="btn" type="submit">Inscription</button>
      <router-link to="/Connexion">Déjà inscrit</router-link>
    </div>
  </form>
  <div class="overlay" v-if="showPopup == true" @click="goToConnexion"></div>
  <div class="popup" v-if="showPopup == true">
    <p class="title-popup">Inscription réussie</p>
  </div>
</section>
</template>

<script>
    export default {
        name: "Inscription",
      data(){
        return {
          firstname: '',
          lastname: '',
          mail: '',
          adresse:'',
          password: '',
          ville: '',
          code_postal: '',
          showPopup : false,
        }
      },
      methods: {
        submit(){
            this.$http.post('https://popeat.tk/users/register', {
              firstname: this.firstname,
              lastname : this.lastname,
              mail : this.mail,
              password : this.password,
              adresse : this.adresse,
              ville : this.ville,
              code_postal : this.code_postal,
          })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
          this.showPopup = true;
        },
        goToConnexion(){
          this.$router.push('Connexion')
        },
      }

    }


</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  h1{
    margin-top: 40px;
  }
  form{
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
      a{
        color: $pink;
      }
    }
    .btn{
      margin-top: 55px;
    }
  }

  //RESPONSIVE
  @media all and (max-width: 890px){
    form div:last-child {
      margin-right: 0;
    }
  }
  @media all and(max-width: 762px){
    form{
      flex-direction: column;
      div{
        width: 100%;
      }
    }
  }

</style>
