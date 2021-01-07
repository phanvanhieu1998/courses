<template>
  <div class="banner">
    
      
          <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000" >{{textBanner.learn}}</h1>
         <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000">{{textBanner.design}}</span>
      
         <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="2000" class="banner__button">
            <div class="haha">
              <button class="banner__button__left">Browse Lessons </button>
              <button class="banner__button__right">Subscribe </button>
            </div>
          </div>

      </div>
  
</template>

<script>
export default {
  data(){
    return{
      textBanner:{
        learn:'Everything you need to LEARN',
        design:'Get your first Job as a UI/UX Designer'
      }
    }
  }
}
</script>

<style>

</style>