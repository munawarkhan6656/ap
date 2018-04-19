import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import AOS from 'aos'
import axios from 'axios';
require('aos/dist/aos.css')

Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes
});
const shared = {
  message: "argaam plus",
  name:"munawar khan",
  urlFinanicalReport:"https://argaamplus.s3.amazonaws.com/93f89b78-0d5b-42ab-9a08-97905d36030c.pdf",
  urlAReport:"https://argaamplus.s3.amazonaws.com/93f89b78-0d5b-42ab-9a08-97905d36030c.pdf",
  comanyinfo:[],
  IsDataFetch:false
}
shared.install = function(){
  Object.defineProperty(Vue.prototype, '$myGlobalStuff', {
    get () { return shared }
  })
}
Vue.use(shared);
Vue.filter('twoDecimalPlaces',function(value){
  return value === null ? '-' : value.toFixed(2);
})
Vue.filter('negative',function(value){
  return value <= 0 ?  '('+ Math.abs(value) +')' : value
})
Vue.filter('colorclass',function(value){
  return value <= 0 ?  'red' : 'green'
})
Vue.filter('GetImageDirectionClass',function(value){
  if (value < 0)
  {     return "&darr;";}
  else if (value > 0) { return "&uarr;";  }
})
new Vue({
  created(){
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 1000,
      });
  },
  data:{
        shared
    },
  mounted() {
      const test="http://argaamplusqa.edanat.com/ar/argaam-premium/report/data?companyID="+this.$route.params.id+"&forYear=2016&fiscalPeriodID=71&languageID=2";
			axios.get(test).then(function (response) {
					shared.comanyinfo = response.data,
          shared.IsDataFetch = true
			})
	},

  el: '#app',
  render: h => h(App),
  router:router
})
