<template>
  <div class="container-fluid p-0 enquiry-form theme-light">
    <div class="row mw-900px mx-auto p-5">
      <div class="col-12 col-md-4">
      </div>
      <div class="col-12 col-md-8 pt-5 pt-md-0 pl-0 pl-sm-5">
        <h6 class="mb-5">Enquiry</h6>
        </div>
      <div class="col-12 col-md-4">
        <div class="d-flex">
          <img src="images/profile-js.png" class="profile-image" />
          <div>
            <h6 class="text-uppercase text-spaced-sm">John Smith</h6>
            <span>John Smith Property</span>
            <span>0403 737 788</span>
            <span>hello@jsproperty.com.au</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 pt-5 pt-md-0 pl-0 pl-sm-5">
        <form action="">
          <div class="input-row">
          <label>First name</label>
          <input
            v-model="form.firstName"
            class="input input-field"
            type="text"
            placeholder="First name"
          />
          <label>Email address</label>
          <input
            v-model="form.email"
            class="input input-field"
            type="email"
            placeholder="Email address"
          />
          </div>
          <div class="input-row">
          <label>Last name</label>
          <input
            v-model="form.lastName"
            class="input input-field"
            type="text"
            placeholder="Last name"
          />
          <label>Phone number</label>
          <input
            v-model="form.phone"
            class="input input-field"
            type="tel"
            placeholder="Phone number"
          />
          </div>
          <button type="submit" class="btn btn-wide btn-outline-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./script.js">