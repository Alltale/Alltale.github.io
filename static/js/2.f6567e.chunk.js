(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{13:function(t,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return p}));var e=r(0),n=r.n(e),o=r(1),s=r(9),i=r(7),c=r(6);const f=o.default.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(2, 2, 2, 0.8); */
  .words {
    background-color: rgba(108, 53, 44, 0.8);
    width: 20rem;
    min-height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    animation: ${c.i} 1s ease-in-out;
  }
`,l=Object(o.default)(i.a)`
  height: 100%;
  padding: 0.3rem;
  animation: ${c.a} 0.4s ease-in-out infinite;
`,m=[...new Set(s.join("").match(/[\u4e00-\u9fa5]/g).join("").split(""))].join("").substring(0,100);function p({handleDone:t}){const a=t=>{let a=Math.floor(Math.random()*m.length),r=m[a];t.target.innerHTML=r};return Object(e.useEffect)(()=>{setTimeout(()=>{t()},3e3)},[t]),n.a.createElement(f,null,n.a.createElement("div",{className:"words"},m.split("").map((t,r)=>n.a.createElement(l,{onAnimationIteration:a,style:{animationDuration:`${2*Math.random()+.2}s`},key:`${t}-${r}`},t))))}},6:function(t,a,r){"use strict";r.d(a,"c",(function(){return s})),r.d(a,"e",(function(){return o})),r.d(a,"h",(function(){return p})),r.d(a,"f",(function(){return n})),r.d(a,"g",(function(){return m})),r.d(a,"i",(function(){return f})),r.d(a,"d",(function(){return i})),r.d(a,"b",(function(){return c})),r.d(a,"a",(function(){return l}));var e=r(1);const n=e.keyframes`
from{
  transform:rotate(-10deg) translateX(-110px);
  opacity:0;
}
to{
opacity:1;
  transform:rotate(0) translateX(0);
}
`,o=e.keyframes`
0%{
  transform: translateY(10px);
  opacity:0.2;
}
80%,100%{
opacity:1;
  transform: translateY(0);
}
`,s=e.keyframes`
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
`,i=e.keyframes`
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
`,c=e.keyframes`
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

`,f=e.keyframes`
 from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
`,l=e.keyframes`
  0% { opacity:0;transform: scale(0.2) rotate(0); }
  50% { opacity:0.6;transform: scale(2) rotate(30deg); }
  100% { opacity:1;transform: scale(0.5) rotate(-30deg); }
`,m=e.keyframes`
 from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }

`,p=e.keyframes`
 from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`},7:function(t,a,r){"use strict";const e=r(1).default.span`
  border: 1px solid rgba(222, 222, 222, 0.2);
  margin-left: -1px;
  position: relative;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(222, 222, 222, 0.1);
  }
  &:after {
    left: 0;
    top: 50%;
    transform: translateY(-1px);
    width: 100%;
    height: 1px;
  }
  &:before {
    left: 50%;
    top: 0;
    transform: translateX(-1px);
    width: 1px;
    height: 100%;
  }
`;a.a=e},9:function(t){t.exports=JSON.parse('["我想在你那里买一块地|买什么地？|买你的死心塌地","你知道你和星星有什么区别吗？|星星在天上|而你在我心里","我十拿九稳|就只差你一吻了","可爱不是长久之计|可爱我是","小猪佩奇|你配我","有谣言说我喜欢你|我澄清一下|那不是谣言","只许州官放火|不许…|不许你离开我","你昨天晚上应该很累吧|因为你在我梦里一直跑个不停","我觉得你接近我就是在害我|害得我好喜欢你呀","你今天好奇怪|怪！可！爱！的！","我觉得我好花心|你每天的样子我都好喜欢","你有打火机嘛？|没有？|那你是如何点燃我的心的","我说不清我为什么爱你|我只知道|只要有你|我就不可能爱上别人","我喜欢你|像你妈打你|不讲道理","知道你为什么这么冷吗？|因为你没有像我这么暖的对象在身边啊。","无事献殷勤|非…|非常喜欢你","子曰：三思而后行|1、2、3～|嗯～我喜欢你。","小女子不才|掐指一算|公子今生缺我","你有地图吗？|我在你的眼睛里迷路了。","你知道我最喜欢什么神吗？|是你的眼神","你要是丑点|我或许可以带你逛街看电影吃西餐散步看星星看月亮|从诗词歌赋谈到人生哲学|可你长的那么好看，让我只想和你恋爱","我房租到期了|可以去你心里住吗？","要是我和你生一个孩子你觉得他会是什么座？|什么座？双子座？|不，我们的杰作。","你可以笑一个吗？|为什么啊？|因为我的咖啡忘加糖了","你想喝点什么？|我想呵护你。","我觉得你长得像我一个亲戚|？？？|我妈的儿媳妇","你知道情人眼里出什么吗？|西施？！|不，出现你。","你最近是不是又胖了？|没有啊，为什么这么说？|那你为什么在我心里的分量越来越重了呢？","落叶归根|你归我","苦海无涯|回头是我","不想撞南墙了|只想撞撞先生胸膛","你上辈子一定是碳酸饮料吧|不然我怎么一看到你就开心地冒泡呢","你会弹钢琴吗？|不会|那你是怎么撩动我的心弦的呢","第一次见到你时|上帝在我耳旁说了几个字|在劫难逃","你知道喝什么酒最容易醉吗？|是你的天长地久","你属什么？|我属虎。|你不要再骗人了，你属于我。","你是什么星座?双子座吗?|不是，我是为你量身定做。","你知道我最大的缺点是什么吗？|是缺点你","如果我把你推到花园里面|我就会找不到你|因为你像花儿一样美丽|","有时候生活有些苦难|你不要去抱怨|抱我就好了","我点的东西怎么还没来？|什么东西？|我们的未来。","你的脸上有点东西|有什么？|有点漂亮","我一点也不想你|一点半再想你","你知道我的心在哪边么？|左边啊|不，在你那边","我们来玩木头人不许动吧|好！我输了|为什么？|因为我心动了","莫文蔚的阴天|孙燕姿的雨天|周杰伦的晴天|都不如你和我聊天","我想你应该很忙|所以你看到前三个字就好了","甜有100种方式|吃糖|蛋糕|还有98次想你","你知道我喜欢吃什么吗？|不知道|我喜欢痴痴地望着你","你猜一下我是什么星座？|不知道|我是什么都想为你做！","你是什么血型？|A型啊|不，你是我的理想型","我知道有三个人喜欢你|谁呀|我呀！我呀！我呀！","我刚发现我们有一个共同好友！|是谁？|丘比特！","我和你没什么好谈的|除了谈恋爱","不思进取|思你","众生皆苦|你是草莓味！","见什么世面|见见你就好了！","好好照顾自己​​​​|不行就让我来照顾你","眼里都是你|亿万星辰犹不及","最近手头有点紧|想借你的手牵一牵","有趣的地方都想去掺和一下​​​​|比如你的世界","人总是会变的|从一开始的喜欢你|到后来的更喜欢你","一想到昨天的我也喜欢你|今天的我就吃醋了","希望有一天|你来到这个城市|是因为想起了我","你为什么要害我？|我害你？|害我这么喜欢你","游乐园里有个可以骑在上面旋转的，那个叫旋转什么？|木马|Mua~","你知道牛肉要怎么吃才好吃吗？|我喂你吃","我觉得你这个人不适合谈恋爱|为什么？|你适合结婚","一生无定|遇你之所|是为乡","要不我们去喝酒吧|喝我们的喜酒","你一定很孤独吧|因为你一直住在我心里"]')}}]);