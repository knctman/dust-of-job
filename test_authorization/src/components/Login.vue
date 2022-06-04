<template>
  <div class="login">
    <h1>Login</h1>
    <h2>Username(Correct Login Name: myLoginName)</h2>
    <div>
      <p>{{ accountName }}</p>
      <input
        id="account_name"
        :value="accountName"
        @input="accountName = $event.target.value"
      />
    </div>
    <h2>Password(Correct Password: mySecretPassword1234)</h2>
    <div>
      <p>{{ accountPassword }}</p>
      <input
        type="password"
        id="account_password"
        :value="accountPassword"
        @input="accountPassword = $event.target.value"
      />
    </div>
    <div id="login_submit">
      <button @click="checkLogin">ログイン</button>
    </div>
    <div id="login_result"></div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function () {
    return {
      accountName: "",
      accountPassword: "",
    };
  },
  methods: {
    checkLogin: function (e) {
      let nextPageName = this.$route.query.next;
      if (nextPageName === undefined) {
        nextPageName = "PageA";
      }
      console.log(nextPageName);

      const okLoginName = "myLoginName";
      const okPassword = "mySecretPassword1234";
      const loginName = document.getElementById("account_name").value;
      const password = document.getElementById("account_password").value;
      if (loginName === okLoginName && password === okPassword) {
        this.$router.push({
          name: nextPageName,
          query: {
            auth: "authenticated",
          },
        });
      } else {
        document.getElementById("login_result").innerText = "ログイン失敗";
      }
    },
  },
};
</script>