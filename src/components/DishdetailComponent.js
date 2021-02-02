import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';



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

    const RenderComment = ({comments}) => {
        if(comments) {
            const comment = comments.comments.map( (res) =>  {
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
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    function DishDetail(props) {
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    <RenderDish dish={props.selectedDish}/>
                    <RenderComment comments={props.selectedDish}/>
                </div>
            </div>
        )
    }


export default DishDetail;