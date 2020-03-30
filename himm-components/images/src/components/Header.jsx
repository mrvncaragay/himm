import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const data = [
  {
    description: "Modern 2 Story Loft in Little Italy",
    rating: '4.9 (132)',
    type: 'Superhost',
    city: 'Little Italy, San Diego, California'
  },
  {
    description: "'Silo Studio' Cottage",
    rating: '4.98 (394)',
    type: 'Superhost',
    city: 'Tyringham, Massachusetts, United States'
  },
  {
    description: "A quiet yurt in Savoie - Bauges",
    rating: '4.67 (354)',
    type: 'Superhost',
    city: 'Bellecombe-en-Bauges, Rhone-Alpes, France'
  },
  {
    description: "Romantic 1 bed with stunning views",
    rating: '4.94 (128)',
    type: 'Superhost',
    city: 'Fornalutx, Illes Balears, Spain'
  },
  {
    description: "LUX 3 DBL BED SEMINYAK POOL VILLA + CINEMA",
    rating: '4.86 (199)',
    type: 'Superhost',
    city: 'Kuta, Bali, Indonesia'
  }
]

const Root = styled.div`
  padding: 0 80px;
  margin: 24px 151px;

  @media (max-width: 1440px) {
    margin: 24px 0;
  }
`;

const Description = styled.div`
  h2 {
    font-weight: 500;
    margin: 0;
    color: #222222;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;

  .icon {
    color: red;
    font-size: 20px;
    margin-right: 3px;
   }

  .city {
    text-decoration: underline;
    color: #222222;
  }

  .rating {
    color: #878787;
    font-size: 14px;
    margin-right: 3px;

   }

  .dot-space {
    margin: 0 5px;
    color: #878787;
  }

  .social {
    display: flex;
    align-items: center;

    .icon {
      color: #222222;
      font-size: 24px;
      margin-right: 10px;
    }
  }
`;

const Header = () => {
  const [ property, setProperty ] = useState(undefined);

  useEffect(() => {
    const rand = Math.floor(Math.random() * 5)
    setProperty(data[rand]);
  }, [])

 
  return (
    <Root>
       { property ? (
         <>
          <Description>
            <h2>{property.description}</h2>
          </Description>
          <Info>
            <div className="info">
              <span className="icon">&#9733;</span>
              <span className="rating">{property.rating}</span>     

              <span className="dot-space">&bull;</span>

              <span className="icon">&#9873;</span>
              <span className="rating">{property.type}</span>

              <span className="dot-space">&bull;</span>
              <span className="rating city">{property.city}</span>  
            </div>

            <div className="social">
              <span className="icon">&#9825;</span>
              <span className="city">Save</span>    
            </div>
          </Info>
        </>
      ) : "" }  
    </Root>
  )

};

export default Header;