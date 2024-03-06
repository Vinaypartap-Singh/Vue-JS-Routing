<template>
    <h1>Jobs</h1>
    <div v-for="data in jobs" key="data.id">
        <h1>{{ data.title }}</h1>
        <span>Company: {{ data.company }}</span>
        <span> Job Type: {{ data.type }}</span>
        <p>{{ data.description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    id: 1,
                    title: 'Frontend Developer',
                    company: 'Google',
                    location: 'Mountain View, CA',
                    type: 'Full-time',
                    description: 'We are looking for a frontend developer to join our team.',
                    created_at: '2020-01-01'
                },
                {
                    id: 2,
                    title: 'Backend Developer',
                    company: 'Facebook',
                    location: 'Menlo Park, CA',
                    type: 'Full-time',
                    description: 'We are looking for a backend developer to join our team.',
                    created_at: '2020-01-02'
                },
                {
                    id: 3,
                    title: 'Full-stack Developer',
                    company: 'Amazon',
                    location: 'Seattle, WA',
                    type: 'Full-time',
                    description: 'We are looking for a full-stack developer to join our team.',
                    created_at: '2020-01-03'
                }
            ]
        }
    }
}
</script>