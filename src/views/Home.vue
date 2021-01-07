<template>
    <div id="bootstrap">
      <Css/>
        <div>
            <Header/>
        <div>

          <div>
              <Banner/>
              <Courses/>
          </div>
          <div>
            <Footer/>
          </div>
            <router-view></router-view>
        </div>
      </div>
  </div>
    

  
</template>

<script>

 import Header from '@/components/shared/Header.vue'
 import Courses from '@/components/pages/Courses.vue'
import Banner from '@/components/pages/Banner.vue'
import Footer from '@/components/shared/Footer.vue'
import Css from '@/assets/css/style.css'

export default {
  name: 'Home',
  components: {
    Header,
    Courses,
    Banner,
    Footer,
    Css
  },
  
}
</script>
