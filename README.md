# SES Quick Mailer
This project aims to provide a robust and scalable solution for email communications using AWS SES (Simple Email Service).

## About
- SES Quick Mailer is a web application that leverages AWS SES to send transactional and marketing emails to users. It provides a user-friendly interface for composing emails, managing recipient lists, and tracking email delivery.

## Features
- Send transactional and marketing emails
- Verify email addresses for high deliverability
- Manage recipient lists efficiently
- Track email delivery and engagement metrics
- Customize email templates and content

## Technologies Used
- Next JS
- Tailwind CSS
- AWS SES
- Prisma
- PostgreSQL

## Setup
1. Clone the repository:
   ```bash
      git clone https://github.com/NegativE333/ses-quick-mailer-next-js.git
   ```
2. Install dependencies:
   ```bash
      cd ses-quick-mailer-next-js
      npm install
   ```
3. Set up environment variables:Create a .env file in the root directory and add the following variables:
   ```bash
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
      ACCESSKEY=your-aws-access-key-id
      SECRETKEY=your-aws-secret-access-key
      REGION=your-aws-region
      DATABASE_URL=your-postgresql-url
   ```
4. Run the development server:
   ```bash
      npm run dev
   ```
5. Access the application at http://localhost:3000.

## System Architecture
![system-dark](https://github.com/NegativE333/ses-quick-mailer-next-js/assets/102456428/a523bade-9a25-49a0-8a60-ed11d1227b89)
