 
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const scrollTop = document.querySelector('.scrollTop');
const sectionThird = document.querySelector('.sectionThird');
const toApplication = document.querySelector('.toApplication');

scrollTop.addEventListener('click', function() {
  gsap.to(window, { duration: 2, scrollTo: 0 ,autoKill:false});
})

toApplication.addEventListener('click', function() {
  gsap.to(window, { duration: 2, scrollTo: '#sectionfive'});
})


gsap.set('.scrollTop', {autoAlpha: 0}); //初期状態としてopacity: 0;とvisibility: hidden;が指定される

gsap.to('.scrollTop', {
  ease: "none",
  autoAlpha: 1,
  duration: .5, //５秒後かけてアニメーションさせる
  scrollTrigger: {
    trigger: sectionThird, //トリガー
    start: "top top", //開始位置
    end: "bottom top", //終了位置
    toggleActions: 'play pause resume reverse',
  },
});



