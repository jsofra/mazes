// Compiled by ClojureScript 1.10.520 {}
goog.provide('jsofra.lsystems');
goog.require('cljs.core');
goog.require('clojure.string');
jsofra.lsystems.gen_lsystem = (function jsofra$lsystems$gen_lsystem(axiom,rules){
var rules_pattern = cljs.core.re_pattern.call(null,clojure.string.join.call(null,"|",cljs.core.keys.call(null,rules)));
return cljs.core.iterate.call(null,((function (rules_pattern){
return (function (p1__22548_SHARP_){
return clojure.string.replace.call(null,p1__22548_SHARP_,rules_pattern,rules);
});})(rules_pattern))
,axiom);
});
jsofra.lsystems.hilbert_curve = jsofra.lsystems.gen_lsystem.call(null,"A",new cljs.core.PersistentArrayMap(null, 2, ["A","-BF+AFA+FB-","B","+AF-BFB-FA+"], null));
jsofra.lsystems.request_animation_frame = (function (){var or__4131__auto__ = requestAnimationFrame;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return webkitRequestAnimationFrame;
}
})();
jsofra.lsystems.get_canvas_context_from_id = (function jsofra$lsystems$get_canvas_context_from_id(id){
var canvas = document.getElementById(id);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"width","width",-384071477),canvas.width,new cljs.core.Keyword(null,"height","height",1025178622),canvas.height,new cljs.core.Keyword(null,"ctx","ctx",-493610118),canvas.getContext("2d")], null);
});
jsofra.lsystems.context = jsofra.lsystems.get_canvas_context_from_id.call(null,"canvas");
jsofra.lsystems.clear_canvas = (function jsofra$lsystems$clear_canvas(p__22549){
var map__22550 = p__22549;
var map__22550__$1 = (((((!((map__22550 == null))))?(((((map__22550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22550):map__22550);
var ctx = cljs.core.get.call(null,map__22550__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var width = cljs.core.get.call(null,map__22550__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22550__$1,new cljs.core.Keyword(null,"height","height",1025178622));
ctx.save();

ctx.setTransform((1),(0),(0),(1),(0),(0));

ctx.clearRect((0),(0),width,height);

return ctx.restore();
});
jsofra.lsystems.new_point = (function jsofra$lsystems$new_point(p__22552,dist,dir){
var vec__22553 = p__22552;
var x = cljs.core.nth.call(null,vec__22553,(0),null);
var y = cljs.core.nth.call(null,vec__22553,(1),null);
var dir__$1 = (dir * (Math.PI / (180)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dist * Math.cos(dir__$1))),(y + (dist * Math.sin(dir__$1)))], null);
});
jsofra.lsystems.generate_points = (function jsofra$lsystems$generate_points(start_point,steps){
var G__22559 = steps;
var vec__22560 = G__22559;
var seq__22561 = cljs.core.seq.call(null,vec__22560);
var first__22562 = cljs.core.first.call(null,seq__22561);
var seq__22561__$1 = cljs.core.next.call(null,seq__22561);
var step = first__22562;
var steps__$1 = seq__22561__$1;
var angle = (90);
var points = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_point], null);
var G__22559__$1 = G__22559;
var angle__$1 = angle;
var points__$1 = points;
while(true){
var vec__22567 = G__22559__$1;
var seq__22568 = cljs.core.seq.call(null,vec__22567);
var first__22569 = cljs.core.first.call(null,seq__22568);
var seq__22568__$1 = cljs.core.next.call(null,seq__22568);
var step__$1 = first__22569;
var steps__$2 = seq__22568__$1;
var angle__$2 = angle__$1;
var points__$2 = points__$1;
if(cljs.core.truth_(step__$1)){
var dir = cljs.core.mod.call(null,(function (){var G__22570 = step__$1;
switch (G__22570) {
case "+":
return (angle__$2 + (90));

break;
case "-":
return (angle__$2 - (90));

break;
default:
return angle__$2;

}
})(),(360));
var G__22572 = steps__$2;
var G__22573 = dir;
var G__22574 = ((cljs.core._EQ_.call(null,step__$1,"F"))?cljs.core.conj.call(null,points__$2,jsofra.lsystems.new_point.call(null,cljs.core.last.call(null,points__$2),(10),dir)):points__$2);
G__22559__$1 = G__22572;
angle__$1 = G__22573;
points__$1 = G__22574;
continue;
} else {
return points__$2;
}
break;
}
});
jsofra.lsystems.draw_line = (function jsofra$lsystems$draw_line(p__22575,points){
var map__22576 = p__22575;
var map__22576__$1 = (((((!((map__22576 == null))))?(((((map__22576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22576):map__22576);
var ctx = cljs.core.get.call(null,map__22576__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var vec__22578 = points;
var seq__22579 = cljs.core.seq.call(null,vec__22578);
var first__22580 = cljs.core.first.call(null,seq__22579);
var seq__22579__$1 = cljs.core.next.call(null,seq__22579);
var vec__22581 = first__22580;
var start_x = cljs.core.nth.call(null,vec__22581,(0),null);
var start_y = cljs.core.nth.call(null,vec__22581,(1),null);
var points__$1 = seq__22579__$1;
ctx.beginPath();

ctx.moveTo(start_x,start_y);

var seq__22584_22600 = cljs.core.seq.call(null,points__$1);
var chunk__22585_22601 = null;
var count__22586_22602 = (0);
var i__22587_22603 = (0);
while(true){
if((i__22587_22603 < count__22586_22602)){
var vec__22594_22604 = cljs.core._nth.call(null,chunk__22585_22601,i__22587_22603);
var x_22605 = cljs.core.nth.call(null,vec__22594_22604,(0),null);
var y_22606 = cljs.core.nth.call(null,vec__22594_22604,(1),null);
ctx.lineTo(x_22605,y_22606);


var G__22607 = seq__22584_22600;
var G__22608 = chunk__22585_22601;
var G__22609 = count__22586_22602;
var G__22610 = (i__22587_22603 + (1));
seq__22584_22600 = G__22607;
chunk__22585_22601 = G__22608;
count__22586_22602 = G__22609;
i__22587_22603 = G__22610;
continue;
} else {
var temp__5735__auto___22611 = cljs.core.seq.call(null,seq__22584_22600);
if(temp__5735__auto___22611){
var seq__22584_22612__$1 = temp__5735__auto___22611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22584_22612__$1)){
var c__4550__auto___22613 = cljs.core.chunk_first.call(null,seq__22584_22612__$1);
var G__22614 = cljs.core.chunk_rest.call(null,seq__22584_22612__$1);
var G__22615 = c__4550__auto___22613;
var G__22616 = cljs.core.count.call(null,c__4550__auto___22613);
var G__22617 = (0);
seq__22584_22600 = G__22614;
chunk__22585_22601 = G__22615;
count__22586_22602 = G__22616;
i__22587_22603 = G__22617;
continue;
} else {
var vec__22597_22618 = cljs.core.first.call(null,seq__22584_22612__$1);
var x_22619 = cljs.core.nth.call(null,vec__22597_22618,(0),null);
var y_22620 = cljs.core.nth.call(null,vec__22597_22618,(1),null);
ctx.lineTo(x_22619,y_22620);


var G__22621 = cljs.core.next.call(null,seq__22584_22612__$1);
var G__22622 = null;
var G__22623 = (0);
var G__22624 = (0);
seq__22584_22600 = G__22621;
chunk__22585_22601 = G__22622;
count__22586_22602 = G__22623;
i__22587_22603 = G__22624;
continue;
}
} else {
}
}
break;
}

(ctx["lineWidth"] = (1));

return ctx.stroke();
});
jsofra.lsystems.clear_canvas.call(null,jsofra.lsystems.context);

jsofra.lsystems.draw_line.call(null,jsofra.lsystems.context,jsofra.lsystems.generate_points.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),cljs.core.nth.call(null,jsofra.lsystems.hilbert_curve,(4))));

//# sourceMappingURL=lsystems.js.map
