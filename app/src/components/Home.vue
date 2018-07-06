<template>
  <section class="container-body container">
    <div class="header-home">
      <div>
        <h1 class="blue">COMMANDEZ DÈS&nbsp;MAINTENANT VOTRE BURGER POPEAT PRÉFÉRÉ</h1>
        <router-link class="btn-blue" to="/Commander">Commander</router-link>
      </div>
      <div>
        <img src="../assets/image/home/burger-home1-min.jpg" alt="Popking">
        <img src="../assets/image/home/burger-home2-min.jpg" alt="Popbacon">
      </div>
    </div>
    <div class="nouveaute">
      <div class="bandeau"></div>
      <h1>Nouveauté</h1>
      <div class="container-nouveaute">
        <div>
          <h2>Personnalisez votre burger</h2>
          <p>Popeat vous propose de créer votre propre burger en fonction de vos envies ! Steak, poulet, poissons ou
            sans viande faites ce que vous voulez. </p>
          <router-link class="btn" to="/Commander">Personnaliser votre burger</router-link>
        </div>
        <img src="../assets/image/home/popeat-burger.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  .header-home {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    h1 {
      font-weight: 900;
    }

    div:first-child {
      max-width: 510px;
    }
    div:last-child {
      img {
        max-width: 260px;
        &:first-child {
          margin-right: 25px;
        }
      }

    }
  }

  .btn-blue {
    display: inline-block;
    color: $blue;
    text-decoration: none;
    border: solid 1px $blue;
    padding: 10px 50px;
    margin-top: 38px;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;

    &:hover {
      background-color: $blue;
      color: #fff;
    }
  }

  .nouveaute {
    position: relative;
    padding: 27px 80px;
    margin: 100px 0;
  }

  .bandeau {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    height: 106px;
    background-color: $yellow;
    z-index: -1;
  }

  .container-nouveaute {
    display: flex;
    justify-content: space-between;
    align-items: start;
    div:first-child {
      max-width: 475px;
    }
    h2 {
      margin-top: 50px;
    }
    p {
      margin-top: 20px;
    }
    img {
      display: block;
      max-width: 320px;
      height: auto;
      margin-top: -40px;
    }
    .btn{
      margin-top: 30px;
    }
  }


</style>
