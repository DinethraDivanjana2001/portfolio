# Contact Form Setup Guide - WhatsApp & Email

## ✅ What Changed

The old Google Forms contact has been replaced with **WhatsApp** and **Email** buttons!

---

## 📱 Setup Instructions

### 1. **Update Your Contact Details**

Open this file: `components/forms/simple-contact-form.tsx`

Find these lines (around line 14-15):

```typescript
const WHATSAPP_NUMBER = "94771234567"; // Replace with your WhatsApp number
const EMAIL = "dinethra.rajapaksha@example.com"; // Replace with your email
```

**Replace with YOUR details:**

```typescript
const WHATSAPP_NUMBER = "94771234567"; // Your WhatsApp number (country code + number, NO + or spaces)
const EMAIL = "your.email@gmail.com"; // Your actual email address
```

### 2. **WhatsApp Number Format**

**IMPORTANT:** The WhatsApp number must be in this format:
- ✅ **Correct:** `"94771234567"` (country code + number, no + or spaces)
- ❌ **Wrong:** `"+94 77 123 4567"` or `"077 123 4567"`

**Examples:**
- Sri Lanka: `"94771234567"` (94 is country code)
- USA: `"14155551234"` (1 is country code)
- UK: `"447911123456"` (44 is country code)

---

## 🎯 How It Works

### **WhatsApp Button:**
- When clicked, opens WhatsApp (web or app)
- Pre-fills message with: Name, Subject, and Message
- User can edit before sending

### **Email Button:**
- When clicked, opens default email client (Gmail, Outlook, etc.)
- Pre-fills: Subject and Body with the message
- User can edit before sending

---

## 🎨 Features

1. **Simple & Clean UI** - No complex forms
2. **No Backend Required** - Uses native WhatsApp/Email apps
3. **Mobile Friendly** - Works on all devices
4. **Privacy Friendly** - No data stored on your server

---

## 🔧 Optional Customizations

### Change Button Colors

In `simple-contact-form.tsx`, find the buttons (around line 85-105):

**WhatsApp button:**
```tsx
className="flex-1 bg-green-600 hover:bg-green-700 text-white"
```
Change `green-600` to any color you like!

**Email button:**
```tsx
variant="outline"
```
Change to `variant="default"` for a filled button.

### Change Button Text

Find:
```tsx
WhatsApp
```
and
```tsx
Email
```

Change to whatever you want!

---

## 📧 Email Setup (No Configuration Needed!)

The email button uses `mailto:` links which work automatically with:
- Gmail
- Outlook
- Apple Mail
- Any default email client

**No setup required!** Just update your email address in the code.

---

## 💡 Testing

1. **Test WhatsApp:**
   - Click WhatsApp button
   - Should open WhatsApp with pre-filled message
   - Send to yourself to test

2. **Test Email:**
   - Click Email button
   - Should open your email client
   - Check if subject and body are pre-filled

---

## 🚀 That's It!

Just update your WhatsApp number and email in the code, and you're done!

**File to edit:** `components/forms/simple-contact-form.tsx`
**Lines to change:** 14-15
