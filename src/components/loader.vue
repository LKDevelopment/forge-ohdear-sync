<template>
    <div v-if="isLoading" class="text-center text-grey">
        <i class="fas fa-spin fa-spinner fa-3x"></i>
    </div>
</template>

<script>
    export default {
        name: "loader",
        computed: {
            isLoading() {
                return this.$store.getters.isLoading
            }
        }
    }
</script>

<style scoped>

</style>
