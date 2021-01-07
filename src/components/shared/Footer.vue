<template>
    <div class="footer">
        <b-container class="bv-example-row">
            <b-row>
                <b-col md="3"><img class="logo__footer" :src="require('@/assets/image/rings.png.png')"></b-col>
                <b-col md="9">
                    <b-row>
                        <b-col v-for="(item, index) in menu_footer" :key="index">
                            <div class="footer__title">
                                <h5>{{item.student}}</h5>
                            </div>
                            <div class="footer__link">
                                <router-link to="/">{{item.courses}}</router-link>
                                <router-link to="/">{{item.take_courses}}</router-link>
                                <router-link to="/">{{item.profile}}</router-link>
                                <router-link to="/" v-if="item.status">{{item.edit_account}}</router-link>
                        
                                <h6 v-else>{{item.edit_account}}</h6>
                                
                            </div>
                        </b-col>
                        <b-col>
                            <h5 class="contact__us">Contac Us</h5>
                            <p class="street__name">Street Name, Suite 12
                                Dublin, Ireland</p>
                            <div class="icon__footer">
                                <div class="facebook">
                                    <a  href=""><b-icon icon="facebook"></b-icon></a>

                                </div>
                                <div class="facebook">
                                    <a  href=""><b-icon icon="emoji-dizzy-fill"></b-icon></a>

                                </div>
                                <div class="facebook">
                                    <a  href=""><b-icon icon="emoji-angry-fill"></b-icon></a>

                                </div>
                            </div>
                        </b-col>
                     
                    </b-row>
                </b-col>
                
            </b-row>
        </b-container>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
             
            menu_footer:[
                {
                    student:'Student',
                    courses:'Courses',
                    take_courses:'Take Corse',
                    profile:'Profile',
                    edit_account:'Edit Account',
                    status:true
                },
                   {
                    student:'Instrutor',
                    courses:'Dashboard',
                    take_courses:'Edit Course',
                    profile:'Instructor Profile',
                    edit_account:'Quizzes',
                    status:true
                },
                   {
                    student:'Account',
                    courses:'Login',
                    take_courses:'Sign up',
                    profile:'Edit Account',
                    edit_account:'Payout',
                    status:true
                },
             

            ]
        }
    }
}
</script>

<style>

</style>