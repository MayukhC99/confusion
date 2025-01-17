import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

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


    render(){
        const menu = this.props.dishes.map((item)=>{
            return(
                <div  className="col-12 col-md-5 m-1">
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
                    <DishDetail selectedDish={this.state.selectedDish}/>
                </div>
            </div>
        );
    }
}


export default Menu;