# 词达人 (Vocab Master)

词达人是一个基于 AI 的英语词汇学习平台，旨在帮助用户高效地提升他们的语言技能。

## 功能特点

- AI 驱动的学习内容
- 个性化词汇课程
- 学习进度追踪
- 互动练习
- 智能学习路径
- 多样化的学习方法

## 技术栈

- React 18
- TypeScript
- Vite
- Chakra UI
- React Router
- Jest 用于测试
- React Icons

## 开始使用

### 前置要求

- Node.js (推荐版本 14 或更高)
- npm 或 yarn

### 安装

1. 克隆仓库：

   ```
   git clone https://github.com/your-username/vocab-master.git
   cd vocab-master
   ```

2. 安装依赖：
   ```
   npm install
   ```

### 运行应用

启动开发服务器：

```
npm run dev
```

应用将在 `http://localhost:5173` 运行（如果 5173 端口被占用，可能会使用其他端口）。

### 生产环境构建

创建生产环境构建：

```
npm run build
```

### 运行测试

运行测试套件：

```
npm test
```

## 可用脚本

- `npm run dev`: 启动开发服务器
- `npm run build`: 创建生产环境构建
- `npm run lint`: 运行 ESLint
- `npm run preview`: 预览生产环境构建
- `npm test`: 运行 Jest 测试

## 项目结构

```
vocab-master/
│
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SignInPage.tsx
│   │   ├── SignUpPage.tsx
│   │   ├── SignupConfirmPage.tsx
│   │   └── ...
│   │
│   ├── route.tsx
│   ├── main.tsx
│   └── ...
│
├── public/
│
├── tests/
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 贡献

我们欢迎贡献！如果您想为词达人做出贡献，请遵循以下步骤：

1. Fork 这个仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系我们

如果您有任何问题或建议，请通过以下方式联系我们：

- 邮箱：mfelixfeng@gmail.com
- 项目 Issues：[https://github.com/your-username/vocab-master/issues](https://github.com/your-username/vocab-master/issues)

## 致谢

- 感谢所有为这个项目做出贡献的开发者
- 特别感谢 [Chakra UI](https://chakra-ui.com/) 提供的出色 UI 组件库
- 感谢 [React](https://reactjs.org/) 和 [TypeScript](https://www.typescriptlang.org/) 社区的支持

---

祝您使用愉快，学习进步！
