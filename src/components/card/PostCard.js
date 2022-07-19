import * as React from 'react';
import {
  cardWrapper,
  cardTitle,
  cardDescription,
  noDecoration,
  cardFooter,
  readMore,
  datePublished,
  rightArrow
} from './card.module.css';
import {Link} from "gatsby";

export const PostCard = ({slug, title, description, date}) => {
  return (
    <Link to={slug}
          className={noDecoration}
    >
      <div
        className={cardWrapper}
      >
        <h3 className={cardTitle}>
          {title}
        </h3>
        <div className={cardDescription}>
          {description}
        </div>
        <div className={cardFooter}>
          <div className={readMore}>
            Читать дальше <span className={rightArrow}>&rarr;</span>
          </div>
          <div className={datePublished}>
            {date}
          </div>
        </div>
      </div>
    </Link>
  )
}
