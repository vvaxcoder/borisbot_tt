(function(t){function e(e){for(var o,r,a=e[0],c=e[1],s=e[2],h=0,l=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(l.length)l.shift()();return d.push.apply(d,s||[]),n()}function n(){for(var t,e=0;e<d.length;e++){for(var n=d[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(d.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},d=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/borisbot_tt/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=c;d.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"01d3":function(t,e,n){},"0a18":function(t,e,n){"use strict";n("f3a9")},7066:function(t,e,n){"use strict";n("b6e3")},"70ad":function(t,e,n){"use strict";n("01d3")},b6e3:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"create-node"},[n("button",{staticClass:"create__btn",on:{click:t.addNode}},[t._v("Add new node")])]),t._l(t.getNodes,(function(e,o){return n("Node",{key:e.id+1e4*Math.random(),style:{top:e.y+"px",left:e.x+"px"},attrs:{nodeId:e.id,index:o,width:t.width,height:t.height}})})),n("Canvas",{attrs:{width:t.width,height:t.height,size:t.size}})],2)},d=[],r=n("d4ec"),a=n("bee2"),c=n("262e"),s=n("2caf"),u=(n("d3b7"),n("25f0"),n("9ab4")),h=n("1b40"),l=n("4bb5"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas-wrapper"},[n("canvas",{attrs:{id:"myCanvas"},on:{drop:function(e){return t.onDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}}),t._t("default")],2)},p=[],O=(n("7db0"),Object(l["a"])("nodes")),v=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return Object(a["a"])(n,[{key:"onDrop",value:function(t){var e=t.dataTransfer,n=e.getData("itemId"),o=this.getNodes.find((function(t){return t.id===+n})),i=this.getNodes.indexOf(o);this.getNodes[i].x=t.clientX,this.getNodes[i].y=t.clientY,this.updateConnect(this.getConnectedNodes)}},{key:"updateConnect",value:function(t){this.ctx.clearRect(0,0,this.width,this.height);for(var e=0;e<t.length-1;e++)this.drawLine(t[e].x,t[e+1].x,t[e].y,t[e+1].y)}},{key:"drawLine",value:function(t,e,n,o){this.ctx.beginPath(),this.ctx.moveTo(t+this.size/2,n+this.size/2),this.ctx.lineTo(e+this.size/2,o+this.size/2),this.ctx.stroke()}},{key:"mounted",value:function(){var t=document.getElementById("myCanvas");this.ctx=t.getContext("2d"),t.width=this.width,t.height=this.height,this.vueCanvas=this.ctx;for(var e=0;e<3;e++){var n=this.$parent;n.addNode()}}}]),n}(h["c"]);Object(u["a"])([O.Getter("getNodes")],v.prototype,"getNodes",void 0),Object(u["a"])([O.Getter("getConnectedNodes")],v.prototype,"getConnectedNodes",void 0),Object(u["a"])([Object(h["b"])()],v.prototype,"width",void 0),Object(u["a"])([Object(h["b"])()],v.prototype,"height",void 0),Object(u["a"])([Object(h["b"])()],v.prototype,"size",void 0),v=Object(u["a"])([Object(h["a"])({})],v);var b=v,N=b,E=(n("70ad"),n("2877")),g=Object(E["a"])(N,f,p,!1,null,"b6b40148",null),C=g.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:t.nodeId+"|"+t.index,staticClass:"node",attrs:{draggable:"true"},on:{click:t.doNodeConnect,dblclick:t.deleteElem,dragstart:function(e){return t.handleDragstart(e)},dragend:function(e){return t.handleDragend(e)}}})},_=[],j=(n("159b"),n("4fad"),n("99af"),n("caad"),n("2532"),n("4de4"),n("fb6a"),Object(l["a"])("nodes")),y=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.isNodeClicked=!1,t.dragItemId=0,t}return Object(a["a"])(n,[{key:"doNodeConnect",value:function(){var t=this,e=null;this.$parent.$children.forEach((function(t){"canvas-wrapper"!==Object.entries(t.$el)[0][1]||(e=t)})),null!=e&&e.ctx.clearRect(0,0,this.width,this.height);var n=this.$refs["".concat(this.nodeId,"|").concat(this.index)];if(this.isNodeClicked?null!=n&&n.classList.remove("connected"):null!=n&&n.classList.add("connected"),this.getConnectedIds.includes(this.nodeId)){var o=this.getConnectedNodes.filter((function(e){return e.id!==t.nodeId}));this.UPDATE_CONNECTED_NODES(o);var i=this.getConnectedIds.filter((function(e){return e!==t.nodeId}));this.UPDATE_CONNECTED_IDS(i)}else{this.UPDATE_CONNECTED_IDS([this.getNodes[this.index].id]),this.SET_NODE_CONNECTED(this.index);var d=this.getConnectedNodes.slice();d.push(this.getNodes[this.index]),this.UPDATE_CONNECTED_NODES(d)}var r=this.getConnectedIds.length;if(r>1){this.SET_NODE_CONNECTED(this.index);for(var a=this.getNodes.filter((function(e){return e.connected===t.getConnectedIds[0]})),c=0;c<a.length-1;c++)null!=e&&e.drawLine(a[c].x,a[c+1].x,a[c].y,a[c+1].y)}null!=e&&e.updateConnect(this.getConnectedNodes)}},{key:"deleteElem",value:function(){var t=this,e=null;this.$parent.$children.forEach((function(t){"canvas-wrapper"!==Object.entries(t.$el)[0][1]||(e=t)}));var n=this.getConnectedNodes.filter((function(e){return e.id!==t.nodeId}));this.UPDATE_CONNECTED_NODES(n),this.REMOVE_NODE_BY_IDX(this.index),null!=e&&e.updateConnect(this.getConnectedNodes)}},{key:"handleDragstart",value:function(t){var e=this,n=t.target;n.classList.add("stunned"),setTimeout((function(){var e=t.target;e.classList.add("hide")}),0),this.dragItemId=this.nodeId;var o=this.getNodes.find((function(t){return t.id===e.dragItemId}));if(null!=t){var i=t.dataTransfer;i.dropEffect="move",i.effectAllowed="move",i.setData("itemId",""+o.id)}}},{key:"handleDragend",value:function(t){var e=t.target;e.classList.add("stunned");var n=t.target;n.classList.add("hide"),this.dragItemId=0}}]),n}(h["c"]);Object(u["a"])([Object(h["b"])()],y.prototype,"nodeId",void 0),Object(u["a"])([Object(h["b"])()],y.prototype,"index",void 0),Object(u["a"])([Object(h["b"])()],y.prototype,"width",void 0),Object(u["a"])([Object(h["b"])()],y.prototype,"height",void 0),Object(u["a"])([j.Getter("getNodes")],y.prototype,"getNodes",void 0),Object(u["a"])([j.Getter("getConnectedNodes")],y.prototype,"getConnectedNodes",void 0),Object(u["a"])([j.Getter("getConnectedIds")],y.prototype,"getConnectedIds",void 0),Object(u["a"])([j.Mutation("SET_NODE_CONNECTED")],y.prototype,"SET_NODE_CONNECTED",void 0),Object(u["a"])([j.Mutation("UPDATE_CONNECTED_NODES")],y.prototype,"UPDATE_CONNECTED_NODES",void 0),Object(u["a"])([j.Mutation("UPDATE_CONNECTED_IDS")],y.prototype,"UPDATE_CONNECTED_IDS",void 0),Object(u["a"])([j.Mutation("REMOVE_NODE_BY_IDX")],y.prototype,"REMOVE_NODE_BY_IDX",void 0),y=Object(u["a"])([Object(h["a"])({})],y);var T=y,I=T,m=(n("0a18"),Object(E["a"])(I,D,_,!1,null,"7680db5a",null)),x=m.exports,w=Object(l["a"])("nodes"),S=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.height=window.innerHeight,t.width=window.innerWidth,t.size=50,t}return Object(a["a"])(n,[{key:"randomId",value:function(t){return Math.round(Math.random()*t).toString()}},{key:"addNode",value:function(){this.UPDATE_NODES([{id:this.randomId(1e4),x:Math.random()*(this.width-this.size),y:Math.random()*(this.height-this.size),connected:0}])}}]),n}(h["c"]);Object(u["a"])([w.Getter("getNodes")],S.prototype,"getNodes",void 0),Object(u["a"])([w.Getter("getConnectedNodes")],S.prototype,"getConnectedNodes",void 0),Object(u["a"])([w.Getter("getConnectedIds")],S.prototype,"getConnectedIds",void 0),Object(u["a"])([w.Mutation("UPDATE_NODES")],S.prototype,"UPDATE_NODES",void 0),Object(u["a"])([w.Mutation("UPDATE_CONNECTED_NODES")],S.prototype,"UPDATE_CONNECTED_NODES",void 0),S=Object(u["a"])([Object(h["a"])({components:{Canvas:C,Node:x}})],S);var P=S,k=P,A=(n("7066"),Object(E["a"])(k,i,d,!1,null,"38837614",null)),M=A.exports,U=n("2f62"),$={getNodes:function(t){var e=t.nodes;return e},getConnectedNodes:function(t){var e=t.connectedNodes;return e},getConnectedIds:function(t){var e=t.connectedIds;return e}},z=$,L=n("2909"),G=(n("a434"),{UPDATE_NODES:function(t,e){var n=t.nodes;n=[].concat(Object(L["a"])(t.nodes),Object(L["a"])(e)),t.nodes=n},REMOVE_NODE_BY_IDX:function(t,e){var n=t.nodes;n.splice(e,1),t.nodes=n},SET_NODE_CONNECTED:function(t,e){var n=t.nodes;n[e].connected=n[e].id,t.nodes=n},UPDATE_CONNECTED_NODES:function(t,e){t.connectedNodes=e},UPDATE_CONNECTED_IDS:function(t,e){t.connectedIds=e}}),R=G,B={nodes:[],connectedNodes:[],connectedIds:[]},X=!0,Y={namespaced:X,state:B,getters:z,mutations:R};o["a"].use(U["a"]);var V={modules:{nodes:Y}},J=new U["a"].Store(V);o["a"].config.productionTip=!1,new o["a"]({store:J,render:function(t){return t(M)}}).$mount("#app")},f3a9:function(t,e,n){}});
//# sourceMappingURL=app.6dc53488.js.map