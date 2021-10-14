import { Link } from "react-router-dom";
export const TaskItem = ({isCheked, taskName, onTaskChange}) => {
    
    const styleOfTheComponent = {
        textDecoration: isCheked ? 'line-through' : '',
    };
    
    return (
      <li>
          <input onChange={onTaskChange} checked={isCheked} type="checkbox" />
          <Link to="/pruebaa"><span style={styleOfTheComponent}>{taskName}</span></Link>
        </li>
    );
}