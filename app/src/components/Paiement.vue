<template>
  <section class="container container-body">
    <h1>Paiement</h1>
    <div class="container-paiement">
      <div class="container-left">
        <h2>Ma commande</h2>
        <div class="panier">
          <ul v-for="item in loadedPanier">
            <li>{{ item.name }}
              <div class="item">
                <span>x1</span>
                <span class="price">{{item.price}}€</span>
              </div>
            </li>
          </ul>
          <ul>
            <li class="total">Total
              <span class="price">2€</span>
            </li>
          </ul>
        </div>
        <router-link to="/Panier" class="btn">Modifier la commande</router-link>
      </div>
      <div class="container-right">
        <h2>Livraison</h2>
        <p>{{ infoUser.firstname }}<span> {{ infoUser.lastname }}</span></p>
        <p>{{ infoUser.adresse}}</p>
        <p>{{infoUser.code_postal }} {{ infoUser.ville }}</p>

        <div class="paiement">
          <div class="header-paiement">
            <img src="../assets/picto/card.svg" alt="">
            <p>Paiement en carte</p>
          </div>
          <label for="">Numéro de carte</label>
          <input type="text" name="">
          <div class="info-card">
            <div>
              <label for="">Date d'expiration</label>
              <input type="text" name="">
            </div>
            <div>
              <label for="">Cryptogramme</label>
              <input type="text" name="">
            </div>
          </div>
        </div>
        <div class="container-btn">
          <button class="btn-blue">Payer 10€</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Paiement",
    data() {
      return {
        infoUser: {},
      }
    },
    computed: {
      ...mapGetters([
        'loadedPanier'
      ]),
    },
    mounted () {
      this.$http.get('http://localhost:3000/users/register')
        .then((response) => {
          this.infoUser = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
    },
  }

</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  .container-btn{
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
  }
  .btn-blue {
    display: inline-block;
    background-color: #fff;
    color: $blue;
    text-decoration: none;
    border: solid 1px $blue;
    padding: 10px 50px;
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

  h1 {
    margin-top: 40px;
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
    &:before {
      content: "";
      border-left: solid 2px $yellow;
      padding-bottom: 17px;
      padding-top: 15px;
      margin: 0 10px;
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

  .container-paiement {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
  }

  .container-right {
    margin-left: 20px;
  }

  .paiement {
    background-color: $yellow;
    padding: 20px 40px;
    margin: 10px 0;
    p, label {
      display: block;
      color: $blue;
    }
    label {
      font-weight: 500;
    }
    input {
      width: 100%;
    }
  }

  .header-paiement {
    display: flex;
    align-items: center;

    p {
      font-size: 1.3em;
      font-weight: bold;
    }

    img {
      width: 50px;
      margin-right: 10px;
    }
  }

  .info-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      flex: 1;
      &:last-child {
        margin-left: 15px;
      }
    }

  }
</style>
