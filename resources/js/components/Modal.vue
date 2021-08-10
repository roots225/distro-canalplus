<template>
  <div class="modal-backdrop fixed top-0 left-0 right-0 bottom-0 p-5 z-20 bg-black bg-opacity-60 flex justify-center items-center" v-if="visible">
    <div class="modal rounded-lg bg-white shadow-lg w-2/3 p-10 fixed z-100">
      <div class="modal-title">
        <slot name="title"></slot>
        <a href="#" @click.prevent="close" class="absolute inline-block right-3 top-3 text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </a>
      </div>
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  setup() {
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.$emit('close-modal');
    },

  }
}
</script>