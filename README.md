# vi-fix-js 🛠️

**vi-fix-js** là một thư viện JavaScript/Node.js mã nguồn mở siêu nhẹ (Zero Dependency), được tối ưu hóa để xử lý các bài toán đặc thù của Tiếng Việt như chuẩn hóa dấu, bỏ dấu, xử lý CCCD, nhà mạng và dữ liệu hành chính mới nhất.

🔗 **Tài liệu hướng dẫn chi tiết:** [https://lib.mscrew.io.vn/vi-fix/js](https://lib.mscrew.io.vn/vi-fix/js)

---

## ✨ Tính năng nổi bật

- **Siêu nhẹ:** Dung lượng chỉ khoảng 5KB, không phụ thuộc vào bất kỳ thư viện bên thứ ba nào.
- **Cập nhật 2026:** Danh sách 34 tỉnh thành mới nhất theo phân cấp hành chính Việt Nam.
- **Thông minh:** Phân tích sâu dữ liệu từ số CCCD (Giới tính, Năm sinh, Tỉnh thành).
- **Hiện đại:** Hỗ trợ hoàn toàn ES Modules (ESM), tên hàm kiểu `camelCase` dễ dùng.

---

## 🚀 Cài đặt

Cài đặt thông qua npm:

```bash
npm install vi-fix-js
```

Hoặc thông qua yarn:

```bash
yarn add vi-fix-js
```

---

## 📖 Hướng dẫn sử dụng

Sử dụng `import` để bắt đầu (hỗ trợ tốt trong các framework hiện đại như React, Vue, Next.js hoặc Node.js mới):

```javascript
import * as vf from 'vi-fix-js';

// 1. Chuẩn hóa dấu (hoà -> hòa)
console.log(vf.fix("Khánh Hoà bình yên")); // Output: Khánh Hòa bình yên

// 2. Bỏ dấu Tiếng Việt
console.log(vf.nosign("Tiếng Việt có dấu")); // Output: Tieng Viet co dau

// 3. Phân tích CCCD (12 số)
const info = vf.parseCccd("037098000123");
console.log(info); 
// Output: { gender: 'Nam', birth_year: 1998, province_code: '037', valid: true }

// 4. Kiểm tra nhà mạng
console.log(vf.getTelco("0961234567")); // Output: Viettel

// 5. Định dạng tiền tệ
console.log(vf.money(1500000)); // Output: 1.500.000đ

// 6. Đọc số thành chữ
console.log(vf.num2str("102", "vi")); // Output: một không hai

// 7. Danh sách 34 tỉnh thành (Update 2026)
const provinces = vf.getProvinces();
console.log(provinces.length); // Output: 34
```

---

## 🛠️ Danh sách 15 hàm tiện ích

| Hàm | Mô tả |
|---|---|
| `fix(text)` | Sửa vị trí đặt dấu thanh chuẩn (hoà -> hòa). |
| `nosign(text)` | Chuyển văn bản có dấu thành không dấu. |
| `clean(text)` | Loại bỏ khoảng trắng thừa giữa các từ. |
| `slug(text)` | Tạo chuỗi định danh (slug) cho URL. |
| `vCaps(text)` | Viết hoa chuẩn tên riêng Tiếng Việt. |
| `isVi(text)` | Kiểm tra văn bản có chứa ký tự Tiếng Việt không. |
| `num2str(num, lang)` | Chuyển dãy số thành chữ (Hỗ trợ vi/en). |
| `money(amount)` | Định dạng số thành tiền tệ VNĐ (1.500.000đ). |
| `cleanPhone(phone)` | Chuẩn hóa mọi định dạng SĐT về đầu số 0. |
| `getTelco(phone)` | Nhận diện nhà mạng từ số điện thoại. |
| `getProvinces(format)` | Lấy danh sách 34 tỉnh thành (list/json/str). |
| `isEmail(email)` | Kiểm tra định dạng email hợp lệ. |
| `isCccd(number)` | Kiểm tra định dạng CCCD 12 chữ số. |
| `parseCccd(cccd)` | Phân tích Giới tính, Năm sinh, Tỉnh từ CCCD. |
| `genPass(length)` | Tạo mật khẩu/OTP ngẫu nhiên nhanh. |

---

## 📄 Giấy phép (License)

Dự án này sử dụng giấy phép **MIT License** - Bạn có quyền tự do sử dụng, sửa đổi và phân phối.

---

## ✍️ Tác giả

Phát triển bởi **MinhSangGD**
* **GitHub:** [MinhSangGDVN](https://github.com/MinhSangGDVN)
* **Project Link:** [vi-fix-js](https://github.com/MinhSangGDVN/vi-fix-js)

-----

💡 **Xem thêm:** Phiên bản dành cho [Python](https://github.com/MinhSangGDVN/vi-fix)
```