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
    animation: burger-mouve 20s linear;
    top: 0;
    left: 65%;
    img {
      width: 150px;
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
      animation: mouve-aile-left 0.15s alternate infinite;
    }
    .aile-right {
      right: -63px;
      top: 67px;
      animation: mouve-aile-right 0.15s alternate infinite;
    }

  }

  .container-commande {
    margin-top: 40px;
    display: flex;
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

  @keyframes burger-mouve {
    0% {
      top: 0;
      left: 0;
    }
    10% {
      top: 10%;
      left: 5%;
    }
    20% {
      top: 30%;
      left: 10%;
    }
    30% {
      top: 10%;
      left: 15%;
    }
    40% {
      top: 30%;
      left: 20%;
    }
    50% {
      top: 10%;
      left: 25%;
    }
    60% {
      top: 0;
      left: 30%;
    }
    70% {
      top: 10%;
      left: 35%;
    }
    80% {
      top: 30%;
      left: 40%;
    }
    85% {
      top: 10%;
      left: 45%;
    }
    90% {
      top: 0;
      left: 50%;
    }
    95% {
      top: 10%;
      left: 55%;
    }
    100% {
      top: 0;
      left: 65%;
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

</style>
