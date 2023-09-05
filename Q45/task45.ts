function car(manufacturer:string,model:string, 
    properties:[string,any],[string,any]){
    let a={manufacturer,
        model,
        
    }
for(const [key,value] of properties){
a[key]=value
}
    
return(a)}

console.log(car("toyota","gli",["colour","red"],["optional","sunroof"]))
