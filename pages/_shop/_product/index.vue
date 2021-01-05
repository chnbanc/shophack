<template>
  <div class="mt-4">
        <div class="page-content mb-10">
            <div class="container">
                <div class="product product-single row">
                    <div class="col-md-6">
                        <div class="product-gallery product-gallery-sticky">
                            <div class="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1">
                                <figure class="product-image">
                                    <img src="@/assets/images/product/product-1-580x580.jpg" alt="Women's Brown Leather Backpacks" width="800" height="900">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-details">
                            <div class="product-navigation">
                                <ul class="breadcrumb breadcrumb-lg">
                                    <li><a href="demo1.html"><i class="fas fa-home"></i></a></li>
                                    <li><a href="#" class="active">Products</a></li>
                                    <li>Detail</li>
                                </ul>

                            </div>

                            <h1 class="product-name">Women's Brown Leather Backpacks</h1>
                            <div class="product-meta">
                                SKU: <span class="product-sku">12345670</span>
                                BRAND: <span class="product-brand">The Northland</span>
                            </div>
                            <div class="product-price">$139.00</div>

                            <p class="product-short-desc">Sed egestas, ante et vulputate volutpat, eros pede semper
                                est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
                                adipiscing. Sed lectus te et vulputate aucibus adipiscing. Sed lectus. us
                                adipiscing. Sed lectus. </p>
                            <div class="product-form product-color">
                                <label>Color:</label>
                                <div class="product-variations">
                                    <a class="color" data-src="images/demos/demo7/products/big1.jpg" href="#"
                                        style="background-color: #d99e76"></a>
                                    <a class="color" data-src="images/demos/demo7/products/2.jpg" href="#"
                                        style="background-color: #267497"></a>
                                    <a class="color" data-src="images/demos/demo7/products/3.jpg" href="#"
                                        style="background-color: #9a999d"></a>
                                    <a class="color" data-src="images/demos/demo7/products/4.jpg" href="#"
                                        style="background-color: #2b2b2b"></a>
                                </div>
                            </div>
                            <div class="product-form product-size">
                                <label>Size:</label>
                                <div class="product-form-group">
                                    <div class="product-variations">
                                        <a class="size" href="#">S</a>
                                        <a class="size" href="#">M</a>
                                        <a class="size" href="#">L</a>
                                        <a class="size" href="#">XL</a>
                                        <a class="size" href="#">2XL</a>
                                    </div>
                                    <a href="#" class="size-guide"><i class="fas fa-ruler"></i>Size
                                        Guide</a>
                                    <a href="#" class="product-variation-clean">Clean All</a>
                                </div>
                            </div>
                            <div class="product-variation-price">
                                <span>$239.00</span>
                            </div>

                            <hr class="product-divider">

                            <div class="product-form product-qty">
                                <label>QTY:</label>
                                <div class="product-form-group">
                                    <div class="input-group">
                                        <button class="quantity-minus"><i class="fas fa-minus"></i></button>
                                        <input class="quantity form-control" type="number" min="1" max="1000000">
                                        <button class="quantity-minus"><i class="fas fa-plus"></i></button>
                                    </div>
                                    <button class="btn-product btn-cart"><i class="fas fa-cart-plus"></i>Add To
                                        Cart</button>
                                </div>
                            </div>

                            <hr class="product-divider mb-3">

                            <div class="tab tab-nav-simple product-tabs">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#product-tab-description">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#product-tab-shipping-returns">Shipping &amp;
                                            Returns</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active in" id="product-tab-description">
                                        <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
                                            Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor.
                                            Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis
                                            quis sapien. Praesent id enim sit amet odio vulputatefi.</p>
                                        <p>Praesent id enim sit amet odio vulputate eleifend in in tortor. Sellus
                                            massa, tristique sitiismonec tellus massa, tristique sit amet condim
                                            vel, facilisis quimequistiqutiqu amet condim vel, facilisis Facilisis
                                            quis sapien. Praesent id enim sit amet odio vulputate odio vulputate
                                            eleifend in in tortor. Sellus massa, tristique sitiismonec tellus massa,
                                            tristique sit ametcdimel,facilisis quimequistiqutiqu amet condim vel,
                                            facilisis Facilisis quis sapien. Praesent id enim sit amet odio
                                            vulputate</p>
                                    </div>
                                    <div class="tab-pane " id="product-tab-shipping-returns">
                                        <h6 class="mb-2">Free Shipping</h6>
                                        <p class="mb-0">We deliver to over 100 countries around the world. For full
                                            details of the delivery options we offer, please view our <a href="#"
                                                class="text-primary">Delivery information</a><br />We hope you’ll
                                            love every purchase, but if you ever need to return an item you can do
                                            so within a month of receipt. For full details of how to make a return,
                                            please view our <br /><a href="#" class="text-primary">Returns
                                                information</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <allProducts />
                
            </div>
        </div>
  </div>
</template>

<script>
import allProducts from '@/components/landingPage/allProducts'
export default {
    components: {
        allProducts
    }

}
</script>

<style>

</style>