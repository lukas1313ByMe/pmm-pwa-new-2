<template>
  <div class="production">
    <div
      class="center-me"
      style="padding:0 !important; margin: 0"
      v-if="deeper != '' && tag === 'random'"
    >
      <l-deeper :data="deeper"></l-deeper>
    </div>
    <div v-else class="listing center-me" v-for="i in list" :key="i.name">
      <ul>
        <div class="icon-inner" v-if="i.src != ''">
          <img
            v-if="lastId === i.id"
            @click="loadEvents(i, i.id)"
            style="transform: translate(0,11px)"
            :class="{ 'active-image': isShown(i.id) }"
            class="m-text"
            :src="i.active"
            alt="active"
          >
          <img
            v-else
            @click="loadEvents(i, i.id)"
            style="transform: translate(0,11px)"
            :class="{ 'active-image': isShown(i.id) }"
            class="m-text"
            :src="i.no"
            alt="not-active"
          >
          <li style="transform: translate(30px,28px)" class="text">
            <a style="color: #000 !important" @click="goTag(i, i.id)">{{i.text}}</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import lDeeper from "@/components/deeper";
import { mapState } from "vuex";

export default {
  components: {
    lDeeper
  },
  methods: {
    isShown(i) {
      return this.show[i];
    },
    changeShow(i) {
      this.show = [];
      this.$store.commit("event/SET_LASTID", i);
      // this.$set(this.show, i, !this.show[i]);
    },
    async loadEvents(tag, i) {
      if (this.tag.name !== tag.name) {
        this.$store.commit("event/SET_NAVBAR", "home");

        this.$store.state.event.hData = [];

        this.changeShow(i);
        // push api data in tag object (store)

        this.$store.commit("event/SET_TAG", tag);
        await this.$router.push(`/pwa/${tag.name}/`);
      } else {
        console.log("both");
      }
    },
    async goTag(tag, i) {
      // this.$store.commit("event/SET_NAVBAR", );

      this.$store.state.event.hData = [];

      if (tag.name === "Home") {
        this.changeShow(i);
        this.$store.commit("event/SET_TAG", tag);
        await this.$router.push(`/pwa/${tag.name}/`);
      } else {
        this.changeShow(i);
        this.$store.commit("event/SET_TAG", tag);
        await this.$router.push(`/tag/${tag.name}/`);
      }
    }
  },
  mounted() {
    this.changeShow(this.lastId);
  },
  computed: {
    ...mapState("event", ["lastId", "tag", "deeper"])
  },
  data() {
    return {
      show: [],
      oyen: "oyen.de",
      station: "https://publishing-metro-map.com/con.php#joy_158880",
      vdp: "https://publishing-metro-map.com/vdp#joy_157569",
      codeware: "https://publishing-metro-map.com/dbp#joy_157650",
      dbp: "https://publishing-metro-map.com/dbp#joy_158920",
      epa: "https://publishing-metro-map.com/epa#joy_158046",
      edu: "https://publishing-metro-map.com/edu#joy_158999",
      con: "https://publishing-metro-map.com/con#joy_158999",
      list: [
        {
          name: "Home",
          id_n: "#home",
          link: "",
          active: "https://www.oyen.de/img/logo_saso.png",
          no: "https://www.oyen.de/img/logo.png",
          text: "Home",
          id: 876876
        },
        {
          name: "bra",
          id_n: "#BRA",
          active: "https://publishing-metro-map.com/pwa/png/1/bra.png",
          no: "https://publishing-metro-map.com/pwa/png/0/bra.png",
          link: "https://publishing-metro-map.com/bra.php",
          text: "Brandmangement",
          id: 8987658
        },
        {
          name: "con",
          id_n: "#CON",
          link: "https://publishing-metro-map.com/con.php",
          text: "Consulting",
          active: "https://publishing-metro-map.com/pwa/png/1/con.png",
          no: "https://publishing-metro-map.com/pwa/png/0/con.png",
          id: 987654678
        },
        {
          name: "cop",
          id_n: "#COP",
          link: "https://publishing-metro-map.com/cop.php",
          text: "Corporate Publishing",
          active: "https://publishing-metro-map.com/pwa/png/1/cop.png",
          no: "https://publishing-metro-map.com/pwa/png/0/cop.png",
          id: 2470234
        },
        {
          name: "crm",
          id_n: "#CRM",
          link: "https://publishing-metro-map.com/crm.php",
          text: "Customer Relations Management",
          active: "https://publishing-metro-map.com/pwa/png/1/crm.png",
          no: "https://publishing-metro-map.com/pwa/png/0/crm.png",
          id: 29857134
        },
        {
          name: "dbp",
          id_n: "#DBP",
          link: "https://publishing-metro-map.com/dbp.php",
          text: "Database Publishing",
          active: "https://publishing-metro-map.com/pwa/png/1/dbp.png",
          no: "https://publishing-metro-map.com/pwa/png/0/dbp.png",
          id: 87342332
        },
        {
          name: "ebo",
          id_n: "#EBO",
          link: "https://publishing-metro-map.com/ebo.php",
          text: "E-Book Conversion",
          active: "https://publishing-metro-map.com/pwa/png/1/ebo.png",
          no: "https://publishing-metro-map.com/pwa/png/0/ebo.png",
          id: 2900573
        },
        {
          name: "edi",
          id_n: "#EDI",
          link: "https://publishing-metro-map.com/edi.php",
          text: "Editorial Workflow Systems",
          active: "https://publishing-metro-map.com/pwa/png/1/edi.png",
          no: "https://publishing-metro-map.com/pwa/png/0/edi.png",
          id: 874309874
        },
        {
          name: "edu",
          id_n: "#EDU",
          link: "https://publishing-metro-map.com/edu.php",
          text: "Education",
          active: "https://publishing-metro-map.com/pwa/png/1/edu.png",
          no: "https://publishing-metro-map.com/pwa/png/0/edu.png",
          id: 8768430987623
        },
        {
          name: "epa",
          id_n: "#EPA",
          link: "https://publishing-metro-map.com/epa.php",
          text: "Electronic Paper",
          active: "https://publishing-metro-map.com/pwa/png/1/epa.png",
          no: "https://publishing-metro-map.com/pwa/png/0/epa.png",
          id: 8768734534590
        },
        {
          name: "mam",
          id_n: "#MAM",
          link: "https://publishing-metro-map.com/mam.php",
          text: "(Digital) Media Asset Management",
          active: "https://publishing-metro-map.com/pwa/png/1/mam.png",
          no: "https://publishing-metro-map.com/pwa/png/0/mam.png",
          id: 876876098765340
        },
        {
          name: "mrm",
          id_n: "#MRM",
          link: "https://publishing-metro-map.com/mrm.php",
          text: "Marketing Resource Management",
          active: "https://publishing-metro-map.com/pwa/png/1/mrm.png",
          no: "https://publishing-metro-map.com/pwa/png/0/mrm.png",
          id: 876876907839427
        },
        {
          name: "pim",
          id_n: "#PIM",
          link: "https://publishing-metro-map.com/pim.php",
          text: "Product Information Management",
          active: "https://publishing-metro-map.com/pwa/png/1/pim.png",
          no: "https://publishing-metro-map.com/pwa/png/0/pim.png",
          id: 8768768324254
        },
        {
          name: "tec",
          id_n: "#TEC",
          link: "https://publishing-metro-map.com/tec.php",
          text: "Technical Documentation",
          active: "https://publishing-metro-map.com/pwa/png/1/tec.png",
          no: "https://publishing-metro-map.com/pwa/png/0/tec.png",
          id: 87687665345438
        },
        {
          name: "vdp",
          id_n: "#VDP",
          link: "https://publishing-metro-map.com/vdp.php",
          text: "Variable Data Printing",
          active: "https://publishing-metro-map.com/pwa/png/1/vdp.png",
          no: "https://publishing-metro-map.com/pwa/png/0/vdp.png",
          id: 987656789216
        },
        {
          name: "w2p",
          id_n: "#W2P",
          link: "https://publishing-metro-map.com/w2p.php",
          text: "Web-to-Print",
          active: "https://publishing-metro-map.com/pwa/png/1/w2p.png",
          no: "https://publishing-metro-map.com/pwa/png/0/w2p.png",
          id: 87098762359023
        }
      ]
    };
  }
};
</script>


<style scoped>
.normal--text {
  color: #000;
  background: #fff;
  padding: 2px;
  /* border: 0.8px solid #000; */
  line-height: 1.47;
  text-align: center;
  width: 60px !important;
  font-weight: 600;
  margin-right: 6px;
  height: 22px !important;
}
/* .red--text {
  color: #000;
  border: none !important;
  background: red;
  padding: 2px;
  line-height: 1.47;
  text-align: center;
  width: 60px !important;
  font-weight: 600;
  margin-right: 6px;
  height: 22px !important;
} */
.production {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 100px;
}
.production h4 {
  font-weight: 400;
  font-size: 0.96rem;
}
.production h3 {
  font-weight: 600;
  font-size: 1.2rem;
}

.listing {
  display: flex;
  flex-direction: row;
}

.listing > ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  padding: 10px;
  margin: 0;
  width: 100%;
  color: #202124 !important;
}
.listing > ul > li {
  display: flex;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: #202124 !important;
}
.listing .m-text {
  min-width: 50px !important;
  min-height: 50px !important;
  max-width: 50px !important;
  max-height: 50px !important;
  text-transform: uppercase;
}
.listing .text {
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
}
.b-text {
  padding-top: 20px;
}

body {
  background: #fff;
}

img {
  cursor: pointer;
  width: auto;
  background-repeat: no-repeat;
  background-position: cover;
}
.icon-inner {
  display: flex;
  align-items: stretch;
}

@media screen and (min-width: 800px) {
  .production {
    width: 100% !important;
    padding: 0% 10% 4% 0% !important;
    overflow-x: hidden;
  }
  .center-me {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  .userCard {
    width: 60% !important;
    margin: 0%;
  }
}
</style>

