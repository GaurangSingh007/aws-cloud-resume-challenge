# 🌐 S3 Static Website with View Counter (Terraform Managed)

This project hosts a static website using **Amazon S3** and **CloudFront**, tracks view counts via **DynamoDB**, and automates updates using **AWS Lambda** — all provisioned through **Terraform**.

---

## 📦 What’s Included

- **S3**: Static website hosting
- **CloudFront**: Content delivery network (CDN)
- **DynamoDB**: View counter storage
- **Lambda**: Backend function to update views
- **Terraform**: Infrastructure as Code for full automation

---

## 🛠️ How It Works

- **Users visit the site** via CloudFront.
- A **Lambda function** is triggered to:
  - Read/update the view count in DynamoDB.
  - Return the updated count to the frontend.
- **Terraform** manages:
  - S3 buckets and policies
  - CloudFront distribution
  - Lambda function and IAM roles
  - DynamoDB table
  - Lambda permissions and Function URL

---
## 📝 How to Update the Website

1. Go to your S3 bucket in the AWS Console.
2. Upload or replace files like `index.html`, `counter.js`, etc.
3. Use the **Copy** option to update metadata:
   - Add `Cache-Control`: `no-cache, no-store, must-revalidate`
4. Create a CloudFront **invalidation** to remove cached content (`/*`).

---

## ⚙️ How the View Counter Works

- When a user visits the site, a **Lambda function** triggers.
- It reads and updates the view count in **DynamoDB**.
- The updated count is returned to the frontend and displayed.

---

## ✅ S3 Website Configuration

- **Index Document**: `index.html`

---

## 🚀 Deployment with Terraform

This project uses Terraform to automate everything. Just update your static files and apply changes with Terraform for a full-stack deployment.

---
