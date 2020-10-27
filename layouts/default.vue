<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">

</style>
<script>
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
export default {
  components: {Header, Footer}
}
</script>
