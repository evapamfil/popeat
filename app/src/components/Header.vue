<template>
  <header>
    <div class="overlay"></div>
    <div class="container header">
      <router-link to="/" class="a-logo"><img class="logo" src="./../assets/logo-popeat.svg"></router-link>
      <div class="nav-icon hide-desktop" @click="openMenu">
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/Qui-sommes-nous">Qui sommes-nous ?</router-link>
          </li>
          <li>
            <router-link to="/Commander">Commander</router-link>
          </li>
          <li>
            <router-link to="/Connexion" class="connect">Connexion</router-link>
          </li>
          <li>
            <router-link to="/Profil" class="profil">Profil</router-link>
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
    },
    methods: {
      openMenu() {
        var btn = document.querySelector('.nav-icon')
        var nav = document.querySelector('nav')
        var overlay = document.querySelector('.overlay')
        btn.classList.toggle('open')
        nav.classList.toggle('open')
        overlay.classList.toggle('open')
      }
    },
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
      img {
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
    &:last-child {
      position: relative;
      padding-right: 30px;
    }
  }

  .hide-desktop {
    display: none;
  }

  .nav-icon {
    position: relative;
    width: 30px;
    height: 15px;
    span {
      display: inline-block;
      position: absolute;
      height: 2.5px;
      background-color: $pink;
      left: 0;
      right: 0;
      transition: all 0.25s ease;
      &:first-child {
        top: 0;
      }
      &:last-child {
        bottom: 0;
      }
    }
    &.open {
      span {
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.25s ease;

        &:first-child {
          transform: rotate(45deg);
        }
        &:last-child {
          transform: rotate(-45deg);
        }
      }
    }
  }
  .overlay{
    display: none;
    min-height: 150vh;
    z-index: 0;

  }

  //RESPONSIVE

  @media all and (max-width: 940px) {
    nav ul li {
      margin-left: 20px;
    }
  }

  @media all and (max-width: 850px) {
    .logo {
      width: 165px;
    }
  }

  @media all and (max-width: 800px) {
    .hide-desktop {
      display: block;
    }
    .a-logo{
      height: 100%;
    }
    .logo {
      height: 100%;
      width: auto;
    }
    header{
      height: 50px;
      padding: 10px 0;
      z-index: 10;
    }
    .header{
      position: relative;
    }
    nav{
      position: absolute;
      right: 0;
      min-height: 100vh;
      top: 40px;
      background-color: #fff;
      transform: translateX(100%);
      transition: 0.5s ease;
      ul{
        flex-direction: column;
        padding: 50px;
        li{
          margin: 10px 0;
        }
      }
      &.open{
        transform: translateY(0%);
        transition: 0.5s ease;
      }
    }
  }
  .overlay.open{
    display: block;
  }


</style>
