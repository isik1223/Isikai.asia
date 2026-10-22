// Проверка входа через Telegram. Запуск: 8373078065:AAFYGE1JLQN5JTmDRJB8S7s70ZyUe8jGT70 node server.js
const http=require("http"),crypto=require("crypto"),TOKEN=process.env.8373078065:AAFYGE1JLQN5JTmDRJB8S7s70ZyUe8jGT70;
const key=crypto.createHash("sha256").update(8373078065:AAFYGE1JLQN5JTmDRJB8S7s70ZyUe8jGT70||"").digest();
function ok(d){const{hash,...r}=d;const s=Object.keys(r).sort().map(k=>k+"="+r[k]).join("\n");
 const h=crypto.createHmac("sha256",key).update(s).digest("hex");return h===hash&&Date.now()/1000-r.auth_date<86400}
http.createServer((q,s)=>{s.setHeader("Access-Control-Allow-Origin",process.env.ORIGIN||"*");s.setHeader("Access-Control-Allow-Headers","Content-Type");
 if(q.method=="OPTIONS")return s.end();
 if(q.method=="POST"&&q.url=="/api/tg-auth"){let b="";q.on("data",c=>b+=c);q.on("end",()=>{try{s.statusCode=ok(JSON.parse(b))?200:401}catch{s.statusCode=400}s.end()});return}
 s.statusCode=404;s.end()}).listen(process.env.PORT||3000);
