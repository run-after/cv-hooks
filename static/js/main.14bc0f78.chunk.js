(this["webpackJsonpcv-hooks"]=this["webpackJsonpcv-hooks"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),s=c.n(n),l=c(6),o=c.n(l),i=(c(12),c(4)),r=function(){var e=Object(n.useState)({name:"John Doe",email:"example@example.com",phone:"555-555-5555"}),t=Object(i.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),s({name:e.target.parentNode[0].value,email:e.target.parentNode[1].value,phone:e.target.parentNode[2].value}),l()};return document.getElementById("gen-submit").addEventListener("click",e),function(){document.getElementById("gen-submit").removeEventListener("click",e)}}),[c]);var l=function(){document.getElementsByClassName("gen-modal")[0].classList.remove("d-block","justify-content-center"),document.getElementById("general").classList.add("d-block")};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"general",children:[Object(a.jsx)("button",{onClick:function(){var e=document.getElementById("general");e.classList.remove("d-block"),e.classList.add("d-none"),document.getElementsByClassName("gen-modal")[0].classList.add("d-block","justify-content-center")},className:"edit-btn float-right",children:"\u270e"}),Object(a.jsx)("h1",{id:"gen-name",className:"text-center",children:c.name}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("span",{className:"p-3",children:c.email}),Object(a.jsx)("span",{className:"p-3",children:c.phone})]})]}),Object(a.jsxs)("form",{className:"gen-modal d-none text-center",children:[Object(a.jsx)("input",{className:"form-control-lg",placeholder:"name",defaultValue:c.name}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{placeholder:"email",defaultValue:c.email}),Object(a.jsx)("input",{placeholder:"phone",defaultValue:c.phone}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{id:"gen-submit",children:"Submit"})]})]})},d=c(3),j=c(1),u=function(){var e=Object(n.useState)({job1:{title:"Job 1",location:"Location 1",dates:"1/19 - Current",description:"Job 1 description - What have you done. Why was it great. What were the challenges"},job2:{title:"Job 2",location:"Location 2",dates:"1/19 - Current",description:"Job 2 description - What have you done. Why was it great. What were the challenges"}}),t=Object(i.a)(e,2),c=t[0],s=t[1],l=function(e){e.preventDefault(),s((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(d.a)({},e.target.dataset.job,{title:e.target[0].value,location:e.target[1].value,dates:e.target[2].value,description:e.target[3].value}))})),r(e)},o=function(e){var t=e.target.parentNode;t.classList.add("d-none");var c=document.querySelector("#prac-mod-"+t.id);c.classList.remove("d-none"),c.classList.add("d-block")},r=function(e){var t=e.target;t.classList.remove("d-block"),t.classList.add("d-none"),document.getElementById(t.dataset.job).classList.remove("d-none")},u=function(e){var t=Object.keys(c).map((function(t){if(e.target.parentNode.id!==t)return c[t]})).filter((function(e){return void 0!==e}));s({}),t.forEach((function(e,t){s((function(c){return Object(j.a)(Object(j.a)({},c),{},Object(d.a)({},"job"+t,e))}))}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){var e="job"+(Object.keys(c).length+1);s((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(d.a)({},e,{}))})),setTimeout((function(){document.getElementById(e).childNodes[1].click()}),1)},className:"add-btn position-absolute ",children:"+"}),Object.keys(c).map((function(e){var t=c[e];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{id:e,className:"job col-sm p-2 border-bottom",children:[Object(a.jsx)("button",{onClick:u,className:"delete-btn float-right",children:"X"}),Object(a.jsx)("button",{onClick:o,className:"edit-btn float-right",children:"\u270e"}),Object(a.jsx)("h5",{className:"title",children:t.title}),Object(a.jsx)("div",{className:"location text-muted",children:t.location}),Object(a.jsx)("div",{className:"dates text-muted",children:t.dates}),Object(a.jsx)("div",{className:"description",children:t.description})]})}),Object(a.jsxs)("form",{onSubmit:l,"data-job":e,id:"prac-mod-"+e,className:"practical-modal d-none",children:[Object(a.jsx)("input",{className:"col-12",placeholder:"title",defaultValue:t.title}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",placeholder:"location",defaultValue:t.location}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",placeholder:"dates",defaultValue:t.dates}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{className:"col-12",placeholder:"description",defaultValue:t.description}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{id:e+"-submit",children:"Submit"})]})]},e)}))]})},b=function(){var e=Object(n.useState)({school1:{name:"School 1",location:"Location 1",dates:"1/19 - Current",summary:"School 1 summary - What have you done. Why was it great. What were the challenges"},school2:{name:"School 2",location:"Location 2",dates:"1/18 - 1/19",summary:"School 2 summary - What have you done. Why was it great. What were the challenges"}}),t=Object(i.a)(e,2),c=t[0],s=t[1],l=function(e){e.preventDefault(),s((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(d.a)({},e.target.dataset.school,{name:e.target[0].value,location:e.target[1].value,dates:e.target[2].value,summary:e.target[3].value}))})),r(e)},o=function(e){var t=e.target.parentNode;t.classList.add("d-none");var c=document.querySelector("#edu-mod-"+t.id);c.classList.remove("d-none"),c.classList.add("d-block")},r=function(e){var t=e.target;t.classList.remove("d-block"),t.classList.add("d-none"),document.getElementById(t.dataset.school).classList.remove("d-none")},u=function(e){var t=Object.keys(c).map((function(t){if(e.target.parentNode.id!==t)return c[t]})).filter((function(e){return void 0!==e}));s({}),t.forEach((function(e,t){s((function(c){return Object(j.a)(Object(j.a)({},c),{},Object(d.a)({},"school"+t,e))}))}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){var e="school"+(Object.keys(c).length+1);s((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(d.a)({},e,{}))})),setTimeout((function(){document.getElementById(e).childNodes[1].click()}),1)},className:"add-btn position-absolute ",children:"+"}),Object.keys(c).map((function(e){var t=c[e];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{id:e,className:"school col-sm p-2 border-bottom",children:[Object(a.jsx)("button",{onClick:u,className:"delete-btn float-right",children:"X"}),Object(a.jsx)("button",{onClick:o,className:"edit-btn float-right",children:"\u270e"}),Object(a.jsx)("h5",{className:"name",children:t.name}),Object(a.jsx)("div",{className:"location text-muted",children:t.location}),Object(a.jsx)("div",{className:"dates text-muted",children:t.dates}),Object(a.jsx)("div",{className:"summary",children:t.summary})]})}),Object(a.jsxs)("form",{onSubmit:l,"data-school":e,id:"edu-mod-"+e,className:"education-modal d-none",children:[Object(a.jsx)("input",{className:"col-12",placeholder:"name",defaultValue:t.name}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",placeholder:"location",defaultValue:t.location}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"col-12",placeholder:"dates",defaultValue:t.dates}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{className:"col-12",placeholder:"summary",defaultValue:t.summary}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{id:e+"-submit",children:"Submit"})]})]},e)}))]})},m=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header",children:Object(a.jsx)(r,{})}),Object(a.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsxs)("div",{id:"practical",className:"container",children:[Object(a.jsx)("h3",{className:"title text-center",children:"Experience"}),Object(a.jsx)(u,{})]})}),Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsxs)("div",{id:"education",className:"container",children:[Object(a.jsx)("h3",{className:"title text-center",children:"Education"}),Object(a.jsx)(b,{})]})})]})]})})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.14bc0f78.chunk.js.map