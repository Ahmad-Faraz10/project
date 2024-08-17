
import { Handle, Position } from "@xyflow/react";
import { useTasks } from "./TaskContext";

function Menu({ data, isConnectable }) {
  const tasks = useTasks();

  return (
    <div className="menu-updater-node">
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Menu List:</label>
        <label>
          Menu Item are given below
          <div className="task-container">
            {tasks.map((task) => (
              <p key={task._id} className="task-item">
                {task.title}
              </p>
            ))}
          </div>
        </label>
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

export default Menu;
