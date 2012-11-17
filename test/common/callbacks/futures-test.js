/*** Generated by streamline 0.4.0 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename),__func=__rt.__func,__cb=__rt.__cb,__tryCatch=__rt.__tryCatch; var module = QUnit.module;
var flows = require("streamline/lib/util/flows");

function delay(millis, val, _) { var __frame = { name: "delay", line: 4 }; return __func(_, this, arguments, delay, 2, __frame, function __$delay() {
    return setTimeout(__cb(_, __frame, 1, 1, function __$delay() {
      return _(null, val); }, true), millis); });};


module("futures");

asyncTest("no timeout", 1, function __1(_) { var f; var __frame = { name: "__1", line: 11 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
    f = delay(1, "a");
    return f(__cb(_, __frame, 2, 8, function ___(__0, __1) { equals(__1, "a", "no timeout");
      start(); _(); }, true)); });});

asyncTest("result before timeout", 1, function __2(_) { var f; var __frame = { name: "__2", line: 16 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() {
    f = delay(1, "a");
    return f(__cb(_, __frame, 2, 8, function ___(__0, __1) { equals(__1, "a", "got result");
      start(); _(); }, true), { timeout: 10, return: "b" }); });});

asyncTest("timeout returns before result", 3, function __3(_) { var f; var __frame = { name: "__3", line: 21 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() {
    f = delay(20, "a");
    return f(__cb(_, __frame, 2, 8, function ___(__0, __1) { equals(__1, "b", "got timeout");
      ok(f.cancelled, "future got cancelled"); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$__3() {

            return f(__cb(_, __frame, 5, 8, function ___(__0, __2) { equal(__2, "c"); __then(); }, true), { timeout: 20, return: "b" }); }); })(function ___(ex, __result) { __tryCatch(_, function __$__3() { if (ex) {

              equals(ex.message, "future cancelled", "cannot reuse cancelled future"); __then(); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, function __$__3() {

          start(); _(); }); }); }, true), { timeout: 1, return: "b" }); });});

asyncTest("timeout throws before result", 1, function __4(_) { var f; var __frame = { name: "__4", line: 32 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() {
    f = delay(20, "a"); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$__4() {

          return f(__cb(_, __frame, 3, 8, function ___(__0, __1) { equal(__1, "c"); __then(); }, true), { timeout: 1, throw: "b" }); }); })(function ___(ex, __result) { __tryCatch(_, function __$__4() { if (ex) {

            equals(ex.message, "b", "throws before result"); __then(); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, function __$__4() {

        start(); _(); }); }); });});

asyncTest("probe with return", 2, function __5(_) { var f; var __frame = { name: "__5", line: 41 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() {
    f = delay(20, "a");
    return f(__cb(_, __frame, 2, 7, function ___(__0, __1) { equal(__1, "b", "probe before result");
      return f(__cb(_, __frame, 3, 7, function ___(__0, __2) { equal(__2, "a", "probe after result");
        start(); _(); }, true), { timeout: 40, return: "b", probe: true }); }, true), { timeout: 1, return: "b", probe: true }); });});

asyncTest("probe with throw", 2, function __6(_) { var f; var __frame = { name: "__6", line: 47 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() {
    f = delay(20, "a"); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$__6() {

          return f(__cb(_, __frame, 3, 8, function ___(__0, __1) { equal(__1, "c"); __then(); }, true), { timeout: 1, throw: "b", probe: true }); }); })(function ___(ex, __result) { __tryCatch(_, function __$__6() { if (ex) {

            equals(ex.message, "b", "probe before result"); __then(); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, function __$__6() {

        return f(__cb(_, __frame, 7, 7, function ___(__0, __2) { equal(__2, "a", "probe after result");
          start(); _(); }, true), { timeout: 40, throw: "b", probe: true }); }); }); });});


function delay2(ms1, ms2, val, step, _) { var __frame = { name: "delay2", line: 58 }; return __func(_, this, arguments, delay2, 4, __frame, function __$delay2() {
    step.i = 1;
    return setTimeout(__cb(_, __frame, 2, 1, function __$delay2() {
      step.i++;
      return setTimeout(__cb(_, __frame, 4, 1, function __$delay2() {
        step.i++;
        return _(null, val); }, true), ms2); }, true), ms1); });};



asyncTest("cancel before first timeout", 4, function __7(_) { var step, f; var __frame = { name: "__7", line: 68 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() {
    step = { };
    f = delay2(20, 20, "a", step);
    equals(step.i, 1, "step ok");
    return f(__cb(_, __frame, 4, 8, function ___(__0, __1) { equals(__1, "b", "timed out ok");
      equals(step.i, 1, "step ok after timeout");
      return setTimeout(__cb(_, __frame, 6, 1, function __$__7() {
        equals(step.i, 1, "cancelled ok");
        start(); _(); }, true), 40); }, true), { timeout: 1, return: "b" }); });});

asyncTest("cancel between first and second timeouts", 4, function __8(_) { var step, f; var __frame = { name: "__8", line: 78 }; return __func(_, this, arguments, __8, 0, __frame, function __$__8() {
    step = { };
    f = delay2(20, 20, "a", step);
    equals(step.i, 1, "step ok");
    return f(__cb(_, __frame, 4, 8, function ___(__0, __1) { equals(__1, "b", "timed out ok");
      equals(step.i, 2, "step ok after intermediate timeout");
      return setTimeout(__cb(_, __frame, 6, 1, function __$__8() {
        equals(step.i, 2, "cancelled ok");
        start(); _(); }, true), 20); }, true), { timeout: 30, return: "b" }); });});


function join(ms1, ms2, val1, step1, ms3, ms4, val2, step2, _) { var f1, f2; var __frame = { name: "join", line: 89 }; return __func(_, this, arguments, join, 8, __frame, function __$join() {
    f1 = delay2(ms1, ms2, val1, step1);
    f2 = delay2(ms3, ms4, val2, step2);
    return f1(__cb(_, __frame, 3, 8, function ___(__0, __2) { return f2(__cb(_, __frame, 3, 16, function ___(__0, __3) { var __1 = (__2 + __3); return _(null, __1); }, true)); }, true)); });};


asyncTest("join returns before timeout", 3, function __9(_) { var step1, step2, f; var __frame = { name: "__9", line: 95 }; return __func(_, this, arguments, __9, 0, __frame, function __$__9() {
    step1 = { }; step2 = { };
    f = join(10, 20, "a", step1, 20, 20, "b", step2);
    return f(__cb(_, __frame, 3, 8, function ___(__0, __1) { equals(__1, "ab", "no timeout ok");
      equals(step1.i, 3, "step1 ok");
      equals(step2.i, 3, "step2 ok");
      start(); _(); }, true), { timeout: 60, return: "c" }); });});

asyncTest("join with short timeout", 5, function __10(_) { var step1, step2, f; var __frame = { name: "__10", line: 103 }; return __func(_, this, arguments, __10, 0, __frame, function __$__10() {
    step1 = { }; step2 = { };
    f = join(10, 20, "a", step1, 20, 20, "b", step2);
    return f(__cb(_, __frame, 3, 8, function ___(__0, __1) { equals(__1, "c", "result ok");
      equals(step1.i, 2, "step1 ok");
      equals(step2.i, 1, "step2 ok");
      return setTimeout(__cb(_, __frame, 6, 1, function __$__10() {
        equals(step1.i, 2, "step1 cancelled ok");
        equals(step2.i, 1, "step2 cancelled ok");
        start(); _(); }, true), 40); }, true), { timeout: 15, return: "c" }); });});

asyncTest("join with intermediate timeout", 5, function __11(_) { var step1, step2, f; var __frame = { name: "__11", line: 114 }; return __func(_, this, arguments, __11, 0, __frame, function __$__11() {
    step1 = { }; step2 = { };
    f = join(10, 20, "a", step1, 20, 20, "b", step2);
    return f(__cb(_, __frame, 3, 8, function ___(__0, __1) { equals(__1, "c", "result ok");
      equals(step1.i, 3, "step1 ok");
      equals(step2.i, 2, "step2 ok");
      return setTimeout(__cb(_, __frame, 6, 1, function __$__11() {
        equals(step1.i, 3, "step1 cancelled ok");
        equals(step2.i, 2, "step2 cancelled ok");
        start(); _(); }, true), 20); }, true), { timeout: 35, return: "c" }); });});