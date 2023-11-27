# Nest 入门

## 安装运行与格式化

### 安装

```bash
pnpm i -g @nestjs/cli
nest new project-name 

# 要使用 TypeScript 更严格的功能集创建新项目
# nest new --strict project-name 
```

### 运行

```bash
pnpm run start

# --watch 模式
pnpm run start:dev

# 加快构建速度, 使用swc
## 先下载 @swc/cli @swc/core
pnpm i -D @swc/cli @swc/core
## 运行
pnpm run start:dev -- -b swc
```

### 格式化

```bash
# 使用eslint检测与自动格式化代码
pnpm run lint 

# 使用prettier格式化代码
pnpm run format
```

## Controller

### Controller简介

控制器负责处理传入请求并向客户端返回响应

### 模板快速生成

```bash
# 命令格式
nest g contoller [name]

# 如生成一个用户相关的接口
nest g contoller user
```

## Service

### Service简介

### Service模板快速生成

```bash
nest g service user
```

## Module

### Module简介

### Module模板快速生成

```bash
nest g module user
```

## 生成完整的模板

```bash
nest g resource user
```
