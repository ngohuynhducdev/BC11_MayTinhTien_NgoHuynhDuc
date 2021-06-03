document.getElementById("btnTinhTienHang").onclick = function (event) {
    event.preventDefault();
    
    var ten = document.getElementById("txtTenMatHang").value;
    var soLuong = document.getElementById("txtSoLuong").value;
    var donGia = document.getElementById("txtDonGia").value;
    var total = 0;

    if (0 < soLuong && soLuong <50){
        total = soLuong * donGia;
    } else if(50 <= soLuong && soLuong <= 100){
        total = 49 * donGia +(soLuong- 49) *donGia *0.92;
    } else if(soLuong > 100) {
        total = 49 * donGia + 51 * donGia * 0.92 + (soLuong - 49 - 51) * donGia * 0.88;
    } else {
        alert("Số lượng không hợp lệ!");
    }

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var totalFormat = currentFormat.format(total);

    var info = "Thành tiền: " + totalFormat + " vnd";
    
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

}