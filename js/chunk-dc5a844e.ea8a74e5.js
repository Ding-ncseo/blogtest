(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc5a844e"],{"10dd":function(t,e,a){},"3a6b":function(t,e,a){},"684a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("MessageAreaForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("MessageAreaList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"message-areaForm-container",attrs:{id:"slb"},on:{submit:function(e){return e.preventDefault(),t.hanleSubmit(e)}}},[a("div",{staticClass:"message-areaForm-Input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickName,expression:"formData.nickName"}],attrs:{type:"text",placeholder:"用户名称",maxlength:"10"},domProps:{value:t.formData.nickName},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickName",e.target.value)}}}),a("span",{staticClass:"abs"},[t._v(t._s(t.formData.nickName.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickName))]),a("div",{staticClass:"message-areaForm-textarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{placeholder:"输入内容",maxlength:"300"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),a("span",{staticClass:"abs"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))]),a("div",{staticClass:"button"},[a("button",{attrs:{type:"submit",disabled:t.isSumbiting}},[t._v(" "+t._s(t.isSumbiting?"提交中...":"提交")+" ")])])])},i=[],o=a("c4f5"),c={data:function(){return{isSumbiting:!1,formData:{nickName:"",content:""},error:{nickName:"",content:""}}},methods:{hanleSubmit:function(){var t=this;this.error.nickName=this.formData.nickName?"":"请填写昵称!",this.error.content=this.formData.content?"":"请填写内容!",this.error.nickName||this.error.content||(this.isSumbiting=!0,this.$emit("submit",this.formData,(function(e){Object(o["a"])({content:e,type:"success",container:t.$refs.form,callback:function(){t.isSumbiting=!1,t.formData.nickName="",t.formData.content=""}})})))}}},l=c,u=(a("9003"),a("2877")),f=Object(u["a"])(l,s,i,!1,null,"70865736",null),m=f.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-List-container"},[a("ul",t._l(t.list,(function(e){return a("li",{key:e.id,staticClass:"message-area-List"},[a("div",{staticClass:"message-area-list-left"},[a("Avatar",{attrs:{url:e.avatar,size:60}})],1),a("div",{staticClass:"message-area-list-right"},[a("h3",[t._v(t._s(e.nickname))]),a("p",[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])])})),0)])},h=[],p=a("287e"),v=a("2095"),g={components:{Avatar:p["a"]},props:{list:{type:Array,default:function(){return[]}}},methods:{formatDate:v["a"]}},b=g,w=(a("f7da"),Object(u["a"])(b,d,h,!1,null,"5dbf0338",null)),S=w.exports,_={components:{MessageAreaForm:m,MessageAreaList:S},props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:function(){return[]}},isListLoading:{type:Boolean,default:!1}}},D=_,$=(a("74ec"),Object(u["a"])(D,n,r,!1,null,"0f71626e",null));e["a"]=$.exports},"74ec":function(t,e,a){"use strict";a("f5f4")},"8fc4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingShow,expression:"loadingShow"}],ref:"messageContainer",staticClass:"message-container"},[t.data?[a("MessageArea",{attrs:{list:t.data.rows,title:"评论列表",subTitle:"("+t.data.total+")"},on:{submit:t.hanldSubmit}})]:t._e()],2)},r=[],s=a("1da1"),i=(a("99af"),a("96cf"),a("684a")),o=a("7899"),c=a("e128"),l=a("f119"),u={mixins:[Object(c["a"])(null),Object(l["a"])("messageContainer")],data:function(){return{page:1,limit:10}},components:{MessageArea:i["a"]},created:function(){this.$bus.$on("mainScroll",this.hanldScroll)},computed:{dataLoaded:function(){return this.data.rows.length<this.data.total}},methods:{fetchData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["f"])(t.$route.params.id,t.page,t.limit);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},hanldSubmit:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["g"])();case 2:n=t.sent,a.data.rows.unshift(n),a.data.total++,e("评论成功!");case 6:case"end":return t.stop()}}),t)})))()},fetchMore:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.dataLoaded){e.next=2;break}return e.abrupt("return");case 2:return t.loadingShow=!0,e.next=5,t.fetchData();case 5:a=e.sent,t.data.total=a.total,t.data.rows=t.data.rows.concat(a.rows),t.loadingShow=!1;case 9:case"end":return e.stop()}}),e)})))()},hanldScroll:function(t){if(!this.loadingShow&&t){var e=100,a=Math.abs(t.clientHeight+t.scrollTop-t.scrollHeight);a<=e&&this.fetchMore()}}}},f=u,m=(a("dcf7"),a("2877")),d=Object(m["a"])(f,n,r,!1,null,"4dd04290",null);e["default"]=d.exports},9003:function(t,e,a){"use strict";a("f5cb")},dcf7:function(t,e,a){"use strict";a("10dd")},e128:function(t,e,a){"use strict";var n=a("1da1");a("96cf");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{data:function(){return{loadingShow:!0,data:t}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.data=e.sent,t.loadingShow=!1;case 4:case"end":return e.stop()}}),e)})))()}}}},f119:function(t,e,a){"use strict";e["a"]=function(t){return{methods:{handleScroll:function(){this.$bus.$emit("mainScroll",this.$refs[t])},handleScrollTop:function(e){this.$refs[t].scrollTop=e}},mounted:function(){this.$bus.$on("mainScrollTop",this.handleScrollTop),this.$refs[t].addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.$bus.$emit("mainScroll"),this.$refs[t].removeEventListener("scroll",this.handleScroll),this.$bus.$off("mainScrollTop",this.handleScrollTop)}}}},f5cb:function(t,e,a){},f5f4:function(t,e,a){},f7da:function(t,e,a){"use strict";a("3a6b")}}]);
//# sourceMappingURL=chunk-dc5a844e.ea8a74e5.js.map