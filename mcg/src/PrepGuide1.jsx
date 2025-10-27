import React from 'react'
import './PrepGuide1.css'

const PrepGuide1 = () => {
  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // This would trigger conversion to PDF
    window.print() // Browser's print-to-PDF feature
  }

  return (
    <div className="prep-guide-container">
      <div className="no-print toolbar">
        <button onClick={() => window.history.back()} className="back-btn">
          ← Back to Flowchart
        </button>
        <div className="action-buttons">
          <button onClick={handlePrint} className="print-btn">
            🖨️ Print
          </button>
          <button onClick={handleDownloadPDF} className="download-btn">
            📥 Download PDF
          </button>
        </div>
      </div>

      <div className="document-content">
        {/* Header */}
        <header className="doc-header">
          <div className="enable-logo">
            <h1>enable</h1>
          </div>
          <div className="contact-info">
            <p>Enable.llc | Milford, Ma | service@enable.llc</p>
          </div>
        </header>

        {/* Title Section */}
        <section className="title-section">
          <h1 className="main-title">
            📞 Call Navigation Framework – Vision Planning Session #1
          </h1>
          <div className="client-info">
            <p><strong>Client:</strong> MGC Supplies</p>
            <p><strong>Prepared by:</strong> Enable Solutions</p>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Section 1: Call Objectives */}
        <section className="content-section">
          <h2 className="section-title">1. 🎯 Call Objectives</h2>
          <ul className="bullet-list">
            <li>Validate current manual processes (Odoo → Zoho transition).</li>
            <li>
              Prioritize <strong>short-term wins</strong> (invoicing, purchase orders, commissions,
              bookkeeping setup).
            </li>
            <li>
              Capture <strong>long-term roadmap goals</strong> (reps/customer portals, automation,
              payments).
            </li>
            <li>Confirm decision-making process for platform rollout.</li>
          </ul>
        </section>

        {/* Section 2: Structured Agenda */}
        <section className="content-section">
          <h2 className="section-title">2. 📅 Structured Agenda</h2>

          <div className="agenda-item">
            <h3 className="agenda-time">00:00 – 05:00 | Welcome & Context</h3>
            <ul className="bullet-list">
              <li>Reconfirm scope of engagement ($997 Vision Planning).</li>
              <li>
                Set expectations: "We'll define both <strong>quick wins</strong> and{' '}
                <strong>12-month roadmap</strong> today."
              </li>
            </ul>
          </div>

          <div className="agenda-item">
            <h3 className="agenda-time">05:00 – 20:00 | Current Workflow Review</h3>
            <ul className="bullet-list">
              <li>Walk through attached <strong>order</strong> and <strong>purchase order</strong> samples.</li>
              <li>Identify bottlenecks: 30 minutes/order, manual PO creation, Wave bookkeeping.</li>
              <li>Clarify role of sales reps and commission calculations.</li>
            </ul>
          </div>

          <div className="agenda-item">
            <h3 className="agenda-time">20:00 – 35:00 | Short-Term Priorities Deep Dive</h3>
            <ul className="bullet-list">
              <li>Quoting & Invoicing (replicating Odoo, PDF output).</li>
              <li>Purchase Orders (auto-create with vendor info).</li>
              <li>Commissions (multi-rep, % rates, monthly payouts, 1099 tracking).</li>
              <li>Bookkeeping (Wave vs Zoho Books transition).</li>
            </ul>
          </div>

          <div className="agenda-item">
            <h3 className="agenda-time">35:00 – 50:00 | Long-Term Vision Mapping</h3>
            <ul className="bullet-list">
              <li>Reps portal: self-service quoting & commission visibility.</li>
              <li>Customer portal: ordering, tracking, payment visibility.</li>
              <li>Integration priorities: PaymentCloud, DocuSign-style forms.</li>
              <li>Automation ideas: reducing 30-min order processing to &lt;10 mins.</li>
            </ul>
          </div>

          <div className="agenda-item">
            <h3 className="agenda-time">50:00 – 55:00 | Decision Checkpoints</h3>
            <ul className="bullet-list">
              <li>Which <strong>short-term priorities</strong> must be operational in next 90 days?</li>
              <li>Which <strong>roadmap features</strong> are "nice-to-have" vs "must-have"?</li>
              <li>Budget / resource alignment (Michael mentioned ~$10k available).</li>
            </ul>
          </div>

          <div className="agenda-item">
            <h3 className="agenda-time">55:00 – 60:00 | Wrap & Next Steps</h3>
            <ul className="bullet-list">
              <li>Confirm deliverables: Decision Pathway Guide + Roadmap draft.</li>
              <li>Assign action items (Enable: roadmap draft, Client: confirm PaymentCloud docs).</li>
              <li>Schedule next Vision Planning session.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Navigation Prompts */}
        <section className="content-section">
          <h2 className="section-title">3. 🧭 Navigation Prompts (For Facilitator)</h2>
          <ul className="prompt-list">
            <li>
              "If each order takes 30 minutes now, what does success look like with automation?"
            </li>
            <li>
              "Would you prefer sales reps to <strong>enter data</strong> in CRM or only{' '}
              <strong>see reports</strong>?"
            </li>
            <li>
              "How do you want customers to experience ordering and payments —{' '}
              <strong>self-service</strong> or <strong>managed</strong>?"
            </li>
            <li>
              "If commissions are miscalculated, what's the impact? Is this the{' '}
              <strong>#1 automation priority</strong>?"
            </li>
          </ul>
        </section>

        {/* Section 4: Call Outcomes */}
        <section className="content-section">
          <h2 className="section-title">4. ✅ Call Outcomes</h2>
          <p className="outcomes-intro">By end of session, we should have:</p>
          <ul className="bullet-list">
            <li>
              <strong>List of short-term deliverables:</strong> invoicing, POs, commissions,
              bookkeeping.
            </li>
            <li>
              <strong>Draft roadmap outline:</strong> portals, automation, PaymentCloud integration.
            </li>
            <li>
              <strong>Agreed success metrics:</strong> reduce order processing time, automate
              commissions, enable clean bookkeeping handoff.
            </li>
            <li>
              <strong>Confirmed ownership:</strong> Michael = decision maker, Enable = roadmap +
              setup guide.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="doc-footer">
          <p>Enable.llc | Milford, Ma | service@enable.llc</p>
        </footer>
      </div>
    </div>
  )
}

export default PrepGuide1
