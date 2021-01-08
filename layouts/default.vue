<template>
    <CThemeProvider>
        <div class="home">
            <header class="header">
                <div class="header-middle sticky-header fix-top sticky-content">
                    <div class="container">
                        <div class="header-left">
                            <a href="#" class="mobile-menu-toggle">
                                <i class="fas fa-bars"></i>
                            </a>
                        </div>
                        <div class="header-center">
                            <a href="demo1.html" class="logo">
                                <img src="../assets/images/logo.png" alt="logo" width="163" height="39" />
                            </a>
                            <!-- End of Logo -->
                            <nav class="main-nav">
                                <ul class="menu">
                                    <li class="active">
                                        <nuxt-link to="/">Home</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/products">Shops</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/products">All Products</nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-right">
                            <v-btn to="/products" class="login" @click="open" v-if="!this.$auth.user">
                                <i class="fas fa-user"></i>
                                <span>Login</span>
                            </v-btn>
                            <nuxt-link to="/dashboard" v-if="this.$auth.user">DASHBOARD</nuxt-link>
                            <!-- End of Login -->
                            <span class="divider"></span>
                            <div class="dropdown cart-dropdown">
                                <a href="#" class="cart-toggle">
                                    <span class="cart-label">
                                        <span class="cart-name">My Cart</span>
                                        <span class="cart-price">$42.00</span>
                                    </span>
                                    <i class="minicart-icon">
                                        <span class="cart-count">2</span>
                                    </i>
                                </a>
                                <!-- End of Cart Toggle -->
                                <div class="dropdown-box">
                                    <div class="product product-cart-header">
                                        <span class="product-cart-counts">2 items</span>
                                        <span><a href="cart.html">View cart</a></span>
                                    </div>
                                    <div class="products scrollable">
                                        <div class="product product-cart">
                                            <div class="product-detail">
                                                <a href="product.html" class="product-name">Solid Pattern In Fashion Summer
                                                    Dress</a>
                                                <div class="price-box">
                                                    <span class="product-quantity">1</span>
                                                    <span class="product-price">$129.00</span>
                                                </div>
                                            </div>
                                            <figure class="product-media">
                                                <a href="#">
                                                    <img src="../assets/images/cart/product-1.jpg" alt="product" width="90"
                                                        height="90" />
                                                </a>
                                                <button class="btn btn-link btn-close">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </figure>
                                        </div>
                                        <!-- End of Cart Product -->
                                        <div class="product product-cart">
                                            <div class="product-detail">
                                                <a href="product.html" class="product-name">Mackintosh Poket Backpack</a>
                                                <div class="price-box">
                                                    <span class="product-quantity">1</span>
                                                    <span class="product-price">$98.00</span>
                                                </div>
                                            </div>
                                            <figure class="product-media">
                                                <a href="#">
                                                    <img src="../assets/images/cart/product-2.jpg" alt="product" width="90"
                                                        height="90" />
                                                </a>
                                                <button class="btn btn-link btn-close">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </figure>
                                        </div>
                                        <!-- End of Cart Product -->
                                    </div>
                                    <!-- End of Products  -->
                                    <div class="cart-total">
                                        <label>Subtotal:</label>
                                        <span class="price">$42.00</span>
                                    </div>
                                    <!-- End of Cart Total -->
                                    <div class="cart-action">
                                        <a href="checkout.html" class="btn btn-dark"><span>Checkout</span></a>
                                    </div>
                                    <!-- End of Cart Action -->
                                </div>
                                <!-- End of Dropdown Box -->
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div class="bringToTop">
                <c-modal
                :is-open="isOpen"
                :on-close="close"
                :closeOnOverlayClick="true"
                size= 'xl'
                is-centered
                >
                <c-modal-content ref="content">
                    <c-modal-header><h3>Login to Dashboard</h3></c-modal-header>

                    <c-modal-body>
                        <div class="tab-pane active" id="signin">
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

                        
                    </c-modal-body>  
                </c-modal-content>
                <c-modal-overlay />
                </c-modal>
            </div>
            <Nuxt />
            <footer class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="row">
                            <div class="col-lg-3">
                                <a href="demo1.html" class="logo-footer">
                                    <img src="../assets/images/logo-footer.png" alt="logo-footer" width="163" height="39" />
                                </a>
                                <!-- End of FooterLogo -->
                            </div>
                            <div class="col-lg-9">
                                <div class="widget widget-newsletter form-wrapper form-wrapper-inline">
                                    <div class="newsletter-info mx-auto mr-lg-2 ml-lg-4">
                                        <h4 class="widget-title">Subscribe to our Newsletter</h4>
                                        <p>Get all the latest information on Events, Sales and Offers.</p>
                                    </div>
                                    <form action="#" class="input-wrapper input-wrapper-inline">
                                        <input type="email" class="form-control" name="email" id="newsletter-email1"
                                            placeholder="Email address here..." required />
                                        <button class="btn btn-primary btn-md ml-2" type="submit">subscribe<i
                                                class="d-icon-arrow-right"></i></button>
                                    </form>
                                </div>
                                <!-- End of Newsletter -->
                            </div>
                        </div>
                    </div>
                    <!-- End of FooterTop -->
                    <div class="footer-middle">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="widget">
                                    <h4 class="widget-title">Contact Info</h4>
                                    <ul class="widget-body">
                                        <li>
                                            <label>Phone:</label>
                                            <a href="#">Toll Free (123) 456-7890</a>
                                        </li>
                                        <li>
                                            <label>Email:</label>
                                            <a href="#">mail@donald.com</a>
                                        </li>
                                        <li>
                                            <label>Address:</label>
                                            <a href="#">123 Street Name, City, England</a>
                                        </li>
                                        <li>
                                            <label>WORKING DAYS/HOURS</label>
                                        </li>
                                        <li>
                                            <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- End of Widget -->
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="widget ml-lg-4">
                                    <h4 class="widget-title">My Account</h4>
                                    <ul class="widget-body">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Order History</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Custom Service</a></li>
                                        <li><a href="#">Terms &amp; Condition</a></li>
                                    </ul>
                                </div>
                                <!-- End of Widget -->
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="widget ml-lg-4">
                                    <h4 class="widget-title">Contact Info</h4>
                                    <ul class="widget-body">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Order History</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Custom Service</a></li>
                                        <li><a href="#">Terms &amp; Condition</a></li>
                                    </ul>
                                </div>
                                <!-- End of Widget -->
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </CThemeProvider>

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
  head: {
        script: [
            { src: "https://checkout.flutterwave.com/v3.js", body: true }
        ],
    },
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
            isOpen: false,
            loading: false,
            errors: '',
            info : {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        async loginUser(loginInfo){
            this.errors = ''
            try {
                this.loading = true;
                const response = await this.$auth.loginWith('local', {
                data: loginInfo
            })
                this.$router.push('/dashboard')
                return response;
                this.$toast.success('You are logged in')
            } catch (error){
                this.errors = error.response.data.message
                console.log(error);
                this.loading = false;
            }
        }
    }
}
</script>


<style>
.bringToTop{
    z-index: -10;
}
.css-tsegqq-Yn {
    max-width: 80rem !important;
    padding: 20px;
    max-height: 80vh;
    overflow: auto;
}
.css-6baq7i-Yn{
    font-size: 17px;
}
.form-group input {
    margin-bottom: 20px;
}
</style>
