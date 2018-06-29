<template>
  <section class="container container-body">
    <h1>Nos burgers</h1>
    <p>Tous nos burgers son accompagnés de frites maison ! </p>
    <div class="burgers">
      <div class="burger-mois">
        <div class="bandeau">
          <p>Notre best seller du mois</p>
        </div>
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/popking.jpg" alt="">
        </div>
        <div class="text">
          <p>Popking</p>
          <p>8€</p>
        </div>
      </div>
      <div class="container-burger">
        <div class="product">
          <div class="img">
            <button class="btn">Ajouter au panier</button>
            <img src="../assets/image/produit/popcheese.jpg" alt="">
          </div>
          <div class="text">
            <p>Popcheese</p>
            <p>8€</p>
          </div>
        </div>
        <div class="product">
          <div class="img">
            <button class="btn">Ajouter au panier</button>
            <img src="../assets/image/produit/popfish.jpg" alt="">
          </div>
          <div class="text">
            <p>Popfish</p>
            <p>8€</p>
          </div>
        </div>
        <div class="product">
          <div class="img">
            <button class="btn">Ajouter au panier</button>
            <img src="../assets/image/produit/popchicken.jpg" alt="">
          </div>
          <div class="text">
            <p>Popchicken</p>
            <p>8€</p>
          </div>
        </div>
        <div class="product">
          <div class="img">
            <button class="btn">Ajouter au panier</button>
            <img src="../assets/image/produit/popbacon.jpg" alt="">
          </div>
          <div class="text">
            <p>Popbacon</p>
            <p>8€</p>
          </div>
        </div>
      </div>
    </div>
    <div class="perso-burger">
      <h2>Personnalisez votre burger</h2>
    </div>
    <h1 class="blue">Nos boissons</h1>
    <div class="boissons">
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/coca-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Coca Cola </p>
          <p>2€</p>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/ice-tea-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Ice tea </p>
          <p>2€</p>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/fanta-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Fanta </p>
          <p>2€</p>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/evian-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Evian </p>
          <p>2€</p>
        </div>
      </div>
    </div>
    <h1 class="blue">Nos desserts</h1>
    <div class="desserts">
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/pancakes-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Pancakes</p>
          <p>2€</p>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/cookie-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Cookies</p>
          <p>2€</p>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/creme-brulee-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Crème brulée</p>
          <p>2€</p>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <button class="btn">Ajouter au panier</button>
          <img src="../assets/image/produit/salade-fruit-min.jpg" alt="">
        </div>
        <div class="text">
          <p>Salade de fruit</p>
          <p>2€</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Commander"
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
        font-weight: 500;
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
      display: none;
      width: 180px;
      position: absolute;
      transform: translateY(-50%) translateX(-50%);
      top: 50%;
      left: 50%;
      &:hover {
        background-color: $yellow;
      }
    }
    &:hover .btn {
      display: flex;
    }
  }

  .perso-burger {
    margin: 100px 0;
    background-color: $yellow;
    padding: 50px;
  }
  h1.blue{
    margin-bottom: 80px;
  }

  .boissons, .desserts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
    .product{
      margin-left: 0;
    }
  }

</style>
