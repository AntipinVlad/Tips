<template>
<section>
    <div class="card border-success mb-3" style="max-width: 23rem;">
        <div class="card-header bg-transparent border-success">Header</div>
        <div class="card-body text-success card-create">
            <label>Title:</label>
            <input type="text" v-model="title" placeholder="Title tips" />
            <label>Note type:</label>
            <select v-model="noteType">
                <option value disabled>Select value</option>
                <option>Important</option>
                <option>Average</option>
                <option>No matter</option>
            </select>
            <label>Description:</label>
            <textarea type="text" v-model="description" placeholder="Description tips" />
            <label>Bacground Color :</label>
            <input type="text" v-model="styleObj['background']" placeholder="#000000" />
            <label>Text Color :</label>
            <input type="text" v-model="styleObj['color']" placeholder="#000000" />
        </div>
        <div class="card-footer bg-transparent border-success">
            <input type="button" value="Create" class="btn btn-success" v-on:click="create" />
        </div>
    </div>
    <Item v-bind:tip="{title, description, noteType, styleObj}"></Item>
</section>
</template>

<script>
import Item from "./Item.vue";
export default {
    components: {
        Item,
    },
    props: ["tipsList"],
    data() {
        return {
            title: "",
            description: "",
            noteType: "",
            styleObj: {
                background: "",
                color: "",
            },
        };
    },
    methods: {
        create: function () {
            this.tipsList.push({
                title: this.title,
                description: this.description,
                noteType: this.noteType,
                styleObj: {
                    background: this.styleObj["background"],
                    color: this.styleObj["color"],
                },
            });
            this.title = "";
            this.description = "";
            this.noteType = "";
            this.styleObj["color"] = "";
            this.styleObj["background"] = "";
        },
        changes: function (item) {
            this.title = item.title;
            this.description = item.description;
            this.noteType = item.noteType;
            this.styleObj["color"] = item.styleObj["background"];
            this.styleObj["background"] = item.styleObj["color"];
        },
    },
};
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
}

.card-create {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
}

textarea {
    height: 100px;
    resize: none;
}
</style>
