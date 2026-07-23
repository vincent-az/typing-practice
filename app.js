/* ====== 练习数据 ====== */
const practiceData={
'letters-home':{easy:'asdf jkl; asdf jkl; asdf jkl; asdf jkl;',medium:'ask sad flask dash glad; ask lad; fad lad;',hard:'fall had glad half; ask all; dash flask; salads'},
'letters-all':{easy:'the quick brown fox jumps over the lazy dog',medium:'pack my box with five dozen liquor jugs',hard:'how vexingly quick daft zebras jump! the quick brown fox.'},
'numbers':{easy:'123 456 789 123 456 789 012 345 678',medium:'2024 1984 100 200 300 400 500 600 700 800',hard:'3.14159 2.71828 1.41421 1.73205 2.23607'},
'punctuation-basic':{easy:['hello, world. how are you? i am fine!','the cat is big. the dog is small. do you like cats?','my name is tom. i am ten years old. i like apples.'],medium:['The teacher said, "Good morning!" We replied, "Good morning!"','What is your name? My name is Lily. Nice to meet you!','I like to play football. Do you? Yes, I do!'],hard:['Although it was raining, we still went to the park. The children were excited!','"Who wants ice cream?" asked Mom. Everyone shouted, "I do!"','My favorite season is summer. I can swim, eat ice cream, and play outside!']},
'punctuation-quotes':{easy:['"hello" and \'world\'','She said "hi" and he said \'hello\'','"open the door" she said'],medium:['The teacher said, "Please open your books." We all said, "Okay!"','Mom asked, "What do you want for dinner?" I said, "Pizza, please!"','"Don\'t forget your homework," said my friend. "I won\'t!" I replied.'],hard:['The book said, "Knowledge is power." I think that\'s true!','"Where are you going?" asked Mom. "To the library," I answered.','"I can\'t believe it\'s already Friday!" she exclaimed.']},
'punctuation-cn':{easy:['春天来了。花儿开了。小鸟在唱歌。','你好吗？我很好。谢谢！','我喜欢吃苹果，你喜欢吃什么呢？','今天是星期一。明天是星期二。','小明、小红和小李是好朋友。'],medium:['图书馆里有很多书：故事书、科学书、漫画书。你最喜欢哪种？','今天天气真好！我们去公园玩吧。好不好？好！','老师说："明天要带课本。"同学们都记住了。','中国的首都是北京；那里有很多名胜古迹。','这是谁的书？是我的。真的吗？真的！'],hard:['中国的首都是北京。那里有很多名胜古迹：故宫、长城、天坛……','"你长大了想做什么？"妈妈问。"我想当科学家！"我坚定地回答。','科技改变了我们的生活；互联网让我们可以学习更多知识。同学们，加油！','小明说："我今天很开心！"小红问："为什么？"小明回答："因为我学会了打字！"','春天的花开了：桃花、杏花、梨花……五颜六色，美丽极了！']},
'sentences':{easy:'I like to read books. The sun is warm today.',medium:'My favorite subject is science. We learned about plants yesterday.',hard:'Although it was raining, we still went to the park. The children were excited!'},
'articles':{easy:'春天来了。花儿开了。小鸟在树上唱歌。小朋友们在公园里玩耍。',medium:'图书馆里有很多书。我最喜欢看故事书。每天放学后，我都会去图书馆看书。',hard:'科技改变了我们的生活。通过互联网，我们可以学习到很多知识。同学们要好好学习，将来为祖国做贡献。'}
};

const fingerMap={'q':'left-pinky','a':'left-pinky','z':'left-pinky','1':'left-pinky','`':'left-pinky','w':'left-ring','s':'left-ring','x':'left-ring','2':'left-ring','e':'left-middle','d':'left-middle','c':'left-middle','3':'left-middle','r':'left-index','f':'left-index','v':'left-index','4':'left-index','t':'left-index','g':'left-index','b':'left-index','5':'left-index','y':'right-index','h':'right-index','n':'right-index','6':'right-index','u':'right-index','j':'right-index','m':'right-index','7':'right-index','i':'right-middle','k':'right-middle',',':'right-middle','8':'right-middle','o':'right-ring','l':'right-ring','.':'right-ring','9':'right-ring','p':'right-pinky',';':'right-pinky','/':'right-pinky','0':'right-pinky',"'":'right-pinky','[':'right-pinky',']':'right-pinky','-':'right-pinky','=':'right-pinky',' ':'thumb'};
const fingerNames={'left-pinky':'左手小指','left-ring':'左手无名指','left-middle':'左手中指','left-index':'左手食指','right-index':'右手食指','right-middle':'右手中指','right-ring':'右手无名指','right-pinky':'右手小指','thumb':'拇指'};

const defaultClasses=['三年级1班','三年级2班','四年级1班','四年级2班','五年级1班','五年级2班'];

/* ====== 数据状态 ====== */
let studentsData=[];
let articlesData=[];
let settingsData={defaultPassword:'pzxx',teacherPassword:'teacher123'};
let currentUser=null;

let GS={currentScreen:'login-screen',currentPractice:null,currentText:'',currentIndex:0,correctChars:0,totalChars:0,startTime:null,timerInterval:null,timeLimit:180,isPaused:false,isFinished:false,xp:0,level:1,bestWpm:0,practiceCount:0,practiceStats:{letters:0,numbers:0,punctuation:0,mixed:0},achievements:{first:false,speed:false,accuracy:false,punctuation:false,streak:false,all:false},streakCount:0,lastPracticeDate:null};
let gameInterval=null,gameScore=0,gameCorrect=0,gameTimeLeft=30,gameType=null,gameTarget='';

/* ====== 数据持久化 ====== */
function saveSystemData(){
    localStorage.setItem('tpStudents',JSON.stringify(studentsData));
    localStorage.setItem('tpArticles',JSON.stringify(articlesData));
    localStorage.setItem('tpSettings',JSON.stringify(settingsData));
}
function loadSystemData(){
    const s=localStorage.getItem('tpStudents');
    if(s)try{studentsData=JSON.parse(s);}catch(e){}
    const a=localStorage.getItem('tpArticles');
    if(a)try{articlesData=JSON.parse(a);}catch(e){}
    const t=localStorage.getItem('tpSettings');
    if(t)try{const d=JSON.parse(t);Object.assign(settingsData,d);}catch(e){}
    const u=localStorage.getItem('tpCurrentUser');
    if(u)try{currentUser=JSON.parse(u);}catch(e){}
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
    const pwd=document.getElementById('teacher-login-pwd').value;
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
        refreshClassDropdowns();
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
        refreshClassDropdowns();
        showScreen('teacher-panel-screen');
    }
}

/* ====== 学生管理 ====== */
function addSingleStudent(){
    const cls=document.getElementById('stu-class').value;
    const name=document.getElementById('stu-name').value.trim();
    if(!cls||!name){showToast('请选择班级并输入姓名','error');return;}
    if(studentsData.some(s=>s.class===cls&&s.name===name)){showToast('该学生已存在','error');return;}
    studentsData.push({id:Date.now(),class:cls,name:name,password:settingsData.defaultPassword,isDefault:true});
    saveSystemData();
    document.getElementById('stu-name').value='';
    showToast('添加成功：'+name);
    refreshStudentTable();
    refreshClassDropdowns();
}
function addBulkStudents(){
    const text=document.getElementById('stu-bulk').value.trim();
    if(!text){showToast('请输入学生信息','error');return;}
    const lines=text.split('\n').filter(l=>l.trim());
    let count=0;
    lines.forEach(line=>{
        const parts=line.trim().split('-');
        if(parts.length===2){
            const cls=parts[0].trim(),name=parts[1].trim();
            if(cls&&name&&!studentsData.some(s=>s.class===cls&&s.name===name)){
                studentsData.push({id:Date.now()+count,class:cls,name:name,password:settingsData.defaultPassword,isDefault:true});
                count++;
            }
        }
    });
    if(count===0){showToast('格式错误，请按 班级-姓名 格式填写','error');return;}
    saveSystemData();
    document.getElementById('stu-bulk').value='';
    showToast('批量添加成功：'+count+'人');
    refreshStudentTable();
    refreshClassDropdowns();
}
function deleteStudent(id){
    const stu=studentsData.find(s=>s.id===id);
    if(!stu)return;
    if(!confirm('确定要删除学生 '+stu.name+' 吗？'))return;
    studentsData=studentsData.filter(s=>s.id!==id);
    saveSystemData();
    showToast('已删除：'+stu.name);
    refreshStudentTable();
    refreshClassDropdowns();
}
function resetStudentPwd(id){
    const stu=studentsData.find(s=>s.id===id);
    if(!stu||!confirm('确定要重置 '+stu.name+' 的密码吗？'))return;
    stu.password=settingsData.defaultPassword;
    stu.isDefault=true;
    saveSystemData();
    showToast('已重置：'+stu.name+' 的密码');
    refreshStudentTable();
}
function refreshStudentTable(){
    const tbody=document.getElementById('stu-tbody');
    const count=document.getElementById('stu-count');
    count.textContent=studentsData.length+'人';
    if(studentsData.length===0){
        tbody.innerHTML='<tr><td colspan="4" style="text-align:center;color:#9ca3af;padding:30px">暂无学生，请添加</td></tr>';
        return;
    }
    tbody.innerHTML=studentsData.map(s=>`
        <tr>
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

/* ====== 文章管理 ====== */
function addArticle(){
    const title=document.getElementById('art-title').value.trim();
    const content=document.getElementById('art-content').value.trim();
    const diff=document.getElementById('art-difficulty').value;
    if(!title||!content){showToast('请输入文章标题和内容','error');return;}
    articlesData.push({id:Date.now(),title,content,difficulty:diff});
    saveSystemData();
    document.getElementById('art-title').value='';
    document.getElementById('art-content').value='';
    showToast('文章添加成功：'+title);
    refreshArticleTable();
}
function deleteArticle(id){
    const art=articlesData.find(a=>a.id===id);
    if(!art||!confirm('确定要删除文章 "'+art.title+'" 吗？'))return;
    articlesData=articlesData.filter(a=>a.id!==id);
    saveSystemData();
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
function saveDefaultPwd(){
    const pwd=document.getElementById('set-default-pwd').value.trim();
    if(!pwd||pwd.length<3){showToast('密码长度至少3位','error');return;}
    settingsData.defaultPassword=pwd;
    saveSystemData();
    showToast('默认密码已设置为：'+pwd);
}
function changeTeacherPwd(){
    const old=document.getElementById('set-old-pwd').value;
    const nw=document.getElementById('set-new-pwd').value.trim();
    const msg=document.getElementById('teacher-settings-msg');
    if(!old||!nw){msg.className='form-msg error';msg.textContent='请填写当前密码和新密码';return;}
    if(old!==settingsData.teacherPassword){msg.className='form-msg error';msg.textContent='当前密码错误';return;}
    if(nw.length<4){msg.className='form-msg error';msg.textContent='新密码长度至少4位';return;}
    settingsData.teacherPassword=nw;
    saveSystemData();
    document.getElementById('set-old-pwd').value='';
    document.getElementById('set-new-pwd').value='';
    msg.className='form-msg success';
    msg.textContent='教师密码已修改成功';
    setTimeout(()=>msg.textContent='',2000);
}
function exportData(){
    const data={students:studentsData,articles:articlesData,settings:settingsData};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='typing_practice_data.json';
    a.click();
    showToast('数据已导出');
}
function importData(){
    const input=document.createElement('input');
    input.type='file';
    input.accept='.json';
    input.onchange=function(e){
        const file=e.target.files[0];
        if(!file)return;
        const reader=new FileReader();
        reader.onload=function(ev){
            try{
                const data=JSON.parse(ev.target.result);
                if(!confirm('导入将覆盖当前所有数据，确定继续吗？'))return;
                if(data.students)studentsData=data.students;
                if(data.articles)articlesData=data.articles;
                if(data.settings)Object.assign(settingsData,data.settings);
                saveSystemData();
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

/* ====== 学生修改密码 ====== */
function changeStudentPassword(){
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
    document.getElementById('profile-old-pwd').value='';
    document.getElementById('profile-new-pwd').value='';
    document.getElementById('profile-confirm-pwd').value='';
    msg.className='form-msg success';
    msg.textContent='密码修改成功！';
    setTimeout(()=>{msg.textContent='';showScreen('home-screen');},1000);
}

/* ====== 下拉框刷新 ====== */
function refreshClassDropdowns(){
    const classes=[...new Set(studentsData.map(s=>s.class))];
    const allClasses=classes.length>0?classes:defaultClasses;
    ['stu-class','login-class'].forEach(id=>{
        const sel=document.getElementById(id);
        if(!sel)return;
        const current=sel.value;
        sel.innerHTML='<option value="">选择班级</option>'+allClasses.map(c=>'<option value="'+c+'">'+c+'</option>').join('');
        if(current)sel.value=current;
    });
}

/* ====== 屏幕切换 ====== */
function showScreen(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    GS.currentScreen=id;
    if(id==='score-screen'){updateScoreDisplay();updateBadges();}
    if(id==='home-screen'){updatePetMessage();}
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
    document.getElementById('hint-key').textContent=c===' '?'空格':c.toUpperCase();
    const f=fingerMap[c.toLowerCase()];
    document.getElementById('hint-finger').textContent=f&&fingerNames[f]?fingerNames[f]:'';
    document.querySelectorAll('.key').forEach(k=>k.classList.remove('active'));
    let sel=c===' '?'.key[data-key=" "]':c==='\''?'.key[data-key="\']"':'.key[data-key="'+c+'"]';
    const ke=document.querySelector(sel);if(ke)ke.classList.add('active');
}
document.addEventListener('keydown',function(e){
    if(GS.currentScreen!=='typing-screen'||GS.isPaused||GS.isFinished)return;
    if(!GS.startTime){GS.startTime=Date.now();startTimer();}
    const key=e.key,currentChar=GS.currentText[GS.currentIndex];
    if(key==='Backspace'){e.preventDefault();if(GS.currentIndex>0){GS.currentIndex--;const ch=document.querySelector('.char[data-index="'+GS.currentIndex+'"]');if(ch){ch.classList.remove('correct','error');ch.classList.add('current');}updateHint();}return;}
    if(key==='Shift'||key==='CapsLock'||key==='Tab'||key==='Control'||key==='Alt'||key==='Meta')return;
    GS.totalChars++;
    let ok=key===currentChar||(currentChar===' '&&key===' ')||(key.length===1&&currentChar.length===1&&key.toLowerCase()===currentChar.toLowerCase());
    if(ok){GS.correctChars++;markCorrect(GS.currentIndex);GS.currentIndex++;if(document.getElementById('setting-sound').checked)playSound('correct');if(GS.currentIndex>=GS.currentText.length){finishPractice(true);return;}
    }else{markError(GS.currentIndex);if(document.getElementById('setting-sound').checked)playSound('error');}
    updateStats();updateHint();
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
function finishPractice(completed){
    if(GS.isFinished)return;GS.isFinished=true;clearInterval(GS.timerInterval);
    const t=(Date.now()-GS.startTime)/1000/60;
    const wpm=t>0?Math.round((GS.correctChars/5)/t):0;
    const acc=GS.totalChars>0?Math.round((GS.correctChars/GS.totalChars)*100):100;
    let stars=0;if(acc>=80)stars++;if(acc>=90)stars++;if(wpm>=getTargetWpm())stars++;stars=Math.max(1,Math.min(3,stars));
    const xp=Math.round((wpm*acc/100)*5+stars*10);GS.xp+=xp;GS.practiceCount++;
    if(wpm>GS.bestWpm)GS.bestWpm=wpm;updatePracticeStats();
    const xn=GS.level*100;if(GS.xp>=xn){GS.level++;GS.xp-=xn;}
    checkAchievements(wpm,acc);updateStreak();saveGameState();showResult(stars,wpm,acc,xp,completed);
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
function initRace(){document.getElementById('race-player').style.left='10%';document.querySelectorAll('.cpu-car').forEach(c=>c.style.left='10%');nextRaceWord();}
function nextRaceWord(){const w=gameWords[Math.floor(Math.random()*gameWords.length)];gameTarget=w;document.getElementById('race-target').textContent=w;}
function initBubble(){
    const bc=document.getElementById('bubble-container');bc.innerHTML='';
    for(let i=0;i<6;i++){const b=document.createElement('div');b.className='bubble';b.style.left=Math.random()*85+'%';b.style.top=Math.random()*70+'%';b.style.animationDelay=Math.random()*2+'s';const letter=gameWords[Math.floor(Math.random()*gameWords.length)][0];b.textContent=letter;b.dataset.letter=letter;bc.appendChild(b);}
    nextBubbleTarget();
}
function nextBubbleTarget(){const bubbles=document.querySelectorAll('.bubble');if(bubbles.length===0){gameScore+=50;document.getElementById('game-score').textContent='得分: '+gameScore;initBubble();return;}gameTarget=bubbles[0].dataset.letter;document.getElementById('bubble-target').textContent=bubbles[0].dataset.letter;}
function initStar(){
    const sc=document.getElementById('star-container');sc.innerHTML='';const letters='abcdefghijklmnopqrstuvwxyz';
    for(let i=0;i<8;i++){const s=document.createElement('div');s.className='star-item';s.style.left=Math.random()*85+'%';s.style.top=Math.random()*65+'%';s.textContent='⭐';s.dataset.letter=letters[Math.floor(Math.random()*26)];s.style.animationDelay=Math.random()*2+'s';sc.appendChild(s);}
    nextStarTarget();
}
function nextStarTarget(){const stars=document.querySelectorAll('.star-item');if(stars.length===0){gameScore+=100;document.getElementById('game-score').textContent='得分: '+gameScore;initStar();return;}gameTarget=stars[0].dataset.letter;document.getElementById('star-target').textContent=stars[0].dataset.letter+' ⭐';}
document.addEventListener('keydown',function(e){
    if(GS.currentScreen!=='gameplay-screen')return;if(gameTimeLeft<=0)return;
    const key=e.key.toLowerCase();if(key.length!==1)return;
    if(key===gameTarget.toLowerCase()){
        gameCorrect++;gameScore+=10;document.getElementById('game-score').textContent='得分: '+gameScore;
        if(document.getElementById('setting-sound').checked)playSound('correct');
        if(gameType==='race'){const player=document.getElementById('race-player');const cur=parseFloat(player.style.left)||10;player.style.left=Math.min(cur+8,75)+'%';document.querySelectorAll('.cpu-car').forEach(c=>{const cl=parseFloat(c.style.left)||10;c.style.left=Math.min(cl+Math.random()*5,75)+'%';});if(cur>=70){gameScore+=50;document.getElementById('game-score').textContent='得分: '+gameScore;player.style.left='10%';}nextRaceWord();
        }else if(gameType==='bubble'){const b=document.querySelector('.bubble');if(b){b.style.transform='scale(1.5)';b.style.opacity='0';setTimeout(()=>b.remove(),300);}nextBubbleTarget();
        }else if(gameType==='star'){const s=document.querySelector('.star-item');if(s){s.style.transform='scale(1.5)';s.style.opacity='0';setTimeout(()=>s.remove(),300);}nextStarTarget();}
    }else{if(document.getElementById('setting-sound').checked)playSound('error');}
});
function endGame(){clearInterval(gameInterval);gameInterval=null;const stars=gameScore>=100?3:gameScore>=50?2:1;document.getElementById('gameover-stars').textContent='⭐'.repeat(stars);document.getElementById('gameover-score').textContent=gameScore;document.getElementById('gameover-correct').textContent=gameCorrect;const msgs=['继续加油！','很棒！','太厉害了！'];document.getElementById('gameover-msg').textContent=msgs[stars-1];document.getElementById('gameover-modal').classList.add('active');}
function exitGame(){clearInterval(gameInterval);gameInterval=null;showScreen('game-screen');}
function restartCurrentGame(){document.getElementById('gameover-modal').classList.remove('active');if(gameType)startGame(gameType);}

/* ====== 初始化 ====== */
document.addEventListener('DOMContentLoaded',function(){
    loadSystemData();
    loadGameState();
    if(studentsData.length===0){
        defaultClasses.forEach(cls=>{
            ['赵小明','王小红','张大力'].forEach(name=>{
                studentsData.push({id:Date.now()+studentsData.length,class:cls,name:name,password:settingsData.defaultPassword,isDefault:true});
            });
        });
        saveSystemData();
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