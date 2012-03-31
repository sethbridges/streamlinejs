/*** Generated by streamline 0.2.5 - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename),__func=__rt.__func,__cb=__rt.__cb,__tryCatch=__rt.__tryCatch,__propagate=__rt.__propagate,__trap=__rt.__trap,__future=__rt.__future,__setEF=__rt.__setEF,__g=__rt.__g; var module = QUnit.module;



var flows = require("streamline/lib/util/flows");

function nextTick(cb) {
 setTimeout(function() {
 cb();
 }, 0);};


function failAsync(_, code) { var __frame = { name: "failAsync", line: 13 }; return __func(_, this, arguments, failAsync, 0, __frame, function __$failAsync() {
 return _(new Error(code)); });};


function failSync(_, code) { var __frame = { name: "failSync", line: 17 }; return __func(_, this, arguments, failSync, 0, __frame, function __$failSync() {
 (function fail(dummy) {
 throw new Error(code);
 })(0); _(); });};


var fail;

function A(_, code) { var i; var __frame = { name: "A", line: 25 }; return __func(_, this, arguments, A, 0, __frame, function __$A() { return (function __$A(__then) {
 if ((code == 1)) {
 return fail(__cb(_, __frame, 2, 2, __then, true), code); } else { __then(); } ; })(function __$A() { return (function __$A(__then) {
 if ((code == 2)) {
 return fail(__cb(_, __frame, 4, 2, __then, true), code); } else { __then(); } ; })(function __$A() {
 return nextTick(__cb(_, __frame, 5, 1, function __$A() { return (function __$A(__then) {
 if ((code == 3)) {
 return fail(__cb(_, __frame, 7, 2, __then, true), code); } else { __then(); } ; })(function __$A() {
 i = 0; var __6 = false; return (function ___(__break) { var __more; var __loop = __cb(_, __frame, 0, 0, function __$A() { __more = false; if (__6) { i++; } else { __6 = true; } ; var __5 = (i < 6); if (__5) { return (function __$A(__then) {
 if ((code == i)) {
 return fail(__cb(_, __frame, 10, 3, __then, true), code); } else { __then(); } ; })(function __$A() {
 return nextTick(__cb(_, __frame, 11, 2, function __$A() { while (__more) { __loop(); }; __more = true; }, true)); }); } else { __break(); } ; }); do { __loop(); } while (__more); __more = true; })(function __$A() { return (function __$A(__then) {

 if ((code == 6)) {
 return fail(__cb(_, __frame, 14, 2, __then, true), code); } else { __then(); } ; })(function __$A() {
 return nextTick(__cb(_, __frame, 15, 1, function __$A() {
 return B(__cb(_, __frame, 16, 1, function __$A() {
 return nextTick(__cb(_, __frame, 17, 1, function __$A() {
 return _(null, "END"); }, true)); }, true), code); }, true)); }); }); }); }, true)); }); }); });};


function B(_, code) { var __frame = { name: "B", line: 46 }; return __func(_, this, arguments, B, 0, __frame, function __$B() { return (function __$B(__then) {
 if ((code == 7)) {
 return fail(__cb(_, __frame, 2, 2, __then, true), code); } else { __then(); } ; })(function __$B() {
 return C(__cb(_, __frame, 3, 1, function __$B() {
 return nextTick(__cb(_, __frame, 4, 1, function __$B() {
 return C(__cb(_, __frame, 5, 1, function __$B() {
 return D(__cb(_, __frame, 6, 1, _, true), code); }, true), code); }, true)); }, true), code); }); });};


function C(_, code) { var __frame = { name: "C", line: 55 }; return __func(_, this, arguments, C, 0, __frame, function __$C() { return (function __$C(__then) {
 if ((code == 8)) {
 return fail(__cb(_, __frame, 2, 2, __then, true), code); } else { __then(); } ; })(_); });};


function D(_, code) { var __frame = { name: "D", line: 60 }; return __func(_, this, arguments, D, 0, __frame, function __$D() { return (function __$D(__then) {
 if ((code == 9)) {
 return fail(__cb(_, __frame, 2, 2, __then, true), code); } else { __then(); } ; })(_); });};


function E(_, code) { var __frame = { name: "E", line: 65 }; return __func(_, this, arguments, E, 0, __frame, function __$E() { return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$E() {

 return fail(__cb(_, __frame, 2, 2, __then, true), code); }); })(function ___(ex, __result) { __tryCatch(_, function __$E() { if (ex) { return (function __$E(__then) {


 if (((code % 3) == 1)) {
 return fail(__cb(_, __frame, 6, 3, __then, true), code); } else { return (function __$E(__then) {
 if (((code % 3) == 2)) {
 return A(__cb(_, __frame, 8, 3, __then, true), code); } else {

 return _(null, ("OK " + code)); } ; })(__then); } ; })(__then); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, _); }); });};



function F(_, code) { var f1, f2; var __frame = { name: "F", line: 79 }; return __func(_, this, arguments, F, 0, __frame, function __$F() {
 f1 = A(null, code);
 f2 = A(null, (code + 1));
 return f1(__cb(_, __frame, 3, 8, function ___(__0, __2) { return f2(__cb(_, __frame, 3, 24, function ___(__0, __3) { var __1 = ((__2 + " & ") + __3); return _(null, __1); }, true)); }, true)); });};


function G(_, code) { var __frame = { name: "G", line: 85 }; return __func(_, this, arguments, G, 0, __frame, function __$G() { return (function __$G(__then) {
 if ((code == 5)) {
 return fail(__cb(_, __frame, 2, 2, __then, true), code); } else { __then(); } ; })(function __$G() {
 return _(null, ("" + code)); }); });};


function H(_, code) { var __frame = { name: "H", line: 91 }; return __func(_, this, arguments, H, 0, __frame, function __$H() { return (function __$H(__then) {
 if (((code % 2) == 0)) {
 return nextTick(__cb(_, __frame, 2, 2, __then, true)); } else { __then(); } ; })(function __$H() {
 return G(__cb(_, __frame, 3, 8, _, true), code); }); });};


function I(_, code) { var s, i; var __frame = { name: "I", line: 97 }; return __func(_, this, arguments, I, 0, __frame, function __$I() {
 s = "";
 i = 0; var __3 = false; return (function ___(__break) { var __more; var __loop = __cb(_, __frame, 0, 0, function __$I() { __more = false; if (__3) { i++; } else { __3 = true; } ; var __2 = (i < code); if (__2) {
 return H(__cb(_, __frame, 3, 7, function ___(__0, __1) { s += __1; while (__more) { __loop(); }; __more = true; }, true), i); } else { __break(); } ; }); do { __loop(); } while (__more); __more = true; })(function __$I() {
 return _(null, s); }); });};


function T(_, fn, code, failFn) { var s, end; var __frame = { name: "T", line: 104 }; return __func(_, this, arguments, T, 0, __frame, function __$T() {
 fail = failFn;
 s = "{"; return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$T() {

 return fn(__cb(_, __frame, 4, 9, _, true), code); }); })(function ___(ex, __result) { __tryCatch(_, function __$T() { if (ex) {


 s = ex.stack;



 s = s.split("\n").map(function(l) {
 var m = /^\s+at (\w+)\s\(.*:(\d+)\:.*\)/.exec(l);
 if (m) {
 return ((m[1] + ":") + m[2]) };
 return l;
 }).join("/");
 end = s.indexOf("/T:");
 return _(null, ((end < 0) ? (s + "-- end frame missing") : s.substring(0, end))); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, _); }); });};




var rawStack = (new Error().stack ? function(raw) {

 return raw;
} : function() {
 return "raw stack unavailable";});


module("stacks");

asyncTest("stacks", 20, function __1(_) { var __frame = { name: "__1", line: 136 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
 return T(__cb(_, __frame, 1, 13, function ___(__0, __1) { strictEqual(__1, (rawStack("Error: 1/failAsync:15") + "/A:28"));
 return T(__cb(_, __frame, 2, 13, function ___(__0, __2) { strictEqual(__2, (rawStack("Error: 1/fail:20/failSync:21") + "/A:28"));
 return T(__cb(_, __frame, 3, 13, function ___(__0, __3) { strictEqual(__3, (rawStack("Error: 2/failAsync:15") + "/A:30"));
 return T(__cb(_, __frame, 4, 13, function ___(__0, __4) { strictEqual(__4, (rawStack("Error: 2/fail:20/failSync:21") + "/A:30"));
 return T(__cb(_, __frame, 5, 13, function ___(__0, __5) { strictEqual(__5, (rawStack("Error: 3/failAsync:15") + "/A:33"));
 return T(__cb(_, __frame, 6, 13, function ___(__0, __6) { strictEqual(__6, (rawStack("Error: 3/fail:20/failSync:21") + "/A:33"));
 return T(__cb(_, __frame, 7, 13, function ___(__0, __7) { strictEqual(__7, (rawStack("Error: 4/failAsync:15") + "/A:36"));
 return T(__cb(_, __frame, 8, 13, function ___(__0, __8) { strictEqual(__8, (rawStack("Error: 4/fail:20/failSync:21") + "/A:36"));
 return T(__cb(_, __frame, 9, 13, function ___(__0, __9) { strictEqual(__9, (rawStack("Error: 5/failAsync:15") + "/A:36"));
 return T(__cb(_, __frame, 10, 13, function ___(__0, __10) { strictEqual(__10, (rawStack("Error: 5/fail:20/failSync:21") + "/A:36"));
 return T(__cb(_, __frame, 11, 13, function ___(__0, __11) { strictEqual(__11, (rawStack("Error: 6/failAsync:15") + "/A:40"));
 return T(__cb(_, __frame, 12, 13, function ___(__0, __12) { strictEqual(__12, (rawStack("Error: 6/fail:20/failSync:21") + "/A:40"));
 return T(__cb(_, __frame, 13, 13, function ___(__0, __13) { strictEqual(__13, (rawStack("Error: 7/failAsync:15") + "/B:49/A:42"));
 return T(__cb(_, __frame, 14, 13, function ___(__0, __14) { strictEqual(__14, (rawStack("Error: 7/fail:20/failSync:21") + "/B:49/A:42"));
 return T(__cb(_, __frame, 15, 13, function ___(__0, __15) { strictEqual(__15, (rawStack("Error: 8/failAsync:15") + "/C:58/B:50/A:42"));
 return T(__cb(_, __frame, 16, 13, function ___(__0, __16) { strictEqual(__16, (rawStack("Error: 8/fail:20/failSync:21") + "/C:58/B:50/A:42"));
 return T(__cb(_, __frame, 17, 13, function ___(__0, __17) { strictEqual(__17, (rawStack("Error: 9/failAsync:15") + "/D:63/B:53/A:42"));
 return T(__cb(_, __frame, 18, 13, function ___(__0, __18) { strictEqual(__18, (rawStack("Error: 9/fail:20/failSync:21") + "/D:63/B:53/A:42"));
 return T(__cb(_, __frame, 19, 13, function ___(__0, __19) { strictEqual(__19, "END");
 return T(__cb(_, __frame, 20, 13, function ___(__0, __20) { strictEqual(__20, "END");
 start(); _(); }, true), A, 10, failSync); }, true), A, 10, failAsync); }, true), A, 9, failSync); }, true), A, 9, failAsync); }, true), A, 8, failSync); }, true), A, 8, failAsync); }, true), A, 7, failSync); }, true), A, 7, failAsync); }, true), A, 6, failSync); }, true), A, 6, failAsync); }, true), A, 5, failSync); }, true), A, 5, failAsync); }, true), A, 4, failSync); }, true), A, 4, failAsync); }, true), A, 3, failSync); }, true), A, 3, failAsync); }, true), A, 2, failSync); }, true), A, 2, failAsync); }, true), A, 1, failSync); }, true), A, 1, failAsync); });});


asyncTest("catch", 20, function __2(_) { var __frame = { name: "__2", line: 160 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() {
 return T(__cb(_, __frame, 1, 13, function ___(__0, __1) { strictEqual(__1, (rawStack("Error: 1/failAsync:15") + "/E:72"));
 return T(__cb(_, __frame, 2, 13, function ___(__0, __2) { strictEqual(__2, (rawStack("Error: 1/fail:20/failSync:21") + "/E:72"));
 return T(__cb(_, __frame, 3, 13, function ___(__0, __3) { strictEqual(__3, (rawStack("Error: 2/failAsync:15") + "/A:30/E:74"));
 return T(__cb(_, __frame, 4, 13, function ___(__0, __4) { strictEqual(__4, (rawStack("Error: 2/fail:20/failSync:21") + "/A:30/E:74"));
 return T(__cb(_, __frame, 5, 13, function ___(__0, __5) { strictEqual(__5, "OK 3");
 return T(__cb(_, __frame, 6, 13, function ___(__0, __6) { strictEqual(__6, "OK 3");
 return T(__cb(_, __frame, 7, 13, function ___(__0, __7) { strictEqual(__7, (rawStack("Error: 4/failAsync:15") + "/E:72"));
 return T(__cb(_, __frame, 8, 13, function ___(__0, __8) { strictEqual(__8, (rawStack("Error: 4/fail:20/failSync:21") + "/E:72"));
 return T(__cb(_, __frame, 9, 13, function ___(__0, __9) { strictEqual(__9, (rawStack("Error: 5/failAsync:15") + "/A:36/E:74"));
 return T(__cb(_, __frame, 10, 13, function ___(__0, __10) { strictEqual(__10, (rawStack("Error: 5/fail:20/failSync:21") + "/A:36/E:74"));
 return T(__cb(_, __frame, 11, 13, function ___(__0, __11) { strictEqual(__11, "OK 6");
 return T(__cb(_, __frame, 12, 13, function ___(__0, __12) { strictEqual(__12, "OK 6");
 return T(__cb(_, __frame, 13, 13, function ___(__0, __13) { strictEqual(__13, (rawStack("Error: 7/failAsync:15") + "/E:72"));
 return T(__cb(_, __frame, 14, 13, function ___(__0, __14) { strictEqual(__14, (rawStack("Error: 7/fail:20/failSync:21") + "/E:72"));
 return T(__cb(_, __frame, 15, 13, function ___(__0, __15) { strictEqual(__15, (rawStack("Error: 8/failAsync:15") + "/C:58/B:50/A:42/E:74"));
 return T(__cb(_, __frame, 16, 13, function ___(__0, __16) { strictEqual(__16, (rawStack("Error: 8/fail:20/failSync:21") + "/C:58/B:50/A:42/E:74"));
 return T(__cb(_, __frame, 17, 13, function ___(__0, __17) { strictEqual(__17, "OK 9");
 return T(__cb(_, __frame, 18, 13, function ___(__0, __18) { strictEqual(__18, "OK 9");
 return T(__cb(_, __frame, 19, 13, function ___(__0, __19) { strictEqual(__19, (rawStack("Error: 10/failAsync:15") + "/E:72"));
 return T(__cb(_, __frame, 20, 13, function ___(__0, __20) { strictEqual(__20, (rawStack("Error: 10/fail:20/failSync:21") + "/E:72"));
 start(); _(); }, true), E, 10, failSync); }, true), E, 10, failAsync); }, true), E, 9, failSync); }, true), E, 9, failAsync); }, true), E, 8, failSync); }, true), E, 8, failAsync); }, true), E, 7, failSync); }, true), E, 7, failAsync); }, true), E, 6, failSync); }, true), E, 6, failAsync); }, true), E, 5, failSync); }, true), E, 5, failAsync); }, true), E, 4, failSync); }, true), E, 4, failAsync); }, true), E, 3, failSync); }, true), E, 3, failAsync); }, true), E, 2, failSync); }, true), E, 2, failAsync); }, true), E, 1, failSync); }, true), E, 1, failAsync); });});


asyncTest("futures", 20, function __3(_) { var __frame = { name: "__3", line: 184 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() {
 return T(__cb(_, __frame, 1, 13, function ___(__0, __1) { strictEqual(__1, (rawStack("Error: 1/failAsync:15") + "/A:28/F:83"));
 return T(__cb(_, __frame, 2, 13, function ___(__0, __2) { strictEqual(__2, (rawStack("Error: 1/fail:20/failSync:21") + "/A:28/F:83"));
 return T(__cb(_, __frame, 3, 13, function ___(__0, __3) { strictEqual(__3, (rawStack("Error: 2/failAsync:15") + "/A:30/F:83"));
 return T(__cb(_, __frame, 4, 13, function ___(__0, __4) { strictEqual(__4, (rawStack("Error: 2/fail:20/failSync:21") + "/A:30/F:83"));
 return T(__cb(_, __frame, 5, 13, function ___(__0, __5) { strictEqual(__5, (rawStack("Error: 3/failAsync:15") + "/A:33/F:83"));
 return T(__cb(_, __frame, 6, 13, function ___(__0, __6) { strictEqual(__6, (rawStack("Error: 3/fail:20/failSync:21") + "/A:33/F:83"));
 return T(__cb(_, __frame, 7, 13, function ___(__0, __7) { strictEqual(__7, (rawStack("Error: 4/failAsync:15") + "/A:36/F:83"));
 return T(__cb(_, __frame, 8, 13, function ___(__0, __8) { strictEqual(__8, (rawStack("Error: 4/fail:20/failSync:21") + "/A:36/F:83"));
 return T(__cb(_, __frame, 9, 13, function ___(__0, __9) { strictEqual(__9, (rawStack("Error: 5/failAsync:15") + "/A:36/F:83"));
 return T(__cb(_, __frame, 10, 13, function ___(__0, __10) { strictEqual(__10, (rawStack("Error: 5/fail:20/failSync:21") + "/A:36/F:83"));
 return T(__cb(_, __frame, 11, 13, function ___(__0, __11) { strictEqual(__11, (rawStack("Error: 6/failAsync:15") + "/A:40/F:83"));
 return T(__cb(_, __frame, 12, 13, function ___(__0, __12) { strictEqual(__12, (rawStack("Error: 6/fail:20/failSync:21") + "/A:40/F:83"));
 return T(__cb(_, __frame, 13, 13, function ___(__0, __13) { strictEqual(__13, (rawStack("Error: 7/failAsync:15") + "/B:49/A:42/F:83"));
 return T(__cb(_, __frame, 14, 13, function ___(__0, __14) { strictEqual(__14, (rawStack("Error: 7/fail:20/failSync:21") + "/B:49/A:42/F:83"));
 return T(__cb(_, __frame, 15, 13, function ___(__0, __15) { strictEqual(__15, (rawStack("Error: 8/failAsync:15") + "/C:58/B:50/A:42/F:83"));
 return T(__cb(_, __frame, 16, 13, function ___(__0, __16) { strictEqual(__16, (rawStack("Error: 8/fail:20/failSync:21") + "/C:58/B:50/A:42/F:83"));
 return T(__cb(_, __frame, 17, 13, function ___(__0, __17) { strictEqual(__17, (rawStack("Error: 9/failAsync:15") + "/D:63/B:53/A:42/F:83"));
 return T(__cb(_, __frame, 18, 13, function ___(__0, __18) { strictEqual(__18, (rawStack("Error: 9/fail:20/failSync:21") + "/D:63/B:53/A:42/F:83"));
 return T(__cb(_, __frame, 19, 13, function ___(__0, __19) { strictEqual(__19, "END & END");
 return T(__cb(_, __frame, 20, 13, function ___(__0, __20) { strictEqual(__20, "END & END");
 start(); _(); }, true), F, 10, failSync); }, true), F, 10, failAsync); }, true), F, 9, failSync); }, true), F, 9, failAsync); }, true), F, 8, failSync); }, true), F, 8, failAsync); }, true), F, 7, failSync); }, true), F, 7, failAsync); }, true), F, 6, failSync); }, true), F, 6, failAsync); }, true), F, 5, failSync); }, true), F, 5, failAsync); }, true), F, 4, failSync); }, true), F, 4, failAsync); }, true), F, 3, failSync); }, true), F, 3, failAsync); }, true), F, 2, failSync); }, true), F, 2, failAsync); }, true), F, 1, failSync); }, true), F, 1, failAsync); });});


asyncTest("loop", 8, function __4(_) { var __frame = { name: "__4", line: 208 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() {
 return T(__cb(_, __frame, 1, 13, function ___(__0, __1) { strictEqual(__1, "0123");
 return T(__cb(_, __frame, 2, 13, function ___(__0, __2) { strictEqual(__2, "0123");
 return T(__cb(_, __frame, 3, 13, function ___(__0, __3) { strictEqual(__3, "01234");
 return T(__cb(_, __frame, 4, 13, function ___(__0, __4) { strictEqual(__4, "01234");
 return T(__cb(_, __frame, 5, 13, function ___(__0, __5) { strictEqual(__5, (rawStack("Error: 5/failAsync:15") + "/G:88/H:95/I:101"));
 return T(__cb(_, __frame, 6, 13, function ___(__0, __6) { strictEqual(__6, (rawStack("Error: 5/fail:20/failSync:21") + "/G:88/H:95/I:101"));
 return T(__cb(_, __frame, 7, 13, function ___(__0, __7) { strictEqual(__7, (rawStack("Error: 5/failAsync:15") + "/G:88/H:95/I:101"));
 return T(__cb(_, __frame, 8, 13, function ___(__0, __8) { strictEqual(__8, (rawStack("Error: 5/fail:20/failSync:21") + "/G:88/H:95/I:101"));
 start(); _(); }, true), I, 7, failSync); }, true), I, 7, failAsync); }, true), I, 6, failSync); }, true), I, 6, failAsync); }, true), I, 5, failSync); }, true), I, 5, failAsync); }, true), I, 4, failSync); }, true), I, 4, failAsync); });});