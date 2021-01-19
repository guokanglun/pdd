<template>
    <div>
        <SelectLoginWay v-if="!userInfo._id"></SelectLoginWay>
        <Main v-else></Main>
    </div>
</template>

<script>
    import SelectLoginWay from "../login/selectLoginWay/SelectLoginWay";
    import {mapState} from 'vuex';
    import Main from "./Main";
    export default {
        name: "Me",
        components:{
            SelectLoginWay, Main
        },
        computed:{
            ...mapState(['userInfo'])
        }
    }
</script>

<style scoped>

</style>
