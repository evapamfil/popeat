<template>
  <section class="container container-body">
    <h1>Nos burgers</h1>
    <p>Tous nos burgers sont accompagnés de frites maison ! </p>
    <div class="burgers">
      <div class="burger-mois">
        <div class="bandeau">
          <p>Notre best seller du mois</p>
        </div>
        <div class="img" v-on:click="addToPanier(burgerM)">
          <button class="btn">Ajouter au panier</button>
          <img v-bind:src="burgerM.picture" alt="">
        </div>
        <div class="text">
          <p>{{ burgerM.name }}</p>
          <p>{{ burgerM.price }}€</p>
        </div>
      </div>
      <div class="container-burger">
        <div class="product" v-for="burger in burgers">
          <div class="img" @click="addToPanier(burger)">
            <button class="btn">Ajouter au panier</button>
            <img v-bind:src="burger.picture" alt="">
          </div>
          <div class="text">
            <p>{{ burger.name }}</p>
            <p>{{ burger.price }}€</p>
          </div>
        </div>
      </div>
    </div>
    <h1 class="blue">Nos boissons</h1>
    <div class="boissons">
      <div class="product" v-for="boisson in boissons">
        <div class="img" @click="addToPanier(boisson)">
          <button class="btn">Ajouter au panier</button>
          <img v-bind:src="boisson.picture" alt="">
        </div>
        <div class="text">
          <p>{{ boisson.name }} </p>
          <p>{{ boisson.price }}€</p>
        </div>
      </div>
    </div>
    <h1>Nos desserts</h1>
    <div class="desserts">
      <div class="product" v-for="dessert in desserts">
        <div class="img" v-on:click="addToPanier(dessert)">
          <button class="btn">Ajouter au panier</button>
          <img v-bind:src="dessert.picture" alt="">
        </div>
        <div class="text">
          <p>{{dessert.name}}</p>
          <p>{{ dessert.price}}€</p>
        </div>
      </div>
    </div>
    <div class="overlay" v-if="showPopup == true" @click="closePopup"></div>
    <div class="popup" v-if="showPopup == true">
      <p class="title-popup">Votre produit a été ajouté au panier</p>
      <div>
        <button class="btn" @click="closePopup">Continuer votre commande</button>
        <button class="btn" @click="seePanier">Voir votre panier</button>
      </div>
    </div>

  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Commander",
    data() {
      return {
        burgerM: {
          name: 'Popking',
          price: 8,
          picture: require('../assets/image/produit/popking.jpg')
        },
        burgers: [
          {
            name: 'Popcheese',
            price: 8,
            picture: require('../assets/image/produit/popcheese.jpg')
          },
          {
            name: 'Popfish',
            price: 8,
            picture: require('../assets/image/produit/popfish.jpg')
          },
          {
            name: 'Popchicken',
            price: 8,
            picture: require('../assets/image/produit/popchicken.jpg')
          },
          {
            name: 'Popbacon',
            price: 8,
            picture: require('../assets/image/produit/popbacon.jpg')
          },
        ],
        boissons: [
          {
            name: "Coca-cola",
            price: 2,
            picture: require('../assets/image/produit/coca-cola-min.jpg')
          },
          {
            name: "Coca-cola zéro",
            price: 2,
            picture: require('../assets/image/produit/coca-cola_zero-min.jpg')
          },
          {
            name: "Badoit",
            price: 2,
            picture: require('../assets/image/produit/badoit-min.jpg')
          },
          {
            name: "Evian",
            price: 2,
            picture: require('../assets/image/produit/evian-min.jpg')
          }
        ],
        desserts: [
          {
            name: "Pancakes",
            price: 4,
            picture: require('../assets/image/produit/pancakes-min.jpg')
          },
          {
            name: "Cookies",
            price: 4,
            picture: require('../assets/image/produit/cookie-min.jpg')
          },
          {
            name: "Crème brulée",
            price: 4,
            picture: require('../assets/image/produit/creme-brulee-min.jpg')
          },
          {
            name: "Salade de fruits",
            price: 4,
            picture: require('../assets/image/produit/salade-fruit-min.jpg')
          }

        ],
        panier: [],
        showPopup: false,
      }
    },

    methods: {
      ...mapActions([
        'validatePanier'
      ]),
      addToPanier(elem) {
        this.panier.push(elem)
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false
      },
      seePanier() {
        const payload = this.panier
        this.validatePanier(payload)
        this.$router.push('/Panier')
      }
    }

  }

</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  h1 {
    margin-top: 50px;
  }

  .burgers {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .container-burger {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
  }

  .burger-mois {
    max-width: 520px;
    position: relative;
    img {
      max-width: 470px;
      margin-left: 50px;
      background-image: url("{{ burgerM.picture }}");
      background-repeat: no-repeat;
    }
    .btn {
      margin-left: 25px;
    }
    .text {
      margin-left: 50px;
    }
    .bandeau {
      background-color: $yellow;
      position: absolute;
      display: flex;
      align-items: center;
      width: 350px;
      height: 50px;
      margin-top: 20px;
      z-index: 2;
      p {
        font-weight: 700;
        margin-left: 50px;
      }
    }
  }

  .product {
    margin-bottom: 20px;
    max-width: 200px;
    margin-left: 80px;
    img {
      max-width: 200px;
      max-height: 212px;
    }
  }

  .text {
    font-weight: 500;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .img {
    position: relative;
    cursor: pointer;
    .btn {
      opacity: 0;
      display: flex;
      width: 180px;
      position: absolute;
      transform: translateY(-50%) translateX(-50%);
      top: 50%;
      left: 50%;
      transition: all 0.3s ease;
      &:hover {
        background-color: $yellow;
        border: none;
      }
    }
    &:hover .btn {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }

  h1.blue {
    margin-bottom: 80px;
  }

  .boissons .text p {
    color: $blue;
  }

  .desserts {
    margin-top: 80px;
  }

  .boissons, .desserts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
    .product {
      margin-left: 0;
      margin: 10px;
    }
  }

  //RESPONSIVE
  @media all and (max-width: 1119px) {
    .burgers {
      flex-wrap: wrap;
      .container-burger {
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20px 45px;
        width: 100%;
      }
      .product {
        margin: 5px
      }
    }
  }

  @media all and (max-width: 640px) {
    .burger-mois {
      .bandeau {
        width: 80%;
      }
      img {
        width: 95%;
        margin-left: 5%;
      }
    }
    .burgers .container-burger {
      padding: 0;
    }
  }

  @media all and (max-width: 460px) {
    .burgers .container-burger {
      padding: 20px 45px;
      justify-content: center;
      .product {
        max-width: inherit;
        width: 100%;
      }
      .img {
        width: 100%;
      }
      .product img {
        width: 100%;
        max-width: inherit;
        max-height: inherit;
      }
    }
    .boissons {
      padding: 20px 45px;
      justify-content: center;
      .product {
        max-width: inherit;
        width: 100%;
      }
      .img {
        width: 100%;
      }
      .product img {
        width: 100%;
        max-width: inherit;
        max-height: inherit;
      }
    }
    .desserts{
      padding: 20px 45px;
      justify-content: center;
      .product {
        max-width: inherit;
        width: 100%;
      }
      .img {
        width: 100%;
      }
      .product img {
        width: 100%;
        max-width: inherit;
        max-height: inherit;
      }
    }
  }

</style>
