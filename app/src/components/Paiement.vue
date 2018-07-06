<template>
  <section class="container container-body">
    <h1>Paiement</h1>
    <div class="container-paiement">
      <div class="container-left">
        <h2>Ma commande</h2>
        <div class="panier">
          <ul>
            <li>Coca
              <div class="item">
                <span>x1</span>
                <span class="price">2€</span>
              </div>
            </li>
          </ul>
          <ul>
            <li class="total">Total
              <span class="price">2€</span>
            </li>
          </ul>
        </div>
        <button class="btn">Rajouter des produits</button>
        <router-link to="/Paiement" class="btn">Paiement</router-link>
      </div>
      <div class="container-right">
        <h2>Livraison</h2>
        <p>Eva <span>Pamfil</span></p>
        <p>91 boulevard rodin</p>
        <p>92130 Issy-les-Moulineaux</p>

        <div class="paiement">
          <div class="header-paiement">
            <img src="../assets/picto/card.svg" alt="">
            <p>Paiement en carte</p>
          </div>
          <label for="">Numéro de carte</label>
          <input type="text" name="" >
          <div class="info-card">
            <div>
              <label for="">Date d'expiration</label>
              <input type="text" name="" >
            </div>
        <div>
          <label for="">Cryptogramme</label>
          <input type="text" name="" >
        </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Panier"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";


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

    .item{
      display: flex;
      align-items: center;
    }


    .up-and-down{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin:0 10px;

      button{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          height: 10px;
          width: auto;
        }
      }
    }

    button{
      background: none;
      border: none;
      padding: 5px;
      box-sizing: content-box;
      cursor: pointer;
      &.btn-delete, &.btn-delete img{
        height: 30px;
      }
    }
  }
  .price{
    &:before{
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
  .total{
    font-weight: bold;
    font-size: 1.813em;
    justify-content: flex-end;
    align-self: flex-end;
    .price{
      font-size: 16px;
      font-weight: 500;
    }
  }
  .container-paiement{
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  .paiement{
    background-color: $yellow;
    padding: 20px 50px;
    p, label{
      display: block;
      color: $blue;
    }
    input{
      width: 100%;
    }
  }
  .header-paiement{
    display: flex;
    align-items: center;

    img{
      width: 50px;
    }
  }
  .info-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      flex: 1;
    }

  }
</style>
