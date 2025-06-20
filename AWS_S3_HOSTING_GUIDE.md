# AWS S3 Static Website Hosting Guide for Portfolio

This guide explains how to deploy your portfolio website to AWS S3 for static website hosting.

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js and npm installed locally
- Portfolio source code ready

## Step-by-Step Deployment Instructions

### 1. Build the Portfolio for Production

First, build the optimized production version of your portfolio:

```bash
# Install dependencies
npm install

# Build the client-side application
npm run build
```

This creates a `dist/client` directory with all static files ready for deployment.

### 2. Create and Configure S3 Bucket

#### Create S3 Bucket
```bash
# Replace 'your-portfolio-bucket-name' with your unique bucket name
aws s3 mb s3://rajkumar-devops-portfolio --region us-east-1
```

#### Enable Static Website Hosting
```bash
aws s3 website s3://rajkumar-devops-portfolio \
  --index-document index.html \
  --error-document index.html
```

#### Configure Bucket Policy for Public Access
Create a file called `bucket-policy.json`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::rajkumar-devops-portfolio/*"
        }
    ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy \
  --bucket rajkumar-devops-portfolio \
  --policy file://bucket-policy.json
```

### 3. Upload Portfolio Files

Upload the built files to S3:

```bash
# Upload all files from dist/client to S3
aws s3 sync dist/client/ s3://rajkumar-devops-portfolio --delete

# Upload attached assets (resume, profile picture)
aws s3 sync attached_assets/ s3://rajkumar-devops-portfolio/attached_assets/
```

### 4. Configure MIME Types and Caching

Set proper content types for CSS and JS files:

```bash
# Set CSS files content type
aws s3 cp dist/client/ s3://rajkumar-devops-portfolio/ \
  --recursive --exclude "*" --include "*.css" \
  --content-type "text/css" \
  --cache-control "max-age=31536000"

# Set JS files content type
aws s3 cp dist/client/ s3://rajkumar-devops-portfolio/ \
  --recursive --exclude "*" --include "*.js" \
  --content-type "application/javascript" \
  --cache-control "max-age=31536000"

# Set HTML files with no-cache for index
aws s3 cp dist/client/index.html s3://rajkumar-devops-portfolio/index.html \
  --content-type "text/html" \
  --cache-control "no-cache"
```

### 5. Get Website URL

Your portfolio will be available at:
```
http://rajkumar-devops-portfolio.s3-website-us-east-1.amazonaws.com
```

## Advanced Configuration (Optional)

### CloudFront CDN Setup

For better performance and HTTPS support:

1. **Create CloudFront Distribution**:
```bash
aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

2. **CloudFront Configuration** (`cloudfront-config.json`):
```json
{
    "CallerReference": "rajkumar-portfolio-$(date +%s)",
    "Comment": "Raj Kumar DevOps Portfolio CDN",
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-rajkumar-devops-portfolio",
        "ViewerProtocolPolicy": "redirect-to-https",
        "MinTTL": 0,
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        }
    },
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-rajkumar-devops-portfolio",
                "DomainName": "rajkumar-devops-portfolio.s3.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "Enabled": true,
    "DefaultRootObject": "index.html"
}
```

### Custom Domain Setup

1. **Register/Configure Domain** in Route 53
2. **Request SSL Certificate** via ACM
3. **Update CloudFront** to use custom domain
4. **Configure DNS** to point to CloudFront

## Deployment Automation Script

Create `deploy.sh` for easy deployments:

```bash
#!/bin/bash

# Build the application
echo "Building portfolio..."
npm run build

# Upload to S3
echo "Uploading to S3..."
aws s3 sync dist/client/ s3://rajkumar-devops-portfolio --delete
aws s3 sync attached_assets/ s3://rajkumar-devops-portfolio/attached_assets/

# Set proper content types
aws s3 cp dist/client/ s3://rajkumar-devops-portfolio/ \
  --recursive --exclude "*" --include "*.css" \
  --content-type "text/css" \
  --cache-control "max-age=31536000"

aws s3 cp dist/client/ s3://rajkumar-devops-portfolio/ \
  --recursive --exclude "*" --include "*.js" \
  --content-type "application/javascript" \
  --cache-control "max-age=31536000"

aws s3 cp dist/client/index.html s3://rajkumar-devops-portfolio/index.html \
  --content-type "text/html" \
  --cache-control "no-cache"

echo "Deployment complete!"
echo "Website available at: http://rajkumar-devops-portfolio.s3-website-us-east-1.amazonaws.com"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## Cost Optimization

- **S3 Standard**: ~$0.023 per GB/month
- **CloudFront**: First 1TB free per month
- **Route 53**: $0.50 per hosted zone/month
- **ACM SSL**: Free for AWS resources

## Security Best Practices

1. **Enable S3 bucket versioning**
2. **Configure CloudTrail logging**
3. **Use IAM roles with minimal permissions**
4. **Enable CloudFront security headers**
5. **Regular security audits**

## Monitoring and Analytics

1. **CloudWatch metrics** for S3 and CloudFront
2. **Google Analytics** integration in the portfolio
3. **AWS Cost Explorer** for cost monitoring

## Troubleshooting

- **403 Errors**: Check bucket policy and public access settings
- **404 Errors**: Verify error document is set to `index.html`
- **CORS Issues**: Configure CORS policy if needed
- **Cache Issues**: Use CloudFront invalidation for updates

Your portfolio showcases professional DevOps skills, and hosting it on AWS S3 demonstrates practical cloud infrastructure knowledge to potential employers.