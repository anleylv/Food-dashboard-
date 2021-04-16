import FoodV2 from "../../models/v2/MonAn-v2.js";
import FoodListV2 from "../../models/v2/DanhSachMonAn-v2.js";
document.getElementById("btnThemMon").addEventListener("click", themMon);
const danhSachCacMonAn = new FoodListV2();

function themMon() {
  const maMon = document.getElementById("foodID").value;
  const tenMon = document.getElementById("tenMon").value;
  const loaiMon = document.getElementById("loai").value;
  const giaMon = document.getElementById("giaMon").value;
  const khuyenMai = document.getElementById("khuyenMai").value;
  const tinhTrang = document.getElementById("tinhTrang").value;

  const food = new FoodV2(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang);

  danhSachCacMonAn.themMon(food);

  hienThiCacMonAn(danhSachCacMonAn.danhSach());
}

function hienThiCacMonAn(danhSach) {
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
