<template>
  <!--
    Consistent horizontal padding across the whole site.
    We keep the site full width but use the same left/right inset everywhere.
  -->
  <div class="w-full px-5 sm:px-8 lg:px-12">
    <div class="mx-auto w-full max-w-5xl">
      <slot />
    </div>
  </div>
</template>
