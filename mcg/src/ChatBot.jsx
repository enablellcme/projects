import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ChatBot.css'

const ChatBot = () => {
  console.log('ChatBot component loaded!')
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [currentContext, setCurrentContext] = useState('')

  // Detect current page context
  useEffect(() => {
    const path = location.pathname
    let context = 'Home - Project Flowchart'

    if (path.includes('prep-guide-1')) {
      context = 'Call 1: Foundation Setup - Prep Guide #1'
    } else if (path.includes('prep-guide-2')) {
      context = 'Call 2: Options & Trade-offs - Prep Guide #2'
    } else if (path.includes('prep-guide-3')) {
      context = 'Call 3: Roadmap & Planning - Prep Guide #3'
    } else if (path.includes('navigation')) {
      context = 'Navigation Guide'
    } else if (path.includes('pathway')) {
      context = 'Pathway Document'
    }

    setCurrentContext(context)
  }, [location])
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '👋 Welcome! I\'m your MCG Supply AI Assistant, here to make your project implementation seamless.\n\nI can help you:\n• Report issues or roadblocks\n• Request changes to your workflow\n• Document concerns in real-time\n• Get instant support\n\nJust tell me what\'s on your mind, and I\'ll capture everything for the Enable team.',
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: 'MGC Supplies',
    email: 'customer@mgcsupplies.com',
    phone: '',
  })
  const [showInfoForm, setShowInfoForm] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    // Add user message with context
    const userMessage = {
      type: 'user',
      text: inputText,
      timestamp: new Date(),
      context: currentContext,
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response (in production, this would call your AI API)
    setTimeout(() => {
      const responses = [
        'Got it! I\'ve documented that for the team. Can you tell me more about the impact this has on your workflow?',
        'Thanks for bringing this up! I\'m capturing all the details. What would be your ideal solution?',
        'I understand. This is really helpful information. Are there any other related concerns I should know about?',
        'Perfect, I\'ve recorded that. The Enable team will review this and get back to you with a solution.',
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const botResponse = {
        type: 'bot',
        text: randomResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 800)

    setInputText('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleInfoSubmit = (e) => {
    e.preventDefault()
    if (customerInfo.name && customerInfo.email) {
      setShowInfoForm(false)
      const welcomeMessage = {
        type: 'bot',
        text: `Thanks ${customerInfo.name}! I've recorded your contact information. Now, please tell me about any issues or changes you need.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, welcomeMessage])
    }
  }

  const exportChatHistory = () => {
    const chatData = {
      customerInfo,
      pageContext: currentContext,
      messages: messages.map((msg) => ({
        type: msg.type,
        text: msg.text,
        context: msg.context || currentContext,
        timestamp: msg.timestamp.toLocaleString(),
      })),
      exportedAt: new Date().toLocaleString(),
    }

    // Create downloadable JSON
    const dataStr = JSON.stringify(chatData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `mcg-chat-${customerInfo.name || 'session'}-${Date.now()}.json`
    link.click()
    URL.revokeObjectURL(url)

    // Also copy to clipboard as formatted text
    const formattedChat = `
MCG Supply AI Assistant - Chat Session
Customer: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Date: ${new Date().toLocaleString()}
Page Context: ${currentContext}

--- CONVERSATION ---
${messages
  .map(
    (msg) =>
      `[${msg.timestamp.toLocaleTimeString()}] ${msg.type === 'user' ? 'Customer' : 'Assistant'}${msg.context ? ` [${msg.context}]` : ''}: ${msg.text}`
  )
  .join('\n\n')}
`
    navigator.clipboard.writeText(formattedChat)
    alert('Chat history downloaded and copied to clipboard!')
  }

  const emailChatHistory = () => {
    const chatText = messages
      .map(
        (msg) =>
          `[${msg.timestamp.toLocaleTimeString()}] ${msg.type === 'user' ? 'Customer' : 'Assistant'}${msg.context ? ` [${msg.context}]` : ''}: ${msg.text}`
      )
      .join('\n\n')

    const subject = encodeURIComponent(`MCG Supply Issue Report - ${currentContext}`)
    const body = encodeURIComponent(`
Customer Information:
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Page Context: ${currentContext}

Chat History:
${chatText}
`)

    window.location.href = `mailto:mike@enable.llc?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chat-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#09F781',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 99999
        }}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div>
              <h3>MCG Supply AI Assistant</h3>
              <p className="context-indicator">📍 {currentContext}</p>
            </div>
            <div className="chat-actions">
              <button onClick={exportChatHistory} title="Download Chat" className="action-btn">
                📥
              </button>
              <button onClick={emailChatHistory} title="Email Chat" className="action-btn">
                📧
              </button>
            </div>
          </div>

          {/* Info Form (shown first time) */}
          {showInfoForm && (
            <div className="info-form-container">
              <form onSubmit={handleInfoSubmit} className="info-form">
                <h4>Before we start, please provide your contact info:</h4>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                />
                <button type="submit" className="submit-info-btn">
                  Start Chat
                </button>
              </form>
            </div>
          )}

          {/* Messages */}
          {!showInfoForm && (
            <>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    <div className="message-content">
                      <p>{msg.text}</p>
                      <span className="message-time">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="chat-input-container">
                <textarea
                  className="chat-input"
                  placeholder="Describe your issue or needed changes..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  rows="2"
                />
                <button onClick={handleSendMessage} className="send-button" disabled={!inputText.trim()}>
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ChatBot
