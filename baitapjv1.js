//bài 5: mô tả thuật toán tính điểm trung bình

var math = 8 ;
var physics = math + 1;
var chemistry = math -2;
  chemistry -=2;
var average = (math+physics+chemistry)/3;
console.log("average", average);

//bài 6:Mô tả thuật toán chuyển đổi tiền tệ



var usd = 15;
var quydoi = 23000;
var vnd = quydoi*usd;
console.log("vnd", vnd);



//Bài 11 biến, kiêu dữ liệu và toán tử

    //bài 1: nhập điểm số và tính điểm trung bình.
var chemistry = 10;
var physics = 8;
var biology = 5;
var average =(chemistry+physics+biology)/3;
console.log("chemistry:", chemistry);
console.log("physics:",physics);
console.log("biology:",biology);
console.log("average:", average);



   //bài2: chuyển độ C sang F

var censius = 30;
var variable = (9*censius)/5+32;
console.log("Fahrenheit",variable);


  //bài3, 4: Tính diện tích và chu vi hình tròn


var pi = 3.14;
var r = 15;
var S = pi*r*r;
var P = r*2*pi;
console.log("S:",S);
console.log("P:", P);



// var a = prompt("hoa");
// var b = prompt("toan");
// var c = prompt("ly");
// console.log(typeof ly);
// var average = (Number(a)+Number(b)+Number(c))/3;
// console.log("average", average);

// var age = window.prompt("Tuổi");
// var gender = window.prompt("giới tính");

// if(age>=18 && gender=="nam"){
//   alert("Bạn đủ điều kiện");
// }
//   else{
//     alert("bạn ko đủ đk");

var email = "hai@email.com"; //hình dung email nguoi dung
var password = "123456"  //hình dung mk
var isMale=true;
// console.log(!isMale);
if (email === "hai@email.com" && password === "123456"){
  console.log("điều kiện đúng,đăng nhập thành công");
}else{
  //công việc khi đk sai
  console.log("điều kiện sai that bai");}
