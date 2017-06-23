import TweenMax from 'gsap/TweenMax';

export default (element, done) => {
  console.log(element);
  TweenMax.to(element, 0.5, {
    onComplete: done,
    transformOrigin: '50% 50%',
    scale: 0.5,
    rotation: '-360',
  });
};
