//converting to numbers explicitly
let numberStr="87";
numberStr=Number("87");// the Number() explicitly converts js vales from strings to numbers
console.log(numberStr);//  87


// conversion to String
let num=23;
num=String("23");//the String() explicity converts a value into  aString Dta type
console.log(num)//23
 let truthyValu="Thanks to Guru";
 let falsyValue="0";
 truthyValu=Boolean("Thanks to Guru");//true
 console.log(truthyValu)
 falsyValue=Boolean(0);// false
 console.log(falsyValue)

 //conversion of javascript dates to nmbers
 //creating date
const  currentDate=new Date();//new Date() constrctor is used to  create a date object and it gives current Date and time
console.log(currentDate)//2023-10-08T19:33:28.775Z

//converting to number
const numDate=currentDate.getTime()// getTime method returns the number of milesecons from midnight of January 1 1970
console.log(numDate)//1696794068995

