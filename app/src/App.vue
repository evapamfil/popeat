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
    font-size: 16px;
  }
  button{
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
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
    position: relative;
  }

  .container-body {
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    color: $pink;
    font-size: 2.188em;
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

  }
  input{
    width: 350px;
    height: 50px;
    border: solid 1px #707070;
    padding: 10px;
    font-size: 1em;
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
  //POPUP

  .overlay{
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    opacity: 0.5;
  }

  .popup{
    position: fixed;
    z-index: 10;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: solid 4px $blue;
    box-shadow: 0px 8px 20px $blue;
    text-align: center;
    padding: 50px;
    .title-popup{
      color: $blue;
      font-size: 1.563em;
      line-height: 1.4;
      font-weight: 900;
      letter-spacing: 10px;
      text-transform: uppercase;
    }
    div {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      .btn{
        &:first-child{
          background: #fff;
          color: $blue;
          border: solid 1px;
          border-color: $blue;
          margin-bottom: 10px;
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
        &:last-child{
          color: $blue;
          &:hover{
              border-color: $blue;
          }
        }
      }
    }

    .btn:last-child{
      color: $blue;

    }
  }
  //RESPONSIVE
  @media all and(max-width: 800px){
    .container-body{
      padding-top: 50px;
    }
  }
  @media all and(max-width: 600px){
    body{
      font-size: 14px;
    }
    .popup{
      width: 90%;
      padding: 30px;
    }
    .btn, input{
      width: 100%;
    };
  }
  @media all and(max-width: 400px){
    body{
      font-size: 12px;
    }
  }
</style>
