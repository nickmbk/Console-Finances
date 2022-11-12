var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099] //85
];

// store the length of the array as the total months
var totalMonths = finances.length;

// totalAmount will store the total of profit and losses for the whole period, need to initialise as 0 because would not recognise as a number in the below for loop
var totalAmount = 0;

// create and initiate (as an array) a profitLoss array to store the changes in profit and loss over each month, this will be used a few times to get data
var profitLoss = [];



// calculate the total amount of profit/losses over the entire period whilst pushing each difference between each months profit/loss to the new  profitLoss array (originally two seprate for loops but combined to reduce code)
// initially reused totalMonths variable as it holds the length of the finances array but decided to use finances.length to avoid confusion and for readability
for (var i = 0; i < finances.length; i++) {
    // accessing index 1 of each array within the finances array to get the profit / loss value
    totalAmount += finances[i][1];
    // to avoid trying to calculate the first month (0 index) against an index that doesn't exist (-1) I've used an if statement to only add to the array if i is not 0, so it will skip the first time, this eliminates an error and makes the code work when I condense everything to one for loop
    if (i !== 0) {
        // get the value of the current index in the array and subtract the index before it to get the change between each month
        profitLoss.push([finances[i][0], finances[i][1] - finances[i - 1][1]]);
    }  
}

// when the profitLoss array has been completed we can calculate the average changes in the profit and loss and store it in the averageChanges variable
var averageChanges = 0;

// adds all the profit and losses together
for (var i = 0; i < profitLoss.length; i++) {
    averageChanges += profitLoss[i][1];
}

// calculates the average and puts to two decimal places
// needed to bring the decimal places down to two found this soluton on stackoverflow, to use .toFixed(2) (https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places)
averageChanges = (averageChanges / totalMonths).toFixed(2);

// sort the profitLoss array to be able to get the values for the greatest profit and the greatest loss
// found how to sort numbers within the arrays within the array from stackoverflow (https://stackoverflow.com/questions/50415200/sort-an-array-of-arrays-in-javascript)
profitLoss = profitLoss.sort(([a, b], [c, d]) => d - b);

// store the last index number of the profitLoss array minus 1 in the lastIndex variable to get the number of the last entry for the greatest loss statistic, did this for better readability
var lastIndex = profitLoss.length - 1;

// can now get the greatest increase value and gretest loss value from index 0 (the first) and last index respectively, store them in variables to make the console log statement look a little tidier
var greatestProfit = profitLoss[0][0] + " ($" + profitLoss[0][1] + ")";
var greatestLoss = profitLoss[lastIndex][0] + " ($" + profitLoss[lastIndex][1] + ")";

// console log all the statistics
console.log("Financial Analysis\n----------------------------\nTotal Months: " + totalMonths + 
"\nTotal: $" + totalAmount + "\nAverage  Change: $" + averageChanges + "\nGreatest Increase in Profits: "
 + greatestProfit + "\nGreatest Decrease in Profits: " + greatestLoss);