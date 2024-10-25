"use strict";(()=>{var e={};e.id=568,e.ids=[568,888,660],e.modules={566:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>g,getStaticPaths:()=>p,getStaticProps:()=>m,reportWebVitals:()=>x,routeModule:()=>f,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>b});var s=a(7093),i=a(5244),n=a(1323),l=a(9694),o=a(6729),c=a(6012),d=e([c]);c=(d.then?(await d)():d)[0];let u=(0,n.l)(c,"default"),m=(0,n.l)(c,"getStaticProps"),p=(0,n.l)(c,"getStaticPaths"),g=(0,n.l)(c,"getServerSideProps"),h=(0,n.l)(c,"config"),x=(0,n.l)(c,"reportWebVitals"),b=(0,n.l)(c,"unstable_getStaticProps"),v=(0,n.l)(c,"unstable_getStaticPaths"),_=(0,n.l)(c,"unstable_getStaticParams"),S=(0,n.l)(c,"unstable_getServerProps"),y=(0,n.l)(c,"unstable_getServerSideProps"),f=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/campaigns/[id]",pathname:"/campaigns/[id]",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:c});r()}catch(e){r(e)}})},8982:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(997);a(6689);let s=({buttonText:e,setVisible:t,className:a})=>r.jsx("button",{onClick:()=>t(!0),className:`bg-mahakarya text-white py-2 px-4 rounded-md hover:bg-mahakarya-dark transition duration-200 ease-in-out shadow-md transform hover:scale-105 ${a}`,children:e})},9694:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(997),s=a(6859);function i(){return(0,r.jsxs)(s.Html,{lang:"en",children:[r.jsx(s.Head,{}),(0,r.jsxs)("body",{className:"antialiased",children:[r.jsx(s.Main,{}),r.jsx(s.NextScript,{})]})]})}},6012:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>m,getServerSideProps:()=>p});var s=a(997),i=a(1163),n=a(6689),l=a(7455),o=a(8982),c=a(5823),d=a(2877),u=e([c]);c=(u.then?(await u)():u)[0];let m=({campaign:e,totalAmount:t})=>{let a=(0,i.useRouter)(),[r,c]=(0,n.useState)(!1),u=(e=>{let t=new Date(e),a=new Date,r=t.getTime()-a.getTime(),s=Math.ceil(r/864e5);return s>=0?s:0})(e.endDate),m=parseInt(e.targetAmount)-t,p=t&&e.targetAmount?t/parseFloat(e.targetAmount)*100:0;return(0,s.jsxs)("div",{className:"min-h-screen bg-gray-100 py-10",children:[s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"bg-white shadow-md rounded-lg overflow-hidden",children:[s.jsx("img",{src:e.imageUrl,alt:e.title,className:"h-64 w-full object-cover"}),(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("h3",{className:"text-2xl font-semibold mb-4",children:e.title}),s.jsx("div",{className:"text-gray-600 mb-6",dangerouslySetInnerHTML:{__html:e.description}}),(0,s.jsxs)("p",{className:"text-gray-600 mb-5",children:["Tenggat waktu:"," ",0===u?"Kampanye telah berakhir":`${u} hari`]}),(0,s.jsxs)("div",{className:"mb-5",children:[(0,s.jsxs)("p",{className:"text-gray-600 mb-2",children:["Total terkumpul: ",(0,d.x)(t)]}),s.jsx("div",{className:"w-full bg-gray-200 rounded-full h-4 overflow-hidden",children:s.jsx("div",{className:"bg-mahakarya h-4 rounded-full",style:{width:`${Math.min(p,100)}%`}})}),s.jsx("p",{className:`text-gray-600 mb-5 ${m>0?"text-red-600":"text-green-600"}`,children:m>0?`Kurang: ${(0,d.x)(m)} untuk mencapai target`:`Total terkumpul melebihi target sebesar ${(0,d.x)(t-parseInt(e.targetAmount))}!`}),(0,s.jsxs)("p",{className:"text-sm text-gray-500 mt-2",children:[p.toFixed(2),"% dari target tercapai"]})]}),s.jsx(o.Z,{buttonText:e.buttonText,setVisible:c,className:"my-custom-class"}),s.jsx("button",{onClick:()=>a.back(),className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-4",children:"Kembali ke Home"})]})]})}),r&&s.jsx(l.Z,{onClose:()=>c(!1),campaignId:Number(e.id),isVisible:r})]})},p=async({params:e})=>{let t=(await (0,c._)()).find(t=>t.id.toString()===e?.id);if(!t)return{notFound:!0};let a=0;try{let e=await fetch(`https://vercel-backend-flax.vercel.app/total-amount/${t.id}`,{method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","User-Agent":"CustomUserAgent"}});a=(await e.json()).totalAmount||0}catch(e){console.error("Error fetching total amount:",e)}return{props:{campaign:t,totalAmount:a}}};r()}catch(e){r(e)}})},5823:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{_:()=>l});var s=a(9270),i=a(1208),n=e([s,i]);[s,i]=n.then?(await n)():n;let l=async()=>{let e=(0,i.ref)(s.F,"campaigns"),t=(await (0,i.get)(e)).val()||{};return Object.keys(t).map(e=>({id:e,...t[e]}))};r()}catch(e){r(e)}})},9270:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{F:()=>c});var s=a(3745),i=a(1208),n=e([s,i]);[s,i]=n.then?(await n)():n;let l={apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,databaseURL:"https://adminfirebase-f4-default-rtdb.asia-southeast1.firebasedatabase.app/",storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID},o=(0,s.initializeApp)(l),c=(0,i.getDatabase)(o);r()}catch(e){r(e)}})},2877:(e,t,a)=>{a.d(t,{x:()=>r});let r=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(e)},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},5452:e=>{e.exports=require("react-phone-input-2")},997:e=>{e.exports=require("react/jsx-runtime")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},1568:e=>{e.exports=require("zlib")},3745:e=>{e.exports=import("firebase/app")},1208:e=>{e.exports=import("firebase/database")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[977,994,859,342,729],()=>a(566));module.exports=r})();