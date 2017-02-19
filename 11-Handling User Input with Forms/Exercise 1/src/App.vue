<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                     <!--<div class="form-group">
                        <label for="firstName">First Name</label>
                        <input
                                type="text"
                                id="firstName"
                                class="form-control"
                                v-model="userData.firstName"
                                >
                        <label for="lastName">Last Name</label>
                        <input
                                type="text"
                                id="lastName"
                                class="form-control"
                                v-model="userData.lastName"
                                >

                    </div>-->
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    <!-- Mail -->
                     <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email"
                                >
                    </div>
                    <!-- Password -->
                     <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password"
                                >
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="password">Store Data?</label>
                    <label for="yes">
                        <input
                                type="radio"
                                id="yes"
                                value="Yes"
                                v-model="storeData"> Yes
                    </label>
                    <label for="no">
                        <input
                                type="radio"
                                id="no"
                                value="No"
                                v-model="storeData"> No
                    </label>
                </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button
                                class="btn btn-primary"
                                @click.prevent="submitForm">Submit
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password:  {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data () {
            return {
                userData : {
                    firstName : '',
                    lastName : '',
                    fullName : '',
                    password : '',
                    fullName :  '',
                    email : ''
                },
                storeData: 'Yes',
                isSubmitted : false
            }
        },
        components : {
            appFullName : FullName
        },
        methods: {
            submitForm() {
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
</style>
