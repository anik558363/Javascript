/*
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5

*/



function mindGame(num){
    if(typeof num !== 'number' || num <= 0){
        return 'please provide me a valid positive number.'
    }else{
        const total = ((((num * 3) + 10) / 2) - 5)
        return total;
    }
}



console.log(mindGame(-5));