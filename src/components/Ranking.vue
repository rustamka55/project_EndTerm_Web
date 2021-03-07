<template>
    <div class="ranking">
        <h1>4th Week of January 2021</h1>
            <ol>
                <li :key="ranking.place" v-for="ranking in rankings">
                    <dl>
                        <dt>
                            <span :key="artist.index" v-for="artist in ranking.artists"><span  v-if="artist.index!=0">, </span>{{artist.name}} </span>
                            </dt>
                        <dd>{{ranking.song_name}}</dd>
                    </dl>
                </li>
            </ol>
    </div>
</template>

<script>
export default {
    name:'Ranking',
    props: {
        rankings: Array,
    }

}
</script>

<style>

</style>