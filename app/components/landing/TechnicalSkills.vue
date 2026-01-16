<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.skills.title"
    :description="page.skills.description"
    :ui="{
      container: 'px-0 !pt-0 w-full gap-4',
      title: 'text-left text-2xl sm:text-3xl lg:text-4xl font-semibold',
      description: 'text-left mt-3 text-base sm:text-lg text-muted',
      wrapper: 'gap-3'
    }"
  >
    <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="(group, idx) in page.skills.groups"
        :key="idx"
        class="rounded-lg border border-default p-5"
      >
        <p class="text-base sm:text-lg font-semibold text-default">
          {{ group.title }}
        </p>

        <div class="mt-3 flex flex-wrap gap-2">
          <UBadge
            v-for="(item, i) in group.items"
            :key="i"
            color="neutral"
            variant="soft"
            size="sm"
          >
            {{ item }}
          </UBadge>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
