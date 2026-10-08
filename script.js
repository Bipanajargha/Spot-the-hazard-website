/* Analytics: GoatCounter (free, cookie-less). 1) Sign up at goatcounter.com, 2) replace YOURCODE with your site code. */
(function(){var GC="YOURCODE";if(GC==="YOURCODE")return;var g=document.createElement("script");g.async=true;g.src="https://gc.zgo.at/count.js";g.setAttribute("data-goatcounter","https://"+GC+".goatcounter.com/count");document.head.appendChild(g)})();
(function(){var d=document,p=d.createElement("div");p.className="prog";d.body.appendChild(p);
addEventListener("scroll",function(){p.style.width=scrollY/(d.body.scrollHeight-innerHeight)*100+"%"},{passive:true});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.15});
d.querySelectorAll("[data-r]").forEach(function(el,i){el.style.transitionDelay=(i%4)*90+"ms";io.observe(el)});
var co=new IntersectionObserver(function(e){e.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var el=x.target,n=+el.dataset.n,s=el.dataset.s||"",t0=performance.now();
(function f(t){var k=Math.min((t-t0)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)})});
d.querySelectorAll("[data-n]").forEach(function(el){co.observe(el)});
var tm=d.getElementById("tm");if(tm){var t=41;setInterval(function(){t=t>0?t-1:41;tm.textContent="00:"+(t<10?"0":"")+t},1000);
var sc=d.getElementById("sc"),fb=d.getElementById("fb"),done=0;
d.querySelectorAll(".q button").forEach(function(b){b.onclick=function(){if(done)return;done=1;var ok=b.dataset.ok;b.className=ok?"ok":"no";
d.querySelectorAll(".q button").forEach(function(x){x.disabled=true;if(x.dataset.ok)x.className="ok"});
sc.textContent=ok?45:37;sc.className=ok?"up":"dn";fb.className="fb "+(ok?"good":"bad");fb.textContent=ok?"+5 Correct. Reporting it keeps everyone safe.":"-3 Not quite. Never ignore it or fix it alone.";
setTimeout(function(){done=0;sc.textContent=40;sc.className="";fb.className="fb";fb.textContent="";d.querySelectorAll(".q button").forEach(function(x){x.disabled=false;x.className=""})},4500)}})}})();

(function(){var lb=document.getElementById("lb");if(!lb)return;var im=lb.querySelector("img");
function close(){lb.hidden=true;document.body.style.overflow=""}
document.querySelectorAll("[data-lb]").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();im.src=a.getAttribute("href");im.alt=a.dataset.lb;lb.hidden=false;document.body.style.overflow="hidden";lb.querySelector("button").focus()})});
lb.addEventListener("click",close);addEventListener("keydown",function(e){if(e.key==="Escape")close()})})();

/* ===== Portfolio: video chapters + screenshot viewer ===== */
(function(){
var d=document,v=d.getElementById("pfv");
if(v){
 var wrap=v.parentNode,play=d.getElementById("pfp"),btns=[].slice.call(d.querySelectorAll("#pfc button"));
 function go(t){v.currentTime=t;var p=v.play();if(p&&p.catch)p.catch(function(){})}
 play.addEventListener("click",function(){var p=v.play();if(p&&p.catch)p.catch(function(){})});
 v.addEventListener("play",function(){wrap.classList.add("playing")});
 v.addEventListener("ended",function(){wrap.classList.remove("playing")});
 btns.forEach(function(b){b.addEventListener("click",function(){go(+b.dataset.t)})});
 v.addEventListener("timeupdate",function(){var c=0;btns.forEach(function(b,i){if(v.currentTime>=+b.dataset.t-.25)c=i});
  btns.forEach(function(b,i){b.classList.toggle("on",i===c)})});
}
var S=window.PF_SHOTS,root=d.getElementById("pfs");
if(!S||!root)return;
var img=d.getElementById("pfimg"),a=d.getElementById("pfa"),n=d.getElementById("pfn"),t=d.getElementById("pft"),
 dd=d.getElementById("pfd"),h=d.getElementById("pfh"),cap=root.querySelector(".pf-cap"),
 th=[].slice.call(d.querySelectorAll(".pf-th")),cur=0,lb=d.getElementById("lb");
function show(i,fromKey){
 cur=(i+S.length)%S.length;var s=S[cur];
 img.classList.add("fade");
 setTimeout(function(){img.src=s.src;img.alt=s.alt;img.classList.remove("fade")},120);
 a.href=s.src;a.setAttribute("data-lb",s.alt);
 n.textContent=cur+1;t.textContent=s.t;dd.textContent=s.d;h.textContent=s.h;
 cap.classList.remove("swap");void cap.offsetWidth;cap.classList.add("swap");
 th.forEach(function(b,k){var on=k===cur;b.classList.toggle("on",on);b.setAttribute("aria-selected",on)});
 var tb=th[cur];if(tb&&tb.scrollIntoView&&innerWidth<=800)tb.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"});
 var nx=new Image();nx.src=S[(cur+1)%S.length].src;
 if(lb&&!lb.hidden){lb.querySelector("img").src=s.src;lb.querySelector("img").alt=s.alt}
}
root.querySelector(".prev").addEventListener("click",function(){show(cur-1)});
root.querySelector(".next").addEventListener("click",function(){show(cur+1)});
th.forEach(function(b){b.addEventListener("click",function(){show(+b.dataset.i)})});
addEventListener("keydown",function(e){
 var inLb=lb&&!lb.hidden;
 if(!inLb&&(e.target.closest&&e.target.closest("input,textarea,select,video,iframe")))return;
 if(e.key==="ArrowRight"&&(inLb||root.contains(e.target)||e.target===d.body)){show(cur+1)}
 else if(e.key==="ArrowLeft"&&(inLb||root.contains(e.target)||e.target===d.body)){show(cur-1)}
});
})();
