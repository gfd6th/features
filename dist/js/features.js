!function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=0)}([function(n,e,o){n.exports=o(1)},function(n,e){Nova.booting(function(n){var e=function(n){return{functional:!0,render:function(e,o){return function(n,e){return e?n._c(e,n.data,n.children):n._c("div")}(o,function(n){return (_.find(Nova.config.resources,function(e){return e.uriKey===n})||{}).components||{}}(o.props.resourceName)[n])}}};n.component("custom-detail-toolbar",e("detail-toolbar")),n.component("custom-detail-header",e("detail-header")),n.component("custom-index-toolbar",e("index-toolbar")),n.component("custom-index-header",e("index-header")),n.component("custom-attach-header",e,("attach-header")),n.component("custom-create-header",e("create-header")),n.component("custom-dashboard-header",e("dashboard-header")),n.component("custom-lens-header",e("lens-header")),n.component("custom-update-header",e("update-header")),n.component("custom-update-attached-header",e("update-attached-header"))})}]);
