//ex 21  Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
var sum = 0;
for(var i =0; i<a.length;i++){
    sum+=a[i];
}
/* console.log(sum) */
//ex 22 Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] 
var max = a[0];
    for(var i=0; i<a.length;i++){
        if(max < a[i]){
            max = a[i];
        }
    }
/* console.log("max is: ", max) */

var min = a[0];
    for(var i=0; i<a.length;i++){
        if(min > a[i]){
            min = a[i];
        }
    }
/* console.log("min is: ", min)
console.log("avg of max and min is: ",(max+min)/2) */

//ex23 Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
var a = [1,2,3,4,5,6,7,8,9,9,9,10,11,12,16]
function ex23(a){
    var max= 0;
    var count =1;
    for(var i = 0; i<a.length; i++){
       if(a[i]==a[i+1]){
           count++;
           if(count>max){
               max=count;
           }
       }
       else{
           count = 1;
       }
    }
    return max;
}
/* console.log(ex23(a)) */

//ex24 Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
function check(n) {
    if (n < 2) {
        return 0
    } else {
        if (n == 2 | n == 3) {
            return n
        } else {
            for (var i = 2; i <= Math.sqrt(n); i++) {
                if (n % i !== 0) {
                    return n
                }
            }
        }
    }
}
var a = [1,2,3,2,3,4,6,7]
 function snt(a) {
     var b = [];
     for (var i = 0; i < a.length; i++) {
         if (check(a[i])) {
             b = b.concat(a[i])
         }
     }
     return b
}

function snt(a) {
    var b = a.filter(check)
    return b
}
/* console.log(snt(a)) */



//ex25 Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a

var a = [1, 2, 3, 2, 3, 4, 6, 7, 9]
var b = a.map(x => Math.pow(x,2))
/* console.log( b) */


//ex26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.


//ex 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.

var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

function ex27() {
    for (var i = 0; i < students.length; i++) {
        students[i].firstName = students[i].firstName[0].toUpperCase() + (students[i].firstName.substr(1)).toLowerCase();
    }
    for (var i = 0; i < students.length; i++) {
        if (students[i].firstName.includes("a") || students[i].firstName.includes("A") && students[i].firstName.length >= 3) {
            return students[i];
        }
    }
}
/* console.log(ex27(students)) */

//ex28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.

function ex28() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].lastName.includes("Do")) {
            return students[i];
        }
    }
}
/* console.log(ex28(students)); */

//ex29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).
function ex29(std) {
    std.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    return std
}
/* console.log(ex29(students)) */

//ex30 Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
function ex30(a) {
    a = a.sort()
    var max = a[a.length - 1]
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] == max) {
            a.pop()
        }
    }
    if (a.length === 0) {
        return -1
    } else {
        return a[a.length - 1]
    }

}
/* console.log(a)
console.log(ex30(a)) */

//ex31 Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
var k = 26;
var count =0;
function ex31(a){
    for(var i=0; i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            for(var u=j+1;u<a.length; u++){
                if(a[i]+a[j]+a[u]==k){
                    count++;
                }
                if(count!=0){
                    break;
                }
            }
        }
    }
    if(count!=0){
        return "Yes"
    }
    else{
        return "No"
    }
}
/* console.log(a)
console.log(ex31(a)) */
//ex32 Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
function ex32() {
    var a = [1,3,6,9,11,20];
    var b = a
    var k = 10
    var c = []
    for ( var i = 0; i < a.length; i++) {
        if (a[i] < k) {
            c.push(a[i])
        }
    }
    b.splice(c.length, 0, k)
    console.log(b)
}
/* console.log(ex32(a)); */

//ex 33 [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
