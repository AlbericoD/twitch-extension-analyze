(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{387:function(e,a,t){},402:function(e,a,t){},403:function(e,a,t){},405:function(e,a,t){},416:function(e,a,t){"use strict";t(393);var n=t(396),l=t(1),r=t.n(l),c=(t(402),Object(l.memo)(function(e){var a=e.children,t=e.title,l=e.loading,c=e.footer,i=e.value,o=e.action;return r.a.createElement(n.a,{bodyStyle:{padding:"20px 24px 8px 24px"},loading:l},r.a.createElement("div",{className:"chartCard"},r.a.createElement("div",{className:"chartTop chartTopMargin"},r.a.createElement("div",{className:"metaWrap"},r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"title"},t),r.a.createElement("span",{className:"action"},o)),r.a.createElement("div",{className:"total"},i))),a&&r.a.createElement("div",{className:"content-mini",style:{height:"auto"}},r.a.createElement("div",{className:"contentHeight contentFixed"},a)),void 0!==c?r.a.createElement("div",{className:"footer footerMargin"},c):null))})),i=t(391),o=(t(403),t(385)),m=(t(387),function(e){var a=e.active,t=e.payload;return a?r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",{className:"label"},"".concat(t[0].payload.date," : ").concat(t[0].value))):null}),s=Object(l.memo)(function(e){var a=e.data;return r.a.createElement("div",{className:"miniChart"},r.a.createElement("div",{className:"chartContent"},r.a.createElement(o.p,null,r.a.createElement(o.b,{data:a},"//@ts-ignore",r.a.createElement(o.q,{content:function(e){return r.a.createElement(m,e)}}),r.a.createElement(o.a,{type:"monotone",dataKey:"value",stroke:"#8884d8",fill:"#8884d8"})))))}),u=function(e){var a=e.active,t=e.payload;return a?r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",{className:"label"},"".concat(t[0].payload.date," : ").concat(t[0].value))):null},d=Object(l.memo)(function(e){var a=e.data;return r.a.createElement("div",{className:"miniChart"},r.a.createElement("div",{className:"chartContent"},r.a.createElement(o.p,null,r.a.createElement(o.d,{data:a},r.a.createElement(o.c,{dataKey:"value",fill:"#8884d8"}),"//@ts-ignore",r.a.createElement(o.q,{content:function(e){return r.a.createElement(u,e)}})))))}),E=function(e){var a=e.active,t=e.payload;return a?r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",{className:"label"},"".concat(t[0].payload.date," : ").concat(t[0].value))):null},v=Object(l.memo)(function(e){var a=e.data;return r.a.createElement("div",{className:"miniChart"},r.a.createElement("div",{className:"chartContent"},r.a.createElement(o.p,null,r.a.createElement(o.j,{data:a},r.a.createElement(o.i,{type:"monotone",dataKey:"value",stroke:"#8884d8",strokeWidth:2}),"//@ts-ignore",r.a.createElement(o.q,{content:function(e){return r.a.createElement(E,e)}})))))}),p=(t(103),t(9)),f=t(3),g=t.n(f),N=(t(405),function(e){var a=e.colorful,t=void 0===a||a,n=e.reverseColor,l=void 0!==n&&n,c=e.flag,o=e.children,m=e.className,s=Object(i.a)(e,["colorful","reverseColor","flag","children","className"]),u=g()("trendItem",{trendItemGrey:!t,reverseColor:l&&t},m);return r.a.createElement("div",Object.assign({},s,{className:u,title:"string"===typeof o?o:""}),r.a.createElement("span",null,o),c&&r.a.createElement("span",{className:c},r.a.createElement(p.a,{type:"caret-".concat(c)})))});t.d(a,"a",function(){return c}),t.d(a,"b",function(){return s}),t.d(a,"c",function(){return d}),t.d(a,"d",function(){return v}),t.d(a,"e",function(){return N})},680:function(e,a,t){"use strict";t.r(a);t(418);var n=t(422),l=(t(419),t(423)),r=(t(400),t(417)),c=(t(397),t(398)),i=t(1),o=t.n(i),m=t(416),s=t(128),u={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:24}},d=Object(i.memo)(function(e){var a=e.uniqueRenderers,t=e.interactionRate,i=e.minimizationRate,s=e.unminimization,d=e.loading;return o.a.createElement(n.a,{gutter:24},o.a.createElement(l.a,u,o.a.createElement(m.a,{loading:d,title:o.a.createElement(r.a,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{color:"purple"},"Unique"),"Renderers"),value:a.totalUniqueRenderes})},o.a.createElement("div",{style:{marginRight:16}},o.a.createElement(m.e,{flag:"up"},"Unique Viewers",o.a.createElement("span",{className:"trendText"},a.uniqueViewers)),o.a.createElement("br",null),o.a.createElement(m.e,{flag:"down"},"Unique Minimizers",o.a.createElement("span",{className:"trendText"},a.uniqueMinimizers))))),o.a.createElement(l.a,u,o.a.createElement(m.a,{loading:d,title:o.a.createElement(r.a,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{color:"magenta"},"Rate"),"Interaction"),value:t.total,precision:4})},o.a.createElement(m.b,{data:t.data}))),o.a.createElement(l.a,u,o.a.createElement(m.a,{loading:d,title:o.a.createElement(r.a,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{color:"magenta"},"Rate"),"Minimization"),value:i.total,precision:4})},o.a.createElement(m.d,{data:i.data}))),o.a.createElement(l.a,u,o.a.createElement(m.a,{loading:d,title:o.a.createElement(r.a,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{color:"magenta"},"Rate"),"Unminimization"),value:s.total,precision:4})},o.a.createElement(m.c,{data:s.data}))))});a.default=Object(s.b)(function(e){return{loading:e.interaction.load,uniqueRenderers:e.interaction.topRow.uniqueRenderers,interactionRate:e.interaction.topRow.interactionRate,minimizationRate:e.interaction.topRow.minimizationRate,unminimization:e.interaction.topRow.unminimization}},null)(d)}}]);
//# sourceMappingURL=18.3758b5e2.chunk.js.map