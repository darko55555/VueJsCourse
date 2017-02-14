<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name :  {{ switchName() }} </p>
    </div>
</template>

<script>
  export default {
    props: {
        myName : {
            type : String
            //
            //Multiple types [String, Array]
            //
            //Validate if it is required
            //required : true,
            //Default value
            //default : 'Pau'
            //
            //If it is an Object you can validate struct.
            //Example:
            //type: Object
            //default : function {
            //    return {
            //      name : 'Max'
            //    }
            //}
        }
    },
    methods: {
        switchName() {
            return this.myName.split("").reverse().join("");
        }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
