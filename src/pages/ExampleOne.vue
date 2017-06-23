<template>
  <div class="container">
    <transition :css="false" @enter="onEnter" @leave="onLeave">
      <webpack-logo v-if="animationType"></webpack-logo>
    </transition>
    <select @change="onSelectChange">
      <option value=""></option>
      <option value="spin">spin</option>
      <option value="spin-reverse">spin reverse</option>
    </select>
  </div>
</template>
<script>
  import WebpackLogo from '@/components/WebpackLogo';
  import TweenMax from 'gsap/TweenMax';

  const getAnimationType = type => import(`@/animations/webpack-logo-animation-${type}.js`);

  export default {
    data() {
      return {
        animationFunction: null,
        animationType: '',
      };
    },
    components: {
      WebpackLogo,
    },
    methods: {
      onSelectChange($event) {
        console.log($event);
        this.animationType = $event.target.value;
      },
      onBeforeEnter(el) {
        TweenMax.set(el, {
          transformPerspective: 600,
          perspective: 300,
          transformStyle: 'preserve-3d',
          autoAlpha: 1,
        });
      },
      onEnter(el, done) {
        getAnimationType(this.animationType)
          .then(module => module.default)
          .then(function (animate) { //eslint-disable-line
            animate(el, done);
          });
      },
      onLeave(el, done) {
        done();
      },
    },
  };
</script>
<style></style>
