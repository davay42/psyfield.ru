

<script setup lang="ts">
import { useSiblings } from '../../composables/pages'
import { useRoute } from 'vitepress'
const route = useRoute()

const siblings = computed(() => useSiblings(route.path))
</script>

<template lang="pug">
.next-and-prev-link(v-if="siblings.prev || siblings.next")
  .container
    .prev
      a.link(v-if="siblings.prev" :href="siblings.prev.path")
        carbon-arrow-left.icon.icon-prev
        span.text {{ siblings.prev.title }}
    .next
      a.link(v-if="siblings.next" :href="siblings.next.path")
        span.text {{ siblings.next.title }}
        carbon-arrow-right.icon.icon-next
</template>

<style lang="postcss" scoped>
.next-and-prev-link {
  @apply flex justify-center;
  padding-top: 1rem;
}

.container {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--c-divider);
  padding-top: 1rem;
}

.prev,
.next {
  display: flex;
  flex-shrink: 0;
  width: 50%;
}

.prev {
  justify-content: flex-start;
  padding-right: 12px;
}

.next {
  justify-content: flex-end;
  padding-left: 12px;
}

.link {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 500;
}

.text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--c-text);
  transform: translateY(1px);
}

.icon-prev {
  margin-right: 8px;
}
.icon-next {
  margin-left: 8px;
}
</style>
