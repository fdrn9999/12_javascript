/* 논리 타입으로 암묵적 변환 */
// - JS 엔진은 boolean 타입이 아닌 값을
// Truthy, Falsy 값으로 변환하여
// 논리 연산을 수행할 때 암묵적 변환을 수행합니다.

// if(조건식) {조건식이 true일 때 실행}
if(undefined) { // undefined -> false
    console.log('if(undefined)');
} 

if(null) { // null -> false
    console.log('if(null)');
} 

if(0) { // 0 -> false
    console.log('if(0)');
} 

if('') { // '' -> false
    console.log('if("")');
} 

if(NaN) { // NaN -> false
    console.log('if(NaN)');
} 

if(false) { // false -> false
    console.log('if(false)');
} 

if(true) { // true -> true
    console.log('if(true)');
} 

if(1) { // 1 -> true
    console.log('if(1)');
} 

if('hello') { // 'hello' -> true
    console.log('if("hello")');
} 

if({}) { // {} -> true
    console.log('if({})');
} 

if([]) { // [] -> true
    console.log('if([])');
} 

if(Symbol()) { // Symbol() -> true
    console.log('if(Symbol())');
}

if(function(){}){ // function(){} -> true
    console.log('if(function(){})');
}

/* 기억할 것
 * - Falsy 값: undefined, null, 0, '', NaN, false
 * - Truthy 값: true, 1, 'hello', {}, []
*/