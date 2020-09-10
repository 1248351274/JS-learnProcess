<template>
    <div>
        <button :disabled="disabled" @click="cliFn">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            disabled:{
                type:Boolean
            }
        },

        data() {
            return {
            }
        },
        methods: {
            cliFn() {
                this.$emit("clickFn")
            }
        },
        
    }
</script>

<style scoped>

</style>