<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="contact">
          <a href="tel:0102030405">
            <img src="../assets/picto/call-white.svg"/>
            01 02 03 04 05
          </a>
          <a href="mailto:contact@popeat.com">
            <img src="../assets/picto/mail.svg" alt="">
            Contact@popeat.com
          </a>
        </div>
        <div class="social">
          <router-link to="/Mentions-legales">Mentions légales</router-link>
          <div class="items-social">
            <a href="https://www.facebook.com/" target="_blank">
              <img src="../assets/picto/fb.svg" alt="">
            </a>
            <a href="https://www.instagram.com/?hl=fr" target="_blank">
              <img src="../assets/picto/insta.svg" alt="">
            </a>
            <a href="https://twitter.com/?lang=fr" target="_blank">
              <img src="../assets/picto/twitter.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Titre Footer'
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/color.scss";

  footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $pink;
    height: 80px;
    font-size: 14px;
  }

  .footer {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contact {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-weight: 500;
      color: #fff;
      &:last-child {
        margin-top: 10px;
      }
    }
    img {
      max-width: 20px;
      max-height: 20px;

      margin-right: 10px;
    }
  }
  .social{
    a{
      color: #fff;
      font-weight: 500;
    }
    .items-social{
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      a{
        margin-left: 7px;
      }
      img{
        width: 25px;
        height: auto;
      }
    }
  }

</style>
