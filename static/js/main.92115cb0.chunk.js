(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";var a=n(188);n.d(t,"interactionReducer",function(){return a.a});var r=n(189);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty})},101:function(e,t,n){"use strict";var a=n(190);n.d(t,"manualBuildReducer",function(){return a.a});var r=n(191);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty});var i=n(195);n.d(t,"setProperty",function(){return i.a})},102:function(e,t,n){"use strict";var a=n(155);n.o(a,"ChannelsList")&&n.d(t,"ChannelsList",function(){return a.ChannelsList}),n.o(a,"FooterView")&&n.d(t,"FooterView",function(){return a.FooterView}),n.o(a,"HeaderView")&&n.d(t,"HeaderView",function(){return a.HeaderView}),n.o(a,"Sider")&&n.d(t,"Sider",function(){return a.Sider});var r=n(192);n.d(t,"ChannelsList",function(){return r.a});var i=n(180);n.d(t,"FooterView",function(){return i.a});var o=n(193);n.d(t,"Sider",function(){return o.a});var s=n(181);n.d(t,"HeaderView",function(){return s.a})},107:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="SET_PROPERTY"},142:function(e,t,n){"use strict";n.d(t,"store",function(){return d});var a=n(67),r=n(202),i=n(97),o=n(98),s=n(99),c=n(100),u=n(101);n.o(i,"dataChosen")&&n.d(t,"dataChosen",function(){return i.dataChosen}),n.o(i,"fileChosen")&&n.d(t,"fileChosen",function(){return i.fileChosen}),n.o(i,"setProperty")&&n.d(t,"setProperty",function(){return i.setProperty}),n.o(o,"dataChosen")&&n.d(t,"dataChosen",function(){return o.dataChosen}),n.o(o,"fileChosen")&&n.d(t,"fileChosen",function(){return o.fileChosen}),n.o(o,"setProperty")&&n.d(t,"setProperty",function(){return o.setProperty}),n.o(s,"dataChosen")&&n.d(t,"dataChosen",function(){return s.dataChosen}),n.o(s,"fileChosen")&&n.d(t,"fileChosen",function(){return s.fileChosen}),n.o(s,"setProperty")&&n.d(t,"setProperty",function(){return s.setProperty}),n.o(c,"dataChosen")&&n.d(t,"dataChosen",function(){return c.dataChosen}),n.o(c,"fileChosen")&&n.d(t,"fileChosen",function(){return c.fileChosen}),n.o(c,"setProperty")&&n.d(t,"setProperty",function(){return c.setProperty}),n.o(u,"dataChosen")&&n.d(t,"dataChosen",function(){return u.dataChosen}),n.o(u,"fileChosen")&&n.d(t,"fileChosen",function(){return u.fileChosen}),n.o(u,"setProperty")&&n.d(t,"setProperty",function(){return u.setProperty});var l=Object(a.c)({csv:i.csvReducer,overview:o.overviewReducer,monetization:s.monetizationReducer,interaction:c.interactionReducer,manualBuild:u.manualBuildReducer}),d=Object(a.d)(l,Object(a.a)(r.a))},155:function(e,t){},18:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var a="TOGGLE_LOAD",r="NEW_FILE",i="CHANGE_DATA_CALENDAR"},180:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(111);var a=n(9),r=(n(81),n(38)),i=n(1),o=n.n(i),s=(n(367),function(e){var t=e.links,n=e.copyright;return o.a.createElement("footer",{className:"globalFooter"},t&&o.a.createElement("div",{className:"links"},t.map(function(e){return o.a.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),n&&o.a.createElement("div",{className:"copyright"},n))}),c=r.a.Footer,u=function(){return o.a.createElement(c,{style:{padding:0}},o.a.createElement(s,{links:[{key:"Download",title:"Download CSV",href:"https://dev.twitch.tv/dashboard",blankTarget:!0},{key:"github",title:o.a.createElement(a.a,{type:"github"}),href:"https://github.com/AlbericoD/twitch-extension-analyze",blankTarget:!0},{key:"Issues",title:"Issues",href:"https://github.com/AlbericoD/twitch-extension-analyze/issues",blankTarget:!0}],copyright:o.a.createElement(i.Fragment,null,"Extension Analyze ",o.a.createElement(a.a,{type:"copyright"})," 2019")}))}},181:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(81);var a=n(38),r=n(1),i=n.n(r),o=(n(375),a.a.Header),s=Object(r.lazy)(function(){return n.e(25).then(n.bind(null,381))}),c=function(){return i.a.createElement(o,{style:{padding:0,width:"100%",zIndex:2},className:"fixedHeader"},i.a.createElement(r.Suspense,{fallback:null},i.a.createElement(s,null)))}},182:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(12),r=n(18),i={fileReader:new FileReader,load:!1,uploadCSV:!1,data:null,name:"Extension Name",initialDateIndex:0,lastDateIndex:0};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:return Object(a.a)({},e,{data:t.payload,name:t.payload[0]["Extension Name"],lastDateIndex:t.payload.length-1,uploadCSV:!0,load:!0});case r.b:var n=t.payload.dataIndex,o=n.initialDateIndex,s=n.lastDateIndex;return Object(a.a)({},e,{initialDateIndex:o,lastDateIndex:s});default:return e}}},183:function(e,t){},184:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(12),r=n(18),i=n(23),o={load:!1,data:{installs:[],bits:[]},list:[],topRow:{activeChannels:{activations:0,installs:0,uninstalls:0},mouseEnters:{total:0,data:[]},renderers:{total:0,data:[]},viewers:{total:0,data:[]}}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:var n=i.c.instance.process(t.payload),s=n.data,c=n.topRow,u=n.list;return Object(a.a)({},e,{data:s,list:u,topRow:c});case r.b:var l=i.c.instance,d=l.process(l.reSize(t.payload.data,t.payload.dataIndex));return Object(a.a)({},e,{data:d.data,topRow:d.topRow,list:d.list});default:return e}}},185:function(e,t){},186:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(12),r=n(18),i=n(23),o={load:!1,data:{composed:[],radar:[],line:[]},topRow:{totalBitsUsed:{bitsUsed:0,bitsPerTransaction:0,bitsTransactions:0},bitsRevenue:{data:[],total:0},bitsUsedPerUser:{data:[],total:0},bitsUsers:{data:[],total:0}}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:var n=i.b.instance.process(t.payload),s=n.data,c=n.topRow;return Object(a.a)({},e,{data:Object(a.a)({},e.data,{composed:s.composed,radar:s.radar,line:s.line}),topRow:c});case r.b:var u=i.b.instance,l=u.process(u.reSize(t.payload.data,t.payload.dataIndex));return Object(a.a)({},e,{topRow:l.topRow,data:Object(a.a)({},e.data,{composed:l.data.composed,radar:l.data.radar,line:l.data.line})});default:return e}}},187:function(e,t){},188:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(12),r=n(18),i=n(23),o={load:!1,data:{composed:[],line:[],radar:[]},topRow:{uniqueRenderers:{totalUniqueRenderes:0,uniqueMinimizers:0,uniqueViewers:0},interactionRate:{total:0,data:[]},minimizationRate:{total:0,data:[]},unminimization:{total:0,data:[]}}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:var n=i.a.instance.process(t.payload),s=n.data,c=n.topRow;return Object(a.a)({},e,{data:Object(a.a)({},e.data,{composed:s.composed,radar:s.radar,line:s.line}),topRow:c});case r.b:var u=i.a.instance,l=u.process(u.reSize(t.payload.data,t.payload.dataIndex));return Object(a.a)({},e,{topRow:l.topRow,data:Object(a.a)({},e.data,{composed:l.data.composed,radar:l.data.radar,line:l.data.line})});default:return e}}},189:function(e,t){},190:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(204),r=n(35),i=n(12),o=n(18),s=n(107),c=n(16),u=n.n(c),l={load:!1,data:[],topRow:[{id:1,name:"",value:0},{id:2,name:"",value:0},{id:3,name:"",value:0},{id:4,name:"",value:0}]};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.c:return Object(i.a)({},e,{load:t.payload});case s.a:var n=t.payload,c=n.position,d=n.property,f=n.csv,p=e.topRow;p[c].name=d,p[c].value=f.map(function(e){return Number(e[d])}).reduce(function(e,t){return e+t},0)||0;var m=f.map(function(t){var n;return n={date:u()(t.Date,"YYYY/MM/DD").format("L")},Object(r.a)(n,e.topRow[0].name,t[e.topRow[0].name]),Object(r.a)(n,e.topRow[1].name,t[e.topRow[1].name]),Object(r.a)(n,e.topRow[2].name,t[e.topRow[2].name]),Object(r.a)(n,e.topRow[3].name,t[e.topRow[3].name]),n}).reverse();return Object(i.a)({},e,{topRow:Object(a.a)(p),data:m});case o.b:var h=t.payload.dataIndex,v=t.payload.data.slice(h.initialDateIndex,h.lastDateIndex).map(function(t){var n;return Object(i.a)({},t,(n={date:u()(t.Date,"YYYY/MM/DD").format("L")},Object(r.a)(n,e.topRow[0].name,t[e.topRow[0].name]),Object(r.a)(n,e.topRow[1].name,t[e.topRow[1].name]),Object(r.a)(n,e.topRow[2].name,t[e.topRow[2].name]),Object(r.a)(n,e.topRow[3].name,t[e.topRow[3].name]),n))}).reverse();return Object(i.a)({},e,{data:v});default:return e}}},191:function(e,t){},192:function(e,t,n){"use strict";n(111);var a=n(9),r=(n(226),n(134)),i=n(1),o=n.n(i),s=function(){return o.a.createElement("svg",{className:"bits-icon__svg",width:"1.5em",height:"1.5em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},o.a.createElement("path",{d:"M15 9.997a1 1 0 0 1 1 1v5.994a1 1 0 0 1-1.003 1.005H3.003A1 1 0 0 1 2 16.99V4.997a.999.999 0 0 1 1.003-1.001h5.994a1 1 0 1 1 0 2H4v10h10v-5a1 1 0 0 1 1-1zm2.704-7.704c.187.187.293.442.293.707v5.001a.999.999 0 0 1-1.707.707l-1.293-1.293-2.293 2.293a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 0-1.415L12.583 5 11.29 3.708A1.002 1.002 0 0 1 11.997 2h5a1 1 0 0 1 .707.293z",fillRule:"evenodd"}))};n.d(t,"a",function(){return u});var c=r.a.Column,u=function(e){var t=e.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{dataSource:t,loading:0==t.length,pagination:{pageSize:8}},o.a.createElement(c,{title:"Name",dataIndex:"username",key:"username",sorter:function(e,t){return e.username.toLocaleLowerCase()<t.username.toLocaleLowerCase()?-1:e.username.toLocaleLowerCase()>t.username.toLocaleLowerCase()?1:0}}),o.a.createElement(c,{title:"Game",dataIndex:"game",key:"game",sorter:function(e,t){return e.game.toLocaleLowerCase()<t.game.toLocaleLowerCase()?-1:e.game.toLocaleLowerCase()>t.game.toLocaleLowerCase()?1:0}}),o.a.createElement(c,{title:"Title",dataIndex:"title",key:"title"}),o.a.createElement(c,{title:"View Count",dataIndex:"view_count",key:"view_count",defaultSortOrder:"descend",sorter:function(e,t){return parseInt(e.view_count)-parseInt(t.view_count)}}),o.a.createElement(c,{title:"Live",key:"action",render:function(e){return o.a.createElement("span",null,o.a.createElement("a",{href:"https://www.twitch.tv/".concat(e.username),target:"__blank"},o.a.createElement(a.a,{component:s})))}})))}},193:function(e,t,n){"use strict";n(81);var a=n(38),r=(n(133),n(29)),i=(n(111),n(9)),o=n(1),s=n.n(o),c=n(47),u=n(106),l=(n(370),[{key:"/",icon:"upload",name:"Upload CSV",disable:!1},{key:"overview",icon:"dashboard",name:"Overview",disable:!1},{key:"monetization",icon:"line-chart",name:"Monetization Graph",disable:!1},{key:"iteraction",icon:"area-chart",name:"Interaction Graph",disable:!1},{key:"build",icon:"build",name:"Manual Build Graph ",disable:!1},{key:"activated",icon:"table",name:"Live Activated Channels",disable:!1}]),d=Object(c.f)(function(e){var t=e.location;return s.a.createElement(r.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["upload-csv"],selectedKeys:["/"===t.pathname?t.pathname:t.pathname.replace("/","")]},l.map(function(e){return s.a.createElement(r.a.Item,{key:e.key,disabled:e.disable},s.a.createElement(i.a,{type:e.icon}),s.a.createElement("span",null,e.name),s.a.createElement(u.b,{to:e.key}))}))}),f=function(e){var t=e.collapsed,n=e.onCollapse;return s.a.createElement(a.a.Sider,{collapsible:!0,collapsed:t,onCollapse:n,breakpoint:"lg",width:256,className:"sider",theme:"dark"},s.a.createElement("div",{className:"logo",id:"logo"},s.a.createElement("a",{href:"https://github.com/AlbericoD/twitch-extension-analyze",target:"__blank"},s.a.createElement(i.a,{type:"github",style:{color:"#fff",fontSize:"1.5em",margin:"5px 6px"}}))),s.a.createElement(d,null))};n(380),n(203);n.d(t,"a",function(){return f})},194:function(e,t,n){"use strict";var a=n(18);function r(e){return{type:a.c,payload:e}}var i=n(23);n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var o=function(e){return function(t,n){var o;t((o=!0,function(e){e(r(o))}));var s=n().csv.fileReader;s.onloadend=function(){if("string"===typeof s.result){var e=s.result;t((n=Object(i.d)(e),{type:a.a,payload:n})),setTimeout(function(){t(r(!1))},4e3)}var n},s.readAsText(e)}},s=function(e){return function(t,n){var r=n().csv.data,i={initialDateIndex:0,lastDateIndex:0};null!==r&&2===e.length&&(e.forEach(function(e,t){if(void 0!==e){var n=r.findIndex(function(t){return t.Date===e.format("YYYY-MM-DD")});-1!==n&&1===t&&(i.initialDateIndex=n),-1!==n&&0===t&&(i.lastDateIndex=n)}}),t(function(e,t){return{type:a.b,payload:{dataIndex:e,data:t}}}(i,r)))}}},195:function(e,t,n){"use strict";var a=n(12),r=n(107);n.d(t,"a",function(){return i});var i=function(e){return function(t,n){var i=n().csv,o=i.data,s=i.initialDateIndex,c=i.lastDateIndex;t(function(e){return{type:r.a,payload:e}}(Object(a.a)({},e,{csv:null===o?[]:o.slice(s,c)})))}}},228:function(e,t,n){e.exports=n(379)},23:function(e,t,n){"use strict";var a=n(16),r=n.n(a),i=function(e,t){return[r()(e,"YYYY/MM/DD"),r()(t,"YYYY/MM/DD")]},o=function(e){var t={"Last Day":i(e[0].Date,e[0].Date)};return[3,7,15,30,45,60,90,120,180,240].forEach(function(n){(function(e,t){return e.length>=0&&e.length>=t})(e,n)&&(t["Last ".concat(n," Days")]=i(e[n-1].Date,e[0].Date))}),t["First Extension Release - Last Date CSV"]=i(e[e.length-1].Date,e[0].Date),t},s=function(e){for(var t=e.split("\n"),n=t[0].split(","),a=[],r=1;r<t.length-1;r++){for(var i={},o=t[r].split(","),s=0;s<n.length;s++)void 0!==o[s]&&""!==o[s]&&(i[n[s]]=o[s]);a.push(i)}return a},c=n(1),u=n.n(c);function l(e,t){return Object(c.useEffect)(function(){var t=e();return function(){t.then(function(e){return e&&e()})}},t)}var d=n(64),f=n(65),p=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"reSize",value:function(e,t){return null!==e&&0===t.lastDateIndex&&0===t.initialDateIndex?[e[0]]:null!==e?e.slice(t.initialDateIndex,t.lastDateIndex):[]}},{key:"process",value:function(e){return{data:{installs:this._calcGraphsInstalls(e),bits:this._calcGraphsBits(e)},list:this._makeList(e),topRow:{activeChannels:this._calcActiveChannels(e),mouseEnters:{total:this._sum(e,"Unique Mouseenters"),data:this._makeData(e,"Unique Mouseenters")},renderers:{total:this._sum(e,"Unique Interactors"),data:this._makeData(e,"Unique Interactors")},viewers:{total:this._sum(e,"Unique Viewers"),data:this._makeData(e,"Unique Viewers")}}}}},{key:"_makeData",value:function(e,t){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),value:parseInt(e[t])}}).reverse()}},{key:"_makeList",value:function(e){return e.map(function(e,t){return{key:t,date:r()(e.Date,"YYYY/MM/DD").format("L"),"ext-details":parseInt(e["Extension Details Page Visits"]),"ext-unique-details":parseInt(e["Unique Extension Details Page Visits"]),"bits-revenue":parseFloat(e["Bits Revenue USD"]),"bits-per-transaction":parseFloat(e["Bits Per Transaction"])}})}},{key:"_sum",value:function(e,t){return e.map(function(e){return parseInt(e[t])}).reduce(function(e,t){return e+t},0)}},{key:"_calcActiveChannels",value:function(e){return{activations:this._sum(e,"Unique Active Channels"),installs:this._sum(e,"Installs"),uninstalls:this._sum(e,"Uninstalls")}}},{key:"_calcGraphsInstalls",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),activations:parseInt(e.Activations),installs:parseInt(e.Installs),uninstalls:parseInt(e.Uninstalls),uniquePageVisits:parseInt(e["Unique Extension Details Page Visits"])}}).reverse()}},{key:"_calcGraphsBits",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),bitsUsed:parseInt(e["Bits Used"]),bitsTransactions:parseInt(e["Bits Transactions"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"])}}).reverse()}}],[{key:"instance",get:function(){return e._instance}}]),e}();p._instance=new p;var m=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"reSize",value:function(e,t){return null!==e&&0===t.lastDateIndex&&0===t.initialDateIndex?[e[0]]:null!==e?e.slice(t.initialDateIndex,t.lastDateIndex):[]}},{key:"process",value:function(e){return{data:{composed:this._calcGraphsComposed(e),radar:this._calcGraphsRadar(e),line:this._calcGraphsLine(e)},topRow:{totalBitsUsed:this._calcTotalBitsused(e),bitsRevenue:this._makeTopRow(e,"Bits Revenue USD",!1),bitsUsedPerUser:this._makeTopRow(e,"Bits Used Per User",!1),bitsUsers:this._makeTopRow(e,"Unique Bits Users",!1)}}}},{key:"_makeTopRow",value:function(e,t,n){return{total:this._sum(e,t,n),data:this._makeData(e,t)}}},{key:"_makeData",value:function(e,t){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),value:parseInt(e[t])}}).reverse()}},{key:"_sum",value:function(e,t,n){return e.map(function(e){return n?parseInt(e[t])||0:parseFloat(e[t])||0}).reduce(function(e,t){return e+t},0)}},{key:"_calcTotalBitsused",value:function(e){return{bitsUsed:this._sum(e,"Bits Used",!1),bitsPerTransaction:this._sum(e,"Bits Per Transaction",!1),bitsTransactions:this._sum(e,"Bits Transactions",!0)}}},{key:"_calcGraphsComposed",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),uniqueInteractors:parseInt(e["Unique Interactors"]),bitsTransactions:parseInt(e["Bits Transactions"]),bitsUsed:parseFloat(e["Bits Used"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"])}}).reverse()}},{key:"_calcGraphsRadar",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),bitsUsed:parseFloat(e["Bits Used"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"]),uniqueMinimizations:parseInt(e["Unique Minimizers"])}}).reverse()}},{key:"_calcGraphsLine",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),uniqueMinimizations:parseInt(e["Unique Minimizers"]),mouseEnterPerView:parseInt(e["Mouseenters Per Viewer"]),bitsUsed:parseFloat(e["Bits Used"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"]),bitsTransactions:parseInt(e["Bits Transactions"])}}).reverse()}}],[{key:"instance",get:function(){return e._instance}}]),e}();m._instance=new m;var h=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"reSize",value:function(e,t){return null!==e&&0===t.lastDateIndex&&0===t.initialDateIndex?[e[0]]:null!==e?e.slice(t.initialDateIndex,t.lastDateIndex):[]}},{key:"process",value:function(e){return{data:{composed:this._calcGraphsComposed(e),radar:this._calcGraphsRadar(e),line:this._calcGraphsLine(e)},topRow:{uniqueRenderers:this._calcUniqueRenderers(e),interactionRate:this._makeTopRow(e,"Interaction Rate",!1),minimizationRate:this._makeTopRow(e,"Minimization Rate",!1),unminimization:this._makeTopRow(e,"Unminimization Rate",!1)}}}},{key:"_makeTopRow",value:function(e,t,n){return{total:this._sum(e,t,n),data:this._makeData(e,t)}}},{key:"_makeData",value:function(e,t){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),value:parseInt(e[t])}}).reverse()}},{key:"_sum",value:function(e,t,n){return e.map(function(e){return n?parseInt(e[t])||0:parseFloat(e[t])||0}).reduce(function(e,t){return e+t},0)}},{key:"_calcUniqueRenderers",value:function(e){return{totalUniqueRenderes:this._sum(e,"Unique Renderers",!0),uniqueViewers:this._sum(e,"Unique Viewers",!0),uniqueMinimizers:this._sum(e,"Unique Minimizers",!0)}}},{key:"_calcGraphsComposed",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),uniqueInteractors:parseInt(e["Unique Interactors"]),interactionRate:parseFloat(e["Interaction Rate"]),minimizationRate:parseFloat(e["Minimization Rate"]),unminimizationRate:parseFloat(e["Unminimization Rate"])}}).reverse()}},{key:"_calcGraphsRadar",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicks:parseInt(e.Clicks),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),mouseEnters:parseInt(e.Mouseenters),mouseentersPerViewer:parseInt(e["Mouseenters Per Viewer"])}}).reverse()}},{key:"_calcGraphsLine",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),mouseEntersPerView:parseInt(e["Mouseenters Per Viewer"]),uniqueInteractors:parseInt(e["Unique Interactors"]),clicks:parseInt(e.Clicks),mouseEnters:parseInt(e.Mouseenters),minimizations:parseInt(e.Minimizations)}}).reverse()}}],[{key:"instance",get:function(){return e._instance}}]),e}();h._instance=new h;var v=n(12),b=n(108);b.a.initialize("UA-137577287-1");var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){return Object(c.useEffect)(function(){var e;e=n.location.pathname,b.a.set(Object(v.a)({page:e},t)),b.a.pageview(e)},[n.location.pathname]),u.a.createElement(e,n)}};n.d(t,"e",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return h}),n.d(t,"g",function(){return y})},367:function(e,t,n){},370:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),o=n.n(i),s=n(139),c=n(80),u=n(106),l=n(47),d=n(142),f=n(23),p=(n(378),r.a.lazy(function(){return n.e(26).then(n.bind(null,683))})),m=r.a.lazy(function(){return Promise.all([n.e(1),n.e(21)]).then(n.bind(null,684))}),h=r.a.lazy(function(){return Promise.all([n.e(1),n.e(30)]).then(n.bind(null,685))}),v=r.a.lazy(function(){return Promise.all([n.e(1),n.e(22)]).then(n.bind(null,689))}),b=r.a.lazy(function(){return Promise.all([n.e(1),n.e(28)]).then(n.bind(null,686))}),y=r.a.lazy(function(){return Promise.all([n.e(1),n.e(29)]).then(n.bind(null,687))}),w=function(){return r.a.createElement(s.a,{store:d.store},r.a.createElement(u.a,{basename:"/"},r.a.createElement(c.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(c.c,null)},r.a.createElement(c.b,null,r.a.createElement(l.b,{exact:!0,path:"/",component:Object(f.g)(p)}),r.a.createElement(l.b,{path:"/overview",component:Object(f.g)(m)}),r.a.createElement(l.b,{path:"/monetization",component:Object(f.g)(h)}),r.a.createElement(l.b,{path:"/iteraction",component:Object(f.g)(b)}),r.a.createElement(l.b,{path:"/activated",component:Object(f.g)(v)}),r.a.createElement(l.b,{path:"/build",component:Object(f.g)(y)}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,n){"use strict";var a=n(154),r=(n(81),n(38)),i=n(1),o=n.n(i),s=n(102),c=(n(376),r.a.Content),u=function(e){var t=e.children,n=Object(i.useState)(!1),u=Object(a.a)(n,2),l=u[0],d=u[1];return Object(i.useEffect)(function(){d(!0)},[]),o.a.createElement(r.a,null,o.a.createElement(s.Sider,{collapsed:l,onCollapse:function(){return d(!l)},loadedCsv:!0}),o.a.createElement(r.a,{style:{minHeight:"100vh"}},o.a.createElement(s.HeaderView,null),o.a.createElement(c,{className:"content"},t),o.a.createElement(s.FooterView,null)))},l=(n(377),function(e){var t=e.children;return o.a.createElement("div",{className:"main"},t)}),d=(n(143),n(92)),f=function(){return o.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},o.a.createElement(d.a,{size:"large"}))};n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return f})},97:function(e,t,n){"use strict";var a=n(194);n.d(t,"dataChosen",function(){return a.a}),n.d(t,"fileChosen",function(){return a.b});var r=n(182);n.d(t,"csvReducer",function(){return r.a});var i=n(183);n.o(i,"setProperty")&&n.d(t,"setProperty",function(){return i.setProperty})},98:function(e,t,n){"use strict";var a=n(184);n.d(t,"overviewReducer",function(){return a.a});var r=n(185);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty})},99:function(e,t,n){"use strict";var a=n(186);n.d(t,"monetizationReducer",function(){return a.a});var r=n(187);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty})}},[[228,11,12]]]);
//# sourceMappingURL=main.92115cb0.chunk.js.map