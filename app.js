const locations={"本島": {"基隆": ["白燈塔", "八斗仔", "望海巷漁港", "外木山漁港", "長潭里漁港", "和平島", "碧砂漁港", "潮境公園", "深澳岬角"], "新北市": ["鼻頭角", "龍洞灣", "龍洞岬", "澳底", "福隆", "鹽寮", "三貂角", "卯澳", "和美漁港", "深澳漁港", "富貴角", "石門洞", "老梅", "草里漁港", "金山磺港", "野柳", "萬里漁港"], "桃園": ["竹圍漁港", "永安漁港", "新屋海岸", "觀音海岸"], "新竹": ["南寮漁港", "香山濕地", "海山漁港"], "苗栗": ["龍鳳漁港", "通霄海岸", "苑裡海岸", "後龍溪出海口"], "台中": ["梧棲漁港", "高美濕地", "大甲溪出海口", "麗水漁港", "台中港北堤"], "彰化": ["王功漁港", "芳苑海岸", "伸港海岸", "漢寶濕地", "鹿港北堤", "鹿港西堤"], "雲林": ["三條崙", "台西漁港", "箔子寮漁港", "金湖", "五條港"], "嘉義": ["東石漁港", "布袋漁港", "外傘頂洲", "雙春海水浴場", "王爺溪出海口", "好美里", "布袋潟湖", "鰲鼓濕地", "第三漁港", "八卦溝", "走私溝"], "臺南": ["安平南堤", "安平北堤", "四草", "黃金海岸", "將軍漁港", "青山港", "蘆竹溝", "七股潟湖", "馬南", "馬北", "二仁溪橋", "鹿耳門", "馬沙溝", "北門沙灘", "曾文溪出海口", "青鯤鯓"], "高雄": ["旗津北堤", "旗后燈塔", "西子灣", "西子灣北堤", "永安漁港", "永安新港", "永安平臺", "興達港", "彌陀漁港", "彌陀南寮漁港", "蚵仔寮漁港", "林園海岸", "柴山漁港", "烏林投", "茄萣海岸", "南興計劃區", "鳳鼻頭漁港", "中芸港", "汕尾港"], "屏東": ["東港", "鹽埔漁港", "大鵬灣", "枋寮漁港", "佳冬海岸", "後壁湖", "萬里桐", "車城海岸", "七星岩"], "臺東": ["成功漁港", "富岡漁港", "都蘭海岸", "金樽漁港", "三仙台", "杉原海岸", "金倫"], "花蓮": ["花蓮港", "七星潭", "鹽寮海岸", "磯崎海岸", "石梯坪"], "宜蘭": ["烏石港", "外澳", "頭城港", "大溪漁港", "粉鳥林", "南方澳", "內埤海灘"]}, "離島": {"澎湖": ["馬公港", "重光碼頭", "風櫃洞", "山水沙灘", "鎖港", "案山漁港", "嵵裡沙灘", "瓦硐漁港", "觀音亭", "西衛漁港", "山水碉堡", "30高地", "通樑", "跨海大橋", "跨海大橋橋墩", "後寮", "西嶼外垵漁港", "池西岩瀑", "內垵海岸", "赤馬海岸", "赤馬漁港", "歧頭碼頭", "竹灣箱網", "菜園箱網", "吉貝", "吉貝碼頭", "吉貝沙尾", "險礁嶼", "員貝嶼", "鳥嶼", "望安", "將軍澳", "七美", "虎井嶼", "桶盤嶼", "花嶼", "屈爪嶼", "姑婆嶼", "目斗嶼", "土地公嶼", "大蚶嶼", "小蚶嶼", "大女人嶼", "小女人嶼", "塭尾", "大倉嶼", "鳥嶼外礁", "花嶼外礁", "貓礁", "豬母礁", "大蜈蚣礁", "小蜈蚣礁", "葫蘆礁", "東吉嶼", "西吉嶼"], "蘭嶼": ["新開元港", "舊開元港", "龍門港", "饅頭山", "虎頭坡", "漁人灘頭", "八代灣沙灘", "青青草原", "象鼻岩", "鋼盔岩", "野銀礁岸", "東清灣", "情人洞", "大石頭", "雙獅岩", "雞母岩", "坦克岩", "洞口"], "綠島": ["南寮港", "石朗", "柴口", "朝日溫泉"], "小琉球": ["蛤板灣", "烏鬼洞", "美人洞", "厚石礁", "大福漁港", "海子口漁港", "漁福漁港", "龍蝦洞", "沙瑪基"], "金門": ["料羅港", "成功海岸", "后湖海岸"], "馬祖": ["福澳港", "芹壁", "東引", "津沙"]}};const dataKey="fishingLogFinalCompleteV1";const presetKey="fishingLogPresetsV1";const quickKey="fishingLogQuickNotesV1";const $=id=>document.getElementById(id);
let quickNotes=["微托底","貼底","中層","表層","刷","頓","連續咬","流快","流慢","轉流"];
let defaultPresets=[{name:"南堤紅沙",rod:"Shimano FireBlood Gure SURVEYOR 1.7",reel:"Shimano 19 BB-X TECHNIUM FIRE BLOOD 3000DXG",float:"阿波",mainLine:"PE",leader:"4.0",hook:"小磯",bait:"南極蝦"},{name:"臭肚配置",rod:"Shimano FireBlood Gure SURVEYOR 1.7",reel:"Shimano 19 BB-X TECHNIUM FIRE BLOOD 3000DXG",float:"阿波",mainLine:"PE",leader:"2.0",hook:"小磯",bait:"南極蝦"}];
function load(){try{return JSON.parse(localStorage.getItem(dataKey))||[]}catch{return[]}}function saveAll(r){localStorage.setItem(dataKey,JSON.stringify(r))}function today(){return new Date().toISOString().slice(0,10)}function weightToGrams(w,u){const n=parseFloat(String(w||"").replace(",","."));if(!Number.isFinite(n))return 0;if(u==="公斤")return n*1000;if(u==="台斤")return n*600;if(u==="兩")return n*37.5;if(u==="公克")return n;return n}
function initSelectors(){$("area").innerHTML=Object.keys(locations).map(x=>`<option>${x}</option>`).join("");$("area").addEventListener("change",updateCities);$("city").addEventListener("change",updateSpots);$("spot").addEventListener("change",renderSpotRecords);updateCities()}function updateCities(){const a=$("area").value;$("city").innerHTML=Object.keys(locations[a]).map(x=>`<option>${x}</option>`).join("");updateSpots()}function updateSpots(){const a=$("area").value,c=$("city").value;$("spot").innerHTML=locations[a][c].map(x=>`<option>${x}</option>`).join("");renderSpotRecords()}
function getPresets(){try{return JSON.parse(localStorage.getItem(presetKey))||defaultPresets}catch{return defaultPresets}}function setPresets(p){localStorage.setItem(presetKey,JSON.stringify(p))}function renderPresets(){const p=getPresets();$("presetSelect").innerHTML='<option value="">選擇釣組</option>'+p.map((x,i)=>`<option value="${i}">${escapeHtml(x.name)}</option>`).join("")}function applySelectedPreset(){const i=$("presetSelect").value;if(i==="")return;const p=getPresets()[Number(i)];["rod","reel","float","mainLine","leader","hook","bait"].forEach(id=>{if(p[id])$(id).value=p[id]});if(navigator.vibrate)navigator.vibrate(30)}function savePreset(){const name=$("presetName").value.trim();if(!name){alert("請輸入釣組名稱");return}const p=getPresets();p.push({name,rod:$("rod").value,reel:$("reel").value,float:$("float").value,mainLine:$("mainLine").value,leader:$("leader").value,hook:$("hook").value,bait:$("bait").value});setPresets(p);$("presetName").value="";renderPresets();alert("釣組已儲存")}
function loadQuickNotes(){try{quickNotes=JSON.parse(localStorage.getItem(quickKey))||quickNotes}catch{}renderQuickBtns()}function renderQuickBtns(){$("quickBtns").innerHTML=quickNotes.map(x=>`<button type="button" onclick="addNote('${escapeJs(x)}')">${escapeHtml(x)}</button>`).join("")}function addNote(t){if($("note").value.includes(t))return;$("note").value+=($("note").value?" ":"")+t}function addCustomNote(){const v=$("newNote").value.trim();if(!v)return;if(!quickNotes.includes(v)){quickNotes.push(v);localStorage.setItem(quickKey,JSON.stringify(quickNotes));renderQuickBtns()}$("newNote").value=""}
function saveRecord(){const area=$("area").value,city=$("city").value,spot=$("spot").value;const r={id:String(Date.now()),area,city,spot,date:$("date").value||today(),tide:$("tide").value,fish:$("fish").value.trim(),count:Number($("count").value||1),weight:$("weight").value.trim(),unit:$("unit").value,weightGrams:weightToGrams($("weight").value,$("unit").value),note:$("note").value.trim(),rod:$("rod").value,reel:$("reel").value,float:$("float").value,mainLine:$("mainLine").value,leader:$("leader").value,hook:$("hook").value,bait:$("bait").value};if(!r.fish&&!r.weight&&!r.note){alert("請至少填魚種、重量或備註");return}const records=load();records.unshift(r);saveAll(records);if(navigator.vibrate)navigator.vibrate(50);const spotCount=records.filter(x=>x.area===area&&x.city===city&&x.spot===spot).length;$("saveStatus").textContent=`✅ 已儲存到 ${spot}（共 ${spotCount} 筆）`;$("saveStatus").classList.remove("hidden");resetForm();renderSpotRecords();monthSearch();setTimeout(()=>$("saveStatus").classList.add("hidden"),2200)}function resetForm(){$("date").value=today();$("tide").value="未填";$("fish").value="";$("count").value=1;$("weight").value="";$("unit").value="台斤";$("note").value="";["rod","reel","float","mainLine","leader","hook","bait"].forEach(id=>$(id).value="未填")}
function renderSpotRecords(){const area=$("area").value,city=$("city").value,spot=$("spot").value;const records=load().filter(r=>r.area===area&&r.city===city&&r.spot===spot);const total=records.reduce((s,r)=>s+Number(r.count||1),0);const max=records.filter(r=>Number(r.weightGrams||0)>0).sort((a,b)=>b.weightGrams-a.weightGrams)[0];$("spotSummary").innerHTML=`<div class="stat-item"><b>${escapeHtml(spot)}</b><br>紀錄：${records.length} 筆｜漁獲：${total} 尾/份<br>最大魚：${max?`${escapeHtml(max.fish||"未填魚種")}｜${escapeHtml(max.weight)} ${escapeHtml(max.unit)}`:"尚無重量資料"}</div>`;$("recordList").innerHTML=records.length?records.map(r=>`<div class="record"><div class="record-title">${escapeHtml(r.date)}｜${escapeHtml(r.fish||"未填魚種")}</div><div class="meta">${escapeHtml(r.count||1)} 尾 / ${escapeHtml(r.weight||"未填")} ${escapeHtml(r.unit||"")}<br>${r.tide&&r.tide!=="未填"?`潮汐：${escapeHtml(r.tide)}<br>`:""}${r.bait&&r.bait!=="未填"?`餌料：${escapeHtml(r.bait)}<br>`:""}${gearText(r)}${r.note?`備註：${escapeHtml(r.note)}<br>`:""}</div><button class="delete" type="button" onclick="deleteRecord('${r.id}')">刪除此筆</button></div>`).join(""):"<p>此釣點尚無紀錄</p>"}function gearText(r){const rows=[];if(r.rod&&r.rod!=="未填")rows.push("釣竿："+escapeHtml(r.rod));if(r.reel&&r.reel!=="未填")rows.push("捲線器："+escapeHtml(r.reel));if(r.float&&r.float!=="未填")rows.push("浮標："+escapeHtml(r.float));if(r.mainLine&&r.mainLine!=="未填")rows.push("母線："+escapeHtml(r.mainLine));if(r.leader&&r.leader!=="未填")rows.push("子線："+escapeHtml(r.leader));if(r.hook&&r.hook!=="未填")rows.push("魚鉤："+escapeHtml(r.hook));return rows.length?rows.join("<br>")+"<br>":""}function deleteRecord(id){if(!confirm("確定刪除這筆紀錄？"))return;saveAll(load().filter(r=>r.id!==id));renderSpotRecords();monthSearch()}
function monthSearch(){const m=$("monthSelect").value;if(!m){$("monthResult").innerHTML="";drawChart([]);return}const fishMap={},spotMap={},tideMap={};let maxFish=null;load().forEach(r=>{if(!r.date||r.date.slice(5,7)!==m)return;const count=Number(r.count||1),fish=r.fish||"未填魚種",spot=r.spot||"未填釣點",tide=r.tide||"未填潮汐";fishMap[fish]=(fishMap[fish]||0)+count;spotMap[spot]=(spotMap[spot]||0)+count;tideMap[tide]=(tideMap[tide]||0)+count;if(Number(r.weightGrams||0)>0&&(!maxFish||r.weightGrams>maxFish.weightGrams))maxFish=r});const fishList=Object.entries(fishMap).sort((a,b)=>b[1]-a[1]),spotList=Object.entries(spotMap).sort((a,b)=>b[1]-a[1]),tideList=Object.entries(tideMap).sort((a,b)=>b[1]-a[1]);$("monthResult").innerHTML=`<div class="month-item"><b>歷年 ${Number(m)} 月魚種統計</b><br>${rankText(fishList)}</div><div class="month-item"><b>歷年 ${Number(m)} 月釣點統計</b><br>${rankText(spotList)}</div><div class="month-item"><b>歷年 ${Number(m)} 月潮汐統計</b><br>${rankText(tideList)}</div><div class="month-item"><b>歷年 ${Number(m)} 月最大魚</b><br>${maxFish?`${escapeHtml(maxFish.fish||"未填魚種")}｜${escapeHtml(maxFish.weight)} ${escapeHtml(maxFish.unit)}｜${escapeHtml(maxFish.spot)}｜${escapeHtml(maxFish.tide||"未填潮汐")}`:"尚無重量資料"}</div>`;drawChart(fishList.slice(0,5))}function rankText(list){return list.length?list.map(([k,v],i)=>`${i+1}. ${escapeHtml(k)}：${v}`).join("<br>"):"此月份尚無資料"}function drawChart(entries){const c=$("monthChart"),ctx=c.getContext("2d");ctx.clearRect(0,0,c.width,c.height);if(!entries||!entries.length)return;const max=Math.max(...entries.map(e=>e[1]),1),barW=42,gap=18,base=145;ctx.font="12px sans-serif";entries.forEach(([name,count],i)=>{const x=18+i*(barW+gap),h=(count/max)*110;ctx.fillStyle="#0f766e";ctx.fillRect(x,base-h,barW,h);ctx.fillStyle="#0f172a";ctx.fillText(String(count),x+10,base-h-6);ctx.fillText(name.slice(0,3),x,168)})}function escapeHtml(v){return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function escapeJs(v){return String(v).replaceAll("\\","\\\\").replaceAll("'","\\'")}
$("saveBtn").addEventListener("click",saveRecord);$("monthSelect").addEventListener("change",monthSearch);$("applyPresetBtn").addEventListener("click",applySelectedPreset);$("savePresetBtn").addEventListener("click",savePreset);$("addNoteBtn").addEventListener("click",addCustomNote);$("date").value=today();initSelectors();resetForm();renderPresets();loadQuickNotes();renderSpotRecords();function updatePreset(){
  const index = $("presetSelect").value;
  if(index === ""){
    alert("請先選擇要修改的釣組");
    return;
  }

  const presets = getPresets();
  presets[index] = {
    name: presets[index].name,
    rod: $("rod").value,
    reel: $("reel").value,
    float: $("float").value,
    mainLine: $("mainLine").value,
    leader: $("leader").value,
    hook: $("hook").value,
    bait: $("bait").value
  };

  setPresets(presets);
  renderPresets();
  $("presetSelect").value = index;
  alert("釣組已更新");
}

function deletePreset(){
  const index = $("presetSelect").value;
  if(index === ""){
    alert("請先選擇要刪除的釣組");
    return;
  }

  if(!confirm("確定刪除此釣組？")) return;

  const presets = getPresets();
  presets.splice(index, 1);
  setPresets(presets);
  renderPresets();
  alert("釣組已刪除");
}

function exportData(){
  const data = {
    records: load(),
    presets: getPresets(),
    quickNotes: quickNotes
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "fishing_backup.json";
  a.click();

  URL.revokeObjectURL(url);
}

function importData(file){
  const reader = new FileReader();

  reader.onload = function(e){
    try{
      const data = JSON.parse(e.target.result);

      if(data.records) localStorage.setItem(dataKey, JSON.stringify(data.records));
      if(data.presets) localStorage.setItem(presetKey, JSON.stringify(data.presets));
      if(data.quickNotes) localStorage.setItem(quickKey, JSON.stringify(data.quickNotes));

      alert("還原成功！");
      location.reload();
    }catch{
      alert("檔案錯誤！");
    }
  };

  reader.readAsText(file);
}

$("exportBtn").addEventListener("click", exportData);
$("importBtn").addEventListener("click", () => $("importFile").click());
$("importFile").addEventListener("change", e => {
  if(e.target.files.length) importData(e.target.files[0]);
});$("updatePresetBtn").addEventListener("click", updatePreset);
$("deletePresetBtn").addEventListener("click", deletePreset);
