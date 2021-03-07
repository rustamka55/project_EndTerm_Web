<template>
    <div class="new-releases">
        <h1>Latest releases</h1>
        <ul>
            <li :key="release.id" v-for="release in latest_releases">
                <dl>
                    <dt>
                        <span :key="artist.index" v-for="artist in release.artists">
                            <span  v-if="artist.index!=0">, 
                            </span>{{artist.name}} 
                        </span>
                    </dt>
                    <dd>{{release.song_name}}</dd>
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