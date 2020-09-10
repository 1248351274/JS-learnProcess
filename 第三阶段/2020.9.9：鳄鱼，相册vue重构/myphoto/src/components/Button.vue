<template>
    <div>
        <button :disabled="disabled" @click="cliFn()">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        props:["disabled"],
        data() {
            return {
                // disabled: true
            }
        },
        methods: {
            cliFn() {
                console.log('dianji');
            }
        },
        
    }
</script>

<style scoped>

</style>