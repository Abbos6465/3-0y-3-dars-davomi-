// => 2-dars switch() <= //

//  => 1-masala <= //
// {
//   let day=+prompt("Hafta kunini kiriting:");
//   switch(day){
//     case 1: console.log("Dushanba"); break;
//     case 2: console.log("Seshanba"); break;
//     case 3: console.log("Chorshanba"); break;
//     case 4: console.log("Payshanba"); break;
//     case 5: console.log("Juma"); break;
//     case 6: console.log("Shanba"); break;
//     case 7: console.log("Yakshanba"); break;
//     default: console.log("Bunday hafta kuni yo'q");
//   }
// }

// => 2-masala <= //
// {
//   let k=+prompt("Bahongizni kiriting: ");
//   switch(k){
//     case 1: console.log(`${k}-yomon`); break;
//     case 2: console.log(`${k}-qoniqarsiz`); break;
//     case 3: console.log(`${k}-qoniqarli`); break;
//     case 4: console.log(`${k}-yaxshi`); break;
//     case 5: console.log(`${k}-alo`); break;
//     default: console.log(`Bunday baho yo'q`); 
//   }
// }

// => 3-masala <= //
// {
//  let month=+prompt("Oy raqamini kiriting:");
//  switch(month){
//   case  1: console.log("Qish"); break;
//   case  2: console.log("Qish"); break; 
//   case 3 : console.log("Bahor"); break;
//   case 4 : console.log("Bahor"); break;
//   case 5 : console.log("Bahor"); break;
//   case 6 : console.log("Yoz"); break;
//   case 7 : console.log("Yoz"); break;
//   case 8 : console.log("Yoz"); break;
//   case 9 : console.log("Kuz"); break;
//   case 10 : console.log("Kuz"); break;
//   case 11 : console.log("Kuz"); break;
//   case  12: console.log("Qish"); break;
//   default: console.log("Bunday oy yo'q");
//  }
// }

// => 4-masala <= //
// {
//   let month=+prompt("Oy raqamini kiriting:");
//   switch(month){
//    case  1: console.log("31 kun"); break;
//    case  2: console.log("28 kun"); break; 
//    case 3 : console.log("31 kun"); break;
//    case 4 : console.log("30 kun"); break;
//    case 5 : console.log("31 kun"); break;
//    case 6 : console.log("30 kun"); break;
//    case 7 : console.log("31 kun"); break;
//    case 8 : console.log("31 kun"); break;
//    case 9 : console.log("30 kun"); break;
//    case 10 : console.log("31kun"); break;
//    case 11 : console.log("30 kun"); break;
//    case  12: console.log("31 kun"); break;
//    default: console.log("Bunday oy yo'q yo'q");
//   }
//  }

// => 5-masala <= //
// {
//   let a=+prompt("a sonni kiriting: "),b=+prompt("b sonni kiriting: "),c;
//   amal=prompt("Qaysi amal bajarilishini xohlaysiz");
// switch(amal){
//   case "+": c=a+b; break;
//   case "-": c=a-b; break;
//   case "*": c=a*b; break;
//   case "/": c=a/b; break;
// }
// console.log(c);
// }

// => 6-masala <= //
// {
//   let k=+prompt("Bahongizni kiriting: ");
//   switch(k){
//     case 1: console.log(`${k}-baho stipentiyasi ${100} ming so'm`); break;
//     case 2: console.log(`${k}-baho stipentiyasi ${200} ming so'm`); break;
//     case 3: console.log(`${k}-baho stipentiyasi ${300} ming so'm`); break;
//     case 4: console.log(`${k}-baho stipentiyasi ${400} ming so'm`); break;
//     case 5: console.log(`${k}-baho stipentiyasi ${500} ming so'm`); break;
//     default: console.log(`Bunday baho yo'q`); 
//   }
// }

// ==> 2-dars for() <== //

// => 1-masala <= //
// {
//   let k=+prompt("k sonni kiriting:"), n=+prompt("n sonni kiriting:");
//   for(let i=0; i<n; i++){
// console.log(k);
//   }
// }

// => 2-masala <= //
// {
//     alert("a va b sonlarni kiriting(a>b bo'lsin)");
//     let a=+prompt("a=");
//     let b=+prompt("b=");
// for(let i=b; i<=a; i++){
//   console.log(i);
// }
// }

// => 3-masala <= //
// {
//   alert("a va b sonlarni kiriting(a>b bo'lsin)");
//   let a=+prompt("a=");
//   let b=+prompt("b=");
// for(let i=a-1; i>b; i--){
// console.log(i);
// }
// }

// => 4-masala <= //
// {
//   for(let i=1; i<=10; i++){
//     console.log(`${i}-kg kanfet ${i*10000}-so'm`);
//   }
// }

// => 5-masala <= //
  // for(let i=1; i<=10; i++){
  //   console.log(`${i/10}-kg konfet ${(i*10000)/10}-so'm`);
  // }

  // => 6-masala <= //
  // for(let i=12; i<=20; i+=2){
  //   console.log(`${i/10}-kg konfet ${(i*10000)/10}-so'm`);
  // }

  // => 7-masala <= //
//   {
//   alert("a va b sonlarni kiriting (a<b bo'lsin)")
// let a=+prompt("a=");
// let b=+prompt("b="),s=0;
// for(let i=a; i<=b; i++){
//   s+=i;
// }
// console.log(s);
//   }

  // => 8-masala <= //
  // {
  //   alert("a va b sonlarni kiriting (a<b bo'lsin)")
  // let a=+prompt("a=");
  // let b=+prompt("b="),s=1;
  // for(let i=a; i<=b; i++){
  //   s*=i;
  // }
  // console.log(s);
  //   }

  // => 9-masala <= //
// {
//   alert("a va b sonlarni kiriting (a<b bo'lsin)")
//   let a=+prompt("a=");
//   let b=+prompt("b="),s=0;
//   for(let  i=a; i<=b; i++){
//     s+=Math.pow(i,2);
//   }
//   console.log(s);
// }

  // => 10-masala <= //
// {
//   let n=+prompt("n sonini kiriting:"),s=0;
//   for(let i=1; i<=n; i++){
//   s+=1/i;
//   }
//   console.log(s);
// }

  // => 11-masala <= //
// {
//   let n=+prompt("n sonni kiriting:");
//   for(let i=1; i<=n; i+=2){
//       console.log(i);
    
//   }
// }

  // => 12-masala <= //
  // {
  //   let n=+prompt("n sonni kiriting:");
  //   for(let i=2; i<=n; i+=2){
  //       console.log(i);
  //   }
  // }

  // => 13-masala <= // ==> Savol
// {
//  let n=+prompt("n sonini kiriting:");
//  for(let i=1; i<=n; i++){

//  } 
//}

  // => 14-masala <= //
// {
//  let n=+prompt("n sonini kiriting:");
//  console.log("Juftlari:")
// for(let i=0; i<=n; i+=2){
//   console.log(i)
// }
// console.log("Toqlari:")

// for(let j=1; j<=n; j+=2){
//   console.log(j);
// }
// }

  // => 15-masala <= //
// {
//  let n=+prompt("n sonini kiriting:");
// for(let i=n; i>0; i--){
//   console.log(i);
// }
// }

  // => 16-masala <= //
// {
//   let n=+prompt("n sonini kiriting:");
// for(let i=0; i<=n; i++){
//   if(i%5!==0){
//     console.log(i);
//   }
// }  
// }

  // => 17-masala <= //
  // {
  //   let n=+prompt("n sonini kiriting:"),s=1;
  // for(let i=0; i<=n; i++){
  // s*=i;
  // }  
  // console.log(s);
  // }

  // => 18-masala <= //
// {
//   let n= +prompt("n sonni kiriting:"),s=0,f=1;
//   for(let i=1; i<=n; i++){
// f*=i;
// s+=f;
//   }
//   console.log(s);
// }

  // => 19-masala <= //
// {
//   let n= +prompt("n sonni kiriting:"),s=1,f=1;
// let x=+prompt("x sonni kiriting:");
// for(let i=1; i<=n; i++){
//   f*=i;
// s+=(x*i)/f;
// }
// console.log(s);
// }

  // => 20-masala <= //
// {
// let n=+prompt("n sonni kiriting: ");
// let x=+prompt("x sonni kiriting:");
// for(let i=0; i<=n; i++){
//   if(i%x===0){
//     console.log(i);
//   }
// }
// }

  // => 21-masala <= //
{
  // Savol
}