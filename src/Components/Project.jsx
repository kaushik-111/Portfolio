import React from 'react';
import './Project.css'; // Importing CSS file

export default function Project() {
  const cardData = [
    {
      imgSrc: '4.png',
      buttonText1: 'https://kaushik-111.github.io/Admin_Panel/',
      buttonText2: 'https://github.com/kaushik-111/Admin_Panel',
    },
    {
      imgSrc: '1.png',
      buttonText1: 'https://kaushik-111.github.io/HTML-CSS-1/',
      buttonText2: 'https://github.com/kaushik-111/HTML-CSS-1',
    },
    {
      imgSrc: '2.png',
      buttonText1: 'https://kaushik-111.github.io/HTML/',
      buttonText2: 'https://github.com/kaushik-111/HTML',
    },
    {
      imgSrc: '3.png',
      buttonText1: 'https://kaushik-111.github.io/HTML-CSS//',
      buttonText2: 'https://github.com/kaushik-111/HTML-CSS',
    }
  ];

  return (
    <> 
    <center><h1>Project</h1> <br /></center>
    <div className='container'>     

      {cardData.map((card, index) => (
        <div className='box' key={index}>
          <div className='card-content'>
            <img
              src={card.imgSrc}
              alt={`Card Image ${index + 1}`}
              className='card-image'
            />
            <div className='buttons'>
              <a
                href={card.buttonText1}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn'>Live Project</button>
              </a>
              <a
                href={card.buttonText2}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn'>GitHub Project</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
