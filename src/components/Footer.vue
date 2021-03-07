<template>
<div class = "push"></div>
    <footer>
        <p>
            © 2021 bla blal bla Ent. All rights served tam lorem ipsum.
        </p>
    </footer>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
footer {
    position: -webkit-sticky;
    position: sticky;
    display: flex;
    background: rgba(56, 56, 56, 1);
    height: 2vw;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

footer p {
    font:1vw sans-serif;
    text-decoration: none;
    color: rgba(220, 170, 190, 1);
    line-height: 1vw;
}
</style>