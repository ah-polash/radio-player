!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="app/",t(t.s=20)}([function(e,t,n){e.exports=n(1)(2)},function(e,t){e.exports=lib_vendor},function(e,t,n){"use strict";t.__esModule=!0;var a=n(37),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},function(e,t,n){e.exports=n(1)(90)},function(e,t,n){e.exports=n(1)(68)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeCategory=t.addCategory=t.moveToTop=t.ACTION=void 0;var a=n(23),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=t.ACTION={MOVE_TO_TOP:"MOVE_TO_TOP",ADD_CATEGORY:"ADD_CATEGORY",REMOVE_CATEGORY:"REMOVE_CATEGORY"};t.moveToTop=function(e,t){return{type:o.MOVE_TO_TOP,station:e,index:t}},t.addCategory=function(e){var t=r.default.getCategory(e).map(function(t){return t.category=e,t});return{type:o.ADD_CATEGORY,categories:t,category:e}},t.removeCategory=function(e){return{type:o.REMOVE_CATEGORY,category:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={TRANSITION:function(){return document&&void 0!==document.body.style.transition}(),TOUCH:function(){return document&&"ontouchstart"in document.documentElement}(),MEDIA_SESSION:function(){return navigator&&"mediaSession"in navigator}()};t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(0),l=a(u),i=n(6),s=a(i),c=function(e){var t=e.accessKey,n=e.onMouseDown,a=e.onMouseUp,r=e.onTouchStart,u=e.onTouchEnd,i=e.onClick,c=e.children,d=s.default.TOUCH&&r?{onTouchStart:r,onTouchEnd:u}:{onMouseDown:n,onMouseUp:a};return l.default.createElement("button",(0,o.default)({className:"bt-circle",accessKey:t},d,{onClick:i}),l.default.createElement("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%"},l.default.createElement("g",null,c)))};t.default=c},function(e,t,n){e.exports=n(1)(111)},function(e,t,n){e.exports=n(1)(112)},function(e,t,n){e.exports=n(1)(116)},function(e,t,n){e.exports=n(1)(129)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.ACTION={ADD_CATEGORY:"ADD_CATEGORY",SET_UI_THEME:"SET_UI_THEME"},r=(t.addCategory=function(e){return{type:a.SAVE_BOARD,category:e}},{1:"grey",2:"light",3:"sand"});t.setUiTheme=function(e){return{type:a.SET_UI_THEME,uiTheme:r[e]}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),o=a(r),u=n(49),l=a(u),i=n(64),s=a(i),c={Command:o.default,Volume:l.default,List:s.default};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.sApp={app:function(e){return e.app||{}},uiTheme:function(e){return a.app(e).uiTheme}},r={sApp:a};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"},r={toBg:function(e){return{backgroundColor:a[e]}}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={CL_HEADER:"drawer__title",CL_ROOT:"drawer__list",CL_BT:"drawer__list-bt",BT_TRIPLE:{marginRight:8},BT_CLOSE:{position:"relative",top:4},UL:{listStyleType:"none"}};t.default=a},function(e,t,n){e.exports=n(1)(137)},function(e,t,n){e.exports=n(1)(49)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={app:{uiTheme:"grey"},categories:{},stations:[]};t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(0),o=a(r),u=n(21),l=n(3),i=n(22),s=a(i),c=n(71),d=a(c);(0,u.render)(o.default.createElement(l.Provider,{store:d.default},o.default.createElement(s.default,null)),document.getElementById("app"))},function(e,t,n){e.exports=n(1)(39)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=a(r),u=n(0),l=a(u),i=n(3),s=n(5),c=n(13),d=a(c),f=n(65),p=a(f),m={APP:{width:380,maxWidth:"calc(100vw - 32px)",marginTop:84,marginLeft:"auto",marginRight:"auto",marginBottom:12}},_=function(e){var t=e.stations,n=e.addCategory,a=e.moveToTop,r=(0,u.useState)(""),i=(0,o.default)(r,2),s=i[0],c=i[1],f=function(e,t){a(e,t),c(e)};return(0,u.useEffect)(function(){n("classical"),n("piano")},[]),l.default.createElement("div",{style:m.APP},l.default.createElement(p.default,{station:s}),l.default.createElement(d.default.List,{radioStations:t,onClick:f}))},v=function(e){return{stations:e.stations}},E={addCategory:s.addCategory,moveToTop:s.moveToTop};t.default=(0,i.connect)(v,E)(_)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),o=a(r),u=n(25),l=a(u),i=n(26),s=a(i),c=n(27),d=a(c),f=n(28),p=a(f),m=n(29),_=a(m),v=n(30),E=a(v),h=n(31),y=a(h),g=n(32),O=a(g),b=n(33),T=a(b),M=n(34),C=a(M),R={classical:o.default,country:l.default,talks:s.default,sport:d.default,jazz:p.default,chillout:_.default,lounge:E.default,rock:y.default,pop:O.default,piano:T.default,instrumental:C.default},w={getCategory:function(e){return R[e]||[]}};t.default=w},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Canada: Winnipeg Classic 107FM",src:"http://daemondef.ic.llnwd.net/stream/daemondef_ddmp3_74",siteUrl:"https://classic107.com"},{title:"Germany: Hamburg Klassik Radio",src:"http://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087"},{title:"Italy: Venice Classic",src:"http://109.123.116.202:8020/stream/1/"},{title:"Netherland: NPO Radio 4",src:"http://icecast.omroep.nl/radio4-bb-mp3"},{title:"Swiss: Basel Radio Classic",src:"http://streaming.swisstxt.ch/m/rsc_de/mp3_128"},{title:"Swiss: 1.FM Otto's Opera House",src:"http://strm112.1.fm/opera_mobile_mp3"},{title:"Swissradio.ch Classical",src:"http://relay.publicdomainproject.org/classical.mp3"},{title:"UK: BBC 3 Radio",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p"},{title:"UK: Davide of MIMIC Classical",src:"http://uk3.internet-radio.com:8060/;stream",siteUrl:"http://meetinginmusic.blogspot.com "},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org/"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Country",src:"http://50.7.70.58:8708/;/;5348241552822155stream.nsv"},{title:"USA: Country Hits",src:"http://19763.live.streamtheworld.com/977_COUNTRY.mp3"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"http://kexp.org/"},{title:"Santa Monica, California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com/"},{title:"Portland, Oregon: XRAY.FM KXRY 107.1 FM",src:"http://listen.xray.fm:8000/stream",siteUrl:"https://xray.fm/"},{title:"BBC Radio Wales 103.9 Cardiff",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p",siteUrl:"http://www.bbc.co.uk/radiowales"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Bristol: ESPN Radio",src:"http://edge.espn.cdn.abacast.net/espn-networkmp3-48",siteUrl:"http://www.espn.com/espnradio/"},{title:"UK: talkSPORT",src:"http://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"http://talksport.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Florida Smooth Jazz",src:"http://us4.internet-radio.com:8266/;stream",siteUrl:"http://www.SmoothJazzFlorida.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Spain: Costa Del Mar - Chillout",src:"http://stream.cdm-chillout.com:8020/stream-mp3-Chill",siteUrl:"http://www.costadelmar-radio.com"},{title:"Swiss: 1.FM Chillout Lounge Radio",src:"http://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"http://www.1.fm/"},{title:"USA: 181.fm - Chilled",src:"http://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"http://www.181.fm/"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"France: ABC Lounge",src:"http://centauri.shoutca.st:8686/stream/1/"},{title:"Italy: Milano Lounge",src:"http://antares.dribb.com:5080/autodj",siteUrl:"https://www.milanolounge.net/"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Florida Classic Rock",src:"http://us4.internet-radio.com:8258/;stream",siteUrl:"http://www.classicrockflorida.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"UK: BBC Media",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q"},{title:"UK: Dance",src:"http://uk7.internet-radio.com:8226/;stream"},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac"},{title:"Swiss: Zug Absolute Top 40",src:"http://strm112.1.fm/top40_mobile_mp3"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"USA: Eugene: Whisperings Solo Piano",src:"http://pianosolo.streamguys.net/live",siteUrl:"https://www.solopianoradio.com"},{title:"USA: Matt Johnson Radio ",src:"http://us2.internet-radio.com:8046/;stream",siteUrl:"https://www.mattjohnsonmusic.com"}];t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{title:"Music Lake",src:"http://50.7.68.251:7168/;stream/1",siteUrl:"http://musiclake.com/"},{title:"Instrumental Radio ",src:"http://178.32.62.163:8599/;stream/1",siteUrl:"http://www.instrumentalradio.eu"},{title:"USA: GotRadio Guitar Genius",src:"http://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"http://www.gotradio.com/"},{title:"USA: Instrumental Hits Radio",src:"http://149.56.195.94:8453/stream",siteUrl:"http://instrumentalhitsradio.com"}];t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(36),l=a(u),i=function(e){var t=e.isPlaying,n=e.onPlay,a=e.onPause;return o.default.createElement("div",null,o.default.createElement(l.default,{isPlaying:t,onPlay:n,onStop:a}))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(7),l=a(u),i=o.default.createElement("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),s=o.default.createElement(r.Fragment,null,o.default.createElement("path",{d:"M11.5 10h3v13h-3v-13z"}),o.default.createElement("path",{d:"M17.5 10h3v13h-3v-13z"})),c=function(e){var t=e.isPlaying,n=e.onPlay,a=e.onStop,r=t?a:n,u=t?s:i,c=t?"s":"p";return o.default.createElement(l.default,{accessKey:c,onClick:r},u)};t.default=c},function(e,t,n){e.exports={default:n(38),__esModule:!0}},function(e,t,n){n(39),e.exports=n(48).Object.assign},function(e,t,n){var a=n(40);a(a.S+a.F,"Object",{assign:n(41)})},function(e,t,n){e.exports=n(1)(11)},function(e,t,n){"use strict";var a=n(42),r=n(43),o=n(44),u=n(45),l=n(46),i=Object.assign;e.exports=!i||n(47)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=i({},e)[n]||Object.keys(i({},t)).join("")!=a})?function(e,t){for(var n=u(e),i=arguments.length,s=1,c=r.f,d=o.f;i>s;)for(var f,p=l(arguments[s++]),m=c?a(p).concat(c(p)):a(p),_=m.length,v=0;_>v;)d.call(p,f=m[v++])&&(n[f]=p[f]);return n}:i},function(e,t,n){e.exports=n(1)(25)},function(e,t,n){e.exports=n(1)(60)},function(e,t,n){e.exports=n(1)(37)},function(e,t,n){e.exports=n(1)(46)},function(e,t,n){e.exports=n(1)(74)},function(e,t,n){e.exports=n(1)(16)},function(e,t,n){e.exports=n(1)(0)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(4),l=a(u),i=n(0),s=a(i),c=n(50),d=a(c),f=n(51),p=a(f),m=n(52),_=a(m),v=n(53),E=a(v),h=n(54),y=a(h),g=n(55),O=a(g),b={ROW:{height:35,transition:"height 0.3s ease-out"},SLIDER:{display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},VOLUME:{position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},GAP:{display:"inline-block",width:12}},T={NEAR_MAX:.8,NEAR_MIN:.2},M=function(e){return"number"==typeof e&&Number.isFinite(e)},C=function(e){return M(e)?Math.round(100*e):""},R=function(e,t){return{onMouseDown:e,onMouseUp:t,onTouchStart:e,onTouchEnd:t}},w=function(e){var t=e.volume,n=e.setVolume,a=e.onIncrease,r=e.onDecrease,u=function(e){return e>T.NEAR_MAX},c=function(e){return e<T.NEAR_MIN},f=(0,d.default)(a,u,t),m=(0,l.default)(f,2),v=m[0],h=m[1],g=(0,d.default)(r,c,t),M=(0,l.default)(g,2),w=M[0],A=M[1],P=function(){0!==t&&w()},N=function(){100!==t&&v()},S=R(P,A),I=R(N,h);return(0,i.useEffect)(function(){0===t&&A(),100===t&&h()}),s.default.createElement("div",{id:"volume",style:b.ROW},s.default.createElement("div",{style:b.VOLUME},C(t)),s.default.createElement(_.default,{style:b.SLIDER,initValue:t,onChange:n}),s.default.createElement(E.default,(0,o.default)({accessKey:"-"},S,{onClick:r})),s.default.createElement("div",{style:b.GAP}),s.default.createElement(y.default,(0,o.default)({accessKey:"+"},I,{onClick:a})),s.default.createElement(O.default,{categories:p.default}))};t.default=s.default.memo(w)},function(e,t,n){"use strict";function a(e,t,n){var a=(0,r.useRef)(),u=(0,r.useRef)();u.current=n;var l=function(){return clearInterval(a.current)};return[function(){a.current=setInterval(function(){t(u.current)?(l(),a.current=setInterval(e,o.L2)):e()},o.L1)},l]}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={L1:150,L2:500};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=["chillout","classical","country","instrumental","jazz","lounge","piano","pop","rock","sport","talks"];t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o,u=n(2),l=a(u),i=n(8),s=a(i),c=n(9),d=a(c),f=n(10),p=a(f),m=n(11),_=a(m),v=n(0),E=a(v),h={ROOT:{userSelect:"none",cursor:"default",height:"18px",width:"100%",position:"relative",marginTop:"8px",marginBottom:"8px"},ROOT_LINE:{position:"absolute",top:"8px",left:"0px",width:"100%",height:"2px"},LINE_BEFORE:{position:"absolute",height:"100%",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",left:"0px",backgroundColor:"rgb(0, 188, 212)",marginRight:"6px",width:"calc(15%)"},LINE_AFTER:{position:"absolute",height:"100%",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",right:"0px",backgroundColor:"rgb(189, 189, 189)",marginLeft:"6px",width:"calc(85%)"},LINE_HOVERED:{backgroundColor:"rgb(158, 158, 158)"},ROOT_CIRCLE:{boxSizing:"borderBox",position:"absolute",cursor:"pointer",pointerEvents:"inherit",top:"0px",left:"15%",zIndex:"1",margin:"1px 0px 0px",width:"12px",height:"12px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},CIRCLE_DRAGGED:{width:"20px",height:"20px "},CIRCLE_INNER:{position:"absolute",overflow:"visible",height:"12px",width:"12px",top:"0px",left:"0px"},CIRCLE_INNER_EL:{position:"absolute",height:"36px",width:"300%",borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",top:"-12px",left:"-12px",transform:"scale(1)"},EMBER:{top:"-12px",left:"-12px",height:"44px",width:"220%",border:"1px solid #4caf50"}},y=function(e,t){return e=+e,t=+t,isNaN(e)||"number"!=typeof t||t%1!=0?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t)))},g=function(e,t,n){return n?y(e+t,n):e+t},O=function(e,t,n){var a=(e-t)/(n-t);return Number.isNaN(a)?0:100*a},b=function(e){return{width:"calc("+e+"%)"}},T=function(e){return{left:e+"%"}},M=(o=r=function(e){function t(e){(0,s.default)(this,t);var n=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n._hMouseEnter=function(){n.setState({hovered:!0})},n._hMouseLeave=function(){n.setState({hovered:!1})},n._hMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",n._hDragMouseMove),document.addEventListener("mouseup",n._hDragMouseUp),n.setState({dragged:!0})},n._hDragMouseMove=function(e){n._onDragUpdate(e)},n._hDragMouseUp=function(){document.removeEventListener("mousemove",n._hDragMouseMove),document.removeEventListener("mouseup",n._hDragMouseUp),n.setState({dragged:!1})},n._hFocusTrack=function(){n.setState({hovered:!0})},n._hBlurTrack=function(){n.setState({hovered:!1})},n._hKeyDownTrack=function(e){switch(e.keyCode){case 37:var t=n.props,a=t.min,r=t.step,o=n.state.value;if(o>a){var u=g(o,-r,n.stepExp);n._setValue(e,u)}break;case 39:var l=n.props,i=l.max,s=l.step,c=n.state.value;if(c<i){var d=g(c,s,n.stepExp);n._setValue(e,d)}break;default:return}},n._onDragUpdate=function(e){n.dragRunning||(n.dragRunning=!0,requestAnimationFrame(function(){n.dragRunning=!1;var t=e.clientX-n._calcTrackOffset();n._setValueFromPosition(e,t)}))},n._setValue=function(e,t){n.setState({value:t}),n.isOnChange&&n.props.onChange(t)},n._calcTrackOffset=function(){return n.trackComp.getBoundingClientRect().left},n._setValueFromPosition=function(e,t){var a=n.trackComp.clientWidth;t<0?t=0:t>a&&(t=a);var r=n.props,o=r.step,u=r.min,l=r.max,i=void 0;i=t/a*(l-u),i=Math.round(i/o)*o+u,i=parseFloat(i.toFixed(5)),i>l?i=l:i<u&&(i=u),n.state.value!==i&&n._setValue(e,i)},n._refTrackComp=function(e){return n.trackComp=e},n.isOnChange="function"==typeof e.onChange;var a=(""+e.step).split(".");return n.stepExp=a[1]?-1*a[1].length:0,n.state={hovered:!1,dragged:!1,value:e.initValue},n}return(0,_.default)(t,e),(0,d.default)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({value:e.initValue})}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.min,a=e.max,r=e.style,o=this.state,u=o.hovered,i=o.dragged,s=o.value,c=u?(0,l.default)({},h.LINE_AFTER,h.LINE_HOVERED):h.LINE_AFTER,d=i?h.CIRCLE_DRAGGED:null,f=i?h.EMBER:null,p=u||i?E.default.createElement("div",{style:(0,l.default)({},h.CIRCLE_INNER_EL,f)}):null,m=O(s,n,a),_=b(m),v=b(100-m),y=T(m);return E.default.createElement("div",{style:(0,l.default)({},h.ROOT,r),role:"slider","aria-valuemax":a,"aria-valuemin":n,"aria-valuenow":s,tabIndex:"0",onMouseDown:this._hMouseDown,onMouseEnter:this._hMouseEnter,onMouseLeave:this._hMouseLeave},E.default.createElement("div",{ref:this._refTrackComp,tabIndex:"0",role:"button",style:h.ROOT_LINE,onKeyDown:this._hKeyDownTrack,onFocus:this._hFocusTrack,onBlur:this._hBlurTrack},E.default.createElement("div",{style:(0,l.default)({},h.LINE_BEFORE,_)}),E.default.createElement("div",{style:(0,l.default)({},c,v)}),E.default.createElement("div",{style:(0,l.default)({},h.ROOT_CIRCLE,d,y)},E.default.createElement("div",{style:(0,l.default)({},h.CIRCLE_INNER,d)},p)),E.default.createElement("input",{type:"hidden",step:t,min:n,max:a,value:s,required:!0})))}},{key:"setValue",value:function(e){this.setState({value:e})}}]),t}(v.Component),r.defaultProps={initValue:1,min:0,max:1,step:.05},o);t.default=M},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(7),l=a(u),i=function(e){return o.default.createElement(l.default,e,o.default.createElement("path",{d:"M8 16 H24",strokeWidth:"3"}))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(7),l=a(u),i=function(e){return o.default.createElement(l.default,e,o.default.createElement("path",{d:"M8 16 H24",strokeWidth:"3"}),o.default.createElement("path",{d:"M16 8 V24",strokeWidth:"3"}))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(56),l=a(u),i=n(57),s=a(i),c=function(e){return o.default.createElement(l.default,null,o.default.createElement(s.default,e))};t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(8),l=a(u),i=n(9),s=a(i),c=n(10),d=a(c),f=n(11),p=a(f),m=n(0),_=a(m),v=n(3),E=n(14),h=n(15),y=a(h),g=n(6),O=a(g),b={DRAWER_BT:"drawer-bt",DRAWER_SPAN:"drawer-span",DRAWER_SVG:"drawer-svg",DRAWER:"drawer",DRAWER_MODAL:"drawer-modal"},T={BT_DRAWER:{position:"absolute",top:8,right:18},DRAWER_OFF:{transform:"translateX(264px)",pointerEvents:"none"},DRAWER_ON:{transform:"translate(0px, 0px)"},MODAL_OFF:{display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},MODAL_ON:{display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}},M=function(e){function t(){var e,n,a,r;(0,l.default)(this,t);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return n=a=(0,d.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={isOpen:!1},a._hTransitionEnd=function(){a.state.isOpen||(a._wrapperNode.style.display="none")},a._setBodyOverflowY=function(){var e=a.state.isOpen;document.body.style.overflowY=e?"hidden":"auto"},a._hToggle=function(){a.state.isOpen||(a._wrapperNode.style.display="block"),a.setState(function(e){return{isOpen:!e.isOpen}},a._setBodyOverflowY)},a._refAside=function(e){return a._asideNode=e},a._refWrapper=function(e){return a._wrapperNode=e},r=n,(0,d.default)(a,r)}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){O.default.TRANSITION&&this._asideNode.addEventListener("transitionend",this._hTransitionEnd)}},{key:"componentWillUnmount",value:function(){O.default.TRANSITION&&this._asideNode.removeEventListener("transitionend",this._hTransitionEnd)}},{key:"render",value:function(){var e=this.props,t=e.uiTheme,n=e.btStyle,a=e.children,r=this.state.isOpen,u=(0,o.default)({},r?T.DRAWER_ON:T.DRAWER_OFF,y.default.toBg(t)),l=r?T.MODAL_ON:T.MODAL_OFF,i=r?this._hToggle:void 0;return[_.default.createElement("button",{key:"bt-drawer",className:b.DRAWER_BT,style:(0,o.default)({},T.BT_DRAWER,n),"aria-label":"Open Drawer",onClick:this._hToggle},_.default.createElement("span",{className:b.DRAWER_SPAN},_.default.createElement("svg",{className:b.DRAWER_SVG,focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},_.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),_.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))),_.default.createElement("div",{key:"wrapper","aria-hidden":!r,className:b.DRAWER_MODAL,style:l,onClick:i}),_.default.createElement("aside",{ref:this._refAside,key:"aside",className:b.DRAWER,style:u},_.default.createElement("div",{ref:this._refWrapper},_.default.cloneElement(a,{onCloseDrawer:this._hToggle})))]}}]),t}(m.Component),C=function(e){return{uiTheme:E.sApp.uiTheme(e)}};t.default=(0,v.connect)(C,null)(M)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(3),l=n(12),i=n(58),s=a(i),c=n(59),d=a(c),f=n(60),p=a(f),m=n(16),_=a(m),v=function(e){var t=e.setUiTheme,n=e.onCloseDrawer,a=e.categories;return o.default.createElement("div",{className:_.default.CL_ROOT},o.default.createElement("div",{className:_.default.CL_HEADER},o.default.createElement(d.default,{style:_.default.BT_TRIPLE,oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:t}),o.default.createElement(s.default,{style:_.default.BT_CLOSE,onClick:n})),o.default.createElement(p.default,{categories:a}))},E={setUiTheme:l.setUiTheme};t.default=(0,u.connect)(null,E)(v)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={COLOR:"#f44336",SVG:{padding:3}},u=function(e){var t=e.style,n=e.tabIndex,a=void 0===n?-1:n,u=e.onClick;return r.default.createElement("button",{className:"svg-close",style:t,tabIndex:a,onClick:u},r.default.createElement("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:o.SVG,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:o.COLOR,strokeLinecap:"round"},r.default.createElement("path",{d:"M 0,0 L 12,12"}),r.default.createElement("path",{d:"M 12,0 L 0,12"})))};t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=a(r),u=n(0),l=a(u),i={BT:"bt-triple",BT_ONE:"bt-triple__one",BT_TWO:"bt-triple__two",BT_THREE:"bt-triple__three"},s={SELECTED:{backgroundColor:"#1b2836"}},c=function(e,t){return e===t?s.SELECTED:void 0},d=function(e){var t=e.style,n=e.tabIndex,a=e.initialValue,r=e.oneC,s=e.twoC,d=e.threeC,f=e.onClick,p=(0,u.useState)(a),m=(0,o.default)(p,2),_=m[0],v=m[1],E=c(_,1),h=c(_,2),y=c(_,3),g=function(e){f(e),v(e)};return l.default.createElement("div",{className:i.BT,style:t},l.default.createElement("button",{className:i.BT_ONE,style:E,tabIndex:n,onClick:g.bind(null,1)},r),l.default.createElement("button",{className:i.BT_TWO,style:h,tabIndex:n,onClick:g.bind(null,2)},s),l.default.createElement("button",{className:i.BT_THREE,style:y,tabIndex:n,onClick:g.bind(null,3)},d))};d.defaultProps={tabIndex:-1,initialValue:1,oneC:"One",twoC:"Two",threeC:"Three"},t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(3),l=n(5),i=n(61),s=a(i),c=n(62),d=a(c),f=n(16),p=a(f),m=function(e){var t=e.categories,n=e.isCategories,a=e.addCategory,r=e.removeCategory;return o.default.createElement("ul",{style:p.default.UL},t.map(function(e){var t=n[e];return o.default.createElement("li",{key:e},o.default.createElement(d.default,{className:p.default.CL_BT,caption:e,onClick:t?function(){return r(e)}:function(){return a(e)}},t&&o.default.createElement(s.default,null)))}))},_=function(e){return{isCategories:e.categories}},v={addCategory:l.addCategory,removeCategory:l.removeCategory};t.default=(0,u.connect)(_,v)(m)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(0),l=a(u),i={display:"inline-block",width:16,height:16},s=function(e){var t=e.style,n=e.color;return l.default.createElement("span",{style:(0,o.default)({},i,t)},l.default.createElement("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},l.default.createElement("path",{d:"M 2,5 L 8,14 14,1",stroke:n,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})))};s.defaultProps={color:"#64e346"},t.default=s},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,o,u=n(2),l=a(u),i=n(8),s=a(i),c=n(9),d=a(c),f=n(10),p=a(f),m=n(11),_=a(m),v=n(0),E=a(v),h=n(63),y=a(h),g={BT:"bt-flat",BT_DIV:"bt-flat__div",BT_SPAN:"bt-flat__span"},O={PRIMARY:{color:"#607d8b"}},b="pointer-events",T=(o=r=function(e){function t(){var e,n,a,r;(0,s.default)(this,t);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=a=(0,p.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a._setPointerEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";a&&a.rootNode&&a.rootNode.style&&(a.rootNode.style[b]=e)},a._hClick=function(e){a._setPointerEvents("none");var t=a.props,n=t.timeout,r=t.onClick;setTimeout(a._setPointerEvents,n),r(e)},a._refNode=function(e){return a.rootNode=e},r=n,(0,p.default)(a,r)}return(0,_.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.rootStyle,a=e.clDiv,r=void 0===a?g.BT_DIV:a,o=e.clCaption,u=e.isPrimary,i=e.title,s=void 0===i?"":i,c=e.caption,d=e.accessKey,f=e.children,p=u?(0,l.default)({},n,O.PRIMARY):n,m=t?g.BT+" "+t:g.BT,_=o?g.BT_SPAN+" "+o:g.BT_SPAN,v=d?s+" ["+d+"]":s;return E.default.createElement("button",{ref:this._refNode,className:m,style:p,accessKey:d,tabIndex:0,title:v,onClick:this._hClick},E.default.createElement("div",{className:r},E.default.createElement(y.default,{className:_,caption:c,accessKey:d}),f))}},{key:"focus",value:function(){this.rootNode.focus()}}]),t}(v.Component),r.defaultProps={timeout:500},o);t.default=T},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={KEY:{textDecoration:"underline"}},u=function(e){var t=e.className,n=e.rootStyle,a=e.caption,u=void 0===a?"":a,l=e.accessKey,i=e.children,s=u.toLowerCase().indexOf(l);if(l&&-1!==s){var c=u.substring(0,s),d=u.substring(s,s+1),f=u.substring(s+1);return r.default.createElement("span",{className:t,style:n},r.default.createElement("span",null,c),r.default.createElement("span",{style:o.KEY},d),r.default.createElement("span",null,f),i)}return r.default.createElement("span",{className:t,style:n},u,i)};t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(6),l=a(u),i={LIST:"item-list",ITEM:"item-station",ACCESS_KEY:"item-station__access"},s=function(e){return e<6&&0!==e?e:void 0},c=function(e){var t=e.radioStations,n=e.onClick;return o.default.createElement("div",{className:i.LIST},t.map(function(e,t){var a=l.default.TOUCH?void 0:s(t);return o.default.createElement("button",{className:i.ITEM,key:e.title,accessKey:a,onClick:n.bind(null,e,t)},o.default.createElement("span",null,e.title),Boolean(a)&&o.default.createElement("span",{className:i.ACCESS_KEY},a))}))};t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=a(r),u=n(0),l=a(u),i=n(3),s=n(14),c=n(15),d=a(c),f=n(6),p=a(f),m=n(66),_=a(m),v=n(13),E=a(v),h=n(68),y=a(h),g=n(69),O=a(g),b=n(70),T=a(b),M=T.default.A,C="Radio Player v0.1.0",R={PLAYER:"audio-player"},w={TITLE_CONT:{display:"flex",alignItems:"center"}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p.default.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:C,artist:e}))},P={msgErr:"",title:C,isUnloaded:!0,isPlaying:!1,volume:_.default.INIT_VOLUME},N=function(e){var t=e.uiTheme,n=e.station,a=(0,u.useReducer)(T.default,P),r=(0,o.default)(a,2),i=r[0],s=r[1],c=i.isUnloaded,f=i.isPlaying,m=i.volume,v=i.title,h=i.msgErr,g=(0,u.useCallback)(function(e){return s({type:M.SET_VOLUME,volume:_.default.setVolume(e)})},[]),b=(0,u.useCallback)(function(){return s({type:M.SET_VOLUME,volume:_.default.increaseVolume(.01)})},[]),N=(0,u.useCallback)(function(){return s({type:M.SET_VOLUME,volume:_.default.decreaseVolume(.01)})},[]),S=function(){!h&&_.default.play()?(s({type:M.SET_PLAYING}),A(n&&n.title||C)):(s({type:M.SET_TITLE,title:"At first, please, choose a radio station."}),A())},I=function(){_.default.stop(),s({type:M.PAUSE})},k=function(){_.default.unload(),s({type:M.UNLOAD}),A()},L=(0,u.useCallback)(function(){_.default.stop(),_.default.unload(),s({type:M.STOP})},[]),x=function(e){s({type:M.SET_ERROR,msgErr:e}),A()};(0,u.useEffect)(function(){p.default.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",L)},[]),(0,u.useEffect)(function(){return n&&n.src&&_.default.init(n.src,x.bind(null,"Load Error"),x.bind(null,"Play Error"))&&s({type:M.SET_LOADING}),function(){_.default.unload()}},[n]);var U=d.default.toBg(t);return l.default.createElement("div",{className:R.PLAYER,style:U},l.default.createElement(E.default.Volume,{volume:m,setVolume:g,onIncrease:b,onDecrease:N}),l.default.createElement("div",{style:w.TITLE_CONT},l.default.createElement(E.default.Command,{isPlaying:f,onPlay:S,onPause:I}),l.default.createElement(y.default,{station:n,msgErr:h,title:v}),l.default.createElement(O.default,{isPlaying:f,isUnloaded:c,unload:k})))},S=function(e){return{uiTheme:s.sApp.uiTheme(e)}};t.default=(0,i.connect)(S,null)(N)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(67),u=function(e){return parseFloat(e.toFixed(2))},l=void 0,i={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},s=!0,c={INIT_VOLUME:.2,checkInitVolume:function(){s&&(o.Howler.volume(c.INIT_VOLUME),s=!1)},getVolume:function(){return o.Howler.volume()},unload:function(){l&&(l.unload(),l.off())},init:function(e,t,n){try{c.checkInitVolume();var a=o.Howler.volume();return c.unload(),l=new o.Howl((0,r.default)({},i,{src:e,onloaderror:t,onplayerror:n})),o.Howler.volume(a),!0}catch(e){return l=null,console.log(e.message),!1}},play:function(){return!!l&&(l.play(),!0)},stop:function(){l&&l.stop()},setVolume:function(e){return o.Howler.volume(u(e)),e},increaseVolume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05;c.checkInitVolume();var t=u(o.Howler.volume()+e);return t<=1&&o.Howler.volume(t),o.Howler.volume()},decreaseVolume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05;c.checkInitVolume();var t=u(o.Howler.volume()-e);return t>=0&&o.Howler.volume(t),o.Howler.volume()}};t.default=c},function(e,t,n){e.exports=n(1)(110)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={TITLE:"audio__title",ERR:"audio__title audio__title--err"},u=function(e){var t=e.station,n=e.msgErr,a=e.title,u=t&&t.title||"",l=n?n+" "+u:u||a,i=n?o.ERR:o.TITLE;return r.default.createElement("div",{className:i},l)};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={EQUALIZER:"equalizer",EQUALIZER_NOT_PLAYING:"equalizer--not-playing"},u=function(e){var t=e.isPlaying,n=e.isUnloaded,a=e.unload;return t?r.default.createElement("div",{className:o.EQUALIZER}):n?r.default.createElement("div",{className:o.EQUALIZER_NOT_PLAYING}):r.default.createElement("button",{className:o.EQUALIZER_NOT_PLAYING,"data-loader":"circle",onClick:a})};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},u=function(e,t){switch(t.type){case o.SET_LOADING:return(0,r.default)({},e,{isUnloaded:!1,isPlaying:!1,msgErr:""});case o.SET_PLAYING:return(0,r.default)({},e,{isPlaying:!0,isUnloaded:!1});case o.PAUSE:return(0,r.default)({},e,{isPlaying:!1});case o.UNLOAD:return(0,r.default)({},e,{isUnloaded:!0});case o.STOP:return(0,r.default)({},e,{isPlaying:!1,isUnloaded:!0});case o.SET_VOLUME:return(0,r.default)({},e,{volume:t.volume});case o.SET_TITLE:return(0,r.default)({},e,{title:t.title});case o.SET_ERROR:return(0,r.default)({},e,{msgErr:t.msgErr,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+t.type)}};u.A=o,t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=a(r),u=n(18),l=n(72),i=a(l),s=n(19),c=a(s),d=n(76),f=a(d),p=[].concat((0,o.default)(f.default)),m=u.compose,_=(0,u.createStore)(i.default,function(){return c.default}(),m(u.applyMiddleware.apply(void 0,(0,o.default)(p))));t.default=_},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),o=n(73),u=a(o),l=n(74),i=a(l),s=n(75),c=a(s),d=(0,r.combineReducers)({app:u.default,stations:i.default,categories:c.default});t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(19),l=a(u),i=n(12),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.default.app,t=arguments[1];switch(t.type){case i.ACTION.SET_UI_THEME:var n=t.uiTheme;return e.uiTheme!==n?(0,o.default)({},e,{uiTheme:n}):e;default:return e}};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(5),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.ACTION.MOVE_TO_TOP:var n=t.index,a=t.station;return e.splice(n,1),e.unshift(a),[].concat((0,r.default)(e));case o.ACTION.ADD_CATEGORY:var u=t.categories;return[].concat((0,r.default)(u),(0,r.default)(e));case o.ACTION.REMOVE_CATEGORY:var l=t.category;return e.filter(function(e){return e.category!==l});default:return e}};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(5),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.ACTION.ADD_CATEGORY:return e[t.category]=!0,(0,r.default)({},e);case o.ACTION.REMOVE_CATEGORY:return e[t.category]=!1,(0,r.default)({},e);default:return e}};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(77),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=[r.default];t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),r={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"},o=function(e){return function(e){return function(t){if(t.type===a.ACTION.SET_UI_THEME){var n=t.uiTheme,o=r[n];document.body.style.backgroundColor=o}return e(t)}}};t.default=o}]);