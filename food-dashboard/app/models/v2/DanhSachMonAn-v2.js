class FoodListV2 {
  constructor() {
    this._list = [];
  }

  themMon(foodv2) {
    this._list.push(foodv2);
  }

  danhSach() {
    return this._list;
  }
}

export default FoodListV2;
