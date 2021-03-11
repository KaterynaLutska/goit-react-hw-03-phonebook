(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(e,t,n){e.exports={Container:"Container_Container__3tQ9A"}},16:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(16),n(10)),o=n(3),l=n(4),m=n(6),u=n(5),b=(n(17),n(24)),h=n(11),d=n.n(h),j=n(0),p=function(e){var t=e.children;return Object(j.jsx)("div",{className:d.a.Container,children:t})},f=n(2),O=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",message:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:"",message:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.message;return Object(j.jsx)("div",{className:"phonebook",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"phonebook-form",children:[Object(j.jsxs)("div",{className:"phonebook-input-fielsds",children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,className:"phonebook-label",children:Object(j.jsx)("input",{className:"phonebook-input",name:"name",value:t,type:"text",placeholder:"name",onChange:this.handleChange,required:!0})}),Object(j.jsx)("label",{className:"phonebook-label",children:Object(j.jsx)("input",{className:"phonebook-input",name:"number",value:n,type:"tel",pattern:"^[ 0-9]+$",placeholder:"number",onChange:this.handleChange,required:!0})})]}),Object(j.jsxs)("div",{className:"msg",children:[Object(j.jsx)("textarea",{placeholder:"more information",className:"textarea",name:"message",value:a,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})]})})}}]),n}(a.Component),g=n(8),x=n.n(g),v=function(e){var t=e.filter,n=e.changeFilter;return Object(j.jsx)("div",{className:"filter",children:Object(j.jsx)("label",{children:Object(j.jsx)("input",{className:"filter-input",type:"text",value:t,placeholder:"find contacts by name...",onChange:n})})})},C=v;v.protoType={filter:x.a.string,changeFilter:x.a.func};var N=function(e){var t=e.contacts,n=e.onDelete;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"contact-list",children:t.map((function(e){return Object(j.jsxs)("li",{className:"contact-item",children:[e.name+":",Object(j.jsx)("span",{className:"contact-span",children:e.number}),Object(j.jsx)("p",{className:"contact-message",children:e.message}),Object(j.jsx)("button",{onClick:function(){return n(e.id)},className:"btn",children:"Delete"})]},e.id)}))})})},y=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",message:"my friend "},{id:"id-2",name:"Hermione Kline",number:"443-89-12",message:"my sister"},{id:"id-3",name:"Eden Clements",number:"645-17-79",message:"courier"},{id:"id-4",name:"Annie Copeland",number:"227-91-26",message:"my colleague"}],filter:""},e.formSubmitHandler=function(t){var n=e.state.contacts;return n.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):n.some((function(e){return e.number===t.number}))?alert("Number ".concat(t.number," is already in contacts")):(n.push({id:Object(b.a)(),name:t.name,number:t.number,message:t.message}),e.setState(Object(i.a)({},n)))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.deleteContacts=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.filter,n=e.contacts,a=t.toLowerCase(),c=n.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(p,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{onSubmit:this.formSubmitHandler}),n.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(C,{filter:t,changeFilter:this.changeFilter}),Object(j.jsx)(N,{contacts:c,onDelete:this.deleteContacts})]})]})})}}]),n}(a.Component);n(21);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8b8a1ffe.chunk.js.map