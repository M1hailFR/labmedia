<template>
  <div class="py-10 mb-10">
    <BlockBannerDefault :fields="MAIN_CONFIG.block_fields" />
  </div>
</template>

<script setup lang="ts">
import { MAIN_CONFIG } from '@/configs/pages/main';
import { BlockBannerDefault } from '@/components/blocks';
</script>
