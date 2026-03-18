<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="article-meta">
        <h1 class="article-title">{{ frontmatter.title }}</h1>
        <div
          class="meta"
          v-if="frontmatter.author || frontmatter.date"
        >
          <span v-if="frontmatter.author">
            👤 {{ frontmatter.author }}
          </span>

          <span v-if="frontmatter.author && frontmatter.date">
            ·
          </span>

          <span v-if="frontmatter.date">
            📅 {{ formatDate(frontmatter.date) }}
          </span>
        </div>

        <img v-if="frontmatter.cover" :src="frontmatter.cover" class="cover" />

        <div class="tags">
          <span v-for="tag in frontmatter.tags" :key="tag">#{{ tag }}</span>
        </div>
      </div>
    </template>
  </Layout>
</template>