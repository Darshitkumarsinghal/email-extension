# 🏥 HIS Chrome Extension – Smart Form Assistant

This Chrome extension enhances the hospital workflow by automatically detecting email fields in real-time on form-based web platforms (e.g., Google Forms), validating the input using regex, and fetching related user/company data via a mock API.

✅ **Use Case**: Streamline patient data entry by automating user info retrieval — no more manual selection from dropdowns.

---



## 🚀 Features

- 🔍 Real-time input monitoring (e.g., email)
- ✅ Regex-based validation
- 🌐 Works on Google Forms & other web forms
- 🔗 Connects to a mock API (Node.js Express)
- 📌 Displays tooltip with user/company info
- ❌ Invalid email format triggers error tooltip

---

## 🛠 Tech Stack

| Layer        | Stack                            |
|--------------|----------------------------------|
| Extension UI | [Plasmo](https://plasmo.com) + React |
| Backend API  | Node.js + Express                |
| Validation   | Regex                            |

---

## 💻 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/email-extension.git
cd email-extension
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Extension in Dev Mode

```bash
npm run dev
```

### 4. Build for Chrome

```bash
npm run build
```

> Load the `/build/chrome-mv3-prod` directory into `chrome://extensions` as an **unpacked extension**.

---

## 🌐 Backend Setup

```bash
cd backend
npm install
node server.js
```

> Runs locally at:

```
http://localhost:3000/api/validate-email
```

---

## 📬 API Request Example

### Request:

```http
POST /api/validate-email
Content-Type: application/json

{
  "email": "sudhanshu@Mantys.com"
}
```

### Response:

```json
{
  "company": "Mantys"
}
```

---

## 🧪 Testing Emails

| Email                     | Tooltip           |
|--------------------------|-------------------|
| sudhanshu@mantys.com     | Working at Mantys   |
| kriti@mantys.com         | Working at Mantys |
| darshit@sociolla.com     | Works at Sociolla   |
| bad-email                | ❌ Invalid Format  |

---

## 🧠 Architecture

```
[Form Input Field]
       ↓
[Content Script Listener]
       ↓ (Valid Email)
[API Call to Express Server]
       ↓
[Response: Company Info]
       ↓
[Tooltip Shown on Form]
```

---

## 📦 Folder Structure

```
email-extension/
├── extension/                    # Chrome Extension (Plasmo + React)
│   ├── content.tsx              # Form input listener
│   ├── popup.tsx                # React popup UI
│   ├── utils/
│   │   └── emailValidator.ts
│   ├── api/
│   │   └── fetchUser.ts
│   ├── plasmo-assets/           # UI assets if any
│   └── ...
├── backend/                     # Node.js API server
│   ├── server.js
│   ├── routes/
│   │   └── validate.js
│   ├── utils/
│   │   └── emailValidator.js
│   ├── tests/
│   │   └── validate.test.js
│   └── package.json
└── README.md
```

---

## 🔮 Future Improvements

- Aadhaar number & MRN field detection
- HIS portal integration
- Deployment of backend to Render/Railway
- Authenticated API with JWT
- Popup UI for last lookup history

---

## 👨‍💻 Author

**Darshit Kumar Singhal**  
📧 darshitkumarsinghal.1@gmail.com  
🔗 [LinkedIn]((https://www.linkedin.com/in/darshit05/))  
🐙 [GitHub](https://github.com/Darshitkumarsinghal)

---

## 📝 License

MIT License. Feel free to fork and improve.
