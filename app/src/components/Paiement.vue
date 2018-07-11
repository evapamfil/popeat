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
              <span class="price">{{ totalPrice }}€</span>
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
          <div class="container-card">
            <div ref="card"></div>
          </div>
        </div>
        <div class="container-btn">
          <button @click="purchase" class="btn-blue">Payer {{ totalPrice }}€</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  let stripe = Stripe(`pk_test_x9dXBTe3Ilph1zehzVWPO2RC`),
    elements = stripe.elements(),
    card = undefined;

  card = elements.create('card');


  export default {
    name: "Paiement",
    data() {
      return {
        infoUser: {},
        totalPrice: 0,
        userMail: '',
        userId : ''
      }
    },
    computed: {
      ...mapGetters([
        'loadedPanier'
      ]),
    },
    mounted() {
      var vue = this;
      var panier = this.loadedPanier
      var total = [];

      card.mount(vue.$refs.card);

      for (var i = 0; i < panier.length; i++) {
        total.push(panier[i].price)
      }
      this.totalPrice = eval(total.join('+'));

      this.$http.get('https://popeat.tk/users/register')
        .then((response) => {
          this.infoUser = response.data;
          //console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
        })

      this.$http.get('https://popeat.tk/users/connexion')
        .then((response) => {
          this.userId = response.data.idUser
          this.userMail = response.data.mail

        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      purchase() {
        let self = this;

        function filterInt(value) {
          if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
            return Number(value);
          return NaN;
        }

        var price = filterInt(this.totalPrice)

        stripe.createToken(card).then(function (result) {
          if (result.error) {
            console.log(result.error)
            self.hasCardErrors = true;
            self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
            return;
          } else {
            self.$http.post('https://popeat.tk/commandes/paiement', {
              payment: result.token,
              amount: price,
              panier: self.loadedPanier,
              mailUser: self.userMail,
              idUser: self.userId,
            })
              .then((response) => {
                if(response.data.status == 'ok'){
                  self.$router.push('/Suivi')
                }
              })
              .catch((error) => {
                console.log(error)
              })

          }
        });

      },
    }
  }

</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  .container-card {
    min-width: 275px;
    margin-top: 20px;
    background-color: #fff;
    padding: 10px;
    border: solid 2px #707070;
  }

  .container-btn {
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
  }

  .btn-blue {
    display: inline-block;
    background-color: #fff;
    color: $blue;
    cursor: pointer;
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

  .container-left {
    margin-right: 20px;
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

  @media all and (max-width: 764px) {
   .container-right{
     margin-top: 40px;
   }
  }
  @media all and (max-width: 428px){
    .container-paiement{
      flex-direction: column;
      align-items: center;
    }
    .paiement{
      padding: 20px;
    }
  }
</style>
