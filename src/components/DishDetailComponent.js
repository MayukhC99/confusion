import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }   

    render(){

        let details;
        let comments;
        let selectedDish= this.props.selectedDish;
        if( selectedDish!== null ){
           details=( 
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );

            let Com= selectedDish.comments.map((item)=>{

                let ar= new Date(item.date).toUTCString().split(' ');
                let ND= '-- ' + item.author+ ' , ' + ar[2] + ar[1] + ',' + ar[3];

                return(
                    <>
                    <ul key={item.id} className="list-unstyled">
                        <li> { item.comment } </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li> { ND } </li>
                    </ul>
                    </>
                );
            });

            comments=(
                <div>        
                    <h2>Comments</h2>
                    { Com }
                </div>
            );
        } else {
            details=(<div></div>);
            comments=(<div></div>);
        }

        return(
        <>
            <div className="col-12 col-md-5 m-1">
                {details}
            </div>
            <div className="col-12 col-md-5 m-1">
                {comments}
            </div>
        </>
        );


    }
}

export default DishDetail;