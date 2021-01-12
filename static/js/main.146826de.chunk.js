(this["webpackJsonpalgo-visualizer"]=this["webpackJsonpalgo-visualizer"]||[]).push([[0],{124:function(e,t,n){e.exports=n(261)},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},258:function(e,t,n){e.exports=n.p+"static/media/snowflake.6114f6e9.svg"},259:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=(n(129),n(31)),l=n(14);n(130);var s=function(e){var t=e.row,n=e.col,a=e.isFinish,o=e.isStart,i=e.isWall,c=e.isVisited,l=e.onMouseDown,s=e.onMouseEnter,u=e.onMouseUp,h=a?"node-finish":o?"node-start":i?"node-wall":c?"node-visited":"";return r.a.createElement("div",{id:"node-".concat(t,"-").concat(n),className:"node ".concat(h),onMouseDown:function(){return l(t,n)},onMouseEnter:function(){return s(t,n)},onMouseUp:function(){return u()}})};n(131);var u=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],i=n[1],c=e.grid,u=e.setGrid,h=e.getNewGridWithWallToggled,f=function(e,t){var n=h(c,e,t);u(n)};return r.a.createElement("div",null,r.a.createElement("div",{className:"grid"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"row"},e.map((function(e,t){return r.a.createElement(s,{key:[e.col,e.row],isStart:e.isStart,isFinish:e.isFinish,isWall:e.isWall,isVisited:e.visitedClass,onMouseDown:function(e,t){return function(e,t){var n=h(c,e,t);i(!0),u(n)}(e,t)},onMouseEnter:function(e,t){return function(e,t){if(o){var n=h(c,e,t);u(n)}}(e,t)},onMouseUp:function(){i(!1)},onClick:f,row:e.row,col:e.col})})))}))))},h=n(42),f=n(43),d=n(115),v=n(114),m=n(269),p=n(268),g=n(24),w=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:"Breadth First Search",activeWall:"Default"},e.handleItemClick=function(t,n){var a=n.name;e.setState({activeItem:a}),e.props.handleSelection(a)},e.handleWallAlgoClick=function(t,n){var a=n.name;e.setState({activeWall:a}),e.props.handleWallGeneration(a)},e.clearGrid=function(t){e.setState({activeWall:"Default"}),e.props.clearGrid()},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state,t=e.activeItem,n=e.activeWall,a=this.props,o=a.visualizeAlgorithm;a.clearGrid;return r.a.createElement(m.a,{fluid:!0,inverted:!0,vertical:!0,size:"large"},r.a.createElement(m.a.Item,null,"Algorithms",r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,{name:"Breadth First Search",active:"Breadth First Search"===t,onClick:this.handleItemClick}),r.a.createElement(m.a.Item,{name:"Depth First Search",active:"Depth First Search"===t,onClick:this.handleItemClick}),r.a.createElement(m.a.Item,{name:"A-star Search",active:"A-star Search"===t,onClick:this.handleItemClick}),r.a.createElement(m.a.Item,{name:"A-star Search Min Heap",active:"A-star Search Min Heap"===t,onClick:this.handleItemClick}))),r.a.createElement(m.a.Item,null,"Wall Generation",r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,{name:"Recursive Division",active:"Recursive Division"===n,onClick:this.handleWallAlgoClick}),r.a.createElement(m.a.Item,{name:"Binary Tree Maze",active:"Binary Tree Maze"===n,onClick:this.handleWallAlgoClick}),r.a.createElement(m.a.Item,{name:"Depth First Search Maze",active:"Depth First Search Maze"===n,onClick:this.handleWallAlgoClick}))),r.a.createElement(m.a.Item,null,r.a.createElement(p.a,{fluid:!0,secondary:!0,icon:!0,labelPosition:"right",onClick:o},"Visualize",r.a.createElement(g.a,{name:"caret square right"}))),r.a.createElement(m.a.Item,null,r.a.createElement(p.a,{fluid:!0,secondary:!0,icon:!0,labelPosition:"right",onClick:this.clearGrid},"Clear",r.a.createElement(g.a,{name:"redo alternate"}))))}}]),n}(a.Component),E=n(271),S=n(267),y=n(16);function b(e,t,n){var a,r=function(e,t){var n=e.col,a=e.row,r=[];a>0&&r.push(t[a-1][n]);n>0&&r.push(t[a][n-1]);a<t.length-1&&r.push(t[a+1][n]);n<t[0].length-1&&r.push(t[a][n+1]);return r.filter((function(e){return!e.isVisited}))}(e,n),o=Object(y.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value;i.previousNode=e,t.push(i)}}catch(c){o.e(c)}finally{o.f()}}var k,M,N=function(e,t,n){if(!t||!n||t===n)return[[],[]];var a=[],r=[];for(r.push(t);r.length;){var o=r.shift();if(!o.isWall&&!o.isVisited){if(o.isVisited=!0,a.push(o),o===n)break;b(o,r,e)}}return[a,function(e){if(!e.isVisited&&!e.previousNode)return[];var t=[],n=e;for(;null!==n;)t.unshift(n),n=n.previousNode;return t}(n)]};function I(e){return Math.abs(e.row-k)+Math.abs(e.col-M)}function W(e,t,n){var a,r=function(e,t){var n=e.col,a=e.row,r=[];a>0&&r.push(t[a-1][n]);n>0&&r.push(t[a][n-1]);a<t.length-1&&r.push(t[a+1][n]);n<t[0].length-1&&r.push(t[a][n+1]);return r}(e,n),o=Object(y.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value,c=e.gScore+1;c<i.gScore&&(i.previousNode=e,i.gScore=c,i.distance=i.gScore+I(i),t.includes(i)||t.push(i))}}catch(l){o.e(l)}finally{o.f()}t.sort((function(e,t){return e.distance-t.distance}))}var j,C,F=function(e,t,n){if(!t||!n||t===n)return[[],[]];k=n.row,M=n.col;var a=[],r=[];for(r.push(t);r.length;){var o=r.shift();if(o===t&&(o.gScore=0,o.distance=I(o)),!o.isWall){if(a.push(o),o===n){n.isVisited=!0;break}W(o,r,e)}}return[a,function(e){if(!e.isVisited&&!e.previousNode)return[];var t=[],n=e;for(;null!==n;)t.unshift(n),n=n.previousNode;return t}(n)]},O=function(){function e(t){Object(h.a)(this,e),this.heap=this.buildHeap(t)}return Object(f.a)(e,[{key:"buildHeap",value:function(e){for(var t=Math.floor((e.length-2)/2);t>=0;t--)this.siftDown(t,e.length-1,e);return e}},{key:"siftDown",value:function(e,t,n){for(var a=2*e+1;a<=t;){var r=2*e+2<=t?2*e+2:-1,o=void 0;if(!(n[o=-1!==r&&n[r].distance<n[a].distance?r:a].distance<n[e].distance))return;this.swap(e,o,n),a=2*(e=o)+1}}},{key:"siftUp",value:function(e,t){for(var n=Math.floor((e-1)/2);e>0&&t[e].distance<t[n].distance;)this.swap(e,n,t),e=n,n=Math.floor((e-1)/2)}},{key:"peek",value:function(){return this.heap[0]}},{key:"remove",value:function(){this.swap(0,this.heap.length-1,this.heap);var e=this.heap.pop();return this.siftDown(0,this.heap.length-1,this.heap),e}},{key:"insert",value:function(e){this.heap.push(e),this.siftUp(this.heap.length-1,this.heap)}},{key:"swap",value:function(e,t,n){var a=n[t];n[t]=n[e],n[e]=a}}]),e}();function B(e){return Math.abs(e.row-j)+Math.abs(e.col-C)}function z(e,t,n){var a,r=function(e,t){var n=e.col,a=e.row,r=[];a>0&&r.push(t[a-1][n]);n>0&&r.push(t[a][n-1]);a<t.length-1&&r.push(t[a+1][n]);n<t[0].length-1&&r.push(t[a][n+1]);return r}(e,n),o=Object(y.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value,c=e.gScore+1;c<i.gScore&&(i.previousNode=e,i.gScore=c,i.distance=i.gScore+B(i),t.heap.includes(i)||t.insert(i))}}catch(l){o.e(l)}finally{o.f()}}var D=function(e,t,n){if(!t||!n||t===n)return[[],[]];j=n.row,C=n.col;var a=[],r=new O([]);for(r.insert(t);r.heap.length;){var o=r.remove();if(o===t&&(o.gScore=0,o.distance=B(o)),!o.isWall){if(a.push(o),o===n){n.isVisited=!0;break}z(o,r,e)}}return[a,function(e){if(!e.isVisited&&!e.previousNode)return[];var t=[],n=e;for(;null!==n;)t.unshift(n),n=n.previousNode;return t}(n)]};function A(e,t,n){var a,r=function(e,t){var n=e.col,a=e.row,r=[];a>0&&r.push(t[a-1][n]);n>0&&r.push(t[a][n-1]);a<t.length-1&&r.push(t[a+1][n]);n<t[0].length-1&&r.push(t[a][n+1]);return r.filter((function(e){return!e.isVisited}))}(e,n),o=Object(y.a)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value;i.previousNode=e,t.push(i)}}catch(c){o.e(c)}finally{o.f()}}var V=function(e,t,n){if(!t||!n||t===n)return[[],[]];var a=[],r=[];for(r.push(t);r.length;){var o=r.pop();if(!o.isWall&&!o.isVisited){if(o.isVisited=!0,a.push(o),o===n)break;A(o,r,e)}}return[a,function(e){if(!e.isVisited&&!e.previousNode)return[];var t=[],n=e;for(;null!==n;)t.unshift(n),n=n.previousNode;return t}(n)]};function x(e,t){var n=Math.floor(Math.random()*Math.floor(t-e))+e;if(t-1===e){var a=Math.random();if(a<=.5)return e;if(a>.5)return t}return n}var T=function(e,t,n){if(!t||!n||t===n)return[e,[]];for(var a=e,r=[],o=new Set,i=e.length-1,c=e[0].length-1,l=0;l<e[0].length;l++){var s=e[0][l];r.push(s),o.add("".concat(s.row,"-").concat(s.col))}for(var u=1;u<e.length-1;u++){var h=e[u][c];r.push(h),o.add("".concat(h.row,"-").concat(h.col))}for(var f=c;f>=0;f--){var d=e[i][f];r.push(d),o.add("".concat(d.row,"-").concat(d.col))}for(var v=i-1;v>0;v--){var m=e[v][0];r.push(m),o.add("".concat(m.row,"-").concat(m.col))}return function e(t,n,a,r,o,i,c){var l,s=a-n,u=o-r;if(s<=1&&u<=1)return;l=u>=s?"vertical":"horizontal";3===s&&"vertical"===l?l="horizontal":3===u&&"horizontal"===l&&(l="vertical");if("vertical"===l){for(var h=x(r+1,o-1),f=10,d=!1,v=-1;!c.has("".concat(n-1,"-").concat(h))||!c.has("".concat(a+1,"-").concat(h));){if(!c.has("".concat(n-1,"-").concat(h))&&c.has("".concat(a+1,"-").concat(h))){v=n,d=!0;break}if(c.has("".concat(n-1,"-").concat(h))&&!c.has("".concat(a+1,"-").concat(h))){v=a,d=!0;break}if(0===f)return;h=x(r+1,o-1),f--}var m=x(n,a);d&&(m=v);for(var p=n;p<=a;p++)if(p!==m){var g=t[p][h];g.isStart||g.isFinish||(i.push(g),c.add("".concat(g.row,"-").concat(g.col)))}e(t,n,a,r,h-1,i,c),e(t,n,a,h+1,o,i,c)}else if("horizontal"===l){for(var w=x(n+1,a-1),E=10,S=!1,y=-1;!c.has("".concat(w,"-").concat(r-1))||!c.has("".concat(w,"-").concat(o+1));){if(!c.has("".concat(w,"-").concat(r-1))&&c.has("".concat(w,"-").concat(o+1))){y=r,S=!0;break}if(c.has("".concat(w,"-").concat(r-1))&&!c.has("".concat(w,"-").concat(o+1))&&(y=o,S=!0),0===E)return;w=x(n+1,a-1),E--}var b=x(r,o);S&&(b=y);for(var k=r;k<=o;k++)if(k!==b){var M=t[w][k];M.isStart||M.isFinish||(i.push(M),c.add("".concat(M.row,"-").concat(M.col)))}e(t,n,w-1,r,o,i,c),e(t,w+1,a,r,o,i,c)}}(a,1,i-1,1,c-1,r,o),[a,r]};function G(e,t,n){var a=Math.floor((e.row+t.row)/2),r=Math.floor((e.col+t.col)/2);return n[a][r]}var R=function(e,t,n){if(!t||!n||t===n)return[[],[]];for(var a=[],r=0;r<e.length;r++)for(var o=0;o<e[0].length;o++){var i=e[r][o];i.isStart||i.isFinish||a.push(i)}for(var c=[],l=e.length-2,s=e[0].length-2,u=1;u<=l;u+=2)for(var h=1;h<=s;h+=2){var f=e[u][h];c.push(f);var d=[];if(u>1&&d.push(e[u-2][h]),h>1&&d.push(e[u][h-2]),0!==d.length){var v=void 0;v=Math.random()<.5?0%d.length:1%d.length,c.push(G(f,d[v],e))}}return[a,c]};function H(e,t,n){var a=[],r=e.row,o=e.col;for(r>2&&!n[r-2][o].isExplored&&a.push(n[r-2][o]),o>2&&!n[r][o-2].isExplored&&a.push(n[r][o-2]),r<n.length-3&&!n[r+2][o].isExplored&&a.push(n[r+2][o]),o<n[0].length-3&&!n[r][o+2].isExplored&&a.push(n[r][o+2]);a.length;){var i=Math.floor(Math.random()*a.length),c=a[i];c.previousExploredNode=e,t.push(c),a.splice(i,1)}}function U(e,t,n){var a=Math.floor((e.row+t.row)/2),r=Math.floor((e.col+t.col)/2);return n[a][r]}var J=function(e,t,n){if(!t||!n||t===n)return[[],[]];for(var a=[],r=0;r<e.length;r++)for(var o=0;o<e[0].length;o++){var i=e[r][o];i.isStart||i.isFinish||a.push(i)}var c=[],l=[];for(l.push(t);l.length;){var s=l.pop();s.isExplored||(s.isExplored=!0,c.push(s),s.previousExploredNode&&c.push(U(s,s.previousExploredNode,e)),H(s,l,e))}return[a,c]};function P(){var e=Object(a.useState)(q()),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)("Breadth First Search"),c=Object(l.a)(i,2),s=c[0],h=c[1],f=Object(a.useReducer)(K,N),d=Object(l.a)(f,2),v=d[0],m=d[1];Object(a.useEffect)((function(){m({type:s})}),[s]);var p=function(e,t){for(var n=function(n){if(n===e.length)return setTimeout((function(){g(t)}),20*n),{v:void 0};setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),20*n)},a=0;a<=e.length;a++){var r=n(a);if("object"===typeof r)return r.v}},g=function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest"}),50*t)},n=0;n<e.length;n++)t(n)},y=function(e){for(var t=function(t){setTimeout((function(){var a=e[t],r=L(n,a.row,a.col);o(r),a.isStart||a.isFinish||(document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node")}),50*t)},a=0;a<e.length;a++)t(a)},b=function(){for(var e=0,t=0,a=!0,r=n.length,i=n[0].length,c=[];e<r;){for(;0<=t&&t<i;){var l=n[e][t];c.push(l),a?t++:t--}a?t--:t++,a=!a,e++}for(var s=function(e){e===c.length-e-1?setTimeout((function(){var t=c[e],a=L(n,t.row,t.col);o(a),t.isStart||t.isFinish||(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-wall")}),20*e):setTimeout((function(){var t=c[e],a=c[c.length-e-1],r=L(n,t.row,t.col);o(r);var i=L(n,a.row,a.col);o(i),t.isStart||t.isFinish||(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-wall"),a.isStart||a.isFinish||(document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node node-wall")}),20*e)},u=0;u<=c.length-u-1;u++)s(u)},k=function(e){for(var t=function(t){setTimeout((function(){var a=e[t],r=L(n,a.row,a.col);o(r),document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node node-wall"}),20*t)},a=0;a<e.length;a++)t(a)};return r.a.createElement("div",null,r.a.createElement(E.a,{verticalAlign:"middle",columns:2},r.a.createElement(E.a.Column,{width:3,floated:"left",only:"large screen"},r.a.createElement(S.a,{fluid:!0},r.a.createElement(w,{handleSelection:function(e){h(e),console.log(e)},visualizeAlgorithm:function(){var e=n,t=v(e,e[11][5],e[11][45]),a=Object(l.a)(t,2),r=a[0],o=a[1];p(r,o)},clearGrid:function(){o(q());for(var e=0;e<n.length;e++)for(var t=0;t<n[0].length;t++)n[e][t].isStart?document.getElementById("node-".concat(e,"-").concat(t)).className="node node-start":n[e][t].isFinish?document.getElementById("node-".concat(e,"-").concat(t)).className="node node-finish":document.getElementById("node-".concat(e,"-").concat(t)).className="node"},handleWallGeneration:function(e){var t,a=function(){};if("Default"!==e){"Recursive Division"===e?(a=T,t=!1):"Binary Tree Maze"===e?(a=R,t=!0):"Depth First Search Maze"===e&&(a=J,t=!0);var r=n,o=r[11][5],i=r[11][45];if(t){var c=a(n,o,i),s=Object(l.a)(c,2),u=s[0],h=s[1];b(),setTimeout((function(){y(h)}),20*Math.ceil(u.length/2))}else{var f=a(n,o,i),d=Object(l.a)(f,2),v=(d[0],d[1]);k(v)}}}}))),r.a.createElement(E.a.Column,{width:13,only:"large screen"},r.a.createElement(u,{algoString:s,grid:n,setGrid:o,getNewGridWithWallToggled:L}))))}var q=function(){for(var e=[],t=0;t<=20;t++){for(var n=[],a=0;a<=50;a++){var r=$(a,t);n.push(r)}e.push(n)}return e},$=function(e,t){return{col:e,row:t,isStart:11===t&&5===e,isFinish:11===t&&45===e,distance:1/0,gScore:1/0,fScore:1/0,isVisited:!1,isWall:!1,visitedClass:!1,previousNode:null,isExplored:!1,previousExploredNode:!1}},K=function(e,t){switch(t.type){case"Breadth First Search":return N;case"A-star Search":return F;case"A-star Search Min Heap":return D;case"Depth First Search":return V;default:return N}},L=function(e,t,n){var a=e,r=a[t][n];if(r.isStart||r.isFinish)return e;var o=Object(c.a)(Object(c.a)({},r),{},{isWall:!r.isWall});return a[t][n]=o,a},Q=n(113);var X=function(e){return r.a.createElement("div",null,r.a.createElement(m.a,{fixed:"top",inverted:!0},r.a.createElement(S.a,null,r.a.createElement(m.a.Item,{as:"a",href:"https://www.github.com/samuelwongsy",header:!0},r.a.createElement(Q.a,{size:"mini",src:n(258),style:{marginRight:"1.5em"}}),"Samuel Wong"),r.a.createElement(m.a.Item,{as:"a",href:"/algo-visualizer"},"Algorithm Visualizer"))))};function Y(){return r.a.createElement("div",null,r.a.createElement(E.a,{divided:"vertically",style:{height:"100vh"}},r.a.createElement(E.a.Row,{style:{height:"5%"}},r.a.createElement(X,null)),r.a.createElement(E.a.Row,{style:{height:"90%"}},r.a.createElement(P,null))))}n(259);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))};n(260),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[124,1,2]]]);
//# sourceMappingURL=main.146826de.chunk.js.map