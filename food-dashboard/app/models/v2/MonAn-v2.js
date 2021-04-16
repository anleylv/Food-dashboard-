class FoodV2 {
    constructor(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhAnh, moTa) {
        this.maMon = maMon; 
        this.tenMon = tenMon;
        this.loaiMon = loaiMon;
        this.giaMon = giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
        this.giaKM = this.tinhGiaKhuyenMai();
    }

    tinhGiaKhuyenMai(){
        return (this.giaMon * this.khuyenMai) /100       
    }
}

export default FoodV2;