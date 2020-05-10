
var reg1 = new RegExp(/^aa$/)
console.log(reg1.test('a'));//false
console.log(reg1.test('aa'));//true
console.log(reg1.test('aaa'));//false

var reg2  = /^123$/;
console.log(reg2.test(123));//true
console.log(reg2.test('123'));//true
console.log("============================================================");


// 边界符

var reg3 = /^abc/;
console.log(reg3.test('abc'));//true
console.log(reg3.test('abccccc'));//true
console.log(reg3.test('abbbccccc'));//false

var reg4 = /aa$/;

console.log(reg4.test('abcaa'));//true
console.log(reg4.test('abccccaaa'));//true
console.log(reg4.test('abbbccccaca'));//false

console.log("============================================================");

// 字符类 1.[]

var reg5 = /[abc]/
console.log(reg5.test('a'));//true
console.log(reg5.test('b'));//true
console.log(reg5.test('c'));//true
console.log(reg5.test('abcsss'));//true
console.log(reg5.test('sss'));//false

var reg6 = /^[abc]$/;
console.log(reg6.test('a'));//true
console.log(reg6.test('b'));//true
console.log(reg6.test('c'));//true
console.log(reg6.test('ab'));//false

console.log("============================================================");

// 字符类 [-]
var reg6 = /^[a-z0-9]$/
console.log(reg6.test('a'));//true
console.log(reg6.test('9'));//true
console.log(reg6.test('c9'));//false
console.log(reg6.test('c90'));//false

console.log("============================================================");
// 字符类取反
var reg7 = /[^a-z0-9]/
console.log(reg7.test('a'));//false
console.log(reg7.test('9'));//false
console.log(reg7.test('c9'));//false
console.log(reg7.test('A'));//true
console.log(reg7.test('Q-'));//true

console.log("============================================================");
// 量词符 * 0次或者多次
var reg8 = /^a*$/
console.log(reg8.test(''));//true
console.log(reg8.test('a'));//true
console.log(reg8.test('aaa'));//true
console.log(reg8.test('ab'));//false

console.log("============================================================");
// 量词符 +1次或者多次
var reg9 = /^a+$/
console.log(reg9.test(''));//false
console.log(reg9.test('a'));//true
console.log(reg9.test('aaa'));//true
console.log(reg9.test('ab'));//false

console.log("============================================================");
// 量词符 ? 0次或者1次
var reg10 = /^a?$/
console.log(reg10.test(''));//true
console.log(reg10.test('a'));//true
console.log(reg10.test('aaa'));//false
console.log(reg10.test('ab'));//false



console.log("============================================================");
// 量词符 {n}重复n次
var reg11 = /^a{3}$/
console.log(reg11.test(''));//false
console.log(reg11.test('a'));//false
console.log(reg11.test('aa'));//false
console.log(reg11.test('aaa'));//true

console.log("============================================================");
// 量词符 {n,}重复大于等于n次
var reg12 = /^a{3,}$/
console.log(reg12.test(''));//false
console.log(reg12.test('a'));//false
console.log(reg12.test('aa'));//false
console.log(reg12.test('aaa'));//true
console.log(reg12.test('aaaa'));//true
console.log(reg12.test('aaaaa'));//true

console.log("============================================================");
// 量词符 {n,m}重复大于等于n次，小于等于m次
var reg13 = /^a{2,4}$/
console.log(reg13.test(''));//false
console.log(reg13.test('a'));//false
console.log(reg13.test('aa'));//true
console.log(reg13.test('aaa'));//true
console.log(reg13.test('aaaa'));//true
console.log(reg13.test('aaaaa'));//false

console.log("============================================================");
// 量词符 [],量词重复
var reg14 = /^[a-z0-9-]{2,4}$/
console.log(reg14.test('a'));//false
console.log(reg14.test('1'));//false
console.log(reg14.test('a1'));//true
console.log(reg14.test('aa1'));//true
console.log(reg14.test('aa11'));//true
console.log(reg14.test('aa111'));//false
console.log(reg14.test('14-a'));//true


console.log("============================================================");
                        // 手机号码验证
var regPhone = /^1[34578]\d{9}$/
console.log(regPhone.test("15172099724"));//true
// 添加长度
console.log(regPhone.test("151720997245"));//false
// 修改[34578]的值为1
console.log(regPhone.test("11172099724"));//false
console.log(regPhone.test("13172099724"));//true
console.log(regPhone.test("14172099724"));//true
// 修改首位数字为0
console.log(regPhone.test("04000000000"));//false
console.log("============================================================");

                    // QQ号码验证
var regQQ = /^[1-9][0-9]{4,}/

console.log("============================================================");
                    // 验证金额(非负数)
var regPrice = /(^[1-9][0-9]{1,9}$)|(^0[.][0-9]{2}$)|(^[1-9][0-9]{1,9}[.][0-9]{2}$)/
console.log(regPrice.test('1000000'));//true
console.log(regPrice.test('10000000000000000000'));//false
console.log(regPrice.test('0.01'));//true
console.log(regPrice.test('00.01'));//false
console.log(regPrice.test('0.00'));//true
console.log(regPrice.test('100.0000'));//false
console.log(regPrice.test('100.0'));//false
console.log(regPrice.test('-100.00'));//false
console.log(regPrice.test(''));//false
console.log(regPrice.test('abc'));//false




















