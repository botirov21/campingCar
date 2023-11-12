import React from 'react';
import { card } from '../mock/carsData';
import { ReviewsWrapper } from './itemReviewsStyle';
import img from '../assets/reviewsImage.png'
import Fotter from '../footer/fotter';
import { MenuItem, TextField } from '@mui/material';
const names = [
    'Best',
    'Medium',
    'Low',
  ];
const ItemReviews = () => {
    const carDetail = card.carList;
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    return (
        <>
        <ReviewsWrapper>
            <div className='reviewsFilter'>
                <div style={{display: 'flex', gap: '20px'}} className='premium' >Premium Review <p className='premiumP'>35</p></div>
                <div>
                <TextField
                    size="small"
                    label="Select"
                    sx={{ width: 200 }}
                    select
                    value={personName}
                    onChange={handleChange}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
            </div>
            {carDetail.slice(0, 6).map((value, key) => (
                <div key={key}>
                    <div >
                        <div className='reviewsCart'>
                            <div> <img src={img} alt="" /></div>
                            <div className='ReviewsData'>
                                <div className='carName' >{value.car.name}</div>
                                <div className='carBrand' >{value.car.company}</div>
                                <div><p className='DataText'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p></div>
                            </div>
                            <div  className='ReviewsDataRight'>
                                <div style={{display : 'flex'}}> <p>ID:</p>{value.id}</div>
                                <div style={{display : 'flex'}}> <p>Data:</p>{value.car.date}</div>
                                <div style={{display : 'flex'}}> <p>Views: 135</p></div>
                            </div> 
                        </div>
                    </div>
                </div>
            ))}
        </ReviewsWrapper>
        <Fotter/>
        </>
    );
};

export default ItemReviews;
