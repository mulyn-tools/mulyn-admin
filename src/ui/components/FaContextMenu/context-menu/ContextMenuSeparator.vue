<script setup lang="ts">
import type { ContextMenuSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import {
  ContextMenuSeparator,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '@/utils'

const props = defineProps<ContextMenuSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuSeparator v-bind="delegatedProps" :class="cn('-mx-1 my-1 h-px bg-border', props.class)" />
</template>
