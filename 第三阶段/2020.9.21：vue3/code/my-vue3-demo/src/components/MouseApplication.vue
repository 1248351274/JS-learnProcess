<template>
    <div>
        {{ Mouseposition }}
    </div>
</template>

<script>
// import { toRefs } from 'vue'
    import { useMousePosition} from "../use/useKeyboardMove";
    export default {
        setup(props, context) {
            // const { x, y } = toRefs(Mouseposition);
            const Mouseposition = useMousePosition();
            console.log(props);
            console.log(context);
            
            console.log(111,Mouseposition);

            return {
                Mouseposition,
            }
        }
    }
</script>

<style scoped>

</style>