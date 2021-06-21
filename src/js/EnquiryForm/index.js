/* eslint-disable no-param-reassign */
// ^ this is declared as we change values in forEach loops for code readability (we should probably change these by referencing directly)
import Vue from "vue";
// TODO: would like to factor out the input component

export default Vue.component("enquiry-form", {
  props: ["theme"],
  data: function() {
    return {
      state: {
        form: {
          firstName: {
            value: "",
            valid: true,
            touched: false,
            skipNextValidation: false,
          },
          lastName: {
            value: "",
            valid: true,
            touched: false,
            skipNextValidation: false,
          },
          phone: {
            value: "",
            valid: true,
            touched: false,
            skipNextValidation: false,
          },
          email: {
            value: "",
            valid: true,
            touched: false,
            skipNextValidation: false,
          },
        },
        errorMessage: "",
        successMessage: "",
        theme: this.theme ?? "theme-light",
      },
    };
  },
  computed: {
    firstName() {
      return this.state.form.firstName.value;
    },
    lastName() {
      return this.state.form.lastName.value;
    },
    phone() {
      return this.state.form.phone.value;
    },
    email() {
      return this.state.form.email.value;
    },
  },
  watch: {
    firstName(value) {
      this.onChangeInput("firstName", value);
    },
    lastName(value) {
      this.onChangeInput("lastName", value);
    },
    phone(value) {
      this.onChangeInput("phone", value);
    },
    email(value) {
      this.onChangeInput("email", value);
    },
  },
  methods: {
    onSubmit: function() {
      this.clearMessages();
      if (
        !Object.values(this.state.form).every(
          (field) => field.valid && field.touched
        )
      ) {
        // handle invalid input
        this.onSubmitError();
        return;
      }
      // success
      this.onSubmitSuccess();
    },
    onSubmitError: function() {
      this.state.errorMessage =
        "Please ensure all required fields are completed.";
      Object.values(this.state.form).forEach((field) => {
        field.valid = this.validateLength(field.value);
      });
    },
    onSubmitSuccess: function() {
      const { firstName, lastName, phone, email } = this.state.form;
      this.state.successMessage = `${firstName.value} ${lastName.value} ${phone.value} ${email.value}`;
      this.resetForm();
    },
    clearMessages: function() {
      this.state.errorMessage = "";
      this.state.successMessage = "";
    },
    resetForm: function() {
      Object.values(this.state.form).forEach((field) => {
        field.value = "";
        field.skipNextValidation = true;
        field.touched = false;
      });
    },
    onCloseMessage: function() {
      this.clearMessages();
    },
    onChangeInput: function(input, value) {
      if (this.state.form[input].skipNextValidation) {
        this.state.form[input].skipNextValidation = false;
        return;
      }
      this.state.form[input].touched = true;
      this.state.form[input].valid = this.validateLength(value);
    },
    validateLength: (string) => {
      return string.length > 0;
    },
  },
  template: `
  <div class="container-fluid p-0 enquiry-form" 
        v-bind:class="state.theme">
    <div class="row mw-900px mx-auto p-3 p-sm-5">
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
        <form action="" v-on:submit.prevent="onSubmit">
          <div class="input-row">
          <label>First name</label>
          <input
            class="input input-field"
            type="text"
            placeholder="First name*"
            v-model.trim="state.form.firstName.value"
            v-bind:class="{ 'invalid' : !state.form.firstName.valid }"
          />
          <label>Email address</label>
          <input
            class="input input-field"
            type="email"
            placeholder="Email address*"
            v-model.trim="state.form.email.value"
            v-bind:class="{ 'invalid' : !state.form.email.valid }"
          />
          </div>
          <div class="input-row">
          <label>Last name</label>
          <input
            class="input input-field"
            type="text"
            placeholder="Last name*"
            v-model.trim="state.form.lastName.value"
            v-bind:class="{ 'invalid' : !state.form.lastName.valid }"
          />
          <label>Phone number</label>
          <input
            class="input input-field"
            type="tel"
            placeholder="Phone number*"
            v-model.trim="state.form.phone.value"
            v-bind:class="{ 'invalid' : !state.form.phone.valid }"
          />
          </div>
          <button type="submit" class="btn btn-wide btn-outline-primary">
            Submit
          </button>
          <!-- submission message box -->
          <div v-if="state.errorMessage || state.successMessage" class="toast show mt-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong v-if="state.errorMessage" class="mr-auto text-danger">Error</strong>
              <strong v-if="state.successMessage" class="mr-auto text-success">Success</strong>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"
                v-on:click="onCloseMessage">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body text-primary">
              {{ state.errorMessage || state.successMessage }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>`,
});
