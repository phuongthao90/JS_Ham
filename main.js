// BÀI 1: QUẢN LÝ TUYỂN SINH
//MÔ HÌNH 3 KHỐI
/**
 * Khối 1: Input
 * diemMon1, diemMon2, diemMon3
 * diemUT, diemKV, diemDT
 * diemChuan
 * diemTK
 * 
 * Khối 2: Xử lý
 * Lấy dữ liệu từ UI, khai báo: 
 * diemUT = diemKV + diemDT
 * Nếu (diemMon1>0, diemMon2>0, diemMon3> 0)
 * thì tính: diemTK = diemKV + diemDT + diem3mMon
 *  + Nếu diemTK>=diemChuan --> Đậu
 *    ngược lại --> Rớt
 * 
 * Khối 3: Output
 * Hiển thị kết quả trên UI
 */


function tinhDiemKV(khuVuc) {
    var khuVuc = document.getElementById("inputKV").value;
    var diemKV = 0;
    if (khuVuc == "A") {
        diemKV = 2;
    } else if (khuVuc == "B") {
        diemKV = 1;
    } else if (khuVuc == "C") {
        diemKV = 0.5;
    } else if (khuVuc == "Khác") {
        diemKV = 0;
    } else {

    }
    return diemKV;
}

function tinhDiemDT(doiTuong) {
    var doiTuong = document.getElementById("inputDT").value;
    var diemDT = 0;
    if (doiTuong == "1") {
        diemDT = 2.5;
    } else if (doiTuong == "2") {
        diemDT = 1;
    } else if (doiTuong == "3") {
        diemDT = 0.5;
    } else if (doiTuong == "Khác") {
        diemDT = 0;
    } else {

    }
    return diemDT;
}

function xetDiem() {
    var diemMon1 = parseFloat(document.getElementById("inputMon1").value);
    var diemMon2 = parseFloat(document.getElementById("inputMon2").value);
    var diemMon3 = parseFloat(document.getElementById("inputMon3").value);
    var diemChuan = parseFloat(document.getElementById("inputdiemChuan").value);
    var khuVuc = document.getElementById("inputKV").value;
    var doiTuong = document.getElementById("inputDT").value;
    var diemKV = 0;
    var diemDT = 0;
    var diemTK = 0;
    var thongBao = "";
    if (diemChuan > 0 && diemChuan <= 30) {
        if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
            diemKV = tinhDiemKV(khuVuc);
            diemDT = tinhDiemDT(doiTuong);
            diemTK = diemMon1 + diemMon2 + diemMon3 + diemKV + diemDT;
            if (diemTK >= diemChuan) {
                console.log("Diem tk là " + diemTK + " ĐẬU");
                thongBao = String("Bạn đã đậu. Tổng điểm là : " + diemTK);
            } else {
                console.log("Diem tk là " + diemTK + "RỚT");
                thongBao = String("Bạn đã rớt. Tổng điểm là : " + diemTK);
            }
        } else {
            console.log("RỚT")
            thongBao = String("Bạn đã rớt");
        }
    } else {
        thongBao = String("Vui lòng nhập điểm chuẩn hợp lệ từ 1 đến 30");
    }
    document.getElementById("txt1").innerHTML = thongBao;

}
document.getElementById("btn1").onclick = xetDiem;


// BÀI TẬP 2: TÍNH TIỀN ĐIỆN
/**
 * MÔ HÌNH 3 KHỐI
 * Khối 1: Input
 * ten, soKW
 * 
 * Khối 2: Xử lý
 * Nếu 0<soKW<=50 ---> tienTra = soKW * 500;
 * Nếu 50<soKW<=100 ---> tienTra = 50*500 + (soKW-50)*650;
 * Nếu 100<soKW<=200 ---> tienTra = 50*500 + 50*650 +(soKW-100)*850;
 * Nếu 200<soKW<=350 ---> tienTra = 50*500 + 50*650 + 100*850 +(soKW-200)*1100;
 * Nếu soKm>350 --> tienTra = 50*500 + 50*650 + 100*850 +200*1100 + (soKW-350)*1300;
 * 
 * Khối 3: Output
 * tienTra;
 
 */
document.getElementById("btn2").onclick = function () {
    var soKW = parseFloat(document.getElementById("inputKW").value);
    var hoTen = document.getElementById("inputHoTen").value;
    var tienTra = 0;
    if (soKW > 0 && soKW <= 50) {
        tienTra = soKW * 500;
    } else if (soKW > 50 && soKW <= 100) {
        tienTra = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW > 100 && soKW <= 200) {
        tienTra = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW > 200 && soKW <= 350) {
        tienTra = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else if (soKW > 350) {
        tienTra = 50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (soKW - 350) * 1300;
    } else {
        console.log("Vui lòng nhập số điện hợp lệ");
    }
    document.getElementById("txt2").innerHTML = String("Họ Tên: " + hoTen + "; Tiền điện " + new Intl.NumberFormat().format(tienTra) + " VND");
}


// BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
/**
 * MÔ HÌNH 3 KHỐI
 * Khối 1: Input
 * name, incomeY, numPpl
 * rate
 * 
 * Khối 2: Xử lý
 * incomeUnTax = incomeY - 4 - numPpl*1.6 
 * personalTax = incomUnTax*rate
 * 
 * Khối 3: Output
 * personalTax
 */

const rateUp60 = 0.05;
const rateUp120 = 0.1;
const rateUp210 = 0.15;
const rateUp384 = 0.2;
const rateUp624 = 0.25;
const rateUp960 = 0.3;
const rateMore960 = 0.35;
console.log(1.6e5);

document.getElementById("btn3").onclick = function () {
    var name = document.getElementById("inputHoTen2").value;
    var incomeY = parseFloat(document.getElementById("inputIncomeY").value);
    var numPpl = parseInt(document.getElementById("inputNumPpl").value);
    var incomeUnTax = incomeY - 4e6 - numPpl * 1.6e6;
    var personalTax = 0;
  
    if (0 <incomeUnTax && incomeUnTax <= 60e6) {
        personalTax = incomeUnTax * rateUp60;
    } else if (incomeUnTax > 60e6 && incomeUnTax <= 120e6) {
        personalTax = incomeUnTax * rateUp120;
    } else if (incomeUnTax > 120e6 && incomeUnTax <= 210e6) {
        personalTax = incomeUnTax * rateUp210;
    } else if (incomeUnTax > 210e6 && incomeUnTax <= 384e6) {
        personalTax = incomeUnTax * rateUp384;
    } else if (incomeUnTax > 384e6 && incomeUnTax <= 624e6) {
        personalTax = incomeUnTax * rateUp624;
    } else if (incomeUnTax > 624e6 && incomeUnTax <= 960e6) {
        personalTax = incomeUnTax * rateUp960;
    } else if (incomeUnTax > 960e6) {
        personalTax = incomeUnTax * rateMore960;
    }else{
        alert("Vui lòng nhập số tiền hợp lệ");
    }
    document.getElementById("txt3").innerHTML = String("Họ Tên: " + name + "; <br> Thuế thu nhập phải đóng là: " + new Intl.NumberFormat().format(personalTax) + " VND");
}


// BÀI TẬP 4: TÍNH TIỀN CÁP
//MÔ HÌNH 3 KHỐi
/**
Khối 1: Input
maKH, loaiKH, soKN, soKenh

Khối 2: Xử lý
nhaDan --> tienCap = phiHD + phiCB + phiCC*soKenh
doanhNghiep --> Nếu 0<soKN <=10 thì phiCB = 75; Nếu soKN >10 thì phiCB = 75+(soKN-10)*5
            --> tienCap = phiHD + phiCB + phiCC*soKenh
            --> ô nhập kết nối sẽ hiện lên, ngược lại thì ẩn

KhốI 3: Output
tienCap
 */
document.getElementById("inputLoaiKH").onchange = function (){
 var show = document.getElementById("inputSKN");
 var loaiKH = document.getElementById("inputLoaiKH").value;
 if (loaiKH =="Doanh Nghiệp"){
    show.style.display = "block";
  }else {
     show.style.display = "none";
  }
}


function tinhTienCap(){
    var maKH = document.getElementById("inputMaKH").value;
    var loaiKH = document.getElementById("inputLoaiKH").value;
    var soKN = document.getElementById("inputSKN").value;
    var soKenh = document.getElementById("inputsoKenh").value;
    
    if (loaiKH =="Nhà Dân"){
        var phiHD = 4.5;
        var phiCB = 20.5;
        var phiCC =7.5;
        console.log(phiHD, phiCB, phiCC, soKenh);
       }else if (loaiKH == "Doanh Nghiệp"){
        phiHD = 15;
        phiCC = 50;
          if(soKN<=10 && soKN>=0){
            phiCB =75;
            }else if (soKN >10){ 
            phiCB = 75 + (soKN-10)*5;
            }
            }
    
    console.log(phiHD, phiCB, phiCC, soKenh,soKN);
    var tienCap = phiHD + phiCB + phiCC*soKenh; 
    document.getElementById("txt4").innerHTML = String("Mã khách hàng: " + maKH + "; <br> Tiền cáp: $" + tienCap);
}

document.getElementById("btn4").onclick = tinhTienCap;

 







