import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


   function RenderDish({dish}) {
            return (
              
                    <div class="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>     
            )
    }

    function RenderComments({comments}) {
        return(
            <div class="col-12 col-md-5 m-1 ">
                <Card>
                    <CardTitle ><h3>Comments</h3></CardTitle>
                    <CardBody>
                        <CardText>{comments.map((i) => {
                            return (
                                <div>
                                    <p>{i.comment}</p>
                                    <p>-- {i.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(i.date)))}</p>
                                </div>
                            )
                        })}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    function DishDetail(props){
        if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>                
                </div>
                <div class="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
        }else{
            return(
                <div></div>
                )
        }
    }
    
export default DishDetail;