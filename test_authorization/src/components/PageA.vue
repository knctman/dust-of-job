<template>
  <div class="page_a">This is page A.</div>
</template>

<script>
export default {
  name: "page_a",
  mounted: function () {
    if (this.$route.query.auth !== "authenticated") {
      this.$router.push({
        name: "Login",
        query: {
          next: "PageA",
        },
      });
    }
  },
};
</script>