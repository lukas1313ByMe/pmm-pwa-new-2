<template>
  <div>
    <div style="text-align: left !important;" class="production">
      <div style="text-align: left !important;">
        <div style="float: left" class="img-card">
          <img style="margin: 2px 6px 2px 0" :src="sData.img_icon" v-if="sData.img_icon" alt>
        </div>
        <span v-html="sData.description"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      date: "02.2019",
      isActive: false,
      newData: []
    };
  },
  created() {
    this.run();
  },
  methods: {
    openCard() {
      this.isActive = !this.isActive;
    },
    run() {
      axios
        .get("https://share.ninoxdb.de/ncdpa8vxntv0k3duplfomgtxd6lv194iizww")
        .then(doc => {
          this.data = doc.data;
        })
        .then(() => {
          this.newData = this.data.slice(0, 16);
        })
        .then(() => {
          this.newData.forEach(doc => {
            if (this.tag.id_n === doc.name) {
              this.$store.commit("event/SET_SDATA", doc);
              this.$store.commit("event/SET_NAVBAR", doc.img_icon);
              if (this.tag.name === "Home") {
                this.$store.commit("event/SET_NAVBAR", doc.name);
              }
            }
          });
        });
    }
  },
  computed: {
    ...mapState("event", ["tag", "sData"])
  }
};
</script>

<style scoped>
.production h2 {
  font-size: 1.3rem;
}
.production small {
  font-size: 0.68rem;
}
.img-card img {
  text-align: left !important;
  margin: 4px 0 10px 0;
  width: 60px;
  height: 60px;
  object-fit: cover;
  transition: 600ms;
}
.img-left {
  float: left !important;
  margin-right: 8px;
  width: 50px;
  height: 50px;
}

@media screen and (min-width: 1000px) {
  .production {
    text-align: left !important;
    width: 40%;
    margin: 1% 30%;
  }
}
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  .production {
    width: 10% !important;
    margin: 0%;
  }
}
</style>


