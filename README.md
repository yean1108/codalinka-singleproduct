# 高端单产品展示页面

一个视觉效果出色的单产品展示页面，采用 Next.js 14、TypeScript、Tailwind CSS 和 Framer Motion 构建。

## 特性

- 🎨 现代化的 UI 设计
- 📱 完全响应式布局
- ✨ 流畅的动画效果
- 🖼️ 图片画廊和放大功能
- 🎯 产品信息展示
- 📋 技术规格展示
- 🚀 优化的性能

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看页面。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
single-product/
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 主页面
├── components/
│   ├── ImageGallery.tsx    # 图片画廊组件
│   ├── ProductInfo.tsx     # 产品信息组件
│   ├── ProductFeatures.tsx # 产品特性组件
│   ├── ProductSpecs.tsx    # 产品规格组件
│   └── CTA.tsx             # 行动号召组件
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 自定义

您可以轻松自定义：

- 产品图片：修改 `components/ImageGallery.tsx` 中的 `images` 数组
- 产品信息：修改 `components/ProductInfo.tsx` 中的内容
- 产品特性：修改 `components/ProductFeatures.tsx` 中的 `features` 数组
- 技术规格：修改 `components/ProductSpecs.tsx` 中的 `specs` 数组
- 颜色主题：修改 `tailwind.config.js` 中的颜色配置

## 许可证

MIT
