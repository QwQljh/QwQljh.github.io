# 我的个人博客

这是一个基于Jekyll和GitHub Pages搭建的个人博客网站。

## 特点

- 使用Jekyll静态网站生成器
- 采用Minima主题
- 支持Markdown写作
- 包含文章分类和标签功能
- 支持评论系统

## 目录结构

- `_posts/`: 博客文章目录
- `_layouts/`: 页面布局模板
- `assets/`: 静态资源文件
- `_config.yml`: 网站配置文件
- `index.md`: 网站首页
- `about.md`: 关于页面

## 写作指南

1. 在`_posts`目录下创建新的Markdown文件
2. 文件名格式：`YYYY-MM-DD-title.md`
3. 在文件开头添加YAML头信息
4. 使用Markdown语法编写文章内容

## 本地预览

1. 安装Ruby和Jekyll
2. 运行`bundle install`安装依赖
3. 运行`bundle exec jekyll serve`启动本地服务器
4. 访问`http://localhost:4000`预览网站