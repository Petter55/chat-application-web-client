(this["webpackJsonpchat-application-web-client"]=this["webpackJsonpchat-application-web-client"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(26),i=n.n(a),o=(n(56),n(51)),r=n(9),A=n.n(r),j=n(3),l=n(14),u=n(2),d=n(50),b=(n(58),n(46)),m=n.n(b),h=(n(89),n(90),n(11)),O=(n(93),n(94),"https://chat-application-service.herokuapp.com"),g="https://chat-application-manager.herokuapp.com",v={Accept:"application/json","Content-Type":"application/json"},x=n(47),f=n.n(x),p=n.p+"static/media/close.069e609e.svg",C=n(0),I={content:{margin:"auto",backgroundColor:"rgb(149, 105, 153)",borderRadius:10,border:0,padding:"0px 20px 30px 20px",top:40,left:40,minHeight:"10%",maxHeight:"40%",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"},overlay:{backgroundColor:"invisible"}};var N=function(e){var t=e.joinConversationByLink,n=Object(c.useState)(""),a=Object(u.a)(n,2),i=a[0],o=a[1],r=s.a.useState(!1),j=Object(u.a)(r,2),d=j[0],b=j[1],m=Object(c.useState)([]),h=Object(u.a)(m,2),g=h[0],x=h[1];function N(){b(!1)}var B=function(){var e=Object(l.a)(A.a.mark((function e(t){var n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,fetch("".concat(O,"/conversation/subject/").concat(i),{method:"GET",headers:v});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,console.log(c),x(c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("form",{onSubmit:B,children:Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"form-container",children:[Object(C.jsx)("input",{className:"join-input-field",name:"searchInput",value:i,onChange:function(e){o(e.currentTarget.value)},id:"searchInput",type:"text"}),Object(C.jsx)("button",{className:"go-button",type:"submit",children:"Procurar"})]})})}),Object(C.jsx)(f.a,{isOpen:d,onAfterOpen:function(){},onRequestClose:N,contentLabel:"Search",style:I,children:Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"closing-modal",children:Object(C.jsx)("img",{className:"close-btn",alt:"x",onClick:N,src:p})}),Object(C.jsxs)("p",{children:[g.length," ",g.length>1?"resultados":"resultado"]}),Object(C.jsx)("div",{children:g&&g.length>0?g.map((function(e,n){return Object(C.jsx)("div",{className:"conversation-found",onClick:function(){var n;(n=null===e||void 0===e?void 0:e.conversationLink)&&(t(n),N())},children:null===e||void 0===e?void 0:e.subject},n)})):Object(C.jsx)(C.Fragment,{})})]})})]})};n(105);var B=function(e){var t=e.joinConversationByLink,n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],i=s[1];return Object(C.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"form-container",children:[Object(C.jsx)("input",{className:"join-input-field",name:"linkInput",value:a,onChange:function(e){i(e.currentTarget.value)},id:"conversationHash",type:"text"}),Object(C.jsx)("button",{className:"go-button",type:"submit",children:"Ir"})]})})})};var y=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],a=n[1];return Object(C.jsxs)("div",{className:s?"join-box-expanded":"join-box",children:[Object(C.jsxs)("div",{onClick:function(){a(!s)},className:s?"join-message-expanded":"join-message",children:["Entrar em uma conversa",Object(C.jsx)("i",{className:s?"arrow down":"arrow right"})]}),s?Object(C.jsx)("div",{style:{margin:"5px 0px",width:"100%"},children:Object(C.jsxs)(h.d,{children:[Object(C.jsxs)(h.b,{style:{display:"flex",justifyContent:"flex-start"},children:[Object(C.jsx)(h.a,{style:{backgroundColor:"transparent",color:"white"},children:"Por link"}),Object(C.jsx)(h.a,{style:{backgroundColor:"transparent",color:"white"},children:"Por assunto"})]}),Object(C.jsx)(h.c,{children:Object(C.jsx)(B,{joinConversationByLink:e.joinConversationByLink})}),Object(C.jsx)(h.c,{children:Object(C.jsx)(N,{joinConversationByLink:e.joinConversationByLink})})]})}):Object(C.jsx)(C.Fragment,{})]})},w=(n(106),n.p+"static/media/tool_icon_151041.19afc5dd.svg"),E=n.p+"static/media/check_accept_done_tick_icon_143633.8a0223a2.svg";var S=function(e){var t=e.user,n=e.editUsername,s=Object(c.useState)(t.name),a=Object(u.a)(s,2),i=a[0],o=a[1],r=Object(c.useState)(!1),A=Object(u.a)(r,2),j=A[0],l=A[1];return Object(C.jsx)("div",{children:j?Object(C.jsxs)("form",{className:"welcome-sentence",onSubmit:function(e){e.preventDefault(),n({clientId:t.clientId,name:i}),l(!1)},children:[Object(C.jsxs)("div",{id:"welcome-user",children:["Bem vindo,",Object(C.jsx)("input",{id:"input-name",placeholder:t.name,onChange:function(e){o(e.currentTarget.value)},name:"name",value:i}),"!"]}),Object(C.jsx)("button",{type:"submit",id:"edit-button",children:Object(C.jsx)("img",{src:E,id:"tool-icon"})})]}):Object(C.jsxs)("div",{style:{margin:25,display:"flex",flexDirection:"row"},children:[Object(C.jsxs)("div",{id:"welcome-user",children:["Bem vindo, ",t.name,"! "]}),Object(C.jsx)("button",{id:"edit-button",onClick:function(e){return function(e){e.preventDefault(),console.log(j),l(!0)}(e)},children:Object(C.jsx)("img",{src:w,id:"tool-icon"})})]})})},k=n.p+"static/media/speech-bubble-svgrepo-com.1f926b35.svg";var Q=function(e){var t=e.user,n=e.showNewChatOptions,s=e.joinConversationByLink,a=e.editUsername;return Object(c.useEffect)((function(){}),[t]),Object(C.jsxs)("div",{className:"home-container",children:[Object(C.jsx)("div",{style:{margin:25},children:Object(C.jsx)("img",{style:{height:100},alt:"logo",src:k})}),Object(C.jsx)(S,{user:t,editUsername:a}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{className:"creation-button",onClick:function(){n()},children:"Criar conversa"})}),Object(C.jsx)(y,{joinConversationByLink:s})]})};n(107),n(108),n(109);var D=function(e){var t,n=e.message,c=e.userId;return n&&n.sentBy&&c?Object(C.jsxs)("div",{className:n.sentBy.clientId===c?"own-message":"others-message",children:[Object(C.jsxs)("div",{className:"message-detail",children:[null===(t=n.sentBy)||void 0===t?void 0:t.name," disse:"]}),Object(C.jsx)("div",{className:n.sentBy.clientId===c?"own-message-content":"others-message-content",children:n.content}),Object(C.jsxs)("div",{className:"message-detail",children:["em ",new Intl.DateTimeFormat("pt-BR").format(new Date(String(n.createdAt)))]})]}):Object(C.jsx)(C.Fragment,{})},M=n(13);n(110);var L=function(e){var t=e.postMessage,n=Object(c.useState)({content:""}),s=Object(u.a)(n,2),a=s[0],i=s[1],o=function(e){e.preventDefault(),t(a),i({content:""})};return Object(C.jsx)("div",{className:"external-padding",children:Object(C.jsx)("div",{className:"input-container",children:Object(C.jsxs)("form",{onSubmit:o,children:[Object(C.jsx)("div",{className:"input-box-shadow"}),Object(C.jsxs)("div",{className:"input-box",children:[Object(C.jsx)("textarea",{id:"content",name:"content",value:a.content,onChange:function(e){return t=e,void i(Object(j.a)(Object(j.a)({},a),{},Object(M.a)({},t.currentTarget.name,t.currentTarget.value)));var t},onKeyDown:function(e){var t;"Enter"===(t=e).key&&!1===t.shiftKey&&o(t)},className:"input-v"}),Object(C.jsx)("button",{type:"submit",disabled:!a.content,className:a.content?"submit-button":"submit--button-disabled",children:Object(C.jsx)("img",{src:"data:image/png;base64,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",style:{height:30,width:"auto",margin:"auto"}})})]})]})})})},F=(n(111),function(e){return"".concat(e,", ")}),H=n.p+"static/media/PinClipart.com_zip-clipart_2015963.a632ad1a.png",P=n.p+"static/media/minimize.0ed66843.svg";var G=function(e){var t=e.conversation,n=e.onHeaderHover,s=e.minimizeConversation,a=Object(c.useState)(!1),i=Object(u.a)(a,2),o=i[0],r=i[1];return t?Object(C.jsxs)("div",{className:"chat-header",onMouseOver:function(){r(!0),n(!0)},onMouseLeave:function(){r(!1),n(!1)},children:[Object(C.jsxs)("div",{className:"chat-header-content",children:[Object(C.jsx)("div",{className:"chat-first-row-width",style:{marginLeft:10}}),o&&t.subject?Object(C.jsx)("div",{className:"chat-subject chat-first-row-width",children:Object(C.jsx)("p",{className:"chat-subject-paragraph",children:t.subject})}):Object(C.jsx)(C.Fragment,{}),Object(C.jsx)("div",{className:"chat-first-row-width",id:"minimize-icon-container",children:Object(C.jsx)("img",{src:P,id:"minimize-icon-image",onClick:function(){s()}})})]}),Object(C.jsxs)("div",{className:"chat-header-content",children:[Object(C.jsxs)("div",{className:"chat-link",children:[Object(C.jsx)("div",{children:"Link do chat:"}),Object(C.jsx)("div",{className:"chat-link-uuid",children:o?t.conversationLink:""})]}),o?Object(C.jsx)("div",{children:Object(C.jsx)("b",{children:t.isPublic?"p\xfablico":"particular"})}):Object(C.jsx)("div",{children:Object(C.jsx)("img",{style:{height:10,margin:"auto"},src:H})}),Object(C.jsx)("div",{className:"chat-users",children:t&&t.users?t.users.map((function(e,n){return Object(C.jsx)(C.Fragment,{children:n===t.users.length-1?e.name:F(e.name)})})):Object(C.jsx)(C.Fragment,{})})]})]}):Object(C.jsx)("div",{className:"chat-header"})};var Y=function(e){var t=e.openedConversation,n=e.postMessage,s=e.userId,a=e.minimizeConversation,i=Object(c.useState)(!1),o=Object(u.a)(i,2),r=o[0],A=o[1];return Object(c.useEffect)((function(){var e=document.getElementsByClassName("messages-container");if(e&&e.length>0)e[0].scrollTop=e[0].scrollHeight;else{var t=document.getElementsByClassName("messages-container-smaller");t&&t.length>0&&(t[0].scrollTop=t[0].scrollHeight)}})),Object(C.jsxs)("div",{className:"chat-window",children:[Object(C.jsx)(G,{conversation:t,onHeaderHover:function(e){A(e)},minimizeConversation:a}),Object(C.jsx)("div",{className:r?"messages-container-smaller":"messages-container",children:t&&t.messages?t.messages.map((function(e,t){return Object(C.jsx)(D,{message:e,userId:s},t)})):Object(C.jsx)(C.Fragment,{})}),Object(C.jsx)(L,{postMessage:n})]})};var T=function(e){var t=e.openedConversation,n=e.postMessage,c=e.userId,s=e.minimizeConversation;return Object(C.jsx)("div",{className:"chat-container",children:Object(C.jsx)(Y,{openedConversation:t,postMessage:n,userId:c,minimizeConversation:s})})},U=n(48);n(112);var V=function(e){var t=e.conversation,n=e.openConversation;return Object(C.jsxs)("div",{className:"chat-item",onClick:function(){n(t.conversationLink)},children:[t.subject?Object(C.jsx)("div",{children:t.subject}):Object(C.jsx)(C.Fragment,{}),Object(C.jsx)("div",{style:{fontSize:14},children:t.users.map((function(e,n){return Object(C.jsx)(C.Fragment,{children:n===t.users.length-1?e.name:F(e.name)})}))})]})};n(113);var J=function(e){var t=e.conversations,n=e.openedConversation,c=e.openConversation;return Object(C.jsxs)(U.a,{className:"chat-list-container",children:[t&&!n.conversationLink?t.map((function(e,t){return Object(C.jsx)(V,{conversation:e,openConversation:c},t)})):Object(C.jsx)(C.Fragment,{}),t&&n.conversationLink?t.map((function(e,t){return n&&e.conversationLink!==n.conversationLink?Object(C.jsx)(V,{conversation:e,openConversation:c},t):Object(C.jsx)(C.Fragment,{})})):Object(C.jsx)(C.Fragment,{})]})};n(114);var K,R=function(e){var t=e.createConversation,n=Object(c.useState)({subject:"",isPublic:"false",persist:"true"}),s=Object(u.a)(n,2),a=s[0],i=s[1],o=function(e){e.preventDefault(),t(a)};return Object(C.jsx)("div",{className:"options-modal",children:Object(C.jsxs)("form",{onSubmit:o,children:[Object(C.jsx)("div",{className:"form-section",style:{padding:"15px 0px 5px 0px",borderBottom:"solid black 1px"},children:"Nova Conversa"}),Object(C.jsxs)("div",{className:"form-section",children:[Object(C.jsx)("label",{htmlFor:"subject",children:"Assunto:"}),Object(C.jsx)("input",{id:"subject",type:"text",name:"subject",onChange:function(e){i(Object(j.a)(Object(j.a)({},a),{},Object(M.a)({},e.currentTarget.name,e.currentTarget.value)))}})]}),Object(C.jsx)("div",{className:"form-section",children:Object(C.jsx)("div",{className:"form-row",children:Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(C.jsx)("label",{htmlFor:"isPublic",children:"true"===a.isPublic?"\xc9 p\xfablico ":"\xc9 privado "}),Object(C.jsxs)("label",{className:"switch",children:[Object(C.jsx)("input",{type:"checkbox",checked:"false"===a.isPublic,onChange:function(){var e="true"===a.isPublic?"false":"true";console.log(e),i(Object(j.a)(Object(j.a)({},a),{},{isPublic:e}))}}),Object(C.jsx)("span",{className:"slider round"})]})]})})}),Object(C.jsx)("div",{className:"form-section",style:{display:"flex",justifyContent:"flex-end"},children:Object(C.jsx)("button",{className:"create-form-button",onSubmit:o,type:"submit",children:"Criar"})})]})})},z=n(49),q=n.n(z);!function(e){e[e.OPTIONS=0]="OPTIONS",e[e.OPENED=1]="OPENED",e[e.CLOSED=2]="CLOSED"}(K||(K={}));var X=m()(g);X.on("connect",(function(){}));var Z=Object(d.hot)((function(){var e=Object(c.useState)({clientId:"",name:"guest"}),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({chatState:K.CLOSED}),i=Object(u.a)(a,2),r=i[0],d=i[1],b=Object(c.useState)({_id:"",conversationLink:"",users:[],messages:[]}),m=Object(u.a)(b,2),h=m[0],g=m[1],x=Object(c.useState)([]),f=Object(u.a)(x,2),p=f[0],I=f[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=sessionStorage.getItem("chat-app:clientId"))||(t=String(new q.a),sessionStorage.setItem("chat-app:clientId",t)),s(Object(j.a)(Object(j.a)({},n),{},{clientId:t})),N(t),X.on("conversation-joined",(function(e){g(e),d({chatState:K.OPENED}),console.log(JSON.stringify(e,void 0,4))})),X.on("message-posted",(function(e){g(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){X.off("conversation-joined"),X.off("message-posted")}}),[]);var N=function(){var e=Object(l.a)(A.a.mark((function e(t){var c,a,i,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/conversation/clientId/").concat(t),{method:"GET",headers:v});case 3:return i=e.sent,e.next=6,i.json();case 6:return c=e.sent,e.next=9,fetch("".concat(O,"/user"),{method:"PUT",headers:v,body:JSON.stringify({clientId:t,name:n.name})});case 9:return r=e.sent,e.next=12,r.json();case 12:a=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:I(c?Object(o.a)(c):[]),a&&s({clientId:a.clientId,name:a.name});case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(A.a.mark((function e(t){var n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,e.prev=1,e.next=4,fetch("".concat(O,"/user/name/").concat(t.name),{method:"PUT",headers:v,body:JSON.stringify({clientId:t.clientId,name:t.name})});case 4:return c=e.sent,e.next=7,Promise.all([fetch("".concat(O,"/message/user/name"),{method:"PUT",headers:v,body:JSON.stringify({id:t.clientId,name:t.name})}),fetch("".concat(O,"/conversation/users/name"),{method:"PUT",headers:v,body:JSON.stringify({id:t.clientId,name:t.name})})]);case 7:return e.next=9,c.json();case 9:n=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:n&&s({clientId:n.clientId,name:n.name}),N(t.clientId);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{className:"app-container",children:Object(C.jsxs)("div",{className:"app-body",children:[r.chatState===K.OPTIONS?Object(C.jsx)(R,{createConversation:function(e){var t={conversationLink:"",messages:[],subject:e.subject,isPublic:"true"===e.isPublic,persist:"true"===e.persist,users:[{clientId:n.clientId,name:n.name}]};X.emit("create-conversation",t)}}):Object(C.jsx)(C.Fragment,{}),r.chatState===K.OPENED?Object(C.jsx)(T,{openedConversation:h,postMessage:function(e){e.sentBy={name:n.name,clientId:n.clientId},X.emit("post-message",{conversation:h,message:e})},userId:n.clientId,minimizeConversation:function(){X.emit("leave-conversation",h.conversationLink),g({_id:"",conversationLink:"",users:[],messages:[]}),d({chatState:K.CLOSED}),N(n.clientId)}}):Object(C.jsx)(C.Fragment,{}),r.chatState===K.CLOSED?Object(C.jsx)(Q,{user:n,showNewChatOptions:function(){d({chatState:K.OPTIONS})},editUsername:B,joinConversationByLink:function(e){X.emit("join-conversation",{conversationLink:e,user:{clientId:n.clientId,name:n.name}})}}):Object(C.jsx)(C.Fragment,{}),p&&p.length>0?Object(C.jsx)(J,{conversations:p,openedConversation:h,openConversation:function(e){X.emit("get-conversation",{conversationLink:e})}}):Object(C.jsx)(C.Fragment,{})]})})}));i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(Z,{})}),document.getElementById("root"))},56:function(e,t,n){},58:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},94:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.eb7b8eb5.chunk.js.map