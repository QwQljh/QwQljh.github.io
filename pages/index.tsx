import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>我的学习博客</title>
        <meta name="description" content="个人学习记录和心得分享" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 导航栏 */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              我的博客
            </Link>
            <div className="space-x-4">
              <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                博客文章
              </Link>
              <Link href="/projects" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                项目展示
              </Link>
              <Link href="/about" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                关于我
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">欢迎来到我的博客</h1>
          <p className="text-xl text-gray-600">分享学习经验，记录成长历程</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 最新文章卡片示例 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">开始我的博客之旅</h2>
            <p className="text-gray-600 mb-4">这是我的第一篇博客文章，记录了建站的过程和心得...</p>
            <Link href="/posts/first-post" className="text-blue-600 hover:text-blue-800">
              阅读更多 →
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 我的个人博客. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 