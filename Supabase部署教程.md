# Supabase 云存储部署教程

本教程指导如何将打字练习网站的数据从本地存储（localStorage）迁移到 Supabase 云数据库，实现多设备数据共享。

---

## 一、注册 Supabase

1. 打开 https://supabase.com
2. 点击右上角 `Sign in` → `Continue with GitHub`（用 GitHub 账号登录）
3. 授权后进入控制台，点击 `New project`
4. 填写项目信息：
   - **Name**: 随意，如 `typing-practice`
   - **Database Password**: 设置一个强密码（记下来）
   - **Region**: 选择 `Singapore`（东南亚，国内访问相对较快）
   - **Pricing Plan**: 选择 `Free`
5. 点击 `Create new project`，等待 1-2 分钟完成创建

## 二、获取 API 密钥

1. 项目创建完成后，进入项目
2. 左侧菜单点击 `Project Settings`（齿轮图标）→ `API`
3. 找到以下两个值并复制：
   - **Project URL**: 类似 `https://xxxxxx.supabase.co`
   - **anon public key**: 类似 `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 三、创建数据库表

1. 左侧菜单点击 **SQL Editor**
2. 点击 `New Query`
3. 复制以下 SQL 并粘贴到编辑器中：

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

-- 初始设置数据
INSERT INTO settings (key, value) VALUES ('teacherPassword', 'pzxxzzw'), ('defaultPassword', 'pzxx');

-- 开启行级安全（允许匿名读写）
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON students FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON articles FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON grades FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_all" ON settings FOR ALL USING (true) WITH CHECK (true);
```

4. 点击 `Run` 执行（如果选中的 SQL 太多，可以分段执行）
   - 先执行 4 个 `CREATE TABLE` + `INSERT INTO settings`
   - 再执行 4 组 `ALTER TABLE` + `CREATE POLICY`

## 四、配置网站

1. 使用记事本或 VS Code 打开 `app.js`
2. 找到文件开头的这两行：

```js
const SUPABASE_URL = ''; // ← 请填写 Supabase Project URL
const SUPABASE_ANON_KEY = ''; // ← 请填写 Supabase anon public key
```

3. 填入第二步获取的 Project URL 和 anon public key：

```js
const SUPABASE_URL = 'https://你的项目ID.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

4. 保存文件

## 五、上传到 GitHub

```bash
git add app.js index.html
git commit -m '集成Supabase云存储'
git push
```

等待 GitHub Pages 自动部署（约 1-2 分钟）。

## 六、迁移已有数据

如果之前已经通过 localStorage 存储了学生、文章和成绩数据，可以通过如下方式迁移到云数据库：

### 方法：导出 → 导入

1. 打开网站 → 教师登录（用户名 `teacher`，密码 `pzxxzzw`）
2. 进入「系统设置」→ 点击「📤 导入数据」
3. 选择之前导出的备份 JSON 文件
4. 确认后，数据会自动写入云数据库
5. 导入后，再次打开「系统设置」→「导出数据」验证文件包含完整数据

### 验证

- 在 A 电脑添加一个学生，刷新 B 电脑，该学生应出现在列表中
- 在 A 电脑完成一次练习，B 电脑的成绩管理应能看到该记录

## 七、注意事项

| 项目 | 说明 |
|------|------|
| **免费额度** | 500MB 数据库、50,000 行/月、2GB 带宽，小学使用绰绰有余 |
| **网络要求** | 需要能访问 `supabase.co`（学校网络可能需要联系网管开放） |
| **数据安全** | anon key 是公开的，但 Row Level Security 限制了只能操作自己的表；不要泄露 Database Password |
| **离线降级** | 如果 Supabase 连接失败，网站会自动降级到 localStorage 模式，数据不丢失 |
| **多设备** | 所有设备访问同一网站，数据自动一致；但需要每台设备都能联网 |

## 八、排错

**问题：网站打开后没有数据**
- 检查 `app.js` 中 SUPABASE_URL 和 SUPABASE_ANON_KEY 是否正确填写
- 打开浏览器开发者工具（F12）→ Console 看是否有报错信息
- 检查 Supabase 控制台 → Table Editor，确认表是否已创建

**问题：可以读数据但写入失败**
- 检查 Row Level Security 策略是否已创建（`CREATE POLICY "anon_all" ...`）
- 确认用的是 `anon public key` 而不是 `service_role key`

**问题：Supabase 在国内访问慢**
- 创建项目时 Region 选择 `Singapore` 或 `Tokyo`
- 如仍不理想，可考虑使用国内云服务（LeanCloud、腾讯云等）
