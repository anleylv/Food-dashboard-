class FoodListV3 {
  constructor() {
    this._list = [];
  }

  themMon(foodv3) {
    this._list.push(foodv3);
  }

  capNhatMonAn(newFoodV3) {
    let idx = this._list.findIndex((item) => item.maMon === newFoodV3.maMon);
    if (idx > -1) {
      return (this._list[idx] = newFoodV3);
    }
    return this.themMon(newFoodV3);
  }

  danhSach(phanLoai = "all") {
    if (phanLoai == "all" || !phanLoai) {
      return this._list;
    }

    return this._list.filter((item) => item.loaiMon === phanLoai);
  }
}

export default FoodListV3;
