<h1 align="center">Skill Village Absensi-App</h1>

<p align="center">
Web-based Attendance Management System built using Laravel 11, React.js, Inertia.js, and MySQL.
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Laravel-v11-red">
    <img src="https://img.shields.io/badge/React-v19-blue">
    <img src="https://img.shields.io/badge/MySQL-Database-orange">
    <img src="https://img.shields.io/badge/Inertia.js-SPA-purple">
    <img src="https://img.shields.io/badge/Vite-Build-green">
</p>

---

#  About Project

Skill Village Attendance System is a web-based employee attendance management application developed to simplify attendance processes digitally.

The system supports attendance tracking, shift scheduling, department management, QR / Barcode attendance, and reporting features within a single integrated platform.

### Built With

- Laravel 11
- React.js
- Inertia.js
- MySQL
- Vite
- Tailwind CSS

---

#  Features

## Authentication

- Login Authentication
- User Authorization
- Admin Access Control
- Employee Profile

## Dashboard

- Attendance Statistics
- Employee Summary
- Daily Monitoring
- Attendance Overview

## Attendance Management

- Check In
- Check Out
- Attendance History
- Attendance Status



# 🛠 Tech Stack

### Frontend

- React.js
- Inertia.js
- Tailwind CSS
- Vite

### Backend

- Laravel 13
- PHP

### Database

- MySQL

### Tools

- Composer
- Node.js
- npm

---

#  Project Structure

```bash
attendance-system/
│── app/
│── bootstrap/
│── config/
│── database/
│── public/
│   ├── logo.png
│   └── screenshots/
│       ├── dashboard.png
│       ├── attendance.png
│       ├── checkin.png
│       └── report.png
│── resources/
│   └── js/
│       ├── Pages/
│       ├── Components/
│       └── Layouts/
│── routes/
│── storage/
│── package.json
│── composer.json
│── vite.config.js
```

---

#  Installation

Clone repository:

```bash
git clone https://github.com/USERNAME/absensi-skil.git
```

Open project:

```bash
cd absensi-app
```

Install backend dependencies:

```bash
composer install
```

Install frontend dependencies:

```bash
npm install
```

Copy environment file:

```bash
cp .env.example .env
```

Generate key:

```bash
php artisan key:generate
```

Run migration:

```bash
php artisan migrate
```

Run application:

Laravel:

```bash
php artisan serve
```

Vite:

```bash
npm run dev
```

Application URL:

```bash
http://127.0.0.1:8000
```

---

#  System Preview

## login

<p align="center">
    <img src="ss-aplikasi\ss absensi.png" width="900">
</p>

## Dashboard

<p align="center">
    <img src="ss-aplikasi\ss absensi2.png" width="900">
</p>

## Riwayat Absen

<p align="center">
    <img src="ss-aplikasi\ss absensi3.png" width="900">
</p>

---

#  Database

Database:

```bash
MySQL
```

Import SQL:

```bash
absensi-db.sql
```

---

#  Future Development

- Face Recognition Attendance
- GPS Attendance Tracking
- Export Excel
- Real-time Notification
- Mobile Optimization
- Analytics Dashboard

---

#  License

This project was developed for Internship (PKL) and educational purposes.

Developed by **Muhammad Ibnu Saputra**
