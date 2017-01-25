/**
 * Created by EX-pengzhiliang001 on 2017-01-24.
 */
// 'use strict';
var days=["Monday","Tuesday","Wedensday"];
var daysStrArgs=days.map(function (v,i,fullArgs){
    console.log(fullArgs);
    return v+"过年"+i+"呵呵"+fullArgs;
})
console.log(daysStrArgs);
var daysStrArgs2=days.filter(function (v,i,fullArgs) {
    return v.indexOf("e") > -1;
});
console.log(daysStrArgs2);

var person = {
    name:'pzl',
    age:12
};
// Object.freeze(person);
//
// console.log(Object.isFrozen(person));
// person.name='bll';
Object.defineProperty(person,'sex',{
    value:"男",
    writable:false,
    enumerable:true,
    configurable:true
});
console.log(person.sex="女");
console.log(Object.keys(person));

var person2=Object.create(person);
person2.name="bll";
console.log(person,person2)