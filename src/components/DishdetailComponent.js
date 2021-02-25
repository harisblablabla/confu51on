import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardText, CardTitle, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Loading } from './LoadingComponent';

    // ====validation====== //

    const minLength = (len) => (val) => val && (val.length >= len);
    const maxLength = (len) => (val) => !val || (val.length <= len);

    // ====validation====== //

class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toogleModal = this.toogleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toogleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        console.log(values)
        alert('current value : ' + JSON.stringify(values))
        this.props.addComment(this.props.dishId,values.rating,values.author, values.comment)
    }
    
    render() {
        return(
            <div>
                <Button outline onClick={this.toogleModal} className="secondary"><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toogleModal}>
                    <ModalHeader toggle={this.toogleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{minLength: minLength(3), maxLength: maxLength(15)}}/>
                                <Errors
                                    className="text-danger" model=".author" show="touched" messages={{
                                        minLength: "Must be greater than 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" className="form-control" rows="6" />
                            </FormGroup>
                            <Button type="submit" color="primary" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

    const RenderComment = ({comments, dishId, addComment}) => {
        console.log(addComment,dishId)
        if(comments) {
            const comment = comments.map( (res) =>  {
                const date = new Date(res.date)
                const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
                const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date)
                return (
                    <ul key={res.id} className='list-unstyled'>
                        <li>{res.comment}</li>
                        <br/>
                        <li>--{res.author} , {`${month} ${day}, ${year}`}</li>
                    </ul>
                )
            })

            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    {comment}
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    const RenderDish = ({dish}) => {
        if(dish) {
            return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                   <CardImg top src={dish.image} alt={dish.name}/>
                   <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                   </CardBody>
                </Card>
             </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function DishDetail(props) {
        console.log(props)
        if(props.isLoading){
            return (
                <div className='container'>
                    <div className='row'>
                        <Loading/>
                    </div>
                </div>
            )
        }
        else if(props.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if(props.dish) {
            return(
                <div className='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div> 
                    </div>
                    <div className='row justify-content-center'>
                        <RenderDish dish={props.dish}/>
                        <RenderComment comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
                    </div>
                </div>
            )
        }
    }


export default DishDetail;