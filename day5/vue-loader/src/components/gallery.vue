<template>
  <div class="weui-gallery" :style="{
    display: gallery.status?'block':'none'
  }">
    <span
      class="weui-gallery__img"
      :style="{
      backgroundImage: `url(${gallery.imgUrl})`
    }"
    ></span>
    <div @click="hideGallery" class="weui-gallery__opr">
      <a href="javascript:" class="weui-gallery__del">
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    gallery() {
      return this.$store.getters.getGallery;
    }
  },
  methods: {
    // 隐藏画廊
    hideGallery() {
      this.$store.dispatch("setGallery", {
        status: false,
        imgUrl: ""
      });
    }
  }
};
</script>