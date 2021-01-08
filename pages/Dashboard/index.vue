<template>
  <div class="account">
        <div class="page-header dashHead"
            style="background-color: #3C63A4;">
            <h1 class="page-title">My Account</h1>
            <ul class="breadcrumb">
                <li><a href="demo1.html"><i class="fas fa-home"></i></a></li>
                <li>Seller Dashboard</li>
            </ul>
        </div>
        <!-- End PageHeader -->
        <div class="page-content mt-10 mb-10">
            <div class="container pt-1">
                <h5>Attached Dispatch Rider</h5>
                <h6>Name: Ezekiel Olawale Contact: 08145485678</h6>
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
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="dashboard">
                            <h3 class="mb-5">
                                Upload <span>Products</span>
                            </h3>
                            <form action="#" class="form">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <label>First Name *</label>
                                        <input type="text" class="form-control" name="first_name" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Last Name *</label>
                                        <input type="text" class="form-control" name="last_name" required="">
                                    </div>
                                </div>

                                <label>Display Name *</label>
                                <input type="text" class="form-control mb-0" name="display_name" required="">
                                <small class="d-block form-text mb-4">This will be how your name will be displayed
                                    in the account section and in reviews</small>

                                <label>Email address *</label>
                                <input type="email" class="form-control" name="email" required="">

                                <label>Current password (leave blank to leave unchanged)</label>
                                <input type="password" class="form-control" name="current_password">

                                <label>New password (leave blank to leave unchanged)</label>
                                <input type="password" class="form-control" name="new_password">

                                <label>Confirm new password</label>
                                <input type="password" class="form-control" name="confirm_password">

                                <button type="submit" class="btn btn-primary btn-reveal-right">SAVE CHANGES <i
                                        class="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                        <div class="tab-pane" id="orders">
                            <p class=" b-2">No order has been made yet.</p>
                            <a href="#" class="btn btn-primary">Go Shop</a>
                        </div>
                        <div class="tab-pane" id="downloads">
                            <p class="mb-2">No downloads available yet.</p>
                            <a href="#" class="btn btn-primary">Go Shop</a>
                        </div>
                        <div class="tab-pane" id="address">
                            <p class="mb-2">The following addresses will be used on the checkout page by default.
                            </p>
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card card-address">
                                        <div class="card-body">
                                            <h5 class="card-title">Billing Address</h5>
                                            <p>User Name<br>
                                                User Company<br>
                                                John str<br>
                                                New York, NY 10001<br>
                                                1-234-987-6543<br>
                                                yourmail@mail.com<br>
                                            </p>
                                            <a href="#" class="btn btn-link btn-secondary btn-underline">Edit <i
                                                    class="far fa-edit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card card-address">
                                        <div class="card-body">
                                            <h5 class="card-title">Shipping Address</h5>
                                            <p>You have not set up this type of address yet.</p>
                                            <a href="#" class="btn btn-link btn-secondary btn-underline">Edit <i
                                                    class="far fa-edit"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="account">
                            <form action="#" class="form">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <label>First Name *</label>
                                        <input type="text" class="form-control" name="first_name" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Last Name *</label>
                                        <input type="text" class="form-control" name="last_name" required="">
                                    </div>
                                </div>

                                <label>Display Name *</label>
                                <input type="text" class="form-control mb-0" name="display_name" required="">
                                <small class="d-block form-text mb-4">This will be how your name will be displayed
                                    in the account section and in reviews</small>

                                <label>Email address *</label>
                                <input type="email" class="form-control" name="email" required="">

                                <label>Current password (leave blank to leave unchanged)</label>
                                <input type="password" class="form-control" name="current_password">

                                <label>New password (leave blank to leave unchanged)</label>
                                <input type="password" class="form-control" name="new_password">

                                <label>Confirm new password</label>
                                <input type="password" class="form-control" name="confirm_password">

                                <button type="submit" class="btn btn-primary btn-reveal-right">UPLOAD PRODUCT <i
                                        class="d-icon-arrow-right"></i></button>
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
}
</script>

<style>
.dashHead{
    background: url(../../assets/images/page-header.jpg)
}
</style>