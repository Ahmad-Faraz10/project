import { useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import SendAmessage from "./TextUpdaterNode.js";
import Question from "./Question.js";
import Menu from "./menu.js";
import CreatenewReserv from "./CreatenewReserv.js";
import Booking from "./Booking.js";
import { TasksProvider } from "./TaskContext.js";

import "./text-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "question",
    targetPosition: "top",
    position: { x: 0, y: 200 },
    //  data: { label: 'node 2' },
  },
  {
    id: "node-3",
    type: "menu",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { label: "node 3" },
  },
  {
    id: "node-4",
    type: "createReserv",
    targetPosition: "top",
    position: { x: 0, y: 320 },
    data: { label: "node 3" },
  },
  {
    id: "node-5",
    type: "booking",
    targetPosition: "top",
    position: { x: 220, y: 350 },
    //  data: { label: 'node 2' },
  },
];

const initialEdges = [
  { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
  { id: "edge-2", source: "node-2", target: "node-3", sourceHandle: "a" },
  { id: "edge-3", source: "node-2", target: "node-4", sourceHandle: "b" },
  { id: "edge-4", source: "node-3", target: "node-5", sourceHandle: "b" },
];

const nodeTypes = {
  textUpdater: SendAmessage,
  question: Question,
  menu: Menu,
  createReserv: CreatenewReserv,
  booking: Booking,
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <TasksProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={rfStyle}
        />
      </div>
    </TasksProvider>
  );
}

export default Flow;
