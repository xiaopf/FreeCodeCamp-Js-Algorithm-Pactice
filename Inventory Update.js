function updateInventory(arr1, arr2) {
    var curInvName=[];

    for(let i=0;i<arr1.length;i++){
        curInvName.push(arr1[i][1]);
    }

    for(let j=0;j<arr2.length;j++){
        var pos=curInvName.indexOf(arr2[j][1]);
        if(pos==-1){
            arr1.push(arr2[j]);
        }else{
            arr1[pos][0]+=arr2[j][0];
        }
    }
    
    return arr1.sort(function(a,b){return a[1].charCodeAt(0)-b[1].charCodeAt(0);});
}



// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
