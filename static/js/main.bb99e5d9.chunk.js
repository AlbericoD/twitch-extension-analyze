(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){"use strict";var n=a(146);a.d(t,"ImportTwitchCSV",function(){return n.a});var r=a(163);a.o(r,"ContentBox")&&a.d(t,"ContentBox",function(){return r.ContentBox});a(89);var l=a(212);a.d(t,"ContentBox",function(){return l.a});a(90)},146:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(62);var n=a(23),r=(a(63),a(15)),l=(a(508),a(233)),s=(a(72),a(9)),c=a(1),i=a.n(c),o=function(e){var t=e.handleFileChosen;return i.a.createElement(n.a,{gutter:16,style:{margin:10}},i.a.createElement(r.a,{span:6},i.a.createElement("label",{className:"label"},i.a.createElement("span",{className:"title"},"Add CSV"),i.a.createElement(l.a,{type:"file",accept:".csv",onChange:function(e){return t(e.target.files[0])},placeholder:"Click to Upload",prefix:i.a.createElement(s.a,{type:"upload",style:{color:"rgba(0,0,0,.25)"}})}))))}},163:function(e,t){},212:function(e,t,a){"use strict";a(140);var n=a(27),r=a(1),l=a.n(r),s=(a(62),a(23)),c=(a(63),a(15)),i=(a(137),a(40)),o=(a(72),a(9)),u=[{title:"Unique Active Channels Last 7 Days",precision:0,icon:"select"},{title:"Unique Renderers Last 7 Days",precision:0,icon:"stock"},{title:"Unique Viewers Last 7 Days",precision:0,icon:"eye"},{title:"Unique Mouseenters Last 7 Days",precision:0,icon:"heart"}],d=function(e){var t=e.css,a=e.value;return l.a.createElement(s.a,{gutter:16},u.map(function(e,n){return l.a.createElement(c.a,{span:6,key:n},l.a.createElement(i.a,{style:t,title:e.title,value:a[e.title],valueStyle:{color:"#b19dd8"},precision:0,prefix:l.a.createElement(o.a,{type:e.icon})}))}))},m=(a(211),a(95)),p=function(e){var t=e.cardCss,a=e.statisticCss,r=e.csv,o=e.children;return l.a.createElement(s.a,{gutter:16},l.a.createElement(c.a,{span:12},l.a.createElement(n.a.Grid,{style:t},l.a.createElement(i.a,{title:"Activations (Total)",value:r.map(function(e){return parseInt(e.Activations)}).reduce(function(e,t){return e+t},0),valueStyle:{color:"#b19dd8"},precision:0,style:a}))),l.a.createElement(c.a,{span:12},l.a.createElement(n.a.Grid,{style:t},l.a.createElement(i.a,{valueStyle:{color:"#b19dd8"},title:"Uninstalls (Total)",value:r.map(function(e){return parseInt(e.Uninstalls)}).reduce(function(e,t){return e+t},0),suffix:"/ ".concat(r.map(function(e){return parseInt(e.Installs)}).reduce(function(e,t){return e+t},0)),style:a}))),l.a.createElement(m.a,{style:{background:"hsla(0,0%,100%,.05)"}}),l.a.createElement(c.a,{span:24},o))},f=function(e){var t=e.cardCss,a=e.statisticCss,r=e.csv,u=e.children;return l.a.createElement(s.a,{gutter:16},l.a.createElement(c.a,{span:12},l.a.createElement(n.a.Grid,{style:t},l.a.createElement(i.a,{title:"Bits Revenue (USD)",value:r.map(function(e){return parseFloat(e["Bits Revenue USD"])}).reduce(function(e,t){return e+t},0),prefix:l.a.createElement(o.a,{type:"dollar"}),precision:2,valueStyle:{color:"#b19dd8"},style:a}))),l.a.createElement(c.a,{span:12},l.a.createElement(n.a.Grid,{style:t},l.a.createElement(i.a,{title:"Bits Used (BITS)",value:r.map(function(e){return parseInt(e["Bits Used"])}).reduce(function(e,t){return e+t},0),valueStyle:{color:"#b19dd8"},precision:2,prefix:l.a.createElement(o.a,{type:"like"}),style:a}))),l.a.createElement(m.a,{style:{background:"hsla(0,0%,100%,.05)"}}),l.a.createElement(c.a,{span:24},u))},v=a(89),E=a(90),h={margin:16,paddingTop:10,background:"#0f0e11",border:"1px solid hsla(0,0%,100%,.09)",boxShadow:"0 2px 4px -1px hsla(0,0%,100%,.05),0 2px 2px -2px hsla(0,0%,100%,.05),0 1px 4px 0 hsla(0,0%,100%,.05)"},y={width:"50%",textAlign:"center",boxShadow:"0 2px 4px -1px rgba(0,0,0,.34),0 2px 2px -2px rgba(0,0,0,.26),0 1px 4px 0 rgba(0,0,0,.28)"},x={width:"100%",textAlign:"center",background:"#19171c",border:"1px solid hsla(0,0%,100%,.05)",boxShadow:"0 2px 4px -1px rgba(0,0,0,.34),0 2px 2px -2px rgba(0,0,0,.26),0 1px 4px 0 rgba(0,0,0,.28)"},b={color:"#faf9fa"};a.d(t,"a",function(){return g});var g=function(e){var t=e.csv;return l.a.createElement(n.a,{style:h},l.a.createElement(n.a.Grid,{style:x},l.a.createElement(d,{css:b,value:t[0]})),l.a.createElement(n.a.Grid,{style:y},l.a.createElement(p,{cardCss:x,statisticCss:b,csv:t},l.a.createElement(v.a,{data:t}))),l.a.createElement(n.a.Grid,{style:y},l.a.createElement(f,{cardCss:x,statisticCss:b,csv:t},l.a.createElement(E.a,{data:t}))))}},256:function(e,t,a){e.exports=a(507)},261:function(e,t,a){},507:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(22),s=a.n(l),c=(a(261),a(72),a(9)),i=a(213),o=a(214),u=a(234),d=a(215),m=a(235),p=(a(263),a(98)),f=a(141),v=p.a.Header,E=p.a.Content,h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state=void 0,a.handleFileRead=function(){if("string"===typeof a.state.fileReader.result){var e=a.state.fileReader.result;a.setState({csv:a.csvJSON(e)},function(){null!==a.state.csv&&a.setState({name:a.state.csv[0]["Extension Name"]})})}},a.handleFileChosen=function(e){a.setState({load:!0},function(){a.state.fileReader.onloadend=a.handleFileRead,a.state.fileReader.readAsText(e)})},a.state={fileReader:new FileReader,uploadCSV:!1,load:!1,csv:null,name:"Extension Name"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"csvJSON",value:function(e){for(var t=e.split("\n"),a=t[0].split(","),n=[],r=1;r<t.length-1;r++){for(var l={},s=t[r].split(","),c=0;c<a.length;c++)void 0!==s[c]&&""!==s[c]&&(l[a[c]]=s[c]);n.push(l)}return n}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(v,{style:{background:"#6441a4"}},r.a.createElement("h1",{style:{color:"#fff"}},r.a.createElement("a",{href:"https://github.com/AlbericoD",target:"__blank"},r.a.createElement(c.a,{type:"github",style:{color:"#fff",fontSize:"1.5em",marginTop:10,marginRight:20}})),"Extension Overview: ",this.state.name)),r.a.createElement(E,null,r.a.createElement(f.ImportTwitchCSV,{handleFileChosen:this.handleFileChosen}),null!==this.state.csv?r.a.createElement(f.ContentBox,{csv:this.state.csv}):"Please Upload CSV"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(1),r=a.n(n),l=a(17),s=function(e){var t=[];return e.filter(function(e,a){if(a>=0&&a<=6){var n={name:e.Date,activations:parseInt(e.Activations),install:parseInt(e.Installs),uninstalls:parseInt(e.Uninstalls)};return t.push(n),e}}),t.reverse(),t},c=function(e){var t=e.data;return r.a.createElement(l.h,{width:"100%",aspect:2},r.a.createElement(l.c,{data:s(t)},r.a.createElement(l.d,{strokeDasharray:"3 3"}),r.a.createElement(l.j,{dataKey:"name"}),r.a.createElement(l.k,null),r.a.createElement(l.i,null),r.a.createElement(l.f,null),r.a.createElement(l.b,{dataKey:"install",fill:"#6441a4"}),r.a.createElement(l.b,{dataKey:"uninstalls",fill:"#392e5c"}),r.a.createElement(l.b,{dataKey:"activations",fill:"#9a7fcc"})))}},90:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(1),r=a.n(n),l=a(17),s=function(e){var t=[];return e.filter(function(e,a){if(a>=0&&a<=6){var n={name:e.Date,USD:parseFloat(e["Bits Revenue USD"]),bitsUsed:parseFloat(e["Bits Used"]),transactions:parseFloat(e["Bits Transactions"])};return t.push(n),n}}),t.reverse(),t},c=function(e){var t=e.data;return r.a.createElement(l.h,{width:"100%",aspect:2},r.a.createElement(l.e,{data:s(t)},r.a.createElement(l.d,{stroke:"#f5f5f5"}),r.a.createElement(l.j,{dataKey:"name"}),r.a.createElement(l.k,null),r.a.createElement(l.i,null),r.a.createElement(l.f,null),r.a.createElement(l.a,{type:"monotone",dataKey:"USD",fill:"#392e5c",stroke:"#8884d8"}),r.a.createElement(l.b,{dataKey:"transactions",barSize:20,fill:"#6441a4"}),r.a.createElement(l.g,{type:"monotone",dataKey:"bitsUsed",stroke:"#9a7fcc"})))}}},[[256,1,2]]]);
//# sourceMappingURL=main.bb99e5d9.chunk.js.map