
console.log(printPrimes(10))
function printPrimes(nPrimes)
{
    let n = 0;
    let i = 2;
    
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }
        
        i++;
    }
}


// Returns true if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}
