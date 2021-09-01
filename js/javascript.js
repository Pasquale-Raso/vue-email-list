Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    mails: [],
  },
  methods: {},
  created() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          // runs in case of success
          const response = res.data.response;
          this.mails.push(response);
        })
        .catch((error) => {
          // runs in case of error
        })
        .then(() => {
          // runs in any case
        });
    }
  },
});
