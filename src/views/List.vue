<template>
<div class="wrapper">
    <div class="btn-space">
        <select v-model="noteType" v-show="!create" style="float: right">
            <option value>Chuse priority</option>
            <option>Important</option>
            <option>Average</option>
            <option>No matter</option>
        </select>
        <label style="float: right" v-show="!create">Filters:</label>
        <button v-if="!create" class="btn btn-primary" v-on:click="create = !create">{{btnCreatText}}</button>
        <button v-if="create" class="btn btn-primary" v-on:click="create = !create">{{btnCheckText}}</button>
    </div>
    <ItemList v-if="tipsList != null && !create" v-bind:tipsList="tipsList"></ItemList>
    <CreateTips v-else-if="create" v-bind:tipsList="tipsList"></CreateTips>
    <NoTips v-else></NoTips>
</div>
</template>

<script>
import NoTips from "../components/NoTips.vue";
import CreateTips from "../components/CreateTips.vue";
import ItemList from "../components/ItemList.vue";

export default {
    components: {
        NoTips,
        CreateTips,
        ItemList,
    },
    data() {
        return {
            noteType: "",
            tipsList: [{
                    title: "Title 1",
                    description: "Desc test Desc test Desc test Desc test Desc test Desc test Desc test",
                    noteType: "Important",
                    styleObj: {
                        background: "#ea97eb",
                        color: "#ffffff",
                    },
                },
                {
                    title: "Title 2",
                    description: "Desc test Desc test Desc test Desc test Desc test Desc test Desc test",
                    noteType: "Important",
                    styleObj: {
                        background: "#000000",
                        color: "#f2f",
                    },
                },
                {
                    title: "Title 3",
                    description: "Desc test Desc test Desc test Desc test Desc test Desc test Desc test",
                    noteType: "Important",
                    styleObj: {
                        background: "#000000",
                        color: "#ffffff",
                    },
                },
                {
                    title: "Title 4",
                    description: "Desc test Desc test Desc test Desc test Desc test Desc test Desc test",
                    noteType: "Important",
                    styleObj: {
                        background: "#8c4993",
                        color: "#ffffff",
                    },
                },
            ],
            create: false,
            btnCreatText: "Add new Tips",
            btnCheckText: "Check my Tips",
        };
    },
};
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-rows: auto;
}

.btn-space {
    padding: 2%;
}
</style>
