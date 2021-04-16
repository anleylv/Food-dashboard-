import FoodV3 from "../../models/v3/MonAn-v3.js";
import FoodListV3 from "../../models/v3/DanhSachMonAn-v3.js";
document.getElementById("btnThemMon").addEventListener("click", themMon);
document.getElementById("btnCapNhat").addEventListener("click", capNhat);
document.getElementById("selLoai").addEventListener("change", phanLoai);

const danhSachCacMonAn = new FoodListV3();

function thongTinMonAn() {
  const maMon = document.getElementById("foodID").value;
  const tenMon = document.getElementById("tenMon").value;
  const loaiMon = document.getElementById("loai").value;
  const giaMon = document.getElementById("giaMon").value;
  const khuyenMai = document.getElementById("khuyenMai").value;
  const tinhTrang = document.getElementById("tinhTrang").value;

  const food = new FoodV3(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);

  return food;
}

function phanLoai() {
  const phanLoaiDaChon = document.getElementById("selLoai").value;

  let danhSach = danhSachCacMonAn.danhSach(phanLoaiDaChon);
  hienThiCacMonAn(danhSach);
}

function capNhat() {
  // Step 1: lay thong tin mon an
  // Step 2: instantiate foodv3
  const food = thongTinMonAn();
  // Step 3: goi method capNhatMonAn
  danhSachCacMonAn.capNhatMonAn(food);

  let danhSach = danhSachCacMonAn.danhSach();
  hienThiCacMonAn(danhSach);
}

function themMon() {
  const food = thongTinMonAn();

  danhSachCacMonAn.themMon(food);

  let danhSach = danhSachCacMonAn.danhSach();

  hienThiCacMonAn(danhSach);
}

function hienThiCacMonAn(danhSach) {
  document.getElementById("tbodyFood").innerHTML = "";
  for (let i = 0; i < danhSach.length; i++) {
    hienThiMon(danhSach[i]);
  }
}

function hienThiMon(food) {
  document.getElementById("tbodyFood").innerHTML += `
        <tr>
            <td>${food.maMon}</td>
            <td>${food.tenMon}</td>
            <td>${food.loaiMon == "loai1" ? "Chay" : "Mặn"}</td>
            <td>${food.giaMon}</td>
            <td>${food.khuyenMai}</td>
            <td>${food.giaKM}</td>
            <td>${food.tinhTrang}</td>
        </tr>
    `;
}
