
export const TaskItem = ({isCheked, taskName, onTaskChange}) => {
    
    const styleOfTheComponent = {
        textDecoration: isCheked ? 'line-through' : '',
    };
    
    return (
      <li>
        <input onChange={onTaskChange} checked={isCheked} type="checkbox" />
        <span style={styleOfTheComponent}>{taskName}</span>
      </li>
    );
}