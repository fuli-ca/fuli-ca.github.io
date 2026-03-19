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

function slugify(str) {
  if (!str) return ''
  return encodeURIComponent(
    str.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '')
  )
}
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="article-meta">
        <!-- H1 标题 -->
        <h1 class="article-title" :id="slugify(frontmatter.title)">
          <span class="header-anchor-left">
            <a :href="'#' + slugify(frontmatter.title)">#</a>
          </span>
          {{ frontmatter.title }}
        </h1>

        <!-- 作者和日期 -->
        <div class="meta" v-if="frontmatter.author || frontmatter.date">
          <span v-if="frontmatter.author">👤 {{ frontmatter.author }}</span>
          <span v-if="frontmatter.author && frontmatter.date">·</span>
          <span v-if="frontmatter.date">📅 {{ formatDate(frontmatter.date) }}</span>
        </div>

        <!-- 封面 -->
        <img v-if="frontmatter.cover" :src="frontmatter.cover" class="cover" />

        <!-- 标签 -->
        <div class="tags" v-if="frontmatter.tags?.length">
          <span v-for="tag in frontmatter.tags" :key="tag">#{{ tag }}</span>
        </div>
      </div>
    </template>
  </Layout>
</template>