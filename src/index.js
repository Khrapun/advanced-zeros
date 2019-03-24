module.exports = function getZerosCount(number, base) {
  let zeros = 0;
  let step = 0;
  let osn = 0;
  if (base == 0) {
    osn = base;
    step = 1;
    zeros = 0;
    let z = Math.floor(number/base);
    return z;
  }
  else{
    let j = 1;
    let i = 2;
    let a =[0];
    do
    {
      if (base % i == 0) 
      {
        a[j] = i;
        j++;
        base = base / i;
      }
      else
      {
        i++;
      }
    }
    while (i < base);
    a[j] = i; 
    osn = (a[a.length - 1]);
    for(let c = 0; c != a.length; c++){
      if(osn == a[c]){
        step++;
      }
    }    
  }
  for(let step2 = 1; Math.trunc(number / Math.pow(osn, step2)) >= 1; step2++) {
    zeros += Math.trunc(number / Math.pow(osn, step2));
  }
  let result = Math.trunc(zeros / step)
  return result;
}