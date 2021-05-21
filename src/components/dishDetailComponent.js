import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div class="row">
                    <div class="col-12 col-md-5 m-5">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-12 col-md-4 m-5 ">
                    <Card>
                            <CardTitle ><h3>Comments</h3></CardTitle>
                            <CardBody>
                                <CardText>{dish.comments.map((i)=>{
                                    return(
                                        <div>
                                            <p>{i.comment}</p>
                                            <p>-- {i.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(i.date)))}</p>
                                      </div>
                                    )
                                })}
                                </CardText>
                            </CardBody>
                    </Card>
                    </div>
                </div>


            )
        }
        else {
            return (
                <div></div>
            )
        }

    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
    }
}

export default DishDetails;