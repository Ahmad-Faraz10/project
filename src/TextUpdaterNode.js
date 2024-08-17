import { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";



function SendAmessage({ data, isConnectable }) {
  const [text, setText] = useState("");
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
    setText(evt.target.value);
  }, []);
  const submit = () => {
    alert(`Submitted text: ${text}`);
    // Perform any additional submit actions here (e.g., API call, form reset)
  };

  return (
    <div className="res-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Send A message:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
        <p
          onClick={submit}
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
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default SendAmessage;
