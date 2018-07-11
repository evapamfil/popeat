<template>
  <section class="container container-body">
    <h1>Panier</h1>
    <div class="panier">
      <ul v-for="item in loadedPanier">
        <li>{{ item.name }}
          <div class="item">
            <span>x1</span>
            <div class="up-and-down">
              <button class="up"><img src="../assets/picto/up.svg"/></button>
              <button class="down"><img src="../assets/picto/down.svg"/></button>
            </div>
            <button class="btn-delete"><img src="../assets/picto/delete.svg" alt=""></button>
            <span class="price">{{item.price}}€</span>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/Commander" class="btn">Rajouter des produits</router-link>
    <a class="btn" @click="getUser">Paiement</a>

    <div class="overlay" v-if="showPopup == true" @click="closePopup"></div>
    <div class="popup" v-if="showPopup == true">
      <p class="title-popup">Vous devez vous connecter pour continuer votre commande</p>
      <div>
        <router-link to="/Inscription" class="btn">S'inscrire</router-link>
        <router-link to="/Connexion" class="btn">Se connecter</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Panier",
    data() {
      return {
        showPopup: false,
      }
    },
    computed: {
      ...mapGetters([
        'loadedPanier'
      ]),
    },
    methods: {
      supPanier(){
      },
      getUser() {
        this.$http.get('https://popeat.tk/users/connexion')
          .then((response) => {
            if (response.data.idUser) {
              this.$router.push('/Paiement')
            } else {
              this.showPopup = true;
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
      closePopup() {
        this.showPopup = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  .container-body {
    background-image: url("../assets/image/burger-yellow.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 55%;
  }

  h1 {
    margin-top: 40px;
  }

  .panier {
    padding: 20px;
    border: solid 4px $yellow;
    max-width: 350px;
    min-height: 150px;
    margin-top: 20px;
    background-color: #fff;
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

    .up-and-down {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 10px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 10px;
          width: auto;
        }
      }
    }

    button {
      background: none;
      border: none;
      padding: 5px;
      box-sizing: content-box;
      cursor: pointer;
      &.btn-delete, &.btn-delete img {
        height: 30px;
      }
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

  .btn {
    margin-top: 20px;
    &:nth-child(4) {
      background-color: #fff;
      color: $blue;
      border: solid 1px $blue;
      margin-bottom: 20px;
    }
    &:nth-child(4):hover {
      background-color: $blue;
      border: none;
      color: #fff;
    }
  }
</style>
