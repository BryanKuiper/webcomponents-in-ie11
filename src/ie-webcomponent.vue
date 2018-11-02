<template>
    <div>
        <span>This is the webcomponent</span>
        <sub-component />
    </div>
</template>

<script>
import SubComponent from "./components/sub-component.vue"

export default {

    name: "ie-webcomponent",
    data( ){
        return { }
    },
    components: { SubComponent },
    
}
</script>
