<template>
  <section class="container-body container">
    <h1>Qui sommes-nous ?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem risus,
      fringilla ac arcu vel, egestas varius est. Ut nulla lorem, euismod sed lobortis id, rutrum et eros.
      Sed imperdiet lobortis facilisis. Cras eu eros a justo condimentum bibendum a ut risus. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultricies vitae justo eu
      ultricies.
      Curabitur eget congue nisi, sed pretium neque. Aenean sodales eleifend turpis quis pulvinar. Aliquam
      scelerisque</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem risus,
      fringilla ac arcu vel, egestas varius est. Ut nulla lorem, euismod sed lobortis id, rutrum et eros.</p>
  </section>
</template>

<script>
  export default {
    name: "QuiSommesNous"
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
  p{
    margin-top: 20px;
    max-width: 550px;

    &:last-child{
      margin-bottom: 40px;
    }
  }
</style>
