<template>
<div id="app" v-if="$myGlobalStuff.IsDataFetch">
<section1/>
<section2/>
<section3/>
<section4/>
<section5/>
<section6/>
<section7/>
<section8/>

</div>
</template>
<script>
import section1 from './components/section1'
import section2 from './components/section2'
import section3 from './components/section3'
import section4 from './components/section4'
import section5 from './components/section5'
import section6 from './components/section6'
import section7 from './components/section7'
import section8 from './components/section8'
export default {
  name: 'App',
  data(){
  return{
    id:this.$route.params.id
  }
  },
  created(){
  console.log('id is '+this.id);
  },
  components: {
    section1,section2,section3,section4,section5,section6,section7,section8
  }
}
</script>
<style>
</style>
