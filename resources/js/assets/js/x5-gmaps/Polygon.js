var e=Object.assign;import{defineComponent as t,inject as o,computed as a,watch as r,onMounted as i,onBeforeUnmount as l}from"vue";import{getMaps as s}from"./x5-gmaps.es.js";import{d}from"./debounce.js";var n=t({name:"gmapsPolygon",props:{clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},fillColor:{type:String,default:"black"},fillOpacity:{type:[String,Number],default:.3},geodesic:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},paths:{type:Array,default:void 0},strokeColor:{type:String,default:"black"},strokeOpacity:{type:[String,Number],default:1},strokePosition:{type:[String,Number],default:0},strokeWeight:{type:[String,Number],default:3},visible:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:0},delay:{type:[Number,String],default:15}},emits:["click","contextmenu","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick","path_changed"],setup(t,{emit:n}){let p=null;const g=[],c=o("$getmap"),u=o("$gmapHandleError"),m=e=>u(e,"Polygon"),y=a((()=>{const o=e({},t.options);return void 0!==t.clickable&&(o.clickable=t.clickable),void 0!==t.draggable&&(o.draggable=t.draggable),void 0!==t.editable&&(o.editable=t.editable),void 0!==t.fillColor&&(o.fillColor=t.fillColor),void 0!==t.fillOpacity&&(o.fillOpacity=+t.fillOpacity),void 0!==t.geodesic&&(o.geodesic=t.geodesic),void 0!==t.paths&&(o.paths=t.paths),void 0!==t.strokeColor&&(o.strokeColor=t.strokeColor),void 0!==t.strokeOpacity&&(o.strokeOpacity=+t.strokeOpacity),void 0!==t.strokePosition&&(o.strokePosition=+t.strokePosition),void 0!==t.strokeWeight&&(o.strokeWeight=+t.strokeWeight),void 0!==t.visible&&(o.visible=t.visible),void 0!==t.zIndex&&(o.zIndex=+t.zIndex),o}));r((()=>t),(()=>{p&&p.setOptions(y.value)}),{deep:!0});return i((()=>{if(!y.value.paths)return m(new Error("A paths property is required by every polyline. Set this as either a position prop, or a position property of the options prop."));s().then((o=>{const a=c();console.log("polygon map",a),p=new o.Polygon(e({map:a},y.value)),p?(e=>{const o=google.maps.event,a=()=>n("path_changed",e.getPaths().getArray().map((e=>e.getArray().map((e=>e.toJSON())))));g.push(o.addListener(e,"drag",d((e=>n("drag",e.latLng.toJSON(),+t.delay)))),o.addListener(e,"mousemove",d((e=>n("mousemove",e)),+t.delay)),o.addListener(e,"click",(e=>n("click",e.latLng.toJSON()))),o.addListener(e,"contextmenu",(e=>n("contextmenu",e.latLng.toJSON()))),o.addListener(e,"dblclick",(e=>n("dblclick",e.latLng.toJSON()))),o.addListener(e,"dragend",(e=>n("dragend",e.latLng.toJSON()))),o.addListener(e,"dragstart",(e=>n("dragstart",e.latLng.toJSON()))),o.addListener(e,"mousedown",(e=>n("mousedown",e.latLng.toJSON()))),o.addListener(e,"mousemove",(e=>d((()=>n("mousemove",e.latLng.toJSON())),100))),o.addListener(e,"mouseout",(e=>n("mouseout",e.latLng.toJSON()))),o.addListener(e,"mouseover",(e=>n("mouseover",e.latLng.toJSON()))),o.addListener(e,"mouseup",(e=>{n("mouseup",e.latLng.toJSON()),a()})),o.addListener(e,"rightclick",(e=>n("rightclick",e.latLng.toJSON()))),e.getPath().addListener("remove_at",(()=>a())),e.getPath().addListener("insert_at",(()=>a())),e.getPath().addListener("set_at",(()=>a())))})(p):m(new Error("There was a problem creating the shape."))})).catch((e=>m(e)))})),l((()=>{g.forEach((e=>e.remove())),s().then((e=>{p&&p.setMap(null),e.event.clearInstanceListeners(p)})).catch((e=>m(e)))})),()=>{}}});export default n;