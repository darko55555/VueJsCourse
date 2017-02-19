<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <h1 v-myon:click>Directives Exercise</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives : {
                myon : {
                      bind(el, binding, vnode) {
                        if(binding.arg == 'click'){
                            el.addEventListener("click", function(){
                                el.innerHTML = "Clicked!";
                            });
                        }
                    }
            }
        }
    }
</script>

<style>
</style>
