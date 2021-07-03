import React, { Component } from 'react';
import { Row, Col, Label, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Loading } from './LoadingComponent';


import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {
    return (

        <div class="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}


function RenderComments({comments, addComment, dishId}) {


    return (

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
             
              <CommentForm dishId={dishId} addComment={addComment} />

            </CardBody>
        </Card>

    )
}


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false
        };
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <Button className="m-1" outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Comment</Button>


                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">

                                <Col sm={3}>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.text type="number" model=".rating"
                                        min="1" max="5" defaultValue="5" id="rating"
                                        name="rating" className="form-control" />

                                </Col>
                            </Row>
                            <Row className="form-group">

                                <Col>
                                    <Label htmlFor="author">Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{

                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col >
                                    <Label htmlFor="comment">Your Comment</Label>

                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="5"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10 }}>
                                    <Button type="submit" color="primary">
                                        Comment
                           </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </>
        )
    }
}


function DishDetail(props) {
    if (props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div> 
            </div>   
        );
    }else if(props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess} </h4>
                </div> 
            </div>   
        );

    }

    else if (props.dish != null) {

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

                    <div class="col-12 col-md-5 m-1 ">

                                    
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />
                       

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default DishDetail;