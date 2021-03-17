/*! For license information please see main.f54bc831.chunk.js.LICENSE.txt */
(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{45:function(e,i,t){e.exports=t(53)},50:function(e,i,t){},53:function(e,i,t){"use strict";t.r(i);var a,n,u,l,s,o,r,m=t(0),c=t.n(m),d=t(29),p=t.n(d),v=(t(50),t(33)),b=t(10),g=t(58),f=t(55),q=t(56),h=t(59),E=t(57),x=t(5);var M,j,I,y,w,C,N=Object(x.a)(g.a.div)(a||(a=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  zindex: 99999999;\n  background: rgba(0, 0, 0, 0.5);\n"]))),k=Object(x.a)(g.a.div)(n||(n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n"]))),D=x.a.div((function(e){var i=e.type,t=void 0===i?"straight":i;return'\n  width: 14px;\n  height: 10px;\n  margin: auto;\n  display: flex;\n  .bs-drag-handle-ic {\n    width: 14px;\n    position: relative;\n    display: block;\n    opacity: 0.2;\n    top: -5px;\n    transform: scale(0.8);\n\n    &::before,\n    &::after {\n      border-radius: 10px;\n      content: "";\n      position: absolute;\n      width: 3px;\n      height: 15px;\n      top: 50%;\n      transition: all 0.1s ease-in-out;\n      background: #000;\n    }\n    &::before {\n      transform-origin: 50% 50%;\n      '.concat("straight"===t?"transform: rotate(90deg);":"","\n      ").concat("down"===t?"transform: rotate(120deg);":"","\n      ").concat("up"===t?"transform: rotate(60deg);":"","\n      \n    }\n    &::after {\n      transform-origin: 50% 50%;\n      ").concat("straight"===t?"transform: rotate(90deg);":"","\n      ").concat("down"===t?"transform: rotate(60deg);":"","\n      ").concat("up"===t?"transform: rotate(120deg);":"","\n      right: 0;\n    }\n  }\n")})),P=Object(x.a)(g.a.div)((function(e){var i=e.darkMode;return"\n  width: 100%;\n  height: auto;\n  background: ".concat(i?"#282828":"#fff",";\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  ").concat(i?"* { color: #fff }":"",";\n\n  ").concat(i?"\n  ".concat(D,"{\n    .bs-drag-handle-ic {\n      &::before,\n      &::after {\n          background: #fff;\n        }\n      }\n    }\n  "):"","\n  \n")})),O=x.a.div(u||(u=Object(b.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  max-height: 90vh;\n  position: relative;\n"]))),A=x.a.div(l||(l=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n"]))),S=x.a.div(s||(s=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: relative;\n"]))),B=x.a.div((function(e){var i=e.withBorder;return"\n  padding: 17px;\n  position: relative;\n  ".concat(i?"\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);":"","\n")})),F=x.a.div(o||(o=Object(b.a)(["\n  padding-top: 10px;\n"]))),H=x.a.div(r||(r=Object(b.a)(["\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  padding: 10px;\n"]))),Z=Object(x.a)(g.a.div)((function(e){var i=e.debug,t=e.cursorMove;return"\n  ".concat(t?"cursor: move;":"","\n  ").concat(i?"\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjQkNCQ0JDIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYyMEgxMFYxMFoiIGZpbGw9IiNCQ0JDQkMiLz4KPHBhdGggZD0iTTEwIDBIMjBWMTBIMTBWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDEwSDEwVjIwSDBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);\n    ":"","\n")})),G=x.a.div.attrs({className:"draggable"})((function(e){var i=e.debug;return"\n  &.draggable{ cursor: move; }\n  ".concat(i?"\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjQkNCQ0JDIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYyMEgxMFYxMFoiIGZpbGw9IiNCQ0JDQkMiLz4KPHBhdGggZD0iTTEwIDBIMjBWMTBIMTBWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDEwSDEwVjIwSDBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);\n      opacity: 0.2;\n    ":"","\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n")})),W=function(e){var i=e.id,t=e.content,a=e.header,n=e.footer,u=e.dragHandle,l=e.getHandleClose,s=e.getHandleCloseCustom,o=e.getHandleOpen,r=e.getSheetVisibility,d=e.onOpen,p=e.onClose,b=e.darkMode,g=e.maskClosable,x=e.debug,M=Object(f.a)(0),j=Object(q.a)(),I=Object(m.useState)(!0),y=Object(v.a)(I,2),w=y[0],C=y[1],W=Object(m.useRef)(null),T=Object(m.useState)(0),L=Object(v.a)(T,2),Q=L[0],V=L[1],z=Object(m.useState)("straight"),J=Object(v.a)(z,2),Y=J[0],R=J[1],X="chcepe-bottom-sheet-".concat(null!==i&&void 0!==i?i:"default"),K=function(){w&&(C(!1),null===p||void 0===p||p())};null===s||void 0===s||s((function(e){C(!1),null===e||void 0===e||e()})),null===o||void 0===o||o((function(){C(!0),null===d||void 0===d||d()})),null===l||void 0===l||l(K),null===r||void 0===r||r(w),Object(m.useEffect)((function(){var e,i;V(null!==(i=null===(e=null===W||void 0===W?void 0:W.current)||void 0===e?void 0:e.offsetHeight)&&void 0!==i?i:0),w&&(null===d||void 0===d||d())}),[W,w,d]);var U=Q/2;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{onExitComplete:function(){return function(){var e,i;"undefined"!==typeof window&&(null===(i=null===(e=null===document||void 0===document?void 0:document.getElementById)||void 0===e?void 0:e.call(document,X))||void 0===i||i.remove())}()}},w&&c.a.createElement(N,{transition:{duration:.2},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},c.a.createElement(k,{id:"draggable-container",style:{y:M},drag:"y",dragControls:j,dragConstraints:{top:0,bottom:Q},dragElastic:.1,onDrag:function(e,i){R(U<i.offset.y?"down":"up")},onDragStart:function(e,i){var t,a;(null===(a=null===(t=null===e||void 0===e?void 0:e.target)||void 0===t?void 0:t.classList)||void 0===a?void 0:a.contains("draggable"))||null===j||void 0===j||j.componentControls.forEach((function(t){t.stop(e,i)}))},onDragEnd:function(){R("straight"),M.get()<U?Object(E.a)(M,0,{type:"spring"}):(R("down"),K())}},c.a.createElement(Z,Object.assign({transition:{duration:.2},initial:{opacity:0},animate:{opacity:.2},exit:{opacity:0},debug:x},g?{onTap:function(){return K()}}:{},(null===u||void 0===u?void 0:u.includes("mask"))?{className:"draggable",cursorMove:!0}:{})),c.a.createElement(P,{ref:W,id:"sheet-content",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.2},darkMode:b},c.a.createElement(O,null,c.a.createElement(B,{withBorder:Boolean(a)},c.a.createElement(D,{type:Y},c.a.createElement("div",{className:"bs-drag-handle-ic"})),a&&c.a.createElement(F,null,a),(null===u||void 0===u?void 0:u.includes("header"))&&c.a.createElement(G,{debug:x})),c.a.createElement(A,null,c.a.createElement(S,null,t),(null===u||void 0===u?void 0:u.includes("content"))&&c.a.createElement(G,{debug:x})),n?c.a.createElement(H,null,n,(null===u||void 0===u?void 0:u.includes("footer"))&&c.a.createElement(G,{debug:x})):c.a.createElement("div",null)))))))},T={default:{visibility:void 0,open:void 0,close:void 0,closeCustom:void 0}},L=function(e){var i,t,a=e.dragHandle,n=void 0===a?["header","mask"]:a,u=e.maskClosable,l=void 0===u||u,s=e.id,o=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)i.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}(e,["dragHandle","maskClosable","id"]),r=null!==s&&void 0!==s?s:"default",m="chcepe-bottom-sheet-".concat(r);if("undefined"!==typeof window){null===(t=null===(i=null===document||void 0===document?void 0:document.getElementById)||void 0===i?void 0:i.call(document,m))||void 0===t||t.remove();var d=document.createElement("div");d.setAttribute("id",m),null===document||void 0===document||document.body.appendChild(d),T[r]={},p.a.render(c.a.createElement(W,Object.assign({id:s,dragHandle:n,maskClosable:l,getHandleCloseCustom:function(e){T[r].closeCustom=e},getSheetVisibility:function(e){T[r].visibility=e},getHandleClose:function(e){T[r].close=e},getHandleOpen:function(e){T[r].open=e}},o)),d)}},Q=function(e){var i,t,a,n,u,l,s=null!==(i=null===e||void 0===e?void 0:e.id)&&void 0!==i?i:"default";(null===(t=T[s])||void 0===t?void 0:t.visibility)&&((null===e||void 0===e?void 0:e.callback)?null===(n=null===(a=T[s])||void 0===a?void 0:a.closeCustom)||void 0===n||n.call(a,e.callback):null===(l=null===(u=T[s])||void 0===u?void 0:u.close)||void 0===l||l.call(u))},V=x.a.div(M||(M=Object(b.a)(["\n  padding: 10px;\n"]))),z=x.a.div(j||(j=Object(b.a)(["\n  font-size: 40px;\n"]))),J=x.a.div(I||(I=Object(b.a)(["\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  box-sizing: border-box;\n  font-weight: bold;\n"]))),Y=x.a.button((function(e){var i=e.block;return"\n  width: ".concat(i?"100%":"auto",";\n  padding: 15px;\n  margin: 2px;\n  display: block;\n  background: #0b56ed;\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  outline: 0;\n  cursor: pointer;\n  font-weight: bold;\n\n  &:hover{\n    opacity: 0.9;\n  }\n")})),R=x.a.div(y||(y=Object(b.a)(["\n  padding: 20px;\n"]))),X=x.a.div(w||(w=Object(b.a)(["\n  width: 100px;\n  height: 100px;\n  background: url('https://picsum.photos/200') no-repeat;\n  background-size: cover;\n  margin: 20px auto;\n  border-radius: 100%;\n"]))),K=x.a.div(C||(C=Object(b.a)(["\n  width: 100%;\n  text-align: center;\n"])));function U(){return c.a.createElement(Y,{onClick:function(){return L({content:c.a.createElement(R,null,c.a.createElement(K,null,c.a.createElement(z,null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udc4b"))),c.a.createElement(K,null,"Hello world!"))})}},"Default")}function $(){return c.a.createElement(Y,{onClick:function(){return L({dragHandle:["mask","content","footer","header"],header:c.a.createElement(K,null,c.a.createElement(z,null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b06\ufe0f"))),footer:c.a.createElement(K,null,c.a.createElement(z,null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b07\ufe0f"))),content:c.a.createElement(R,null,c.a.createElement(K,null,"Nulla est. Suspendisse sagittis ultrices augue. Praesent vitae arcu tempor neque lacinia pretium. Nulla pulvinar eleifend sem."),c.a.createElement(X,null),c.a.createElement(K,null,"Suspendisse sagittis ultrices augue. Fusce nibh. Etiam neque. Fusce suscipit libero eget elit. Aenean fermentum risus id tortor."))})}},"All draggable")}function _(){return c.a.createElement(Y,{onClick:function(){return L({darkMode:!0,content:c.a.createElement(R,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," ")})}},"Dark mode")}function ee(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Aliquam erat volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Duis risus. Donec iaculis gravida nulla. In dapibus augue non sapien. Nam quis nulla. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Mauris elementum mauris vitae tortor. Pellentesque arcu. Aliquam in lorem sit amet leo accumsan lacinia. Praesent dapibus. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna."),c.a.createElement("p",null,"Et harum quidem rerum facilis est et expedita distinctio. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Maecenas sollicitudin. Morbi scelerisque luctus velit. Aenean vel massa quis mauris vehicula lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam quis quam. Praesent in mauris eu tortor porttitor accumsan. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Maecenas libero. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Phasellus rhoncus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Donec iaculis gravida nulla. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),c.a.createElement("p",null,"Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Aliquam erat volutpat. Nulla pulvinar eleifend sem. Vivamus luctus egestas leo. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque ipsum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. In convallis. Etiam quis quam."),c.a.createElement("p",null,"Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Sed convallis magna eu sem. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Phasellus et lorem id felis nonummy placerat. Duis pulvinar. Mauris tincidunt sem sed arcu. Donec iaculis gravida nulla. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Sed convallis magna eu sem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Aenean id metus id velit ullamcorper pulvinar. Pellentesque pretium lectus id turpis."),c.a.createElement("p",null,"Nunc auctor. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam at arcu a est sollicitudin euismod. Duis pulvinar. Cras elementum. Praesent id justo in neque elementum ultrices. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo."),c.a.createElement("p",null,"Phasellus et lorem id felis nonummy placerat. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Vestibulum fermentum tortor id mi. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Praesent in mauris eu tortor porttitor accumsan. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus ac leo pretium faucibus. Pellentesque arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae arcu tempor neque lacinia pretium. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Fusce nibh."),c.a.createElement("p",null,"Nunc dapibus tortor vel mi dapibus sollicitudin. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Praesent in mauris eu tortor porttitor accumsan. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Duis pulvinar. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Suspendisse nisl. Pellentesque sapien. Praesent dapibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem."),c.a.createElement("p",null,"Nulla non lectus sed nisl molestie malesuada. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nulla est. Nunc auctor. Maecenas lorem. Etiam neque. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus faucibus molestie nisl. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Proin in tellus sit amet nibh dignissim sagittis."),c.a.createElement("p",null,"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis hendrerit ante. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Phasellus et lorem id felis nonummy placerat. Nullam dapibus fermentum ipsum. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Fusce suscipit libero eget elit. Mauris tincidunt sem sed arcu. Mauris metus. Integer vulputate sem a nibh rutrum consequat. Nullam faucibus mi quis velit."),c.a.createElement("p",null,"Proin mattis lacinia justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Phasellus rhoncus. Fusce consectetuer risus a nunc. Aliquam erat volutpat. Phasellus rhoncus. Aliquam id dolor. Aliquam in lorem sit amet leo accumsan lacinia. Duis risus. Aenean id metus id velit ullamcorper pulvinar. Phasellus faucibus molestie nisl. Fusce aliquam vestibulum ipsum."),c.a.createElement("p",null,"Mauris dictum facilisis augue. Aliquam erat volutpat. Integer pellentesque quam vel velit. Et harum quidem rerum facilis est et expedita distinctio. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed ac dolor sit amet purus malesuada congue. Nam sed tellus id magna elementum tincidunt. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Duis condimentum augue id magna semper rutrum. Fusce nibh. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Phasellus faucibus molestie nisl. Aliquam id dolor. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Maecenas libero. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Etiam commodo dui eget wisi. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem."),c.a.createElement("p",null,"Maecenas sollicitudin. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Praesent id justo in neque elementum ultrices. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Praesent id justo in neque elementum ultrices. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas libero. Morbi scelerisque luctus velit. Mauris elementum mauris vitae tortor. Duis viverra diam non justo. Aliquam id dolor. Integer malesuada. Etiam posuere lacus quis dolor. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Sed ac dolor sit amet purus malesuada congue. Quisque porta. Maecenas sollicitudin. Nulla pulvinar eleifend sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos."),c.a.createElement("p",null,"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Proin in tellus sit amet nibh dignissim sagittis. Integer imperdiet lectus quis justo. Etiam dictum tincidunt diam. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nulla est. Nulla pulvinar eleifend sem. Praesent id justo in neque elementum ultrices. Etiam egestas wisi a erat. Mauris elementum mauris vitae tortor. Nulla non arcu lacinia neque faucibus fringilla."),c.a.createElement("p",null,"Nulla pulvinar eleifend sem. Nulla non arcu lacinia neque faucibus fringilla. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Maecenas sollicitudin. Suspendisse sagittis ultrices augue. Nullam eget nisl. Donec quis nibh at felis congue commodo. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Nulla non arcu lacinia neque faucibus fringilla. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam faucibus mi quis velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ac dolor sit amet purus malesuada congue. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim."),c.a.createElement("p",null,"In convallis. Integer tempor. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed convallis magna eu sem. Donec quis nibh at felis congue commodo. Nulla non arcu lacinia neque faucibus fringilla. Praesent vitae arcu tempor neque lacinia pretium. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aliquam ornare wisi eu metus. Sed convallis magna eu sem."),c.a.createElement("p",null,"Nam quis nulla. Aliquam erat volutpat. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Etiam bibendum elit eget erat. Integer malesuada. Donec vitae arcu. Etiam bibendum elit eget erat. Duis pulvinar. Aenean placerat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Etiam egestas wisi a erat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),c.a.createElement("p",null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nullam at arcu a est sollicitudin euismod. Etiam posuere lacus quis dolor. Fusce nibh. Aenean vel massa quis mauris vehicula lacinia. Nulla non arcu lacinia neque faucibus fringilla. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Phasellus et lorem id felis nonummy placerat. Aliquam ante. Curabitur bibendum justo non orci."),c.a.createElement("p",null,"Nam sed tellus id magna elementum tincidunt. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Ut tempus purus at lorem. Fusce nibh. Nulla est. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nulla non lectus sed nisl molestie malesuada. Aenean fermentum risus id tortor. Integer lacinia. Aliquam ornare wisi eu metus. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Curabitur sagittis hendrerit ante. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Cras pede libero, dapibus nec, pretium sit amet, tempor quis."),c.a.createElement("p",null,"Praesent vitae arcu tempor neque lacinia pretium. Integer lacinia. Sed ac dolor sit amet purus malesuada congue. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus porttitor turpis ac leo. Nullam rhoncus aliquam metus. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Et harum quidem rerum facilis est et expedita distinctio. Aliquam erat volutpat. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Proin in tellus sit amet nibh dignissim sagittis. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Suspendisse nisl. Sed convallis magna eu sem. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Proin mattis lacinia justo. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim."),c.a.createElement("p",null,"Nulla est. Suspendisse sagittis ultrices augue. Praesent vitae arcu tempor neque lacinia pretium. Nulla pulvinar eleifend sem. Nullam at arcu a est sollicitudin euismod. Suspendisse sagittis ultrices augue. Fusce nibh. Etiam neque. Fusce suscipit libero eget elit. Aenean fermentum risus id tortor. Nam sed tellus id magna elementum tincidunt. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus rhoncus. Aenean fermentum risus id tortor."))}function ie(){return c.a.createElement(Y,{onClick:function(){return L({content:c.a.createElement(R,null,c.a.createElement(K,null,c.a.createElement(z,null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udd25\ud83d\udd25\ud83d\udd25"))),c.a.createElement(ee,null))})}},"Long content")}function te(){return c.a.createElement(Y,{onClick:function(){return L({header:c.a.createElement(J,null,"Lorem ipsum"),footer:c.a.createElement(Y,{onClick:function(){return Q()},block:!0},"Close"),content:c.a.createElement(R,null,c.a.createElement(ee,null))})}},"With Header & Footer")}function ae(){return c.a.createElement(Y,{onClick:function(){return L({maskClosable:!0,dragHandle:[],content:c.a.createElement(R,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," ")})}},"Only mask clickable")}function ne(){return c.a.createElement(Y,{onClick:function(){return L({footer:c.a.createElement(ue,null),content:c.a.createElement(R,null,c.a.createElement(K,null,c.a.createElement(z,null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude04\ud83d\ude04\ud83d\ude04"))),c.a.createElement(K,null,"I am a nested bottom sheet"))})}},"Nested")}var ue=function(){return c.a.createElement(Y,{onClick:function(){return L({id:"second",content:c.a.createElement(R,null,c.a.createElement(le,null),c.a.createElement(ee,null))})}},"Open second sheet")},le=function(){return c.a.createElement(Y,{onClick:function(){return L({onClose:function(){Q({id:"second"})},id:"third",content:c.a.createElement(R,null,c.a.createElement(K,null,c.a.createElement(z,null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f"))),c.a.createElement(K,null,"When you close me by swiping or clicking the mask, second sheet will also be closed."),c.a.createElement("br",null),c.a.createElement(Y,{onClick:function(){return Q({id:"third",callback:function(){alert("Hey from callback!")}})}},"Close only me through callback"))})}},"Open 3rd sheet")},se=function(){return c.a.createElement(V,null,c.a.createElement("h2",null,c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude80")," ","bottom sheet examples"),c.a.createElement(U,null),c.a.createElement($,null),c.a.createElement(_,null),c.a.createElement(ie,null),c.a.createElement(te,null),c.a.createElement(ne,null),c.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(c.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f54bc831.chunk.js.map