(this.webpackJsonpexamen_practico=this.webpackJsonpexamen_practico||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(0),n=c(18),s=c.n(n),i=(c(25),c(8)),o=c(2),j=(c(26),function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("a",{className:"logo",children:"Ryck & Morphy"}),Object(r.jsx)("div",{className:"header-right",children:Object(r.jsx)(i.b,{to:"/personajes",className:"a",children:"Personajes"})})]})}),p=c(10),l=c.n(p),u=c(16),d=c(11),h=(c(33),c(34),function(e){return Object(r.jsx)("div",{className:"div1",children:Object(r.jsxs)("div",{className:"property-card",children:[Object(r.jsx)("h2",{children:"".concat(e.personaje.name," ")}),Object(r.jsx)("div",{className:"property-image",children:Object(r.jsx)("img",{src:e.personaje.image,alt:e.personaje.name,className:"property-image"})}),Object(r.jsxs)("div",{className:"property-description",children:[Object(r.jsx)("p",{children:"Type: ".concat(e.personaje.species)}),Object(r.jsx)("p",{children:"Status: ".concat(e.personaje.status)}),Object(r.jsx)("p",{children:"Origin: ".concat(e.personaje.origin.name)})]})]})})}),b=function(){var e=Object(a.useState)({data:[],loading:!0,searchTerm:"",error:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),o=i[0],j=i[1],p=Object(a.useState)([]),b=Object(d.a)(p,2),m=(b[0],b[1],function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://rickandmortyapi.com/api/character/"));case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent)&&n({data:c.results,dat:c.results,loading:!1,error:""});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),x=function(){var e=Object(u.a)(l.a.mark((function e(t){var r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",m());case 2:return r=c.data,console.log(r),e.next=6,r.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())}));case 6:return a=e.sent,console.log(a),e.next=10,a;case 10:(s=e.sent)&&n({data:s});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){x(o)}),[o]),Object(a.useEffect)((function(){m()}),[]);var O=c.data;return c.loading?Object(r.jsx)("div",{children:"Cargando..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"input-group search",children:[Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Buscar un personaje",value:c.searchTerm,onChange:function(e){return j(e.target.value)},autoFocus:!0}),Object(r.jsx)("label",{children:"Buscar un personaje"}),Object(r.jsx)("div",{className:"req-mark",children:"Q"})]}),Object(r.jsx)("h3",{children:c.error?c.error:""}),Object(r.jsx)("div",{className:"grid-item",children:O.map((function(e,t){return Object(r.jsx)(h,{personaje:e},t)}))})]})},m=function(e){return Object(r.jsx)("div",{className:"div1",children:Object(r.jsxs)("div",{className:"property-card",children:[Object(r.jsx)("div",{className:"property-image",children:Object(r.jsx)("img",{src:e.personaje.image,alt:e.personaje.name,className:"property-image"})}),Object(r.jsxs)("div",{className:"property-description",children:[Object(r.jsx)("h2",{children:"".concat(e.personaje.name," ")}),Object(r.jsx)("p",{children:"Type: ".concat(e.personaje.species)})]})]})})};var x=function(){return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/personajes",component:b}),Object(r.jsx)(o.a,{exact:!0,path:"/personajes/detalles",component:m}),Object(r.jsx)(o.a,{exact:!0,path:"/",component:b})]})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3389e3f3.chunk.js.map