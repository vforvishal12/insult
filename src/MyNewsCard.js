import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';

const MyNewsCard = ({articles}) => {


    return (
        <div>

            {articles.map((article, index) => (
                

			 <Card className="bg-dark text-white">
			  <Card.Img src="https://picsum.photos/200/300?grayscale" alt="Card image" />
			  <Card.ImgOverlay>
			    <Card.Title></Card.Title>
			    <Card.Text>
			    {article.insult}
			    </Card.Text>
			   
			  </Card.ImgOverlay>
			</Card>
				

            ))} 
             

        </div>
    )
};

export default MyNewsCard;




