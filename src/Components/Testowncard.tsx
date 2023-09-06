import React from 'react'
import { Card } from '../types/index';

type Props = {
    own: Card;
};

const OwnCard: React.FC<Props> = ({own, user, id, comics}) => {
  return (
    <div key={own.id}>
        <div>{own.user.id}</div>
        <div>{own.user.email}</div>
        <div>{own.comics.title}</div>
        <img src={own.user.id.poster} alt={own.title}></img>
    </div>
  )
};

export default OwnCard;