(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{15:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(1);var s=o.default.button`
  background-size: 1rem 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(2, 2, 2, 0.6);
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 8px black;
  transition: background-image 0.5s;
`,i=a.p+"static/assets/info.9e24a9a9.svg",c=a.p+"static/assets/close.35c9109c.svg",m=a(6);a.d(e,"default",(function(){return u}));const l=Object(o.default)(s)`
  z-index: 998;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
  background-image: url(${i});
  &.close {
    background-image: url(${c});
  }
`,f=o.default.section`
  z-index: 998;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px black;
  position: fixed;
  right: 0.5rem;
  bottom: 2.5rem;
  background: rgba(2, 2, 2, 0.6);
  padding: 1rem;
  animation: ${m.h} 1s;
  padding: 1rem;

  .line {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    &.title {
      font-size: 1.4rem;
      font-weight: 800;
    }
    &.github > span {
      margin-right: 0.4rem;
    }
  }
  .copyright {
    text-align: center;
    font-size: 0.5rem;
  }
`,d=()=>n.a.createElement(f,{className:"idleHide"},n.a.createElement("div",{className:"line title"},"俺稀罕恁"),n.a.createElement("div",{className:"copyright"},n.a.createElement("span",null," Copyright © ",(new Date).getFullYear())));function u(){const[t,e]=Object(r.useState)(!1);return n.a.createElement(n.a.Fragment,null,t?n.a.createElement(d,null):null,n.a.createElement(l,{className:`idleHide ${t?"close":""}`,onClick:()=>{e(t=>!t)}}))}},6:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"h",(function(){return d})),a.d(e,"f",(function(){return n})),a.d(e,"g",(function(){return f})),a.d(e,"i",(function(){return m})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return l}));var r=a(1);const n=r.keyframes`
from{
  transform:rotate(-10deg) translateX(-110px);
  opacity:0;
}
to{
opacity:1;
  transform:rotate(0) translateX(0);
}
`,o=r.keyframes`
0%{
  transform: translateY(10px);
  opacity:0.2;
}
80%,100%{
opacity:1;
  transform: translateY(0);
}
`,s=r.keyframes`
0%{
  transform: translateY(10px);
  opacity:0.2;
}
40%,60%{
  opacity:1;
  transform: translateY(0);
}
80%,100%{
opacity:0;
  transform: translateY(-20px);
}
`,i=r.keyframes`
 0% {
    opacity: 0;
    transform: scale(0);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,c=r.keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }

`,m=r.keyframes`
 from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
`,l=r.keyframes`
  0% { opacity:0;transform: scale(0.2) rotate(0); }
  50% { opacity:0.6;transform: scale(2) rotate(30deg); }
  100% { opacity:1;transform: scale(0.5) rotate(-30deg); }
`,f=r.keyframes`
 from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }

`,d=r.keyframes`
 from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`}}]);