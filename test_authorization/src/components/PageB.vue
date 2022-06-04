<template>
  <div class="page_b">This is page B.</div>
</template>

<script>
export default {
  name: "page_b",
  beforeMount: function () {
    if (this.$route.query.auth !== "authenticated") {
      this.$router.push({
        name: "Login",
        query: {
          next: "PageB",
        },
      });
    }
  },
};
</script>