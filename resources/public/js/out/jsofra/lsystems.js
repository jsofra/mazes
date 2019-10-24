// Compiled by ClojureScript 1.10.520 {}
goog.provide('jsofra.lsystems');
goog.require('cljs.core');
goog.require('clojure.string');
jsofra.lsystems.gen_lsystem = (function jsofra$lsystems$gen_lsystem(axiom,rules){
var rules_pattern = cljs.core.re_pattern.call(null,clojure.string.join.call(null,"|",cljs.core.keys.call(null,rules)));
return cljs.core.iterate.call(null,((function (rules_pattern){
return (function (p1__22712_SHARP_){
return clojure.string.replace.call(null,p1__22712_SHARP_,rules_pattern,rules);
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
jsofra.lsystems.clear_canvas = (function jsofra$lsystems$clear_canvas(p__22713){
var map__22714 = p__22713;
var map__22714__$1 = (((((!((map__22714 == null))))?(((((map__22714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22714):map__22714);
var ctx = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var width = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"height","height",1025178622));
ctx.save();

ctx.setTransform((1),(0),(0),(1),(0),(0));

ctx.clearRect((0),(0),width,height);

return ctx.restore();
});
jsofra.lsystems.new_point = (function jsofra$lsystems$new_point(p__22716,dist,dir){
var vec__22717 = p__22716;
var x = cljs.core.nth.call(null,vec__22717,(0),null);
var y = cljs.core.nth.call(null,vec__22717,(1),null);
var dir__$1 = (dir * (Math.PI / (180)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dist * Math.cos(dir__$1))),(y + (dist * Math.sin(dir__$1)))], null);
});
jsofra.lsystems.generate_points = (function jsofra$lsystems$generate_points(start_point,steps){
var G__22723 = steps;
var vec__22724 = G__22723;
var seq__22725 = cljs.core.seq.call(null,vec__22724);
var first__22726 = cljs.core.first.call(null,seq__22725);
var seq__22725__$1 = cljs.core.next.call(null,seq__22725);
var step = first__22726;
var steps__$1 = seq__22725__$1;
var angle = (90);
var points = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_point], null);
var G__22723__$1 = G__22723;
var angle__$1 = angle;
var points__$1 = points;
while(true){
var vec__22731 = G__22723__$1;
var seq__22732 = cljs.core.seq.call(null,vec__22731);
var first__22733 = cljs.core.first.call(null,seq__22732);
var seq__22732__$1 = cljs.core.next.call(null,seq__22732);
var step__$1 = first__22733;
var steps__$2 = seq__22732__$1;
var angle__$2 = angle__$1;
var points__$2 = points__$1;
if(cljs.core.truth_(step__$1)){
var dir = cljs.core.mod.call(null,(function (){var G__22734 = step__$1;
switch (G__22734) {
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
var G__22736 = steps__$2;
var G__22737 = dir;
var G__22738 = ((cljs.core._EQ_.call(null,step__$1,"F"))?cljs.core.conj.call(null,points__$2,jsofra.lsystems.new_point.call(null,cljs.core.last.call(null,points__$2),(10),dir)):points__$2);
G__22723__$1 = G__22736;
angle__$1 = G__22737;
points__$1 = G__22738;
continue;
} else {
return points__$2;
}
break;
}
});
jsofra.lsystems.draw_line = (function jsofra$lsystems$draw_line(p__22739,points){
var map__22740 = p__22739;
var map__22740__$1 = (((((!((map__22740 == null))))?(((((map__22740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22740):map__22740);
var ctx = cljs.core.get.call(null,map__22740__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var vec__22742 = points;
var seq__22743 = cljs.core.seq.call(null,vec__22742);
var first__22744 = cljs.core.first.call(null,seq__22743);
var seq__22743__$1 = cljs.core.next.call(null,seq__22743);
var vec__22745 = first__22744;
var start_x = cljs.core.nth.call(null,vec__22745,(0),null);
var start_y = cljs.core.nth.call(null,vec__22745,(1),null);
var points__$1 = seq__22743__$1;
ctx.beginPath();

ctx.moveTo(start_x,start_y);

var seq__22748_22764 = cljs.core.seq.call(null,points__$1);
var chunk__22749_22765 = null;
var count__22750_22766 = (0);
var i__22751_22767 = (0);
while(true){
if((i__22751_22767 < count__22750_22766)){
var vec__22758_22768 = cljs.core._nth.call(null,chunk__22749_22765,i__22751_22767);
var x_22769 = cljs.core.nth.call(null,vec__22758_22768,(0),null);
var y_22770 = cljs.core.nth.call(null,vec__22758_22768,(1),null);
ctx.lineTo(x_22769,y_22770);


var G__22771 = seq__22748_22764;
var G__22772 = chunk__22749_22765;
var G__22773 = count__22750_22766;
var G__22774 = (i__22751_22767 + (1));
seq__22748_22764 = G__22771;
chunk__22749_22765 = G__22772;
count__22750_22766 = G__22773;
i__22751_22767 = G__22774;
continue;
} else {
var temp__5735__auto___22775 = cljs.core.seq.call(null,seq__22748_22764);
if(temp__5735__auto___22775){
var seq__22748_22776__$1 = temp__5735__auto___22775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22748_22776__$1)){
var c__4550__auto___22777 = cljs.core.chunk_first.call(null,seq__22748_22776__$1);
var G__22778 = cljs.core.chunk_rest.call(null,seq__22748_22776__$1);
var G__22779 = c__4550__auto___22777;
var G__22780 = cljs.core.count.call(null,c__4550__auto___22777);
var G__22781 = (0);
seq__22748_22764 = G__22778;
chunk__22749_22765 = G__22779;
count__22750_22766 = G__22780;
i__22751_22767 = G__22781;
continue;
} else {
var vec__22761_22782 = cljs.core.first.call(null,seq__22748_22776__$1);
var x_22783 = cljs.core.nth.call(null,vec__22761_22782,(0),null);
var y_22784 = cljs.core.nth.call(null,vec__22761_22782,(1),null);
ctx.lineTo(x_22783,y_22784);


var G__22785 = cljs.core.next.call(null,seq__22748_22776__$1);
var G__22786 = null;
var G__22787 = (0);
var G__22788 = (0);
seq__22748_22764 = G__22785;
chunk__22749_22765 = G__22786;
count__22750_22766 = G__22787;
i__22751_22767 = G__22788;
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

jsofra.lsystems.draw_line.call(null,jsofra.lsystems.context,jsofra.lsystems.generate_points.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),cljs.core.nth.call(null,jsofra.lsystems.hilbert_curve,(5))));

//# sourceMappingURL=lsystems.js.map
