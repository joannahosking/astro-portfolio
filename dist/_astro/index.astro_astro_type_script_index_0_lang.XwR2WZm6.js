import{g as r}from"./index.DjKJqAo0.js";function e(){const n=r.utils.toArray(".blog li a"),o=document.querySelector("#cursor");o&&n.forEach(t=>{t.addEventListener("mouseenter",()=>{r.to(o,{width:"2rem",height:"2rem",backgroundColor:"var(--accent-color)",opacity:.25,duration:.25,zIndex:-1})}),t.addEventListener("mouseleave",()=>{r.to(o,{width:"0.75rem",height:"0.75rem",backgroundColor:"var(--alt-color)",opacity:1,duration:.25,zIndex:1})})})}e();document.addEventListener("astro:after-swap",()=>{e()});
