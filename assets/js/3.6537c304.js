(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{238:function(t,i,e){var n=e(3),o=e(246)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},246:function(t,i,e){var n=e(9),o=e(27),s=e(28),r=e(67).f;t.exports=function(t){return function(i){for(var e,l=s(i),a=o(l),c=a.length,h=0,d=[];c>h;)e=a[h++],n&&!r.call(l,e)||d.push(t?[e,l[e]]:l[e]);return d}}},384:function(t,i,e){"use strict";var n=e(3),o=e(31),s=e(23),r=e(8),l=[].sort,a=[1,2,3];n(n.P+n.F*(r((function(){a.sort(void 0)}))||!r((function(){a.sort(null)}))||!e(24)(l)),"Array",{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),o(t))}})},385:function(t,i,e){},497:function(t,i,e){"use strict";var n=e(3),o=e(498);n(n.P+n.F*!e(24)([].reduce,!0),"Array",{reduce:function(t){return o(this,t,arguments.length,arguments[1],!1)}})},498:function(t,i,e){var n=e(31),o=e(23),s=e(46),r=e(18);t.exports=function(t,i,e,l,a){n(i);var c=o(t),h=s(c),d=r(c.length),u=a?d-1:0,f=a?-1:1;if(e<2)for(;;){if(u in h){l=h[u],u+=f;break}if(u+=f,a?u<0:d<=u)throw TypeError("Reduce of empty array with no initial value")}for(;a?u>=0:d>u;u+=f)u in h&&(l=i(l,h[u],u,c));return l}},499:function(t,i){var e=3;console.log(6),console.log(e);e=new function(){};console.log(e.__proto__),console.log(e.prototype)},500:function(t,i,e){"use strict";e(385)},869:function(t,i,e){"use strict";e.r(i);e(384),e(497),e(22),e(238);var n=e(11),o=(e(33),e(115),e(114),e(15),e(21),e(65)),s=e(66),r=function(){function t(i,e,n){Object(o.a)(this,t),this.canvas=document.querySelector(i),this.ctx=this.canvas.getContext("2d"),this.data=e,this.firstCol=[],this.secondCol=[],this.thirdCol=[],this.lineGutter=n.lineGutter||5,this.blockGutter=n.blockGutter||50,this.lineColor=n.lineColor||"#dedede",this.type="liab",this.init(n)}return Object(s.a)(t,[{key:"init",value:function(t){this.setItemStyle(t),this.divideContent(),this.setCanvasDrawArea(),this.setCanvasBgColor(t)}},{key:"setItemStyle",value:function(t){this.width1=200,this.width2=200,this.width3=300,this.lineDistance=40,this.LineWidth=1.5,this.left=30,this.right=30,this.bottom=30,this.top=30,this.verticalY=30,this.fontSize=t.fontSize||18,this.bgColors=["green","yellow","orange"],this.fontColor=["red"],this.lineColor=t.lineColor||"#dedede"}},{key:"setCanvasDrawArea",value:function(){var t=this.width1+this.width2+this.width3+4*this.lineDistance+2*this.LineWidth+this.left+this.right,i=this.getTextHeight()||1e3;this.canvas.width=t,this.canvas.height=i}},{key:"setCanvasBgColor",value:function(t){var i=this;if(this.ctx.beginPath(),t.canvasBgUrl){console.log(213213);var e=new Image;e.src="/".concat(t.canvasBgUrl),e.onload=function(){i.ctx.drawImage(e,0,0,i.canvas.width,i.canvas.height),i.render()}}else this.ctx.fillStyle=t.canvasBg||"#fff",this.render();this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"divideContent",value:function(){this.fillFirstLevel(),this.fillSecondLevel(this.data.children)}},{key:"fillFirstLevel",value:function(){this.fillTextAndGetHeight(this.data.sort,10,this.height/2||200,100,this.firstCol)}},{key:"fillSecondLevel",value:function(t){var i=this,e=this.left+this.width1+2*this.lineDistance+this.LineWidth;this.verticalY=this.top,t.forEach((function(t,n,o){i.fillThirdLevel(t.children,e,n),i.verticalY+=i.blockGutter}))}},{key:"fillThirdLevel",value:function(t,i,e){var n=this;if(Array.isArray(t)){var o=i+this.width3+2*this.lineDistance+this.LineWidth;console.log(this.verticalY,"开始的时候"),t.forEach((function(t){n.fillTextAndGetHeight(t.key,{x:o,y:n.verticalY,w:n.width3,collector:n.thirdCol,padding:8,color:"blue"}),(t.EPro||t.APro)&&n.fillTextAndGetHeight("英: ".concat(t.EPro,"; 美:").concat(t.APro),{x:o,y:n.verticalY,w:n.width3,collector:n.thirdCol,padding:4,color:"green"}),n.fillTextAndGetHeight(t.desc,{x:o,y:n.verticalY,w:n.width3,collector:n.thirdCol,padding:4,color:"yellow"}),t.special&&n.fillTextAndGetHeight(t.special,{x:o,y:n.verticalY,w:n.width3,collector:n.thirdCol,padding:10,color:"red"})}))}}},{key:"getTextHeight",value:function(){return this.thirdCol.length?this.thirdCol[this.thirdCol.length-1][2]+this.bottom:this.secondCol.length?this.secondCol[this.secondCol.length-1][2]+this.bottom:300}},{key:"fillTextAndGetHeight",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0,w:0,collector:[],height:!1,color:"#fff"};this.ctx.beginPath();var e=[t.split(""),"",[]],n=e[0],o=e[1],s=e[2],r=[0,n.length],l=r[0],a=r[1];for(this.ctx.font="".concat(this.fontSize,"px Arial"),this.ctx.baseBaseLine="middle";l<a;l++)this.ctx.measureText(o).width>i.w&&(s.push(o),o=""),o+=n[l];if(s.push(o),Array.isArray(i.collector))for(var c=[0,s.length],h=c[0],d=c[1];!(h>=d);)i.collector.push([s[h],i.x,(h+1)*this.fontSize+i.y,i.color]),console.log(this.verticalY,s[h],i.color),h++;i.padding&&(this.verticalY+=(s.length-1)*this.lineGutter+s.length*this.fontSize+i.padding)}},{key:"render",value:function(){var t=this;this.ctx.save(),this.secondCol.map((function(i){var e;t.ctx.save(),(e=t.ctx).fillText.apply(e,[i.shift()].concat(Object(n.a)(i))),t.ctx.fillStyle=style})),this.thirdCol.map((function(i){var e,o=i.pop();t.ctx.save(),(e=t.ctx).fillText.apply(e,[i.shift()].concat(Object(n.a)(i))),t.ctx.fillStyle=o||"blue"})),this.ctx.restore()}},{key:"deleteKey",value:function(t){var i=this;!Array.isArray&&(t=[t]),Array.isArray(t)&&Object.values(t).map((function(t){delete i[t]}))}},{key:"getTotal",value:function(t){return Array.isArray(t)?t.reduce((function(t,i){return t+i}),0):0}},{key:"getPosition",value:function(t,i){if(!Array.isArray(t))return 0}},{key:"convertToBase64",value:function(){return this.canvas.toDataURL("image/png")}}]),t}(),l=e(499),a=e.n(l),c={name:"mindMap",data:function(){return{sort:"dailyLife_one",type:"short sentence",url:"http://dict.youdao.com/dictvoice?audioThroughout+lighting+we+want+to+m...",src:"Throughout+lighting+we+want+to+match+design+basic+requirements+and+pro...",key:"serendipity",desc:"n.机缘凑巧, 缘分, 偶然性",pro:"",level:"danger",exp:"至于灯光，我们希望配合设计的基本要求，并加强和完善建筑体积和形状方面的考虑。"}},computed:{dom:function(){return this.sort||this.key}},mounted:function(){window.mindMap=new r(".".concat(this.dom),a.a,{canvasBg:"blue",canvasBgUrl:"/images/xuan.jpg"})}},h=(e(500),e(1)),d=Object(h.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"words-mind"},[this.type?t("canvas",{class:[this.dom,"canvas"]}):this._e(),this._v(" "),this.type?t("canvas",{staticClass:"layer"}):t("p",[this._v("sorry about there is no words Info today!")])])}),[],!1,null,"774cd03e",null);i.default=d.exports}}]);