function domID(id) {
    return document.getElementById(id);
}

var student = {
    maSV: '',
    tenSV: '',
    gioitinh: 'Nam',
    diemToan: 0,
    diemVan: 0,
    tinhDiemTB:function(){
        var dtb=(this.diemToan+this.diemVan)/2;
        return dtb;
    },
    xepLoai:function(){
        // nhỏ hơn 5 yếu 
        // từ 5-8 khá
        // 8-10 giỏi
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

domID('btnHienThi').onclick = function () {
    // không nên đặt tên biến giống nhau, thêm dấu gạch ở phía trc để phân biệt
    var _maSV = domID('txtMaSV').value;
    var _tenSV = domID('txtTenSV').value;
    var _gender = domID('gender').value;
    var _diemToan = domID('txtDiemToan').value * 1;
    var _diemVan = domID('txtDiemVan').value * 1;

    // nên log ra để check xem đã dom dc chưa ?  
    console.log(_maSV, _tenSV, _gender, _diemToan, _diemVan)


    student.maSV = _maSV;
    student.tenSV = _tenSV;
    student.gioitinh = _gender;
    student.diemToan = _diemToan;
    student.diemVan = _diemVan;
    console.log(student)

   
    domID('spanTenSV').innerHTML = student.tenSV;
    domID('spanMaSV').innerHTML=student.maSV;
    domID('spanGioiTinhSV').innerHTML=student.gioitinh;
    // gọi hàm ra 
    domID('spanDTB').innerHTML=student.tinhDiemTB();
    domID('spanXepLoai').innerHTML=student.xepLoai();

}