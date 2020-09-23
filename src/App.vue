<template>
<div id="app">
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <router-link class="navbar-brand" to="/">Home page</router-link>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list">My tips</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <router-view />
    </main>

    <footer></footer>
</div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-image: url(./assets/card2.png);
    color: #ffffff
}

.header div {
    padding: 4%;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
