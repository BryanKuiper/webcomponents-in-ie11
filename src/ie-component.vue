<template>
    <div>
        <span>This is the main component</span>
        <sub-component />
    </div>
</template>

<script>
import SubComponent from "./components/sub-component.vue"

export default {

    name: "ie-component",
    data( ){
        return { }
    },
    components: { SubComponent },
    
}
</script>
