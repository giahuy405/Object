// viết hoa luôn cả chữ S 
// Lớp đối tượng
function SinhVien(_maSV, _tenSV, _gender, _diemToan, _diemVan) {
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.gender = _gender;
    this.diemToan = _diemToan;
    this.diemVan = _diemVan;

    this.tinhDiemTB=function(){
        return (Number(this.diemToan)+Number(this.diemVan))/2;
    }
    this.xepLoai=function(){
        var xepLoaiSV;
        if(this.tinhDiemTB() < 5){
            xepLoaiSV= 'Yếu';
        }else if(this.tinhDiemTB() > 5 && this.tinhDiemTB() < 8){
            xepLoaiSV= 'Khá';
        }else{
            xepLoaiSV= 'Giỏi';
        }
        return  xepLoaiSV;
    }
}

//tạo đói tượng sinh viên từ lớp đối tượng SinhVien
var sinhVien1 = new SinhVien(123, 'Huyha', 'Nam', 5, 10);
console.log(sinhVien1.tinhDiemTB());

var sinhVien2 = new SinhVien(254, 'hha', 'Nam', 5, 10);
console.log(sinhVien2.xepLoai());