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
      title: 'text-left text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight',
      // Tighten default spacing between title/description/content
      wrapper: 'gap-3'
    }"
  >
    <!-- tighter between cards -->
    <ul class="mt-3 space-y-2 sm:space-y-3">
      <Motion
        v-for="(experience, index) in page.experience.items"
        :key="index"
        :initial="{ opacity: 0, transform: 'translateY(12px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 + 0.06 * index }"
        :in-view-options="{ once: true }"
        as="li"
        class="rounded-lg border border-default p-4 sm:px-5 sm:py-5"
      >
        <!-- tighter inside card -->
        <div class="flex flex-col gap-1.5 sm:gap-2">
          <div class="flex flex-col gap-0.5">
            <p class="text-xs sm:text-sm lg:text-base text-muted">
              {{ experience.date }}<span v-if="experience.location"> · {{ experience.location }}</span>
            </p>

            <p class="text-base sm:text-lg lg:text-xl font-semibold text-default leading-snug">
              {{ experience.position }}
            </p>

            <ULink
              class="text-sm sm:text-base lg:text-lg text-muted hover:text-default underline-offset-4 hover:underline"
              :to="experience.company.url"
              target="_blank"
            >
              {{ experience.company.name }}
            </ULink>
          </div>

          <ul
            v-if="experience.highlights?.length"
            class="list-disc pl-5 text-sm sm:text-base lg:text-lg text-muted space-y-0 leading-tight"
          >
            <li
              v-for="(item, i) in experience.highlights"
              :key="i"
              class="[&::marker]:text-muted/70"
            >
              {{ item }}
            </li>
          </ul>

          <div
            v-if="experience.techStack?.length"
            class="flex flex-wrap gap-1.5 lg:gap-2 pt-0.5"
          >
            <UBadge
              v-for="(tech, i) in experience.techStack"
              :key="i"
              color="neutral"
              variant="soft"
              size="sm"
              class="rounded-full lg:text-base xl:text-lg"
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
