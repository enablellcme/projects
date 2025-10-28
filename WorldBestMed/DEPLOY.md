# Deployment Guide - GitHub Pages

This guide will help you deploy the Enable Solutions Readiness Form to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Basic familiarity with command line

## Step 1: Initialize Git Repository

Open your terminal/command prompt and navigate to the WorldBestMed folder:

```bash
cd "C:\Users\ME Lau\OneDrive\Documents\Projects\WorldBestMed"
git init
```

## Step 2: Add Files to Git

```bash
git add index.html
git add enable_pre_consultation_readiness_form_zoho_implementation_medical_supply_multi_channel.html
git add README.md
git add .gitignore
git add DEPLOY.md
```

Note: The .gitignore file is configured to exclude PDF and JSON files to protect sensitive business information.

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Enable Solutions Zoho Implementation Readiness Form"
```

## Step 4: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Choose a repository name (e.g., "zoho-readiness-form" or "worldbestmed-form")
5. Set visibility to **Private** (recommended for client forms) or Public
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

## Step 5: Connect Local Repository to GitHub

GitHub will show you commands. Use these (replace with your actual repository URL):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment

## Step 7: Access Your Form

Your form will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Or with the full filename:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/enable_pre_consultation_readiness_form_zoho_implementation_medical_supply_multi_channel.html
```

## Alternative: Quick GitHub Desktop Method

If you prefer a GUI:

1. Download and install GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Select the WorldBestMed folder
4. Click "Publish repository" in GitHub Desktop
5. Choose repository name and visibility
6. Click "Publish Repository"
7. Then follow Step 6 above to enable GitHub Pages

## Custom Domain (Optional)

To use a custom domain like `form.worldbestmed.com`:

1. Add a file named `CNAME` with your domain:
   ```bash
   echo "form.worldbestmed.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. In your DNS provider, add a CNAME record:
   - Name: `form` (or your subdomain)
   - Value: `YOUR_USERNAME.github.io`

3. In GitHub repository settings → Pages → Custom domain, enter your domain

## Updating the Form

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Changes will appear on GitHub Pages within 1-2 minutes.

## Security Notes

- The .gitignore file prevents PDF and JSON files from being committed
- Consider using a private repository if the form contains sensitive business logic
- Data entered in the form is stored only in the user's browser localStorage
- No data is transmitted to servers

## Troubleshooting

**Form not loading?**
- Check that GitHub Pages is enabled
- Verify the main branch is selected as source
- Wait a few minutes after enabling Pages

**Changes not appearing?**
- Clear your browser cache
- Try incognito/private browsing mode
- Check that changes were pushed: `git status`

**404 Error?**
- Make sure the repository is public or you're logged into GitHub
- Verify the URL matches your username and repository name

## Support

For issues with:
- **Form functionality**: Review the README.md
- **GitHub Pages**: Visit https://docs.github.com/pages
- **Git commands**: Visit https://git-scm.com/doc

---

**Last Updated**: October 28, 2025
