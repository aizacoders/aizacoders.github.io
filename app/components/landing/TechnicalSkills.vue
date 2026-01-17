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
      container: 'px-0 !pt-0 w-full gap-3',
      title: 'text-left text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight',
      description: 'text-left mt-2 text-sm sm:text-lg lg:text-xl text-muted leading-relaxed',
      wrapper: 'gap-2'
    }"
  >
    <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <div
        v-for="(group, idx) in page.skills.groups"
        :key="idx"
        class="rounded-lg border border-default p-3 sm:p-5"
      >
        <p class="text-sm sm:text-lg lg:text-xl font-semibold text-default tracking-tight">
          {{ group.title }}
        </p>

        <div class="mt-2 flex flex-wrap gap-2 lg:gap-3">
          <UBadge
            v-for="(item, i) in group.items"
            :key="i"
            color="neutral"
            variant="soft"
            size="sm"
            class="lg:text-base xl:text-lg"
          >
            {{ item }}
          </UBadge>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
