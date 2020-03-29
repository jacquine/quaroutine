import React from 'react';
import initialData from './initial-data';
import { render } from '@testing-library/react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column';

// import {
//   BrowserRouter as Router,
//   Redirect,
//   Switch,
//   Route,
// } from "react-router-dom";

class App extends React.Component {
  state = initialData;

  // synchronously update state!
  onDragEnd = result => {
    // TODO: reorder our columns

  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />
      })}
      </DragDropContext>
    );
  }
}

export default App;
