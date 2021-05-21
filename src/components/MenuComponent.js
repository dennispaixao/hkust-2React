import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);

       
        console.log("Construcutor");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }

  

    renderDish(dish) {
        if (dish != null)
            return(
                <div className="row">
                <div class="col-12 col-md-6 mt-4">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-12 col-md-6 mt-4">
                    <Card>
                            <CardTitle ><h3>Comments</h3></CardTitle>
                            <CardBody>
                                <CardText>{dish.comments.map((i)=>{
                                    return(
                                        <div>
                                            <p>{i.comment}</p>
                                            <p>-- {i.author} , {Date(i.date)}</p>
                                      </div>
                                    )
                                })}
                                </CardText>
                            </CardBody>
                    </Card>
                    </div>
                    </div>
            );
        else
            return(
                <div></div>
            );
    }

    render(){
        console.log("RENDER METHOD")
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key ={dish.id} className="col-12 col-md-3 mt-4">
                    <Card  onClick={() => this.props.onClick(dish.id) }>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay  >
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>

                
              
              
            </div>

        );

    }
}

export default Menu;