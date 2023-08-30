export let namesofpersons=["hasnat","awais","Ahsan","Waleed"]

for(let i=0;i<namesofpersons.length;++i){
    console.log("hello" ,namesofpersons[i],"today i arranged big dinner table");
}
namesofpersons.splice(0,1,"abdul hanan")
namesofpersons.splice(2,1,"yaseen")
namesofpersons.push("yahya")
for(let j=0;j<namesofpersons.length;++j){
   console.log("hello",namesofpersons[j],"i invited u in today night dinner");
}
