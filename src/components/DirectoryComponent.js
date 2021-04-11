import React from 'react';

// REACTSTRAP COMPONENTS
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Directory = props => {
  const directory = props.campsites.map(campsite => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <Card onClick={() => props.onClick(campsite.id)}>
          <CardImg width="100%" src={campsite.image} alt={campsite.name} />
          <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return(
    <div className="container">
      <div className="row">
        {directory}
      </div>
    </div>
  )
}

export default Directory;