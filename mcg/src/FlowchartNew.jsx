import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'

const FlowchartNew = () => {
  const navigate = useNavigate()

  // Define nodes with exact positions - all aligned and centered
  const initialNodes = [
    // Call 1 - Foundation Setup
    {
      id: 'call1',
      type: 'default',
      data: { label: '📞 Call 1: Foundation Setup' },
      position: { x: 50, y: 50 },
      draggable: false,
      style: {
        background: '#005D8F',
        color: '#fff',
        border: '3px solid #004d75',
        borderRadius: '8px',
        padding: '15px',
        fontSize: '14px',
        fontWeight: 'bold',
        width: '220px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'prep1',
      data: {
        label: '📋 Prep Guide #1',
        pdfLink: '/prep-guide-1'
      },
      position: { x: 50, y: 150 },
      draggable: false,
      style: {
        background: '#0077b3',
        color: '#fff',
        border: '2px solid #005D8F',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'nav1',
      data: { label: '🧭 Navigation #1' },
      position: { x: 50, y: 250 },
      draggable: false,
      style: {
        background: '#0088cc',
        color: '#fff',
        border: '2px solid #005D8F',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'path1',
      data: { label: '🛤️ Pathway #1' },
      position: { x: 50, y: 350 },
      draggable: false,
      style: {
        background: '#0099e6',
        color: '#fff',
        border: '2px solid #005D8F',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },

    // Call 2 - Options & Trade-offs
    {
      id: 'call2',
      data: { label: '⚖️ Call 2: Options & Trade-offs' },
      position: { x: 320, y: 50 },
      draggable: false,
      style: {
        background: '#003D4F',
        color: '#fff',
        border: '3px solid #002833',
        borderRadius: '8px',
        padding: '15px',
        fontSize: '14px',
        fontWeight: 'bold',
        width: '220px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'prep2',
      data: { label: '📋 Prep Guide #2' },
      position: { x: 364, y: 150 },
      draggable: false,
      style: {
        background: '#005266',
        color: '#fff',
        border: '2px solid #003D4F',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'nav2',
      data: { label: '🧭 Navigation #2' },
      position: { x: 364, y: 250 },
      draggable: false,
      style: {
        background: '#00667d',
        color: '#fff',
        border: '2px solid #003D4F',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'path2',
      data: { label: '🛤️ Pathway #2' },
      position: { x: 364, y: 350 },
      draggable: false,
      style: {
        background: '#007a94',
        color: '#fff',
        border: '2px solid #003D4F',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },

    // Call 3 - Roadmap & Planning
    {
      id: 'call3',
      data: { label: '🗺️ Call 3: Roadmap & Planning' },
      position: { x: 590, y: 50 },
      draggable: false,
      style: {
        background: '#09F781',
        color: '#003D4F',
        border: '3px solid #07c564',
        borderRadius: '8px',
        padding: '15px',
        fontSize: '14px',
        fontWeight: 'bold',
        width: '220px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'prep3',
      data: { label: '📋 Prep Guide #3' },
      position: { x: 678, y: 150 },
      draggable: false,
      style: {
        background: '#2df894',
        color: '#003D4F',
        border: '2px solid #09F781',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'nav3',
      data: { label: '🧭 Navigation #3' },
      position: { x: 678, y: 250 },
      draggable: false,
      style: {
        background: '#51f9a7',
        color: '#003D4F',
        border: '2px solid #09F781',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
    {
      id: 'path3',
      data: { label: '🛤️ Pathway #3' },
      position: { x: 678, y: 350 },
      draggable: false,
      style: {
        background: '#75faba',
        color: '#003D4F',
        border: '2px solid #09F781',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        width: '264px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },

    // Final Deliverable
    {
      id: 'final',
      data: { label: '🎯 Final Deliverable:\nPlanning Vision + SOW' },
      position: { x: 992, y: 200 },
      draggable: false,
      style: {
        background: '#EFF4F4',
        color: '#003D4F',
        border: '4px solid #005D8F',
        borderRadius: '12px',
        padding: '15px',
        fontSize: '14px',
        fontWeight: 'bold',
        width: '220px',
        textAlign: 'center',
        cursor: 'pointer',
      },
    },
  ]

  // Define edges (connections)
  const initialEdges = [
    // Call 1 flow - all solid
    { id: 'e-call1-prep1', source: 'call1', target: 'prep1', animated: false, style: { stroke: '#005D8F', strokeWidth: 2 } },
    { id: 'e-prep1-nav1', source: 'prep1', target: 'nav1', animated: false, style: { stroke: '#005D8F', strokeWidth: 2 } },
    { id: 'e-nav1-path1', source: 'nav1', target: 'path1', animated: false, style: { stroke: '#005D8F', strokeWidth: 2 } },

    // Pathway 1 to Call 2
    { id: 'e-path1-call2', source: 'path1', target: 'call2', animated: false, style: { stroke: '#333', strokeWidth: 2 } },

    // Call 2 flow - dashed to prep, then solid
    { id: 'e-call2-prep2', source: 'call2', target: 'prep2', animated: false, style: { stroke: '#003D4F', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e-prep2-nav2', source: 'prep2', target: 'nav2', animated: false, style: { stroke: '#003D4F', strokeWidth: 2 } },
    { id: 'e-nav2-path2', source: 'nav2', target: 'path2', animated: false, style: { stroke: '#003D4F', strokeWidth: 2 } },

    // Pathway 2 to Call 3
    { id: 'e-path2-call3', source: 'path2', target: 'call3', animated: false, style: { stroke: '#333', strokeWidth: 2 } },

    // Call 3 flow - dashed to prep, then solid
    { id: 'e-call3-prep3', source: 'call3', target: 'prep3', animated: false, style: { stroke: '#09F781', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e-prep3-nav3', source: 'prep3', target: 'nav3', animated: false, style: { stroke: '#09F781', strokeWidth: 2 } },
    { id: 'e-nav3-path3', source: 'nav3', target: 'path3', animated: false, style: { stroke: '#09F781', strokeWidth: 2 } },

    // Pathway 3 to Final
    { id: 'e-path3-final', source: 'path3', target: 'final', animated: false, style: { stroke: '#005D8F', strokeWidth: 3 } },
  ]

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onNodeClick = (event, node) => {
    console.log('Node clicked:', node.id, node.data)

    // Handle navigation links
    if (node.data.pdfLink) {
      // Navigate to the React page
      navigate(node.data.pdfLink)
    }

    // You can add more navigation logic here for other nodes
  }

  return (
    <div style={{ width: '100%', height: '550px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        attributionPosition="bottom-right"
      >
        <Background variant="dots" gap={16} size={1} color="#e0e0e0" />
      </ReactFlow>
    </div>
  )
}

export default FlowchartNew
