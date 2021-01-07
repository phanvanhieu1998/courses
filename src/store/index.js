import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    framework:[
        {
            title:'Twitter Bootstrap 4.4.1',
            text:'Built on top of the latest BS framework',
            bs:'BS',
            image:''

        },
          {
            title:'LMS Icons',
            text:'Selected range of education icons',
            bs:'',
            image:'/image/njnja.svg',
            
        },
          {
            title:'3x Layouts',
            text:'Multiple layouts included',
            image:'/image/table.svg',
            bs:''
        },
          {
            title:'Twitter Bootstrap 4.4.1',
            text:'Built on top of the latest BS framework',
            image:'image/cap.svg',
            bs:''
        },
           {
            title:'Twitter Bootstrap 4.4.1',
            text:'Built on top of the latest BS framework',
            image:'image/bord.svg',
            bs:''
        },
           {
            title:'Twitter Bootstrap 4.4.1',
            text:'Built on top of the latest BS framework',
            image:'/image/quizzes.svg',
            bs:''
        },
           {
            title:'Twitter Bootstrap 4.4.1',
            text:'Built on top of the latest BS framework',
            image:'',
            bs:'BS'
        },
           {
            title:'Twitter Bootstrap 4.4.1',
            text:'Built on top of the latest BS framework',
            image:'image/njnja.svg',
            bs:''
        },
    ],
    textCourses:{
        recent:'Recent Courses',
        highlights:'Features & Highlights',
        template:'What makes LEMA an awesome template'
    },
    
  },
  getters: {
    
    framework: state => state.framework,
    textCourses: state => state.textCourses,
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
