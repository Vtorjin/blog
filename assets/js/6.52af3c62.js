(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{260:function(t,e,n){"use strict";n(275),n(29),n(22),n(238),n(15),n(21),n(45);var i=n(65),a=n(66),s=n(247),o=function(){function t(){Object(i.a)(this,t),this.events={}}return Object(a.a)(t,null,[{key:"getInstance",value:function(){return null==this.instance&&(this.instance=new t),this.instance}}]),Object(a.a)(t,[{key:"registerEvent",value:function(t,e,n){if("string"!=typeof t||"function"!=typeof e)throw new Error("注册事件失败!");if(!e.name&&!n)throw new Error("注册匿名函数标识不能为空!");var i;if(this.events[t]||(this.events[t]={}),i=e.name?e.name:n,this.events[t][i])throw new Error("id為".concat(t,"的").concat(e.name,"事件已經注冊!"));this.events[t][i]=e}},{key:"postEvent",value:function(t){for(var e=this,n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];t&&this.events[t]&&Object.values(this.events[t]).forEach((function(t){t.call.apply(t,[e].concat(i))}))}},{key:"unRegisterEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(this.events[t])if(Object.keys(this.events[t]).length){var n=Object.keys(this.events[t]).findIndex((function(t){return t===e}));-1===n?console.warn("解除标识错误!"):delete this.events[t][e]}else delete this.events[t]}}]),t}();Object(s.a)(o,"instance",void 0),e.a=o},493:function(t,e,n){},864:function(t,e,n){"use strict";n(493)},868:function(t,e,n){"use strict";n.r(e);n(45),n(116),n(503),n(504),n(22),n(238),n(15),n(21),n(114),n(32),n(507);var i=n(508),a=n(62),s=n(509),o=n.n(s),r=n(65),l=n(66),c=n(247),h=(n(34),function(){function t(){Object(r.a)(this,t)}return Object(l.a)(t,null,[{key:"createE",value:function(t,e,n){if(t=document.createElement(t),e)for(var i in e)t.style[i]=e[i];if(n)for(var a in n)t[a]=n[a];return t}},{key:"appendTo",value:function(t,e){e.constructor===String&&(e=document.querySelector(e)),e.appendChild(t)}},{key:"randomNum",value:function(t,e){return Math.floor(Math.random*(e-t)+t)}},{key:"randomColor",value:function(e){e=e||Math.random().toFixed(1),isNaN(e)&&(e=1),e>1&&(e=1),e<0&&(e=0);for(var n="rgba(",i=0;i<3;i++)n+=t.randomNum(0,256)+",";return n+=e+")"}},{key:"insertCss",value:function(e,n){if(0===document.styleSheets.length){var i=t.createE("style");t.appendTo(i,document.head)}var a=document.styleSheets[document.styleSheets.length-1],s=e+"{";for(var o in n)s+=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLocaleLowerCase()}))+":"+n[o]+";";s+="}",a.insertRule(s,a.cssRules.length)}},{key:"getIdElem",value:function(e,n){if(e.id&&(n[e.id]=e),0===e.children.length)return n;for(var i=0;i<e.children.length;i++)t.getIdElem(e.children[i],n)}}]),t}()),d=(n(804),n(260)),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:143;Object(r.a)(this,t),Object(c.a)(this,"num",void 0),Object(c.a)(this,"dataLength",void 0),Object(c.a)(this,"position",1),Object(c.a)(this,"pageList",[]),Object(c.a)(this,"nextClickBool",!1),Object(c.a)(this,"preClickBool",!1),Object(c.a)(this,"prepPage",void 0),this.num=e,this.dataLength=n,this.elem=this.createElem()}return Object(l.a)(t,[{key:"createElem",value:function(){var e=this;if(this.elem)return this.elem;var n=h.createE("div");return n.className="pageContainer",n.innerHTML='<a href="javascript:void(0)" class="disabled" id="preBtn">&lt;上一页</a>'.concat(this.setPageCon(),'\n        <a href="javascript:void(0)" id="nextBtn">下一页&gt;</a>'),t.setStyles(),h.getIdElem(n,this),n.addEventListener("click",(function(t){return e.clickHandler(t)})),n}},{key:"appendTo",value:function(t){h.appendTo(this.elem,t)}},{key:"setPageCon",value:function(){for(var t="",e=0;e<Math.ceil(this.dataLength/this.num);e++)t+='<a href="javascript:void(0)" class="'.concat(0===e?"active":"",'">').concat(e+1,"</a>");return t}},{key:"clickHandler",value:function(t){if("A"==t.target.nodeName){var e=document.querySelectorAll("a");switch(this.pageList=Array.prototype.slice.call(e).slice(1,e.length-1),this.prepPage=this.pageList[this.position-1],t.target.innerText){case"<上一页":if(this.preClickBool)return;this.nextClickBool=!1,this.position--,this.position<=1&&(this.position=1,this.preClickBool=!0);break;case"下一页>":if(this.nextClickBool)return;this.preClickBool=!1,this.position++,this.position>=this.pageList.length&&(this.position=this.pageList.length,this.nextClickBool=!0);break;default:this.position=Number(t.target.innerText),this.preClickBool=!1,this.nextClickBool=!1}d.a.getInstance().postEvent("position",this.position),this.setPageStyles(),this.setBtnState()}}},{key:"setPageStyles",value:function(){this.prepPage&&(this.prepPage.className=""),this.prepPage=this.pageList[this.position-1],this.prepPage.className="active"}},{key:"setContent",value:function(){for(var e=[],n=(this.position-1)*this.num;n<this.position*this.num;n++)n>=this.dataLength||e.push(n);var i=new Event(t.GET_RESULT_DATA);i.data=e,document.dispatchEvent(i)}},{key:"setBtnState",value:function(){1==this.position?this.preBtn.className="disabled":this.preBtn.className="",this.position==this.pageList.length?this.nextBtn.className="disabled":this.nextBtn.className=""}}],[{key:"setStyles",value:function(){t.stylesCss||(t.stylesCss=!0,h.insertCss(".pageContainer",{marginTop:"30px"}),h.insertCss(".pageContainer a",{textDecoration:"none",display:"inline-block",minWidth:"10px",textAlign:"center",padding:"5px 10px",borderRadius:"7px",marginRight:"3px",backgroundColor:"#fff",color:"#818287",border:"1px solid #f6f6f6",userSelect:"none"}),h.insertCss(".pageContainer a:hover",{backgroundColor:"rgba(233,37,56,.3)",color:"#fff"}),h.insertCss(".pageContainer a.disabled",{backgroundColor:"#f2f2f2",borderColor:"#d9d9d9",color:"#ccc"}),h.insertCss(".pageContainer a.active",{backgroundColor:"#e92538",borderColor:"#e92538",color:"#fff"}))}}]),t}();Object(c.a)(p,"stylesCss",!1),Object(c.a)(p,"GET_RESULT_DATA","get_result_data");var u=function(){function t(e,n){var i=this;Object(r.a)(this,t),Object(c.a)(this,"resultData",[]),Object(c.a)(this,"content",void 0),document.addEventListener(t.GET_RESULT_DATA,(function(t){return i.getResultData(t)})),this.elem=this.createElem();var a=new p(e,n);h.appendTo(a.elem,this.elem)}return Object(l.a)(t,[{key:"createElem",value:function(){return this.elem?this.elem:h.createE("div")}},{key:"appendTo",value:function(t){h.appendTo(this.elem,t)}},{key:"getResultData",value:function(t){this.resultData=t.data,this.createCont()}},{key:"createCont",value:function(){var t=this;this.content&&this.content.remove(),this.content=h.createE("div",{width:"500px",height:"250px",border:"1px solid #000"}),this.resultData.forEach((function(e){var n=h.createE("span",{display:"inline-block",width:"50px",height:"50px",textAlign:"center",lineHeight:"50px"},{textContent:e});h.appendTo(n,t.content)})),this.elem.insertBefore(this.content,this.elem.firstElementChild)}}]),t}();Object(c.a)(u,"GET_RESULT_DATA","get_result_data");var v,f=n(805),g={props:["id","time","height"],data:function(){return{data:{},failed:!1,src:"",translation:[]}},methods:{getWordData:(v=Object(i.a)(regeneratorRuntime.mark((function t(){var e,n=this,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=i.length>0&&void 0!==i[0]?i[0]:"today",this.isMyself?a.a.get("getIelts/".concat(e)).then((function(t){if(!t)return f.Message.warning("获取数据失败!");n.data=n.formatData(t),n.getAll(t.data),console.log(n.translation),setTimeout((function(){n.initCanvas()}),0)})).catch((function(t){n.failed=!0})):a.a.get("getIelts?sort=".concat(this.id,"&time=").concat(this.time)).then((function(t){if(!t)return f.Message.warning("获取数据失败!");n.data=n.formatData(t),setTimeout((function(){n.initCanvas()}),0)})).catch((function(){n.failed=!0}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),formatData:function(t){return t.data.children=t.data.children.filter((function(t){return t.children.length})),t.data},getAll:function(t){var e=this;t&&t.children&&!Array.isArray(t.children)&&this.translation.push(t),t.children&&t.children.forEach((function(t){t.children?e.getAll(t):e.translation.push(t)}))},initCanvas:function(){var t=this.$refs.mindCard,e=this.getHeight();t.style.height=e,t.style.backgroundImage="url(".concat(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return"all"===t?"".concat(window.location.protocol,"//").concat(window.location.host):window.location[t]}(),"/images/bg.jpg)");var n=o.a.init(t);n.clear();n.setOption({background:{backgroundColor:"transparent"},tooltip:{trigger:"item",triggerOn:this.device||"mousemove",backgroundColor:"rgba(0,0,0,0.2)",formatter:function(t){var e="";return t.data.sentence&&(e=t.data.sentence.length>90?t.data.sentence.slice(0,90)+"<br/>"+t.data.sentence.slice(90):t.data.sentence),t.data.sentenceDesc&&(t.data.sentenceDesc.length>90?t.data.sentenceDesc.slice(0,90)+"</br>"+t.data.sentenceDesc.slice(90):t.data.sentenceDesc),'\n                        <div class="tooltipBox">\n                            <p class="text-gradient">'.concat(t.data.name,'</p>\n                            <p class="text-voice">\n                            ').concat(t.data.EPro?"[英]:"+t.data.EPro:"").concat(t.data.APro?"[美]:"+t.data.APro:"",'</p>\n                            <p class="text-translate">').concat(t.data.desc||"",'</p>\n                            <p class="').concat(t.data.special?"text-special":"",' text-translate">').concat(t.data.special||"",'</p>\n                            <p class="text-overflow  text-special"> ').concat(e||"",'</p>    \n                            <p class=""').concat(t.data.sentenceDesc?"text-overflow":"",'  text-special"> ').concat(t.data.sentenceDesc||"","</p>\n                        </div>    \n                    ")}},series:[{type:"tree",data:[this.data],top:"1%",left:"19%",bottom:"1%",right:"30%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:14,fontWeight:"500",margin:12,paddingTop:52,color:"#311"},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},emphasis:{focus:"descendant"},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750}],graphic:{keyframeAnimation:{duration:2e3,loop:!0,keyframes:[{percent:.7,style:{fill:"transparent",lineDashOffset:200,lineDash:[200,0]}},{percent:.8,style:{fill:"transparent"}},{percent:1,style:{fill:"black"}}]},type:"text",left:"center",top:"center",style:{text:"Apache ECharts",fontSize:80,fontWeight:"bold",lineDash:[0,200],lineDashOffset:0,fill:"transparent",stroke:"#000",lineWidth:1}}}),n.resize({height:e})},getHeight:function(){var t=0;return Object.values(this.data).length&&this.data.children.length&&Object.values(this.data.children).forEach((function(e){t+=18,e.children.length&&(t+=18*e.children.length)})),(t||400)+"px"},getAudioFile:function(){var t=document.querySelector(".shortEssay");if(t&&t.innerText){var e=t.innerText;this.src="https://tts.youdao.com/fanyivoice?word=".concat(e,"&le=eng&keyfrom=speaker-target")}}},computed:{device:function(){return"Desktop"===window.vicray.device?"mousemove":"click"},isMyself:function(){try{return!!window.location.search.includes("user=jinleigege")}catch(t){return!1}},style:function(){return{height:this.getHeight(),width:"1050px",marginLeft:"-6rem"}},isBlank:function(){return"{}"===JSON.stringify(this.data)}},mounted:function(){var t=this;this.isMyself&&new u(50,305).appendTo(".pagination");d.a.getInstance().registerEvent("position",(function(e){t.getWordData(e)}),"wtwhw"),this.getWordData(),window.getAudioFile=this.getAudioFile},created:function(){this.$message=f.Message,d.a.getInstance().unRegisterEvent("position","wtwhw")},destroyed:function(){d.a.getInstance().unRegisterEvent("position","wtwhw")}},m=(n(864),n(1)),_=Object(m.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-content"},[e("h3",[t._v("Daily Reading")]),t._v(" "),t.data.editor&&!t.isBlank?e("div",{staticClass:"shortEssay",domProps:{innerHTML:t._s(t.data.editor)}}):t.isBlank&&!t.failed?e("div",{staticClass:"demo-block demo-zh-CN demo-skeleton"},[t._m(0)]):e("div",{staticClass:"noData"},[e("img",{attrs:{src:"https://www.vicray.cn/images/empty-image.png",alt:"图片"}}),t._v(" "),e("p",[t._v("暂无数据")])]),t._v(" "),e("h3",[t._v("Words Map")]),t._v(" "),t.isBlank&&!t.failed?e("div",{staticClass:"demo-block demo-zh-CN demo-skeleton"},[t._m(1)]):t.isBlank&&t.failed?e("div",{staticClass:"noData"},[e("img",{attrs:{src:"https://www.vicray.cn/images/empty-image.png",alt:"图片"}}),t._v(" "),e("p",[t._v("暂无数据")])]):e("div",{ref:"mindCard",staticClass:"mindcard",style:t.style}),t._v(" "),t.isMyself?e("div",{staticClass:"pagination"}):t._e(),t._v(" "),t.isMyself?e("ul",t._l(t.translation,(function(n){return e("li",{key:n.name},[e("p",[e("span",{staticClass:"mg-10"},[t._v(t._s(n.name))]),t._v(" "),e("span",[t._v(t._s(n.EPro))])]),t._v(" "),e("p",{domProps:{innerHTML:t._s(n.desc)}}),t._v(" "),e("p",{domProps:{innerHTML:t._s(n.sentence)}},[t._v(t._s(n.sentence))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(n.sentenceDesc)}})])})),0):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"el-skeleton is-animated"},[t("div",{staticClass:"el-skeleton__item el-skeleton__p is-first"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph is-last"})])},function(){var t=this._self._c;return t("div",{staticClass:"el-skeleton is-animated"},[t("div",{staticClass:"el-skeleton__item el-skeleton__p is-first"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph"}),this._v(" "),t("div",{staticClass:"el-skeleton__item el-skeleton__p el-skeleton__paragraph is-last"})])}],!1,null,null,null);e.default=_.exports}}]);