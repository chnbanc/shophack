<template>
  <div>
    <section class="intro-section">
        <div class="owl-carousel owl-theme row owl-dot-inner owl-dot-white intro-slider animation-slider cols-1 gutter-no">
            <div class="banner banner-fixed intro-slide1" style="background-color: #dddee0;">
                <figure>
                    <div class="slide-effect">
                        <div class="float-svg-container float-svg-1  ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px"
                                width="878.874px" height="615.792px" viewBox="0 -10 146.479 122.632"
                                class="float-svg" data-float-options="{'delta':10,'speed':2,'size':6}"
                                xml:space="preserve">
                                <path
                                    d="M130.932,84.665c3.185,-2.144,6.110,-4.998,8.531,-8.520c10.110,-13.610,8.467,-30.072,0.332,-42.346c-6.039,-8.390,-14.489,-13.797,-22.688,-18.422C101.596,6.864,81.881,4.547,61.349,12.108C43.416,13.790,27.653,21.203,15.990,33.373C4.844,46.946,-9.593,72.549,8.790,86.890c12.138,12.717,28.065,13.809,41.389,14.725c11.112,-0.221,22.039,-2.444,33.020,-6.916c13.288,-8.161,19.548,-6.340,31.060,-4.985C119.789,90.341,125.709,88.455,130.932,84.665z">
                                </path>
                            </svg>
                        </div>
                        <div class="float-svg-container float-svg-2  ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_2" x="0px" y="0px"
                                width="710.678px" height="543.094px" viewBox="0 -10 165.274 146.301"
                                class="float-svg" data-float-options="{'delta':10,'speed':1,'size':4.3}"
                                xml:space="preserve">
                                <path
                                    d="M93.301,135.151c-19.925,-5.702,-39.601,-19.594,-56.258,-35.144C16.933,85.792,0.546,68.421,0.015,43.508C-0.381,24.953,7.203,1.282,26.057,-7.618c4.479,-1.375,9.280,-1.435,14.057,-0.425c9.430,2.734,18.328,8.193,26.058,16.592c6.131,6.640,11.089,14.306,17.716,20.035c18.042,13.179,26.139,3.024,51.780,8.336c9.167,0.554,18.815,1.156,24.192,7.641c9.444,11.897,5.473,33.018,-3.772,49.940C142.467,120.034,116.856,135.567,93.301,135.151z">
                                </path>
                            </svg>
                        </div>
                        <img src="../../assets/images/demos/demo1/slides/Slider1_women.png"
                            class="  intro-slide1-img"
                            alt="intro-banner" width="1180" height="630" />
                    </div>
                </figure>
                <div class="container">

                    <div class="banner-content y-50">
                        <h4 class="banner-subtitle text-uppercase font-weight-bold ls-l mb-2">
                            <span class="d-inline-block">Sell
                                Quick, and</span>
                            <span class="d-inline-block label-star bg-primary text-white">Fast</span>
                        </h4>
                        <h3 class="banner-title text-uppercase font-weight-bold text-white lh-1 ls-l  ">
                            To everyone</h3>
                        <h3 class="font-weight-normal mb-1  ">
                            Get assigned a <strong>dispatch rider</strong> on registration
                        </h3>
                        <p class=" ls-m text-dark font-primary mb-6">
                            Receives Payments from Ghana, Nigeria, Kenya and UK.</p>
                        <a  @click="open" class="btn btn-outline btn-dark">Login / Register
                            Store</a>
                    </div>
                </div>
            </div>
            <div class="bringToTop">
                <c-modal
                :is-open="isOpen"
                :on-close="close"
                :closeOnOverlayClick="true"
                size= 'xl'
                is-centered
                >
                    <c-modal-content ref="content">
                        <c-modal-header><h3>Register as a Seller</h3></c-modal-header>

                        <c-modal-body>
                            <c-box>
                                <c-tabs variant="enclosed-colored" is-fitted>
                                    <c-tab-list>
                                        <c-tab>Login</c-tab>
                                        <c-tab>Register</c-tab>
                                    </c-tab-list>

                                    <c-tab-panels>
                                        <c-tab-panel>
                                            <div v-if="this.$auth.user" class="my-33">
                                                <h4>You are logged in, Please held over to your <nuxt-link to="/dashboard"><span class="blue">Dashboard</span></nuxt-link></h4>
                                            </div>
                                            <div class="tab-pane active" id="signin" v-else>
                                                <form action="#">
                                                    <div class="form-group">
                                                        <p v-if="errors">{{errors}}</p>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email" class="mb-3">Email Address:</label>
                                                        <input type="text" class="form-control" v-model="info.email" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-password" class="mb-3">Password:</label>
                                                        <input type="password" class="form-control" v-model="info.password"
                                                            required />
                                                    </div>
                                                    <v-btn @click="loginUser(info)" class="btn btn-primary btn-block mb-3">
                                                        <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                                                        {{ loading ? '' : 'LOGIN' }}
                                                    </v-btn>
                                                </form>
                                            </div>
                                        </c-tab-panel>
                                        <c-tab-panel>
                                            <div v-if="this.$auth.user" class="my-33">
                                                <h4>You are logged in, Please held over to your <nuxt-link to="/dashboard"><span class="blue">Dashboard</span></nuxt-link></h4>
                                            </div>
                                            <div class="tab-pane active" id="register" v-else>
                                                <h6>Approval of shop costs $20. You would be assigned a dispatch rider on confirmation of payment.</h6>
                                                <form action="#">
                                                    <div class="form-group">
                                                        <label for="singin-email">Your Full Name:</label>
                                                        <input type="text" class="form-control"
                                                            required v-model="addUserInfo.name"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Your email address:</label>
                                                        <input type="email" class="form-control" 
                                                            required v-model="addUserInfo.email"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Your Phone Number:</label>
                                                        <input type="tel" class="form-control"
                                                            required v-model="addUserInfo.phone_number"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Your Store Name:</label>
                                                        <input type="text" class="form-control" 
                                                            required v-model="addUserInfo.name_of_store"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Your Store Description:</label>
                                                        <input type="text" class="form-control" name="register-email"
                                                            required v-model="addUserInfo.description"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Your Store Address:</label>
                                                        <input type="text" class="form-control" name="register-email"
                                                            required v-model="addUserInfo.location"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Country of Residence</label>
                                                        <select v-model="addUserInfo.country" class="form-control" @change="attachBanks()">
                                                            <option disabled value="">Please select country</option>
                                                            <option v-for="country in countries" :value="country.name" :key="country.id">{{country.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Bank Name</label>
                                                        <select v-model="addUserInfo.account_bank_code" class="form-control">
                                                            <option disabled value="">Please select bank</option>
                                                            <option v-for="bank in banks" :value="bank.code" :key="bank.id">{{bank.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Account Number</label>
                                                        <input type="number" class="form-control" name="register-email"
                                                            required v-model="addUserInfo.account_number"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-email">Account Name</label>
                                                        <input type="text" class="form-control" name="register-email"
                                                            required v-model="addUserInfo.account_name"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-password">Password:</label>
                                                        <input type="password" class="form-control" name="register-password"
                                                            required v-model="addUserInfo.password"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="singin-password">Upload Store Cover Image:</label>
                                                        <input type="file" accept="image/png, image/jpeg" v-on:change="onChange" class="form-control">
                                                    </div>
                                                    <v-btn class="btn btn-primary btn-block" type="submit" @click="makePayment()">
                                                        <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                                                            {{ loading ? '' : 'SIGN UP' }}
                                                    </v-btn>
                                                </form>
                                            </div>
                                        </c-tab-panel>
                                    </c-tab-panels>
                                </c-tabs>
                            </c-box>

                            
                        </c-modal-body>  
                    </c-modal-content>
                    <c-modal-overlay />
                </c-modal>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { CThemeProvider, CReset, CButton } from '@chakra-ui/vue'
import {
  CModal,
  CModalOverlay,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
} from "@chakra-ui/vue";
import {
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel } from '@chakra-ui/vue'
import allcountries from "../../assets/countries.json"
import nigeriaBanks from "../../assets/nigeria.json"
import ghanaBanks from "../../assets/ghana.json"
import kenyaBanks from "../../assets/kenya.json"
export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CReset,
    CButton,
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel
  },
    data () {
        return {
            countries: allcountries.data,
            nigeria: nigeriaBanks.data,
            ghana: ghanaBanks.data,
            kenya: kenyaBanks.data,
            isOpen: false,
            banks: [],
            addUserInfo: {
                name: 'Tosin ',
                email: 'tofmatt@gmail.com',
                description: 'asass',
                role: 'seller',
                password: 'Ogunfowote400',
                account_number: '3028398370',
                phone_number: '08145485678',
                account_name: 'Tosin Ogunfowote',
                account_bank_code: '',
                country: '',
                transaction_id: '',
                location: 'Bamidele',
                name_of_store: 'Tosins Store'
            },
            info : {
                email: 'tofmatt@gmail.com',
                password: 'Ogunfowote400'
            },
            loading: false,
            errors: '',
            image: null
        };
        
    },
    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        onChange(event) {
            this.image = event.target.files[0]
        },
        async register(data){
            this.addUserInfo.transaction_id = data.transaction_id
            let formData = new FormData()
            formData.append('image', this.image, this.image.name)
            formData.append('name', this.addUserInfo.name)
            formData.append('email', this.addUserInfo.email)
            formData.append('description', this.addUserInfo.description)
            formData.append('password', this.addUserInfo.password)
            formData.append('account_number', this.addUserInfo.account_number)
            formData.append('phone_number', this.addUserInfo.phone_number)
            formData.append('role', this.addUserInfo.role)
            formData.append('account_name', this.addUserInfo.account_name)
            formData.append('account_bank_code', this.addUserInfo.account_bank_code)
            formData.append('country', this.addUserInfo.country)
            formData.append('transaction_id', this.addUserInfo.transaction_id)
            formData.append('location', this.addUserInfo.location)
            formData.append('name_of_store', this.addUserInfo.name_of_store)
            try {
                this.loading = true;
                this.$toasted.show('Signing you up')
                const response = await this.$axios.post('/auth/register', formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                })
                await this.$auth.loginWith('local', {
                data: this.addUserInfo
            })
            this.$toasted.success('You have successfully registered')
            this.$router.push('/dashboard')
            this.$toasted.success('Welcome to your dashboard')
            return response;
            } catch(error) {
                this.loading = false;
                this.errors = error.response.data.message
                this.$toasted.error('There was a problem signing up, check your credentials');
            }
        },
        makePayment() {
            FlutterwaveCheckout({
                public_key: "FLWPUBK_TEST-ffd61da84604886eeb5e71b9a2ac5732-X",
                tx_ref: "hooli-tx-1920bbtyt",
                amount: 20,
                currency: "USD",
                country: "NG",
                payment_options: "card,mobilemoney,ussd,mobilemoneyghana,barter,",
                customer: {
                    email: this.addUserInfo.email,
                    phone_number: this.addUserInfo.phone,
                    name: this.addUserInfo.name,
                },
                callback: data => { // specified callback function
                    this.$toasted.success('Registering your Store.')
                    const that = this
                    that.register(data)
                },
                customizations: {
                    title: "My Jumga store",
                    description: "Payment for Approval of store",
                },
            });
        },
        attachBanks(){
            if(this.addUserInfo.country === 'Nigeria'){
                this.banks = this.nigeria 
            }else if (this.addUserInfo.country === 'Kenya') {
                this.banks = this.kenya
            }else if (this.addUserInfo.country === 'Ghana') {
                this.banks = this.ghana 
            }else {
                
            }
        },
        async loginUser(loginInfo){
            this.errors = ''
            try {
                this.loading = true;
                const response = await this.$auth.loginWith('local', {
                data: loginInfo
            })
                this.$router.push('/dashboard')
                this.$toasted.success('You are logged in')
                this.close()
                return response;
            } catch (error){
                this.errors = error.response.data.message
                this.$toasted.error('An error occoured, check your details')
                this.loading = false;
            }
        }
    },
    computed: {
        
    }

}
</script>

<style>
.bringToTop{
    z-index: -10;
}
.css-tsegqq-Yn {
    width: 80rem !important;
    padding: 20px;
    max-height: 80vh !important;
    overflow: auto !important;
}
.css-6baq7i-Yn{
    font-size: 17px;
}
.css-6ibo7w{
    width: 80rem !important;
    padding: 20px;
    max-height: 80vh !important;
    overflow: auto !important; 
}
.css-6ibo7w{
    font-size: 17px;
}
.form-group input {
    margin-bottom: 20px;
}
.form-group select {
    margin-bottom: 20px;
}
.blue{
    color: blue;
}
.my-33{
    margin-top: 3rem;
}
</style>