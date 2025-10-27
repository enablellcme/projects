import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import FlowchartNew from './FlowchartNew'
import PrepGuide1 from './PrepGuide1'
import ChatBot from './ChatBot'
import ClaudeCodeGuide from './ClaudeCodeGuide'

function HomePage() {
  return (
    <>
      <div className="App">
        <h1>MCG Supplies</h1>
        <p className="tagline">Business Process & Daily Work Resources</p>

        <div className="resources-grid">
          <a href="/claude-code-guide" className="resource-card">
            <div className="card-icon">🚀</div>
            <h3>Daily Claude Code Setup</h3>
            <p>Your daily workflow for efficient development with Claude Code</p>
          </a>

          <a href="/prep-guide-1" className="resource-card">
            <div className="card-icon">📋</div>
            <h3>Prep Guide 1</h3>
            <p>Preparation guide and documentation</p>
          </a>

          <div className="resource-card coming-soon">
            <div className="card-icon">📊</div>
            <h3>Project Planning</h3>
            <p>Coming soon - Project planning workflows</p>
          </div>

          <div className="resource-card coming-soon">
            <div className="card-icon">📁</div>
            <h3>Documentation Hub</h3>
            <p>Coming soon - Centralized documentation</p>
          </div>
        </div>

        <div className="flowchart-container">
          <h2>Project Planning & Documentation Workflow</h2>
          <div className="mermaid-diagram">
            <FlowchartNew />
          </div>
        </div>
      </div>
      <ChatBot />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prep-guide-1" element={<><PrepGuide1 /><ChatBot /></>} />
        <Route path="/claude-code-guide" element={<ClaudeCodeGuide />} />
      </Routes>
    </Router>
  )
}

export default App
