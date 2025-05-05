# 🏠 TerraSure – AI-Powered Real Estate Platform (Backend)

This is the backend codebase for the RealEstateApp — a smart, AI-enhanced property listing platform built for the Nigerian real estate market with a focus on trust, automation, and mobile-first usability.

## 🚀 Features

- ✅ Document verification using **Amazon Textract**
- ✅ Image similarity detection using **Amazon Rekognition**
- ✅ AI-generated listing descriptions using **GPT-4**
- ✅ Secure Lambda-based backend logic for AI processing
- ✅ Modular Express.js architecture ready for scaling
- ✅ Render/GitHub Actions deployment-ready

---

## 🗂 Project Structure

```
TerraSure-ai-backend/
├── src/
│   ├── config/             # AWS setup and environment configs
│   ├── controllers/        # (Optional future expansion)
│   ├── services/           # Textract, Rekognition, GPT modules
│   ├── routes/             # API endpoints
├── .env.example            # Environment variable template
├── index.js                # App entry point
└── .github/workflows/      # GitHub Actions for CI/CD
```

---

## ⚙️ Setup Instructions

### 1. Clone and Install
```bash
git clone https://github.com/olivaryne/terrasure.git
cd ts-ai-backend
npm install
```

### 2. Create `.env` file
Use `.env.example` as a reference. Add your AWS, S3, Lambda, and OpenAI credentials.

### 3. Run the App
```bash
npm start
```

---

## ☁️ AWS Configuration

- Your AWS IAM user must have permissions for:
  - `textract:AnalyzeDocument`
  - `rekognition:CompareFaces`
  - `lambda:InvokeFunction`
  - `s3:GetObject` & `s3:PutObject`

Add your Lambda ARNs in the `.env`.

---

## 📦 Deployment with Render

- Connect this repo to [Render.com](https://render.com)
- Add environment variables in the Render dashboard
- Use GitHub Actions for CI with the deploy hook (see `.github/workflows/deploy.yml`)

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/verify-document` | Trigger Lambda for document verification |
| POST | `/api/ai/compare-images` | Compare image similarity via Rekognition |
| POST | `/api/ai/generate-description` | Generate a listing description via GPT |

---

## 🧠 Built With

- **Node.js + Express**
- **Amazon Textract**
- **Amazon Rekognition**
- **OpenAI GPT-4**
- **AWS Lambda**
- **Render**

---
<!-- 
## 📜 License
MIT License -->
