function E(id){ return document.getElementById(id); }
function storeGet(k,d){ try{ return JSON.parse(localStorage.getItem(k)||d); }catch(e){ return JSON.parse(d); } }
function storeSet(k,v){ localStorage.setItem(k,JSON.stringify(v)); }

const TYPES = {
  en:["Feature Film","Web Series","Documentary","Ad Film","Short Film"],
  hi:["फ़ीचर फ़िल्म","वेब सीरीज़","डॉक्यूमेंट्री","एड फ़िल्म","शॉर्ट फ़िल्म"],
  gu:["ફિચર ફિલ્મ","વેબ સિરીઝ","ડોક્યુમેન્ટ્રી","એડ ફિલ્મ","શોર્ટ ફિલ્મ"]
};
const T = {
en: { tag:"Film Production, One Chain — Script to Budget", phone:"Phone or Email",
next:"Continue", otpTag:"Enter the 6-digit code (demo: 123456)", verify:"Verify & Enter",
wrong:"Wrong code — try again", homeTag:"Your Projects", newBtn:"+ New Project",
contacts:"Contacts", out:"Log out", newTitle:"New Project", newTag:"Step 1 of the chain",
pName:"Project name", pType:"Project type", create:"Create Project",
needName:"Enter project name first", needType:"Select a project type", created:"Project created!",
cTitle:"Contacts", cTag:"Your master phone book", cName:"Full name", cPhone:"Phone number",
cJob:"Profession (e.g. Cameraman, Actor)", addC:"Add Contact", cNeed:"Enter name and phone",
cAdded:"Contact added!", noC:"No contacts yet", open:"Open",
tabCast:"Cast & Crew", tabScript:"Script", tabSched:"Schedule", tabBud:"Budget",
addCast:"+ Add from Contacts", pick:"Pick Contact", pickTag:"Tap to add to this project",
pickEmpty:"First add contacts from the Home screen", noCast:"No one added yet",
hintScript:"Coming next — Script writing & import (Bollywood formats).",
hintSched:"Coming after Script — auto schedule from scenes.",
hintBud:"Coming after Schedule — budget from scenes & cast.",
remove:"Remove" },
hi: { tag:"फिल्म प्रोडक्शन, एक श्रृंखला — Script से Budget तक", phone:"फ़ोन या ईमेल",
next:"आगे बढ़ें", otpTag:"6 अंक का कोड डालें (डेमो: 123456)", verify:"जाँचें और प्रवेश करें",
wrong:"गलत कोड — फिर कोशिश करें", homeTag:"आपके प्रोजेक्ट", newBtn:"+ नया प्रोजेक्ट",
contacts:"Contacts", out:"लॉग आउट", newTitle:"नया प्रोजेक्ट", newTag:"श्रृंखला का पहला कदम",
pName:"प्रोजेक्ट का नाम", pType:"प्रोजेक्ट का प्रकार", create:"प्रोजेक्ट बनाएँ",
needName:"पहले नाम डालें", needType:"प्रकार चुनें", created:"प्रोजेक्ट बन गया!",
cTitle:"Contacts", cTag:"आपकी मास्टर फ़ोन बुक", cName:"पूरा नाम", cPhone:"फ़ोन नंबर",
cJob:"पेशा (जैसे Cameraman, Actor)", addC:"Contact जोड़ें", cNeed:"नाम और फ़ोन डालें",
cAdded:"जुड़ गया!", noC:"अभी कोई contact नहीं", open:"खोलें",
tabCast:"Cast & Crew", tabScript:"Script", tabSched:"Schedule", tabBud:"Budget",
addCast:"+ Contacts से जोड़ें", pick:"Contact चुनें", pickTag:"इस प्रोजेक्ट में जोड़ने के लिए दबाएँ",
pickEmpty:"पहले Home से contacts जोड़ें", noCast:"अभी कोई नहीं जुड़ा",
hintScript:"आगे आ रहा है — Script लेखन व import (Bollywood formats).",
hintSched:"Script के बाद — scenes से schedule अपने आप.",
hintBud:"Schedule के बाद — scenes व cast से budget.",
remove:"निकालें" },
gu: { tag:"ફિલ્મ પ્રોડક્શન, એક સાંકળ — Script થી Budget સુધી", phone:"ફોન નંબર કે ઈમેલ",
next:"આગળ વધો", otpTag:"6 આંકડા નો કોડ નાખો (ડેમો: 123456)", verify:"ચકાસો અને પ્રવેશો",
wrong:"ખોટો કોડ — ફરી પ્રયત્ન કરો", homeTag:"તમારા પ્રોજેક્ટ", newBtn:"+ નવું પ્રોજેક્ટ",
contacts:"Contacts", out:"બહાર નીકળો", newTitle:"નવું પ્રોજેક્ટ", newTag:"સાંકળ નું પહેલું પગલું",
pName:"પ્રોજેક્ટ નું નામ", pType:"પ્રોજેક્ટ નો પ્રકાર", create:"પ્રોજેક્ટ બનાવો",
needName:"પહેલા નામ નાખો", needType:"પ્રકાર પસંદ કરો", created:"પ્રોજેક્ટ બની ગયો!",
cTitle:"Contacts", cTag:"તમારી Master ફોન બુક", cName:"પૂરું નામ", cPhone:"ફોન નંબર",
cJob:"વ્યવસાય (જેમ કે Cameraman, Actor)", addC:"Contact ઉમેરો", cNeed:"નામ અને ફોન નાખો",
cAdded:"ઉમેરાયો!", noC:"હજુ કોઈ contact નથી", open:"ખોલો",
tabCast:"Cast & Crew", tabScript:"Script", tabSched:"Schedule", tabBud:"Budget",
addCast:"+ Contacts માંથી ઉમેરો", pick:"Contact પસંદ કરો", pickTag:"આ પ્રોજેક્ટ માં ઉમેરવા ટેપ કરો",
pickEmpty:"પહેલા Home થી contacts ઉમેરો", noCast:"હજુ કોઈ ઉમેરાયો નથી",
hintScript:"આગળ આવી રહ્યું — Script લખાણ અને import (Bollywood formats).",
hintSched:"Script પછી — scenes થી schedule આપોઆપ.",
hintBud:"Schedule પછી — scenes અને cast થી budget.",
remove:"કાઢો" }
};

let lang = localStorage.getItem("cs_lang") || "gu";
let pickedType = -1;
let curProj = null;
let projTabCur = "cast";

function t(){ return T[lang]; }

(function buildOtp(){
  const row = E("otpRow");
  for(let i=0;i<6;i++){
    const b = document.createElement("input");
    b.maxLength = 1; b.inputMode = "numeric";
    b.addEventListener("input", function(){
      if(b.value.length>1) b.value = b.value.slice(0,1);
      if(b.value && i<5){ const a=row.querySelectorAll("input"); a[i+1].focus(); }
    });
    b.addEventListener("keydown", function(e){
      if(e.key==="Backspace"){
        if(b.value){ b.value=""; e.preventDefault(); }
        else if(i>0){ const a=row.querySelectorAll("input"); a[i-1].focus(); a[i-1].value=""; e.preventDefault(); }
      }
    });
    row.appendChild(b);
  }
})();

function setLang(l){
  lang = l; localStorage.setItem("cs_lang", l);
  const x = t();
  E("tag").textContent = x.tag;
  E("lblPhone").textContent = x.phone;
  E("btnNext").textContent = x.next;
  E("otpTag").textContent = x.otpTag;
  E("btnVerify").textContent = x.verify;
  E("homeTag").textContent = x.homeTag;
  E("btnNew").textContent = x.newBtn;
  E("btnContacts").textContent = x.contacts;
  E("btnOut").textContent = x.out;
  E("lblNewTitle").textContent = x.newTitle;
  E("lblNewTag").textContent = x.newTag;
  E("lblPName").textContent = x.pName;
  E("lblPType").textContent = x.pType;
  E("btnCreate").textContent = x.create;
  E("lblCTitle").textContent = x.cTitle;
  E("lblCTag").textContent = x.cTag;
  E("lblCName").textContent = x.cName;
  E("lblCPhone").textContent = x.cPhone;
  E("lblCJob").textContent = x.cJob;
  E("btnAddC").textContent = x.addC;
  E("tabCast").textContent = x.tabCast;
  E("tabScript").textContent = x.tabScript;
  E("tabSched").textContent = x.tabSched;
  E("tabBud").textContent = x.tabBud;
  E("btnAddCast").textContent = x.addCast;
  E("lblPick").textContent = x.pick;
  E("lblPickTag").textContent = x.pickTag;
  E("hintScript").textContent = x.hintScript;
  E("hintSched").textContent = x.hintSched;
  E("hintBud").textContent = x.hintBud;
  E("ch-en").classList.toggle("on", l==="en");
  E("ch-hi").classList.toggle("on", l==="hi");
  E("ch-gu").classList.toggle("on", l==="gu");
  const box = E("types");
  box.querySelectorAll(".type").forEach(function(d,i){ d.textContent = TYPES[l][i]; });
  renderTypes(); renderList(); renderContacts(); renderProj(); renderPick(); renderCast();
}

function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.setItem("cs_dark", document.body.classList.contains("dark")?"1":"0");
}

function show(id){
  document.querySelectorAll(".screen").forEach(function(s){ s.classList.remove("on"); });
  E(id).classList.add("on");
  if(id==="scrHome") renderList();
  if(id==="scrContacts") renderContacts();
  if(id==="scrProj") renderProj();
  if(id==="scrPick") renderPick();
}

function renderTypes(){
  const box = E("types");
  box.querySelectorAll(".type").forEach(function(d,i){
    d.classList.toggle("on", i===pickedType);
  });
}

(function buildTypes(){
  const box = E("types");
  for(let i=0;i<5;i++){
    const d = document.createElement("div");
    d.className = "type";
    d.onclick = function(){ pickedType = i; renderTypes(); };
    box.appendChild(d);
  }
})();

function renderList(){
  const ps = storeGet("cs_projects","[]");
  const box = E("plist");
  box.innerHTML = "";
  ps.forEach(function(p){
    const d = document.createElement("div");
    d.className = "item click";
    d.innerHTML = "<span><b>"+p.name+"</b></span>";
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = TYPES[lang][p.type];
    d.appendChild(b);
    d.onclick = function(){ curProj = p.id; show("scrProj"); };
    box.appendChild(d);
  });
}

function createProject(){
  const x = t(), name = E("pname").value.trim(), msg = E("pMsg");
  if(!name){ msg.className="msg err"; msg.textContent=x.needName; return; }
  if(pickedType<0){ msg.className="msg err"; msg.textContent=x.needType; return; }
  const ps = storeGet("cs_projects","[]");
  ps.push({ id:"p"+Date.now(), name:name, type:pickedType });
  storeSet("cs_projects", ps);
  E("pname").value = "";
  pickedType = -1; renderTypes();
  msg.className = "msg ok"; msg.textContent = x.created;
  setTimeout(function(){ show("scrHome"); }, 600);
}

function renderContacts(){
  const x = t(), cs = storeGet("cs_contacts","[]"), box = E("clist");
  box.innerHTML = cs.length ? "" : '<p class="empty">'+x.noC+'</p>';
  cs.forEach(function(c, idx){
    const d = document.createElement("div");
    d.className = "item";
    d.innerHTML = "<span><b>"+c.name+"</b><br><small>"+c.phone+" • "+c.job+"</small></span>";
    const del = document.createElement("button");
    del.className = "del"; del.textContent = "✕";
    del.onclick = function(){ cs.splice(idx,1); storeSet("cs_contacts",cs); renderContacts(); };
    d.appendChild(del);
    box.appendChild(d);
  });
}

function addContact(){
  const x = t(), name = E("cname").value.trim(), phone = E("cphone").value.trim(),
        job = E("cjob").value.trim(), msg = E("cMsg");
  if(!name || !phone){ msg.className="msg err"; msg.textContent=x.cNeed; return; }
  const cs = storeGet("cs_contacts","[]");
  cs.push({ id:"c"+Date.now(), name:name, phone:phone, job:(job||"—") });
  storeSet("cs_contacts", cs);
  E("cname").value = ""; E("cphone").value = ""; E("cjob").value = "";
  msg.className = "msg ok"; msg.textContent = x.cAdded;
  renderContacts();
}

function projTab(which){
  projTabCur = which;
  E("tabCast").classList.toggle("on", which==="cast");
  E("tabScript").classList.toggle("on", which==="script");
  E("tabSched").classList.toggle("on", which==="sched");
  E("tabBud").classList.toggle("on", which==="bud");
  E("paneCast").style.display = which==="cast" ? "block" : "none";
  E("paneScript").style.display = which==="script" ? "block" : "none";
  E("paneSched").style.display = which==="sched" ? "block" : "none";
  E("paneBud").style.display = which==="bud" ? "block" : "none";
}

function renderProj(){
  if(!curProj) return;
  const ps = storeGet("cs_projects","[]");
  let p = null;
  for(let i=0;i<ps.length;i++){ if(ps[i].id===curProj) p = ps[i]; }
  if(!p) return;
  E("projName").textContent = p.name;
  E("projType").textContent = TYPES[lang][p.type];
  renderCast();
}

function renderPick(){
  const x = t(), cs = storeGet("cs_contacts","[]"), box = E("pickList");
  box.innerHTML = cs.length ? "" : '<p class="empty">'+x.pickEmpty+'</p>';
  cs.forEach(function(c){
    const d = document.createElement("div");
    d.className = "item click";
    d.innerHTML = "<span><b>"+c.name+"</b><br><small>"+c.phone+" • "+c.job+"</small></span>";
    const b = document.createElement("span");
    b.className = "badge"; b.textContent = "+";
    d.appendChild(b);
    d.onclick = function(){ addToCast(c.id); };
    box.appendChild(d);
  });
}

function renderCast(){
  const x = t();
  if(!curProj) return;
  const cast = storeGet("cs_cast","[]");
  const cs = storeGet("cs_contacts","[]");
  const box = E("castList");
  const mine = cast.filter(function(m){ return m.projId===curProj; });
  box.innerHTML = mine.length ? "" : '<p class="empty">'+x.noCast+'</p>';
  mine.forEach(function(m){
    let c = null;
    for(let i=0;i<cs.length;i++){ if(cs[i].id===m.contactId) c = cs[i]; }
    if(!c) return;
    const d = document.createElement("div");
    d.className = "item";
    d.innerHTML = "<span><b>"+c.name+"</b><br><small>"+c.phone+" • "+c.job+"</small></span>";
    const del = document.createElement("button");
    del.className = "del"; del.textContent = "✕";
    del.onclick = function(){
      const all = storeGet("cs_cast","[]");
      const kept = all.filter(function(z){ return !(z.projId===curProj && z.contactId===m.contactId); });
      storeSet("cs_cast", kept);
      renderCast();
    };
    d.appendChild(del);
    box.appendChild(d);
  });
}

function addToCast(contactId){
  const all = storeGet("cs_cast","[]");
  const dup = all.some(function(z){ return z.projId===curProj && z.contactId===contactId; });
  if(!dup){ all.push({ projId:curProj, contactId:contactId }); storeSet("cs_cast", all); }
  show("scrProj");
}

function sendOtp(){
  if(!E("phone").value.trim()){ E("phone").focus(); return; }
  show("scrOtp");
  E("otpRow").querySelectorAll("input")[0].focus();
}

function verifyOtp(){
  const inputs = E("otpRow").querySelectorAll("input");
  let code = "";
  inputs.forEach(function(i){ code = code + i.value; });
  if(code==="123456"){
    storeSet("cs_user", { phone: E("phone").value.trim() });
    inputs.forEach(function(i){ i.value = ""; });
    show("scrHome");
  } else {
    E("otpMsg").className = "msg err c";
    E("otpMsg").textContent = t().wrong;
  }
}

function doLogout(){
  storeSet("cs_user", null);
  E("phone").value = "";
  show("scrLogin");
}

if(localStorage.getItem("cs_dark")==="1") document.body.classList.add("dark");

const u = storeGet("cs_user", null);
setLang(lang);
if(u && u.phone){ show("scrHome"); }

E("phone").addEventListener("keydown", function(e){ if(e.key==="Enter") sendOtp(); });
