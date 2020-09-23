<template>
<div name="list">
    <section class="card-space">
        <Item v-bind:key="index" v-for="(tip, index) in tipsList" v-bind:tip="tip" v-on:del="dlt"></Item>
    </section>
</div>
</template>

<script>
import Item from "./Item.vue";

export default {
    name: "list",
    components: {
        Item,
    },
    props: ["tipsList"],
    methods: {
        dlt: function (item) {
            this.tipsList.splice(this.tipsList.indexOf(item), 1);
        },
    },
};
</script>

<style scoped>
.card-space {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
}
</style>
