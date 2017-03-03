<template>
    <div>
      <h3>Some User Details</h3>
      <p>User lodaded has ID: {{ $route.params.id }}</p>
      <router-link tag="button" :to="'/user/' + $route.params.id  + '/edit'"
      class="btn btn-primary">Edit</router-link>
    </div>
</template>
