<template>
  <section class="container container-body">
    <h1>Connexion</h1>
    <form action="" method="post">
      <label for="mail">Adresse mail</label>
      <input type="mail" name="mail">
      <label for="password">Mot de passe</label>
      <input type="password" name="password">
      <button class="btn">Connexion</button>
      <router-link to="/Inscription">Toujours pas inscrit ?</router-link>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Connexion"
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
