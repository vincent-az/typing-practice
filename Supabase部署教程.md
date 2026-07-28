# Supabase 云存储部署教程

项目已预配置，只需完成以下 **3 步**即可启用云端数据。

---

## 第一步：确认 anon public key

当前 `app.js` 中填的是 `sb_publishable_...` 格式的密钥，但 Supabase JS 客户端需要 **anon public** 密钥（`eyJ` 开头）。

请按以下步骤复制正确的密钥：

1. 打开 https://supabase.com/dashboard/project/ezbsuywvaimjgbuhrubj/settings/api-keys
2. 往下翻到 **Project API keys** 区域
3. 找到 **anon public** 这一行（不是 service_role，也不是 Publishable Key）
4. 点击右侧的复制按钮（📋 图标）
5. 将复制的值发给我，我填入 `app.js`

> anon public 密钥长这样：`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6YnN1eXd2YWltamdidWhydWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NjQ4MDAsImV4cCI6MjA3NTE0MDgwMH0.xxx`

## 第二步：创建数据库表

1. 打开 https://supabase.com/dashboard/project/ezbsuywvaimjgbuhrubj/sql/new
2. 将以下 SQL 全部复制粘贴到编辑器中
3. 点击 **Run** 执行

```sql
-- 学生表
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  class TEXT NOT NULL,
  name TEXT NOT NULL,
  password TEXT DEFAULT 'pzxx',
  is_default BOOLEAN DEFAULT true
);
-- 文章表
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  difficulty TEXT DEFAULT 'medium',
  content TEXT NOT NULL
);
-- 成绩表
CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  class TEXT NOT NULL,
  name TEXT NOT NULL,
  date TIMESTAMPTZ DEFAULT NOW(),
  type TEXT NOT NULL,
  wpm INTEGER,
  accuracy INTEGER,
  stars INTEGER,
  xp INTEGER
);
-- 设置表
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
-- 初始设置
INSERT INTO settings (key, value) VALUES ('teacherPassword', 'pzxxzzw'), ('defaultPassword', 'pzxx');
-- 行级安全
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON students FOR ALL USING (true) WITH CHECK (true);
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON articles FOR ALL USING (true) WITH CHECK (true);
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON grades FOR ALL USING (true) WITH CHECK (true);
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON settings FOR ALL USING (true) WITH CHECK (true);
```

4. 执行成功后，左侧菜单点 **Table Editor** 应能看到 4 张表

## 第三步：验证

1. 将正确的 anon key 填入 `app.js` 后，提交并推送 GitHub
2. 等待 GitHub Pages 部署（约 1-2 分钟）
3. 打开网站 https://vincent-az.github.io/typing-practice/
4. 按 F12 打开控制台，如果没有红色报错即连接成功
5. 在「系统设置」→「导入数据」导入之前备份的文件，数据自动写入云端

## 之后的操作

- **所有数据自动同步到云端**，任何设备访问都是同一份数据
- 如果 Supabase 连接失败，自动降级到 localStorage，数据不丢失
- 具体配置信息见 `Supabase配置信息.md`

## 排错

| 问题 | 解决 |
|------|------|
| 控制台报 `401` 或 `auth error` | anon key 格式不对，用 `eyJ` 开头的那个 |
| 控制台报 `relation "students" does not exist` | SQL 未执行成功，重新执行建表语句 |
| 可读数据但写不进去 | RLS 策略未创建，重新运行 4 条 `CREATE POLICY` |
