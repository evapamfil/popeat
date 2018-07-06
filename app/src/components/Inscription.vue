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
          code_postal: ''
        }
      },
      methods: {
        submit(){
            this.$http.post('http://localhost:3000/users/register', {
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
          console.log('post')
          //this.$router.push("/Liste");
        }
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

</style>
