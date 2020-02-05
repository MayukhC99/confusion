import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state= {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        })
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render(){
        const menu = this.props.dishes.map((item)=>{
            return(
                <div  className="col-12 col-md-2 m-1">
                    <Card key={item.id} onClick={()=>this.onDishSelect(item)}>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div className="col-12 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}


export default Menu;