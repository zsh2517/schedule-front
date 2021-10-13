<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Logout",
  methods: {
    logout: () => {
      axios
        .post("/api/logout")
        .then((resp) => {
          console.log(resp.message);
        })
        .catch((err) => {
          console.error(err.message);
          console.log("Clearing cookie from frontend");
          document.cookie.split(";").forEach(function (c) {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              );
          });
        });
    },
  },
  mounted: function () {
    this.logout();
  },
};
</script>

<style scoped></style>
