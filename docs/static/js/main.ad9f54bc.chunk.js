(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),u=n(1),l=n(8),o=function(e){var t=e.setCategories,n=(e.categories,Object(a.useState)("")),c=Object(u.a)(n,2),i=c[0],o=c[1],s=function(){i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," Add Category "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s()}},r.a.createElement("button",{onClick:function(e){e.preventDefault(),s()}}," Add "),r.a.createElement("input",{type:"text",id:"txtAdd",value:i,onChange:function(e){e.preventDefault(),o(e.target.value)}})))},s=function(e){var t=e.title,n=e.url;return r.a.createElement("div",{className:"img-items animate__animated animate__fadeInDown"},r.a.createElement("h3",null,function(e){return e.length<=8?e:e.slice(0,9)+"..."}(t)),r.a.createElement("img",{src:n,alt:t}))},m=n(3),f=n.n(m),p=n(5),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=xyERJcxqZL6ATJNcZf6CQaCgfiftV2ih"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return n=e.sent,a=n.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.category,n=function(e){var t=e.category,n=Object(a.useState)({data:[],loading:!0}),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){g(t).then((function(e){i({data:e,loading:!1})}))}),[t]),c}({category:t}),c=n.loading,i=n.data;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Buscando..."),r.a.createElement("h3",{className:"animate__animated animate__fadeInDown"},t),r.a.createElement("div",{className:"container"},i.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return n.splice(1,1),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement("hr",null),r.a.createElement(o,{setCategories:c,categories:n}),n.map((function(e){return r.a.createElement(v,{key:e,category:e})})))};n(15),n(16);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ad9f54bc.chunk.js.map