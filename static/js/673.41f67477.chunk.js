"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[673],{383:function(n,e,t){t.d(e,{Hx:function(){return l},Tg:function(){return o},Y5:function(){return u},bI:function(){return d},uV:function(){return p}});var r=t(861),a=t(757),i=t.n(a),c=t(16);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="71ee338e8e849b09eba67632ac17254e",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include+adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},673:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,a,i,c,s,o,u,p=t(861),l=t(439),d=t(757),x=t.n(d),f=t(383),h=t(791),v=t(689),g=t(344),m=t(168),j=t(867),Z=t(87),w=j.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n  margin: 20px;\n"]))),b=j.ZP.img(a||(a=(0,m.Z)(["\n  width: 250px;\n"]))),k=j.ZP.div(i||(i=(0,m.Z)(["\n  margin: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),y=j.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n  > h3 {\n    margin-bottom: 20px;\n  }\n"]))),_=j.ZP.ul(s||(s=(0,m.Z)(["\n  list-style-type: none;\n  display: flex;\n  gap: 20px;\n"]))),P=(0,j.ZP)(Z.OL)(o||(o=(0,m.Z)(["\n  text-decoration: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  border: 1px solid #154c79;\n  &.active {\n    color: white;\n    background-color: #154c79;\n  }\n"]))),U=(0,j.ZP)(Z.rU)(u||(u=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding-left: 25px;\n  font-size: 18px;\n  margin-top: 20px;\n  width: 80px;\n  color: #154c79;\n  text-decoration: none;\n  font-weight: 700;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),S=t(484),C=t(184),O=function(n){var e=n.to,t=n.children;return(0,C.jsxs)(U,{to:e,children:[(0,C.jsx)(S.jUh,{}),t]})},R=function(){var n,e,t=(0,h.useState)({}),r=(0,l.Z)(t,2),a=r[0],i=r[1],c=(0,h.useState)(!1),s=(0,l.Z)(c,2),o=s[0],u=s[1],d=(0,v.UO)().movieId,m=(0,v.TH)();(0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,(0,f.Y5)(d);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[d]);var j=a.poster_path,Z=a.title,U=a.genres,S=a.overview,R=a.vote_average,H=a.release_date,I=null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(O,{to:I,children:"Back"}),(0,C.jsxs)(w,{children:[(0,C.jsx)("div",{children:(0,C.jsx)(b,{src:"https://image.tmdb.org/t/p/w200".concat(j),alt:Z})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)("h1",{children:[Z," (",H?H.substring(0,4):"",")"]}),(0,C.jsxs)("p",{children:["Rating: ",Math.round(100*R)/100]}),(0,C.jsx)("h2",{children:"Overview"}),(0,C.jsx)("p",{children:S}),(0,C.jsx)("h2",{children:"Genres"}),U&&(0,C.jsx)("p",{children:U.map((function(n){return n.name})).join(", ")})]})]}),(0,C.jsxs)(y,{children:[(0,C.jsx)("h3",{children:"Additional information"}),(0,C.jsxs)(_,{children:[(0,C.jsx)("li",{children:(0,C.jsx)(P,{to:"cast",children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(P,{to:"reviews",children:"Reviews"})})]})]}),o&&(0,C.jsx)(g.a,{}),(0,C.jsx)(h.Suspense,{fallback:(0,C.jsx)(g.a,{}),children:(0,C.jsx)(v.j3,{})})]})}}}]);
//# sourceMappingURL=673.41f67477.chunk.js.map