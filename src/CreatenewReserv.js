import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { useTasksDispatch } from "./TaskContext";

function CreatenewReserv({ data, isConnectable }) {
  const [title, setTitle] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <div className="res-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Create a new Item:</label>
        <input
          id="text"
          name="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="nodrag"
        />
        <p
          onClick={() => {
            setTitle("");

            dispatch({
              type: "added",
              _id: Math.random().toString(36).substr(2, 9),
              title: title,
            });
          }}
          style={{
            backgroundColor: "#987899", // Adjust background color as needed
            border: "1px solid black",
            padding: "5px",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "5px",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          Submit
        </p>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CreatenewReserv;
