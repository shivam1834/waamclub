import React from 'react'
import AppleStore from '../assests/appstoreedit.png';
import GooglePlayedit from '../assests/googlePlayedit.png';
import src from '../assests/store.png'
import styled from 'styled-components';

const LandingPage = () => {
    return (
        <Wrap>
            <div className="container">
                <div className="left-column">
                    <img src={src} alt="YourImage" className="responsive-image" />
                </div>
                <div className="right-column">
                    <h1 className="responsive-heading">Welcome to our landing page</h1>
                    <p className='sub-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1</p>
                    <div className='button-group'>
                        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={AppleStore} alt="YourImage" className="responsive-image" /></button>
                        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={GooglePlayedit} alt="YourImage" className="responsive-image" /></button>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}

export default LandingPage;

const Wrap = styled.div`

.container {
    display: flex;
    flex-wrap: wrap;
    background: rgb(255, 159, 74);
    background: linear-gradient(90deg, rgba(255, 159, 74, 1) 0%, rgba(255, 60, 131, 1) 35%, rgba(0, 212, 255, 1) 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .left-column,
  .right-column {
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
    margin: 0 1rem;
  }
  
  .sub-heading {
    line-height: 1.2;
  }
  
  .button-group {
    display: flex;
    justify-content: space-around;
  }

  .responsive-image {
    max-width: 100%;
    height: auto;
  }
  
  .responsive-heading {
    font-size: 6rem;
    text-align: center;
    margin: 20px 0;
  }

  .sub-heading {
    line-height: 1.2;
    margin: 1rem 0;
    text-align: center;
  }

  @media (max-width: 768px) {

    .left-column,
    .right-column {
      flex: 1;
      width: 100%;
    }
  
    .responsive-heading {
      font-size: 24px;
    }
    .content {
      width: fit-content;
      margin: 0;
    }
  }
`;