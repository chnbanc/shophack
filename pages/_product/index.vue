<template>
  <div class="mt-4">
        <div class="page-content mb-10">
            <div class="container">
                <div class="product product-single row">
                    <div class="col-md-6">
                        <div class="product-gallery product-gallery-sticky">
                            <div class="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1">
                                <figure class="product-image">
                                    <img :src='product.images[0].image' alt="Women's Brown Leather Backpacks" width="800" height="900">
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

                            <h1 class="product-name">{{product.name}}</h1>
                            <div class="product-meta">
                                Stock Available: <span class="product-sku">{{product.number_of_stock}}</span>
                            </div>
                            <div class="product-price">${{product.price}}</div>

                            <p class="product-short-desc">{{product.description}}</p>
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
                                        <a class="nav-link active" href="#">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Shipping &amp;
                                            Returns</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active in" id="product-tab-description">
                                        <p>{{product.description}}.</p>
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
    props: ['product'],
    components: {
        allProducts
    }

}
</script>

<style>

</style>