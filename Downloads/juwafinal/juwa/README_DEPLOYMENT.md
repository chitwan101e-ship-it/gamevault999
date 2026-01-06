# Alibaba Cloud Deployment Guide

## 📁 Folder Contents

This folder contains all the files needed to deploy your Juwa website to Alibaba Cloud.

**Domain:** `juwa777.com` (for Alibaba hosting)  
**GitHub Domain:** `juwagame.com` (for GitHub Pages)

## 🚀 Deployment Steps

### Option 1: Alibaba Cloud OSS (Object Storage Service) - Static Website Hosting

1. **Create an OSS Bucket:**
   - Log in to Alibaba Cloud Console
   - Go to Object Storage Service (OSS)
   - Create a new bucket named for your domain
   - Enable "Static Website Hosting"

2. **Upload Files:**
   - Upload ALL files and folders from this `juwa` folder to your OSS bucket
   - Make sure to preserve the folder structure (especially the `assets` and `Games` folders)

3. **Set Index File:**
   - Set `index.html` as the default index document
   - Set error page to `index.html` (for React routing)

4. **Configure Domain:**
   - Bind your custom domain `juwa777.com` to the bucket
   - Enable HTTPS/SSL certificate

5. **Update Sitemap:**
   - The `sitemap.xml` is already configured for `juwa777.com`
   - No changes needed

### Option 2: Alibaba Cloud ECS (Elastic Compute Service) - Nginx

1. **Upload Files:**
   - Upload ALL files from this `juwa` folder to your ECS server
   - Place them in `/var/www/html/` or your web root directory

2. **Nginx Configuration:**
   The `nginx.conf` file is already configured for `juwa777.com`. 
   
   To use it:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/juwa777
   sudo ln -s /etc/nginx/sites-available/juwa777 /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

3. **Enable HTTPS:**
   - Use Alibaba Cloud SSL Certificate or Let's Encrypt
   - Update nginx config to listen on port 443
   - Uncomment the HTTPS section in `nginx.conf`

4. **Update Sitemap:**
   - The `sitemap.xml` is already configured for `juwa777.com`
   - No changes needed

### Option 3: Alibaba Cloud CDN

1. **Create CDN Domain:**
   - Go to Alibaba Cloud CDN
   - Add your domain `juwa777.com`
   - Set origin to your OSS bucket or ECS server

2. **Upload Files:**
   - Upload all files to your origin (OSS or ECS)

3. **Configure CDN:**
   - Enable HTTPS
   - Set cache rules for static assets
   - Enable compression

## 📋 File Structure

```
juwa/
├── index.html          # Main HTML file
├── assets/            # CSS and JavaScript files
├── Games/             # Game images (42 files)
├── *.png, *.svg       # Other images and icons
├── banner.mp4         # Video background
├── sitemap.xml        # SEO sitemap (configured for juwa777.com)
├── nginx.conf         # Nginx config (configured for juwa777.com)
└── README_DEPLOYMENT.md  # This file
```

## ⚙️ Important Notes

1. **Domain Configuration:**
   - **Alibaba Hosting:** `juwa777.com` (configured in sitemap.xml and nginx.conf)
   - **GitHub Pages:** `juwagame.com` (separate deployment)

2. **React Router:** The nginx config includes `try_files $uri $uri/ /index.html;` which is essential for React's client-side routing to work.

3. **HTTPS:** Always use HTTPS in production. Alibaba Cloud provides free SSL certificates.

4. **Caching:** Static assets (CSS, JS, images) should be cached for better performance.

5. **Sitemap:** The sitemap.xml is configured for `juwa777.com`. If you need to change it, edit the file before uploading.

## 🔍 Verification

After deployment, check:
- ✅ Website loads at `https://juwa777.com`
- ✅ All images display correctly
- ✅ Navigation works (Home, Games, About, etc.)
- ✅ Floating Messenger and Telegram icons work
- ✅ Contact form is functional
- ✅ HTTPS is enabled
- ✅ Sitemap is accessible at `https://juwa777.com/sitemap.xml`

## 📞 Support

If you encounter issues:
1. Check nginx/webserver error logs
2. Verify file permissions (should be readable)
3. Check DNS settings for `juwa777.com`
4. Verify SSL certificate is installed correctly
5. Ensure sitemap.xml uses `juwa777.com` domain

---

**All files in this folder are ready for Alibaba Cloud deployment with domain `juwa777.com`!** 🚀
