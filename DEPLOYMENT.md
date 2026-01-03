# Hostinger Deployment Guide for alphabetmobility.org

## Prerequisites
- ✅ Domain purchased: alphabetmobility.org
- ✅ Production build completed
- ⏳ Need: Hostinger hosting plan with Node.js support

## Deployment Options

### Option 1: Node.js Hosting (Recommended)

#### Step 1: Purchase Hosting
1. Go to Hostinger and purchase **Business Hosting** or **Cloud Hosting** (both support Node.js)
2. Link your domain `alphabetmobility.org` to the hosting

#### Step 2: Prepare Files for Upload
You need to upload these files/folders to Hostinger:
```
├── dist/               (entire folder - production build)
├── node_modules/       (will be installed on server)
├── package.json
├── package-lock.json
└── .env               (optional - for environment variables)
```

#### Step 3: Upload to Hostinger
1. Go to **Hostinger hPanel** → **File Manager**
2. Navigate to `public_html` or your domain folder
3. Upload all files listed above
4. Or use **FTP/SFTP** for faster upload (recommended for large files)

#### Step 4: Install Dependencies on Server
Using Hostinger's Terminal or SSH:
```bash
cd /home/username/public_html
npm install --production
```

#### Step 5: Configure Node.js Application
In Hostinger hPanel:
1. Go to **Advanced** → **Node.js**
2. Create New Application:
   - **Application mode**: Production
   - **Application root**: `/public_html` (or your folder)
   - **Application URL**: `alphabetmobility.org`
   - **Application startup file**: `dist/index.cjs`
   - **Node.js version**: 20.x or higher

#### Step 6: Set Environment Variables (if needed)
In Node.js application settings:
- `NODE_ENV=production`
- `PORT=3000` (or Hostinger's default)

#### Step 7: Start Application
Click **Start Application** in Hostinger Node.js panel

---

### Option 2: Static Files Only (Simpler, but no server features)

#### Step 1: Use Built Files
Upload only the contents of `dist/public/` folder:
```
dist/public/
├── index.html
├── assets/
│   ├── all your images and logos
│   ├── index-*.css
│   └── index-*.js
```

#### Step 2: Upload via File Manager
1. Go to Hostinger **File Manager**
2. Navigate to `public_html`
3. Upload all files from `dist/public/`
4. Your site will be live immediately!

**Note**: This option won't have Node.js server features, but works perfectly for your static marketing site.

---

## Quick Checklist

- [ ] Domain: alphabetmobility.org ✅ (purchased)
- [ ] Hosting plan purchased
- [ ] DNS configured (usually automatic with Hostinger)
- [ ] Files uploaded to server
- [ ] Dependencies installed (Option 1 only)
- [ ] Node.js app configured (Option 1 only)
- [ ] SSL certificate enabled (should be automatic)
- [ ] Test website at alphabetmobility.org

---

## Troubleshooting

### Site not loading?
- Check DNS propagation (can take 24-48 hours)
- Verify Node.js application is running (Option 1)
- Check file permissions in File Manager

### Images not showing?
- Ensure all files in `dist/public/assets/` were uploaded
- Check file paths are correct

### Need help?
- Contact Hostinger support (24/7 available)
- Check Hostinger's Node.js deployment tutorials

---

## Post-Deployment

### Update DNS/Nameservers
If you didn't purchase hosting from Hostinger:
- Update nameservers to Hostinger's:
  - ns1.dns-parking.com
  - ns2.dns-parking.com

### SSL Certificate
- Should be automatic with Hostinger
- Go to hPanel → SSL to verify/enable

### Test Your Site
Visit: https://alphabetmobility.org

---

## File Transfer Methods

### 1. File Manager (Web Interface)
- Easiest for beginners
- Limited file size
- Good for small updates

### 2. FTP/SFTP (Recommended)
Use FileZilla or similar:
- **Host**: ftp.alphabetmobility.org
- **Username**: Your Hostinger FTP username
- **Password**: Your Hostinger FTP password
- **Port**: 21 (FTP) or 22 (SFTP)

### 3. SSH/Terminal
For advanced users who need command line access.

---

## Need Help?

Contact me or check:
- Hostinger Knowledge Base: https://support.hostinger.com
- Node.js deployment guide: https://support.hostinger.com/en/articles/5617473-how-to-deploy-a-node-js-application
