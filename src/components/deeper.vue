<template>
  <div class="main-container">
    <div class="center-img">
      <img class="img-deeper" :src="data.img_icon" alt>
    </div>
    <h3 style="font-size: 1.58rem;">{{data.name}}</h3>
    <div style="margin: 4px 0 0 0">
      <span style="float: right; font-size: 17px">{{data.timestamp}}</span>
      <a style="font-size: 1.1rem" :href="data.url">{{data.url}}</a>
    </div>
    <div style="margin: 13px 0 4px">
      <span style="line-height: 1.38; font-size: 1.1rem" v-html="data.description"></span>
    </div>
  </div>
</template>


<script>
export default {
  props: ["data"]
};
</script>

<style>
.link {
  font-weight: 600;
  margin: 8px 0;
  font-size: 1.13rem;
}
.img-deeper {
  margin: 0;
  width: 152px;
  object-fit: contain;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 4px;
}
.center-img {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.main-container {
  text-align: left !important;
}
@media screen and (min-width: 800px) {
  .main-container {
    text-align: left !important;
    padding: 0 !important;
    margin: 0;
    width: 38%;
  }
}
</style>
