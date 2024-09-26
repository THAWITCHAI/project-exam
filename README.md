##SQL
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2024 at 08:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `time_s` varchar(255) NOT NULL,
  `time_e` varchar(255) NOT NULL,
  `status_job` varchar(255) NOT NULL,
  `create_job` varchar(255) DEFAULT NULL,
  `update_job` varchar(255) DEFAULT current_timestamp(),
  `type_job` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `name`, `time_s`, `time_e`, `status_job`, `create_job`, `update_job`, `type_job`) VALUES
(15, 'ปรับปรุงระบบแสดงผลคิวงาน', '02:25', '04:30', 'ดำเนินการ', '2024-09-23', '2024-09-27 00:56:06', 'Development'),
(16, 'ทดสอบการส่งแบบฟอร์มขอลา', '03:00', '03:45', 'เสร็จสิ้น', '2024-09-23', '2024-09-27 00:56:36', 'Test'),
(17, 'พัฒนา UI หน้าล็อกอิน', '09:00', '11:00', 'เสร็จสิ้น', '2024-09-24', '2024-09-27 00:57:12', 'Development'),
(18, 'ทดสอบการสมัครสมาชิก', '11:15', '12:00', 'เสร็จสิ้น', '2024-09-24', '2024-09-27 00:57:31', 'Test'),
(19, ' เขียนคู่มือการใช้งานระบบสมาชิก', '05:00', '06:02', 'เสร็จสิ้น', '2024-09-24', '2024-09-27 00:57:48', 'Document'),
(20, 'พัฒนา API สำหรับระบบสมาชิก', '15:00', '18:02', 'เสร็จสิ้น', '2024-09-24', '2024-09-27 00:58:06', 'Development'),
(21, 'ทดสอบระบบการล็อกเอาท์', '05:00', '05:30', 'เสร็จสิ้น', '2024-09-24', '2024-09-27 00:58:24', 'Test'),
(22, 'ปรับปรุง UI หน้าแดชบอร์ด', '09:30', '12:00', 'ดำเนินการ', '2024-09-24', '2024-09-27 00:58:46', 'Development'),
(23, 'ทดสอบฟังก์ชันการอัปเดตโปรไฟล์', '09:30', '12:00', 'เสร็จสิ้น', '2024-09-24', '2024-09-27 00:59:03', 'Test'),
(24, 'เขียนเอกสารสรุปฟีเจอร์ใหม่', '02:30', '23:40', 'เสร็จสิ้น', '2024-09-25', '2024-09-27 00:59:38', 'Document'),
(25, 'พัฒนาระบบการจัดการโปรไฟล์', '04:00', '04:40', 'ดำเนินการ', '2024-09-25', '2024-09-27 01:00:09', 'Development'),
(26, 'ทดสอบการลบโปรไฟล์', '04:00', '04:40', 'เสร็จสิ้น', '2024-09-25', '2024-09-27 01:00:22', 'Development'),
(27, 'พัฒนา UI หน้ารายการสินค้าขายดี', '04:00', '04:40', 'เสร็จสิ้น', '2024-09-26', '2024-09-27 01:00:51', 'Development'),
(28, 'ทดสอบการเพิ่มสินค้าในระบบ', '04:00', '04:40', 'เสร็จสิ้น', '2024-09-26', '2024-09-27 01:01:02', 'Test'),
(29, 'เขียนเอกสารฟังก์ชันการจัดการสินค้า', '08:00', '04:44', 'เสร็จสิ้น', '2024-09-26', '2024-09-27 01:01:28', 'Document'),
(30, 'พัฒนาระบบการจัดการออเดอร์', '02:00', '03:44', 'ดำเนินการ', '2024-09-26', '2024-09-27 01:01:48', 'Document'),
(31, 'ทดสอบการจัดการออเดอร์', '02:00', '03:44', 'ดำเนินการ', '2024-09-26', '2024-09-27 01:02:03', 'Test'),
(32, 'พัฒนาระบบแสดงข้อมูลสินค้า', '02:04', '03:45', 'เสร็จสิ้น', '2024-09-25', '2024-09-27 01:02:25', 'Development'),
(33, 'ทดสอบการเพิ่มรายการสินค้า', '02:04', '03:45', 'เสร็จสิ้น', '2024-09-27', '2024-09-27 01:02:49', 'Test'),
(34, 'เขียนคู่มือการใช้ฟังก์ชันการจัดการสินค้า', '05:00', '06:00', 'เสร็จสิ้น', '2567-09-27', '2024-09-27 01:04:00', 'Document'),
(35, 'พัฒนาระบบการจัดส่งสินค้า', '05:00', '06:00', 'ดำเนินการ', '2567-09-27', '2024-09-27 01:04:15', 'Development'),
(36, 'ทดสอบระบบติดตามสินค้า', '05:00', '06:00', 'เสร็จสิ้น', '2567-09-27', '2024-09-27 01:04:33', 'Test'),
(37, 'พัฒนาเว็บการท่องเที่ยว', '00:00', '05:00', 'ดำเนินการ', '2567-09-25', '2024-09-27 01:05:23', 'Development'),
(38, 'ทดสอบเว็บการท่องเที่ยว', '08:00', '10:00', 'เสร็จสิ้น', '2567-09-26', '2024-09-27 01:05:46', 'Test'),
(39, ' พัฒนา API การจัดการการสั่งซื้อ', '08:00', '10:00', 'เสร็จสิ้น', '2567-09-28', '2024-09-27 01:06:02', 'Development'),
(40, 'ทดสอบการสร้างรายการสั่งซื้อ', '05:00', '09:00', 'เสร็จสิ้น', '2567-09-28', '2024-09-27 01:06:17', 'Test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
