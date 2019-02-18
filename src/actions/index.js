// let task_final = [...this.state.task , task1];
// export const addTaskAction = (task1) => {
//     type: 'ADD',
//     task1.id = Math.floor(Math.random() * 10) + 3;
//     task_final = [...this.state.task , task1];
//     task_final 
// }

const addTaskAction = dispatch => ({
        updateTask: (task) => {
          task.id = Math.floor(Math.random() * 10) + 3;
          dispatch({
            type: 'UPDATE_TASK',
            payload: { task },
          })
    },
        deleteTask: (task) => {
            debugger;
            dispatch({
                type: 'DELETE',
                payload: { task }
            })
        }
});

export default addTaskAction;