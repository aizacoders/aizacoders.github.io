<script setup lang="ts">
</script>

<template>
  <div>
    <AppShell>
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </AppShell>
  </div>
</template>
