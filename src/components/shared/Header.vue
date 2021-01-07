<template>
    <div class="header" >

        <div class="header__top">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col cols="4" sm="2" md="2" lg="3" xl="3" >
                       
                        <div style="line-height: 60px;" class="header__top__content__left">
                            <label for="nav-mobile" class="btn__mobile">
                                <i class="fas fa-bars"></i>
                             </label>

                             
                             <input type="checkbox" name="" class="nav__input" id="nav-mobile">
                            <div>
                                <img :src="require('@/assets/image/rings.png.png')">
                            </div>
                             
                            

                            <label for="nav-mobile" class="nav__overlay"></label>
                             <nav class="nav__mobile">
                                 <label for="nav-mobile" class="nav__mobile__close">
                                     <i class="fas fa-times"></i>
                                 </label>
                               <div style=" height: 25rem;overflow-y: auto;">
    
                                 <ul style="list-style:none" > 
                                     <li   v-for="(item, index) in list_menu" :key="index">
                                         <a  class="list__menu"  href="">{{item.title}}</a>
                                         <div  >
                                             <ul class="list__submenu"  v-if=" item.sub != undefined && item.sub.length > 0 ">
                                                <li v-for="(subItem, indexx) in item.sub " :key="indexx">
                                                    <a  href="">{{subItem.title}}</a>
                                                </li>
                                            </ul>
                                         </div>
                                     </li>
                                 </ul>
                               </div>
                             </nav>
                        </div>
                    </b-col >

                    <b-col cols="8" sm="10" md="10" lg="9" xl="9" >
                        <div class="header__top__content">
                            <div class="header__top__content__right">
                                <router-link to="/about" style="width:100px">Get Help</router-link>
                                
                                <form class="form">
                                    <input style=" padding-left: 10px;" type="text" placeholder="Search">

                                    <button class="form__btn" type="submit">
                                        <b-icon class="icon" icon="search"></b-icon>
                                    </button>
                                </form>

                                <div class="notifications">
                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" width="25" height="25">
                                        <g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
                                            <path d="M21.5,12.254c0.003-5.247-4.248-9.502-9.494-9.506C6.759,2.745,2.503,6.996,2.5,12.243 c-0.002,2.915,1.335,5.669,3.625,7.471l-2.332,2.333c-0.39,0.39-0.39,1.024,0,1.414c0.394,0.383,1.02,0.383,1.414,0L7.863,20.8 c2.613,1.267,5.661,1.267,8.274,0l2.656,2.657c0.394,0.383,1.02,0.383,1.414,0c0.39-0.39,0.39-1.024,0-1.414l-2.332-2.333 C20.163,17.912,21.499,15.164,21.5,12.254z M11.25,5.754c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75V11.5h2.75 c0.414,0,0.75,0.336,0.75,0.75S15.914,13,15.5,13H12c-0.414,0-0.75-0.336-0.75-0.75V5.754z M7.4,2.27 c0.251-0.115,0.361-0.412,0.246-0.663c-0.028-0.061-0.067-0.115-0.117-0.16C5.711-0.236,2.873-0.127,1.19,1.691 c-1.593,1.72-1.593,4.376,0,6.096C1.285,7.89,1.418,7.948,1.558,7.948c0.195-0.001,0.371-0.114,0.454-0.29 C3.11,5.278,5.02,3.368,7.4,2.27z M19.5,0.254c-1.125,0.003-2.207,0.429-3.033,1.193c-0.204,0.187-0.217,0.503-0.031,0.706 c0.045,0.049,0.099,0.089,0.16,0.117c2.38,1.098,4.29,3.008,5.388,5.388c0.085,0.174,0.26,0.286,0.454,0.29 c0.14,0,0.273-0.058,0.368-0.161c1.683-1.818,1.573-4.657-0.245-6.339C21.728,0.677,20.634,0.251,19.5,0.254z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </svg>

                                    <div class="notifications__content">
                                        <div class="notifications__content1">

                                            <div class="notifications__content__title">
                                                <span>{{text_notifications.notifications}}</span>
                                            </div>

                                            <div class="notifications__content__clear" >
                                                <span class="clear">{{text_notifications.clear}}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="time">

                                    <svg class="time__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" width="25" height="25">
                                        <g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
                                            <path d="M21.5,3h-2.75c-0.138,0-0.25-0.112-0.25-0.25V1c0-0.552-0.448-1-1-1s-1,0.448-1,1v4.75c0,0.414-0.336,0.75-0.75,0.75 S15,6.164,15,5.75V3.5C15,3.224,14.776,3,14.5,3H8.25C8.112,3,8.001,2.889,8,2.751V1c0-0.552-0.448-1-1-1S6,0.448,6,1v4.75 C6,6.164,5.664,6.5,5.25,6.5S4.5,6.164,4.5,5.75V3.5C4.5,3.224,4.276,3,4,3H2.5c-1.105,0-2,0.895-2,2v17c0,1.105,0.895,2,2,2h19 c1.105,0,2-0.895,2-2V5C23.5,3.895,22.605,3,21.5,3z M21.5,21.5c0,0.276-0.224,0.5-0.5,0.5H3c-0.276,0-0.5-0.224-0.5-0.5v-12 C2.5,9.224,2.724,9,3,9h18c0.276,0,0.5,0.224,0.5,0.5V21.5z M18.185,13.111l-6-2.383c-0.119-0.046-0.251-0.046-0.37,0l-6,2.383 c-0.193,0.077-0.319,0.266-0.315,0.474c0,0.034,0,3.38,0,3.38c0,0.414,0.336,0.75,0.75,0.75S7,17.379,7,16.965v-2.506l4.834,1.706 c0.107,0.038,0.225,0.038,0.332,0l6-2.118c0.26-0.092,0.397-0.377,0.305-0.638C18.423,13.273,18.319,13.164,18.185,13.111z M15.263,15.829L12,16.981l-3.263-1.152c-0.26-0.092-0.546,0.045-0.638,0.306c-0.019,0.053-0.028,0.11-0.028,0.166v2.145 c0,0.212,0.134,0.402,0.334,0.472l2.574,0.908c0.661,0.232,1.381,0.232,2.042,0l2.574-0.908c0.2-0.07,0.334-0.26,0.334-0.472V16.3 c0-0.276-0.223-0.5-0.5-0.5c-0.057,0-0.113,0.01-0.166,0.028L15.263,15.829z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                    
                                </div>

                                <div class="user__info">
                                    <div class="user__info__avatar">
                                        <img :src="require('@/assets/image/avatar.png')">
                                    </div>

                                    <div class="unser__info__name">
                                        <span>{{name}}</span>
                                    </div>
                                </div>
                                
                                
                            </div>

                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="header__button">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                         <div>
                            <b-navbar  type="dark" variant="dark">
                            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                                <b-collapse  id="nav-collapse" is-nav>
                                    <b-navbar-nav>
                                    

                                    <b-nav-item-dropdown class="before" text="Home Pages" right>
                                        <b-dropdown-item href="#">EN</b-dropdown-item>
                                        <b-dropdown-item href="#">ES</b-dropdown-item>
                                        <b-dropdown-item href="#">RU</b-dropdown-item>
                                        <b-dropdown-item href="#">FA</b-dropdown-item>
                                    </b-nav-item-dropdown>

                                    <b-nav-item-dropdown text="Student" right>
                                        <b-dropdown-item href="#">EN</b-dropdown-item>
                                        <b-dropdown-item href="#">ES</b-dropdown-item>
                                        <b-dropdown-item href="#">RU</b-dropdown-item>
                                        <b-dropdown-item href="#">FA</b-dropdown-item>
                                    </b-nav-item-dropdown>

                                    <b-nav-item-dropdown text="Instructor" right>
                                        <b-dropdown-item href="#">EN</b-dropdown-item>
                                        <b-dropdown-item href="#">ES</b-dropdown-item>
                                        <b-dropdown-item href="#">RU</b-dropdown-item>
                                        <b-dropdown-item href="#">FA</b-dropdown-item>
                                    </b-nav-item-dropdown>

                                    <b-nav-item-dropdown text="UI Components" right>
                                        <b-dropdown-item href="#">EN</b-dropdown-item>
                                        <b-dropdown-item href="#">ES</b-dropdown-item>
                                        <b-dropdown-item href="#">RU</b-dropdown-item>
                                        <b-dropdown-item href="#">FA</b-dropdown-item>
                                    </b-nav-item-dropdown>

                                    <b-nav-item-dropdown text="Layouts" right>
                                        <b-dropdown-item href="#">Account</b-dropdown-item>
                                        <b-dropdown-item href="#">Settings</b-dropdown-item>
                                    </b-nav-item-dropdown>
                                    </b-navbar-nav>
                                </b-collapse>
                            </b-navbar>
                        
                        </div> 
                        
                    </b-col>
                
                </b-row>
            </b-container>
            
        </div>
        
    </div>    
    
</template>


<script>

import { list_menu } from '@/data/data'
console.log(list_menu)
import $ from "jquery";
export default {
   data(){
       
       return{
           
           name:'Hiệu víp pro 123',
           text_notifications:{
               notifications:'Notifications',
               clear:'Clear All'
           },
            list_menu:list_menu
           
       }
      

   },
  
   mounted(){
       
       $(document).ready(function(){
          
           $('.list__menu').click(function(e){
               e.preventDefault();
               $(this).next('div').find('.list__submenu').toggleClass('active')
           })
       })
   }
  
}



 
</script>

<style>

</style>