import React, { useState } from 'react'
import './ClaudeCodeGuide.css'

function ClaudeCodeGuide() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="claude-guide-container">
      <header className="guide-header">
        <h1>Daily Claude Code Setup & Launch Guide</h1>
        <p className="subtitle">Your daily workflow for efficient development</p>
      </header>

      <div className="guide-content">
        {/* Prerequisites */}
        <section className="guide-section">
          <h2 onClick={() => toggleSection('prerequisites')} className="section-header">
            <span className="icon">📋</span>
            Prerequisites
            <span className="toggle-icon">{expandedSection === 'prerequisites' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'prerequisites' && (
            <div className="section-content">
              <ul>
                <li>Claude Code installed on your system</li>
                <li>Node.js and npm installed</li>
                <li>Chrome browser for testing</li>
                <li>Command Prompt/Terminal access</li>
              </ul>
            </div>
          )}
        </section>

        {/* Initial Setup */}
        <section className="guide-section">
          <h2 onClick={() => toggleSection('setup')} className="section-header">
            <span className="icon">⚙️</span>
            Initial Setup (One-time or when updates are needed)
            <span className="toggle-icon">{expandedSection === 'setup' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'setup' && (
            <div className="section-content">
              <h3>1. Update Claude Code (when needed)</h3>
              <div className="code-block">
                <code># Check for Claude updates periodically<br/>
                # Install/update Claude when new versions are available</code>
              </div>

              <h3>2. Enable YOLO Mode (Optional but Recommended)</h3>
              <div className="code-block">
                <code>claude --dangerously-allow-all-permissions</code>
              </div>
              <div className="benefits-box">
                <strong>Benefits:</strong>
                <ul>
                  <li>Bypasses all permission prompts</li>
                  <li>Allows Claude to work autonomously without interruptions</li>
                  <li>No need to manually approve each action</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Daily Launch Process */}
        <section className="guide-section highlight">
          <h2 onClick={() => toggleSection('daily')} className="section-header">
            <span className="icon">🚀</span>
            Daily Launch Process
            <span className="toggle-icon">{expandedSection === 'daily' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'daily' && (
            <div className="section-content">
              <div className="step-container">
                <h3>Step 1: Navigate to Your Project Directory</h3>
                <ol>
                  <li><strong>Open Command Prompt/Terminal</strong></li>
                  <li><strong>Navigate to your project folder:</strong></li>
                </ol>

                <div className="method-box">
                  <h4>Method A: Using File Explorer</h4>
                  <ul>
                    <li>Navigate to your project folder in File Explorer</li>
                    <li>Right-click on the folder</li>
                    <li>Select "Copy as path"</li>
                    <li>In Command Prompt:</li>
                  </ul>
                  <div className="code-block">
                    <code>cd [paste path here]<br/>
                    # Remove the quotes around the path<br/>
                    # Remove the C:\ at the beginning if needed</code>
                  </div>
                </div>

                <div className="method-box">
                  <h4>Method B: Manual Navigation</h4>
                  <div className="code-block">
                    <code>cd Users\[your-username]\[project-folder]</code>
                  </div>
                </div>
              </div>

              <div className="step-container">
                <h3>Step 2: Start the Development Server</h3>
                <ol>
                  <li><strong>Run the development server:</strong></li>
                </ol>
                <div className="code-block">
                  <code>npm run dev</code>
                </div>
                <ol start="2">
                  <li><strong>Verify the server is running:</strong></li>
                </ol>
                <ul>
                  <li>Look for the port number (typically port 3000)</li>
                  <li>You should see output like: <code className="inline-code">Server running on http://localhost:3000</code></li>
                </ul>
                <ol start="3">
                  <li><strong>Minimize the terminal</strong> (keep it running in background)</li>
                </ol>
              </div>

              <div className="step-container">
                <h3>Step 3: Launch Claude Code</h3>
                <ol>
                  <li><strong>Open a new terminal/command prompt window</strong></li>
                  <li><strong>Navigate to the same project directory</strong></li>
                  <li><strong>Start Claude Code:</strong></li>
                </ol>
                <div className="code-block">
                  <code>claude</code>
                </div>
              </div>

              <div className="step-container">
                <h3>Step 4: Connect Claude Code to Your Local Server</h3>
                <p>When Claude Code starts developing:</p>
                <ol>
                  <li><strong>Claude will ask for the URL where you're working</strong></li>
                  <li><strong>Provide the localhost URL:</strong></li>
                </ol>
                <div className="code-block highlight-code">
                  <code>http://localhost:3000</code>
                </div>
                <ol start="3">
                  <li><strong>Copy this URL and paste it in Chrome to preview your work</strong></li>
                </ol>
              </div>
            </div>
          )}
        </section>

        {/* Project Structure */}
        <section className="guide-section">
          <h2 onClick={() => toggleSection('structure')} className="section-header">
            <span className="icon">📁</span>
            Project Structure Best Practices
            <span className="toggle-icon">{expandedSection === 'structure' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'structure' && (
            <div className="section-content">
              <h3>Directory Organization</h3>
              <div className="code-block">
                <code>
                  project-root/<br/>
                  ├── src/           # Source code<br/>
                  ├── public/        # Public assets<br/>
                  ├── node_modules/  # Dependencies (auto-generated)<br/>
                  ├── package.json   # Project configuration<br/>
                  └── README.md      # Project documentation
                </code>
              </div>

              <h3>Working with Claude Code</h3>
              <ol>
                <li><strong>Always ensure your dev server is running first</strong></li>
                <li><strong>Claude Code needs the localhost URL to preview changes</strong></li>
                <li><strong>Keep the terminal with npm run dev minimized but running</strong></li>
                <li><strong>Use Chrome for testing (recommended browser)</strong></li>
              </ol>
            </div>
          )}
        </section>

        {/* Troubleshooting */}
        <section className="guide-section">
          <h2 onClick={() => toggleSection('troubleshooting')} className="section-header">
            <span className="icon">🔧</span>
            Troubleshooting Common Issues
            <span className="toggle-icon">{expandedSection === 'troubleshooting' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'troubleshooting' && (
            <div className="section-content">
              <h3>Port Already in Use</h3>
              <p>If port 3000 is busy:</p>
              <div className="code-block">
                <code>
                  # Kill the process using port 3000<br/>
                  # Windows:<br/>
                  netstat -ano | findstr :3000<br/>
                  taskkill /PID [process-id] /F<br/><br/>
                  # Or use a different port:<br/>
                  npm run dev -- --port 3001
                </code>
              </div>

              <h3>Claude Code Not Responding to Changes</h3>
              <ol>
                <li>Ensure the dev server is still running</li>
                <li>Refresh the browser</li>
                <li>Restart Claude Code if needed</li>
              </ol>

              <h3>Permission Issues</h3>
              <ul>
                <li>Make sure you're running in YOLO mode for smoother operation</li>
                <li>Otherwise, watch for permission prompts and approve them</li>
              </ul>
            </div>
          )}
        </section>

        {/* Daily Workflow Summary */}
        <section className="guide-section summary">
          <h2 onClick={() => toggleSection('workflow')} className="section-header">
            <span className="icon">📊</span>
            Daily Workflow Summary
            <span className="toggle-icon">{expandedSection === 'workflow' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'workflow' && (
            <div className="section-content">
              <div className="workflow-item">
                <h3>1. Morning Setup (5 minutes):</h3>
                <ul>
                  <li>Open terminal → Navigate to project</li>
                  <li>Run <code className="inline-code">npm run dev</code> → Minimize</li>
                  <li>Open new terminal → Run <code className="inline-code">claude</code></li>
                  <li>Share localhost URL with Claude</li>
                </ul>
              </div>

              <div className="workflow-item">
                <h3>2. During Development:</h3>
                <ul>
                  <li>Keep dev server running</li>
                  <li>Chrome open for testing</li>
                  <li>Claude Code active for coding</li>
                </ul>
              </div>

              <div className="workflow-item">
                <h3>3. End of Day:</h3>
                <ul>
                  <li>Save all work</li>
                  <li>Commit changes to version control</li>
                  <li>Close Claude Code (Ctrl+C)</li>
                  <li>Stop dev server (Ctrl+C in that terminal)</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Quick Reference */}
        <section className="guide-section quick-ref">
          <h2 onClick={() => toggleSection('quickref')} className="section-header">
            <span className="icon">⚡</span>
            Quick Reference Commands
            <span className="toggle-icon">{expandedSection === 'quickref' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'quickref' && (
            <div className="section-content">
              <div className="code-block">
                <code>
                  # Navigate to directory<br/>
                  cd path/to/project<br/><br/>
                  # Start dev server<br/>
                  npm run dev<br/><br/>
                  # Start Claude Code<br/>
                  claude<br/><br/>
                  # YOLO mode (one-time setup)<br/>
                  claude --dangerously-allow-all-permissions<br/><br/>
                  # Stop any service<br/>
                  Ctrl + C
                </code>
              </div>
            </div>
          )}
        </section>

        {/* Notes */}
        <section className="guide-section notes">
          <h2 onClick={() => toggleSection('notes')} className="section-header">
            <span className="icon">📝</span>
            Notes from Training Session
            <span className="toggle-icon">{expandedSection === 'notes' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'notes' && (
            <div className="section-content">
              <ul>
                <li><strong>YOLO Mode:</strong> Highly recommended to avoid constant permission prompts</li>
                <li><strong>Port 3000:</strong> Default port, ensure it's available</li>
                <li><strong>Chrome:</strong> Preferred browser for development</li>
                <li><strong>Keep terminals organized:</strong> One for dev server, one for Claude Code</li>
              </ul>
            </div>
          )}
        </section>
      </div>

      <footer className="guide-footer">
        <p>Last Updated: October 2025</p>
        <p>Based on Stef_Dev Daily Launch Training</p>
      </footer>
    </div>
  )
}

export default ClaudeCodeGuide
