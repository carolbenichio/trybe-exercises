import React from 'react';

const Task = (value, i) => {
  return (
    <li key={i}>{value}</li>
  );
}

// class TaskList extends React.Component {
//   render(props) {
//     const { array } = props;
//     return (
//       <ul>
//         { array.map(Task) }
//       </ul>
//     )
//   }
// }

const TaskList = (props) => {
  console.log(props)
  const { array } = props;
  return (
    <ul>
      { array.map(Task) }
    </ul>
  );
}

export default TaskList;