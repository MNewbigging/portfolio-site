import './card.scss';

import React from 'react';

interface CardProps {
  logo: JSX.Element;
  title: string;
  blurb: string;
  link: string;
  buttonText?: string;
}

export const Card: React.FC<CardProps> = ({ logo, title, blurb, link, buttonText }) => {
  const btnText = buttonText ?? 'play';

  return (
    <div className={'card'}>
      <div className={'upper'}>
        <div className={'logo'}>{logo}</div>
      </div>
      <div className={'lower'}>
        <div className={'title heading'}>{title}</div>
        <div className={'blurb'}>{blurb}</div>
        <div className={'play-button'}>
          <a href={link} target={'_blank'}>
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};
