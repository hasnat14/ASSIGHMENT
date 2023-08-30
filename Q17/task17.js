var nameofpersons = ["hasnat", "waleed", "ali", "yaseen", "ahsan", "umer"];
console.log(nameofpersons, "i can nvite only two persons for dinner");
for (var i = 0; i <= nameofpersons.length; ++i) {
    console.log(nameofpersons.pop(), "i you cant invited  you in dinner");
}
for (var j = 0; j < nameofpersons.length; ++j) {
    console.log(nameofpersons[j], "you are still invited");
}
nameofpersons.pop();
nameofpersons.pop();
console.log("persons after dinner ", nameofpersons);
