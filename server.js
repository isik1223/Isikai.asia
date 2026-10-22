// Проверка входа через Telegram. Запуск: BOT_TOKEN=xxx node server.js
const http=require("http"),crypto=require("crypto"),TOKEN=process.env.BOT_TOKEN;
const key=crypto.createHash("sha256").update(TOKEN||"").digest();
function ok(d){const{hash,...r}=d;const s=Object.keys(r).sort().map(k=>k+"="+r[k]).join("\n");
 const h=crypto.createHmac("sha256",key).update(s).digest("hex");return h===hash&&Date.now()/1000-r.auth_date<86400}
http.createServer((q,s)=>{s.setHeader("Access-Control-Allow-Origin",process.env.ORIGIN||"*");s.setHeader("Access-Control-Allow-Headers","Content-Type");
 if(q.method=="OPTIONS")return s.end();
 if(q.method=="POST"&&q.url=="/api/tg-auth"){let b="";q.on("data",c=>b+=c);q.on("end",()=>{try{s.statusCode=ok(JSON.parse(b))?200:401}catch{s.statusCode=400}s.end()});return}
 s.statusCode=404;s.end()}).listen(process.env.PORT||3000);
