<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs").then((res) => {
            return res.json()
        }).then((data) => {
            this.jobs = data
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>

<template>
    <h1>Jobs</h1>
    <div v-for="data in jobs" key="data.id">
        <h1>{{ data.title }}</h1>
        <span>Company: {{ data.company }}</span>
        <span> Job Type: {{ data.type }}</span>
        <p>{{ data.description }}</p>
        <RouterLink :to="{ name: 'JobDetails', params: { id: data.id } }">View Job</RouterLink>
    </div>
</template>
