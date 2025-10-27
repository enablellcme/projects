# Enable Pre-Meeting Discovery Guide

A comprehensive discovery form for Enable Workspace consulting engagements.

## 🌐 Live URL

**Production:** https://enable-feedback.vercel.app

## 📦 Deployment Instructions

### Deploy to Your Existing Setup

1. **Push to GitHub:**
```bash
cd "C:\Users\ME Lau\OneDrive\Documents\Decsion Guide"

# Copy index.html to your git repo
copy index.html <path-to-your-feedback-repo>\index.html

# Navigate to your repo
cd <path-to-your-feedback-repo>

# Add and commit
git add index.html
git commit -m "Update discovery guide"
git push origin main
```

2. **Vercel will auto-deploy:**
   - Vercel watches your GitHub repo
   - Any push to `main` branch triggers automatic deployment
   - Check https://vercel.com/enablellcme/feedback for deployment status
   - Live in ~30 seconds at https://enable-feedback.vercel.app

### Alternative: Deploy via Vercel CLI

```bash
cd <path-to-your-feedback-repo>
vercel --prod
```

## ✨ Features

### 14 Project Type Categories
1. New Zoho Install
2. Zoho Enhancements / Optimizations
3. Managed Services
4. Inventory Management
5. E-Commerce
6. Application Integration
7. Zoho Books & Accounting
8. Credit Card Processing & Payments
9. Zoho Creator / Portals / App Dev
10. **Zoho Campaigns / Marketing Automation** (NEW)
11. Workflow & Process
12. AI Adoption
13. Digital Transformation Advisory
14. Other / Custom

### Dynamic Form Behavior
- ✅ Checkbox toggles show/hide relevant sections
- ✅ Counter updates with selected project types
- ✅ Recommends max 3 project types for focused discovery

### Data Export/Import
- ✅ **Download JSON** - Export full form data
- ✅ **Download Text** - Export as .txt file
- ✅ **Copy JSON** - Copy to clipboard
- ✅ **Import JSON** - Reload saved responses
- ✅ **Print/PDF** - Browser print functionality

### Service Tier Modal
- ✅ Explains 3 service levels (Essentials, Collaborative, Managed)
- ✅ Comparison table
- ✅ Client fit guidance

## 🎨 Branding

Uses Enable Workspace brand colors:
- Primary: `#005D8F`
- Accent: `#09F781`
- Dark: `#003D4F`
- Light Background: `#EFF4F4`

## 📱 Responsive Design

- Desktop optimized (1100px max width)
- Tablet friendly (auto-fit grids)
- Mobile responsive
- Print stylesheet included

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No build process needed
- **No dependencies** - Runs standalone
- **ES5 compatible** - Works in all browsers
- **File size:** ~100KB (single file)

## 📋 Form Data Structure

JSON export includes:
```json
{
  "meta": {
    "form": "Enable Pre-Meeting Discovery Guide",
    "version": "1.0.0",
    "generated_at": "2025-..."
  },
  "contact": { ... },
  "project_types": [ ... ],
  "project_details": { ... },
  "goals": { ... }
}
```

## 🚀 Quick Test Locally

Open `index.html` directly in browser - no server needed!

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

## 📞 Support

For issues or questions:
- GitHub: https://github.com/enablellcme/feedback
- Vercel Dashboard: https://vercel.com/enablellcme/feedback

---

**Version:** 1.0.0
**Last Updated:** January 2025
**Maintained by:** Enable Workspace
