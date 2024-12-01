/*! jQuery UI - v1.11.4 - 2015-12-03
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, button.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */(function(i){typeof define=="function"&&define.amd?define(["jquery"],i):i(jQuery)})(function(i){function g(t,e){var s,n,a,o=t.nodeName.toLowerCase();return o==="area"?(s=t.parentNode,n=s.name,t.href&&n&&s.nodeName.toLowerCase()==="map"?(a=i("img[usemap='#"+n+"']")[0],!!a&&_(a)):!1):(/^(input|select|textarea|button|object)$/.test(o)?!t.disabled:o==="a"&&t.href||e)&&_(t)}function _(t){return i.expr.filters.visible(t)&&!i(t).parents().addBack().filter(function(){return i.css(this,"visibility")==="hidden"}).length}i.ui=i.ui||{},i.extend(i.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),i.fn.extend({scrollParent:function(t){var e=this.css("position"),s=e==="absolute",n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var o=i(this);return s&&o.css("position")==="static"?!1:n.test(o.css("overflow")+o.css("overflow-y")+o.css("overflow-x"))}).eq(0);return e!=="fixed"&&a.length?a:i(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")})}}),i.extend(i.expr[":"],{data:i.expr.createPseudo?i.expr.createPseudo(function(t){return function(e){return!!i.data(e,t)}}):function(t,e,s){return!!i.data(t,s[3])},focusable:function(t){return g(t,!isNaN(i.attr(t,"tabindex")))},tabbable:function(t){var e=i.attr(t,"tabindex"),s=isNaN(e);return(s||e>=0)&&g(t,!s)}}),i("<a>").outerWidth(1).jquery||i.each(["Width","Height"],function(t,e){function s(u,r,h,l){return i.each(n,function(){r-=parseFloat(i.css(u,"padding"+this))||0,h&&(r-=parseFloat(i.css(u,"border"+this+"Width"))||0),l&&(r-=parseFloat(i.css(u,"margin"+this))||0)}),r}var n=e==="Width"?["Left","Right"]:["Top","Bottom"],a=e.toLowerCase(),o={innerWidth:i.fn.innerWidth,innerHeight:i.fn.innerHeight,outerWidth:i.fn.outerWidth,outerHeight:i.fn.outerHeight};i.fn["inner"+e]=function(u){return u===void 0?o["inner"+e].call(this):this.each(function(){i(this).css(a,s(this,u)+"px")})},i.fn["outer"+e]=function(u,r){return typeof u!="number"?o["outer"+e].call(this,u):this.each(function(){i(this).css(a,s(this,u,!0,r)+"px")})}}),i.fn.addBack||(i.fn.addBack=function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}),i("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(i.fn.removeData=function(t){return function(e){return arguments.length?t.call(this,i.camelCase(e)):t.call(this)}}(i.fn.removeData)),i.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),i.fn.extend({focus:function(t){return function(e,s){return typeof e=="number"?this.each(function(){var n=this;setTimeout(function(){i(n).focus(),s&&s.call(n)},e)}):t.apply(this,arguments)}}(i.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==void 0)return this.css("zIndex",t);if(this.length)for(var e,s,n=i(this[0]);n.length&&n[0]!==document;){if(e=n.css("position"),(e==="absolute"||e==="relative"||e==="fixed")&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&s!==0))return s;n=n.parent()}return 0}}),i.ui.plugin={add:function(t,e,s){var n,a=i.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([e,s[n]])},call:function(t,e,s,n){var a,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&t.element[0].parentNode.nodeType!==11))for(a=0;o.length>a;a++)t.options[o[a][0]]&&o[a][1].apply(t.element,s)}};var x=0,b=Array.prototype.slice;i.cleanData=function(t){return function(e){var s,n,a;for(a=0;(n=e[a])!=null;a++)try{s=i._data(n,"events"),s&&s.remove&&i(n).triggerHandler("remove")}catch{}t(e)}}(i.cleanData),i.widget=function(t,e,s){var n,a,o,u,r={},h=t.split(".")[0];return t=t.split(".")[1],n=h+"-"+t,s||(s=e,e=i.Widget),i.expr[":"][n.toLowerCase()]=function(l){return!!i.data(l,n)},i[h]=i[h]||{},a=i[h][t],o=i[h][t]=function(l,d){return this._createWidget?(arguments.length&&this._createWidget(l,d),void 0):new o(l,d)},i.extend(o,a,{version:s.version,_proto:i.extend({},s),_childConstructors:[]}),u=new e,u.options=i.widget.extend({},u.options),i.each(s,function(l,d){return i.isFunction(d)?(r[l]=function(){var c=function(){return e.prototype[l].apply(this,arguments)},m=function(f){return e.prototype[l].apply(this,f)};return function(){var f,k=this._super,N=this._superApply;return this._super=c,this._superApply=m,f=d.apply(this,arguments),this._super=k,this._superApply=N,f}}(),void 0):(r[l]=d,void 0)}),o.prototype=i.widget.extend(u,{widgetEventPrefix:a&&u.widgetEventPrefix||t},r,{constructor:o,namespace:h,widgetName:t,widgetFullName:n}),a?(i.each(a._childConstructors,function(l,d){var c=d.prototype;i.widget(c.namespace+"."+c.widgetName,o,d._proto)}),delete a._childConstructors):e._childConstructors.push(o),i.widget.bridge(t,o),o},i.widget.extend=function(t){for(var e,s,n=b.call(arguments,1),a=0,o=n.length;o>a;a++)for(e in n[a])s=n[a][e],n[a].hasOwnProperty(e)&&s!==void 0&&(t[e]=i.isPlainObject(s)?i.isPlainObject(t[e])?i.widget.extend({},t[e],s):i.widget.extend({},s):s);return t},i.widget.bridge=function(t,e){var s=e.prototype.widgetFullName||t;i.fn[t]=function(n){var a=typeof n=="string",o=b.call(arguments,1),u=this;return a?this.each(function(){var r,h=i.data(this,s);return n==="instance"?(u=h,!1):h?i.isFunction(h[n])&&n.charAt(0)!=="_"?(r=h[n].apply(h,o),r!==h&&r!==void 0?(u=r&&r.jquery?u.pushStack(r.get()):r,!1):void 0):i.error("no such method '"+n+"' for "+t+" widget instance"):i.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+n+"'")}):(o.length&&(n=i.widget.extend.apply(null,[n].concat(o))),this.each(function(){var r=i.data(this,s);r?(r.option(n||{}),r._init&&r._init()):i.data(this,s,new e(n,this))})),u}},i.Widget=function(){},i.Widget._childConstructors=[],i.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=i(e||this.defaultElement||this)[0],this.element=i(e),this.uuid=x++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=i(),this.hoverable=i(),this.focusable=i(),e!==this&&(i.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(s){s.target===e&&this.destroy()}}),this.document=i(e.style?e.ownerDocument:e.document||e),this.window=i(this.document[0].defaultView||this.document[0].parentWindow)),this.options=i.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:i.noop,_getCreateEventData:i.noop,_create:i.noop,_init:i.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(i.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:i.noop,widget:function(){return this.element},option:function(t,e){var s,n,a,o=t;if(arguments.length===0)return i.widget.extend({},this.options);if(typeof t=="string")if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=i.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),arguments.length===1)return n[t]===void 0?null:n[t];n[t]=e}else{if(arguments.length===1)return this.options[t]===void 0?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,t==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,e,s){var n,a=this;typeof t!="boolean"&&(s=e,e=t,t=!1),s?(e=n=i(e),this.bindings=this.bindings.add(e)):(s=e,e=this.element,n=this.widget()),i.each(s,function(o,u){function r(){return t||a.options.disabled!==!0&&!i(this).hasClass("ui-state-disabled")?(typeof u=="string"?a[u]:u).apply(a,arguments):void 0}typeof u!="string"&&(r.guid=u.guid=u.guid||r.guid||i.guid++);var h=o.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,d=h[2];d?n.delegate(d,l,r):e.bind(l,r)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=i(this.bindings.not(t).get()),this.focusable=i(this.focusable.not(t).get()),this.hoverable=i(this.hoverable.not(t).get())},_delay:function(t,e){function s(){return(typeof t=="string"?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(s,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(e){i(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){i(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(e){i(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){i(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,s){var n,a,o=this.options[t];if(s=s||{},e=i.Event(e),e.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],a=e.originalEvent)for(n in a)n in e||(e[n]=a[n]);return this.element.trigger(e,s),!(i.isFunction(o)&&o.apply(this.element[0],[e].concat(s))===!1||e.isDefaultPrevented())}},i.each({show:"fadeIn",hide:"fadeOut"},function(t,e){i.Widget.prototype["_"+t]=function(s,n,a){typeof n=="string"&&(n={effect:n});var o,u=n?n===!0||typeof n=="number"?e:n.effect||e:t;n=n||{},typeof n=="number"&&(n={duration:n}),o=!i.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&i.effects&&i.effects.effect[u]?s[t](n):u!==t&&s[u]?s[u](n.duration,n.easing,a):s.queue(function(r){i(this)[t](),a&&a.call(s[0]),r()})}}),i.widget;var p=!1;i(document).mouseup(function(){p=!1}),i.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(e){return i.data(e.target,t.widgetName+".preventClickEvent")===!0?(i.removeData(e.target,t.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!p){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,s=t.which===1,n=typeof this.options.cancel=="string"&&t.target.nodeName?i(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(i.data(t.target,this.widgetName+".preventClickEvent")===!0&&i.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return e._mouseMove(a)},this._mouseUpDelegate=function(a){return e._mouseUp(a)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),p=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(i.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&i.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),p=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});var v,y="ui-button ui-widget ui-state-default ui-corner-all",w="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",E=function(){var t=i(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},C=function(t){var e=t.name,s=t.form,n=i([]);return e&&(e=e.replace(/'/g,"\\'"),n=s?i(s).find("[name='"+e+"'][type=radio]"):i("[name='"+e+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};i.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,E),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,e=this.options,s=this.type==="checkbox"||this.type==="radio",n=s?"":"ui-state-active";e.label===null&&(e.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(y).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){e.disabled||this===v&&i(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){e.disabled||i(this).removeClass(n)}).bind("click"+this.eventNamespace,function(a){e.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){return e.disabled?!1:void 0}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(e.disabled)return!1;i(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var a=t.element[0];C(a).not(a).map(function(){return i(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return e.disabled?!1:(i(this).addClass("ui-state-active"),v=this,t.document.one("mouseup",function(){v=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return e.disabled?!1:(i(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(a){return e.disabled?!1:((a.keyCode===i.ui.keyCode.SPACE||a.keyCode===i.ui.keyCode.ENTER)&&i(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){i(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(a){a.keyCode===i.ui.keyCode.SPACE&&i(this).click()})),this._setOption("disabled",e.disabled),this._resetButton()},_determineButtonType:function(){var t,e,s;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button",this.type==="checkbox"||this.type==="radio"?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),s=this.element.is(":checked"),s&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",s)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(y+" ui-state-active "+w).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),t==="disabled"?(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),e&&(this.type==="checkbox"||this.type==="radio"?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?C(this.element[0]).each(function(){i(this).is(":checked")?i(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):i(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input")return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(w),e=i("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",i.trim(e)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),i.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){t==="disabled"&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var t=this.element.css("direction")==="rtl",e=this.element.find(this.options.items),s=e.filter(":ui-button");e.not(":ui-button").button(),s.button("refresh"),this.buttons=e.map(function(){return i(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return i(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),i.ui.button,i.widget("ui.slider",i.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,e,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(e=s.values&&s.values.length||1,n.length>e&&(n.slice(e).remove(),n=n.slice(0,e)),t=n.length;e>t;t++)o.push(a);this.handles=n.add(i(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(u){i(this).data("ui-slider-handle-index",u)})},_createRange:function(){var t=this.options,e="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:i.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=i("<div></div>").appendTo(this.element),e="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(e+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var e,s,n,a,o,u,r,h,l=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),e={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(e),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(c){var m=Math.abs(s-l.values(c));(n>m||n===m&&(c===l._lastChangedValue||l.values(c)===d.min))&&(n=m,a=i(this),o=c)}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),r=a.offset(),h=!i(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:t.pageX-r.left-a.width()/2,top:t.pageY-r.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,s),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,s,n,a,o;return this.orientation==="horizontal"?(e=this.elementSize.width,s=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,s=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),n=s/e,n>1&&(n=1),0>n&&(n=0),this.orientation==="vertical"&&(n=1-n),a=this._valueMax()-this._valueMin(),o=this._valueMin()+n*a,this._trimAlignValue(o)},_start:function(t,e){var s={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(s.value=this.values(e),s.values=this.values()),this._trigger("start",t,s)},_slide:function(t,e,s){var n,a,o;this.options.values&&this.options.values.length?(n=this.values(e?0:1),this.options.values.length===2&&this.options.range===!0&&(e===0&&s>n||e===1&&n>s)&&(s=n),s!==this.values(e)&&(a=this.values(),a[e]=s,o=this._trigger("slide",t,{handle:this.handles[e],value:s,values:a}),n=this.values(e?0:1),o!==!1&&this.values(e,s))):s!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:s}),o!==!1&&this.value(s))},_stop:function(t,e){var s={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(s.value=this.values(e),s.values=this.values()),this._trigger("stop",t,s)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var s={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(s.value=this.values(e),s.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,s)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,e){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(e),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!i.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,e){var s,n=0;switch(t==="range"&&this.options.range===!0&&(e==="min"?(this.options.value=this._values(0),this.options.values=null):e==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),i.isArray(this.options.values)&&(n=this.options.values.length),t==="disabled"&&this.element.toggleClass("ui-state-disabled",!!e),this._super(t,e),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css(e==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,s,n;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(s=this.options.values.slice(),n=0;s.length>n;n+=1)s[n]=this._trimAlignValue(s[n]);return s}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,s=(t-this._valueMin())%e,n=t-s;return 2*Math.abs(s)>=e&&(n+=s>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),s=this.options.step,n=Math.floor(+(t-e).toFixed(this._precision())/s)*s;t=n+e,this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return this.options.min!==null&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,s=e.indexOf(".");return s===-1?0:e.length-s-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,e,s,n,a,o=this.options.range,u=this.options,r=this,h=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(d){e=100*((r.values(d)-r._valueMin())/(r._valueMax()-r._valueMin())),l[r.orientation==="horizontal"?"left":"bottom"]=e+"%",i(this).stop(1,1)[h?"animate":"css"](l,u.animate),r.options.range===!0&&(r.orientation==="horizontal"?(d===0&&r.range.stop(1,1)[h?"animate":"css"]({left:e+"%"},u.animate),d===1&&r.range[h?"animate":"css"]({width:e-t+"%"},{queue:!1,duration:u.animate})):(d===0&&r.range.stop(1,1)[h?"animate":"css"]({bottom:e+"%"},u.animate),d===1&&r.range[h?"animate":"css"]({height:e-t+"%"},{queue:!1,duration:u.animate}))),t=e}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),e=a!==n?100*((s-n)/(a-n)):0,l[this.orientation==="horizontal"?"left":"bottom"]=e+"%",this.handle.stop(1,1)[h?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[h?"animate":"css"]({width:e+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[h?"animate":"css"]({width:100-e+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[h?"animate":"css"]({height:e+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[h?"animate":"css"]({height:100-e+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var e,s,n,a,o=i(t.target).data("ui-slider-handle-index");switch(t.keyCode){case i.ui.keyCode.HOME:case i.ui.keyCode.END:case i.ui.keyCode.PAGE_UP:case i.ui.keyCode.PAGE_DOWN:case i.ui.keyCode.UP:case i.ui.keyCode.RIGHT:case i.ui.keyCode.DOWN:case i.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,i(t.target).addClass("ui-state-active"),e=this._start(t,o),e===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case i.ui.keyCode.HOME:n=this._valueMin();break;case i.ui.keyCode.END:n=this._valueMax();break;case i.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case i.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case i.ui.keyCode.UP:case i.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case i.ui.keyCode.DOWN:case i.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var e=i(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,e),this._change(t,e),i(t.target).removeClass("ui-state-active"))}}})});
