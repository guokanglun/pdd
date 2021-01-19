<template>
    <div>
        <SearchHeader></SearchHeader>
        <SearchContent></SearchContent>
    </div>
</template>

<script>
    import SearchHeader from "./searchHeader/SearchHeader";
    import SearchContent from "./searchContent/SearchContent";
    export default {
        name: "Search",
        components:{
            SearchHeader, SearchContent
        }
    }
</script>

<style scoped>

</style>
