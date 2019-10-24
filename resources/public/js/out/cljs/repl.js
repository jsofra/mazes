// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24233){
var map__24234 = p__24233;
var map__24234__$1 = (((((!((map__24234 == null))))?(((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24234):map__24234);
var m = map__24234__$1;
var n = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24236_24268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24237_24269 = null;
var count__24238_24270 = (0);
var i__24239_24271 = (0);
while(true){
if((i__24239_24271 < count__24238_24270)){
var f_24272 = cljs.core._nth.call(null,chunk__24237_24269,i__24239_24271);
cljs.core.println.call(null,"  ",f_24272);


var G__24273 = seq__24236_24268;
var G__24274 = chunk__24237_24269;
var G__24275 = count__24238_24270;
var G__24276 = (i__24239_24271 + (1));
seq__24236_24268 = G__24273;
chunk__24237_24269 = G__24274;
count__24238_24270 = G__24275;
i__24239_24271 = G__24276;
continue;
} else {
var temp__5735__auto___24277 = cljs.core.seq.call(null,seq__24236_24268);
if(temp__5735__auto___24277){
var seq__24236_24278__$1 = temp__5735__auto___24277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24236_24278__$1)){
var c__4550__auto___24279 = cljs.core.chunk_first.call(null,seq__24236_24278__$1);
var G__24280 = cljs.core.chunk_rest.call(null,seq__24236_24278__$1);
var G__24281 = c__4550__auto___24279;
var G__24282 = cljs.core.count.call(null,c__4550__auto___24279);
var G__24283 = (0);
seq__24236_24268 = G__24280;
chunk__24237_24269 = G__24281;
count__24238_24270 = G__24282;
i__24239_24271 = G__24283;
continue;
} else {
var f_24284 = cljs.core.first.call(null,seq__24236_24278__$1);
cljs.core.println.call(null,"  ",f_24284);


var G__24285 = cljs.core.next.call(null,seq__24236_24278__$1);
var G__24286 = null;
var G__24287 = (0);
var G__24288 = (0);
seq__24236_24268 = G__24285;
chunk__24237_24269 = G__24286;
count__24238_24270 = G__24287;
i__24239_24271 = G__24288;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24289 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24289);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24289)))?cljs.core.second.call(null,arglists_24289):arglists_24289));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24240_24290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24241_24291 = null;
var count__24242_24292 = (0);
var i__24243_24293 = (0);
while(true){
if((i__24243_24293 < count__24242_24292)){
var vec__24254_24294 = cljs.core._nth.call(null,chunk__24241_24291,i__24243_24293);
var name_24295 = cljs.core.nth.call(null,vec__24254_24294,(0),null);
var map__24257_24296 = cljs.core.nth.call(null,vec__24254_24294,(1),null);
var map__24257_24297__$1 = (((((!((map__24257_24296 == null))))?(((((map__24257_24296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24257_24296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24257_24296):map__24257_24296);
var doc_24298 = cljs.core.get.call(null,map__24257_24297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24299 = cljs.core.get.call(null,map__24257_24297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24295);

cljs.core.println.call(null," ",arglists_24299);

if(cljs.core.truth_(doc_24298)){
cljs.core.println.call(null," ",doc_24298);
} else {
}


var G__24300 = seq__24240_24290;
var G__24301 = chunk__24241_24291;
var G__24302 = count__24242_24292;
var G__24303 = (i__24243_24293 + (1));
seq__24240_24290 = G__24300;
chunk__24241_24291 = G__24301;
count__24242_24292 = G__24302;
i__24243_24293 = G__24303;
continue;
} else {
var temp__5735__auto___24304 = cljs.core.seq.call(null,seq__24240_24290);
if(temp__5735__auto___24304){
var seq__24240_24305__$1 = temp__5735__auto___24304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24240_24305__$1)){
var c__4550__auto___24306 = cljs.core.chunk_first.call(null,seq__24240_24305__$1);
var G__24307 = cljs.core.chunk_rest.call(null,seq__24240_24305__$1);
var G__24308 = c__4550__auto___24306;
var G__24309 = cljs.core.count.call(null,c__4550__auto___24306);
var G__24310 = (0);
seq__24240_24290 = G__24307;
chunk__24241_24291 = G__24308;
count__24242_24292 = G__24309;
i__24243_24293 = G__24310;
continue;
} else {
var vec__24259_24311 = cljs.core.first.call(null,seq__24240_24305__$1);
var name_24312 = cljs.core.nth.call(null,vec__24259_24311,(0),null);
var map__24262_24313 = cljs.core.nth.call(null,vec__24259_24311,(1),null);
var map__24262_24314__$1 = (((((!((map__24262_24313 == null))))?(((((map__24262_24313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24262_24313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24262_24313):map__24262_24313);
var doc_24315 = cljs.core.get.call(null,map__24262_24314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24316 = cljs.core.get.call(null,map__24262_24314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24312);

cljs.core.println.call(null," ",arglists_24316);

if(cljs.core.truth_(doc_24315)){
cljs.core.println.call(null," ",doc_24315);
} else {
}


var G__24317 = cljs.core.next.call(null,seq__24240_24305__$1);
var G__24318 = null;
var G__24319 = (0);
var G__24320 = (0);
seq__24240_24290 = G__24317;
chunk__24241_24291 = G__24318;
count__24242_24292 = G__24319;
i__24243_24293 = G__24320;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__24264 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24265 = null;
var count__24266 = (0);
var i__24267 = (0);
while(true){
if((i__24267 < count__24266)){
var role = cljs.core._nth.call(null,chunk__24265,i__24267);
var temp__5735__auto___24321__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24321__$1)){
var spec_24322 = temp__5735__auto___24321__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24322));
} else {
}


var G__24323 = seq__24264;
var G__24324 = chunk__24265;
var G__24325 = count__24266;
var G__24326 = (i__24267 + (1));
seq__24264 = G__24323;
chunk__24265 = G__24324;
count__24266 = G__24325;
i__24267 = G__24326;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__24264);
if(temp__5735__auto____$1){
var seq__24264__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24264__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24264__$1);
var G__24327 = cljs.core.chunk_rest.call(null,seq__24264__$1);
var G__24328 = c__4550__auto__;
var G__24329 = cljs.core.count.call(null,c__4550__auto__);
var G__24330 = (0);
seq__24264 = G__24327;
chunk__24265 = G__24328;
count__24266 = G__24329;
i__24267 = G__24330;
continue;
} else {
var role = cljs.core.first.call(null,seq__24264__$1);
var temp__5735__auto___24331__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24331__$2)){
var spec_24332 = temp__5735__auto___24331__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24332));
} else {
}


var G__24333 = cljs.core.next.call(null,seq__24264__$1);
var G__24334 = null;
var G__24335 = (0);
var G__24336 = (0);
seq__24264 = G__24333;
chunk__24265 = G__24334;
count__24266 = G__24335;
i__24267 = G__24336;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24337 = cljs.core.conj.call(null,via,t);
var G__24338 = cljs.core.ex_cause.call(null,t);
via = G__24337;
t = G__24338;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24341 = datafied_throwable;
var map__24341__$1 = (((((!((map__24341 == null))))?(((((map__24341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24341):map__24341);
var via = cljs.core.get.call(null,map__24341__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__24341__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__24341__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24342 = cljs.core.last.call(null,via);
var map__24342__$1 = (((((!((map__24342 == null))))?(((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var type = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24343 = data;
var map__24343__$1 = (((((!((map__24343 == null))))?(((((map__24343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24343):map__24343);
var problems = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24344 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__24344__$1 = (((((!((map__24344 == null))))?(((((map__24344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24344):map__24344);
var top_data = map__24344__$1;
var source = cljs.core.get.call(null,map__24344__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__24349 = phase;
var G__24349__$1 = (((G__24349 instanceof cljs.core.Keyword))?G__24349.fqn:null);
switch (G__24349__$1) {
case "read-source":
var map__24350 = data;
var map__24350__$1 = (((((!((map__24350 == null))))?(((((map__24350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24350):map__24350);
var line = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24352 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__24352__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24352,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24352);
var G__24352__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24352__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24352__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24352__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24353 = top_data;
var G__24353__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24353,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24353);
var G__24353__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24353__$1);
var G__24353__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24353__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24353__$2);
var G__24353__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24353__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24353__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24353__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24353__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24354 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24354,(0),null);
var method = cljs.core.nth.call(null,vec__24354,(1),null);
var file = cljs.core.nth.call(null,vec__24354,(2),null);
var line = cljs.core.nth.call(null,vec__24354,(3),null);
var G__24357 = top_data;
var G__24357__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__24357,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24357);
var G__24357__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__24357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24357__$1);
var G__24357__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__24357__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24357__$2);
var G__24357__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24357__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24357__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24357__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24357__$4;
}

break;
case "execution":
var vec__24358 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24358,(0),null);
var method = cljs.core.nth.call(null,vec__24358,(1),null);
var file = cljs.core.nth.call(null,vec__24358,(2),null);
var line = cljs.core.nth.call(null,vec__24358,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__24358,source__$1,method,file,line,G__24349,G__24349__$1,map__24341,map__24341__$1,via,trace,phase,map__24342,map__24342__$1,type,message,data,map__24343,map__24343__$1,problems,fn,caller,map__24344,map__24344__$1,top_data,source){
return (function (p1__24340_SHARP_){
var or__4131__auto__ = (p1__24340_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__24340_SHARP_);
}
});})(vec__24358,source__$1,method,file,line,G__24349,G__24349__$1,map__24341,map__24341__$1,via,trace,phase,map__24342,map__24342__$1,type,message,data,map__24343,map__24343__$1,problems,fn,caller,map__24344,map__24344__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__24361 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24361__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__24361,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24361);
var G__24361__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24361__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24361__$1);
var G__24361__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__24361__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24361__$2);
var G__24361__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__24361__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24361__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24361__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24361__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24349__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24365){
var map__24366 = p__24365;
var map__24366__$1 = (((((!((map__24366 == null))))?(((((map__24366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24366):map__24366);
var triage_data = map__24366__$1;
var phase = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24368 = phase;
var G__24368__$1 = (((G__24368 instanceof cljs.core.Keyword))?G__24368.fqn:null);
switch (G__24368__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24369_24378 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24370_24379 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24371_24380 = true;
var _STAR_print_fn_STAR__temp_val__24372_24381 = ((function (_STAR_print_newline_STAR__orig_val__24369_24378,_STAR_print_fn_STAR__orig_val__24370_24379,_STAR_print_newline_STAR__temp_val__24371_24380,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__24369_24378,_STAR_print_fn_STAR__orig_val__24370_24379,_STAR_print_newline_STAR__temp_val__24371_24380,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24371_24380;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24372_24381;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__24369_24378,_STAR_print_fn_STAR__orig_val__24370_24379,_STAR_print_newline_STAR__temp_val__24371_24380,_STAR_print_fn_STAR__temp_val__24372_24381,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__24369_24378,_STAR_print_fn_STAR__orig_val__24370_24379,_STAR_print_newline_STAR__temp_val__24371_24380,_STAR_print_fn_STAR__temp_val__24372_24381,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__24363_SHARP_){
return cljs.core.dissoc.call(null,p1__24363_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__24369_24378,_STAR_print_fn_STAR__orig_val__24370_24379,_STAR_print_newline_STAR__temp_val__24371_24380,_STAR_print_fn_STAR__temp_val__24372_24381,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__24369_24378,_STAR_print_fn_STAR__orig_val__24370_24379,_STAR_print_newline_STAR__temp_val__24371_24380,_STAR_print_fn_STAR__temp_val__24372_24381,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24370_24379;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24369_24378;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24373_24382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24374_24383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24375_24384 = true;
var _STAR_print_fn_STAR__temp_val__24376_24385 = ((function (_STAR_print_newline_STAR__orig_val__24373_24382,_STAR_print_fn_STAR__orig_val__24374_24383,_STAR_print_newline_STAR__temp_val__24375_24384,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__24373_24382,_STAR_print_fn_STAR__orig_val__24374_24383,_STAR_print_newline_STAR__temp_val__24375_24384,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24375_24384;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24376_24385;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__24373_24382,_STAR_print_fn_STAR__orig_val__24374_24383,_STAR_print_newline_STAR__temp_val__24375_24384,_STAR_print_fn_STAR__temp_val__24376_24385,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__24373_24382,_STAR_print_fn_STAR__orig_val__24374_24383,_STAR_print_newline_STAR__temp_val__24375_24384,_STAR_print_fn_STAR__temp_val__24376_24385,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__24364_SHARP_){
return cljs.core.dissoc.call(null,p1__24364_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__24373_24382,_STAR_print_fn_STAR__orig_val__24374_24383,_STAR_print_newline_STAR__temp_val__24375_24384,_STAR_print_fn_STAR__temp_val__24376_24385,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__24373_24382,_STAR_print_fn_STAR__orig_val__24374_24383,_STAR_print_newline_STAR__temp_val__24375_24384,_STAR_print_fn_STAR__temp_val__24376_24385,sb__4661__auto__,G__24368,G__24368__$1,loc,class_name,simple_class,cause_type,format,map__24366,map__24366__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24374_24383;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24373_24382;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24368__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
