(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9a18f76"],{a55b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"login"}},[e("h1",[t._v("Login")]),e("div",{staticClass:"form-inputs"},[e("label",{attrs:{for:"email"}},[t._v("email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],attrs:{type:"text",id:"email",name:"email",placeholder:"email"},domProps:{value:t.input.email},on:{input:function(a){a.target.composing||t.$set(t.input,"email",a.target.value)}}})]),e("div",{staticClass:"form-inputs"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",id:"password",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(a){a.target.composing||t.$set(t.input,"password",a.target.value)}}})]),e("button",{attrs:{type:"button"},on:{click:function(a){return t.login()}}},[t._v("Login")])])},n=[],i={name:"Login",data(){return{input:{email:"",password:""}}},methods:{login(){""!=this.input.email&&""!=this.input.password?this.input.email==this.$parent.mockAccount.email&&this.input.password==this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"calculator"})):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}},o=i,r=(e("d6db"),e("2877")),p=Object(r["a"])(o,s,n,!1,null,null,null);a["default"]=p.exports},ad7a:function(t,a,e){},d6db:function(t,a,e){"use strict";var s=e("ad7a"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-c9a18f76.da5aea58.js.map