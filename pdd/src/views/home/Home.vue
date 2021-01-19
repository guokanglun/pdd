<template>
    <div>
        <ly-tab
                v-model="selectedId"
                :items="items"
                :options="options"
                @change="handleItem"
        >
        </ly-tab>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                selectedId: 0,
                items: [
                    {label: '热门'},
                    {label: '服饰'},
                    {label: '鞋包'},
                    {label: '母婴'},
                    {label: '百货'},
                    {label: '食品'},
                    {label: '内衣'},
                    {label: '男装'},
                    {label: '电器'}
                ],
                options: {
                    activeColor: '#e9232c'
                    // 可在这里指定labelKey为你数据里文字对应的字段
                },
                routerTo:['hot', 'dress', 'box', 'mbaby', 'general', 'food', 'shirt', 'man', 'ele']
            }
        },
        methods:{
            handleItem(item, index){
                this.$router.replace(`/home/${this.routerTo[index]}`)
            }
        }
    }
</script>

<style lang="stylus">
    ly-tab
        height: 55px
    .ly-tab-list
        padding 10px 0
    .ly-tab-active-bar
        bottom 0 !important
</style>
