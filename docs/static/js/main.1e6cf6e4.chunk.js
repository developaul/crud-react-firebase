(this["webpackJsonpcrud-firestore"]=this["webpackJsonpcrud-firestore"]||[]).push([[0],{25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(5),c=a.n(n),s=a(18),i=a.n(s),o=(a(25),a(7)),u=a.n(o),d=a(10),l=a(8),b=a(12),j=a(16);a(29);j.a.initializeApp({apiKey:"AIzaSyALpOjqMvdTN_udTfB4HcnqeM5U9UyPWbw",authDomain:"crud-react-4a711.firebaseapp.com",projectId:"crud-react-4a711",storageBucket:"crud-react-4a711.appspot.com",messagingSenderId:"211596802193",appId:"1:211596802193:web:b6e27d6986f9a911022730"});var p=function(e){var t=e.tarea,a=e.tareas,n=e.edicion,c=e.setTareas,s=e.setEdicion,i=e.setTarea,o=t.id,d=t.name,b=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=j.a.firestore(),e.next=4,r.collection("tareas").doc(t).delete();case 4:o=a.filter((function(e){return e.id!==t})),c(o),n.tarea&&n.tarea.id===t&&(s({editando:!1,tarea:null}),i("")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:d}),Object(r.jsx)("button",{className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return b(o)},children:"Eliminar"}),Object(r.jsx)("button",{className:"btn btn-outline-warning btn-sm float-right mr-2",onClick:function(){return function(e){s({editando:!0,tarea:e}),i(e.name)}(t)},children:"Editar"})]})},f=function(e){var t=e.tareas,a=e.edicion,n=e.setTareas,c=e.setEdicion,s=e.setTarea;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Listado de Tareas"}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(r.jsx)("li",{className:"list-group-item",children:Object(r.jsx)(p,{tareas:t,tarea:e,edicion:a,setTareas:n,setEdicion:c,setTarea:s})},e.id)}))})]})},m=a(19),O=function(e){var t=e.tareas,a=e.tarea,c=e.edicion,s=e.setTarea,i=e.setTareas,o=e.setEdicion,p=Object(n.useState)(null),f=Object(b.a)(p,2),O=f[0],h=f[1],x=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.trim()){e.next=3;break}return e.abrupt("return",h("Escriba algo por favor..."));case 3:return h(null),r={name:a.trim(),fecha:Date.now()},e.prev=5,n=j.a.firestore(),e.next=9,n.collection("tareas").add(r);case 9:c=e.sent,i((function(e){return[].concat(Object(m.a)(e),[Object(d.a)(Object(d.a)({},r),{},{id:c.id})])})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:s("");case 18:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(r){var n,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a.trim()){e.next=3;break}return e.abrupt("return",h("Escriba algo por favor..."));case 3:return h(null),e.prev=4,n=j.a.firestore(),e.next=8,n.collection("tareas").doc(c.tarea.id).update({name:a});case 8:l=t.map((function(e){return e.id===c.tarea.id?Object(d.a)(Object(d.a)({},e),{},{name:a}):e})),i(l),o({editando:!1,tarea:null}),s(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:c.editando?"Editar Tarea":"Agregar Tarea"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:c.editando?v:x,children:[O&&Object(r.jsx)("span",{className:"text-danger",children:O}),Object(r.jsx)("input",{className:"form-control mt-1 mb-2",placeholder:"Ingrese una tarea",type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{className:"btn btn-block ".concat(c.editando?"btn-warning":"btn-dark"),type:"submit",children:c.editando?"Editar":"Agregar"})]})]})};var h=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),o=i[0],p=i[1],m=Object(n.useState)({editando:!1,tarea:null}),h=Object(b.a)(m,2),x=h[0],v=h[1];return Object(n.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=j.a.firestore(),e.next=4,t.collection("tareas").get();case 4:a=e.sent,r=a.docs.map((function(e){return Object(d.a)({id:e.id},e.data())})),c(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("h1",{className:"text-center",children:"Crud React - Firestore "}),Object(r.jsx)("hr",{})]}),Object(r.jsx)("div",{className:"col-md-6 mb-5 mb-md-0",children:Object(r.jsx)(O,{tarea:o,tareas:a,edicion:x,setEdicion:v,setTareas:c,setTarea:p})}),Object(r.jsx)("div",{className:"col-md-6 mt-5 mt-md-0",children:Object(r.jsx)(f,{tareas:a,edicion:x,setTareas:c,setTarea:p,setEdicion:v})})]})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1e6cf6e4.chunk.js.map