import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderDish = dish => {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };
  renderComments = comments => {
    return (
      <React.Fragment>
        <h4>Comments</h4>
        <ul className="list-unstyled text-left">
          {comments.map(comment => (
            <li>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author}, {comment.date.substring(0, 10)}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  };

  render() {
    let { dish } = this.props;
    return (
      <div className="row">
        {dish && (
          <React.Fragment>
            <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>

            <div className="col-12 col-md-5 m-1">
              {dish.comments.length > 0 && this.renderComments(dish.comments)}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DishDetails;