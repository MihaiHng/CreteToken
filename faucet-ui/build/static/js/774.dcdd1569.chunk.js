"use strict";(self.webpackChunkfaucet_ui=self.webpackChunkfaucet_ui||[]).push([[774],{85042:function(e,t,n){n.d(t,{AV:function(){return l},Ic:function(){return Y},Vs:function(){return ee},jb:function(){return z},t0:function(){return I},uA:function(){return h},uc:function(){return B},zb:function(){return m},zv:function(){return d}});var r=n(93433),o=n(37762),a=n(74165),s=n(15861),i=n(29439),c=n(61631),u=(0,c.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),l={state:u,subscribe:function(e){return(0,c.Ld)(u,(function(){return e(u)}))},push:function(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset:function(e){u.view=e,u.history=[e]},replace:function(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack:function(){if(u.history.length>1){u.history.pop();var e=u.history.slice(-1),t=(0,i.Z)(e,1)[0];u.view=t}},setData:function(e){u.data=e}},d={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return d.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return d.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(d.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!d.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},wait:function(e){return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){try{localStorage.setItem(d.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(n){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink:function(e){try{var t=e.split("?"),n=(0,i.Z)(t,1)[0];localStorage.setItem(d.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))}catch(r){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink:function(){try{localStorage.removeItem(d.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage:function(){try{typeof localStorage<"u"&&localStorage.setItem(d.WCM_VERSION,"2.6.2")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData:function(){var e,t=null==(e=l.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},f=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=(0,c.sj)({enabled:f,userSessionId:"",events:[],connectedWalletId:void 0}),h={state:p,subscribe:function(e){return(0,c.Ld)(p.events,(function(){return e((0,c.CO)(p.events[p.events.length-1]))}))},initialize:function(){p.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){p.connectedWalletId=e},click:function(e){if(p.enabled){var t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track:function(e){if(p.enabled){var t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view:function(e){if(p.enabled){var t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},v=(0,c.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),m={state:v,subscribe:function(e){return(0,c.Ld)(v,(function(){return e(v)}))},setChains:function(e){v.chains=e},setWalletConnectUri:function(e){v.walletConnectUri=e},setIsCustomDesktop:function(e){v.isCustomDesktop=e},setIsCustomMobile:function(e){v.isCustomMobile=e},setIsDataLoaded:function(e){v.isDataLoaded=e},setIsUiLoaded:function(e){v.isUiLoaded=e},setIsAuth:function(e){v.isAuth=e}},b=(0,c.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),I={state:b,subscribe:function(e){return(0,c.Ld)(b,(function(){return e(b)}))},setConfig:function(e){var t,n;h.initialize(),m.setChains(e.chains),m.setIsAuth(Boolean(e.enableAuthMode)),m.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),m.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),d.setModalVersionInStorage(),Object.assign(b,e)}},g=Object.defineProperty,w=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,W=function(e,t,n){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},L=function(e,t){for(var n in t||(t={}))y.call(t,n)&&W(e,n,t[n]);if(w){var r,a=(0,o.Z)(w(t));try{for(a.s();!(r=a.n()).done;){n=r.value;C.call(t,n)&&W(e,n,t[n])}}catch(s){a.e(s)}finally{a.f()}}return e},k="https://explorer-api.walletconnect.com",E="wcm",O="js-2.6.2";function j(e,t){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,a.Z)().mark((function e(t,n){var r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L({sdkType:E,sdkVersion:O},n),(o=new URL(t,k)).searchParams.append("projectId",I.state.projectId),Object.entries(r).forEach((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];r&&o.searchParams.append(n,String(r))})),e.next=5,fetch(o);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},U=function(e){return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},Z=function(e){return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},M=function(e){return"".concat(k,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(I.state.projectId,"&sdkType=").concat(E,"&sdkVersion=").concat(O)},D=function(e){return"".concat(k,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(I.state.projectId,"&sdkType=").concat(E,"&sdkVersion=").concat(O)},N=Object.defineProperty,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,_=function(e,t,n){return t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},R=function(e,t){for(var n in t||(t={}))T.call(t,n)&&_(e,n,t[n]);if(S){var r,a=(0,o.Z)(S(t));try{for(a.s();!(r=a.n()).done;){n=r.value;P.call(t,n)&&_(e,n,t[n])}}catch(s){a.e(s)}finally{a.f()}}return e},V=d.isMobile(),H=(0,c.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),B={state:H,getRecomendedWallets:function(){return(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r,o,s,i,c,u,l,f,p,h,v,b,g;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=I.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",H.recomendedWallets);case 3:if(!d.isArray(n)){e.next=13;break}return o={recommendedIds:n.join(",")},e.next=7,Z(o);case 7:s=e.sent,i=s.listings,(c=Object.values(i)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),H.recomendedWallets=c,e.next=31;break;case 13:if(u=m.state,l=u.chains,f=u.isAuth,p=null===l||void 0===l?void 0:l.join(","),h=d.isArray(r),v={page:1,sdks:f?"auth_v1":void 0,entries:d.RECOMMENDED_WALLET_AMOUNT,chains:p,version:2,excludedIds:h?r.join(","):void 0},!V){e.next=25;break}return e.next=22,U(v);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,A(v);case 27:e.t0=e.sent;case 28:b=e.t0,g=b.listings,H.recomendedWallets=Object.values(g);case 31:return e.abrupt("return",H.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,s.Z)((0,a.Z)().mark((function t(){var n,o,s,i,c,u,l,f,p,h,v,b;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=R({},e),o=I.state,s=o.explorerRecommendedWalletIds,i=o.explorerExcludedWalletIds,c=H.recomendedWallets,"ALL"!==i){t.next=3;break}return t.abrupt("return",H.wallets);case 3:if(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):d.isArray(s)&&(n.excludedIds=s.join(",")),d.isArray(i)&&(n.excludedIds=[n.excludedIds,i].filter(Boolean).join(",")),m.state.isAuth&&(n.sdks="auth_v1"),u=e.page,l=e.search,!V){t.next=12;break}return t.next=9,U(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,A(n);case 14:t.t0=t.sent;case 15:return f=t.t0,p=f.listings,h=f.total,v=Object.values(p),b=l?"search":"wallets",t.abrupt("return",(H[b]={listings:[].concat((0,r.Z)(H[b].listings),v),total:h,page:null!==u&&void 0!==u?u:1},{listings:v,total:h}));case 21:case"end":return t.stop()}}),t)})))()},getWalletImageUrl:function(e){return M(e)},getAssetImageUrl:function(e){return D(e)},resetSearch:function(){H.search={listings:[],total:0,page:1}}},K=(0,c.sj)({open:!1}),z={state:K,subscribe:function(e){return(0,c.Ld)(K,(function(){return e(K)}))},open:function(e){return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=m.state,r=n.isUiLoaded,o=n.isDataLoaded;if(d.removeWalletConnectDeepLink(),m.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),m.setChains(null===e||void 0===e?void 0:e.chains),l.reset("ConnectWallet"),r&&o)K.open=!0,t();else var a=setInterval((function(){var e=m.state;e.isUiLoaded&&e.isDataLoaded&&(clearInterval(a),K.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){K.open=!1}},J=Object.defineProperty,q=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,Q=function(e,t,n){return t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var X=(0,c.sj)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Y={state:X,subscribe:function(e){return(0,c.Ld)(X,(function(){return e(X)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(X.themeMode=t),n&&(X.themeVariables=function(e,t){for(var n in t||(t={}))F.call(t,n)&&Q(e,n,t[n]);if(q){var r,a=(0,o.Z)(q(t));try{for(a.s();!(r=a.n()).done;)n=r.value,G.call(t,n)&&Q(e,n,t[n])}catch(s){a.e(s)}finally{a.f()}}return e}({},n))}},$=(0,c.sj)({open:!1,message:"",variant:"success"}),ee={state:$,subscribe:function(e){return(0,c.Ld)($,(function(){return e($)}))},openToast:function(e,t){$.open=!0,$.message=e,$.variant=t},closeToast:function(){$.open=!1}}},774:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return c}});var r=n(74165),o=n(15861),a=n(15671),s=n(43144),i=n(85042),c=function(){function e(t){(0,a.Z)(this,e),this.openModal=i.jb.open,this.closeModal=i.jb.close,this.subscribeModal=i.jb.subscribe,this.setTheme=i.Ic.setThemeConfig,i.Ic.setThemeConfig(t),i.t0.setConfig(t),this.initUi()}return(0,s.Z)(e,[{key:"initUi",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,n.e(459).then(n.bind(n,3459));case 3:t=document.createElement("wcm-modal"),document.body.insertAdjacentElement("beforeend",t),i.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=774.dcdd1569.chunk.js.map