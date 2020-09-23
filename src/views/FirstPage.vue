<template>
<section v-if="name !== null">
    <div id="App">
        <section class="container-fluid header">
            <div>
                <h1>Hello {{name}}</h1>
                <h3>{{hello}}</h3>
                <p>{{about}}</p>
            </div>
        </section>
        <h1></h1>
    </div>
</section>
<section v-else>
    <div class="card mb-3">
        <img class="card-img-top" src="../assets/image.jpg" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Hello my friend please, write your name</h5>
            <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" placeholder="Your name" v-on:change="setName($event.target.value)" class="form-control" v-bind:class="{'is-invalid': isError}" />
                <div class="invalid-feedback">{{rules}}</div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            name: localStorage.getItem("userName"),
            hello: `Welcome to the Tips manager`,
            about: "We are grateful for using our service. We hope you like it",
            lable: "Write your name: ",
            rules: "The name should not contain numbers. The name must be longer than 2 character",
            isError: false,
        };
    },
    methods: {
        setName: function (event) {
            if (!event.match(/\d+/) && event.split("").length > 2) {
                this.name = event;
                localStorage.setItem("userName", this.name);
            } else this.isError = true;
        },
    },
};
</script>

<style scoped>
.error {
    color: red;
}

.card {
    justify-content: center;
}
</style>
