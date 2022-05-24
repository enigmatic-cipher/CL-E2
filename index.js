// Write a JavaScript conditional statement to find the sign of product of three numbers.

function sign(n1, n2, n3) {
  if (n1>0 && n2>0 && n3>0) {
    return ("The product of numbers is: " +(n1*n2*n3)+ " and sign is +");
  }
  else if (n1<0 && n2<0 && n3<0) {
    return ("The product of numbers is: " +(n1*n2*n3)+ " and sign is -");
  }
  else if (n1<0 && n2<0 && n3>0) {
    return ("The product of numbers is: " +(n1*n2*n3)+ " and sign is +");
    }
  else if (n1<0 && n2>0 && n3<0) {
    return ("The product of numbers is: " +(n1*n2*n3)+ " and sign is +");
  }   
  else if (n1>0 && n2<0 && n3<0) {
    return ("The product of numbers is: " +(n1*n2*n3)+ " and sign is +");
  }
  else {
    return ("The product of numbers is: " +(n1*n2*n3)+ " and sign is -");
  }
}

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
let num3 = prompt("Enter third number: ");

console.log(sign(num1,num2,num3));

