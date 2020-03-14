import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getTodos, deleteTodo, addTodo } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  onDeleteClick = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const { todos } = this.props.todo;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {todos.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, { getTodos, deleteTodo })(ShoppingList);
