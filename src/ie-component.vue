<template>
    <div>
        <fixed-header>
            <div class="navbar">
                Menu
            </div>
        </fixed-header>
        <span>This is the main component</span>
        <sub-component />
    </div>
</template>

<script>
    import FixedHeader from "vue-fixed-header";
    import SubComponent from "./components/sub-component.vue"

    export default {

        name: "ie-component",
        data( ){
            return { }
        },
        components: { FixedHeader, SubComponent },
        
    }
</script>

<style>
    .navbar.vue-fixed-header--isFixed {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
    }
</style>
