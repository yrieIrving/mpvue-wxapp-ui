<template>
 <div class="page">
    <h1>这里是我的页面</h1>
    <map></map>
   <div>{{city}} - {{data}}</div>
   <div>  {{some}}</div>  
    <div v-for=" a in max">{{a}}</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        city:'',
        data:'',
        some:'',
        max: 5
     }
   },
   onShow () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
     this.$http.get('https://www.sojson.com/open/api/weather/json.shtml?city=%E5%8C%97%E4%BA%AC').then((res)=>{
        wx.hideLoading();
        this.city = res.data.city;
        this.data = res.data.date;
       })
   },
   components: {

   }
 }
</script>

<style scoped>

 map{
   width: 100%;
   /* height: 50%; */
 }
</style>
