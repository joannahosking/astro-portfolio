const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.CKkh8ZD3.js","_astro/preact.module.yVoj08gZ.js","_astro/hooks.module.Dn0lRCt6.js"])))=>i.map(i=>d[i]);
import{_ as f,B as p,D as y}from"./preact.module.yVoj08gZ.js";const w="modulepreload",E=function(e){return"/"+e},h={},S=function(l,n,i){let d=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");d=Promise.all(n.map(r=>{if(r=E(r),r in h)return;h[r]=!0;const s=r.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const t=document.createElement("link");if(t.rel=s?"stylesheet":w,s||(t.as="script",t.crossOrigin=""),t.href=r,o&&t.setAttribute("nonce",o),document.head.appendChild(t),s)return new Promise((u,m)=>{t.addEventListener("load",u),t.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})}))}return d.then(()=>l()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},_=({value:e,name:l,hydrate:n=!0})=>e?f(n?"astro-slot":"astro-static-slot",{name:l,dangerouslySetInnerHTML:{__html:e}}):null;_.shouldComponentUpdate=()=>!1;var v=_;const g=new Map;var N=e=>async(l,n,{default:i,...d},{client:a})=>{if(!e.hasAttribute("ssr"))return;for(const[s,c]of Object.entries(d))n[s]=f(v,{value:c,name:s});if(e.dataset.preactSignals){const{signal:s}=await S(async()=>{const{signal:t}=await import("./signals.module.CKkh8ZD3.js");return{signal:t}},__vite__mapDeps([0,1,2]));let c=JSON.parse(e.dataset.preactSignals);for(const[t,u]of Object.entries(c)){if(!g.has(u)){const m=s(n[t]);g.set(u,m)}n[t]=g.get(u)}}(a!=="only"?y:p)(f(l,n,i!=null?f(v,{value:i}):i),e),e.addEventListener("astro:unmount",()=>p(null,e),{once:!0})};export{N as default};
