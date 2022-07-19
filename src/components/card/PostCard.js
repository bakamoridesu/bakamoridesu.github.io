import * as React from 'react';
import {
  cardWrapper,
  cardTitle,
  cardDescription,
  noDecoration,
  cardHovered,
  cardFooter,
  readMore,
  datePublished
} from './card.module.css';
import {Link} from "gatsby";
import {useState} from "react";
import cn from 'classnames';

export const PostCard = ({slug, title, description, date}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={slug}
          className={noDecoration}
    >
      <div
        className={cardWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className={cn(cardTitle, hovered ? cardHovered : '')}>
          {title}
        </h3>
        <div className={cardDescription}>
          {description}
        </div>
        <div className={cardFooter}>
          <div className={readMore}>
            Читать дальше <span className={hovered ? cardHovered : ''}>&rarr;</span>
          </div>
          <div className={datePublished}>
            {date}
          </div>
        </div>
      </div>
    </Link>
  )
}
