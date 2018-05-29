import React from 'react';
import uniqueId from '../../util/util';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    }

    this.createTodo = this.createTodo.bind(this);
  }

  createTodo (event) {
    const newState = merge({}, this.state, {id: uniqueId()});

    this.props.receiveTodo(newState);
  }

  updateField (fieldType) {
    return (event) => {
      this.setState({
        [fieldType]: event.currentTarget.value
      })
    }
  }

  render () {
    return (
      <div>
        Title:
        <input onChange={this.updateField("title")} value={this.state.title} />
        Body:
        <input onChange={this.updateField("body")} value={this.state.body} />
        <button onClick={this.createTodo} >Create Todo!</button>
      </div>
    )
  }
}

export default TodoForm;
