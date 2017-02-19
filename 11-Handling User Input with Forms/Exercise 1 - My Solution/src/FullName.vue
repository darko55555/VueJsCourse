<template>
  <div class="form-group">
      <label for="firstName">First Name</label>
      <input
              type="text"
              id="firstName"
              class="form-control"
              v-model="firstName"
              @keyup="fullNameSend"
              >
      <label for="lastName">Last Name</label>
      <input
              type="text"
              id="lastName"
              class="form-control"
              v-model="lastName"
              @keyup="fullNameSend"
              >
  </div>
</template>

<script>
export default {
  props: ['fullName'],
  data () {
    return {
      firstName : '',
      lastName : ''
    };
  },
  methods : {
    fullNameSend : function() {
      this.$emit('input', this.firstName + ' ' + this.lastName);
    }
  }
}
</script>

<style lang="css" scoped>

</style>
