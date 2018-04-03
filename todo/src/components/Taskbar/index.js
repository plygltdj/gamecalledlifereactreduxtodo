import React from 'react';

export default class TaskBar extends React.Component{
    render(){
        return(
          <div>
              <input type="text" ref="task" placeholder="Add a new task"/>
              <button >
                  Add Todo
              </button>
          </div>
        );
    }

}