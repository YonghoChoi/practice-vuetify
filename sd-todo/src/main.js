import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

/*
  Vue.js에서 View를 표현하기 위한 방법으로 template을 사용하지만 render 함수를 통해 직접 코드로 작성하는 것도 지원한다.
  각각의 컴포넌트는 render 함수를 가지고 있고, render 함수에서 해당 컴포넌트의 View를 나타내는 가상 DOM의 Node를 생성한다.
  이렇게 생성된 가상 DOM Node Tree를 기반으로 실제 브라우저 DOM Tree를 생성 및 업데이트한다.
  참고 : https://m.blog.naver.com/PostView.nhn?blogId=jjoommnn&logNo=221082930638&proxyReferer=https%3A%2F%2Fwww.google.com%2F
*/

new Vue({
  render: h => h(App),  // render 함수로 App.vue의 View를 전달한다.
}).$mount('#app')
