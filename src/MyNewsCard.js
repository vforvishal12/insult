import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';

const MyNewsCard = ({articles}) => {


    return (
        <div>
        
        <Card className="bg-dark text-white">
			  <Card.Img src="https://picsum.photos/200/300?grayscale" alt="Card image" />
			  <Card.ImgOverlay>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			    <Card.Title class="card-title h1">
			    {articles}
			    </Card.Title>
			   
			  </Card.ImgOverlay>
			</Card>
        </div>
    )
};

export default MyNewsCard;




