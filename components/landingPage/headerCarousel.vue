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
                        <a  @click="open" class="btn btn-outline btn-dark">Register
                            Shop</a>
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
                                        <div class="tab-pane active" id="signin">
                                            <form action="#">
                                                <div class="form-group">
                                                    <label for="singin-email" class="mb-3">Username or email address:</label>
                                                    <input type="text" class="form-control" id="singin-email" name="singin-email" required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="singin-password" class="mb-3">Password:</label>
                                                    <input type="password" class="form-control" id="singin-password" name="singin-password"
                                                        required />
                                                </div>
                                                <button class="btn btn-primary btn-block mb-3" type="submit">Sign in</button>
                                            </form>
                                        </div>
                                    </c-tab-panel>
                                    <c-tab-panel>
                                        <div class="tab-pane active" id="register">
                                            <h6>Approval of shop costs $20</h6>
                                            <form action="#">
                                                <div class="form-group">
                                                    <label for="singin-email">Your email address:</label>
                                                    <input type="email" class="form-control" id="register-email" name="register-email"
                                                        required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="singin-password">Password:</label>
                                                    <input type="password" class="form-control" id="register-password" name="register-password"
                                                        required />
                                                </div>
                                                <button class="btn btn-primary btn-block" type="submit">Sign up</button>
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
            isOpen: false
        }
    },
    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        }
    }
}
</script>

<style>

</style>