(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{147:function(e,t,a){"use strict";var n=a(17),l=a(20),c=a(122),i=a(0),o=a.n(i),s=a(16),r=a(27),u=a(150),m=a.n(u),d=a(118),b=a(119),p=a(209),_=function(e,t){switch(t.type){case"success":return Object(n.a)(Object(n.a)({},e),{},{positions:t.payload});case"error":return Object(n.a)(Object(n.a)({},e),{},{error:t.payload});default:throw new Error("Action not Found!")}},f=function(){var e,t=Object(i.useReducer)(_,{positions:null,error:null}),a=Object(c.a)(t,2),n=a[0],l=a[1];return Object(i.useEffect)((function(){return navigator.geolocation?e=navigator.geolocation.watchPosition((function(e){l({type:"success",payload:e.coords})}),(function(e){return l({type:"error",payload:e})})):l({type:"error",payload:"Browser not supported yet!"}),function(){navigator.geolocation.clearWatch(e)}}),[]),n},v={width:"100%",height:"500px"},h=Object(r.b)((function(e){var t=e.button,a=void 0!==t&&t,r=e.click,u=void 0!==r&&r,_=e.currentPos,h=void 0!==_&&_,y=Object(s.b)().sounterStore,E=f().positions,O=Object(i.useState)({}),g=Object(c.a)(O,2),j=g[0],N=g[1],S=Object(i.useState)(null),k=Object(c.a)(S,2),x=(k[0],k[1]),A=Object(i.useState)(null),C=Object(c.a)(A,2),F=C[0],w=C[1],P=Object(i.useState)(null),D=Object(c.a)(P,2),I=D[0],z=D[1],M=Object(i.useState)(),L=Object(c.a)(M,2),T=L[0],W=L[1],R=Object(i.useState)(0),G=Object(c.a)(R,2),K=G[0],U=G[1],H=Object(i.useState)({destination:"",origin:"",travelMode:"WALKING",waypoints:[],optimizeWaypoints:!0}),Y=Object(c.a)(H,2),Z=Y[0],J=Y[1],Q=Object(i.useState)({destinations:[],origins:[],travelMode:"WALKING",avoidHighways:!1,avoidTolls:!1}),X=Object(c.a)(Q,2),B=X[0],V=X[1];Object(i.useEffect)((function(){!function(){if(y.item){var e=y.item.markersArr;W(e)}else W([])}()}),[y.item]),Object(i.useEffect)((function(){u&&W([])}),[y.item]),Object(i.useEffect)((function(){E&&N({lat:null===E||void 0===E?void 0:E.latitude,lng:null===E||void 0===E?void 0:E.longitude})}),[E]),Object(i.useEffect)((function(){T&&T.length>1&&(ne(T),ce(T),y.setUserMarkers(T))}),[T]),Object(i.useEffect)((function(){q()}),[I]),Object(i.useEffect)((function(){K>0&&y.setDistance(K)}),[K,y]);var q=function(){var e,t,a=0;null!==I&&(null===I||void 0===I||null===(e=I.rows[0])||void 0===e||null===(t=e.elements)||void 0===t||t.map((function(e){var t;return a+=null===(t=e.distance)||void 0===t?void 0:t.value})),U(a))},$=Object(p.f)({id:"myprojectrealsoft",googleMapsApiKey:"AIzaSyARFt_e8aIQbS3evmvme0k4dInWVus72gw"}).isLoaded,ee=Object(i.useCallback)((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),x(e)}),[]),te=Object(i.useCallback)((function(e){x(null)}),[]),ae=Object(i.useCallback)((function(e){null!==e&&"OK"===e.status&&w(e)}),[]),ne=function(e){var t=e.map((function(e){return{location:{lat:e.lat,lng:e.lng},stopover:!0}})),a=t.shift().location,l=t.pop().location;J(Object(n.a)(Object(n.a)({},Z),{},{waypoints:t,origin:a,destination:l}))},le=Object(i.useCallback)((function(e){if(null!==e){var t=!1;e.rows[0].elements.forEach((function(e){t="OK"===e.status})),t&&z(e)}}),[]),ce=function(e){var t=[e[0]],a=e;V(Object(n.a)(Object(n.a)({},B),{},{origins:t,destinations:a}))};return o.a.createElement("div",{className:m.a.container},a&&o.a.createElement("button",{type:"button",className:m.a.addMarker,onClick:function(){N({lat:null===E||void 0===E?void 0:E.latitude,lng:null===E||void 0===E?void 0:E.longitude})}},o.a.createElement(d.a,{icon:b.e,color:"grey",size:"1x",className:m.a.btnIcon}),"Add current position"),o.a.createElement("div",{className:m.a.containerStyle},$?o.a.createElement(p.d,{mapContainerStyle:v,center:j,zoom:100,onLoad:ee,onUnmount:te,onClick:u?function(){var e=arguments.length<=0?void 0:arguments[0],t=e.latLng.lat(),a=e.latLng.lng(),n=[].concat(Object(l.a)(T),[{lat:t,lng:a}]);W(n)}:function(){}},h&&o.a.createElement(p.e,{label:"currentPosition",position:j,draggable:!1}),T&&o.a.createElement(p.b,{options:Z,callback:ae}),o.a.createElement(p.c,{options:B,callback:le}),T&&T.length>1?o.a.createElement(p.a,{options:{directions:F}}):null):null))}));t.a=o.a.memo(h)},150:function(e,t,a){e.exports={container:"styles_container__3bhCi",addMarker:"styles_addMarker__361ni",btnIcon:"styles_btnIcon__3IJzP",containerStyle:"styles_containerStyle__1LqZr"}},229:function(e,t,a){e.exports={container:"styles_container__PrO8Q",title:"styles_title__6XpeJ",buttonAddPath:"styles_buttonAddPath__1NGWi"}},230:function(e,t,a){e.exports={modal:"styles_modal__3PiYq"}},237:function(e,t,a){e.exports={container:"styles_container__11gLu",leftSide:"styles_leftSide__2nkHC",label:"styles_label__1wtzo",input:"styles_input__1HQL2",inputFullDescription:"styles_inputFullDescription__2MHe4",lengthContainer:"styles_lengthContainer__3jZRm",length:"styles_length__3ZzuV",buttonAddPath:"styles_buttonAddPath__asSoj",btnIcon:"styles_btnIcon__1nhtp",rigthSide:"styles_rigthSide__11S8a"}},377:function(e,t,a){e.exports={container:"styles_container__CWx5j",leftSide:"styles_leftSide__3oe5v",list:"styles_list__34pbh",rigthSide:"styles_rigthSide__1r3cu",icon:"styles_icon__1OHdb",pathContainer:"styles_pathContainer__10Ge2",pathWripper:"styles_pathWripper__1ypt5",title:"styles_title__3-dVI",distance:"styles_distance__3pOnZ",text:"styles_text__3iQX5",buttonAddToFavorites:"styles_buttonAddToFavorites__DR7AN",buttonRemove:"styles_buttonRemove__3uKsn",notPathYet:"styles_notPathYet__2fZ8X"}},378:function(e,t,a){e.exports={input:"styles_input__2IOXb"}},379:function(e,t,a){e.exports={item:"styles_item__WhTOh",icon:"styles_icon__3-6Mj",title:"styles_title__1thfg",text:"styles_text__3MKiO",distance:"styles_distance__OnAhF",buttonGetDirections:"styles_buttonGetDirections__1R-vk",itemActive:"styles_itemActive__2MWzE"}},394:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),i=a(27),o=a(229),s=a.n(o),r=a(118),u=a(119),m=a(230),d=a.n(m),b=a(393),p=Object(i.b)((function(e){var t=e.visible,a=e.children,n=Object(c.b)().sounterStore;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{title:"Add new path",className:d.a.modal,width:"1110px",visible:t,onOk:function(){n.setModal()},onCancel:function(){n.setModal()},footer:null},a))})),_=a(29),f=a(17),v=a(122),h=a(237),y=a.n(h),E=a(147),O=a(391),g=a(392),j=a(390),N=a(156),S=a(1),k=a(381).v4,x=Object(i.b)((function(){var e=Object(c.b)().sounterStore,t=e.distance,a=e.userArrMarkers,i=Object(n.useState)({title:"",shortDescription:"",fullDescription:"",id:null}),o=Object(v.a)(i,2),s=o[0],m=o[1],d=Object(n.useState)({title:"",shortDescription:"",fullDescription:"",id:null,distance:0,favorite:!1,markersArr:null}),b=Object(v.a)(d,2),p=b[0],h=b[1];Object(n.useEffect)((function(){!function(){var e=Object(f.a)(Object(f.a)({},s),{},{id:k(),distance:t,markersArr:Object(S.r)(a)});h(e)}()}),[s,t,a]);var x=function(e){var t=e.target,a=t.name,n=t.value;m((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(_.a)({},a,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:y.a.container},l.a.createElement("div",{className:y.a.leftSide},l.a.createElement(O.a,{name:"pathForm",onFinish:function(){e.addUserPath(p),m({title:"",shortDescription:"",fullDescription:"",id:null}),e.setDistance(0),e.setItem(null),e.setModal()},onFinishFailed:function(e){console.log("Failed:",e)}},l.a.createElement(O.a.Item,{label:"Title",name:"title",className:y.a.label}),l.a.createElement(g.a,{name:"title",value:s.title,placeholder:"Text input",className:y.a.input,onChange:x,minLength:5}),l.a.createElement(O.a.Item,{label:"Short description",className:y.a.label}),l.a.createElement(g.a.TextArea,{name:"shortDescription",value:s.shortDescription,placeholder:"Text area",className:y.a.input,maxLength:160,onChange:x}),l.a.createElement(j.a,{align:"middle",justify:"end"},"Limit ".concat(s.shortDescription.length," of ").concat(160)),l.a.createElement(O.a.Item,{label:"Full description",className:y.a.label}),l.a.createElement(g.a.TextArea,{name:"fullDescription",value:s.fullDescription,placeholder:"Text area",className:y.a.inputFullDescription,onChange:x}),l.a.createElement("div",{className:y.a.lengthContainer},l.a.createElement(r.a,{icon:u.d,color:"grey",size:"2x"}),l.a.createElement("p",{className:y.a.length},"Length ",(e.distance/1e3).toFixed(1)," km")),l.a.createElement(O.a.Item,null,l.a.createElement(N.a,{type:"primary",htmlType:"submit",className:y.a.buttonAddPath},l.a.createElement(r.a,{icon:u.c,color:"white",size:"1x",className:y.a.btnIcon}),"Add path")))),l.a.createElement("div",{className:y.a.rigthSide},l.a.createElement(E.a,{button:!0,click:!0,currentPos:!0}))))})),A=Object(i.b)((function(){var e=Object(c.b)().sounterStore;return l.a.createElement("div",{className:s.a.container},l.a.createElement(p,{visible:e.modal},l.a.createElement(x,null)),l.a.createElement("div",null,l.a.createElement(r.a,{icon:u.b,color:"grey",size:"2x"}),l.a.createElement("h2",{className:s.a.title},"Sounter")),l.a.createElement("button",{type:"button",className:s.a.buttonAddPath,onClick:function(){e.setModal()}},"AddPath"))})),C=a(377),F=a.n(C),w=a(4),P=a(378),D=a.n(P),I=g.a.Search,z=Object(w.c)((function(){var e=Object(c.b)().sounterStore,t=Object(n.useState)(""),a=Object(v.a)(t,2),i=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{placeholder:"Search...",allowClear:!0,size:"large",className:D.a.input,name:"filter",value:i,onChange:function(t){var a=t.target.value;o(a),e.getFilterUserPath(a)}}))})),M=a(379),L=a.n(M),T=a(97),W=a.n(T),R=Object(i.b)((function(e){var t,a=e.item,n=Object(c.b)().sounterStore,i=n.item;return l.a.createElement("li",{className:W()((t={},Object(_.a)(t,L.a.item,!0),Object(_.a)(t,L.a.itemActive,a.id===(null===i||void 0===i?void 0:i.id)),t)),onClick:function(){n.setItem(a)}},l.a.createElement(r.a,{icon:u.b,color:"grey",size:"2x",className:L.a.icon}),l.a.createElement("div",{className:L.a.container},a.favorite&&l.a.createElement(r.a,{icon:u.g,color:"yellow",size:"2x"}),l.a.createElement("h2",{className:L.a.title},a.title),l.a.createElement("p",{className:L.a.text},a.shortDescription)),l.a.createElement("p",{className:L.a.distance},(a.distance/1e3).toFixed(1)," km"),l.a.createElement("button",{type:"button",className:L.a.buttonGetDirections},l.a.createElement(r.a,{icon:u.a,color:"grey",size:"1x"})))})),G=Object(i.b)((function(){var e=Object(c.b)().sounterStore,t=e.item,a=e.filteredUserPath;return l.a.createElement("div",{className:F.a.container},l.a.createElement("div",{className:F.a.leftSide},l.a.createElement(z,null),l.a.createElement("ul",{className:F.a.list},a.length>0?a.map((function(e){return l.a.createElement(R,{item:e,key:e.id})})):l.a.createElement("h2",{className:F.a.notPathYet},"Not Path yet!"))),l.a.createElement("div",{className:F.a.rigthSide},t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:F.a.pathContainer},l.a.createElement("div",{className:F.a.pathWripper},l.a.createElement("h2",{className:F.a.title},t.title),l.a.createElement("p",{className:F.a.distance},(t.distance/1e3).toFixed(1)," km")),l.a.createElement("p",{className:F.a.text},t.shortDescription)),l.a.createElement(E.a,{key:t.id}),l.a.createElement("button",{className:F.a.buttonAddToFavorites,type:"button",onClick:function(){e.setFavorite()}},t.favorite?"Remuve from favorites":"Add to favorites"),l.a.createElement("button",{className:F.a.buttonRemove,type:"button",onClick:function(){return a=t.id,e.removeUserPath(a),void e.setItem(null);var a}},"Remove")):l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{icon:u.b,color:"rgb(31, 162, 250)",size:"10x",className:F.a.icon}),l.a.createElement("h2",{className:F.a.notPathYet},"Select any path!"))))})),K=Object(i.b)((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(G,null))}));t.default=K}}]);
//# sourceMappingURL=6.33a4204a.chunk.js.map