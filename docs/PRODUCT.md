# 💍 Wedding Website Project – Technical Specification & Implementation Plan

## 1. 🎯 Project Overview

### 1.1 Mục tiêu
Xây dựng một **website thiệp cưới hiện đại, cá nhân hóa và giàu cảm xúc**, không chỉ cung cấp thông tin sự kiện mà còn kể lại hành trình 10 năm yêu nhau thông qua trải nghiệm tương tác (interactive storytelling).

### 1.2 Triết lý sản phẩm
- Không phải “thiệp cưới online” thông thường  
- Là một **trải nghiệm kể chuyện (story-driven experience)**  
- Tập trung vào:
  - cảm xúc
  - cá nhân hóa
  - trải nghiệm người dùng (UX)

---

## 2. 🧱 Tech Stack

### 2.1 Frontend
- Framework: **Next.js (App Router hoặc Pages Router đều được)**
- Styling:
  - TailwindCSS (khuyến nghị)
  - hoặc CSS Modules
- Animation:
  - Framer Motion (đơn giản, React-friendly)
  - hoặc GSAP (nâng cao)

---

### 2.2 Backend (Lightweight)
- Google Apps Script (Web App API)
- Google Sheets (database)

---

### 2.3 Hosting & Deployment
- Vercel:
  - CI/CD tự động từ GitHub
  - CDN global
  - SSL sẵn

---

### 2.4 Data Flow Summary

```

User → Next.js frontend → (fetch POST)
→ Google Apps Script → Google Sheets

```

---

## 3. 🧩 Core Features

---

# 3.1 Landing Page (Thiệp cưới chính)

## Mục đích
- Cung cấp thông tin chính
- Tạo ấn tượng ban đầu

## Nội dung
- Hero section:
  - tên cô dâu + chú rể
  - ảnh cưới
- Thời gian:
  - ngày giờ tổ chức
- Địa điểm:
  - địa chỉ
  - Google Maps embed
- CTA:
  - “Xác nhận tham dự”
  - “Xem hành trình”

---

# 3.2 Our Story (Storytelling 10 năm)

## Mục tiêu
- Biến album ảnh → câu chuyện có cảm xúc
- Trải nghiệm dạng scroll

## Cấu trúc

### Chapter-based storytelling

```

2015 – Lần đầu gặp
2017 – Yêu xa
2020 – Biến cố
2022 – Trưởng thành
2025 – Quyết định cưới

```

---

## Mỗi chapter gồm:
- Title (năm + sự kiện)
- 3–5 ảnh
- 1–2 đoạn text ngắn
- Animation nhẹ:
  - fade in
  - slide up
  - zoom image

---

## UX Flow

```

Scroll xuống → từng chapter xuất hiện
→ ảnh + text animate vào
→ chuyển cảnh mềm

```

---

## Nguyên tắc thiết kế

- Không quá 40 ảnh tổng
- Ưu tiên chất lượng hơn số lượng
- Mỗi section phải có ý nghĩa

---

# 3.3 Guest Personalization (Cá nhân hóa khách mời)

## Mục tiêu
- Mỗi khách thấy nội dung riêng
- Tăng cảm xúc & trải nghiệm

---

## Cách hoạt động

### URL pattern

```

[https://yourdomain.com?g=anhtu](https://yourdomain.com?g=anhtu)

````

---

## Data structure (JSON)

```json
{
  "anhtu": {
    "name": "Anh Tuấn",
    "message": "Nhớ đến sớm nhé!",
    "image": "/guests/anhtu.jpg"
  }
}
````

---

## Logic xử lý

```js
const params = new URLSearchParams(window.location.search);
const guestId = params.get("g");
const guest = data[guestId];
```

---

## UI hiển thị

* “Xin chào Anh Tuấn”
* Message riêng
* Highlight tên trong thiệp

---

## Nâng cao (optional)

* QR code riêng cho từng khách
* Ẩn/hiện nội dung theo guest

---

# 3.4 RSVP System

## Mục tiêu

* Thu thập xác nhận tham dự
* Không cần backend phức tạp

---

## Form fields

* Name
* Attending (Yes/No)
* Number of guests
* Note

---

## Frontend submit

```js
fetch("YOUR_SCRIPT_URL", {
  method: "POST",
  body: JSON.stringify({
    name,
    attending,
    guests,
    note
  })
});
```

---

## Apps Script (API)

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.attending,
    data.guests,
    data.note
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## Output

* Lưu vào Google Sheets
* Quản lý dễ dàng

---

# 3.5 Performance Optimization

## Ảnh

* Format: WebP / AVIF
* Resize trước khi upload
* Lazy loading

---

## Code

* Dynamic import cho animation
* Avoid bundle quá lớn

---

## UX

* Load nhanh trên mobile
* Scroll mượt

---

# 3.6 Mobile Optimization

## Rất quan trọng

> 80–90% user sẽ dùng mobile

---

## Checklist

* Responsive layout
* Font size dễ đọc
* Button đủ lớn
* Không lag khi scroll

---

# 3.7 Optional Features (Nice-to-have)

* 🎵 Nhạc nền
* 📷 Gallery fullscreen
* 🌙 Dark mode
* 📍 Map tương tác
* 📲 QR code

---

## 4. 🗂️ Project Structure (Next.js)

```
/app
  /page.tsx          → Landing
  /story/page.tsx    → Our Story

/components
  Hero.tsx
  StorySection.tsx
  RSVPForm.tsx
  GuestBanner.tsx

/lib
  guests.ts
  api.ts

/public
  /images
  /guests
```

---

## 5. 🔄 Development Timeline

### Day 1

* Setup project
* Deploy Vercel
* Build landing

---

### Day 2

* Build story sections
* Add content

---

### Day 3

* Animation
* Polish UI

---

### Day 4

* RSVP (Apps Script)
* Connect API

---

### Day 5

* Guest personalization
* Testing

---

## 6. ⚠️ Risks & Pitfalls

### 1. Over-engineering

* Làm quá nhiều animation
* Tốn thời gian

---

### 2. Quá nhiều ảnh

* Làm chậm site
* Mất focus

---

### 3. Không test mobile

* UX kém

---

### 4. RSVP lỗi

* Test kỹ trước ngày cưới

---

## 7. ✅ Success Criteria

* Load nhanh (<2s)
* Mobile mượt
* Story rõ ràng, cảm xúc
* RSVP hoạt động ổn định
* Cá nhân hóa hoạt động đúng

---

## 8. 🧠 Final Notes

* Đây là sản phẩm cảm xúc → UX quan trọng hơn kỹ thuật
* Ưu tiên:

  * đơn giản
  * mượt
  * có câu chuyện

---

## 9. 🚀 Kết luận

Kiến trúc:

```
Next.js + Vercel + Apps Script + Google Sheets
```

→ Là giải pháp:

* nhanh
* nhẹ
* dễ build
* đủ mạnh

---

> Nếu triển khai đúng, đây không chỉ là website cưới
> mà là một trải nghiệm đáng nhớ cho khách mời.