const gsapTest = document.querySelector('h1.title')
gsapTest.addEventListener('click', runTest);
function runTest() {
    TweenLite.to(gsapTest, 5, {css:{opacity:"0"}});
}


var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })