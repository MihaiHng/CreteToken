"use strict";(self.webpackChunkfaucet_ui=self.webpackChunkfaucet_ui||[]).push([[858],{59858:function(e,t,a){a.r(t),a.d(t,{ccipRequest:function(){return E},offchainLookup:function(){return M},offchainLookupAbiItem:function(){return C},offchainLookupSignature:function(){return R}});var r=a(74165),n=a(29439),s=a(15861),c=a(80215),o=a(93433),u=a(43144),i=a(15671),l=a(97326),f=a(60136),d=a(29388),p=a(63476),b=a(80458),h=a(96781),k=function(e){(0,f.Z)(a,e);var t=(0,d.Z)(a);function a(e){var r,n,s=e.callbackSelector,c=e.cause,u=e.data,f=e.extraData,d=e.sender,p=e.urls;return(0,i.Z)(this,a),n=t.call(this,c.shortMessage||"An error occurred while fetching for an offchain result.",{cause:c,metaMessages:[].concat((0,o.Z)(c.metaMessages||[]),[null!==(r=c.metaMessages)&&void 0!==r&&r.length?"":[],"Offchain Gateway Call:",p&&["  Gateway URL(s):"].concat((0,o.Z)(p.map((function(e){return"    ".concat((0,h.Gr)(e))})))),"  Sender: ".concat(d),"  Data: ".concat(u),"  Callback selector: ".concat(s),"  Extra data: ".concat(f)]).flat()}),Object.defineProperty((0,l.Z)(n),"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"}),n}return(0,u.Z)(a)}(b.G),m=function(e){(0,f.Z)(a,e);var t=(0,d.Z)(a);function a(e){var r,n=e.result,s=e.url;return(0,i.Z)(this,a),r=t.call(this,"Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,h.Gr)(s)),"Response: ".concat((0,p.P)(n))]}),Object.defineProperty((0,l.Z)(r),"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"}),r}return(0,u.Z)(a)}(b.G),w=function(e){(0,f.Z)(a,e);var t=(0,d.Z)(a);function a(e){var r,n=e.sender,s=e.to;return(0,i.Z)(this,a),r=t.call(this,"Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(s),"OffchainLookup sender address: ".concat(n)]}),Object.defineProperty((0,l.Z)(r),"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"}),r}return(0,u.Z)(a)}(b.G),y=a(79144),v=a(22947),g=a(72883),Z=a(25543),x=a(32342);function O(e,t){if(!(0,x.U)(e,{strict:!1}))throw new Z.b({address:e});if(!(0,x.U)(t,{strict:!1}))throw new Z.b({address:t});return e.toLowerCase()===t.toLowerCase()}var L=a(30221),G=a(11071),R="0x556f1830",C={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};function M(e,t){return S.apply(this,arguments)}function S(){return(S=(0,s.Z)((0,r.Z)().mark((function e(t,a){var s,o,u,i,l,f,d,p,b,h,m,y,Z,x,G,R,M;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a.blockNumber,o=a.blockTag,u=a.data,i=a.to,l=(0,v.p)({data:u,abi:[C]}),f=l.args,d=(0,n.Z)(f,5),p=d[0],b=d[1],h=d[2],m=d[3],y=d[4],Z=t.ccipRead,x=Z&&"function"===typeof(null===Z||void 0===Z?void 0:Z.request)?Z.request:E,e.prev=5,O(i,p)){e.next=8;break}throw new w({sender:p,to:i});case 8:return e.next=10,x({data:h,sender:p,urls:b});case 10:return G=e.sent,e.next=13,(0,c.R)(t,{blockNumber:s,blockTag:o,data:(0,L.zo)([m,(0,g.E)([{type:"bytes"},{type:"bytes"}],[G,y])]),to:i});case 13:return R=e.sent,M=R.data,e.abrupt("return",M);case 18:throw e.prev=18,e.t0=e.catch(5),new k({callbackSelector:m,cause:e.t0,data:u,extraData:y,sender:p,urls:b});case 21:case"end":return e.stop()}}),e,null,[[5,18]])})))).apply(this,arguments)}function E(e){return P.apply(this,arguments)}function P(){return(P=(0,s.Z)((0,r.Z)().mark((function e(t){var a,n,s,c,o,u,i,l,f,d,b,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.data,n=t.sender,s=t.urls,c=new Error("An unknown error occurred."),o=0;case 3:if(!(o<s.length)){e.next=36;break}return u=s[o],i=u.includes("{data}")?"GET":"POST",l="POST"===i?{data:a,sender:n}:void 0,e.prev=7,e.next=10,fetch(u.replace("{sender}",n).replace("{data}",a),{body:JSON.stringify(l),method:i});case 10:if(d=e.sent,b=void 0,null===(f=d.headers.get("Content-Type"))||void 0===f||!f.startsWith("application/json")){e.next=18;break}return e.next=15,d.json();case 15:b=e.sent.data,e.next=21;break;case 18:return e.next=20,d.text();case 20:b=e.sent;case 21:if(d.ok){e.next=24;break}return c=new y.Gg({body:l,details:null!==(h=b)&&void 0!==h&&h.error?(0,p.P)(b.error):d.statusText,headers:d.headers,status:d.status,url:u}),e.abrupt("continue",33);case 24:if((0,G.v)(b)){e.next=27;break}return c=new m({result:b,url:u}),e.abrupt("continue",33);case 27:return e.abrupt("return",b);case 30:e.prev=30,e.t0=e.catch(7),c=new y.Gg({body:l,details:e.t0.message,url:u});case 33:o++,e.next=3;break;case 36:throw c;case 37:case"end":return e.stop()}}),e,null,[[7,30]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=858.71c20225.chunk.js.map