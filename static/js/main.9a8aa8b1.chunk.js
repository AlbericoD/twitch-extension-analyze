(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="SET_PROPERTY"},130:function(e,t,n){"use strict";n.d(t,"store",function(){return d});var a=n(60),r=n(196),i=n(91),o=n(92),s=n(93),u=n(94),c=n(95);n.o(i,"dataChosen")&&n.d(t,"dataChosen",function(){return i.dataChosen}),n.o(i,"fileChosen")&&n.d(t,"fileChosen",function(){return i.fileChosen}),n.o(i,"setProperty")&&n.d(t,"setProperty",function(){return i.setProperty}),n.o(o,"dataChosen")&&n.d(t,"dataChosen",function(){return o.dataChosen}),n.o(o,"fileChosen")&&n.d(t,"fileChosen",function(){return o.fileChosen}),n.o(o,"setProperty")&&n.d(t,"setProperty",function(){return o.setProperty}),n.o(s,"dataChosen")&&n.d(t,"dataChosen",function(){return s.dataChosen}),n.o(s,"fileChosen")&&n.d(t,"fileChosen",function(){return s.fileChosen}),n.o(s,"setProperty")&&n.d(t,"setProperty",function(){return s.setProperty}),n.o(u,"dataChosen")&&n.d(t,"dataChosen",function(){return u.dataChosen}),n.o(u,"fileChosen")&&n.d(t,"fileChosen",function(){return u.fileChosen}),n.o(u,"setProperty")&&n.d(t,"setProperty",function(){return u.setProperty}),n.o(c,"dataChosen")&&n.d(t,"dataChosen",function(){return c.dataChosen}),n.o(c,"fileChosen")&&n.d(t,"fileChosen",function(){return c.fileChosen}),n.o(c,"setProperty")&&n.d(t,"setProperty",function(){return c.setProperty});var l=Object(a.c)({csv:i.csvReducer,overview:o.overviewReducer,monetization:s.monetizationReducer,interaction:u.interactionReducer,manualBuild:c.manualBuildReducer}),d=Object(a.d)(l,Object(a.a)(r.a))},144:function(e,t){},16:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var a="TOGGLE_LOAD",r="NEW_FILE",i="CHANGE_DATA_CALENDAR"},171:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(103);var a=n(9),r=(n(77),n(36)),i=n(1),o=n.n(i),s=(n(367),function(e){var t=e.links,n=e.copyright;return o.a.createElement("footer",{className:"globalFooter"},t&&o.a.createElement("div",{className:"links"},t.map(function(e){return o.a.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),n&&o.a.createElement("div",{className:"copyright"},n))}),u=r.a.Footer,c=function(){return o.a.createElement(u,{style:{padding:0}},o.a.createElement(s,{links:[{key:"Download",title:"Download CSV",href:"https://dev.twitch.tv/dashboard",blankTarget:!0},{key:"github",title:o.a.createElement(a.a,{type:"github"}),href:"https://github.com/AlbericoD/twitch-extension-analyze",blankTarget:!0},{key:"Issues",title:"Issues",href:"https://github.com/AlbericoD/twitch-extension-analyze/issues",blankTarget:!0}],copyright:o.a.createElement(i.Fragment,null,"Extension Analyze ",o.a.createElement(a.a,{type:"copyright"})," 2019")}))}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(77);var a=n(36),r=n(1),i=n.n(r),o=(n(376),a.a.Header),s=Object(r.lazy)(function(){return n.e(25).then(n.bind(null,382))}),u=function(){return i.a.createElement(o,{style:{padding:0,width:"100%",zIndex:2},className:"fixedHeader"},i.a.createElement(r.Suspense,{fallback:null},i.a.createElement(s,null)))}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(14),r=n(16),i={fileReader:new FileReader,load:!1,uploadCSV:!1,data:null,name:"Extension Name",initialDateIndex:0,lastDateIndex:0};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:return Object(a.a)({},e,{data:t.payload,name:t.payload[0]["Extension Name"],lastDateIndex:t.payload.length-1,uploadCSV:!0,load:!0});case r.b:var n=t.payload.dataIndex,o=n.initialDateIndex,s=n.lastDateIndex;return Object(a.a)({},e,{initialDateIndex:o,lastDateIndex:s});default:return e}}},174:function(e,t){},175:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(14),r=n(16),i=n(25),o={load:!1,data:{installs:[],bits:[]},list:[],topRow:{activeChannels:{activations:0,installs:0,uninstalls:0},mouseEnters:{total:0,data:[]},renderers:{total:0,data:[]},viewers:{total:0,data:[]}}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:var n=i.c.instance.process(t.payload),s=n.data,u=n.topRow,c=n.list;return Object(a.a)({},e,{data:s,list:c,topRow:u});case r.b:var l=i.c.instance,d=l.process(l.reSize(t.payload.data,t.payload.dataIndex));return Object(a.a)({},e,{data:d.data,topRow:d.topRow,list:d.list});default:return e}}},176:function(e,t){},177:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(14),r=n(16),i=n(25),o={load:!1,data:{composed:[],radar:[],line:[]},topRow:{totalBitsUsed:{bitsUsed:0,bitsPerTransaction:0,bitsTransactions:0},bitsRevenue:{data:[],total:0},bitsUsedPerUser:{data:[],total:0},bitsUsers:{data:[],total:0}}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:var n=i.b.instance.process(t.payload),s=n.data,u=n.topRow;return Object(a.a)({},e,{data:Object(a.a)({},e.data,{composed:s.composed,radar:s.radar,line:s.line}),topRow:u});case r.b:var c=i.b.instance,l=c.process(c.reSize(t.payload.data,t.payload.dataIndex));return Object(a.a)({},e,{topRow:l.topRow,data:Object(a.a)({},e.data,{composed:l.data.composed,radar:l.data.radar,line:l.data.line})});default:return e}}},178:function(e,t){},179:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(14),r=n(16),i=n(25),o={load:!1,data:{composed:[],line:[],radar:[]},topRow:{uniqueRenderers:{totalUniqueRenderes:0,uniqueMinimizers:0,uniqueViewers:0},interactionRate:{total:0,data:[]},minimizationRate:{total:0,data:[]},unminimization:{total:0,data:[]}}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.c:return Object(a.a)({},e,{load:t.payload});case r.a:var n=i.a.instance.process(t.payload),s=n.data,u=n.topRow;return Object(a.a)({},e,{data:Object(a.a)({},e.data,{composed:s.composed,radar:s.radar,line:s.line}),topRow:u});case r.b:var c=i.a.instance,l=c.process(c.reSize(t.payload.data,t.payload.dataIndex));return Object(a.a)({},e,{topRow:l.topRow,data:Object(a.a)({},e.data,{composed:l.data.composed,radar:l.data.radar,line:l.data.line})});default:return e}}},180:function(e,t){},181:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(198),r=n(30),i=n(14),o=n(16),s=n(101),u=n(10),c=n.n(u),l={load:!1,data:[],topRow:[{id:1,name:"",value:0},{id:2,name:"",value:0},{id:3,name:"",value:0},{id:4,name:"",value:0}]};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.c:return Object(i.a)({},e,{load:t.payload});case s.a:var n=t.payload,u=n.position,d=n.property,f=n.csv,p=e.topRow;p[u].name=d,p[u].value=f.map(function(e){return Number(e[d])}).reduce(function(e,t){return e+t},0)||0;var m=f.map(function(t){var n;return n={date:c()(t.Date,"YYYY/MM/DD").format("L")},Object(r.a)(n,e.topRow[0].name,t[e.topRow[0].name]),Object(r.a)(n,e.topRow[1].name,t[e.topRow[1].name]),Object(r.a)(n,e.topRow[2].name,t[e.topRow[2].name]),Object(r.a)(n,e.topRow[3].name,t[e.topRow[3].name]),n}).reverse();return Object(i.a)({},e,{topRow:Object(a.a)(p),data:m});case o.b:var h=t.payload.dataIndex,v=t.payload.data.slice(h.initialDateIndex,h.lastDateIndex).map(function(t){var n;return Object(i.a)({},t,(n={date:c()(t.Date,"YYYY/MM/DD").format("L")},Object(r.a)(n,e.topRow[0].name,t[e.topRow[0].name]),Object(r.a)(n,e.topRow[1].name,t[e.topRow[1].name]),Object(r.a)(n,e.topRow[2].name,t[e.topRow[2].name]),Object(r.a)(n,e.topRow[3].name,t[e.topRow[3].name]),n))}).reverse();return Object(i.a)({},e,{data:v});default:return e}}},182:function(e,t){},183:function(e,t,n){"use strict";n(103);var a=n(9),r=(n(220),n(124)),i=n(1),o=n.n(i),s=function(){return o.a.createElement("svg",{className:"bits-icon__svg",width:"1.5em",height:"1.5em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},o.a.createElement("path",{d:"M15 9.997a1 1 0 0 1 1 1v5.994a1 1 0 0 1-1.003 1.005H3.003A1 1 0 0 1 2 16.99V4.997a.999.999 0 0 1 1.003-1.001h5.994a1 1 0 1 1 0 2H4v10h10v-5a1 1 0 0 1 1-1zm2.704-7.704c.187.187.293.442.293.707v5.001a.999.999 0 0 1-1.707.707l-1.293-1.293-2.293 2.293a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 0-1.415L12.583 5 11.29 3.708A1.002 1.002 0 0 1 11.997 2h5a1 1 0 0 1 .707.293z",fillRule:"evenodd"}))};n.d(t,"a",function(){return c});var u=r.a.Column,c=function(e){var t=e.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{dataSource:t,loading:0==t.length,pagination:{pageSize:8}},o.a.createElement(u,{title:"Name",dataIndex:"username",key:"username",sorter:function(e,t){return e.username.toLocaleLowerCase()<t.username.toLocaleLowerCase()?-1:e.username.toLocaleLowerCase()>t.username.toLocaleLowerCase()?1:0}}),o.a.createElement(u,{title:"Game",dataIndex:"game",key:"game",sorter:function(e,t){return e.game.toLocaleLowerCase()<t.game.toLocaleLowerCase()?-1:e.game.toLocaleLowerCase()>t.game.toLocaleLowerCase()?1:0}}),o.a.createElement(u,{title:"Title",dataIndex:"title",key:"title"}),o.a.createElement(u,{title:"View Count",dataIndex:"view_count",key:"view_count",defaultSortOrder:"descend",sorter:function(e,t){return parseInt(e.view_count)-parseInt(t.view_count)}}),o.a.createElement(u,{title:"Live",key:"action",render:function(e){return o.a.createElement("span",null,o.a.createElement("a",{href:"https://www.twitch.tv/".concat(e.username),target:"__blank"},o.a.createElement(a.a,{component:s})))}})))}},184:function(e,t,n){"use strict";n(77);var a=n(36),r=(n(187),n(37)),i=(n(103),n(9)),o=n(1),s=n.n(o),u=n(50),c=n(100),l=(n(370),[{key:"/",icon:"upload",name:"Upload CSV",disable:!1},{key:"overview",icon:"dashboard",name:"Overview",disable:!1},{key:"monetization",icon:"line-chart",name:"Monetization Graph",disable:!1},{key:"iteraction",icon:"area-chart",name:"Iteration Graph",disable:!1},{key:"build",icon:"build",name:"Manual Build Graph ",disable:!1},{key:"activated",icon:"table",name:"Live Activated Channels",disable:!1}]),d=Object(u.e)(function(e){var t=e.location;return s.a.createElement(r.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["upload-csv"],selectedKeys:["/"===t.pathname?t.pathname:t.pathname.replace("/","")]},l.map(function(e){return s.a.createElement(r.a.Item,{key:e.key,disabled:e.disable},s.a.createElement(i.a,{type:e.icon}),s.a.createElement("span",null,e.name),s.a.createElement(c.b,{to:e.key}))}))}),f=function(e){var t=e.collapsed,n=e.onCollapse;return s.a.createElement(a.a.Sider,{collapsible:!0,collapsed:t,onCollapse:n,breakpoint:"lg",width:256,className:"sider",theme:"dark"},s.a.createElement("div",{className:"logo",id:"logo"},s.a.createElement("a",{href:"https://github.com/AlbericoD/twitch-extension-analyze",target:"__blank"},s.a.createElement(i.a,{type:"github",style:{color:"#fff",fontSize:"1.5em",margin:"5px 6px"}}))),s.a.createElement(d,null))};n(380),n(197);n.d(t,"a",function(){return f})},185:function(e,t,n){"use strict";var a=n(14),r=n(101);n.d(t,"a",function(){return i});var i=function(e){return function(t,n){var i=n().csv,o=i.data,s=i.initialDateIndex,u=i.lastDateIndex;t(function(e){return{type:r.a,payload:e}}(Object(a.a)({},e,{csv:null===o?[]:o.slice(s,u)})))}}},186:function(e,t,n){"use strict";var a=n(16);function r(e){return{type:a.c,payload:e}}var i=n(25);n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var o=function(e){return function(t,n){var o;t((o=!0,function(e){e(r(o))}));var s=n().csv.fileReader;s.onloadend=function(){if("string"===typeof s.result){var e=s.result;t((n=Object(i.d)(e),{type:a.a,payload:n})),setTimeout(function(){t(r(!1))},4e3)}var n},s.readAsText(e)}},s=function(e){return function(t,n){var r=n().csv.data,i={initialDateIndex:0,lastDateIndex:0};null!==r&&2===e.length&&(e.forEach(function(e,t){if(void 0!==e){var n=r.findIndex(function(t){return t.Date===e.format("YYYY-MM-DD")});-1!==n&&1===t&&(i.initialDateIndex=n),-1!==n&&0===t&&(i.lastDateIndex=n)}}),t(function(e,t){return{type:a.b,payload:{dataIndex:e,data:t}}}(i,r)))}}},222:function(e,t,n){e.exports=n(381)},25:function(e,t,n){"use strict";var a=n(10),r=n.n(a),i="YYYY/MM/DD",o=function(e){return e.length>=0&&e.length<=7?{"First Extension Release - Last Date CSV":[r()(e[e.length-1].Date,i),r()(e[0].Date,i)],"Last Day":[r()(e[0].Date,i),r()(e[0].Date,i)],"Last 7 Days":[r()(e[7].Date,i),r()(e[0].Date,i)]}:e.length>=0&&e.length>=30?{"First Extension Release - Last Date CSV":[r()(e[e.length-1].Date,i),r()(e[0].Date,i)],"Last Day":[r()(e[0].Date,i),r()(e[0].Date,i)],"Last 7 Days":[r()(e[7].Date,i),r()(e[0].Date,i)],"Last 30 Days":[r()(e[30].Date,i),r()(e[0].Date,i)]}:{"First Extension Release - Last Date CSV":[r()(e[e.length-1].Date,i),r()(e[0].Date,i)],"Last Day":[r()(e[0].Date,i),r()(e[0].Date,i)]}},s=function(e){for(var t=e.split("\n"),n=t[0].split(","),a=[],r=1;r<t.length-1;r++){for(var i={},o=t[r].split(","),s=0;s<n.length;s++)void 0!==o[s]&&""!==o[s]&&(i[n[s]]=o[s]);a.push(i)}return a},u=n(1);function c(e,t){return Object(u.useEffect)(function(){var t=e();return function(){t.then(function(e){return e&&e()})}},t)}var l=n(58),d=n(59),f=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"reSize",value:function(e,t){return null!==e&&0===t.lastDateIndex&&0===t.initialDateIndex?[e[0]]:null!==e?e.slice(t.initialDateIndex,t.lastDateIndex):[]}},{key:"process",value:function(e){return{data:{installs:this._calcGraphsInstalls(e),bits:this._calcGraphsBits(e)},list:this._makeList(e),topRow:{activeChannels:this._calcActiveChannels(e),mouseEnters:{total:this._sum(e,"Unique Mouseenters"),data:this._makeData(e,"Unique Mouseenters")},renderers:{total:this._sum(e,"Unique Interactors"),data:this._makeData(e,"Unique Interactors")},viewers:{total:this._sum(e,"Unique Viewers"),data:this._makeData(e,"Unique Viewers")}}}}},{key:"_makeData",value:function(e,t){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),value:parseInt(e[t])}}).reverse()}},{key:"_makeList",value:function(e){return e.map(function(e,t){return{key:t,date:r()(e.Date,"YYYY/MM/DD").format("L"),"ext-details":parseInt(e["Extension Details Page Visits"]),"ext-unique-details":parseInt(e["Unique Extension Details Page Visits"]),"bits-revenue":parseFloat(e["Bits Revenue USD"]),"bits-per-transaction":parseFloat(e["Bits Per Transaction"])}})}},{key:"_sum",value:function(e,t){return e.map(function(e){return parseInt(e[t])}).reduce(function(e,t){return e+t},0)}},{key:"_calcActiveChannels",value:function(e){return{activations:this._sum(e,"Unique Active Channels"),installs:this._sum(e,"Installs"),uninstalls:this._sum(e,"Uninstalls")}}},{key:"_calcGraphsInstalls",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),activations:parseInt(e.Activations),installs:parseInt(e.Installs),uninstalls:parseInt(e.Uninstalls),uniquePageVisits:parseInt(e["Unique Extension Details Page Visits"])}}).reverse()}},{key:"_calcGraphsBits",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),bitsUsed:parseInt(e["Bits Used"]),bitsTransactions:parseInt(e["Bits Transactions"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"])}}).reverse()}}],[{key:"instance",get:function(){return e._instance}}]),e}();f._instance=new f;var p=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"reSize",value:function(e,t){return null!==e&&0===t.lastDateIndex&&0===t.initialDateIndex?[e[0]]:null!==e?e.slice(t.initialDateIndex,t.lastDateIndex):[]}},{key:"process",value:function(e){return{data:{composed:this._calcGraphsComposed(e),radar:this._calcGraphsRadar(e),line:this._calcGraphsLine(e)},topRow:{totalBitsUsed:this._calcTotalBitsused(e),bitsRevenue:this._makeTopRow(e,"Bits Revenue USD",!1),bitsUsedPerUser:this._makeTopRow(e,"Bits Used Per User",!1),bitsUsers:this._makeTopRow(e,"Unique Bits Users",!1)}}}},{key:"_makeTopRow",value:function(e,t,n){return{total:this._sum(e,t,n),data:this._makeData(e,t)}}},{key:"_makeData",value:function(e,t){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),value:parseInt(e[t])}}).reverse()}},{key:"_sum",value:function(e,t,n){return e.map(function(e){return n?parseInt(e[t])||0:parseFloat(e[t])||0}).reduce(function(e,t){return e+t},0)}},{key:"_calcTotalBitsused",value:function(e){return{bitsUsed:this._sum(e,"Bits Used",!1),bitsPerTransaction:this._sum(e,"Bits Per Transaction",!1),bitsTransactions:this._sum(e,"Bits Transactions",!0)}}},{key:"_calcGraphsComposed",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),uniqueInteractors:parseInt(e["Unique Interactors"]),bitsTransactions:parseInt(e["Bits Transactions"]),bitsUsed:parseFloat(e["Bits Used"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"])}}).reverse()}},{key:"_calcGraphsRadar",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),bitsUsed:parseFloat(e["Bits Used"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"]),uniqueMinimizations:parseInt(e["Unique Minimizers"])}}).reverse()}},{key:"_calcGraphsLine",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),uniqueMinimizations:parseInt(e["Unique Minimizers"]),mouseEnterPerView:parseInt(e["Mouseenters Per Viewer"]),bitsUsed:parseFloat(e["Bits Used"]),bitsUsedPerUser:parseFloat(e["Bits Used Per User"]),bitsTransactions:parseInt(e["Bits Transactions"])}}).reverse()}}],[{key:"instance",get:function(){return e._instance}}]),e}();p._instance=new p;var m=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"reSize",value:function(e,t){return null!==e&&0===t.lastDateIndex&&0===t.initialDateIndex?[e[0]]:null!==e?e.slice(t.initialDateIndex,t.lastDateIndex):[]}},{key:"process",value:function(e){return{data:{composed:this._calcGraphsComposed(e),radar:this._calcGraphsRadar(e),line:this._calcGraphsLine(e)},topRow:{uniqueRenderers:this._calcUniqueRenderers(e),interactionRate:this._makeTopRow(e,"Interaction Rate",!1),minimizationRate:this._makeTopRow(e,"Minimization Rate",!1),unminimization:this._makeTopRow(e,"Unminimization Rate",!1)}}}},{key:"_makeTopRow",value:function(e,t,n){return{total:this._sum(e,t,n),data:this._makeData(e,t)}}},{key:"_makeData",value:function(e,t){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),value:parseInt(e[t])}}).reverse()}},{key:"_sum",value:function(e,t,n){return e.map(function(e){return n?parseInt(e[t])||0:parseFloat(e[t])||0}).reduce(function(e,t){return e+t},0)}},{key:"_calcUniqueRenderers",value:function(e){return{totalUniqueRenderes:this._sum(e,"Unique Renderers",!0),uniqueViewers:this._sum(e,"Unique Viewers",!0),uniqueMinimizers:this._sum(e,"Unique Minimizers",!0)}}},{key:"_calcGraphsComposed",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),uniqueInteractors:parseInt(e["Unique Interactors"]),interactionRate:parseFloat(e["Interaction Rate"]),minimizationRate:parseFloat(e["Minimization Rate"]),unminimizationRate:parseFloat(e["Unminimization Rate"])}}).reverse()}},{key:"_calcGraphsRadar",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicks:parseInt(e.Clicks),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),mouseEnters:parseInt(e.Mouseenters),mouseentersPerViewer:parseInt(e["Mouseenters Per Viewer"])}}).reverse()}},{key:"_calcGraphsLine",value:function(e){return e.map(function(e){return{date:r()(e.Date,"YYYY/MM/DD").format("L"),clicksPerInteractor:parseInt(e["Clicks Per Interactor"]),mouseEntersPerView:parseInt(e["Mouseenters Per Viewer"]),uniqueInteractors:parseInt(e["Unique Interactors"]),clicks:parseInt(e.Clicks),mouseEnters:parseInt(e.Mouseenters),minimizations:parseInt(e.Minimizations)}}).reverse()}}],[{key:"instance",get:function(){return e._instance}}]),e}();m._instance=new m,n.d(t,"e",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"c",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"a",function(){return m})},367:function(e,t,n){},370:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),o=n.n(i),s=n(128),u=n(76),c=n(100),l=n(50),d=n(130),f=(n(379),r.a.lazy(function(){return n.e(26).then(n.bind(null,682))})),p=r.a.lazy(function(){return Promise.all([n.e(1),n.e(21)]).then(n.bind(null,683))}),m=r.a.lazy(function(){return Promise.all([n.e(1),n.e(30)]).then(n.bind(null,684))}),h=r.a.lazy(function(){return Promise.all([n.e(1),n.e(22)]).then(n.bind(null,688))}),v=r.a.lazy(function(){return Promise.all([n.e(1),n.e(28)]).then(n.bind(null,685))}),y=r.a.lazy(function(){return Promise.all([n.e(1),n.e(29)]).then(n.bind(null,686))}),b=function(){return r.a.createElement(s.a,{store:d.store},r.a.createElement(c.a,{basename:"/"},r.a.createElement(u.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(u.c,null)},r.a.createElement(u.b,null,r.a.createElement(l.b,{exact:!0,path:"/",component:f}),r.a.createElement(l.b,{path:"/overview",component:p}),r.a.createElement(l.b,{path:"/monetization",component:m}),r.a.createElement(l.b,{path:"/iteraction",component:v}),r.a.createElement(l.b,{path:"/activated",component:h}),r.a.createElement(l.b,{path:"/build",component:y}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,n){"use strict";var a=n(142),r=(n(77),n(36)),i=n(1),o=n.n(i),s=n(96),u=(n(377),r.a.Content),c=function(e){var t=e.children,n=Object(i.useState)(!1),c=Object(a.a)(n,2),l=c[0],d=c[1];return Object(i.useEffect)(function(){d(!0)},[]),o.a.createElement(r.a,null,o.a.createElement(s.Sider,{collapsed:l,onCollapse:function(){return d(!l)},loadedCsv:!0}),o.a.createElement(r.a,{style:{minHeight:"100vh"}},o.a.createElement(s.HeaderView,null),o.a.createElement(u,{className:"content"},t),o.a.createElement(s.FooterView,null)))},l=(n(378),function(e){var t=e.children;return o.a.createElement("div",{className:"main"},t)}),d=(n(146),n(98)),f=function(){return o.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},o.a.createElement(d.a,{size:"large"}))};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return f})},91:function(e,t,n){"use strict";var a=n(186);n.d(t,"dataChosen",function(){return a.a}),n.d(t,"fileChosen",function(){return a.b});var r=n(173);n.d(t,"csvReducer",function(){return r.a});var i=n(174);n.o(i,"setProperty")&&n.d(t,"setProperty",function(){return i.setProperty})},92:function(e,t,n){"use strict";var a=n(175);n.d(t,"overviewReducer",function(){return a.a});var r=n(176);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty})},93:function(e,t,n){"use strict";var a=n(177);n.d(t,"monetizationReducer",function(){return a.a});var r=n(178);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty})},94:function(e,t,n){"use strict";var a=n(179);n.d(t,"interactionReducer",function(){return a.a});var r=n(180);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty})},95:function(e,t,n){"use strict";var a=n(181);n.d(t,"manualBuildReducer",function(){return a.a});var r=n(182);n.o(r,"dataChosen")&&n.d(t,"dataChosen",function(){return r.dataChosen}),n.o(r,"fileChosen")&&n.d(t,"fileChosen",function(){return r.fileChosen}),n.o(r,"setProperty")&&n.d(t,"setProperty",function(){return r.setProperty});var i=n(185);n.d(t,"setProperty",function(){return i.a})},96:function(e,t,n){"use strict";var a=n(144);n.o(a,"ChannelsList")&&n.d(t,"ChannelsList",function(){return a.ChannelsList}),n.o(a,"FooterView")&&n.d(t,"FooterView",function(){return a.FooterView}),n.o(a,"HeaderView")&&n.d(t,"HeaderView",function(){return a.HeaderView}),n.o(a,"Sider")&&n.d(t,"Sider",function(){return a.Sider});var r=n(183);n.d(t,"ChannelsList",function(){return r.a});var i=n(171);n.d(t,"FooterView",function(){return i.a});var o=n(184);n.d(t,"Sider",function(){return o.a});var s=n(172);n.d(t,"HeaderView",function(){return s.a})}},[[222,11,12]]]);
//# sourceMappingURL=main.9a8aa8b1.chunk.js.map