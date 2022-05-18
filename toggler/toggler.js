function toggler(x,y,z){
    return function(){
        let flag=x;
        x=y;
        y=z;
        z=flag
        return x,y,z;
    }
 } 
 
 const toogle=toggler(1,2,3)
 console.log(toogle());
 console.log(toogle());
 console.log(toogle());
