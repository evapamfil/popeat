<template>
  <section class="container-body container">
    <h1>Profil</h1>
    <form action="" method="post">
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
        <label for="ville">Modifier son ville</label>
        <input type="text" name="ville">
        <label for="code-postal">Modifier son code postal</label>
        <input type="text" name="code-postal">
        <button class="btn">Valider</button>
        <router-link to="/">Déconnexion</router-link>
      </div>
    </form>
  </section>

</template>

<script>
    export default {
        name: "Profil"
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
