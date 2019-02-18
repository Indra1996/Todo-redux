import React, { Component } from 'react'
import TaskList from './TaskList.jsx'
import AddTask from './AddTask.jsx'
import AddTaskAction  from '../../actions/index'
import helloSelector from '../../selectors/helloSelector';
import {connect} from 'react-redux';


class task extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
    addTask(task1){
      console.log(task1);
      debugger;
      this.props.updateTask(task1);  
    }
    deleteTask(id){
      console.log("here mama");
      console.log(id);
      debugger;
      this.props.deleteTask(id);
    }
  render() {
    let { tasks } = this.props
    return (
      <div className="task">
        <TaskList task={tasks} deleteTask={this.deleteTask}/>
        <AddTask addTask={this.addTask}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => (AddTaskAction(dispatch))
const mapStateToProps = ({tasks}) => {
  return {
    tasks: tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(task);