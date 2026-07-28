# Supabase 配置信息

> 项目：typing-practice
> 创建日期：2026-07-27

---

## 项目基本信息

| 项目 | 值 |
|------|-----|
| 项目名称 | typing-practice |
| 项目引用ID | `ezbsuywvaimjgbuhrubj` |
| 数据库密码 | `pzxx@zzw2026` |
| 地区 | Singapore |
| 套餐 | Free |

## API 地址

| 名称 | 值 |
|------|-----|
| Project URL | `https://ezbsuywvaimjgbuhrubj.supabase.co` |
| 控制台地址 | `https://supabase.com/dashboard/project/ezbsuywvaimjgbuhrubj` |

## 密钥（需手动填写）

⚠️ 以下密钥需要您从控制台复制填写：

1. 打开 https://supabase.com/dashboard/project/ezbsuywvaimjgbuhrubj/settings/api-keys
2. 在 **Project API keys** 区域，复制 **anon public** 那一行的值（以 `eyJ` 开头的长字符串）
3. 填入 `app.js` 中的 `SUPABASE_ANON_KEY`

当前状态：
```
SUPABASE_URL = 'https://ezbsuywvaimjgbuhrubj.supabase.co'
SUPABASE_ANON_KEY = 'sb_publishable_...'  ← 需要替换为 anon public 密钥
```

## 数据库表结构

### students（学生表）
| 列名 | 类型 | 说明 |
|------|------|------|
| id | SERIAL PRIMARY KEY | 自动编号 |
| class | TEXT NOT NULL | 班级 |
| name | TEXT NOT NULL | 姓名 |
| password | TEXT DEFAULT 'pzxx' | 密码 |
| is_default | BOOLEAN DEFAULT true | 是否默认密码 |

### articles（文章表）
| 列名 | 类型 | 说明 |
|------|------|------|
| id | SERIAL PRIMARY KEY | 自动编号 |
| title | TEXT NOT NULL | 标题 |
| difficulty | TEXT DEFAULT 'medium' | 难度 |
| content | TEXT NOT NULL | 内容 |

### grades（成绩表）
| 列名 | 类型 | 说明 |
|------|------|------|
| id | SERIAL PRIMARY KEY | 自动编号 |
| class | TEXT NOT NULL | 班级 |
| name | TEXT NOT NULL | 姓名 |
| date | TIMESTAMPTZ DEFAULT NOW() | 练习时间 |
| type | TEXT NOT NULL | 练习类型 |
| wpm | INTEGER | 速度 |
| accuracy | INTEGER | 正确率 |
| stars | INTEGER | 星级 |
| xp | INTEGER | 经验值 |

### settings（设置表）
| 列名 | 类型 | 说明 |
|------|------|------|
| key | TEXT PRIMARY KEY | 设置键名 |
| value | TEXT NOT NULL | 设置值 |

## 初始设置数据

| key | value |
|-----|-------|
| teacherPassword | pzxxzzw |
| defaultPassword | pzxx |

## RLS 策略

每张表都已开启 Row Level Security，允许匿名用户读写：

```sql
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON students FOR ALL USING (true) WITH CHECK (true);
```

其余表同理。

## 重要提醒

- 首次使用需先执行 SQL 创建表（见下方步骤三）
- 暗码不要泄露给他人
- 如果网站连接 Supabase 失败，会自动降级到 localStorage 模式
