import React from 'react';

interface CardProps {
  logo: JSX.Element;
  title: string;
  icons: JSX.Element[];
  blurb: string;
  link: string;
  buttonText?: string;
}

export const Card: React.FC<CardProps> = ({ logo, title, icons, blurb, link, buttonText }) => {
  const btnText = buttonText ?? 'play';

  const renderIcons = () => {
    return (
      <div className={'icons'}>
        {icons &&
          icons.map((icon, i) => (
            <div key={'icon-' + i} className={'icon'}>
              {icon}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className={'card'}>
      <div className={'upper'}>
        <div className={'logo'}>{logo}</div>
      </div>
      <div className={'lower'}>
        <div className={'title heading'}>{title}</div>
        <div className={'points'}>{renderIcons()}</div>
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
