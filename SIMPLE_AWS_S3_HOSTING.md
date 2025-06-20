# How to Host Your Portfolio on AWS S3

## Simple Steps to Deploy Your Portfolio

### Step 1: Build Your Portfolio
```bash
npm run build
```
This creates a `dist/client` folder with all your website files.

### Step 2: Create S3 Bucket
1. Go to AWS S3 Console
2. Click "Create bucket"
3. Name: `rajkumar-devops-portfolio` (must be unique globally)
4. Region: Choose closest to your audience (e.g., us-east-1)
5. Uncheck "Block all public access"
6. Click "Create bucket"

### Step 3: Enable Website Hosting
1. Click on your bucket name
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Enable "Static website hosting"
6. Index document: `index.html`
7. Error document: `index.html`
8. Click "Save changes"

### Step 4: Set Bucket Policy
1. Go to "Permissions" tab
2. Click "Bucket policy" → "Edit"
3. Paste this policy (replace `rajkumar-devops-portfolio` with your bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::rajkumar-devops-portfolio/*"
        }
    ]
}
```
4. Click "Save changes"

### Step 5: Upload Your Files
1. Go to "Objects" tab
2. Click "Upload"
3. Upload ALL files from `dist/client` folder
4. Also upload your `attached_assets` folder (profile picture, resume)
5. Click "Upload"

### Step 6: Get Your Website URL
Your portfolio will be live at:
```
http://rajkumar-devops-portfolio.s3-website-us-east-1.amazonaws.com
```
(Replace region if you chose different)

## Why Use AWS S3?

✅ **Cost-effective**: ~$1-3 per month for a portfolio  
✅ **Fast**: Global content delivery  
✅ **Reliable**: 99.9% uptime guarantee  
✅ **Professional**: Shows cloud skills to employers  
✅ **Scalable**: Handles traffic spikes automatically  

## Optional: Custom Domain
1. Buy domain from Route 53 or external provider
2. Create CloudFront distribution
3. Point domain to CloudFront
4. Get free SSL certificate

## Portfolio Features That Impress Employers
- ✅ Cloud hosting on AWS
- ✅ Modern 3D animations
- ✅ Professional design
- ✅ Detailed technical skills
- ✅ Real project showcases
- ✅ Contact form integration

Your portfolio demonstrates practical DevOps skills by using AWS infrastructure!