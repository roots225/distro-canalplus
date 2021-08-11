"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[855],{2855:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var i=t(5166),a=t(2219),r=t(489),o=Object.assign;const d=(0,i.aZ)({name:"GmapsMarker",props:{animation:{type:Number,default:void 0},clickable:{type:Boolean,default:void 0},draggable:{type:Boolean,default:void 0},icon:{type:[String,Object],default:void 0},label:{type:[String,Object],default:void 0},opacity:{type:[String,Number],default:void 0},options:{type:Object,default:function(){return{}}},position:{type:Object,default:void 0},title:{type:String,default:void 0},visible:{type:Boolean,default:void 0},zIndex:{type:[String,Number],default:void 0},delay:{type:[Number,String],default:15}},emits:["animation_changed","click","clickable_changed","contextmenu","cursor_changed","dblclick","drag","dragend","draggable_changed","dragstart","flat_changed","icon_changed","mousedown","mouseout","mouseover","mouseup","position_changed","rightclick","shape_changed","title_changed","visible_changed","zindex_changed"],setup:function(e,n){var t=n.emit,d=null,c=[],u=(0,i.f3)("$getmap"),l=(0,i.f3)("$gmapHandleError"),g=function(e){return l(e,"Marker")},s=(0,i.Fl)((function(){var n=o({},e.options);return void 0!==e.animation&&(n.animation=e.animation),void 0!==e.clickable&&(n.clickable=e.clickable),void 0!==e.draggable&&(n.draggable=e.draggable),void 0!==e.icon&&(n.icon=e.icon),void 0!==e.label&&(n.label=e.label),void 0!==e.opacity&&(n.opacity=+e.opacity),void 0!==e.position&&(n.position=e.position),void 0!==e.title&&(n.title=e.title),void 0!==e.visible&&(n.visible=e.visible),void 0!==e.zIndex&&(n.zIndex=+e.zIndex),n}));return(0,i.YP)((function(){return e}),(function(){d&&d.setOptions(s.value)}),{deep:!0}),(0,i.bv)((function(){if(!s.value.position)return g(new Error("A position is required by every marker. Set this as either a position prop, or a position property of the options prop."));(0,a.IC)().then((function(n){var i=u();(d=new n.Marker(o({map:i},s.value)))?function(n){var i=google.maps.event;c.push(i.addListener(n,"position_changed",(0,r.d)((function(){var e;return t("position_changed",null==(e=n.getPosition())?void 0:e.toJSON())}),+e.delay)),i.addListener(n,"drag",(0,r.d)((function(n){return t("drag",n.latLng.toJSON(),+e.delay)}))),i.addListener(n,"animation_changed",(function(){return t("animation_changed",n.getAnimation())})),i.addListener(n,"click",(function(e){return t("click",e.latLng.toJSON())})),i.addListener(n,"clickable_changed",(function(){return t("clickable_changed",n.getClickable())})),i.addListener(n,"contextmenu",(function(e){return t("contextmenu",e.latLng.toJSON())})),i.addListener(n,"cursor_changed",(function(){return t("cursor_changed",n.getCursor())})),i.addListener(n,"dblclick",(function(e){return t("dblclick",e.latLng.toJSON())})),i.addListener(n,"dragend",(function(e){return t("dragend",e.latLng.toJSON())})),i.addListener(n,"draggable_changed",(function(){return t("draggable_changed",n.getDraggable())})),i.addListener(n,"dragstart",(function(e){return t("dragstart",e.latLng.toJSON())})),i.addListener(n,"flat_changed",(function(e){return t("flat_changed",e)})),i.addListener(n,"icon_changed",(function(){return t("icon_changed",n.getIcon())})),i.addListener(n,"mousedown",(function(e){return t("mousedown",e.latLng.toJSON())})),i.addListener(n,"mouseout",(function(e){return t("mouseout",e.latLng.toJSON())})),i.addListener(n,"mouseover",(function(e){return t("mouseover",e.latLng.toJSON())})),i.addListener(n,"mouseup",(function(e){return t("mouseup",e.latLng.toJSON())})),i.addListener(n,"rightclick",(function(e){return t("rightclick",e.latLng.toJSON())})),i.addListener(n,"shape_changed",(function(){return t("shape_changed",n.getShape())})),i.addListener(n,"title_changed",(function(){return t("title_changed",n.getTitle())})),i.addListener(n,"visible_changed",(function(){return t("visible_changed",n.getVisible())})),i.addListener(n,"zindex_changed",(function(){return t("zindex_changed",n.getZIndex())})))}(d):g(new Error("There was a problem creating the marker."))})).catch((function(e){return g(e)}))})),(0,i.Jd)((function(){c.forEach((function(e){return e.remove()})),(0,a.IC)().then((function(e){d&&d.setMap(null),e.event.clearInstanceListeners(d)})).catch((function(e){return g(e)}))})),function(){}}})},489:(e,n,t)=>{t.d(n,{d:()=>i});var i=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return function(){for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,a)}),t)}}}}]);