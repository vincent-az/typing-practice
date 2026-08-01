/* ====== 练习数据 ====== */
const practiceData={
'letters-home':{easy:'asdf jkl; asdf jkl; asdf jkl; asdf jkl; fdsa jkl; asdf jkl; asdf jkl; fdsa; lkj',medium:'ask sad flask dash glad; ask lad; fad lad; dad had salad; glass flask; half glad ask dash; lad had salad',hard:'fall had glad half; ask all; dash flask; salads; all has ad; flask; dad ask had; lad; ask sad; fad; glad; half; salads; flask; class'},
'letters-all':{easy:'the quick brown fox jumps over the lazy dog; a quick brown fox jumps over the lazy dog',medium:'pack my box with five dozen liquor jugs; the five boxing wizards jump quickly; how vexingly quick daft zebras jump',hard:'how vexingly quick daft zebras jump! the quick brown fox jumps over the lazy dog. pack my box with five dozen liquor jugs. the five boxing wizards jump quickly.'},
'numbers':{easy:'123 456 789 123 456 789 012 345 678 901 234 567 890 123 456 789',medium:'2024 1984 100 200 300 400 500 600 700 800 900 1000 2025 1998 365 24 60',hard:'3.14159 2.71828 1.41421 1.73205 2.23607 3.14159 2.71828 1.41421 1.73205 2.23607'},
'punctuation-basic':{easy:['hello, world. how are you? i am fine!','the cat is big. the dog is small. do you like cats?','my name is tom. i am ten years old. i like apples.','what is your name? my name is sam. nice to meet you!','i have a pen. it is blue. do you have a pen?'],medium:['The teacher said, "Good morning!" We replied, "Good morning!"','What is your name? My name is Lily. Nice to meet you!','I like to play football. Do you? Yes, I do!','My mother is kind. She makes dinner for us every day.','Can you help me? Sure! What do you need? I need a book.'],hard:['Although it was raining, we still went to the park. The children were excited!','"Who wants ice cream?" asked Mom. Everyone shouted, "I do!"','My favorite season is summer. I can swim, eat ice cream, and play outside!','"Please pass me the book," said Tom. "Here you are," replied Mary. "Thank you!"','The sun is shining brightly. The birds are singing in the trees. What a lovely day!']},
'punctuation-quotes':{easy:['"hello" and \'world\'','She said "hi" and he said \'hello\'','"open the door" she said','"come here" he called','Mom said "eat your lunch"'],medium:['The teacher said, "Please open your books." We all said, "Okay!"','Mom asked, "What do you want for dinner?" I said, "Pizza, please!"','"Don\'t forget your homework," said my friend. "I won\'t!" I replied.','Dad said, "Let\'s go to the park." "Great idea!" we shouted.','"Where is my bag?" asked Tom. "It is under the desk," said Anna.'],hard:['The book said, "Knowledge is power." I think that\'s true!','"Where are you going?" asked Mom. "To the library," I answered.','"I can\'t believe it\'s already Friday!" she exclaimed.','My teacher said, "Practice makes perfect." So I practice every day.','"What time is it?" he asked. "It\'s three o\'clock," she replied. "Thank you!"']},
'punctuation-cn':{easy:['春天来了。花儿开了。小鸟在唱歌。','你好吗？我很好。谢谢！','我喜欢吃苹果，你喜欢吃什么呢？','今天是星期一。明天是星期二。','小明、小红和小李是好朋友。','我家有一只小猫，它很可爱。'],medium:['图书馆里有很多书：故事书、科学书、漫画书。你最喜欢哪种？','今天天气真好！我们去公园玩吧。好不好？好！','老师说："明天要带课本。"同学们都记住了。','中国的首都是北京；那里有很多名胜古迹。','这是谁的书？是我的。真的吗？真的！','妈妈问："你作业写完了吗？"我回答："写完了。"'],hard:['中国的首都是北京。那里有很多名胜古迹：故宫、长城、天坛……','"你长大了想做什么？"妈妈问。"我想当科学家！"我坚定地回答。','科技改变了我们的生活；互联网让我们可以学习更多知识。同学们，加油！','小明说："我今天很开心！"小红问："为什么？"小明回答："因为我学会了打字！"','春天的花开了：桃花、杏花、梨花……五颜六色，美丽极了！','老师对我们说："一寸光阴一寸金，寸金难买寸光阴。要珍惜时间！"']},
'sentences':{easy:['Hello! I\'m Miss White. What\'s your name? My name\'s Mike.','Good morning! How are you? I\'m fine, thank you.','Nice to meet you. Nice to meet you, too.','This is my friend, Amy. She is a girl.','I have a ruler. I have an eraser, too.','Look at me! This is my face. This is my nose.','What\'s this? It\'s a duck. What\'s that? It\'s a bear.','I\'d like some juice, please. Here you are. Thanks!','Can I have some bread, please? Sure, here you are.','How old are you? I\'m six years old. Happy birthday!','How many plates? Five plates. Here you are.','Stand up, please. Sit down, please. Let\'s go to school!'],medium:['We have a new classroom. Let\'s go and see.','Let\'s clean the classroom. Let me clean the windows.','Where is my seat? It\'s near the door. It\'s near the window.','What\'s in your schoolbag? An English book, a maths book and three storybooks.','I have a new schoolbag. It\'s black and white. It\'s very nice.','My friend is tall and strong. He has a green bag.','Who is he? He\'s my brother. He is a good boy.','I have long hair. My friend has short hair. She is quiet.','Where are my keys? They\'re on the table. They\'re near the phone.','Is she in the living room? Yes, she is. No, she isn\'t.','What would you like for dinner? I\'d like some beef and vegetables.','Dinner\'s ready! Help yourself. Thanks, Mum. I can use chopsticks.','How many people are there in your family? Five. My family has six people.','Is this your uncle? Yes, it is. What\'s your aunt\'s job? She\'s a nurse.','My mother is a teacher. My father is a driver. They are nice.'],hard:['It\'s time for lunch. Let\'s have some chicken and rice.','What time is it? It\'s six o\'clock. It\'s time to get up.','What\'s the weather like in Beijing? It\'s rainy. It\'s cloudy and cold.','Can I go outside now? Yes, you can. It\'s warm and sunny.','Look at the vegetables! They\'re so big and fresh.','Are these tomatoes? Yes, they are. What are those? They\'re horses.','Whose coat is this? It\'s mine. Are these yours? No, they aren\'t.','Can I help you? Yes. These shoes are nice. Can I try them on?','How much is this skirt? It\'s ninety yuan. It\'s very pretty.','I like that red dress. It\'s beautiful and cheap.','Is it cold today? Yes, it is. It\'s snowy outside. Put on your hat.','What\'s your favourite food? I like noodles. They\'re delicious.']},

'articles':{easy:'春天来了。花儿开了。小鸟在树上唱歌。小朋友们在公园里玩耍。春天真美丽！我喜欢春天。春天里有很多花朵，有红色的、黄色的、粉色的。蝴蝶在花丛中飞来飞去。',medium:'图书馆里有很多书。我最喜欢看故事书。每天放学后，我都会去图书馆看书。读书可以学到很多知识。高尔基说过："书籍是人类进步的阶梯。"我们要多读书、读好书。',hard:'科技改变了我们的生活。通过互联网，我们可以学习到很多知识。同学们要好好学习，将来为祖国做贡献。打字是一项非常重要的技能。在信息时代，学会快速准确地打字，可以帮助我们更好地学习和工作。坚持练习，你一定能成为打字高手！'}
};

const fingerMap={'q':'left-pinky','a':'left-pinky','z':'left-pinky','1':'left-pinky','`':'left-pinky','w':'left-ring','s':'left-ring','x':'left-ring','2':'left-ring','e':'left-middle','d':'left-middle','c':'left-middle','3':'left-middle','r':'left-index','f':'left-index','v':'left-index','4':'left-index','t':'left-index','g':'left-index','b':'left-index','5':'left-index','y':'right-index','h':'right-index','n':'right-index','6':'right-index','u':'right-index','j':'right-index','m':'right-index','7':'right-index','i':'right-middle','k':'right-middle',',':'right-middle','8':'right-middle','o':'right-ring','l':'right-ring','.':'right-ring','9':'right-ring','p':'right-pinky',';':'right-pinky','/':'right-pinky','0':'right-pinky',"'":'right-pinky','[':'right-pinky',']':'right-pinky','-':'right-pinky','=':'right-pinky',' ':'thumb'};
const fingerNames={'left-pinky':'左手小指','left-ring':'左手无名指','left-middle':'左手中指','left-index':'左手食指','right-index':'右手食指','right-middle':'右手中指','right-ring':'右手无名指','right-pinky':'右手小指','thumb':'拇指'};

const defaultClasses=['三年级1班','三年级2班','三年级3班','三年级4班','三年级5班','三年级6班','四年级1班','四年级2班','四年级3班','四年级4班','四年级5班','五年级1班','五年级2班','五年级3班','五年级4班','五年级5班'];

/* ====== 数据状态 ====== */
let studentsData=[];
let articlesData=[];
let settingsData={defaultPassword:'pzxx',teacherPassword:'pzxxzzw'};
let currentUser=null;
let studentGrades={};
let feedbacksData=[];

/* ====== Supabase 云存储配置 ====== */
const SUPABASE_URL = 'https://ezbsuywvaimjgbuhrubj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6YnN1eXd2YWltamdidWhydWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMjQ2MTksImV4cCI6MjEwMDgwMDYxOX0.fPf5rCNmWVq_gSUYaWtL9RCwVsdOI-xh0CBER9BzD-g';
let supabaseClient = null;

function initSupabase() {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return false;
    try { supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); return true; } catch (e) { return false; }
}

async function supabaseLoadStudents() {
    if (!supabaseClient) return false;
    const { data, error } = await supabaseClient.from('students').select('*');
    if (error) return false;
    studentsData = (data || []).map(s => ({ id: s.id, class: s.class, name: s.name, password: s.password, isDefault: s.is_default }));
    return true;
}
async function supabaseLoadArticles() {
    if (!supabaseClient) return false;
    const { data, error } = await supabaseClient.from('articles').select('*');
    if (error) return false;
    articlesData = (data || []).map(a => ({ id: a.id, title: a.title, content: a.content, difficulty: a.difficulty }));
    return true;
}
async function supabaseLoadSettings() {
    if (!supabaseClient) return false;
    const { data, error } = await supabaseClient.from('settings').select('key, value');
    if (error) return false;
    if (data && data.length > 0) {
        data.forEach(r => {
            if (r.key === 'teacherPassword') settingsData.teacherPassword = r.value;
            if (r.key === 'defaultPassword') settingsData.defaultPassword = r.value;
        });
    }
    return true;
}
async function supabaseLoadGrades() {
    if (!supabaseClient) return false;
    const { data, error } = await supabaseClient.from('grades').select('*');
    if (error) return false;
    studentGrades = {};
    (data || []).forEach(g => {
        const key = g.class + '-' + g.name;
        if (!studentGrades[key]) studentGrades[key] = [];
        studentGrades[key].push({
            date: g.date, type: g.type, wpm: g.wpm, accuracy: g.accuracy, stars: g.stars, xp: g.xp
        });
    });
    return true;
}
async function supabaseLoadFeedbacks() {
    if (!supabaseClient) return true;
    const { data, error } = await supabaseClient.from('feedbacks').select('*').order('created_at',{ascending:false});
    if (error) {
        console.error('Supabase加载反馈失败（教师端可能看不到云端反馈）:',error);
        return true;
    }
    feedbacksData = (data || []).map(f => ({ id: f.id, date: f.created_at, class: f.class, name: f.name, category: f.category, content: f.content, status: f.status||'pending' }));
    return true;
}
async function supabaseUpsertSetting(key, value) {
    if (!supabaseClient) return;
    const {error}=await supabaseClient.from('settings').upsert({ key, value }, { onConflict: 'key' });
    if(error)console.error('Supabase保存设置失败:',key,error);
}

let GS={currentScreen:'login-screen',currentPractice:null,currentText:'',currentIndex:0,correctChars:0,totalChars:0,startTime:null,timerInterval:null,timeLimit:180,isPaused:false,isFinished:false,xp:0,level:1,bestWpm:0,practiceCount:0,practiceStats:{letters:0,numbers:0,punctuation:0,mixed:0},achievements:{first:false,speed:false,accuracy:false,punctuation:false,streak:false,all:false},streakCount:0,lastPracticeDate:null};
let gameInterval=null,gameScore=0,gameCorrect=0,gameTimeLeft=30,gameType=null,gameTarget='';

/* ====== 数据持久化 ====== */
function saveSystemData(){
    localStorage.setItem('tpStudents',JSON.stringify(studentsData));
    localStorage.setItem('tpArticles',JSON.stringify(articlesData));
    localStorage.setItem('tpSettings',JSON.stringify(settingsData));
    localStorage.setItem('tpGrades',JSON.stringify(studentGrades));
    localStorage.setItem('tpFeedbacks',JSON.stringify(feedbacksData));
}

async function loadSystemData(){
    const s=localStorage.getItem('tpStudents');
    if(s)try{studentsData=JSON.parse(s);}catch(e){}
    const a=localStorage.getItem('tpArticles');
    if(a)try{articlesData=JSON.parse(a);}catch(e){}
    const t=localStorage.getItem('tpSettings');
    if(t)try{const d=JSON.parse(t);Object.assign(settingsData,d);}catch(e){}
    const g=localStorage.getItem('tpGrades');
    if(g)try{studentGrades=JSON.parse(g);}catch(e){}
    const f=localStorage.getItem('tpFeedbacks');
    if(f)try{feedbacksData=JSON.parse(f);}catch(e){}
    const u=localStorage.getItem('tpCurrentUser');
    if(u)try{currentUser=JSON.parse(u);}catch(e){}

    const sbOk = initSupabase();
    if (sbOk) {
        const backupStudents=[...studentsData], backupArticles=[...articlesData], backupGrades={...studentGrades}, backupFeedbacks=[...feedbacksData];
        const results = await Promise.all([
            supabaseLoadStudents(), supabaseLoadArticles(), supabaseLoadSettings(), supabaseLoadGrades(), supabaseLoadFeedbacks()
        ]);
        if (results.every(r => r)) {
            if (studentsData.length===0 && backupStudents.length>0) studentsData=backupStudents;
            if (articlesData.length===0 && backupArticles.length>0) articlesData=backupArticles;
            if (Object.keys(studentGrades).length===0 && Object.keys(backupGrades).length>0) studentGrades=backupGrades;
            if (feedbacksData.length===0 && backupFeedbacks.length>0) feedbacksData=backupFeedbacks;
            saveSystemData();
            syncPendingGrades();
            return;
        }
        studentsData=backupStudents; articlesData=backupArticles; studentGrades=backupGrades; feedbacksData=backupFeedbacks;
    }
}
function saveCurrentUser(){
    if(currentUser){
        localStorage.setItem('tpCurrentUser',JSON.stringify(currentUser));
    }else{
        localStorage.removeItem('tpCurrentUser');
    }
}

/* ====== 弹窗提示 ====== */
function showToast(msg,type){
    const t=document.createElement('div');
    t.style.cssText='position:fixed;top:20px;right:20px;padding:14px 24px;border-radius:12px;color:white;font-weight:600;z-index:2000;box-shadow:0 5px 20px rgba(0,0,0,0.2);animation:popIn 0.3s ease;max-width:350px;font-size:0.9em';
    t.style.background=type==='error'?'#ef4444':'linear-gradient(135deg,#10b981,#34d399)';
    t.textContent=msg;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(),3000);
}

/* ====== 登录/注销 ====== */
function studentLogin(){
    const cls=document.getElementById('login-class').value;
    const name=document.getElementById('login-name').value.trim();
    const pwd=document.getElementById('login-password').value;
    const msg=document.getElementById('student-login-msg');
    if(!cls||!name){msg.className='form-msg error';msg.textContent='请选择班级并输入姓名';return;}
    if(!pwd){msg.className='form-msg error';msg.textContent='请输入密码';return;}
    const stu=studentsData.find(s=>s.class===cls&&s.name===name);
    if(!stu){msg.className='form-msg error';msg.textContent='未找到该学生信息，请联系老师添加';return;}
    if(stu.password!==pwd){msg.className='form-msg error';msg.textContent='密码错误';return;}
    currentUser={type:'student',class:cls,name:name};
    saveCurrentUser();
    document.getElementById('student-bar-name').textContent=name;
    document.getElementById('student-bar-class').textContent=cls;
    msg.className='form-msg success';
    msg.textContent='登录成功！';
    document.getElementById('login-class').value='';
    document.getElementById('login-name').value='';
    document.getElementById('login-password').value='';
    setTimeout(()=>{
        msg.textContent='';
        showScreen('home-screen');
    },500);
}
function teacherLogin(){
    const user=document.getElementById('teacher-login-user').value.trim();
    const pwd=document.getElementById('teacher-login-pwd').value.trim();
    const msg=document.getElementById('teacher-login-msg');
    if(!user){msg.className='form-msg error';msg.textContent='请输入用户名';return;}
    if(!pwd){msg.className='form-msg error';msg.textContent='请输入密码';return;}
    if(user!=='teacher'){msg.className='form-msg error';msg.textContent='用户名错误';return;}
    if(pwd!==settingsData.teacherPassword){msg.className='form-msg error';msg.textContent='密码错误';return;}
    currentUser={type:'teacher'};
    saveCurrentUser();
    document.getElementById('teacher-login-user').value='';
    document.getElementById('teacher-login-pwd').value='';
    msg.className='form-msg success';
    msg.textContent='登录成功！';
    setTimeout(()=>{
        msg.textContent='';
        refreshStudentTable();
        refreshArticleTable();
        refreshGradeTable();
        refreshGradeRecords();
        refreshClassDropdowns();
        refreshFeedbackTable();
        showScreen('teacher-panel-screen');
    },500);
}
function logout(){
    if(currentUser&&currentUser.type==='teacher'&&!confirm('确定要退出登录吗？'))return;
    currentUser=null;
    saveCurrentUser();
    showScreen('login-screen');
}
function checkAutoLogin(){
    if(currentUser&&currentUser.type==='student'){
        document.getElementById('student-bar-name').textContent=currentUser.name;
        document.getElementById('student-bar-class').textContent=currentUser.class;
        showScreen('home-screen');
    }else if(currentUser&&currentUser.type==='teacher'){
        refreshStudentTable();
        refreshArticleTable();
        refreshGradeTable();
        refreshGradeRecords();
        refreshClassDropdowns();
        refreshFeedbackTable();
        showScreen('teacher-panel-screen');
    }
}

/* ====== 学生管理 ====== */
async function addSingleStudent(){
    const cls=document.getElementById('stu-class').value;
    const name=document.getElementById('stu-name').value.trim();
    if(!cls||!name){showToast('请选择班级并输入姓名','error');return;}
    if(studentsData.some(s=>s.class===cls&&s.name===name)){showToast('该学生已存在','error');return;}
    let id=Date.now();
    if(supabaseClient){
        const {data,error}=await supabaseClient.from('students').insert({class:cls,name,password:settingsData.defaultPassword,is_default:true}).select();
        if(error){console.error('Supabase添加学生失败:',error);showToast('云存储写入失败','error');}
        if(data&&data[0])id=data[0].id;
    }
    studentsData.push({id,class:cls,name:name,password:settingsData.defaultPassword,isDefault:true});
    saveSystemData();
    document.getElementById('stu-name').value='';
    showToast('添加成功：'+name);
    refreshStudentTable();
    refreshClassDropdowns();
}
async function addBulkStudents(){
    const cls=document.getElementById('bulk-class').value;
    const text=document.getElementById('stu-bulk').value.trim();
    if(!cls){showToast('请先选择班级','error');return;}
    if(!text){showToast('请输入学生姓名','error');return;}
    const lines=text.split('\n').filter(l=>l.trim());
    const added=[];
    const skipped=[];
    for(const rawName of lines){
        const name=rawName.trim();
        if(!name)continue;
        if(studentsData.some(s=>s.class===cls&&s.name===name)){
            skipped.push(name);
            continue;
        }
        added.push({class:cls,name,password:settingsData.defaultPassword,isDefault:true});
    }
    if(added.length===0){showToast('这些学生都已存在，无需添加','error');return;}
    if(supabaseClient){
        const {data,error}=await supabaseClient.from('students').insert(
            added.map(a=>({class:a.class,name:a.name,password:a.password,is_default:true}))
        ).select();
        if(error){showToast('云存储写入失败，已保存到本地','error');console.error('Supabase批量添加失败:',error);}
        if(data){
            added.forEach((a,i)=>{
                const id=data[i]?data[i].id:Date.now()+i;
                studentsData.push({id,class:a.class,name:a.name,password:a.password,isDefault:true});
            });
        }else{
            added.forEach((a,i)=>{studentsData.push({id:Date.now()+i,class:a.class,name:a.name,password:a.password,isDefault:true});});
        }
    }else{
        added.forEach((a,i)=>{studentsData.push({id:Date.now()+i,...a});});
    }
    saveSystemData();
    document.getElementById('stu-bulk').value='';
    let msg='成功添加 '+added.length+' 名学生';
    if(skipped.length>0)msg+='（'+skipped.length+' 名已存在已跳过）';
    showToast(msg);
    refreshStudentTable();
    refreshClassDropdowns();
}
async function deleteStudent(id){
    const stu=studentsData.find(s=>s.id===id);
    if(!stu)return;
    if(!confirm('确定要删除学生 '+stu.name+' 吗？'))return;
    studentsData=studentsData.filter(s=>s.id!==id);
    saveSystemData();
    if(supabaseClient){const {error}=await supabaseClient.from('students').delete().eq('id',id);if(error)console.error('Supabase删除学生失败:',error);}
    showToast('已删除：'+stu.name);
    refreshStudentTable();
    refreshClassDropdowns();
}
async function resetStudentPwd(id){
    const stu=studentsData.find(s=>s.id===id);
    if(!stu||!confirm('确定要重置 '+stu.name+' 的密码吗？'))return;
    stu.password=settingsData.defaultPassword;
    stu.isDefault=true;
    saveSystemData();
    if(supabaseClient){const {error}=await supabaseClient.from('students').update({password:settingsData.defaultPassword,is_default:true}).eq('id',id);if(error)console.error('Supabase重置密码失败:',error);}
    showToast('已重置：'+stu.name+' 的密码');
    refreshStudentTable();
}
function refreshStudentTable(){
    const tbody=document.getElementById('stu-tbody');
    const count=document.getElementById('stu-count');
    const filterClass=document.getElementById('stu-filter-class').value;
    let list=studentsData;
    if(filterClass)list=studentsData.filter(s=>s.class===filterClass);
    count.textContent=list.length+'人';
    if(list.length===0){
        tbody.innerHTML='<tr><td colspan="5" style="text-align:center;color:#9ca3af;padding:30px">暂无学生，请添加</td></tr>';
        return;
    }
    tbody.innerHTML=list.map(s=>`
        <tr>
            <td><input type="checkbox" class="stu-checkbox" data-id="${s.id}"></td>
            <td>${s.class}</td>
            <td>${s.name}</td>
            <td><span class="pwd-status ${s.isDefault?'default':'changed'}">${s.isDefault?'默认密码':'已修改'}</span></td>
            <td>
                <button class="table-btn reset" onclick="resetStudentPwd(${s.id})">重置密码</button>
                <button class="table-btn delete" onclick="deleteStudent(${s.id})">删除</button>
            </td>
        </tr>
    `).join('');
}
function toggleAllStudents(checked){document.querySelectorAll('.stu-checkbox').forEach(cb=>cb.checked=checked);}
async function batchDeleteStudents(){
    const cbs=document.querySelectorAll('.stu-checkbox:checked');
    if(cbs.length===0){showToast('请先选择要删除的学生','error');return;}
    if(!confirm('确定要删除选中的 '+cbs.length+' 名学生吗？此操作不可恢复！'))return;
    const ids=[...cbs].map(cb=>parseInt(cb.dataset.id));
    studentsData=studentsData.filter(s=>!ids.includes(s.id));
    saveSystemData();
    if(supabaseClient){const {error}=await supabaseClient.from('students').delete().in('id',ids);if(error)console.error('Supabase批量删除失败:',error);}
    showToast('已删除 '+ids.length+' 名学生');
    refreshStudentTable();
    refreshClassDropdowns();
}

/* ====== 成绩管理 ====== */
function refreshGradeTable(){
    const tbody=document.getElementById('grade-tbody');
    const count=document.getElementById('grade-count');
    const filterClass=document.getElementById('grade-class-filter').value;
    const searchName=(document.getElementById('grade-search').value||'').trim();
    let rows=[];
    studentsData.forEach(stu=>{
        if(filterClass&&stu.class!==filterClass)return;
        if(searchName&&!stu.name.includes(searchName))return;
        const key=stu.class+'-'+stu.name;
        const grades=studentGrades[key]||[];
        const avgWpm=grades.length>0?Math.round(grades.reduce((s,g)=>s+g.wpm,0)/grades.length):0;
        const avgAcc=grades.length>0?Math.round(grades.reduce((s,g)=>s+g.accuracy,0)/grades.length):0;
        const maxWpm=grades.length>0?Math.max(...grades.map(g=>g.wpm)):0;
        let lastDate=null;
        if(grades.length>0){
            lastDate=grades.reduce((mx,g)=>!mx||new Date(g.date)>mx?new Date(g.date):mx,null);
        }
        rows.push({class:stu.class,name:stu.name,count:grades.length,avgWpm,avgAcc,maxWpm,lastDate});
    });
    rows.sort((a,b)=>((b.lastDate||0)-(a.lastDate||0))||a.class.localeCompare(b.class)||a.name.localeCompare(b.name));
    count.textContent=rows.length+'人';
    if(rows.length===0){
        tbody.innerHTML='<tr><td colspan="8" style="text-align:center;color:#9ca3af;padding:30px">暂无成绩数据</td></tr>';
        return;
    }
    tbody.innerHTML=rows.map(r=>`
        <tr>
            <td>${r.class}</td>
            <td>${r.name}</td>
            <td>${r.count}次</td>
            <td class="grade-wpm">${r.avgWpm} WPM</td>
            <td class="grade-acc">${r.avgAcc}%</td>
            <td>${r.maxWpm} WPM</td>
            <td>${r.lastDate?formatDateTime(r.lastDate):'<span style="color:#9ca3af">—</span>'}</td>
            <td><button class="table-btn view" onclick="showGradeDetail('${r.class.replace(/'/g,"\\'")}','${r.name.replace(/'/g,"\\'")}')">详情</button></td>
        </tr>
    `).join('');
}
function formatDateTime(d){
    const pad=n=>String(n).padStart(2,'0');
    return (d.getMonth()+1)+'/'+d.getDate()+' '+pad(d.getHours())+':'+pad(d.getMinutes());
}
const gradeTypeNames={'letters-home':'基准键','letters-all':'全字母','numbers':'数字键','punctuation-basic':'基础标点','punctuation-quotes':'引号练习','punctuation-cn':'中文标点','sentences':'句子练习','articles':'短文练习'};
let currentGradeDetail={cls:null,name:null};
function showGradeDetail(cls,name){
    if(typeof cls!=='undefined'&&cls!==null){currentGradeDetail={cls:cls,name:name};}
    if(!currentGradeDetail.cls||!currentGradeDetail.name)return;
    const key=currentGradeDetail.cls+'-'+currentGradeDetail.name;
    const grades=(studentGrades[key]||[]).slice();
    document.getElementById('grade-detail-title').textContent=currentGradeDetail.name+' 的成绩详情 ('+currentGradeDetail.cls+')';
    const start=document.getElementById('grade-detail-start').value;
    const end=document.getElementById('grade-detail-end').value;
    const type=document.getElementById('grade-detail-type').value;
    let list=grades;
    if(start)list=list.filter(g=>new Date(g.date)>=new Date(start+'T00:00:00'));
    if(end)list=list.filter(g=>new Date(g.date)<=new Date(end+'T23:59:59'));
    if(type)list=list.filter(g=>g.type===type);
    list.sort((a,b)=>new Date(b.date)-new Date(a.date));
    const tbody=document.getElementById('grade-detail-tbody');
    if(list.length===0){
        tbody.innerHTML='<tr><td colspan="5" style="text-align:center;color:#9ca3af;padding:20px">暂无符合条件的练习记录</td></tr>';
    }else{
        tbody.innerHTML=list.map(g=>{
            const d=new Date(g.date);
            return `<tr><td>${formatDateTime(d)}</td><td>${gradeTypeNames[g.type]||g.type}</td><td class="grade-wpm">${g.wpm} WPM</td><td class="grade-acc">${g.accuracy}%</td><td>${'⭐'.repeat(g.stars)}</td></tr>`;
        }).join('');
    }
    document.getElementById('grade-list-view').style.display='none';
    document.getElementById('grade-records-view').style.display='none';
    document.getElementById('grade-detail-view').style.display='block';
}
function closeGradeDetail(){
    document.getElementById('grade-list-view').style.display='block';
    document.getElementById('grade-records-view').style.display='none';
    document.getElementById('grade-detail-view').style.display='none';
}
function switchGradeView(view){
    document.getElementById('grade-list-view').style.display=view==='summary'?'block':'none';
    document.getElementById('grade-records-view').style.display=view==='records'?'block':'none';
    document.getElementById('grade-detail-view').style.display=view==='detail'?'block':'none';
    if(view==='summary'){refreshGradeTable();}
    if(view==='records'){refreshGradeRecords();}
    if(view==='detail'){showGradeDetail();}
}
function refreshGradeRecords(){
    const tbody=document.getElementById('grade-records-tbody');
    const count=document.getElementById('grade-records-count');
    const filterClass=document.getElementById('grade-records-class').value;
    const searchName=(document.getElementById('grade-records-search').value||'').trim();
    const start=document.getElementById('grade-records-start').value;
    const end=document.getElementById('grade-records-end').value;
    const type=document.getElementById('grade-records-type').value;
    let all=[];
    studentsData.forEach(stu=>{
        if(filterClass&&stu.class!==filterClass)return;
        if(searchName&&!stu.name.includes(searchName))return;
        const grades=studentGrades[stu.class+'-'+stu.name]||[];
        grades.forEach(g=>{all.push({class:stu.class,name:stu.name,date:g.date,type:g.type,wpm:g.wpm,accuracy:g.accuracy,stars:g.stars});});
    });
    if(start)all=all.filter(g=>new Date(g.date)>=new Date(start+'T00:00:00'));
    if(end)all=all.filter(g=>new Date(g.date)<=new Date(end+'T23:59:59'));
    if(type)all=all.filter(g=>g.type===type);
    all.sort((a,b)=>new Date(b.date)-new Date(a.date));
    count.textContent=all.length+'条';
    if(all.length===0){
        tbody.innerHTML='<tr><td colspan="7" style="text-align:center;color:#9ca3af;padding:30px">暂无符合条件的练习记录</td></tr>';
        return;
    }
    tbody.innerHTML=all.map(g=>{
        const d=new Date(g.date);
        return `<tr><td>${formatDateTime(d)}</td><td>${g.class}</td><td>${g.name}</td><td>${gradeTypeNames[g.type]||g.type}</td><td class="grade-wpm">${g.wpm} WPM</td><td class="grade-acc">${g.accuracy}%</td><td>${'⭐'.repeat(g.stars)}</td></tr>`;
    }).join('');
}
function downloadRecordsCSV(){
    const filterClass=document.getElementById('grade-records-class').value;
    const searchName=(document.getElementById('grade-records-search').value||'').trim();
    const start=document.getElementById('grade-records-start').value;
    const end=document.getElementById('grade-records-end').value;
    const type=document.getElementById('grade-records-type').value;
    let all=[];
    studentsData.forEach(stu=>{
        if(filterClass&&stu.class!==filterClass)return;
        if(searchName&&!stu.name.includes(searchName))return;
        const grades=studentGrades[stu.class+'-'+stu.name]||[];
        grades.forEach(g=>{all.push({class:stu.class,name:stu.name,date:g.date,type:g.type,wpm:g.wpm,accuracy:g.accuracy,stars:g.stars});});
    });
    if(start)all=all.filter(g=>new Date(g.date)>=new Date(start+'T00:00:00'));
    if(end)all=all.filter(g=>new Date(g.date)<=new Date(end+'T23:59:59'));
    if(type)all=all.filter(g=>g.type===type);
    all.sort((a,b)=>new Date(b.date)-new Date(a.date));
    if(all.length===0){showToast('没有符合条件的练习记录','error');return;}
    let csv='\uFEFF日期时间,班级,姓名,练习类型,速度(WPM),正确率(%),星级\n';
    all.forEach(g=>{
        const d=new Date(g.date);
        const pad=n=>String(n).padStart(2,'0');
        const dateStr=(d.getMonth()+1)+'/'+d.getDate()+' '+pad(d.getHours())+':'+pad(d.getMinutes());
        csv+=dateStr+','+g.class+','+g.name+','+(gradeTypeNames[g.type]||g.type)+','+g.wpm+','+g.accuracy+','+g.stars+'\n';
    });
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='练习记录_'+(filterClass||'全部班级')+'_'+new Date().toISOString().slice(0,10)+'.csv';
    a.click();
    showToast('已下载 '+all.length+' 条练习记录');
}
async function refreshGradesFromCloud(){
    if(!supabaseClient){showToast('Supabase未连接，无法刷新','error');return;}
    showToast('正在从云端刷新数据...');
    const ok=await supabaseLoadGrades();
    if(ok){saveSystemData();refreshGradeTable();refreshGradeRecords();showToast('成绩数据已刷新');}
    else{showToast('刷新失败，请检查网络','error');}
}
function downloadGradesCSV(){
    const filterClass=document.getElementById('grade-class-filter').value;
    const searchName=(document.getElementById('grade-search').value||'').trim();
    let csv='\uFEFF班级,姓名,练习次数,平均速度(WPM),平均正确率(%),最高速度(WPM)\n';
    let count=0;
    studentsData.forEach(stu=>{
        if(filterClass&&stu.class!==filterClass)return;
        if(searchName&&!stu.name.includes(searchName))return;
        const key=stu.class+'-'+stu.name;
        const grades=studentGrades[key]||[];
        const avgWpm=grades.length>0?Math.round(grades.reduce((s,g)=>s+g.wpm,0)/grades.length):0;
        const avgAcc=grades.length>0?Math.round(grades.reduce((s,g)=>s+g.accuracy,0)/grades.length):0;
        const maxWpm=grades.length>0?Math.max(...grades.map(g=>g.wpm)):0;
        csv+=stu.class+','+stu.name+','+grades.length+','+avgWpm+','+avgAcc+','+maxWpm+'\n';
        count++;
    });
    if(count===0){showToast('没有可下载的成绩数据','error');return;}
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='学生成绩_'+(filterClass||'全部班级')+'_'+new Date().toISOString().slice(0,10)+'.csv';
    a.click();
    showToast('已下载 '+count+' 名学生的成绩');
}

/* ====== 文章管理 ====== */
async function addArticle(){
    const title=document.getElementById('art-title').value.trim();
    const content=document.getElementById('art-content').value.trim();
    const diff=document.getElementById('art-difficulty').value;
    if(!title||!content){showToast('请输入文章标题和内容','error');return;}
    let id=Date.now();
    if(supabaseClient){
        const {data,error}=await supabaseClient.from('articles').insert({title,content,difficulty:diff}).select();
        if(error){console.error('Supabase添加文章失败:',error);showToast('云存储写入失败','error');}
        if(data&&data[0])id=data[0].id;
    }
    articlesData.push({id,title,content,difficulty:diff});
    saveSystemData();
    document.getElementById('art-title').value='';
    document.getElementById('art-content').value='';
    showToast('文章添加成功：'+title);
    refreshArticleTable();
}
function handleWordUpload(){
    const fileInput=document.getElementById('art-file');
    const file=fileInput.files[0];
    if(!file)return;
    const fileName=file.name.replace(/\.[^.]+$/,'');
    document.getElementById('file-name').textContent=file.name;
    if(file.name.endsWith('.docx')){
        const reader=new FileReader();
        reader.onload=function(e){
            mammoth.extractRawText({arrayBuffer:e.target.result})
                .then(function(result){
                    const text=result.value.trim();
                    if(text){
                        document.getElementById('art-title').value=fileName;
                        document.getElementById('art-content').value=text;
                        showToast('已读取Word文件内容');
                    }else{
                        showToast('未能从文件中提取到文字','error');
                    }
                })
                .catch(function(err){
                    showToast('文件解析失败：'+err.message,'error');
                });
        };
        reader.readAsArrayBuffer(file);
    }else{
        showToast('请上传 .docx 格式的Word文件','error');
    }
}
async function deleteArticle(id){
    const art=articlesData.find(a=>a.id===id);
    if(!art||!confirm('确定要删除文章 "'+art.title+'" 吗？'))return;
    articlesData=articlesData.filter(a=>a.id!==id);
    saveSystemData();
    if(supabaseClient){const {error}=await supabaseClient.from('articles').delete().eq('id',id);if(error)console.error('Supabase删除文章失败:',error);}
    showToast('已删除文章');
    refreshArticleTable();
}
function refreshArticleTable(){
    const tbody=document.getElementById('art-tbody');
    const count=document.getElementById('art-count');
    count.textContent=articlesData.length+'篇';
    if(articlesData.length===0){
        tbody.innerHTML='<tr><td colspan="4" style="text-align:center;color:#9ca3af;padding:30px">暂无文章</td></tr>';
        return;
    }
    const diffNames={easy:'简单',medium:'中等',hard:'困难'};
    tbody.innerHTML=articlesData.map(a=>`
        <tr>
            <td><strong>${a.title}</strong></td>
            <td><span class="diff-tag ${a.difficulty}">${diffNames[a.difficulty]||a.difficulty}</span></td>
            <td><span class="art-preview">${a.content.substring(0,40)}${a.content.length>40?'...':''}</span></td>
            <td>
                <button class="table-btn view" onclick="previewArticle(${a.id})">预览</button>
                <button class="table-btn delete" onclick="deleteArticle(${a.id})">删除</button>
            </td>
        </tr>
    `).join('');
}
function previewArticle(id){
    const art=articlesData.find(a=>a.id===id);
    if(!art)return;
    showToast('内容预览 (打开控制台查看完整内容)');
    console.log('文章: '+art.title+'\n难度: '+art.difficulty+'\n内容:\n'+art.content);
    alert('标题: '+art.title+'\n难度: '+(art.difficulty==='easy'?'简单':art.difficulty==='medium'?'中等':'困难')+'\n\n内容:\n'+art.content);
}

/* ====== 系统设置 ====== */
async function saveDefaultPwd(){
    const pwd=document.getElementById('set-default-pwd').value.trim();
    if(!pwd||pwd.length<3){showToast('密码长度至少3位','error');return;}
    settingsData.defaultPassword=pwd;
    saveSystemData();
    if(supabaseClient)await supabaseUpsertSetting('defaultPassword',pwd);
    showToast('默认密码已设置为：'+pwd);
}
async function changeTeacherPwd(){
    const old=document.getElementById('set-old-pwd').value;
    const nw=document.getElementById('set-new-pwd').value.trim();
    const msg=document.getElementById('teacher-settings-msg');
    if(!old||!nw){msg.className='form-msg error';msg.textContent='请填写当前密码和新密码';return;}
    if(old!==settingsData.teacherPassword){msg.className='form-msg error';msg.textContent='当前密码错误';return;}
    if(nw.length<4){msg.className='form-msg error';msg.textContent='新密码长度至少4位';return;}
    settingsData.teacherPassword=nw;
    saveSystemData();
    if(supabaseClient)await supabaseUpsertSetting('teacherPassword',nw);
    document.getElementById('set-old-pwd').value='';
    document.getElementById('set-new-pwd').value='';
    msg.className='form-msg success';
    msg.textContent='教师密码已修改成功';
    setTimeout(()=>msg.textContent='',2000);
}
function exportData(){
    const data={students:studentsData,articles:articlesData,settings:settingsData,grades:studentGrades};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='typing_practice_data_'+new Date().toISOString().slice(0,10)+'.json';
    a.click();
    showToast('数据已导出（含成绩）');
}
async function importData(){
    const input=document.createElement('input');
    input.type='file';
    input.accept='.json';
    input.onchange=async function(e){
        const file=e.target.files[0];
        if(!file)return;
        const reader=new FileReader();
        reader.onload=async function(ev){
            try{
                const data=JSON.parse(ev.target.result);
                if(!confirm('导入将覆盖当前所有数据（学生、文章、成绩），确定继续吗？'))return;
                if(data.students)studentsData=data.students;
                if(data.articles)articlesData=data.articles;
                if(data.settings)Object.assign(settingsData,data.settings);
                if(data.grades)studentGrades=data.grades;
                saveSystemData();
                if(supabaseClient){
                    let {error:e1}=await supabaseClient.from('students').delete().neq('id',0);if(e1)console.error('导入-清空students失败:',e1);
                    if(studentsData.length>0){let {error:e2}=await supabaseClient.from('students').insert(studentsData.map(s=>({class:s.class,name:s.name,password:s.password,is_default:s.isDefault})));if(e2)console.error('导入-写入students失败:',e2);}
                    let {error:e3}=await supabaseClient.from('articles').delete().neq('id',0);if(e3)console.error('导入-清空articles失败:',e3);
                    if(articlesData.length>0){let {error:e4}=await supabaseClient.from('articles').insert(articlesData.map(a=>({title:a.title,content:a.content,difficulty:a.difficulty})));if(e4)console.error('导入-写入articles失败:',e4);}
                    let {error:e5}=await supabaseClient.from('settings').delete().neq('key','');if(e5)console.error('导入-清空settings失败:',e5);
                    await supabaseUpsertSetting('teacherPassword',settingsData.teacherPassword);
                    await supabaseUpsertSetting('defaultPassword',settingsData.defaultPassword);
                    let {error:e6}=await supabaseClient.from('grades').delete().neq('id',0);if(e6)console.error('导入-清空grades失败:',e6);
                    const gradesToInsert=[];
                    Object.keys(studentGrades).forEach(key=>{
                        const [cls,name]=key.split('-');
                        studentGrades[key].forEach(g=>{gradesToInsert.push({class:cls,name,date:g.date,type:g.type,wpm:g.wpm,accuracy:g.accuracy,stars:g.stars,xp:g.xp});});
                    });
                    if(gradesToInsert.length>0){let {error:e7}=await supabaseClient.from('grades').insert(gradesToInsert);if(e7)console.error('导入-写入grades失败:',e7);}
                }
                refreshStudentTable();
                refreshArticleTable();
                refreshClassDropdowns();
                showToast('数据已导入');
            }catch(e){showToast('文件格式错误','error');}
        };
        reader.readAsText(file);
    };
    input.click();
}

/* ====== 成绩自动上传（含离线补传） ====== */
function loadPendingGrades(){
    const p=localStorage.getItem('tpPendingGrades');
    if(p)try{return JSON.parse(p);}catch(e){}
    return [];
}
function savePendingGrades(arr){
    localStorage.setItem('tpPendingGrades',JSON.stringify(arr));
}
async function syncPendingGrades(){
    if(!supabaseClient)return;
    const pending=loadPendingGrades();
    if(pending.length===0)return;
    const {error}=await supabaseClient.from('grades').insert(pending);
    if(error){console.error('补传离线成绩失败:',error);return;}
    savePendingGrades([]);
    if(pending.length>0)showToast('已自动补传 '+pending.length+' 条离线成绩');
}

async function syncToSupabase(){
    if(!supabaseClient){showToast('Supabase未连接','error');return;}
    if(!confirm('确定要将所有本地数据同步到云端吗？将覆盖云端现有数据。'))return;
    showToast('正在同步数据到Supabase...');
    try{
        let {error:e1}=await supabaseClient.from('students').delete().neq('id',0);
        if(e1){showToast('清空云端学生失败','error');console.error(e1);return;}
        if(studentsData.length>0){let {error:e2}=await supabaseClient.from('students').insert(studentsData.map(s=>({class:s.class,name:s.name,password:s.password,is_default:s.isDefault})));if(e2){showToast('同步学生失败','error');console.error(e2);return;}}
        let {error:e3}=await supabaseClient.from('articles').delete().neq('id',0);
        if(e3){showToast('清空云端文章失败','error');console.error(e3);return;}
        if(articlesData.length>0){let {error:e4}=await supabaseClient.from('articles').insert(articlesData.map(a=>({title:a.title,content:a.content,difficulty:a.difficulty})));if(e4){showToast('同步文章失败','error');console.error(e4);return;}}
        let {error:e5}=await supabaseClient.from('settings').delete().neq('key','');
        if(e5){showToast('清空云端设置失败','error');console.error(e5);return;}
        await supabaseUpsertSetting('teacherPassword',settingsData.teacherPassword);
        await supabaseUpsertSetting('defaultPassword',settingsData.defaultPassword);
        let {error:e6}=await supabaseClient.from('grades').delete().neq('id',0);
        if(e6){showToast('清空云端成绩失败','error');console.error(e6);return;}
        const gradesToInsert=[];
        Object.keys(studentGrades).forEach(key=>{
            const [cls,name]=key.split('-');
            studentGrades[key].forEach(g=>{gradesToInsert.push({class:cls,name,date:g.date,type:g.type,wpm:g.wpm,accuracy:g.accuracy,stars:g.stars,xp:g.xp});});
        });
        if(gradesToInsert.length>0){let {error:e7}=await supabaseClient.from('grades').insert(gradesToInsert);if(e7){showToast('同步成绩失败','error');console.error(e7);return;}}
        showToast('所有数据已同步到云端！');
    }catch(e){showToast('同步失败：'+e.message,'error');console.error(e);}
}

/* ====== 学生修改密码 ====== */
async function changeStudentPassword(){
    const old=document.getElementById('profile-old-pwd').value;
    const nw=document.getElementById('profile-new-pwd').value;
    const cf=document.getElementById('profile-confirm-pwd').value;
    const msg=document.getElementById('profile-msg');
    if(!currentUser||currentUser.type!=='student'){msg.className='form-msg error';msg.textContent='请先登录';return;}
    const stu=studentsData.find(s=>s.class===currentUser.class&&s.name===currentUser.name);
    if(!stu){msg.className='form-msg error';msg.textContent='用户信息异常';return;}
    if(!old||!nw||!cf){msg.className='form-msg error';msg.textContent='请填写所有字段';return;}
    if(old!==stu.password){msg.className='form-msg error';msg.textContent='当前密码错误';return;}
    if(nw.length<3){msg.className='form-msg error';msg.textContent='新密码长度至少3位';return;}
    if(nw!==cf){msg.className='form-msg error';msg.textContent='两次密码不一致';return;}
    if(old===nw){msg.className='form-msg error';msg.textContent='新密码与当前密码相同';return;}
    stu.password=nw;
    stu.isDefault=false;
    saveSystemData();
    if(supabaseClient){const {error}=await supabaseClient.from('students').update({password:nw,is_default:false}).eq('id',stu.id);if(error)console.error('Supabase修改密码失败:',error);}
    document.getElementById('profile-old-pwd').value='';
    document.getElementById('profile-new-pwd').value='';
    document.getElementById('profile-confirm-pwd').value='';
    msg.className='form-msg success';
    msg.textContent='密码修改成功！';
    setTimeout(()=>{msg.textContent='';showScreen('home-screen');},1000);
}

/* ====== 问题反馈与意见 ====== */
async function submitFeedback(){
    if(!currentUser||currentUser.type!=='student'){showToast('请先登录后再反馈','error');return;}
    const category=document.getElementById('feedback-category').value;
    const content=document.getElementById('feedback-content').value.trim();
    const msg=document.getElementById('feedback-msg');
    if(!category){msg.className='form-msg error';msg.textContent='请选择反馈类型';return;}
    if(content.length<5){msg.className='form-msg error';msg.textContent='请至少输入5个字的内容';return;}
    const fb={date:new Date().toISOString(),class:currentUser.class,name:currentUser.name,category,content,status:'pending'};
    feedbacksData.unshift(fb);
    saveSystemData();
    if(supabaseClient){
        const {data,error}=await supabaseClient.from('feedbacks').insert({class:fb.class,name:fb.name,category:fb.category,content:fb.content,status:'pending'}).select();
        if(error){console.error('Supabase保存反馈失败:',error);showToast('已保存到本机，云端同步失败（教师端可能看不到）','error');}
        else if(data&&data[0]&&data[0].id){fb.id=data[0].id;saveSystemData();}
    }
    document.getElementById('feedback-content').value='';
    msg.className='form-msg success';
    msg.textContent='感谢你的反馈！老师会尽快处理～';
    setTimeout(()=>{msg.textContent='';},3000);
}
function refreshFeedbackTable(){
    const tbody=document.getElementById('feedback-tbody');
    if(!tbody)return;
    const cnt=document.getElementById('feedback-count');
    if(cnt)cnt.textContent=feedbacksData.length+'条';
    if(feedbacksData.length===0){
        tbody.innerHTML='<tr><td colspan="6" style="text-align:center;color:#9ca3af;padding:20px">暂无学生反馈</td></tr>';
        return;
    }
    const catNames={'bug':'🐞 遇到问题','suggestion':'💡 修改意见','feature':'🚀 新功能建议','other':'📝 其他'};
    tbody.innerHTML=feedbacksData.map((fb,i)=>{
        const d=new Date(fb.date);
        const time=isNaN(d.getTime())?fb.date:(d.getMonth()+1)+'月'+d.getDate()+'日 '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
        const st=fb.status==='done'?'<span style="color:#10b981;font-weight:600">✔ 已处理</span>':'<span style="color:#f59e0b;font-weight:600">⏳ 待处理</span>';
        return `<tr>
            <td>${time}</td>
            <td>${fb.class}</td>
            <td>${fb.name}</td>
            <td>${catNames[fb.category]||fb.category}</td>
            <td style="max-width:280px">${fb.content}</td>
            <td>${st} ${fb.status!=='done'?'<button class="action-btn" style="padding:4px 10px;font-size:0.8em" onclick="markFeedbackDone('+i+')">标记已处理</button>':''}</td>
        </tr>`;
    }).join('');
}
function markFeedbackDone(i){
    if(!feedbacksData[i])return;
    feedbacksData[i].status='done';
    saveSystemData();
    if(supabaseClient&&feedbacksData[i].id){
        supabaseClient.from('feedbacks').update({status:'done'}).eq('id',feedbacksData[i].id).then(r=>{if(r.error)console.error('Supabase更新反馈状态失败:',r.error);});
    }
    refreshFeedbackTable();
    showToast('已标记为已处理');
}

/* ====== 下拉框刷新 ====== */
function refreshClassDropdowns(){
    const studentClasses=[...new Set(studentsData.map(s=>s.class))];
    const allClasses=[...new Set([...defaultClasses,...studentClasses])];
    ['stu-class','login-class','bulk-class','stu-filter-class','grade-class-filter','grade-records-class'].forEach(id=>{
        const sel=document.getElementById(id);
        if(!sel)return;
        const current=sel.value;
        const firstOption=id.includes('filter')||id.includes('records-class')?'<option value="">全部班级</option>':'<option value="">选择班级</option>';
        sel.innerHTML=firstOption+allClasses.map(c=>'<option value="'+c+'">'+c+'</option>').join('');
        if(current)sel.value=current;
    });
}

/* ====== 屏幕切换 ====== */
function showScreen(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    GS.currentScreen=id;
    if(id==='touch-play-screen'){enterLandscape();}else{exitLandscape();}
    if(id==='score-screen'){updateScoreDisplay();updateBadges();}
    if(id==='home-screen'){updatePetMessage();}
    if(id==='feedback-screen'){
        const info=document.getElementById('feedback-info');
        if(info)info.value=currentUser&&currentUser.type==='student'?(currentUser.class+' · '+currentUser.name):'未登录';
        const msg=document.getElementById('feedback-msg');
        if(msg)msg.textContent='';
    }
    if(id==='login-screen'){document.getElementById('student-login-msg').textContent='';document.getElementById('teacher-login-msg').textContent='';}
    if(id==='student-profile-screen'){document.getElementById('profile-msg').textContent='';document.getElementById('profile-old-pwd').value='';document.getElementById('profile-new-pwd').value='';document.getElementById('profile-confirm-pwd').value='';}
}

/* ====== Tab切换 ====== */
function switchTab(tab){
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    document.querySelector('.tab-btn[onclick*="'+tab+'"]').classList.add('active');
    document.getElementById('tab-'+tab).classList.add('active');
    if(tab==='students'){refreshStudentTable();refreshClassDropdowns();}
    if(tab==='articles')refreshArticleTable();
    if(tab==='grades'){refreshGradeTable();refreshGradeRecords();switchGradeView('summary');refreshClassDropdowns();}
    if(tab==='feedbacks')refreshFeedbackTable();
}

/* ====== 现有打字练习功能（保持不变） ====== */
function startPractice(type){
    const diff=document.getElementById('setting-difficulty').value;
    const dur=parseInt(document.getElementById('setting-duration').value);
    GS.currentPractice=type;GS.timeLimit=dur;GS.currentIndex=0;GS.correctChars=0;GS.totalChars=0;GS.isPaused=false;GS.isFinished=false;GS.startTime=null;
    let texts=practiceData[type][diff];
    GS.currentText=Array.isArray(texts)?texts[Math.floor(Math.random()*texts.length)]:texts;
    showScreen('typing-screen');displayText();updateHint();
    clearInterval(GS.timerInterval);document.getElementById('timer').textContent='0:00';document.getElementById('progress-percent').textContent='0%';
    document.getElementById('virtual-keyboard').style.display=document.getElementById('setting-guide').checked?'block':'none';
}
function displayText(){
    const el=document.getElementById('text-content');el.innerHTML='';
    for(let i=0;i<GS.currentText.length;i++){
        const s=document.createElement('span');s.className='char '+(i===0?'current':'pending');
        s.textContent=GS.currentText[i];s.dataset.index=i;el.appendChild(s);
    }
}
function updateHint(){
    if(GS.currentIndex>=GS.currentText.length)return;
    const c=GS.currentText[GS.currentIndex];
    if(isCJKChar(c)){
        document.getElementById('hint-key').textContent=c;
        document.getElementById('hint-finger').textContent='用拼音输入此汉字';
        document.querySelectorAll('.key').forEach(k=>k.classList.remove('active'));
        return;
    }
    document.getElementById('hint-key').textContent=c===' '?'空格':c.toUpperCase();
    const f=fingerMap[c.toLowerCase()];
    document.getElementById('hint-finger').textContent=f&&fingerNames[f]?fingerNames[f]:'';
    document.querySelectorAll('.key').forEach(k=>k.classList.remove('active'));
    let sel=c===' '?'.key[data-key=" "]':c==='\''?'.key[data-key="\']"':'.key[data-key="'+c+'"]';
    const ke=document.querySelector(sel);if(ke)ke.classList.add('active');
}
function isCJKChar(c){return /[^\u0000-\u007f]/.test(c);}
let imeBuffer='';
document.addEventListener('compositionstart',function(){
    imeBuffer='';
    const sc=GS.currentScreen;
    if(sc==='touch-play-screen'){
        showToast('检测到中文输入法，请按 Shift 切换到英文输入法再打字','error');
    }else if(sc==='typing-screen'&&GS.currentText[GS.currentIndex]&&!isCJKChar(GS.currentText[GS.currentIndex])){
        showToast('检测到中文输入法，请按 Shift 切换到英文输入法再打字母','error');
    }
});
document.addEventListener('compositionupdate',function(e){imeBuffer=e.data||'';});
document.addEventListener('keydown',function(e){
    if(GS.currentScreen!=='typing-screen'||GS.isPaused||GS.isFinished)return;
    if(e.isComposing||e.key==='Process'||e.keyCode===229)return;
    const currentChar=GS.currentText[GS.currentIndex];
    if(currentChar&&isCJKChar(currentChar))return;
    e.preventDefault();e.stopPropagation();
    if(!GS.startTime){GS.startTime=Date.now();startTimer();}
    const key=e.key;
    if(key==='Backspace'){if(GS.currentIndex>0){GS.currentIndex--;const ch=document.querySelector('.char[data-index="'+GS.currentIndex+'"]');if(ch){ch.classList.remove('correct','error');ch.classList.add('current');}updateHint();}return;}
    if(key==='Shift'||key==='CapsLock'||key==='Tab'||key==='Control'||key==='Alt'||key==='Meta')return;
    GS.totalChars++;
    let ok=key===currentChar||(currentChar===' '&&key===' ')||(key.length===1&&currentChar.length===1&&key.toLowerCase()===currentChar.toLowerCase());
    if(ok){GS.correctChars++;markCorrect(GS.currentIndex);GS.currentIndex++;if(document.getElementById('setting-sound').checked)playSound('correct');if(GS.currentIndex>=GS.currentText.length){finishPractice(true);return;}
    }else{markError(GS.currentIndex);if(document.getElementById('setting-sound').checked)playSound('error');}
    updateStats();updateHint();
});
document.addEventListener('compositionend',function(e){
    if(GS.currentScreen!=='typing-screen'||GS.isPaused||GS.isFinished)return;
    const data=(e.data||imeBuffer||'').trim();
    imeBuffer='';
    if(!data||!isCJKChar(data))return;
    if(!GS.startTime){GS.startTime=Date.now();startTimer();}
    const expected=GS.currentText.substring(GS.currentIndex,GS.currentIndex+data.length);
    GS.totalChars+=data.length;
    if(data===expected){
        for(let i=0;i<data.length;i++){markCorrect(GS.currentIndex+i);}
        GS.correctChars+=data.length;
        GS.currentIndex+=data.length;
        if(document.getElementById('setting-sound').checked)playSound('correct');
        if(GS.currentIndex>=GS.currentText.length){finishPractice(true);return;}
    }else{
        markError(GS.currentIndex);
        if(document.getElementById('setting-sound').checked)playSound('error');
    }
    updateStats();updateHint();
});
document.addEventListener('keydown',function(e){
    if(GS.currentScreen!=='touch-play-screen')return;
    if(e.isComposing||e.key==='Process'||e.keyCode===229)return;
    const key=e.key;
    if(key==='Shift'||key==='CapsLock'||key==='Tab'||key==='Control'||key==='Alt'||key==='Meta')return;
    e.preventDefault();e.stopPropagation();
    if(key==='Backspace'){touchBackspace();return;}
    if(key==='Enter'||key===' '){touchSpaceTap();return;}
    if(key.length===1&&/[a-zA-Z0-9]/.test(key)){touchKeyTap(key);return;}
    if(key.length===1&&/[,\.\?!]/.test(key)&&touchState.mode==='sentence'){touchKeyTap(key);return;}
});
function playSound(t){try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=t==='correct'?800:300;g.gain.value=t==='correct'?0.1:0.15;o.start();o.stop(a.currentTime+0.1);}catch(e){}}
function markCorrect(i){const c=document.querySelector('.char[data-index="'+i+'"]');if(c){c.classList.remove('current','pending');c.classList.add('correct');}}
function markError(i){const c=document.querySelector('.char[data-index="'+i+'"]');if(c){c.classList.add('error');setTimeout(()=>c.classList.remove('error'),500);}}
function updateStats(){
    if(!GS.startTime)return;
    const t=(Date.now()-GS.startTime)/1000/60;
    const wpm=t>0?Math.round((GS.correctChars/5)/t):0;
    const acc=GS.totalChars>0?Math.round((GS.correctChars/GS.totalChars)*100):100;
    const prog=Math.round((GS.currentIndex/GS.currentText.length)*100);
    document.getElementById('wpm').textContent=wpm;document.getElementById('accuracy').textContent=acc;document.getElementById('progress-percent').textContent=prog+'%';
}
function startTimer(){
    GS.timerInterval=setInterval(()=>{
        if(GS.isPaused)return;
        const el=Math.floor((Date.now()-GS.startTime)/1000);
        const m=Math.floor(el/60),s=el%60;
        document.getElementById('timer').textContent=m+':'+String(s).padStart(2,'0');
        if(el>=GS.timeLimit)finishPractice(true);
    },1000);
}
async function finishPractice(completed){
    if(GS.isFinished)return;GS.isFinished=true;clearInterval(GS.timerInterval);
    const t=(Date.now()-GS.startTime)/1000/60;
    const wpm=t>0?Math.round((GS.correctChars/5)/t):0;
    const acc=GS.totalChars>0?Math.round((GS.correctChars/GS.totalChars)*100):100;
    let stars=0;if(acc>=80)stars++;if(acc>=90)stars++;if(wpm>=getTargetWpm())stars++;stars=Math.max(1,Math.min(3,stars));
    const xp=Math.round((wpm*acc/100)*5+stars*10);GS.xp+=xp;GS.practiceCount++;
    if(wpm>GS.bestWpm)GS.bestWpm=wpm;updatePracticeStats();
    const xn=GS.level*100;if(GS.xp>=xn){GS.level++;GS.xp-=xn;}
    checkAchievements(wpm,acc);updateStreak();saveGameState();showResult(stars,wpm,acc,xp,completed);
    if(currentUser&&currentUser.type==='student'){
        const key=currentUser.class+'-'+currentUser.name;
        if(!studentGrades[key])studentGrades[key]=[];
        const grade={date:new Date().toISOString(),type:GS.currentPractice,wpm,accuracy:acc,stars,xp};
        studentGrades[key].push(grade);
        saveSystemData();
        const gRow={class:currentUser.class,name:currentUser.name,date:grade.date,type:grade.type,wpm:grade.wpm,accuracy:grade.accuracy,stars:grade.stars,xp:grade.xp};
        if(supabaseClient){
            const {error}=await supabaseClient.from('grades').insert(gRow);
            if(error){
                console.error('Supabase保存成绩失败，已加入待同步队列:',error);
                const pending=loadPendingGrades();pending.push(gRow);savePendingGrades(pending);
                showToast('网络异常，成绩已保存，联网后自动上传','error');
            }
        }else{
            const pending=loadPendingGrades();pending.push(gRow);savePendingGrades(pending);
        }
    }
}
function updatePracticeStats(){const p=GS.currentPractice;if(p.includes('letter'))GS.practiceStats.letters++;else if(p.includes('number'))GS.practiceStats.numbers++;else if(p.includes('punctuation'))GS.practiceStats.punctuation++;else GS.practiceStats.mixed++;}
function getTargetWpm(){const d=document.getElementById('setting-difficulty').value;return d==='easy'?15:d==='medium'?20:25;}
function showResult(stars,wpm,acc,xp,completed){
    const ic=document.getElementById('result-icon'),ti=document.getElementById('result-title'),msg=document.getElementById('result-message');
    if(!completed){ic.textContent='😅';ti.textContent='继续努力！';msg.textContent='别灰心，多练习就会进步的！';}
    else if(stars===3){ic.textContent='🎉';ti.textContent='太棒了！';msg.textContent='你真是太厉害了！继续保持！';}
    else if(stars===2){ic.textContent='👏';ti.textContent='做得不错！';msg.textContent='再接再厉，争取三星！';}
    else{ic.textContent='💪';ti.textContent='练习完成！';msg.textContent='继续加油，你会越来越好的！';}
    document.getElementById('result-stars').textContent='⭐'.repeat(stars);
    document.getElementById('result-wpm').textContent=wpm+' WPM';document.getElementById('result-accuracy').textContent=acc+'%';
    document.getElementById('result-time').textContent=document.getElementById('timer').textContent;
    document.getElementById('result-xp').textContent='+'+xp+' XP';
    document.getElementById('result-modal').classList.add('active');
}
function checkAchievements(wpm,acc){
    if(!GS.achievements.first&&GS.practiceCount>=1){GS.achievements.first=true;showNotif('初次练习');}
    if(!GS.achievements.speed&&wpm>=25){GS.achievements.speed=true;showNotif('速度之星');}
    if(!GS.achievements.accuracy&&acc>=95){GS.achievements.accuracy=true;showNotif('精准达人');}
    if(!GS.achievements.punctuation&&GS.currentPractice&&GS.currentPractice.includes('punctuation')&&acc>=90){GS.achievements.punctuation=true;showNotif('标点大师');}
    if(!GS.achievements.streak&&GS.streakCount>=3){GS.achievements.streak=true;showNotif('连续练习');}
    const s=GS.practiceStats;if(!GS.achievements.all&&s.letters>0&&s.numbers>0&&s.punctuation>0&&s.mixed>0){GS.achievements.all=true;showNotif('全能选手');}
}
function showNotif(name){
    const n=document.createElement('div');n.style.cssText='position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:white;padding:12px 20px;border-radius:10px;font-weight:bold;z-index:2000;box-shadow:0 5px 20px rgba(251,191,36,0.4);animation:popIn 0.3s ease';
    n.textContent='🏅 成就解锁：'+name;document.body.appendChild(n);setTimeout(()=>n.remove(),3000);
}
function updateStreak(){
    const today=new Date().toDateString();
    if(GS.lastPracticeDate===today)return;
    const y=new Date();y.setDate(y.getDate()-1);
    if(GS.lastPracticeDate===y.toDateString())GS.streakCount++;else if(GS.lastPracticeDate!==today)GS.streakCount=1;
    GS.lastPracticeDate=today;
}
function pausePractice(){GS.isPaused=true;document.getElementById('pause-modal').classList.add('active');}
function resumePractice(){GS.isPaused=false;document.getElementById('pause-modal').classList.remove('active');}
function restartPractice(){document.getElementById('result-modal').classList.remove('active');startPractice(GS.currentPractice);}
function exitPractice(){clearInterval(GS.timerInterval);document.getElementById('result-modal').classList.remove('active');showScreen('practice-screen');}
function closeResultAndGo(id){document.getElementById('result-modal').classList.remove('active');showScreen(id);}
function updateScoreDisplay(){
    document.getElementById('score-level').textContent='Lv.'+GS.level+' '+getLevelTitle();
    const xn=GS.level*100;document.getElementById('score-xp').textContent=GS.xp+' / '+xn+' XP';
    document.getElementById('score-xp-fill').style.width=(GS.xp/xn*100)+'%';
    document.getElementById('score-best-wpm').textContent=GS.bestWpm+' WPM';
    document.getElementById('score-count').textContent=GS.practiceCount+' 次';
    const mx=Math.max(GS.practiceStats.letters,GS.practiceStats.numbers,GS.practiceStats.punctuation,GS.practiceStats.mixed,1);
    document.getElementById('stat-letters').style.width=(GS.practiceStats.letters/mx*100)+'%';
    document.getElementById('stat-numbers').style.width=(GS.practiceStats.numbers/mx*100)+'%';
    document.getElementById('stat-punctuation').style.width=(GS.practiceStats.punctuation/mx*100)+'%';
    document.getElementById('stat-mixed').style.width=(GS.practiceStats.mixed/mx*100)+'%';
    document.getElementById('stat-letters-count').textContent=GS.practiceStats.letters+'次';
    document.getElementById('stat-numbers-count').textContent=GS.practiceStats.numbers+'次';
    document.getElementById('stat-punctuation-count').textContent=GS.practiceStats.punctuation+'次';
    document.getElementById('stat-mixed-count').textContent=GS.practiceStats.mixed+'次';
    updateMyRecent();
    updateClassRanking();
}
function updateClassRanking(){
    const tbody=document.getElementById('class-rank-tbody');
    if(!tbody)return;
    if(!currentUser||currentUser.type!=='student'){
        tbody.innerHTML='<tr><td colspan="6" style="text-align:center;color:#9ca3af;padding:20px">请先登录后再查看</td></tr>';
        return;
    }
    const myClass=currentUser.class;
    let rows=[];
    studentsData.forEach(stu=>{
        if(stu.class!==myClass)return;
        const grades=studentGrades[stu.class+'-'+stu.name]||[];
        const avgWpm=grades.length>0?Math.round(grades.reduce((s,g)=>s+g.wpm,0)/grades.length):0;
        const avgAcc=grades.length>0?Math.round(grades.reduce((s,g)=>s+g.accuracy,0)/grades.length):0;
        const maxWpm=grades.length>0?Math.max(...grades.map(g=>g.wpm)):0;
        rows.push({name:stu.name,count:grades.length,avgWpm,avgAcc,maxWpm,isMe:stu.name===currentUser.name});
    });
    rows.sort((a,b)=>b.avgWpm-a.avgWpm||b.maxWpm-a.maxWpm||b.count-a.count);
    if(rows.length===0){
        tbody.innerHTML='<tr><td colspan="6" style="text-align:center;color:#9ca3af;padding:20px">暂无本班同学成绩数据</td></tr>';
        return;
    }
    tbody.innerHTML=rows.map((r,i)=>{
        const rank=['🥇','🥈','🥉'][i]||(i+1);
        return `<tr${r.isMe?' style="background:#eef2ff;font-weight:bold"':''}>
            <td>${rank}</td>
            <td>${r.name}${r.isMe?' (我)':''}</td>
            <td>${r.count}次</td>
            <td class="grade-wpm">${r.avgWpm} WPM</td>
            <td class="grade-acc">${r.avgAcc}%</td>
            <td>${r.maxWpm} WPM</td>
        </tr>`;
    }).join('');
}
function updateMyRecent(){
    const tbody=document.getElementById('my-recent-tbody');
    if(!tbody)return;
    if(!currentUser||currentUser.type!=='student'){
        tbody.innerHTML='<tr><td colspan="5" style="text-align:center;color:#9ca3af;padding:20px">请先登录后再查看</td></tr>';
        return;
    }
    const key=currentUser.class+'-'+currentUser.name;
    const grades=(studentGrades[key]||[]).slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,10);
    if(grades.length===0){
        tbody.innerHTML='<tr><td colspan="5" style="text-align:center;color:#9ca3af;padding:20px">还没有练习记录，快去练习吧！</td></tr>';
        return;
    }
    tbody.innerHTML=grades.map(g=>{
        const d=new Date(g.date);
        return `<tr><td>${formatDateTime(d)}</td><td>${gradeTypeNames[g.type]||g.type}</td><td class="grade-wpm">${g.wpm} WPM</td><td class="grade-acc">${g.accuracy}%</td><td>${'⭐'.repeat(g.stars)}</td></tr>`;
    }).join('');
}
function getLevelTitle(){const t=['打字新手','键盘学徒','打字达人','速度之星','打字高手','键盘大师','打字专家','打字王者','键盘传说','打字之神'];return t[Math.min(GS.level-1,t.length-1)];}
function updateBadges(){Object.keys(GS.achievements).forEach(k=>{const b=document.getElementById('badge-'+k);if(b){b.classList.toggle('unlocked',GS.achievements[k]);b.classList.toggle('locked',!GS.achievements[k]);}});}
function updatePetMessage(){const m=['快乐打字，天天进步！','今天想练习什么呢？','坚持练习会越来越棒！','加油，你是最棒的！'];document.getElementById('tip-text').textContent=m[Math.floor(Math.random()*m.length)];}
function saveGameState(){localStorage.setItem('typingPracticeState',JSON.stringify({xp:GS.xp,level:GS.level,bestWpm:GS.bestWpm,practiceCount:GS.practiceCount,practiceStats:GS.practiceStats,achievements:GS.achievements,streakCount:GS.streakCount,lastPracticeDate:GS.lastPracticeDate}));}
function loadGameState(){const s=localStorage.getItem('typingPracticeState');if(s){try{const d=JSON.parse(s);Object.assign(GS,{xp:d.xp||0,level:d.level||1,bestWpm:d.bestWpm||0,practiceCount:d.practiceCount||0,practiceStats:d.practiceStats||GS.practiceStats,achievements:d.achievements||GS.achievements,streakCount:d.streakCount||0,lastPracticeDate:d.lastPracticeDate||null});}catch(e){}}}
function resetAllData(){if(confirm('确定要重置所有练习数据吗？')){localStorage.removeItem('typingPracticeState');location.reload();}}

/* ====== 打字游戏 ====== */
const gameWords=['cat','dog','sun','run','big','red','hot','fun','yes','how','the','and','for','are','but','not','you','all','can','her','was','one','our','out','day','get','has','him','his','how','its','let','may','new','now','old','see','way','who','boy','did','let','say','she','too','use','map','box','cup','pen','ten','six','try','ask','men','far','end','big','few','job','lay','own','put','ran','set','ask','buy','cut','eat','eye','fly','got','had','hit','ice','ill','kid','low','mix','nor','off','oil','own','pay','raw','red','saw','sit','top','up','van','war','yet','zip','zoo'];
function startGame(type){
    gameType=type;gameScore=0;gameCorrect=0;gameTimeLeft=30;
    document.getElementById('game-score').textContent='得分: 0';
    document.getElementById('game-time').textContent='时间: 30s';
    showScreen('gameplay-screen');
    document.querySelectorAll('.game-area').forEach(a=>a.style.display='none');
    document.getElementById('game-'+type).style.display='block';
    const titles={race:'🏎️ 打字赛车',bubble:'🫧 泡泡大作战',star:'🌟 摘星星'};
    document.getElementById('game-title').textContent=titles[type]||'打字游戏';
    if(type==='race')initRace();else if(type==='bubble')initBubble();else if(type==='star')initStar();
    gameInterval=setInterval(()=>{gameTimeLeft--;document.getElementById('game-time').textContent='时间: '+gameTimeLeft+'s';if(gameTimeLeft<=0)endGame();},1000);
}
function initRace(){
    document.getElementById('race-player').style.left='10%';
    document.querySelectorAll('.cpu-car').forEach(c=>c.style.left='10%');
    const area=document.getElementById('game-race');
    let kb=area.querySelector('.game-keyboard');
    if(!kb){
        kb=document.createElement('div');kb.className='keyboard game-keyboard';
        kb.style.cssText='margin-top:12px;padding:10px';
        const rows=['qwertyuiop','asdfghjkl','zxcvbnm'];
        rows.forEach(r=>{const row=document.createElement('div');row.className='keyboard-row';r.split('').forEach(l=>{const k=document.createElement('div');k.className='key game-keys';k.textContent=l.toUpperCase();k.dataset.gameKey=l;k.addEventListener('click',()=>handleGameKey(l));row.appendChild(k);});kb.appendChild(row);});
        area.appendChild(kb);
    }
    nextRaceWord();
}
function nextRaceWord(){const letters='abcdefghijklmnopqrstuvwxyz';const l=letters[Math.floor(Math.random()*26)];gameTarget=l;document.getElementById('race-target').textContent='按字母: '+l.toUpperCase();document.querySelectorAll('.game-keys').forEach(k=>k.classList.toggle('active',k.dataset.gameKey===gameTarget));}
function initBubble(){
    const bc=document.getElementById('bubble-container');bc.innerHTML='';
    const letters='abcdefghijklmnopqrstuvwxyz'.split('').sort(()=>Math.random()-0.5).slice(0,6);
    letters.forEach(letter=>{const b=document.createElement('div');b.className='bubble';b.style.left=Math.random()*85+'%';b.style.top=Math.random()*70+'%';b.style.animationDelay=Math.random()*2+'s';b.textContent=letter.toUpperCase();b.dataset.letter=letter;bc.appendChild(b);});
    nextBubbleTarget();
}
function nextBubbleTarget(){const bubbles=document.querySelectorAll('.bubble');if(bubbles.length===0){gameScore+=50;document.getElementById('game-score').textContent='得分: '+gameScore;initBubble();return;}gameTarget=bubbles[0].dataset.letter;document.getElementById('bubble-target').textContent=gameTarget.toUpperCase();}
function initStar(){
    const sc=document.getElementById('star-container');sc.innerHTML='';const letters='abcdefghijklmnopqrstuvwxyz';
    let badge=document.createElement('div');badge.className='star-target-badge';badge.style.cssText='position:absolute;top:12px;right:12px;background:rgba(251,191,36,0.9);color:#1e1b4b;padding:8px 16px;border-radius:10px;font-weight:bold;font-size:1.3em;z-index:5;box-shadow:0 0 15px rgba(251,191,36,0.5)';sc.appendChild(badge);
    for(let i=0;i<8;i++){const s=document.createElement('div');s.className='star-item';s.style.left=Math.random()*85+'%';s.style.top=Math.random()*65+'%';const starLetter=letters[Math.floor(Math.random()*26)];s.textContent=starLetter.toUpperCase();s.dataset.letter=starLetter;s.style.animationDelay=Math.random()*2+'s';sc.appendChild(s);}
    nextStarTarget();
}
function nextStarTarget(){const stars=document.querySelectorAll('.star-item');if(stars.length===0){gameScore+=100;document.getElementById('game-score').textContent='得分: '+gameScore;initStar();return;}gameTarget=stars[0].dataset.letter;document.getElementById('star-target').textContent=gameTarget.toUpperCase()+' ⭐';const badge=document.querySelector('.star-target-badge');if(badge)badge.textContent='目标: '+gameTarget.toUpperCase();}
function handleGameKey(key){
    if(GS.currentScreen!=='gameplay-screen'||gameTimeLeft<=0)return;
    if(key===gameTarget){
        gameCorrect++;gameScore+=10;document.getElementById('game-score').textContent='得分: '+gameScore;
        if(document.getElementById('setting-sound').checked)playSound('correct');
        if(gameType==='race'){const player=document.getElementById('race-player');const cur=parseFloat(player.style.left)||10;player.style.left=Math.min(cur+8,75)+'%';document.querySelectorAll('.cpu-car').forEach(c=>{const cl=parseFloat(c.style.left)||10;c.style.left=Math.min(cl+Math.random()*5,75)+'%';});if(cur>=70){gameScore+=50;document.getElementById('game-score').textContent='得分: '+gameScore;player.style.left='10%';}nextRaceWord();
        }else if(gameType==='bubble'){const b=document.querySelector('.bubble');if(b){b.style.transform='scale(1.5)';b.style.opacity='0';setTimeout(()=>{b.remove();nextBubbleTarget();},300);}else{nextBubbleTarget();}
        }else if(gameType==='star'){const s=document.querySelector('.star-item');if(s){s.style.transform='scale(1.5)';s.style.opacity='0';setTimeout(()=>s.remove(),300);}nextStarTarget();}
    }else{if(document.getElementById('setting-sound').checked)playSound('error');}
}
document.addEventListener('keydown',function(e){
    if(GS.currentScreen!=='gameplay-screen')return;if(gameTimeLeft<=0)return;
    e.preventDefault();
    var key=e.key;
    if(key===undefined||key==='Process'||key==='Dead'||key.length!==1){
        var code=e.which||e.keyCode;
        if(code>=65&&code<=90)key=String.fromCharCode(code);
        else if(code===32)key=' ';
        else return;
    }
    handleGameKey(key.toLowerCase());
});
function endGame(){clearInterval(gameInterval);gameInterval=null;const stars=gameScore>=100?3:gameScore>=50?2:1;document.getElementById('gameover-stars').textContent='⭐'.repeat(stars);document.getElementById('gameover-score').textContent=gameScore;document.getElementById('gameover-correct').textContent=gameCorrect;const msgs=['继续加油！','很棒！','太厉害了！'];document.getElementById('gameover-msg').textContent=msgs[stars-1];document.getElementById('gameover-modal').classList.add('active');}
function exitGame(){clearInterval(gameInterval);gameInterval=null;document.getElementById('gameover-modal').classList.remove('active');showScreen('game-screen');}
function restartCurrentGame(){document.getElementById('gameover-modal').classList.remove('active');if(gameType)startGame(gameType);}
function closeGameOverAndGo(id){document.getElementById('gameover-modal').classList.remove('active');showScreen(id);}

/* ====== 触屏练习 ====== */
const pinyinWords=[
    {char:'我',pinyin:'wo'},{char:'你',pinyin:'ni'},{char:'他',pinyin:'ta'},{char:'好',pinyin:'hao'},
    {char:'大',pinyin:'da'},{char:'小',pinyin:'xiao'},{char:'人',pinyin:'ren'},{char:'山',pinyin:'shan'},
    {char:'水',pinyin:'shui'},{char:'花',pinyin:'hua'},{char:'天',pinyin:'tian'},{char:'日',pinyin:'ri'},
    {char:'月',pinyin:'yue'},{char:'星',pinyin:'xing'},{char:'风',pinyin:'feng'},{char:'云',pinyin:'yun'},
    {char:'雨',pinyin:'yu'},{char:'春',pinyin:'chun'},{char:'夏',pinyin:'xia'},{char:'秋',pinyin:'qiu'},
    {char:'冬',pinyin:'dong'},{char:'开',pinyin:'kai'},{char:'上',pinyin:'shang'},{char:'下',pinyin:'xia'},
    {char:'中',pinyin:'zhong'},{char:'国',pinyin:'guo'},{char:'家',pinyin:'jia'},{char:'学',pinyin:'xue'},
    {char:'校',pinyin:'xiao'},{char:'老',pinyin:'lao'},{char:'师',pinyin:'shi'},{char:'书',pinyin:'shu'},
    {char:'画',pinyin:'hua'},{char:'读',pinyin:'du'},{char:'写',pinyin:'xie'},{char:'唱',pinyin:'chang'},
    {char:'跳',pinyin:'tiao'},{char:'跑',pinyin:'pao'},{char:'走',pinyin:'zou'},{char:'看',pinyin:'kan'},
    {char:'听',pinyin:'ting'},{char:'说',pinyin:'shuo'},{char:'吃',pinyin:'chi'},{char:'喝',pinyin:'he'},
    {char:'玩',pinyin:'wan'},{char:'飞',pinyin:'fei'},{char:'鱼',pinyin:'yu'},{char:'马',pinyin:'ma'},
    {char:'牛',pinyin:'niu'},{char:'羊',pinyin:'yang'},{char:'猫',pinyin:'mao'},{char:'狗',pinyin:'gou'},
    {char:'爸',pinyin:'ba'},{char:'妈',pinyin:'ma'},{char:'哥',pinyin:'ge'},{char:'姐',pinyin:'jie'},
    {char:'弟',pinyin:'di'},{char:'妹',pinyin:'mei'},{char:'鸟',pinyin:'niao'},{char:'鱼',pinyin:'yu'},
    {char:'花',pinyin:'hua'},{char:'草',pinyin:'cao'},{char:'树',pinyin:'shu'},{char:'叶',pinyin:'ye'}
];
const englishWordGrades={
    g3:{name:'三年级',icon:'🌱',levels:[
        {name:'文具与问候',words:[{en:'pen',cn:'钢笔'},{en:'pencil',cn:'铅笔'},{en:'ruler',cn:'尺子'},{en:'eraser',cn:'橡皮'},{en:'crayon',cn:'蜡笔'},{en:'bag',cn:'书包'},{en:'book',cn:'书'},{en:'hello',cn:'你好'},{en:'hi',cn:'嗨'},{en:'goodbye',cn:'再见'}]},
        {name:'缤纷颜色',words:[{en:'red',cn:'红色'},{en:'yellow',cn:'黄色'},{en:'green',cn:'绿色'},{en:'blue',cn:'蓝色'},{en:'black',cn:'黑色'},{en:'white',cn:'白色'},{en:'orange',cn:'橙色'},{en:'brown',cn:'棕色'},{en:'pink',cn:'粉色'},{en:'grey',cn:'灰色'}]},
        {name:'我的身体',words:[{en:'head',cn:'头'},{en:'face',cn:'脸'},{en:'nose',cn:'鼻子'},{en:'mouth',cn:'嘴巴'},{en:'eye',cn:'眼睛'},{en:'ear',cn:'耳朵'},{en:'hand',cn:'手'},{en:'arm',cn:'手臂'},{en:'leg',cn:'腿'},{en:'foot',cn:'脚'}]},
        {name:'可爱动物',words:[{en:'cat',cn:'猫'},{en:'dog',cn:'狗'},{en:'duck',cn:'鸭子'},{en:'pig',cn:'猪'},{en:'bear',cn:'熊'},{en:'bird',cn:'鸟'},{en:'fish',cn:'鱼'},{en:'panda',cn:'熊猫'},{en:'monkey',cn:'猴子'},{en:'tiger',cn:'老虎'}]},
        {name:'数字天地',words:[{en:'one',cn:'一'},{en:'two',cn:'二'},{en:'three',cn:'三'},{en:'four',cn:'四'},{en:'five',cn:'五'},{en:'six',cn:'六'},{en:'seven',cn:'七'},{en:'eight',cn:'八'},{en:'nine',cn:'九'},{en:'ten',cn:'十'}]},
        {name:'美味食物',words:[{en:'cake',cn:'蛋糕'},{en:'bread',cn:'面包'},{en:'egg',cn:'鸡蛋'},{en:'milk',cn:'牛奶'},{en:'water',cn:'水'},{en:'juice',cn:'果汁'},{en:'rice',cn:'米饭'},{en:'meat',cn:'肉'},{en:'noodle',cn:'面条'},{en:'fish',cn:'鱼'}]}
    ]},
    g4:{name:'四年级',icon:'🌿',levels:[
        {name:'我的教室',words:[{en:'classroom',cn:'教室'},{en:'window',cn:'窗户'},{en:'door',cn:'门'},{en:'picture',cn:'图画'},{en:'board',cn:'黑板'},{en:'light',cn:'灯'},{en:'computer',cn:'电脑'},{en:'fan',cn:'风扇'},{en:'wall',cn:'墙壁'},{en:'floor',cn:'地板'}]},
        {name:'我的书包',words:[{en:'schoolbag',cn:'书包'},{en:'notebook',cn:'笔记本'},{en:'storybook',cn:'故事书'},{en:'toy',cn:'玩具'},{en:'key',cn:'钥匙'},{en:'candy',cn:'糖果'},{en:'kite',cn:'风筝'},{en:'maths',cn:'数学'},{en:'english',cn:'英语'},{en:'chinese',cn:'语文'}]},
        {name:'朋友与家庭',words:[{en:'friend',cn:'朋友'},{en:'tall',cn:'高的'},{en:'short',cn:'矮的'},{en:'strong',cn:'强壮的'},{en:'quiet',cn:'文静的'},{en:'family',cn:'家庭'},{en:'parents',cn:'父母'},{en:'uncle',cn:'叔叔'},{en:'aunt',cn:'阿姨'},{en:'baby',cn:'婴儿'}]},
        {name:'我的家',words:[{en:'home',cn:'家'},{en:'bedroom',cn:'卧室'},{en:'kitchen',cn:'厨房'},{en:'bathroom',cn:'卫生间'},{en:'study',cn:'书房'},{en:'sofa',cn:'沙发'},{en:'fridge',cn:'冰箱'},{en:'phone',cn:'电话'},{en:'table',cn:'桌子'},{en:'room',cn:'房间'}]},
        {name:'晚餐时光',words:[{en:'beef',cn:'牛肉'},{en:'chicken',cn:'鸡肉'},{en:'vegetable',cn:'蔬菜'},{en:'soup',cn:'汤'},{en:'knife',cn:'刀'},{en:'fork',cn:'叉子'},{en:'spoon',cn:'勺子'},{en:'chopsticks',cn:'筷子'},{en:'bowl',cn:'碗'},{en:'dinner',cn:'晚餐'}]},
        {name:'职业梦想',words:[{en:'teacher',cn:'老师'},{en:'student',cn:'学生'},{en:'doctor',cn:'医生'},{en:'nurse',cn:'护士'},{en:'driver',cn:'司机'},{en:'farmer',cn:'农民'},{en:'cook',cn:'厨师'},{en:'worker',cn:'工人'},{en:'police',cn:'警察'},{en:'singer',cn:'歌手'}]}
    ]},
    g5:{name:'五年级',icon:'🌳',levels:[
        {name:'一周七天',words:[{en:'monday',cn:'星期一'},{en:'tuesday',cn:'星期二'},{en:'wednesday',cn:'星期三'},{en:'thursday',cn:'星期四'},{en:'friday',cn:'星期五'},{en:'saturday',cn:'星期六'},{en:'sunday',cn:'星期日'},{en:'week',cn:'星期'},{en:'weekend',cn:'周末'},{en:'today',cn:'今天'}]},
        {name:'课程活动',words:[{en:'music',cn:'音乐'},{en:'art',cn:'美术'},{en:'science',cn:'科学'},{en:'swimming',cn:'游泳'},{en:'dancing',cn:'跳舞'},{en:'singing',cn:'唱歌'},{en:'drawing',cn:'画画'},{en:'reading',cn:'阅读'},{en:'writing',cn:'书写'},{en:'playing',cn:'玩耍'}]},
        {name:'美丽自然',words:[{en:'river',cn:'河流'},{en:'lake',cn:'湖泊'},{en:'mountain',cn:'高山'},{en:'tree',cn:'树'},{en:'flower',cn:'花'},{en:'grass',cn:'草'},{en:'cloud',cn:'云朵'},{en:'sky',cn:'天空'},{en:'forest',cn:'森林'},{en:'park',cn:'公园'}]},
        {name:'四季天气',words:[{en:'spring',cn:'春天'},{en:'summer',cn:'夏天'},{en:'autumn',cn:'秋天'},{en:'winter',cn:'冬天'},{en:'hot',cn:'炎热的'},{en:'cold',cn:'寒冷的'},{en:'warm',cn:'温暖的'},{en:'cool',cn:'凉爽的'},{en:'sunny',cn:'晴朗的'},{en:'rainy',cn:'下雨的'}]},
        {name:'衣物穿搭',words:[{en:'shirt',cn:'衬衫'},{en:'skirt',cn:'短裙'},{en:'dress',cn:'连衣裙'},{en:'coat',cn:'外套'},{en:'sweater',cn:'毛衣'},{en:'socks',cn:'袜子'},{en:'shoes',cn:'鞋子'},{en:'hat',cn:'帽子'},{en:'shorts',cn:'短裤'},{en:'scarf',cn:'围巾'}]},
        {name:'快乐运动',words:[{en:'running',cn:'跑步'},{en:'jumping',cn:'跳跃'},{en:'football',cn:'足球'},{en:'basketball',cn:'篮球'},{en:'tennis',cn:'网球'},{en:'volleyball',cn:'排球'},{en:'skiing',cn:'滑雪'},{en:'riding',cn:'骑行'},{en:'skating',cn:'滑冰'},{en:'sports',cn:'运动'}]}
    ]}
};
let touchState={mode:null,items:[],index:0,score:0,total:0,correct:0,typed:'',shiftOn:false,capsOn:false,wordGrade:'g3',wordLevel:1};

const englishSentenceGrades={
    g3:{name:'三年级',icon:'🌱',sentences:[
        {en:'Hello, I am Mike.',cn:'你好，我是迈克。'},
        {en:'What is your name?',cn:'你叫什么名字？'},
        {en:'Nice to meet you.',cn:'很高兴见到你。'},
        {en:'I have a red pen.',cn:'我有一支红色的钢笔。'},
        {en:'How old are you?',cn:'你多大了？'},
        {en:'I like apples.',cn:'我喜欢苹果。'},
        {en:'Look at my cat.',cn:'看看我的猫。'},
        {en:'Good morning, Miss White.',cn:'早上好，怀特老师。'},
        {en:'Let us go to school.',cn:'让我们去上学吧。'},
        {en:'This is my bag.',cn:'这是我的书包。'}
    ]},
    g4:{name:'四年级',icon:'🌿',sentences:[
        {en:'My schoolbag is heavy.',cn:'我的书包很重。'},
        {en:'She is my best friend.',cn:'她是我最好的朋友。'},
        {en:'Welcome to my home.',cn:'欢迎来我家。'},
        {en:'Dinner is ready.',cn:'晚饭准备好了。'},
        {en:'What colour is your desk?',cn:'你的桌子是什么颜色？'},
        {en:'Let me clean the room.',cn:'让我来打扫房间。'},
        {en:'My uncle is a doctor.',cn:'我叔叔是一名医生。'},
        {en:'I like milk and eggs.',cn:'我喜欢牛奶和鸡蛋。'},
        {en:'Where is the classroom?',cn:'教室在哪里？'},
        {en:'This is a big picture.',cn:'这是一幅很大的图画。'}
    ]},
    g5:{name:'五年级',icon:'🌳',sentences:[
        {en:'I have English class today.',cn:'我今天有英语课。'},
        {en:'What day is it today?',cn:'今天是星期几？'},
        {en:'We play sports after school.',cn:'放学后我们做运动。'},
        {en:'The weather is sunny today.',cn:'今天天气晴朗。'},
        {en:'There is a big tree in the park.',cn:'公园里有一棵大树。'},
        {en:'Do you like fish?',cn:'你喜欢鱼吗？'},
        {en:'My brother likes drawing.',cn:'我哥哥喜欢画画。'},
        {en:'It is spring now.',cn:'现在是春天。'},
        {en:'What do you do on Sundays?',cn:'你星期天做什么？'},
        {en:'I am reading a story book.',cn:'我正在读一本故事书。'}
    ]}
};

function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function startTouchPractice(mode){
    touchState.mode=mode;touchState.score=0;touchState.total=0;touchState.correct=0;touchState.typed='';touchState.shiftOn=false;touchState.capsOn=false;updateKeyboardCase();
    if(mode==='letter'){
        touchState.items=shuffleArray([...'abcdefghijklmnopqrstuvwxyz']);
        document.getElementById('touch-mode-title').textContent='🔤 字母定位';
        document.getElementById('touch-letter-area').style.display='block';
        document.getElementById('touch-pinyin-area').style.display='none';
        document.getElementById('touch-word-area').style.display='none';
    }else if(mode==='word'){
        document.getElementById('word-grade-modal').classList.add('active');
        return;
    }else if(mode==='sentence'){
        document.getElementById('sentence-grade-modal').classList.add('active');
        return;
    }else{
        touchState.items=shuffleArray([...pinyinWords]);
        document.getElementById('touch-mode-title').textContent='🀄 拼音打字';
        document.getElementById('touch-letter-area').style.display='none';
        document.getElementById('touch-pinyin-area').style.display='block';
        document.getElementById('touch-word-area').style.display='none';
    }
    touchState.index=0;
    showScreen('touch-play-screen');
    showTouchTarget();
    try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(function(){});}catch(e){}
}
function chooseWordGrade(grade){
    touchState.wordGrade=grade;
    document.getElementById('word-grade-modal').classList.remove('active');
    buildWordLevelGrid();
    document.getElementById('word-level-title').textContent=englishWordGrades[grade].icon+' '+englishWordGrades[grade].name+' · 选择关卡';
    document.getElementById('word-level-modal').classList.add('active');
}
function buildWordLevelGrid(){
    const grid=document.getElementById('word-level-grid');
    const grade=englishWordGrades[touchState.wordGrade];
    grid.innerHTML=grade.levels.map((lv,i)=>{
        return '<button class="level-btn" onclick="chooseWordLevel('+(i+1)+')">第 '+(i+1)+' 关<span class="level-name">'+lv.name+'</span></button>';
    }).join('');
}
function chooseWordLevel(level){
    document.getElementById('word-level-modal').classList.remove('active');
    const grade=englishWordGrades[touchState.wordGrade];
    const lv=grade.levels[level-1];
    touchState.wordLevel=level;
    touchState.items=shuffleArray([...lv.words]);
    touchState.index=0;touchState.score=0;touchState.total=0;touchState.correct=0;touchState.typed='';touchState.shiftOn=false;touchState.capsOn=false;updateKeyboardCase();
    document.getElementById('touch-mode-title').textContent=grade.icon+' 英文单词 · '+grade.name+'第'+level+'关';
    document.getElementById('touch-letter-area').style.display='none';
    document.getElementById('touch-pinyin-area').style.display='none';
    document.getElementById('touch-word-area').style.display='block';
    document.getElementById('touch-next-level-btn').style.display='none';
    showScreen('touch-play-screen');
    showTouchTarget();
    try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(function(){});}catch(e){}
}
function chooseSentenceGrade(grade){
    touchState.wordGrade=grade;
    document.getElementById('sentence-grade-modal').classList.remove('active');
    const g=englishSentenceGrades[grade];
    touchState.items=shuffleArray([...g.sentences]);
    touchState.index=0;touchState.score=0;touchState.total=0;touchState.correct=0;touchState.typed='';touchState.shiftOn=false;touchState.capsOn=false;updateKeyboardCase();
    document.getElementById('touch-mode-title').textContent=g.icon+' 英文短句 · '+g.name;
    document.getElementById('touch-letter-area').style.display='none';
    document.getElementById('touch-pinyin-area').style.display='none';
    document.getElementById('touch-word-area').style.display='block';
    document.getElementById('touch-next-level-btn').style.display='none';
    showScreen('touch-play-screen');
    showTouchTarget();
    try{if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(function(){});}catch(e){}
}

function showTouchTarget(){
    if(touchState.index>=touchState.items.length){stopTouchSpeech();showTouchResult();return;}
    touchState.typed='';
    if(touchState.mode==='letter'){
        stopTouchSpeech();
        const letter=touchState.items[touchState.index];
        document.getElementById('touch-target').textContent=letter.toUpperCase();
        document.getElementById('touch-progress').textContent='第 '+(touchState.index+1)+' / '+touchState.items.length+' 个字母';
    }else if(touchState.mode==='word'){
        const grade=englishWordGrades[touchState.wordGrade];
        const word=touchState.items[touchState.index];
        document.getElementById('touch-word-level').textContent=grade.name+' · 第'+touchState.wordLevel+'关「'+grade.levels[touchState.wordLevel-1].name+'」';
        document.getElementById('touch-word-target').textContent=word.en;
        document.getElementById('touch-word-cn').textContent='中文意思：'+word.cn;
        document.getElementById('touch-word-typed').textContent='';
        document.getElementById('touch-word-progress').textContent='第 '+(touchState.index+1)+' / '+touchState.items.length+' 个单词';
        startTouchSpeech();
    }else if(touchState.mode==='sentence'){
        const grade=englishSentenceGrades[touchState.wordGrade];
        const s=touchState.items[touchState.index];
        document.getElementById('touch-word-level').textContent=grade.icon+' '+grade.name+' · 英文短句';
        document.getElementById('touch-word-target').textContent=s.en;
        document.getElementById('touch-word-cn').textContent='中文意思：'+s.cn;
        document.getElementById('touch-word-typed').textContent='';
        document.getElementById('touch-word-progress').textContent='第 '+(touchState.index+1)+' / '+touchState.items.length+' 个句子';
        startTouchSpeech();
    }else{
        stopTouchSpeech();
        const word=touchState.items[touchState.index];
        document.getElementById('touch-target-char').textContent=word.char;
        document.getElementById('touch-pinyin-guide').textContent='拼音：'+word.pinyin;
        document.getElementById('touch-pinyin-typed').textContent='';
        document.getElementById('touch-pinyin-progress').textContent='第 '+(touchState.index+1)+' / '+touchState.items.length+' 个汉字';
    }
    const wt=document.getElementById('touch-word-target');
    if(touchState.mode==='sentence'){wt.classList.add('touch-sentence-target');}else{wt.classList.remove('touch-sentence-target');}
    document.getElementById('touch-score').textContent=touchState.score+'分';
    resetTouchKeys();
    updateKeyboardCase();
}
let touchSpeechTimer=null;
let touchSpeechOn=false;
let touchAudio=null;
function setTouchSoundBtn(on){
    const b=document.getElementById('touch-sound-btn');
    if(b){if(on)b.classList.add('speaking');else b.classList.remove('speaking');}
}
function getTouchAudio(){
    if(!touchAudio){
        touchAudio=new Audio();
        touchAudio.preload='auto';
        touchAudio.addEventListener('playing',()=>setTouchSoundBtn(true));
        touchAudio.addEventListener('ended',()=>setTouchSoundBtn(false));
        touchAudio.addEventListener('pause',()=>setTouchSoundBtn(false));
        touchAudio.addEventListener('error',()=>setTouchSoundBtn(false));
    }
    return touchAudio;
}
function stopTouchSpeech(){
    touchSpeechOn=false;
    clearInterval(touchSpeechTimer);touchSpeechTimer=null;
    if(touchAudio){try{touchAudio.pause();}catch(e){}}
    try{if(typeof speechSynthesis!=='undefined')speechSynthesis.cancel();}catch(e){}
    setTouchSoundBtn(false);
}
function buildTouchUtterance(text){
    const u=new SpeechSynthesisUtterance(text);
    u.lang='en-GB';u.rate=0.8;u.pitch=1;
    u.onstart=()=>setTouchSoundBtn(true);
    u.onend=()=>setTouchSoundBtn(false);
    u.onerror=()=>setTouchSoundBtn(false);
    return u;
}
function speakTouchWord(force){
    if((touchState.mode!=='word'&&touchState.mode!=='sentence')||GS.currentScreen!=='touch-play-screen'){stopTouchSpeech();return;}
    const w=touchState.items[touchState.index];
    if(!w||!w.en)return;
    if(!force&&touchState.typed===w.en)return;
    try{
        const a=getTouchAudio();
        a.src='https://dict.youdao.com/dictvoice?audio='+encodeURIComponent(w.en)+'&type=1';
        const p=a.play();
        if(p&&p.catch){
            p.catch(function(){
                try{
                    if(typeof speechSynthesis!=='undefined'&&!speechSynthesis.speaking&&!speechSynthesis.pending){
                        speechSynthesis.speak(buildTouchUtterance(w.en));
                    }
                }catch(e){}
            });
        }
    }catch(e){
        try{
            if(typeof speechSynthesis!=='undefined')speechSynthesis.speak(buildTouchUtterance(w.en));
        }catch(e2){}
    }
}
function startTouchSpeech(){
    stopTouchSpeech();
    touchSpeechOn=true;
    speakTouchWord(true);
    const gap=touchState.mode==='sentence'?3000:2000;
    touchSpeechTimer=setInterval(()=>speakTouchWord(),gap);
}
function replayTouchWord(){
    if((touchState.mode!=='word'&&touchState.mode!=='sentence')||GS.currentScreen!=='touch-play-screen')return;
    try{
        const a=getTouchAudio();
        a.src='https://dict.youdao.com/dictvoice?audio='+encodeURIComponent(touchState.items[touchState.index].en)+'&type=1';
        const p=a.play();
        if(p&&p.catch){
            p.catch(function(){
                try{
                    if(typeof speechSynthesis!=='undefined')speechSynthesis.speak(buildTouchUtterance(touchState.items[touchState.index].en));
                }catch(e){}
            });
        }
    }catch(e){}
}

function resetTouchKeys(){
    document.querySelectorAll('.tk-key[data-key]').forEach(k=>k.className='tk-key');
}

/* ====== 触屏练习横/竖屏切换（手机/平板竖屏时自动旋转显示） ====== */
let landscapeOn=false;
function updateLandscapeBtn(){
    const b=document.getElementById('touch-landscape-btn');
    if(!b)return;
    if(landscapeOn){b.textContent='📱 竖屏';b.title='切换到竖屏';}
    else{b.textContent='🔄 横屏';b.title='切换到横屏';}
}
function applyLandscapeCSS(){
    const needRotate=landscapeOn&&window.innerHeight>window.innerWidth&&window.innerWidth<1024;
    document.body.classList.toggle('landscape-rotated',needRotate);
}
function enterLandscape(){
    if(landscapeOn)return;
    landscapeOn=true;
    try{
        if(screen.orientation&&screen.orientation.lock){
            const p=screen.orientation.lock('landscape');
            if(p&&p.catch)p.catch(function(){});
        }
    }catch(e){}
    applyLandscapeCSS();
    updateLandscapeBtn();
}
function exitLandscape(){
    if(!landscapeOn)return;
    landscapeOn=false;
    document.body.classList.remove('landscape-rotated');
    try{if(screen.orientation&&screen.orientation.unlock)screen.orientation.unlock();}catch(e){}
    updateLandscapeBtn();
}
function toggleTouchLandscape(){
    if(landscapeOn){exitLandscape();}else{enterLandscape();}
}
window.addEventListener('orientationchange',function(){if(landscapeOn)applyLandscapeCSS();});
window.addEventListener('resize',function(){if(landscapeOn)applyLandscapeCSS();});

function touchKeyTap(key){
    if(touchState.index>=touchState.items.length)return;
    touchState.total++;
    let letter=key;
    if(/^[a-zA-Z]$/.test(key)){
        const physicalUpper=/[A-Z]/.test(key);
        const wantUpper=physicalUpper||touchState.capsOn||touchState.shiftOn;
        letter=wantUpper?key.toUpperCase():key.toLowerCase();
        if(touchState.shiftOn&&!touchState.capsOn&&!physicalUpper){touchState.shiftOn=false;updateKeyboardCase();}
    }
    if(touchState.mode==='letter'){
        const target=touchState.items[touchState.index];
        const btn=document.querySelector('.tk-key[data-key="'+key.toLowerCase()+'"]');
        if(letter.toLowerCase()===target){
            touchState.correct++;touchState.score+=10;playSound('correct');
            if(btn){btn.className='tk-key tk-correct';}
            setTimeout(()=>{touchState.index++;showTouchTarget();},300);
        }else{
            touchState.score=Math.max(0,touchState.score-2);playSound('error');
            if(btn){btn.className='tk-key tk-error';setTimeout(()=>btn.className='tk-key',300);}
        }
    }else if(touchState.mode==='word'||touchState.mode==='sentence'){
        const word=touchState.items[touchState.index];
        const expectedLetter=word.en[touchState.typed.length];
        const btn=document.querySelector('.tk-key[data-key="'+key.toLowerCase()+'"]');
        if(letter===expectedLetter){
            touchState.correct++;touchState.typed+=letter;playSound('correct');
            if(btn){btn.className='tk-key tk-correct';setTimeout(()=>btn.className='tk-key',150);}
            document.getElementById('touch-word-typed').textContent=touchState.typed;
            if(touchState.typed===word.en){
                touchState.score+=20;
                document.getElementById('touch-score').textContent=touchState.score+'分';
                stopTouchSpeech();
                setTimeout(()=>{touchState.index++;showTouchTarget();},400);
            }
        }else{
            touchState.score=Math.max(0,touchState.score-2);playSound('error');
            if(btn){btn.className='tk-key tk-error';setTimeout(()=>btn.className='tk-key',300);}
        }
    }else{
        const word=touchState.items[touchState.index];
        const expectedLetter=word.pinyin[touchState.typed.length];
        const btn=document.querySelector('.tk-key[data-key="'+key.toLowerCase()+'"]');
        if(letter.toLowerCase()===expectedLetter){
            touchState.correct++;touchState.typed+=expectedLetter;playSound('correct');
            if(btn){btn.className='tk-key tk-correct';setTimeout(()=>btn.className='tk-key',150);}
            document.getElementById('touch-pinyin-typed').textContent=touchState.typed;
            if(touchState.typed===word.pinyin){
                touchState.score+=20;
                document.getElementById('touch-score').textContent=touchState.score+'分';
                setTimeout(()=>{touchState.index++;showTouchTarget();},400);
            }
        }else{
            touchState.score=Math.max(0,touchState.score-2);playSound('error');
            if(btn){btn.className='tk-key tk-error';setTimeout(()=>btn.className='tk-key',300);}
        }
    }
    document.getElementById('touch-score').textContent=touchState.score+'分';
}

function touchBackspace(){
    if((touchState.mode!=='pinyin'&&touchState.mode!=='word'&&touchState.mode!=='sentence')||touchState.typed.length===0)return;
    touchState.typed=touchState.typed.slice(0,-1);
    const el=(touchState.mode==='word'||touchState.mode==='sentence')?document.getElementById('touch-word-typed'):document.getElementById('touch-pinyin-typed');
    el.textContent=touchState.typed;
}

function touchPunctTap(p){
    if(touchState.mode!=='sentence')return;
    touchKeyTap(p);
}

function touchShiftTap(){
    touchState.shiftOn=!touchState.shiftOn;
    updateKeyboardCase();
}
function touchCapslockTap(){
    touchState.capsOn=!touchState.capsOn;
    updateKeyboardCase();
}
function updateKeyboardCase(){
    const up=touchState.capsOn||touchState.shiftOn;
    document.querySelectorAll('.tk-key[data-key]').forEach(k=>{
        const d=k.dataset.key;
        if(/^[a-zA-Z]$/.test(d)){k.textContent=up?d.toUpperCase():d.toLowerCase();}
    });
    const cb=document.getElementById('touch-capslock-btn');
    if(cb){cb.style.background=touchState.capsOn?'#6366f1':'white';cb.style.color=touchState.capsOn?'white':'#1f2937';}
    const sb=document.getElementById('touch-shift-btn');
    if(sb){sb.style.background=touchState.shiftOn?'#6366f1':'white';sb.style.color=touchState.shiftOn?'white':'#1f2937';}
}

function touchSpaceTap(){
    if(touchState.mode==='sentence'){
        touchKeyTap(' ');
        return;
    }
    if(touchState.mode==='pinyin'){
        const word=touchState.items[touchState.index];
        if(touchState.typed===word.pinyin){
            touchState.score+=20;
            touchState.index++;showTouchTarget();
        }else{
            showToast('拼音不完整，继续输入','error');
        }
    }else if(touchState.mode==='word'){
        const word=touchState.items[touchState.index];
        if(touchState.typed===word.en){
            touchState.score+=20;
            stopTouchSpeech();
            touchState.index++;showTouchTarget();
        }else{
            showToast('单词没输完，继续输入','error');
        }
    }
}

function showTouchResult(){
    exitLandscape();
    const acc=touchState.total>0?Math.round((touchState.correct/touchState.total)*100):0;
    const stars=acc>=95?3:acc>=80?2:1;
    const isWord=touchState.mode==='word';
    const isSentence=touchState.mode==='sentence';
    if(isWord){
        const grade=englishWordGrades[touchState.wordGrade];
        const levelName=grade.levels[touchState.wordLevel-1].name;
        document.getElementById('touch-result-icon').textContent=stars===3?'🎉':stars===2?'👏':'💪';
        document.getElementById('touch-result-title').textContent=grade.name+'第'+touchState.wordLevel+'关「'+levelName+'」完成！';
        const nextBtn=document.getElementById('touch-next-level-btn');
        if(touchState.wordLevel<grade.levels.length){
            nextBtn.style.display='block';
            nextBtn.textContent='▶ 第'+(touchState.wordLevel+1)+'关';
        }else{
            nextBtn.style.display='none';
            document.getElementById('touch-result-icon').textContent='🏆';
            document.getElementById('touch-result-title').textContent='恭喜通关'+grade.name+'全部关卡！';
        }
    }else if(isSentence){
        const grade=englishSentenceGrades[touchState.wordGrade];
        document.getElementById('touch-result-icon').textContent=stars===3?'🎉':stars===2?'👏':'💪';
        document.getElementById('touch-result-title').textContent=grade.name+' 英文短句练习完成！';
        document.getElementById('touch-next-level-btn').style.display='none';
    }else{
        const msgs=['继续加油！','很棒！','太厉害了！'];
        document.getElementById('touch-result-icon').textContent=stars===3?'🎉':stars===2?'👏':'💪';
        document.getElementById('touch-result-title').textContent=msgs[stars-1];
        document.getElementById('touch-next-level-btn').style.display='none';
    }
    document.getElementById('touch-result-stars').textContent='⭐'.repeat(stars);
    document.getElementById('touch-result-score').textContent=touchState.score;
    document.getElementById('touch-result-acc').textContent=acc+'%';
    document.getElementById('touch-result-modal').classList.add('active');
}

function nextTouchLevel(){
    if(touchState.mode!=='word')return;
    document.getElementById('touch-result-modal').classList.remove('active');
    const grade=englishWordGrades[touchState.wordGrade];
    const next=Math.min(touchState.wordLevel+1,grade.levels.length);
    chooseWordLevel(next);
}

function restartTouchPractice(){
    stopTouchSpeech();
    document.getElementById('touch-result-modal').classList.remove('active');
    if(touchState.mode==='word'){
        chooseWordLevel(touchState.wordLevel);
    }else if(touchState.mode==='sentence'){
        chooseSentenceGrade(touchState.wordGrade);
    }else{
        startTouchPractice(touchState.mode);
    }
}

function closeTouchResult(){
    stopTouchSpeech();
    document.getElementById('touch-result-modal').classList.remove('active');
    showScreen('touch-screen');
}

function exitTouchPractice(){
    stopTouchSpeech();
    document.getElementById('touch-result-modal').classList.remove('active');
    showScreen('touch-screen');
}

/* ====== 初始化 ====== */
document.addEventListener('DOMContentLoaded',async function(){
    await loadSystemData();
    loadGameState();
    if(studentsData.length===0){
        const defaults=[];
        defaultClasses.forEach(cls=>{
            ['赵小明','王小红','张大力'].forEach(name=>{
                defaults.push({class:cls,name:name,password:settingsData.defaultPassword,isDefault:true});
            });
        });
        defaults.forEach(d=>{studentsData.push({id:Date.now()+studentsData.length,...d});});
        saveSystemData();
        if(supabaseClient){
            const {error}=await supabaseClient.from('students').insert(defaults.map(d=>({class:d.class,name:d.name,password:d.password,is_default:true})));
            if(error)console.error('批量插入默认学生失败:',error);
        }
    }
    refreshClassDropdowns();
    refreshStudentTable();
    refreshArticleTable();
    updateScoreDisplay();
    updateBadges();
    updatePetMessage();
    checkAutoLogin();
    document.querySelectorAll('.key').forEach(k=>{k.addEventListener('click',function(){
        if(GS.currentScreen!=='typing-screen'||GS.isPaused||GS.isFinished)return;
        if(!GS.startTime){GS.startTime=Date.now();startTimer();}
        const e=new KeyboardEvent('keydown',{key:this.dataset.key});document.dispatchEvent(e);
    });});
    document.getElementById('setting-guide').addEventListener('change',function(){
        document.getElementById('virtual-keyboard').style.display=this.checked?'block':'none';
    });
});