(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{299:function(t,n,a){var e=a(506);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,o);e.locals&&(t.exports=e.locals)},41:function(t,n,a){"use strict";a.r(n);var e=a(0),o=a.n(e),r=a(2),i=a.n(r);function d(t,n,a,e,o,r,i){try{var d=t[r](i),l=d.value}catch(t){return void a(t)}d.done?n(l):Promise.resolve(l).then(e,o)}function l(t){return function(){var n=this,a=arguments;return new Promise((function(e,o){var r=t.apply(n,a);function i(t){d(r,e,o,i,l,"next",t)}function l(t){d(r,e,o,i,l,"throw",t)}i(void 0)}))}}var s={layout:"recipient",data:function(){return{columns:[{label:"送信日時",field:"created_at"},{label:"件名",field:"title"},{label:"宛先",field:"target"},{label:"",field:"detail"}],rows:[],tempRows:[],pageCount:1,keyword:null,from:null,to:null}},mounted:function(){this.init()},methods:{clickPage:function(t){this.rows=this.tempRows.filter((function(n,a){return a>=10*(t-1)&&a<10*t}))},toDetailPage:function(t){this.$router.push({name:"recipient.message.detail",query:{id:t}})},init:function(){var t=this;return l(o.a.mark((function n(){var a,e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,axios.post("/recipienter/get_mail_histories");case 3:a=n.sent,e=a.data,t.tempRows=e.histories,t.rows=t.tempRows.filter((function(t,n){return n<10})),t.setPagination(),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))()},setPagination:function(){this.tempRows.length%10>0?this.pageCount=parseInt(this.tempRows.length/10)+1:this.pageCount=parseInt(this.tempRows.length/10)},search:function(){var t=this;return l(o.a.mark((function n(){var a,e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,axios.post("/recipienter/get_mail_histories");case 3:a=n.sent,e=a.data,t.tempRows=e.histories,t.keyword&&(t.tempRows=t.tempRows.filter((function(n){return n.title.includes(t.keyword)}))),t.from&&(t.tempRows=t.tempRows.filter((function(n){return i()(n.created_at).format("YYYYMMDD")>=i()(t.from).format("YYYYMMDD")}))),t.to&&(t.tempRows=t.tempRows.filter((function(n){return i()(n.created_at).format("YYYYMMDD")<=i()(t.to).format("YYYYMMDD")}))),t.rows=t.tempRows.filter((function(t,n){return n<10})),t.setPagination(),n.next=15;break;case 13:n.prev=13,n.t0=n.catch(0);case 15:case"end":return n.stop()}}),n,null,[[0,13]])})))()}}},c=(a(505),a(3)),_=Object(c.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"main__container"},[a("h2",{staticClass:"page__title"},[t._v("メール配信履歴")]),t._v(" "),a("div",{staticClass:"table__header"},[a("div",{staticClass:"search__form"},[a("div",{staticClass:"d-flex mb-14"},[a("div",{staticClass:"form__row d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"キーワード"},domProps:{value:t.keyword},on:{input:function(n){n.target.composing||(t.keyword=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__row mr-0 d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.from,expression:"from"}],attrs:{type:"date"},domProps:{value:t.from},on:{input:function(n){n.target.composing||(t.from=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"deparate"},[t._v("~")]),t._v(" "),a("div",{staticClass:"form__row d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.to,expression:"to"}],attrs:{type:"date"},domProps:{value:t.to},on:{input:function(n){n.target.composing||(t.to=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__action"},[a("button",{on:{click:t.search}},[t._v("検索")])])])]),t._v(" "),a("div",{staticClass:"exort__part"},[a("div",{staticClass:"total_count"},[t._v("\n        "+t._s(t.tempRows.length)+"件\n      ")])])]),t._v(" "),a("div",{staticClass:"table__container"},[a("vue-good-table",{attrs:{columns:t.columns,rows:t.rows,"pagination-options":{enabled:!1}},scopedSlots:t._u([{key:"table-row",fn:function(n){return["detail"==n.column.field?a("div",[a("button",{staticClass:"detail_btn",on:{click:function(a){return t.toDetailPage(n.row.id)}}},[t._v("詳細")])]):"target"==n.column.field?a("div",[t._v("\n          "+t._s(n.row.user.com_name)+"\n        ")]):"created_at"==n.column.field?a("div",[t._v("\n          "+t._s(t._f("dateFormatFull")(n.row.created_at))+"\n        ")]):a("div",{staticClass:"table_cell"},[t._v("\n          "+t._s(n.formattedRow[n.column.field])+"\n        ")])]}}])},[t._v(" "),a("div",{attrs:{slot:"table-actions-bottom"},slot:"table-actions-bottom"},[a("paginate",{attrs:{"page-count":t.pageCount,"click-handler":t.clickPage,"prev-text":"次","next-text":"前","container-class":"my_custom_pagination"}})],1)])],1)])}),[],!1,null,"a4b5f0d6",null);n.default=_.exports},505:function(t,n,a){"use strict";a(299)},506:function(t,n,a){(t.exports=a(5)(!1)).push([t.i,'.d-flex[data-v-a4b5f0d6] {\n  display: flex;\n  align-items: center;\n}\n.mb-14[data-v-a4b5f0d6] {\n  margin-bottom: 14px;\n}\n.main__container[data-v-a4b5f0d6] {\n  padding: 20px 30px;\n}\n.main__container .page__title[data-v-a4b5f0d6] {\n  margin-bottom: 20px;\n}\n.main__container .table__header[data-v-a4b5f0d6] {\n  display: flex;\n  width: 1290px;\n  align-items: flex-end;\n  margin-bottom: 12px;\n}\n.main__container .table__header .search__form[data-v-a4b5f0d6] {\n  width: 850px;\n  border: 1px solid var(--border-color);\n  padding: 8px 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n.main__container .table__header .search__form .form__row[data-v-a4b5f0d6] {\n  margin-right: 15px;\n  width: 200px;\n}\n.main__container .table__header .search__form .form__row.mr-0[data-v-a4b5f0d6] {\n  margin-right: 0;\n}\n.main__container .table__header .search__form .form__row input[data-v-a4b5f0d6], .main__container .table__header .search__form .form__row select[data-v-a4b5f0d6] {\n  height: 30px;\n  flex: 1;\n  border: 1px solid var(--border-color);\n  padding-left: 6px;\n  padding-right: 6px;\n  font-size: 14px;\n}\n.main__container .table__header .search__form .deparate[data-v-a4b5f0d6] {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n.main__container .table__header .search__form .form__action[data-v-a4b5f0d6] {\n  margin-left: auto;\n  margin-right: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.main__container .table__header .search__form .form__action button[data-v-a4b5f0d6] {\n  width: 120px;\n  height: 30px;\n  background-color: var(--accent-color);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  border: 0;\n  font-weight: bold;\n  cursor: pointer;\n}\n.main__container .table__header .exort__part[data-v-a4b5f0d6] {\n  flex: 1;\n}\n.main__container .table__header .exort__part .append_btn[data-v-a4b5f0d6] {\n  margin-left: auto;\n  width: 120px;\n  height: 30px;\n  background-color: #985298;\n  color: #fff;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  font-weight: 600;\n  margin-bottom: 35px;\n}\n.main__container .table__header .exort__part .append_btn img[data-v-a4b5f0d6] {\n  margin-right: 4px;\n}\n.main__container .table__header .exort__part .append_btn[data-v-a4b5f0d6]:hover {\n  color: #fff;\n}\n.main__container .table__header .exort__part .download_panel[data-v-a4b5f0d6] {\n  padding: 15px;\n  background-color: var(--accent-color);\n  border-radius: 5px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-top: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  position: relative;\n}\n.main__container .table__header .exort__part .download_panel a[data-v-a4b5f0d6] {\n  border-radius: 5px;\n  background-color: #fff;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 14px;\n  font-size: 12px;\n  color: var(--text-color);\n}\n.main__container .table__header .exort__part .download_panel a[data-v-a4b5f0d6]:last-of-type {\n  margin-right: 0;\n}\n.main__container .table__header .exort__part .download_panel a img[data-v-a4b5f0d6] {\n  margin-right: 6px;\n}\n.main__container .table__header .exort__part .download_panel[data-v-a4b5f0d6]:after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 20px solid var(--accent-color);\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  right: 35px;\n  bottom: -20px;\n}\n.main__container .table__header .exort__part .total_count[data-v-a4b5f0d6] {\n  padding-right: 130px;\n  font-size: 12px;\n  color: var(--text-color);\n  text-align: right;\n  padding-top: 10px;\n}\n.main__container .table__container[data-v-a4b5f0d6] {\n  padding-top: 0px;\n  width: 1290px;\n}\n.table_cell[data-v-a4b5f0d6] {\n  font-size: 12px;\n}\n.shipping_slip[data-v-a4b5f0d6] {\n  width: 60px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 12px;\n  background-color: var(--accent-color);\n}\n.shipping_slip.off[data-v-a4b5f0d6] {\n  background-color: #D34555;\n}\n.detail_btn[data-v-a4b5f0d6] {\n  width: 60px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  background-color: var(--border-color);\n  color: #fff;\n  font-size: 12px;\n}\n.detail_btn.send[data-v-a4b5f0d6] {\n  background-color: var(--accent-color);\n}\n.delete_btn[data-v-a4b5f0d6] {\n  display: flex;\n}\n.select[data-v-a4b5f0d6] {\n  width: 15px;\n  height: 15px;\n  border: 1px solid var(--border-color);\n}',""])}}]);