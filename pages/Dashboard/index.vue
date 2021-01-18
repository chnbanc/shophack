<template>
  <div class="account">
        <div class="page-header dashHead"
            style="background-color: #3C63A4;">
            <h1 class="page-title">{{this.$auth.user.data.store.name}} </h1>
            <ul class="breadcrumb">
                <li><h5>{{this.$auth.user.data.store.description}} </h5></li>
            </ul>
        </div>
        <!-- End PageHeader -->
        <div class="page-content mt-10 mb-10">
            <div class="container pt-1">
                <h5>Hello, {{this.$auth.user.data.name}} </h5>
                <h5>Account Details: {{this.$auth.user.data.account_number}}  </h5>
                <div class="tab tab-vertical">
                    <ul class="nav nav-tabs mb-4" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" href="#dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#orders">Orders</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">Logout</a>
                        </li>
                        <div class="my-33">
                            <h5>Attached Dispatch Rider:</h5>
                            <h6>Name: {{this.$auth.user.data.store.rider.account_name}} </h6>
                            <h6>Contact: {{this.$auth.user.data.store.rider.phone_number}} </h6>
                            <h6>Email: {{this.$auth.user.data.store.rider.email}} </h6>
                        </div>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="dashboard">
                            <h3 class="mb-5">
                                Upload <span>Products</span>
                            </h3>
                            <form action="#" class="form">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <label>Product Name </label>
                                        <input type="text" class="form-control" name="first_name" required="" v-model="addProductInfo.name">
                                    </div>
                                </div>

                                <label>Product Description</label>
                                <input type="text" class="form-control mb-0" name="display_name" required="" v-model="addProductInfo.description">
                                <small class="d-block form-text mb-4">This will be your product would be described, make it as accurate and precise as possible</small>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <label>Set Price ($)</label>
                                        <input type="number" class="form-control" name="first_name" required="" v-model="addProductInfo.price">
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Number of Stock </label>
                                        <input type="number" class="form-control" name="first_name" required="" v-model="addProductInfo.number_of_stock">
                                    </div>
                                </div>

                                <label for="singin-password">Upload Store Cover Image:</label>
                                <input type="file" accept="image/png, image/jpeg" v-on:change="onChange" multiple class="form-control">

                                <v-btn class="btn btn-primary btn-block" type="submit"  @click="addProduct(addProductInfo)">
                                    <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                                        {{ loading ? '' : 'ADD PRODUCTS' }}
                                </v-btn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    middleware: ['dashboard']
    ,
    data () {
        return {
            loading: false,
            addProductInfo: {
                name: '',
                description: '',
                price: '',
                number_of_stock: '',
                store_id: this.$auth.user.data.store.id,
                delivery_fee: 20,
            },
        }
        image: null
    },
    methods: {
        onChange(event) {
            this.image = event.target.files
        },
        async addProduct(Info){
            let formData = new FormData()
            for (const i of Object.keys(this.image)){
                formData.append('image[' + i + ']', this.image[i])
            }
            formData.append('name', this.addProductInfo.name)
            formData.append('description', this.addProductInfo.description)
            formData.append('price', this.addProductInfo.price)
            formData.append('number_of_stock', this.addProductInfo.number_of_stock)
            formData.append('store_id', this.addProductInfo.store_id)
            formData.append('delivery_fee', this.addProductInfo.delivery_fee)
            try {
                this.loading = true;
                const response = await this.$axios.post('https://jumga-flutterwave-solution-api.herokuapp.com/api/products', formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                })
                this.$toasted.success('Product has been added successfully')
                this.loading = false;
                return response
            } catch(error){
                this.loading = false;
                this.errors = error.response.data.message
                this.$toasted.error('An error occured, check all fields and try again')
            }
        },
    }
}
</script>

<style>
.dashHead{
    background: url(../../assets/images/page-header.jpg)
}
</style>