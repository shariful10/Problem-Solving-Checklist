/**********************************
2. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
**********************************/

function centimeterToMeter(centimeter){
    return centimeter / 100;
}

const centimeter = 2000;
const meter = centimeterToMeter(centimeter);
console.log(meter);