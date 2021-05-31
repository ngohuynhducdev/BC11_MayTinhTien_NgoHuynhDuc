document.getElementById("btnTinhTienHang").onclick = function (event) {
    event.preventDefault();
    
    var ten = document.getElementById("txtTenMatHang").value;
    var soLuong = document.getElementById("txtSoLuong").value;
    var donGia = document.getElementById("txtDonGia").value;
    var total = 0;

    if(soLuong >= 101) {
       total = (soLuong * donGia) - ((soLuong * donGia) * 12 / 100);
    } else if (soLuong < 50) {
        total = soLuong * donGia;
    } else {
        total = (soLuong * donGia) - ((soLuong * donGia) * 8 / 100);
    }

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var totalFormat = currentFormat.format(total);

    var info = "Kết quả: " + totalFormat + " vnd";
    
    document.getElementById("footerCard").innerHTML = info;
    document.getElementById("footerCard").classList.add("alert", "alert-success");

}