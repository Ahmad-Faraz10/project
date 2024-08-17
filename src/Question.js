import { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";

function Question({ data, isConnectable }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = useCallback((evt) => {
    console.log(evt.target.value);
    setSelectedOption(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="radio-button-group">
        <label htmlFor="text">Q. what would you choose?</label>
        <label>
          <input
            type="radio"
            name="reservation"
            value="old"
            checked={selectedOption === "old"}
            onChange={handleChange}
          />
          have a look at the menu
        </label>
        <label>
          <input
            type="radio"
            name="reservation"
            value="new"
            checked={selectedOption === "new"}
            onChange={handleChange}
          />
          create a new reservation
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 30, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 5, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default Question;
