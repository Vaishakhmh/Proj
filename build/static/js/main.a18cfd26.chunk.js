(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/sidebar-3.34535b95.jpg"},106:function(e,t,a){e.exports=a(189)},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},176:function(e,t,a){e.exports=a.p+"static/media/reactlogo.9b864b36.png"},189:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),o=a.n(r),i=a(28),l=a(32),p=(a(111),a(112),a(113),a(114),a(115),a(9)),c=a(10),m=a(12),d=a(11),u=a(13),h=a(38),b=a(199),f=a(201),g=a(191),y=a(198),E=a(192),k=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(g.a,{pullRight:!0},s.a.createElement(y.a,{eventKey:2,title:"Component Actions",id:"basic-nav-dropdown-right",className:".navbar-ct-blue"},s.a.createElement(E.a,{eventKey:2.1},"Action"),s.a.createElement(E.a,{eventKey:2.2},"Another action"),s.a.createElement(E.a,{eventKey:2.3},"Something"),s.a.createElement(E.a,{eventKey:2.4},"Another action"),s.a.createElement(E.a,{eventKey:2.5},"Something"),s.a.createElement(E.a,{divider:!0}),s.a.createElement(E.a,{eventKey:2.5},"Separated link"))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).mobileSidebarToggle=a.mobileSidebarToggle.bind(Object(h.a)(a)),a.state={sidebarExists:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"mobileSidebarToggle",value:function(e){!1===this.state.sidebarExists&&this.setState({sidebarExists:!0}),e.preventDefault(),document.documentElement.classList.toggle("nav-open");var t=document.createElement("div");t.id="bodyClick",t.onclick=function(){this.parentElement.removeChild(this),document.documentElement.classList.toggle("nav-open")},document.body.appendChild(t)}},{key:"render",value:function(){return s.a.createElement(b.a,{fluid:!0},s.a.createElement(f.a,{className:"navbar-transparent"},s.a.createElement(f.a.Item,{active:!0},"Admin"),s.a.createElement(f.a.Item,{active:!0},"Data")),s.a.createElement(b.a.Header,null,s.a.createElement(b.a.Brand,null,s.a.createElement("h2",null,"Webasto AirTop 2000")),s.a.createElement(b.a.Toggle,{onClick:this.mobileSidebarToggle})),s.a.createElement(b.a.Collapse,null,s.a.createElement(k,null)),s.a.createElement("li",null,this.state.width<=991?s.a.createElement(k,null):null,this.props.routes.map(function(e,t){return e.redirect?null:s.a.createElement(i.b,{to:e.layout+e.path,className:"navbar-nav",activeStyle:{borderBottom:"1px solid white"}},s.a.createElement("p",null,e.name))})))}}]),t}(n.Component),x=a(193),w=(a(176),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={width:window.innerWidth},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"updateDimensions",value:function(){this.setState({width:window.innerWidth})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"sidebar",className:"sidebar","data-color":this.props.color},s.a.createElement("div",{className:"logo"},s.a.createElement(i.b,{to:"/admin/home",className:"nav-link"},s.a.createElement("div",{className:"logo-img",style:{marginTop:"10px"}},s.a.createElement("br",null),s.a.createElement(x.a,null))),s.a.createElement("div",{style:{marginTop:"15px"}},s.a.createElement("a",{href:"#",className:"simple-text logo-normal"},"Power Plant"))),s.a.createElement("div",{className:"sidebar-wrapper"},s.a.createElement("ul",{className:"nav"},this.state.width<=991?s.a.createElement(k,null):null,this.props.routes.map(function(t,a){return t.redirect?null:s.a.createElement("li",{className:t.upgrade?"active active-pro":e.activeRoute(t.layout+t.path),key:a},s.a.createElement(i.b,{to:t.layout+t.path,className:"nav-link",activeClassName:"active"},s.a.createElement("i",{className:t.icon}),s.a.createElement("p",null,t.name)))}))))}}]),t}(n.Component)),S=a(102),O=a.n(S),j=a(99),C=a(195),N=a(196),A=a(197),F=a(19),T=a(57),B=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={is_checked:!!e.isChecked},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.setState({is_checked:!this.state.is_checked})}},{key:"render",value:function(){var e=this.props,t=(e.isChecked,e.number),a=e.label,n=e.inline,r=Object(T.a)(e,["isChecked","number","label","inline"]),o=void 0!==n?"checkbox checkbox-inline":"checkbox";return s.a.createElement("div",{className:o},s.a.createElement("input",Object.assign({id:t,type:"checkbox",onChange:this.handleClick,checked:this.state.is_checked},r)),s.a.createElement("label",{htmlFor:t},a))}}]),t}(n.Component),D=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card"+(this.props.plain?" card-plain":"")},s.a.createElement("div",{className:"header"+(this.props.hCenter?" text-center":"")},s.a.createElement("h4",{className:"title"},this.props.title),s.a.createElement("p",{className:"category"},this.props.category)),s.a.createElement("div",{className:"content"+(this.props.ctAllIcons?" all-icons":"")+(this.props.ctTableFullWidth?" table-full-width":"")+(this.props.ctTableResponsive?" table-responsive":"")+(this.props.ctTableUpgrade?" table-upgrade":"")},this.props.content,s.a.createElement("div",{className:"footer"},this.props.legend,null!=this.props.stats?s.a.createElement("hr",null):"",s.a.createElement("div",{className:"stats"},s.a.createElement("i",{className:this.props.statsIcon})," ",this.props.stats))))}}]),t}(n.Component),P=D,W=a(103),M=a(194),z=a(200),R=a(56),J=a(5),L=a.n(J),I=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fill,a=e.simple,n=e.pullRight,r=e.round,o=e.block,i=Object(T.a)(e,["fill","simple","pullRight","round","block"]),l=L()({"btn-fill":t,"btn-simple":a,"pull-right":n,"btn-block":o,"btn-round":r});return s.a.createElement(R.a,Object.assign({className:l},i))}}]),t}(n.Component),H=(n.Component,[{path:"/dashboard",name:"Dashboard",icon:"pe-7s-graph",component:function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"createLegend",value:function(e){for(var t=[],a=0;a<e.names.length;a++){var n="fa fa-circle text-"+e.types[a];t.push(s.a.createElement("i",{className:n,key:a})),t.push(" "),t.push(e.names[a])}return t}},{key:"render",value:function(){return s.a.createElement("div",{className:"Fullview"},s.a.createElement(j.a,{fluid:!0},s.a.createElement(C.a,null,s.a.createElement(N.a,{md:10},s.a.createElement(D,{statsIcon:"fa fa-history",id:"chartHours",title:"Sensors",category:"24 Hours performance",content:s.a.createElement("div",{className:"ct-chart"},s.a.createElement(O.a,{data:F.dataSales,type:"Line",options:F.optionsSales,responsiveOptions:F.responsiveSales})),legend:s.a.createElement("div",{className:"legend"},this.createLegend(F.legendSales))}))),s.a.createElement(C.a,null,s.a.createElement(N.a,{md:12},s.a.createElement("div",null,s.a.createElement(A.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,F.thArray.map(function(e,t){return s.a.createElement("th",{className:"thh",key:t},e)})),s.a.createElement("tr",null,F.td1Array.map(function(e,t){return s.a.createElement("th",{className:"thd",key:t},e)}))),s.a.createElement("thead",null,s.a.createElement("tr",null,F.th1Array.map(function(e,t){return s.a.createElement("th",{key:t},e)}))),s.a.createElement("thead",{className:"trf"},s.a.createElement("tr",null,F.ts1Array.map(function(e,t){return s.a.createElement("th",{className:"the",key:t},e)}))),s.a.createElement("tbody",null,F.tdArray.map(function(e,t){return s.a.createElement("tr",{key:t},e.map(function(e,a){return 0==a&&t%2==0?s.a.createElement(B,{isChecked:"Yes"===e}):t%2==1?s.a.createElement("td",{style:{color:"gray",borderBottom:"1px solid white"},key:a},e):s.a.createElement("td",{key:a},e)}))}))),"} />")))))}}]),t}(n.Component),layout:"/admin"},{path:"/table",name:"Table List",icon:"pe-7s-note2",component:function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Fullview"},s.a.createElement(j.a,{fluid:!0},s.a.createElement(C.a,null,s.a.createElement(N.a,{md:12},s.a.createElement(P,{ctTableFullWidth:!0,ctTableResponsive:!0,content:s.a.createElement(A.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,F.th1Array.map(function(e,t){return s.a.createElement("th",{key:t},e)}))),s.a.createElement("thead",{className:"trf"},s.a.createElement("tr",null,F.ts1Array.map(function(e,t){return s.a.createElement("th",{className:"the",key:t},e)}))),s.a.createElement("tbody",null,F.tdArray.map(function(e,t){return s.a.createElement("tr",{key:t},e.map(function(e,t){return 0!==t?s.a.createElement("td",{key:t},e):s.a.createElement(B,{isChecked:"Yes"===e})}))})))})))))}}]),t}(n.Component),layout:"/admin"}]),K=a(105),_=a.n(K),U=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getRoutes=function(e){return e.map(function(e,t){return"/admin"===e.layout?s.a.createElement(l.b,{path:e.layout+e.path,render:function(t){return s.a.createElement(e.component,Object.assign({},t,{handleClick:a.handleNotificationClick}))},key:t}):null})},a.getBrandText=function(e){for(var t=0;t<H.length;t++)if(-1!==a.props.location.pathname.indexOf(H[t].layout+H[t].path))return H[t].name;return"Brand"},a.handleImageClick=function(e){a.setState({image:e})},a.handleColorClick=function(e){a.setState({color:e})},a.handleHasImage=function(e){a.setState({hasImage:e})},a.handleFixedClick=function(){"dropdown"===a.state.fixedClasses?a.setState({fixedClasses:"dropdown show-dropdown open"}):a.setState({fixedClasses:"dropdown"})},a.state={_notificationSystem:null,image:_.a,color:"black",hasImage:!0,fixedClasses:"dropdown show-dropdown open"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(w,Object.assign({},this.props,{routes:H,color:"custom-blue"})),s.a.createElement("div",{id:"main-panel",className:"main-panel",ref:"mainPanel"},s.a.createElement(v,Object.assign({routes:H},this.props,{brandText:this.getBrandText(this.props.location.pathname)})),s.a.createElement(l.d,null,this.getRoutes(H))))}}]),t}(n.Component);o.a.render(s.a.createElement(i.a,null,s.a.createElement(l.d,null,s.a.createElement(l.b,{path:"/admin",render:function(e){return s.a.createElement(U,e)}}),s.a.createElement(l.a,{from:"/",to:"/admin/dashboard"}))),document.getElementById("root"))},19:function(e,t){var a=window.screen.width>768?1*window.screen.width/3:window.screen.width,n={Wrapper:{},Containers:{DefaultStyle:{position:"fixed",width:a,padding:"10px 10px 10px 20px",zIndex:9998,WebkitBoxSizing:"",MozBoxSizing:"",boxSizing:"",height:"auto",display:"inline-block",border:"0",fontSize:"14px",WebkitFontSmoothing:"antialiased",fontFamily:'"Roboto","Helvetica Neue",Arial,sans-serif',fontWeight:"400",color:"#FFFFFF"},tl:{top:"0px",bottom:"auto",left:"0px",right:"auto"},tr:{top:"0px",bottom:"auto",left:"auto",right:"0px"},tc:{top:"0px",bottom:"auto",margin:"0 auto",left:"50%",marginLeft:-a/2},bl:{top:"auto",bottom:"0px",left:"0px",right:"auto"},br:{top:"auto",bottom:"0px",left:"auto",right:"0px"},bc:{top:"auto",bottom:"0px",margin:"0 auto",left:"50%",marginLeft:-a/2}},NotificationItem:{DefaultStyle:{position:"relative",width:"100%",cursor:"pointer",borderRadius:"4px",fontSize:"14px",margin:"10px 0 0",padding:"10px",display:"block",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",opacity:0,transition:"all 0.5s ease-in-out",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",willChange:"transform, opacity",isHidden:{opacity:0},isVisible:{opacity:1}},success:{borderTop:0,backgroundColor:"#a1e82c",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#fc727a",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffbc67",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,backgroundColor:"#63d8f1",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{fontSize:"30px",margin:"0",padding:0,fontWeight:"bold",color:"#FFFFFF",display:"block",left:"15px",position:"absolute",top:"50%",marginTop:"-15px"}},MessageWrapper:{DefaultStyle:{marginLeft:"55px",marginRight:"30px",padding:"0 12px 0 0",color:"#FFFFFF",maxWidthwidth:"89%"}},Dismiss:{DefaultStyle:{fontFamily:"inherit",fontSize:"21px",color:"#000",float:"right",position:"absolute",right:"10px",top:"50%",marginTop:"-13px",backgroundColor:"#FFFFFF",display:"block",borderRadius:"50%",opacity:".4",lineHeight:"11px",width:"25px",height:"25px",outline:"0 !important",textAlign:"center",padding:"6px 3px 3px 3px",fontWeight:"300",marginLeft:"65px"},success:{},error:{},warning:{},info:{}},Action:{DefaultStyle:{background:"#ffffff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#a1e82c",color:"#ffffff"},error:{backgroundColor:"#fc727a",color:"#ffffff"},warning:{backgroundColor:"#ffbc67",color:"#ffffff"},info:{backgroundColor:"#63d8f1",color:"#ffffff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};e.exports={style:n,thArray:["Priority","Condition","Time to failure","Probability","Time to Repair","","",""],ts1Array:["","","Location","Units","Time","Lower limit","Time","No.in 7 days"],td2Array:[["","","Pump5/Drivetrain","bar'17","Jan30,8:44","69.4460","17 Jan 30"],["","","Pump5/Drivetrain","bar'17","Jan30,8:44","69.4460","17 Jan 30"],["","","Pump5/Drivetrain","bar'17","Jan30,8:44","69.4460","17 Jan 30"]],th1Array:["3/6","Rnk","Sensor name","","Last reading","Upper limit","Last Anomaly","Avg Duration"],td1Array:["P0","CRITICAL","16 Days","80%","11 Days","","",""],tdArray:[["Yes","1","Static Pressure at pump Outlet","","107.0054","100.0000","813 mins",""],["","","Pump5/Drivetrain","bar'17","Jan30,8:44","69.4460","17 Jan 30",""],["Yes","2","Static Pressure at pump Outlet","","107.0054","100.0000","813 mins",""],["","","Pump5/Drivetrain","bar'17","Jan30,8:44","69.4460","17 Jan 30",""],["No","3","Static Pressure at pump Outlet","","107.0054","100.0000","813 mins",""],["","","Pump5/Drivetrain","bar'17","Jan30,8:44","69.4460","17 Jan 30",""]],iconsArray:["pe-7s-album","pe-7s-arc","pe-7s-back-2","pe-7s-bandaid","pe-7s-car","pe-7s-diamond","pe-7s-door-lock","pe-7s-eyedropper","pe-7s-female","pe-7s-gym","pe-7s-hammer","pe-7s-headphones","pe-7s-helm","pe-7s-hourglass","pe-7s-leaf","pe-7s-magic-wand","pe-7s-male","pe-7s-map-2","pe-7s-next-2","pe-7s-paint-bucket","pe-7s-pendrive","pe-7s-photo","pe-7s-piggy","pe-7s-plugin","pe-7s-refresh-2","pe-7s-rocket","pe-7s-settings","pe-7s-shield","pe-7s-smile","pe-7s-usb","pe-7s-vector","pe-7s-wine","pe-7s-cloud-upload","pe-7s-cash","pe-7s-close","pe-7s-bluetooth","pe-7s-cloud-download","pe-7s-way","pe-7s-close-circle","pe-7s-id","pe-7s-angle-up","pe-7s-wristwatch","pe-7s-angle-up-circle","pe-7s-world","pe-7s-angle-right","pe-7s-volume","pe-7s-angle-right-circle","pe-7s-users","pe-7s-angle-left","pe-7s-user-female","pe-7s-angle-left-circle","pe-7s-up-arrow","pe-7s-angle-down","pe-7s-switch","pe-7s-angle-down-circle","pe-7s-scissors","pe-7s-wallet","pe-7s-safe","pe-7s-volume2","pe-7s-volume1","pe-7s-voicemail","pe-7s-video","pe-7s-user","pe-7s-upload","pe-7s-unlock","pe-7s-umbrella","pe-7s-trash","pe-7s-tools","pe-7s-timer","pe-7s-ticket","pe-7s-target","pe-7s-sun","pe-7s-study","pe-7s-stopwatch","pe-7s-star","pe-7s-speaker","pe-7s-signal","pe-7s-shuffle","pe-7s-shopbag","pe-7s-share","pe-7s-server","pe-7s-search","pe-7s-film","pe-7s-science","pe-7s-disk","pe-7s-ribbon","pe-7s-repeat","pe-7s-refresh","pe-7s-add-user","pe-7s-refresh-cloud","pe-7s-paperclip","pe-7s-radio","pe-7s-note2","pe-7s-print","pe-7s-network","pe-7s-prev","pe-7s-mute","pe-7s-power","pe-7s-medal","pe-7s-portfolio","pe-7s-like2","pe-7s-plus","pe-7s-left-arrow","pe-7s-play","pe-7s-key","pe-7s-plane","pe-7s-joy","pe-7s-photo-gallery","pe-7s-pin","pe-7s-phone","pe-7s-plug","pe-7s-pen","pe-7s-right-arrow","pe-7s-paper-plane","pe-7s-delete-user","pe-7s-paint","pe-7s-bottom-arrow","pe-7s-notebook","pe-7s-note","pe-7s-next","pe-7s-news-paper","pe-7s-musiclist","pe-7s-music","pe-7s-mouse","pe-7s-more","pe-7s-moon","pe-7s-monitor","pe-7s-micro","pe-7s-menu","pe-7s-map","pe-7s-map-marker","pe-7s-mail","pe-7s-mail-open","pe-7s-mail-open-file","pe-7s-magnet","pe-7s-loop","pe-7s-look","pe-7s-lock","pe-7s-lintern","pe-7s-link","pe-7s-like","pe-7s-light","pe-7s-less","pe-7s-keypad","pe-7s-junk","pe-7s-info","pe-7s-home","pe-7s-help2","pe-7s-help1","pe-7s-graph3","pe-7s-graph2","pe-7s-graph1","pe-7s-graph","pe-7s-global","pe-7s-gleam","pe-7s-glasses","pe-7s-gift","pe-7s-folder","pe-7s-flag","pe-7s-filter","pe-7s-file","pe-7s-expand1","pe-7s-exapnd2","pe-7s-edit","pe-7s-drop","pe-7s-drawer","pe-7s-download","pe-7s-display2","pe-7s-display1","pe-7s-diskette","pe-7s-date","pe-7s-cup","pe-7s-culture","pe-7s-crop","pe-7s-credit","pe-7s-copy-file","pe-7s-config","pe-7s-compass","pe-7s-comment","pe-7s-coffee","pe-7s-cloud","pe-7s-clock","pe-7s-check","pe-7s-chat","pe-7s-cart","pe-7s-camera","pe-7s-call","pe-7s-calculator","pe-7s-browser","pe-7s-box2","pe-7s-box1","pe-7s-bookmarks","pe-7s-bicycle","pe-7s-bell","pe-7s-battery","pe-7s-ball","pe-7s-back","pe-7s-attention","pe-7s-anchor","pe-7s-albums","pe-7s-alarm","pe-7s-airplay"],dataPie:{labels:["40%","20%","40%"],series:[40,20,40]},legendPie:{names:["Open","Bounce","Unsubscribe"],types:["info","danger","warning"]},dataSales:{labels:["9:00AM","12:00AM","3:00PM","6:00PM","9:00PM","12:00PM","3:00AM","6:00AM"],series:[[287,385,490,492,554,586,698,695],[67,152,143,240,287,335,435,437],[23,113,67,108,190,239,307,308]]},optionsSales:{low:0,high:800,showArea:!1,height:"245px",axisX:{showGrid:!1},lineSmooth:!0,showLine:!0,showPoint:!0,fullWidth:!0,chartPadding:{right:50}},responsiveSales:[["screen and (max-width: 640px)",{axisX:{labelInterpolationFnc:function(e){return e[0]}}}]],legendSales:{names:["Open","Click","Click Second Time"],types:["info","danger","warning"]},dataBar:{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,443,320,780,553,453,326,434,568,610,756,895],[412,243,280,580,453,353,300,364,368,410,636,695]]},optionsBar:{seriesBarDistance:10,axisX:{showGrid:!1},height:"245px"},responsiveBar:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(e){return e[0]}}}]],legendBar:{names:["Tesla Model S","BMW 5 Series"],types:["info","danger"]}}}},[[106,1,2]]]);
//# sourceMappingURL=main.a18cfd26.chunk.js.map