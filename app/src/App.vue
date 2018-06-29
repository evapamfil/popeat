<script src="router/index.js"></script>
<template>
  <div id="app">
    <Header></Header>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,
      Footer
    },
    name: 'App'
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700,900');
  @import 'assets/style/color.scss';

  //main css
  #app {
    font-family: 'Poppins', sans-serif;
  }

  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: 'Poppins', sans-serif;
  }
  button{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  label{
    color: $pink;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .container {
    max-width: 1180px;
    margin: auto;
    padding: 0px 20px;
  }

  .container-body {
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  h1 {
    color: $pink;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 10px;
    text-transform: uppercase;
    &.blue {
      color: $blue;
    }
  }

  h2 {
    color: $pink;
    font-weight: 700;
  }

  p {
    color: $pink;
  }

  .btn {
    background-color: #FFED19;
    font-weight: 500;
    text-decoration: none;
    color: #FF0092;
    width: 350px;
    height: 50px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;


    &:hover {
      background-color: #fff;
      color: $pink;
      border: solid 1px $pink;
    }

  }
  input{
    width: 350px;
    height: 50px;
    border: solid 1px #707070;
    padding: 10px;
    font-size: 16px;
    color: #707070;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave-to
    /* .component-fade-leave-active avant la 2.1.8 */
  {
    opacity: 0;
  }
</style>
