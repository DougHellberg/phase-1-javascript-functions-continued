// code your solution here

function  saturdayFun(funtime = "roller-skate") {
    return (`This Saturday, I want to ${funtime}!`);
}

function mondayWork(workL = "go to the office"){
    return(`This Monday, I will ${workL}.`);
}
function wrapAdjective(p1 = "*"){
   return function result(p2 = "special"){
    return(`You are ${p1}${p2}${p1}!`)
   }
}