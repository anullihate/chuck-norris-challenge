<template>
  <div>
    <Suspense>
      <template #default>
        <JokesList />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import JokesList from 'src/components/JokesList.vue'

export default defineComponent({
  components: {
    JokesList,
  },
})
</script>
