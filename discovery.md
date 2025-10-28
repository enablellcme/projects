# Discovery - Client Project Documentation

## Project: Advisory Decision Guide

**Date Created:** October 28, 2025
**Status:** ✅ Live and Deployed
**Last Updated:** October 28, 2025

---

## Project Overview

- **Type:** Advisory Decision Guide
- **Category:** Discovery & Consultation Tools
- **Purpose:** Interactive decision guide for client consultations and project scoping
- **Deployment:** Vercel (b2biz.dev)

---

## Live URLs

### Primary URL
```
https://b2biz.dev/discovery/
```

### Direct Access
```
https://b2biz.dev/discovery/index.html
```

### Alternate Version
```
https://b2biz.dev/discovery/advisory-decision-guide-zoho-optimized-v2.html
```

### Legacy URLs (Deprecated)
```
https://enablellcme.github.io/projects/Office/DecisionGuide/
https://b2biz.dev/Office/DecisionGuide/
```

---

## Repository Structure

```
discovery/
├── index.html                                      (main landing page)
├── advisory-decision-guide-zoho-optimized-v2.html (alternate version)
└── README.md                                       (project notes)
```

**GitHub Repository:**
```
https://github.com/enablellcme/projects/tree/main/discovery
```

**Vercel Project Dashboard:**
```
https://vercel.com/mikes-projects-4da77940
```

---

## File Descriptions

### index.html
- **Purpose:** Main advisory decision guide interface
- **Type:** Interactive HTML form
- **Features:**
  - Decision tree navigation
  - Client information capture
  - Project scope determination
  - Export/import functionality
  - Enable Solutions branding

### advisory-decision-guide-zoho-optimized-v2.html
- **Purpose:** Zoho-optimized version
- **Type:** Interactive HTML form
- **Features:**
  - Enhanced compatibility with Zoho WorkDrive
  - IIFE-wrapped for scope isolation
  - Adjusted z-index for Zoho UI
  - Same functionality as main version

---

## Project History

### October 28, 2025 - Major Reorganization
**Changes:**
1. ✅ Renamed folder from `Office/DecisionGuide` to `discovery`
2. ✅ Moved to root level of repository
3. ✅ Updated all URLs and documentation
4. ✅ Deployed to Vercel with clean URL structure

**Rationale:**
- Simplified URL structure (b2biz.dev/discovery/ vs b2biz.dev/Office/DecisionGuide/)
- Better organization at root level
- More descriptive folder name ("discovery" vs "Office")
- Consistent with other client project folders

### Previous Structure
```
Office/
└── DecisionGuide/
    ├── index.html
    ├── advisory-decision-guide-zoho-optimized-v2.html
    └── README.md
```

---

## Use Cases

### Primary Use Case: Client Discovery
- **Who:** Enable Solutions team
- **When:** Initial client consultations
- **How:** Share URL with client to gather project requirements
- **Output:** Structured decision data for scoping and quoting

### Secondary Use Case: Internal Planning
- **Who:** Enable Solutions team
- **When:** Project planning and scoping sessions
- **How:** Use as a framework for discussing project options
- **Output:** Clear project parameters and requirements

---

## Features

### Interactive Decision Trees
- Multiple choice questions
- Conditional logic based on responses
- Progress tracking
- Back/forward navigation

### Data Management
- Export responses as JSON
- Import previously saved responses
- Print/PDF export
- Email integration (future)

### Client Information Capture
- Company details
- Contact information
- Project parameters
- Budget constraints
- Timeline requirements

### Branding
- Enable Solutions color scheme
- Professional layout
- Mobile responsive design
- Print-friendly formatting

---

## Deployment Details

### Platform: Vercel
- **Auto-Deploy:** Enabled (deploys on push to main branch)
- **Build Time:** ~1-2 minutes
- **Domain:** b2biz.dev
- **DNS:** Cloudflare

### Deployment Process
1. Update files in local repository
2. Commit changes with descriptive message
3. Push to GitHub main branch
4. Vercel automatically detects push
5. Builds and deploys (1-2 minutes)
6. Changes live at b2biz.dev/discovery/

### Testing Checklist
- [ ] Form loads without errors
- [ ] All decision branches work
- [ ] Export/import functions correctly
- [ ] Mobile responsive layout works
- [ ] Print/PDF export works
- [ ] Branding displays correctly

---

## Version Management

### Current Version: Main (index.html)
- **Last Updated:** October 28, 2025
- **Features:** Full decision guide functionality
- **Status:** Production

### Alternate Version: Zoho-Optimized (v2)
- **Last Updated:** [To be tracked]
- **Features:** Zoho WorkDrive compatibility
- **Status:** Available for specific use cases

---

## Related Files

### Source Files
**Location:** `C:\Users\ME Lau\OneDrive\Documents\Discovery\`

Files:
1. index.html
2. advisory-decision-guide-zoho-optimized-v2.html
3. README.md

### Documentation Files
- **This File:** discovery.md
- **Main Documentation:** projects.md

---

## Client Workflow

### How Clients Use the Discovery Tool

1. **Receive URL** from Enable Solutions
   ```
   https://b2biz.dev/discovery/
   ```

2. **Open in Browser**
   - Works on desktop, tablet, or mobile
   - No login required
   - No installation needed

3. **Answer Questions**
   - Navigate through decision tree
   - Select options that match requirements
   - Provide additional details as needed

4. **Review Selections**
   - See summary of choices
   - Make adjustments if needed
   - Add notes or comments

5. **Export Results**
   - Download JSON file, OR
   - Print to PDF, OR
   - Email directly (future feature)

6. **Send to Enable Solutions**
   - Email JSON file
   - Or share PDF
   - Enable imports and reviews

### Enable Workflow

1. **Share URL** with client
2. **Receive** completed decision guide (JSON/PDF)
3. **Import** JSON to review selections
4. **Analyze** requirements and decisions
5. **Prepare** project scope and quote
6. **Schedule** follow-up discussion
7. **Refine** scope based on discussion
8. **Generate** formal proposal

---

## Technical Specifications

### Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Framework:** Vanilla JS (no external dependencies)
- **Deployment:** Static HTML hosting
- **Version Control:** Git/GitHub

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### File Size
- index.html: ~60 KB
- advisory-decision-guide-zoho-optimized-v2.html: ~64 KB
- Total: ~124 KB (very lightweight)

### Performance
- Load time: < 1 second
- Interactive immediately
- No external API calls
- No database required
- Works offline after initial load

---

## Maintenance & Updates

### Regular Updates Needed
- [ ] Review questions quarterly for relevance
- [ ] Update branding if company identity changes
- [ ] Add new decision paths as services expand
- [ ] Update pricing information if referenced
- [ ] Test on new browser versions

### Version Control
- All changes tracked in Git
- Commit messages should describe what changed
- Tag major versions (v1.0, v2.0, etc.)
- Keep changelog in README.md

---

## Future Enhancements

### Planned Features
- [ ] Email integration (submit directly via email)
- [ ] Analytics tracking (view completion rates)
- [ ] Multi-language support
- [ ] Custom branding per client
- [ ] API integration with CRM
- [ ] Automated follow-up emails
- [ ] Template library for different industries
- [ ] Video tutorial integration

### Technical Improvements
- [ ] Add form validation
- [ ] Implement auto-save (localStorage)
- [ ] Add keyboard navigation
- [ ] Improve accessibility (ARIA labels)
- [ ] Add unit tests
- [ ] Optimize for slower connections
- [ ] Add progress indicators
- [ ] Implement conditional logic editor

---

## Troubleshooting

### Common Issues

**Issue: Form not loading**
- Check URL is correct (b2biz.dev/discovery/)
- Clear browser cache
- Try different browser
- Check internet connection

**Issue: Export not working**
- Ensure browser allows downloads
- Try "Save as PDF" instead
- Check popup blockers
- Use different browser

**Issue: Mobile layout broken**
- Clear browser cache
- Update browser to latest version
- Try landscape orientation
- Report issue with device details

**Issue: Print layout incorrect**
- Use "Print to PDF" browser feature
- Check print preview before printing
- Adjust print settings (margins, scale)
- Try different browser

---

## Support & Contact

### For Technical Issues
- Check this documentation first
- Review README.md in project folder
- Test in different browser
- Check Vercel deployment logs

### For Content Updates
- Update source files in repository
- Commit and push to GitHub
- Wait for Vercel auto-deploy
- Test changes on live site

### For Questions
- Refer to projects.md for infrastructure details
- Check Vercel dashboard for deployment status
- Review git history for recent changes

---

## Best Practices

### When Sharing with Clients
1. ✅ Always use the clean URL: `b2biz.dev/discovery/`
2. ✅ Include brief instructions in email
3. ✅ Set expectation for response time
4. ✅ Offer to schedule a call to walk through it
5. ✅ Provide alternative contact method if issues arise

### When Making Updates
1. ✅ Test changes locally first
2. ✅ Commit with descriptive messages
3. ✅ Push during business hours
4. ✅ Verify deployment completed successfully
5. ✅ Test live site after deployment
6. ✅ Update documentation if needed

### When Creating New Versions
1. ✅ Duplicate existing file as backup
2. ✅ Use semantic versioning (v1.0, v1.1, v2.0)
3. ✅ Document changes in commit message
4. ✅ Update README.md with version notes
5. ✅ Keep old versions for reference

---

## Analytics & Metrics (Future)

### Metrics to Track
- [ ] Number of forms completed
- [ ] Average completion time
- [ ] Drop-off points in decision tree
- [ ] Most common selection paths
- [ ] Device/browser statistics
- [ ] Geographic distribution

### Goals
- [ ] 90%+ completion rate
- [ ] < 10 minutes average completion time
- [ ] Works on 100% of modern browsers
- [ ] Mobile completion rate > 40%

---

## Security & Privacy

### Data Handling
- No data stored on server
- All data stays in browser until exported
- Exported files contain only what user entered
- No tracking cookies
- No third-party analytics (currently)

### Best Practices
- Don't include sensitive information in forms
- Use secure connection (HTTPS)
- Encrypt sensitive exports if needed
- Delete exported files after use
- Share URLs via secure channels

---

## Related Projects

### Similar Tools
- Merchant Support Pre-Quote Form
- WorldBestMed Implementation Readiness Form
- A1Security Pre-Quote Clarification Guide

### Shared Components
- Enable Solutions branding
- Export/Import functionality
- JSON data structure
- Mobile responsive design

---

## Change Log

### Version History

**October 28, 2025 - v2.0 (Current)**
- Renamed from Office/DecisionGuide to discovery
- Moved to root level of repository
- Updated all URLs and documentation
- Deployed to b2biz.dev/discovery/
- Created comprehensive documentation

**[Previous versions to be documented]**

---

## Quick Reference

### Important URLs
- **Live Site:** https://b2biz.dev/discovery/
- **Repository:** https://github.com/enablellcme/projects/tree/main/discovery
- **Vercel Dashboard:** https://vercel.com/mikes-projects-4da77940

### Important Files
- **Main:** discovery/index.html
- **Alternate:** discovery/advisory-decision-guide-zoho-optimized-v2.html
- **Docs:** discovery.md, projects.md

### Quick Commands
```bash
# Update and deploy
git add discovery/
git commit -m "Update discovery form"
git push origin main

# Check deployment status
# Visit: https://vercel.com/mikes-projects-4da77940/deployments
```

---

**End of Discovery Project Documentation**

*For infrastructure details, see projects.md*
*For git repository information, see README.md*
*Last updated: October 28, 2025 EOD*
