import { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";


function Booking({ data, isConnectable }) {
  const [selectedbooking, setSelectedbooking] = useState("");
  const handleChange = useCallback((evt) => {
    console.log(evt.target.value);
    setSelectedbooking(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="radio-button-group">
        <label htmlFor="text">
          Q.Would you want to make a reservation now?
        </label>
        <label>
          <input
            type="radio"
            name="reservation"
            value="y"
            checked={selectedbooking === "y"}
            onChange={handleChange}
          />
          yes
        </label>
        <label>
          <input
            type="radio"
            name="reservation"
            value="n"
            checked={selectedbooking === "n"}
            onChange={handleChange}
          />
          no
        </label>
      </div>
    </div>
  );
}

export default Booking;
