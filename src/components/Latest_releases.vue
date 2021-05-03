<template>
    <div class="new-releases">
        <h1>Latest releases</h1>
        <ul>
            <li :key="release.id" v-for="release in latest_releases">
                <dl>
                    <dt>{{release.artists}}</dt>
                    <dd>{{release.songname}}</dd>
                </dl>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    name:"Latest_releases",
    props:{
        latest_releases: Array,
    }
}
</script>

<style>
</style>