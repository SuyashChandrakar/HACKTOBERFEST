(this.webpackJsonpexpense_tracker_react2_app=this.webpackJsonpexpense_tracker_react2_app||[]).push([[0],{434:function(t,e,n){},435:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(16),a=n.n(r),s=n(1),i=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h2",{style:{color:"blue"},children:"Expense Tracker"})})},o=n(43),u=n(127),j=n(44),l=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(j.a)(Object(j.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(j.a)(Object(j.a)({},t),{},{transactions:[e.payload].concat(Object(u.a)(t.transactions))});default:return t}},d={transactions:[{id:1,text:"Sweets",amount:-60},{id:2,text:"Salary",amount:500},{id:3,text:"Book",amount:-20},{id:4,text:"Guitar",amount:160}]},b=Object(c.createContext)(d),x=function(t){var e=t.children,n=Object(c.useReducer)(l,d),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(s.jsx)(b.Provider,{value:{transactions:a.transactions,deleteTransaction:function(t){i({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){i({type:"ADD_TRANSACTION",payload:t})}},children:e})},O=function(){var t=Object(c.useContext)(b).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Your Balance"}),Object(s.jsxs)("h1",{children:[" $",t]})]})},h=function(){var t=Object(c.useContext)(b).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Income"}),Object(s.jsx)("p",{className:"money plus",children:e})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Expense"}),Object(s.jsx)("p",{className:"money minus",children:n})]})]})},m=function(t){var e=t.transaction,n=Object(c.useContext)(b).deleteTransaction,r=e.amount<0?"-":"+";return Object(s.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(s.jsxs)("span",{children:[r,"$",Math.abs(e.amount)]}),Object(s.jsx)("button",{onClick:function(){return n(e.id)},className:"delete-btn",children:"x"})]})},p=(n(132),function(){var t=Object(c.useContext)(b).transactions,e=!0;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{id:"history-h3-id",onClick:function(){e?(document.getElementById("transactionList-id").style.display="none",e=!1):(document.getElementById("transactionList-id").style.display="block",e=!0)},children:"History"}),Object(s.jsx)("ul",{id:"transactionList-id",className:"list",children:t.map((function(t){return Object(s.jsx)(m,{transaction:t},t.id)}))})]})}),f=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),u=i[0],j=i[1],l=Object(c.useContext)(b).addTransaction;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Add new transaction"}),Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+u};l(e)},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Text"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:["Amount",Object(s.jsx)("br",{}),"(negative - expense, positive - income) "]}),Object(s.jsx)("input",{type:"number",value:u,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"btn",onClick:function(){document.getElementById("transactionList-id").style.display="block"},children:"Add transaction"})})]})]})]})};n(434);var v=function(){return Object(s.jsxs)(x,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(O,{}),Object(s.jsx)(h,{}),Object(s.jsx)(p,{}),Object(s.jsx)(f,{})]})]})};a.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[435,1,2]]]);
//# sourceMappingURL=main.b0cb8d67.chunk.js.map