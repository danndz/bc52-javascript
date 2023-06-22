// Khai báo object (đối tượng)
let car = {
  // Khai báo thuộc tính (property) cho object
  // key: value
  brand: "Toyota",
  color: "Silver",
  weight: 1000,
};

// Truy cập các thuộc tính của object bằng toán tử .
console.log("brand:", car.brand);
// Truy cập các thuộc tính của object bằng object["property"]
console.log("color:", car["color"]);
// Truy cập động các thuộc tính của object bằng giá trị của một biến
let key = "weight";
console.log("car[key]:", car[key]); // => car["weight"]

// Thay đổi giá trị của thuộc tính
car.color = "red";
console.log("Object car sau khi thay đổi thuộc tính color:", car);

// Thêm thuộc tính
car.price = 5000000000;
console.log("Object car sau khi thêm thuộc tính price", car);

// Xoá thuộc tính
delete car.weight;
console.log("Object car sau khi xoá thuộc tính weight", car);

// Kiểm tra một thuộc tính có tồn tại trong object hay không

// Khi truy cập một thuộc tính không tồn tại, trả ra undefined
if (car.power) {
  console.log("Thuộc tính power có tồn tại");
}
// Hoặc sử dụng từ khoá in để kiểm tra
if ("price" in car) {
  console.log("Thuộc tính price có tồn tại");
}

let user = {
  // Thuộc tính
  name: "Alice",
  age: 18,
  // Phương thức
  sayHi() {
    // console.log(`Hello ${user.name}`);

    // Từ khoá "this": đại diện cho đối tượng gọi tới phương thức
    console.log(`Hi ${this.name}`);
  },

  // Không sử dụng arrow function để định nghĩa phương thức cho object
  // Lý do: arrow function không định nghĩa từ khoá this, mà nó sẽ sử dụng this của hàm bao bọc lấy nó (nếu có)
  // sayHello: () => {
  //   console.log(`Hello ${this.name}`);
  // },
};

user.sayHi()



