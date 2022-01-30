(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"133e":function(t,e,a){},6602:function(t,e,a){},"6f47":function(t,e,a){"use strict";a("6602")},"85ec":function(t,e,a){},ccc4:function(t,e,a){"use strict";a("133e")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r,n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Main")],1)},s=[],c=a("bee2"),o=a("d4ec"),u=a("262e"),h=a("2caf"),l=a("9ab4"),f=a("1b40"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{"margin-left":"30px",display:"flex","align-items":"center"}},[a("h2",[t._v("AAC Audio ES Parser")]),a("Upload",{on:{onDataReady:t.onDataReady}})],1),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{width:"700px","flex-shrink":"0","padding-left":"30px"}},[a("Summary",{attrs:{"adts-parser":t.adtsParser}}),a("Hex",{ref:"hex"})],1),a("div",[a("FrameInfo",{attrs:{frame:t.adtsParser.adtsFrames[t.appState.currentSelectIndex]}})],1)])])},p=[],_=a("257e");a("d3b7"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("fb6a"),a("99af"),a("25f0");function v(t){switch(t){case 0:return"MPEG-4";case 1:return"MPEG-2";default:return"ERROR"}}function b(t){switch(t){case 0:return"AAC Main";case 1:return"AAC LC";case 2:return"AAC SSR";case 3:return"AAC LTP";default:return"error"}}function g(t){switch(t){case 0:return"96000";case 1:return"88200";case 2:return"64000";case 3:return"48000";case 4:return"44100";case 5:return"32000";case 6:return"24000";case 7:return"22050";case 8:return"16000";case 9:return"12000";case 10:return"11025";case 11:return"8000";case 12:return"7350";case 13:case 14:return"reserved";case 15:return"escape value";default:return"error"}}(function(t){t["mpeg4"]="MPEG-4(0)",t["mpeg2"]="MPEG-2(1)"})(r||(r={}));var m=function(){function t(e,a,r){Object(o["a"])(this,t),this.data=e,this.start=a,this.index=r,this.isActive=!1,this.syncword="",this.mpeg_version="",this.layer=0,this.protection_absent=0,this.profile="",this.sampling_frequency_index=0,this.sampling_frequency="",this.private_bit=0,this.channel_configuration=0,this.original_copy=0,this.home=0,this.copyright_identification_bit=0,this.copyright_identification_start=0,this.length=0,this.adts_buffer_fullness=0,this.number_of_raw_data_blocks_in_frame=0,this.aac_offset=7,this.aac_data_string="",this.crc=0}return Object(c["a"])(t,[{key:"parse",value:function(){if(this.start+7>this.data.length)return this.error="not enough data",this.data.length;var t=this.data.slice(this.start,this.start+7),e=t[0]<<4|t[1]>>4&15;if(4095!==e)return this.error="invalid sync word",this.data.length;this.syncword="0xFFF";var a=t[1]>>3&1;this.mpeg_version="".concat(a,"[").concat(v(a),"]"),this.layer=t[1]>>1&3,this.protection_absent=1&t[1];var r=t[2]>>6&3;if(this.profile="".concat(r,"[").concat(b(r),"]"),this.sampling_frequency_index=t[2]>>2&15,this.sampling_frequency="".concat(this.sampling_frequency_index,"[").concat(g(this.sampling_frequency_index),"Hz]"),this.private_bit=t[2]>>1&1,this.channel_configuration=(1&t[2])<<2|t[3]>>6&3,this.original_copy=t[3]>>5&1,this.home=t[3]>>4&1,this.copyright_identification_bit=t[3]>>3&1,this.copyright_identification_start=t[3]>>2&1,this.length=(3&t[3])<<11|t[4]<<3|t[5]>>5,this.start+this.length>this.data.length)return this.error="aac_frame_length todo",this.length=this.data.length-this.start,this.data.length;if(this.adts_buffer_fullness=(31&t[5])<<6|t[6]>>2&63,this.number_of_raw_data_blocks_in_frame=3&t[6],0==this.protection_absent){if(this.start+9>this.data.length)return this.error="not enough data",this.data.length;this.aac_offset=9,this.crc=this.data[this.start+7]<<8|t[this.start+8]}return this.aac_data_string=this.getData(),this.start+this.length}},{key:"getData",value:function(){for(var t="",e=this.start+this.aac_offset;e<this.start+this.length;e++)t+=this.data[e].toString(16).toUpperCase();return t}}]),t}(),y=function(){function t(){Object(o["a"])(this,t),this.adtsFrames=[],this.data=new Uint8Array}return Object(c["a"])(t,[{key:"parse",value:function(t){this.data=t,this.adtsFrames=[];var e=0,a=this.data.byteLength,r=0;while(e<a){var n=new m(this.data,e,r);r++,e=n.parse(),this.adtsFrames.push(n)}}}]),t}(),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",[a("virtual-list",{ref:"foo",staticStyle:{height:"360px","overflow-y":"auto"},attrs:{"data-key":"index","data-sources":t.adtsParser.adtsFrames,"data-component":t.itemComponent}})],1)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-bottom":"10px"}},[a("span",{staticClass:"offset"},[t._v("offset")]),a("span",[t._v("ID")]),a("span",[t._v("profile")]),a("span",[t._v("sample")]),a("span",[t._v("channel")]),a("span",[t._v("length")])])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:{active:this.appState.currentSelectIndex===t.source.index},staticStyle:{cursor:"pointer"},on:{click:t.onClick}},[a("span",{staticClass:"offset"},[t._v("0x"+t._s(t.source.start.toString(16).padStart(8,"0")))]),a("span",[t._v(t._s(t.source.mpeg_version)+" ")]),a("span",[t._v(t._s(t.source.profile)+" ")]),a("span",[t._v(t._s(t.source.sampling_frequency)+" ")]),a("span",[t._v(t._s(t.source.channel_configuration)+" ")]),a("span",[t._v(t._s(t.source.length)+" ")])])])},x=[],w=function(){function t(){Object(o["a"])(this,t),this._currentSelectIndex=-1,this.highLightStart=0,this.aacDataHighLightStart=0,this.highLightEnd=0}return Object(c["a"])(t,[{key:"currentSelectIndex",get:function(){return this._currentSelectIndex},set:function(t){var e;this._currentSelectIndex=t,null===(e=this.listener)||void 0===e||e.onStatChange()}}],[{key:"getInstance",value:function(){return null==this.stat&&(this.stat=new t),t.stat}}]),t}(),k=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.appState=w.getInstance(),t}return Object(c["a"])(a,[{key:"onClick",value:function(){this.appState.currentSelectIndex=this.source.index}}]),a}(f["c"]);Object(l["a"])([Object(f["b"])()],k.prototype,"source",void 0),k=Object(l["a"])([Object(f["a"])({components:{}})],k);var H=k,L=H,P=(a("f822"),a("2877")),E=Object(P["a"])(L,S,x,!1,null,"2c9f2b75",null),C=E.exports,F=a("89c1"),I=a.n(F),D=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.call(this),t.itemComponent=C,t}return Object(c["a"])(a)}(f["c"]);Object(l["a"])([Object(f["b"])()],D.prototype,"adtsParser",void 0),D=Object(l["a"])([Object(f["a"])({components:{FrameLine:C,VirtualList:I.a}})],D);var $=D,A=$,M=(a("6f47"),Object(P["a"])(A,O,j,!1,null,"65d286da",null)),q=M.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticStyle:{"margin-left":"30px","font-size":"20px"},on:{click:function(e){return t.openFile()}}},[t._v("open file "),a("input",{ref:"in",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){return t.handle(e)}}})])])},U=[],T=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"openFile",value:function(){this.$refs.in.click()}},{key:"handle",value:function(t){var e=this;if(this.$refs.in.files){var a=this.$refs.in.files[0];if(a){var r=new FileReader;r.onload=function(t){var a,r=new Uint8Array(null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.result);e.$emit("onDataReady",r)},r.onerror=function(t){alert(t)},r.readAsArrayBuffer(a)}}}}]),a}(f["c"]);Object(l["a"])([Object(f["b"])()],T.prototype,"msg",void 0),T=Object(l["a"])([f["a"]],T);var G=T,z=G,J=Object(P["a"])(z,R,U,!1,null,"1481c157",null),V=J.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[void 0!==t.frame?a("div",{staticStyle:{"padding-left":"30px"}},[a("h3",[t._v("adts frame info")]),void 0===t.frame.error?a("table",[a("tr",[a("td",[t._v("syncword")]),a("td",[t._v(t._s(t.frame.syncword)+" (12 bits)")])]),a("tr",[a("td",[t._v("mpeg version")]),a("td",[t._v(t._s(t.frame.mpeg_version)+" (1 bit)")])]),a("tr",[a("td",[t._v("layer")]),a("td",[t._v(t._s(t.frame.layer)+" (2 bits)")])]),a("tr",[a("td",[t._v("protection_absent")]),a("td",[t._v(t._s(t.frame.protection_absent)+" (1 bit)")])]),a("tr",[a("td",[t._v("profile")]),a("td",[t._v(t._s(t.frame.profile)+" (2 bits)")])]),a("tr",[a("td",[t._v("sampling_frequency")]),a("td",[t._v(t._s(t.frame.sampling_frequency)+" (4 bits)")])]),a("tr",[a("td",[t._v("private_bit")]),a("td",[t._v(t._s(t.frame.private_bit)+" (1 bit)")])]),a("tr",[a("td",[t._v("channel_configuration")]),a("td",[t._v(t._s(t.frame.channel_configuration)+" (3 bits)")])]),a("tr",[a("td",[t._v("mpeg original_copy")]),a("td",[t._v(t._s(t.frame.original_copy)+" (1 bit)")])]),a("tr",[a("td",[t._v("home")]),a("td",[t._v(t._s(t.frame.home)+" (1 bit)")])]),a("tr",[a("td",[t._v("copyright_identification_bit")]),a("td",[t._v(t._s(t.frame.copyright_identification_bit)+" (1 bit)")])]),a("tr",[a("td",[t._v("copyright_identification_start")]),a("td",[t._v(t._s(t.frame.copyright_identification_start)+" (1 bit) ")])]),a("tr",[a("td",[t._v("frame_length")]),a("td",[t._v(t._s(t.frame.length)+" (13 bits)")])]),a("tr",[a("td",[t._v("adts_buffer_fullness")]),a("td",[t._v(t._s(t.frame.adts_buffer_fullness)+" (11 bits)")])]),a("tr",[a("td",[t._v("number_of_raw_data_blocks_in_frame")]),a("td",[t._v(t._s(t.frame.number_of_raw_data_blocks_in_frame)+" (2 bits)")])]),0===t.frame.protection_absent?a("tr",[a("td",[t._v("crc")]),a("td",[t._v(t._s(t.frame.crc)+" (16 bits)")])]):t._e(),a("tr",[a("td",[t._v("aac data")]),a("td",{staticStyle:{"word-wrap":"break-word","word-break":"break-all","max-width":"500px"}},[t._v(t._s(t.frame.getData()))])])]):t._e(),void 0!==t.frame.error?a("p",{staticStyle:{color:"red"}},[t._v(" error: "+t._s(t.frame.error)+" ")]):t._e()]):t._e()])},K=[],N=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.appState=w.getInstance(),t}return Object(c["a"])(a)}(f["c"]);Object(l["a"])([Object(f["b"])()],N.prototype,"frame",void 0),N=Object(l["a"])([Object(f["a"])({components:{}})],N);var Q=N,W=Q,X=Object(P["a"])(W,B,K,!1,null,"6c1dcaed",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"20px"}},[a("h3",[t._v("hex view")]),a("div",[a("virtual-list",{ref:"sc",staticStyle:{height:"400px","overflow-y":"auto"},attrs:{"data-key":"index","data-sources":this.datas,"data-component":t.itemComponent}})],1)])},tt=[],et=(a("4d90"),function(){function t(e){Object(o["a"])(this,t),this.index=e,this.store=[]}return Object(c["a"])(t,[{key:"offset",get:function(){return(16*this.index).toString(16).padStart(8,"0")}}]),t}()),at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"offset",staticStyle:{display:"inline-block",width:"110px"}},[t._v("0x"+t._s(t.source.offset))]),t._l(t.source.store,(function(e,r){return a("span",{key:r,class:{frameHead:t.shouldHighLightHead(r),frameData:t.shouldHighLightData(r)}},[t._v(" "+t._s(e.toString(16))+" ")])}))],2)},rt=[],nt=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.appState=w.getInstance(),t}return Object(c["a"])(a,[{key:"shouldHighLightHead",value:function(t){var e=16*this.source.index+t;return e<this.appState.aacDataHighLightStart&&e>=this.appState.highLightStart}},{key:"shouldHighLightData",value:function(t){var e=16*this.source.index+t;return e<this.appState.highLightEnd&&e>=this.appState.aacDataHighLightStart}}]),a}(f["c"]);Object(l["a"])([Object(f["b"])()],nt.prototype,"source",void 0),nt=Object(l["a"])([Object(f["a"])({components:{}})],nt);var it=nt,st=it,ct=(a("ccc4"),Object(P["a"])(st,at,rt,!1,null,"bace01de",null)),ot=ct.exports,ut=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.call(this),t.itemComponent=ot,t.datas=[],t}return Object(c["a"])(a,[{key:"update",value:function(t){this.datas=[];var e=0,a=0;while(e<t.length){var r=e+16;r>t.length&&(r=t.length);for(var n=new et(a),i=e;i<r;i++)n.store.push(t[i].toString(16).padStart(2,"0").toUpperCase());this.datas.push(n),e=r,a++}}},{key:"jump",value:function(t){this.$refs.sc.scrollToIndex(t)}}]),a}(f["c"]);ut=Object(l["a"])([Object(f["a"])({components:{HexLine:ot,VirtualList:I.a}})],ut);var ht=ut,lt=ht,ft=Object(P["a"])(lt,Z,tt,!1,null,"7ad3e67f",null),dt=ft.exports,pt=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.call(this),t.adtsParser=new y,t.appState=w.getInstance(),t.appState.listener=Object(_["a"])(t),t}return Object(c["a"])(a,[{key:"onDataReady",value:function(t){this.adtsParser.parse(t),this.$refs.hex.update(t)}},{key:"onStatChange",value:function(){this.appState.highLightStart=this.getHexHighlightStart(),this.appState.highLightEnd=this.getHexHighlightEnd(),this.appState.aacDataHighLightStart=this.getDataHighLightStart(),this.$refs.hex.jump(this.appState.highLightStart/16-1)}},{key:"getHexHighlightStart",value:function(){var t=this.appState.currentSelectIndex;return this.adtsParser.adtsFrames[t].start}},{key:"getHexHighlightEnd",value:function(){var t=this.appState.currentSelectIndex;return this.adtsParser.adtsFrames[t].start+this.adtsParser.adtsFrames[t].length}},{key:"getDataHighLightStart",value:function(){var t=this.appState.currentSelectIndex;return this.adtsParser.adtsFrames[t].start+this.adtsParser.adtsFrames[t].aac_offset}}]),a}(f["c"]);pt=Object(l["a"])([Object(f["a"])({components:{Summary:q,Upload:V,FrameInfo:Y,Hex:dt}})],pt);var _t=pt,vt=_t,bt=Object(P["a"])(vt,d,p,!1,null,"0ab60180",null),gt=bt.exports,mt=function(t){Object(u["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a)}(f["c"]);mt=Object(l["a"])([Object(f["a"])({components:{Main:gt}})],mt);var yt=mt,Ot=yt,jt=(a("034f"),Object(P["a"])(Ot,i,s,!1,null,null,null)),St=jt.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(St)}}).$mount("#app")},e765:function(t,e,a){},f822:function(t,e,a){"use strict";a("e765")}});
//# sourceMappingURL=app.0a3d93ba.js.map