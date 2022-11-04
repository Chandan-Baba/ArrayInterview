//Print a table containing multiplication tables
var num=20

for(let j=1;j<=num;j++){
    
    for(let i=1; i<=(j*10);i++)
    {
        if(i%j==0)
        {
            console.log(i)
        }
        
    }
}
