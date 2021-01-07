<template>
    <div class="courses">
        <h2 style="text-align:center">{{textCourses.recent}}</h2>
        <b-container class="bv-example-row">
            <b-row >
                <b-col class="responsive"  sm="6" md="6" xl="3" v-for="(item, index) in list_courses" :key="index">
                    <div  class="recent__courses " data-aos="fade-up" data-aos-duration="2000" >
                        <div class="recent__courses__top">
                            <div class="recent__courses__top__content">
                                <img :src="item.image">
                                <span class="name__courses">{{item.nameCourses}}</span>
                                <span class="title__courses">{{item.title}}</span>
                                
                            </div>
                        </div>
                        <div class="recent__courses__button">
                            <div class="icon__star">
                                <b-icon  style="margin-right:5px" icon="star-fill"></b-icon>
                                <b-icon   style="margin-right:5px"  icon="star-fill"></b-icon>
                                <b-icon   style="margin-right:5px" icon="star-fill"></b-icon>
                                <b-icon   style="margin-right:5px" icon="star-fill"></b-icon>
                                <b-icon   style="margin-right:5px" icon="star-half"></b-icon>
                                <strong style="color:black">4.7</strong><br>
                                <small style="color:rgba(0,0,0,.54)">(391 ratings)</small>
                            </div>
                            
                            <div class="price">
                                <div class="price__course">
                                    <strong >{{item.price}}</strong>
                                </div>

                                <div class="price__cart">
                                    
                                    <b-icon style="color:white" icon="cart-plus-fill"></b-icon>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </b-col>
              
            </b-row>
            <b-row>
                <b-col>
                    <div class="highlights">
                        <h3>{{textCourses.highlights}}</h3>
                        <span>{{textCourses.template}}</span>
                    </div>
                </b-col>
               
            </b-row>

            <b-row >
                <b-col md="12" xl="6" :class="{'trai': index %2 ==0  }" v-for="(item, index) in framework" :key="index">
                     
               
                    <div  class="framework" data-aos="fade-on"  >

                          <div class="framework__bs">
                            <strong>{{item.bs}}<img :src="item.image"></strong>
                        </div>

                        <div class="framework__text">
                            <strong>{{item.title}}</strong>
                            <p>{{item.text}}</p>
                        </div>
                        
                    </div> 
                </b-col>

        
            </b-row>

            <b-row>
                <b-col>
                    <div style="padding:30px 0 50px;text-align:center;">
                        <button class="view" data-aos="fade-up" data-aos-duration="1000" >View all</button>
                    </div>
                </b-col>
            </b-row>

            <b-row  class="justify-content-md-center register">
               <b-col xl="6">
                   <div class=" content__register">
                    <h4>Sign up and get new UI releases</h4>
                        <p>No spam. Only releases, updates and discounts</p>
                   
                        <div style="width:100%;padding-left:1px">
                            <b-row>
                                <b-col cols="9" style="padding:0">
                                    <input style="width:100%" type="email" placeholder="Your email address"> 
                                </b-col>
                                <b-col cols="3" style="padding:0">
                                    <button style="width:100%" data-aos="flip-left" >SUBSCRIBE</button>
                                </b-col>
                            </b-row>
                        </div>
                       
                   </div>
               </b-col>
            </b-row>
            
            
        </b-container>
        
  </div>
</template>

<script>
import { list_courses} from '@/data/data'
import {  mapGetters } from 'vuex'
export default {
    data(){
        return{
           list_courses:list_courses
        }
    },
    computed:{
        ...mapGetters(['framework','textCourses']),
        
    }
    
}
</script>

<style>
</style>