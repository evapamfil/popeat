<template>
  <header>
    <div class="container header">
      <router-link to="/"><img class="logo" src="./../assets/logo-popeat.svg"></router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/Commander">Commander</router-link>
          </li>
          <li>
            <router-link to="/Connexion">Connexion</router-link>
          </li>
          <li>
            <router-link to="/Qui-sommes-nous">Qui sommes-nous ?</router-link>
          </li>
          <li>
            <router-link to="/Profil">Profil</router-link>
          </li>
          <li>
            <router-link to="/Panier">Panier <img src="./../assets/picto/panier.svg" alt=""></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        //title: 'Titre header'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";
  header {
    background-color: #fff;
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 10;
  }

  .logo {
    width: 210px;
    height: auto;
  }

  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 40px;
    font-weight: 500;
    display: inline-block;
    a {
      text-decoration: none;
      color: $pink;
      &:after {
        margin-top: -13px;
        content: '';
        display: block;
        width: 0;
        height: 16px;
        background: $yellow;
        transition: width .3s;
      }
      &:hover::after {
        width: 100%;
        //transition: width .3s;
      }
    }
    img {
      width: 20px;
      height: auto;
      margin-left: 10px;
    }
    &:last-child a {
      img{
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);

      }
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-top: -13px;
        content: '';
        display: block;
        width: 0;
        height: 16px;
        background: $yellow;
        transition: width .3s;
        z-index: -1;
      }
      &:hover::after {
        width: 100%;
        //transition: width .3s;
      }
    }
    &:last-child{
      position: relative;
      padding-right: 30px;
    }
  }


</style>
