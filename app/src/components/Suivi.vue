<template>
  <section class="container container-body">
    <div class="container-commande">
      <h1>Suivi de livraison</h1>
      <div>
        <h2>Ma commande</h2>
        <div class="panier">
          <ul v-for="item in loadedPanier">
            <li>{{ item.name }}
              <div class="item">
                <span>x1</span>
                <span class="price">{{ item.price }}€</span>
              </div>
            </li>
          </ul>
          <ul>
            <li class="total">Total
              <span class="price">{{ totalPrice }}€</span>
            </li>
          </ul>
        </div>
        <div class="call">
          <img src="../assets/picto/call-pink.svg"/>
          <a href="tel:0102030405">Nous appeler</a>
        </div>
      </div>

    </div>

    <div class="container-animation">
      <div class="burger">
        <div class="container-burger">
          <img src="../assets/picto/aile-left.svg" alt="" class="aile aile-left">
          <img src="../assets/picto/burger-suivi.svg" alt="">
          <img src="../assets/picto/aile-right.svg" alt="" class="aile aile-right">
        </div>
      </div>

      <div class="bande-yellow">
        <img src="../assets/picto/home.svg" alt="">
      </div>
    </div>

  </section>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Suivi",
    data() {
      return {
        totalPrice: 0,
      }
    },
    computed: {
      ...mapGetters([
        'loadedPanier'
      ]),
    },
    mounted() {
      var panier = this.loadedPanier
      var total = [];
      for (var i = 0; i < panier.length; i++) {
        total.push(panier[i].price)
      }
      this.totalPrice = eval(total.join('+'));
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/style/color.scss";

  .container-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container-animation {
    position: relative;
    padding: 80px 0;
  }

  .burger {
    position: absolute;
    z-index: 1;
    animation: burger-mouve 10s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    img {
      width: 150px;
      animation: reduce 1s linear forwards;
      animation-delay: 8s;
    }
    .aile {
      width: 90px;
    }
  }

  .container-burger {
    position: relative;
    .aile {
      position: absolute;

    }
    .aile-left {
      left: -52px;
      top: -10px;
      animation: mouve-aile-left 0.15s alternate infinite, reduce-aile-left 1s linear 8s forwards;
    }
    .aile-right {
      right: -63px;
      top: 67px;
      animation: mouve-aile-right 0.15s alternate infinite, reduce-aile-right 1s linear 8s forwards;
    }

  }

  .container-commande {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  .panier {
    padding: 20px;
    border: solid 4px $yellow;
    max-width: 350px;
    margin-top: 20px;
  }

  ul {
    display: inline-block;
    width: 100%;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $pink;
    font-weight: 500;
    padding: 7px 0;

    .item {
      display: flex;
      align-items: center;
    }
  }

  .price {
    position: relative;
    width: 50px;
    text-align: right;
    margin-left: 10px;
    &:before {
      content: "";
      border-left: solid 2px $yellow;
      border-left: solid 2px #FFED19;
      left: 0;
      height: 60px;
      transform: translateY(-50%);
      top: 50%;
      position: absolute;
    }
  }

  .total {
    font-weight: bold;
    font-size: 1.813em;
    justify-content: flex-end;
    align-self: flex-end;
    .price {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .bande-yellow {
    background-color: $yellow;
    width: 100%;
    position: relative;
    height: 66px;

    img {
      width: 130px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }

  .call {
    margin-top: 10px;
    display: flex;
    align-items: center;
    img {
      width: 25px;
      margin-right: 15px;
    }
    a {
      text-decoration: underline;
      color: $pink;
    }
  }

  @keyframes burger-mouve {
    0% {
      top: 0;
      left: 0;
    }
    15% {
      top: 10%;
      left: 5%;
    }
    20% {
      top: 30%;
      left: 10%;
    }
    25% {
      top: 10%;
      left: 15%;
    }
    30% {
      top: 30%;
      left: 20%;
    }
    35% {
      top: 10%;
      left: 25%;
    }
    40% {
      top: 0;
      left: 30%;
    }
    45% {
      top: 10%;
      left: 35%;
    }
    50% {
      top: 30%;
      left: 40%;
    }
    55% {
      top: 10%;
      left: 45%;
    }
    60% {
      top: 0;
      left: 50%;
    }
    65% {
      top: 10%;
      left: 55%;
    }
    70% {
      top: 30%;
      left: 60%;
    }

    75% {
      top: 10%;
      left: 65%;
    }

    80% {
      top: 30%;
      left: 70%;
    }

    85% {
      top: 10%;
      left: 75%;
    }

    100% {
      top: 40%;
      left: 92.7%;
    }
  }

  @keyframes mouve-aile-left {
    from {
      transform: rotate(15deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }

  @keyframes mouve-aile-right {
    from {
      transform: rotate(-15deg);
    }
    to {
      transform: rotate(10deg);
    }
  }

  @keyframes reduce {
    from {
      width: 150px;
    }
    to {
      width: 40px;
    }
  }

  @keyframes reduce-aile-left {
    from {
      left: -52px;
      top: -10px;
      width: 90px;
    }
    to {
      width: 20px;
      left: -10px;
      top: -2px;
    }
  }

  @keyframes reduce-aile-right {
    from {
      right: -63px;
      top: 67px;
      width: 90px;
    }
    to {
      width: 20px;
      top: 18px;
      right: -14px;
    }
  }

  //RESPONSIVE

  @media all and (max-width: 600px) {
    .aile-left, .aile-right, .burger img, .burger .container-burger {
      display: none;
    }
  }


</style>
