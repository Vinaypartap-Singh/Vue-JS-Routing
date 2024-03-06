<template>
    <div>
        <h2>Job Details</h2>
        <p>Job ID {{ id }}</p>
        <h1>{{ job.title }}</h1>
        <span>{{ job.type }}</span> <span>{{ job.company }}</span>
        <p>{{ job.description }}</p>
    </div>

</template>

<script>

export default {
    props: ['id'],

    data() {
        return {
            job: {}
        }
    },
    mounted() {
        fetch(`http://localhost:3000/jobs/${this.id}`).then((res) => {
            return res.json()
        }).then((data) => {
            this.job = data
        }).catch((err) => {
            console.log(err)
        })

    }

    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}

</script>