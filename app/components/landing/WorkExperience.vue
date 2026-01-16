<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: 'px-0 !pt-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      // Tighten default spacing between title/description/content
      wrapper: 'gap-2'
    }"
  >
    <ul class="mt-2 space-y-4">
      <Motion
        v-for="(experience, index) in page.experience.items"
        :key="index"
        :initial="{ opacity: 0, transform: 'translateY(12px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 + 0.06 * index }"
        :in-view-options="{ once: true }"
        as="li"
        class="rounded-lg border border-default px-4 py-4"
      >
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <p class="text-xs text-muted">
              {{ experience.date }}<span v-if="experience.location"> · {{ experience.location }}</span>
            </p>

            <p class="text-sm font-medium text-default">
              {{ experience.position }}
            </p>

            <ULink
              class="text-sm text-muted hover:text-default"
              :to="experience.company.url"
              target="_blank"
            >
              {{ experience.company.name }}
            </ULink>
          </div>

          <ul
            v-if="experience.highlights?.length"
            class="list-disc pl-5 text-sm text-muted space-y-1"
          >
            <li
              v-for="(item, i) in experience.highlights"
              :key="i"
            >
              {{ item }}
            </li>
          </ul>

          <div
            v-if="experience.techStack?.length"
            class="flex flex-wrap gap-2"
          >
            <UBadge
              v-for="(tech, i) in experience.techStack"
              :key="i"
              color="neutral"
              variant="soft"
              size="md"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
      </Motion>
    </ul>
  </UPageSection>
</template>

<style scoped>

</style>
