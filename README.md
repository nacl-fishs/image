# 项目说明

项目用于 NovelAI 与 Midjourney 读图床图片，一个为了存图床而折腾的前后端分离的 Vue + Node 项目。
![项目截图](https://p.sda1.dev/19/df6a888025e70e81952dec4ae8b46f76/Snipaste_2024-09-21_18-36-54.png)

## 安装依赖

前端后端都需要使用 npm 安装依赖：

```bash
npm install
启动项目
前端启动：

npm run dev
后端启动：

node server.js
环境变量
需要新建一个 .env 文件并输入以下内容：

MONGO_URI=mongodb://root:redhat@localhost:27017/myimagehosting
JWT_SECRET=naclfish
（你的 MongoDB 数据库连接字符串和 JWT 密钥）
