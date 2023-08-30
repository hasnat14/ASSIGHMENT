function make_shirt (size:string="large",message:string="ilove typescript"){
    return(size+message)
}
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small","i hate typescript"));


