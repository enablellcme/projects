import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

const Flowchart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#005D8F',
        primaryTextColor: '#fff',
        primaryBorderColor: '#004d75',
        lineColor: '#333',
        secondaryColor: '#003D4F',
        tertiaryColor: '#09F781',
      },
      flowchart: {
        curve: 'basis',
        padding: 20,
      },
    })

    if (chartRef.current) {
      mermaid.contentLoaded()
    }
  }, [])

  const chartDefinition = `
    flowchart TD
      %% Call 1 - Foundation Setup (Blue #005D8F)
      Call1["📞 Call 1: Foundation Setup"]:::call1
      Prep1["📋 Prep Guide #1"]:::prep1
      Nav1["🧭 Navigation #1"]:::nav1
      Path1["🛤️ Pathway #1"]:::path1

      %% Call 2 - Options & Trade-offs (Dark Teal #003D4F)
      Call2["⚖️ Call 2: Options & Trade-offs"]:::call2
      Prep2["📋 Prep Guide #2"]:::prep2
      Nav2["🧭 Navigation #2"]:::nav2
      Path2["🛤️ Pathway #2"]:::path2

      %% Call 3 - Roadmap & Planning (Green #09F781)
      Call3["🗺️ Call 3: Roadmap & Planning"]:::call3
      Prep3["📋 Prep Guide #3"]:::prep3
      Nav3["🧭 Navigation #3"]:::nav3
      Path3["🛤️ Pathway #3"]:::path3

      %% Final Deliverable
      Final["🎯 Final Deliverable:<br/>Planning Vision + SOW"]:::final

      %% Connections
      Call1 --> Prep1
      Prep1 --> Nav1
      Nav1 --> Path1

      Path1 --> Call2
      Call2 -.-> Prep2
      Prep2 --> Nav2
      Nav2 --> Path2

      Path2 --> Call3
      Call3 -.-> Prep3
      Prep3 --> Nav3
      Nav3 --> Path3

      Call3 --> Final

      %% Call 1 Styles (Blue)
      classDef call1 fill:#005D8F,stroke:#004d75,stroke-width:3px,color:#fff
      classDef prep1 fill:#0077b3,stroke:#005D8F,stroke-width:2px,color:#fff
      classDef nav1 fill:#0088cc,stroke:#005D8F,stroke-width:2px,color:#fff
      classDef path1 fill:#0099e6,stroke:#005D8F,stroke-width:2px,color:#fff

      %% Call 2 Styles (Dark Teal)
      classDef call2 fill:#003D4F,stroke:#002833,stroke-width:3px,color:#fff
      classDef prep2 fill:#005266,stroke:#003D4F,stroke-width:2px,color:#fff
      classDef nav2 fill:#00667d,stroke:#003D4F,stroke-width:2px,color:#fff
      classDef path2 fill:#007a94,stroke:#003D4F,stroke-width:2px,color:#fff

      %% Call 3 Styles (Green)
      classDef call3 fill:#09F781,stroke:#07c564,stroke-width:3px,color:#003D4F
      classDef prep3 fill:#2df894,stroke:#09F781,stroke-width:2px,color:#003D4F
      classDef nav3 fill:#51f9a7,stroke:#09F781,stroke-width:2px,color:#003D4F
      classDef path3 fill:#75faba,stroke:#09F781,stroke-width:2px,color:#003D4F

      %% Final Deliverable Style
      classDef final fill:#EFF4F4,stroke:#005D8F,stroke-width:4px,color:#003D4F
  `

  return (
    <div className="mermaid" ref={chartRef}>
      {chartDefinition}
    </div>
  )
}

export default Flowchart
