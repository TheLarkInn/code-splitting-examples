<template>
  <div class="Container">
    <h4 class="filename">{{filename}}</h4>
    <code :class="getCodeStyleLanguageClassName">
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
    lang: {
      type: String,
      required: true,
    },
  },
  computed: {
    getCodeStyleLanguageClassName() {
      return `language-${this.lang}`;
    },
  },
};
</script>
<style>

</style>
