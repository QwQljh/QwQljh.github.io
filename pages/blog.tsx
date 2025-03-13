import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>博客文章 - 我的学习博客</title>
        <meta name="description" content="我的博客文章列表" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">博客文章</h1>
        
        <div className="grid gap-6">
          {/* 文章卡片示例 */}
          <article className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link href="/blog/first-post" className="hover:text-blue-600">
                我的第一篇博客文章
              </Link>
            </h2>
            <div className="text-gray-500 text-sm mb-4">发布于 2024-02-20</div>
            <p className="text-gray-600">这是我的第一篇博客文章的简介...</p>
          </article>
        </div>
      </main>
    </div>
  )
} 