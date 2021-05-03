<template>
    <div class="ranking">
        <h1>4th Week of January 2021</h1>
            <ol>
                <li :key="ranking.id" v-for="ranking in rankings">
                    <dl>
                        <dt>
                            {{ranking.artists}}
                        </dt>
                        <dd>{{ranking.songname}}</dd>
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