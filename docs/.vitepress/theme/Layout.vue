<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

import RetireNotice from './RetireNotice.vue'

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
      <!--
        停站提示条：固定在窗口底部，30 秒后自动消失。
        注意是「每次访问只显示一次」—— 不是每篇文章都显示。
        第一次进入文章页时弹出并开始计时，之后翻到任何文章页都不再出现；
        关掉浏览器标签页后重新访问，会再提示一次。
      -->
      <RetireNotice />

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