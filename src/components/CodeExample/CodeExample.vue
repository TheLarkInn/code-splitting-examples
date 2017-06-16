<template>
  <div class="Container">
    <h4 class="filename">{{filename}}</h4>
    <code><!-- Find a not shitty hilighter lib -->
      <slot></slot>
    </code>
  </div>
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>

</style>
