<template>
<section>
    <div v-if="!changeMode" class="card mb-3" v-bind:style="tip.styleObj">
        <div class="card-header">{{tip.noteType || 'Note type'}}</div>
        <div class="card-body">
            <h5 class="card-title">{{tip.title || 'Card title'}}</h5>
            <p class="card-text">{{tip.description || 'Card description'}}</p>
        </div>
        <div class="card-btn card-footer">
            <button type="button" class="btn btn-outline-danger" v-on:click="$emit('del', tip)">Dell Tips</button>
            <button type="button" class="btn btn-success" v-on:click="chenges">Edit Tips</button>
        </div>
    </div>
    <div v-else-if="changeMode" class="card mb-3" v-bind:style="tip.styleObj">
        <select class="card-header" v-model="tip.noteType">
            <option value disabled>Select value</option>
            <option>Important</option>
            <option>Average</option>
            <option>No matter</option>
        </select>
        <div class="card-body">
            <input class="card-title" aria-describedby="basic-addon1" v-model="tip.title" />
            <textarea class="card-text" v-model="tip.description" />
            <input class="card-title" v-model="tip.styleObj['background']" />
            <input class="card-title" v-model="tip.styleObj['color']" />

        </div>
        <div class="card-btn card-footer">
            <button type="button" class="btn btn-success" v-on:click="chenges">Edit Tips</button>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ["tip"],
    data() {
        return {
            changeMode: false,
        }
    },
    methods: {
        chenges: function () {
            this.changeMode = !this.changeMode;
        }
    }
};
</script>

<style scoped>
.card {
    min-width: 18rem;
    max-width: 18rem;
    min-height: 380px;
    max-height: 380px;
}

.card-body {
    overflow-y: scroll;
}

.card-btn {
    display: flex;
    justify-content: space-evenly;
}

.type-note {
    justify-self: end;
}

::-webkit-scrollbar {
    display: none;
}
</style>
