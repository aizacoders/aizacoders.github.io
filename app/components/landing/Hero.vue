<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

const props = defineProps<{
  page: IndexCollectionItem
}>()

const mobileDescription = computed(() => {
  const raw = props.page?.description || ''
  // Strip basic markdown emphasis and keep it short for mobile.
  const plain = raw
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    // [text](url) -> text (simplified matcher for mobile)
    .replace(/[[]([^\]]+?)[)]\([^)]*\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

  if (!plain) return ''
  const max = 180
  return plain.length > max ? `${plain.slice(0, max).trim()}…` : plain
})
</script>

<template>
  <UPageHero
    :ui="{
      // Add extra top spacing so the fixed header doesn't overlap the hero avatar.
      container: 'px-0 pt-24 sm:pt-24 pb-6 sm:pb-8',
      // Center avatar on mobile, keep left-aligned on sm+
      headline: 'flex items-center justify-center sm:justify-start',
      title: '!mx-0 w-full max-w-none text-shadow-md text-left text-pretty',
      description: '!mx-0 w-full max-w-none text-left text-pretty leading-relaxed',
      links: 'mt-4 flex-col justify-start items-start'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0
        }"
        :animate="{
          scale: 1,
          opacity: 1
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <NuxtImg
          :src="global.picture?.light!"
          :alt="global.picture?.alt!"
          width="256"
          height="256"
          densities="x1 x2"
          format="png"
          class="size-18 rounded-full object-cover ring ring-default ring-offset-3 ring-offset-bg"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        <!-- Mobile: simpler/shorter plain text -->
        <p class="sm:hidden">
          {{ mobileDescription }}
        </p>

        <!-- Desktop/tablet: keep rich markdown -->
        <MDC
          class="hidden sm:block"
          :value="page.description"
          unwrap="p"
        />
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div
          v-if="page.hero.links"
          class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto"
        >
          <UButton
            v-bind="page.hero.links[0]"
            size="lg"
            color="success"
            variant="solid"
            class="w-full sm:w-auto rounded-full px-5 py-3 font-semibold shadow-sm text-white dark:text-black justify-center text-center"
          />
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2 w-full sm:w-auto rounded-full justify-center text-center"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="mt-4 flex flex-wrap gap-2 justify-start">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"

          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + index * 0.1
          }"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>
  </UPageHero>
</template>
