<template>
<section class="container-body container">
  <h1>Inscription</h1>
  <form action="" method="post">
    <div>
      <label for="prenom">Prénom</label>
      <input type="text" name="prenom">
      <label for="nom">Nom</label>
      <input type="text" name="nom">
      <label for="mail">Adresse mail</label>
      <input type="mail" name="mail">
      <label for="password">Mot de passe</label>
      <input type="password" name="password">
    </div>
    <div>
      <label for="adresse">Adresse</label>
      <input type="text" name="adresse">
      <label for="ville">Ville</label>
      <input type="text" name="ville">
      <label for="code-postal">Code postal</label>
      <input type="text" name="code-postal">
      <button class="btn">Inscription</button>
      <router-link to="/Connexion">Déjà inscrit</router-link>
    </div>
  </form>
</section>
</template>

<script>
    export default {
        name: "Inscription"
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
