import React from 'react';
import { Card, CardBody } from '../Card';

interface IFeedCard {
  width?: string;
}
const FeedCard: React.FC<IFeedCard> = ({ width }) => (
  <Card width={width}>
    <CardBody>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vero eum nostrum odit! Quas voluptatum blanditiis quibusdam tempora ea, laborum atque aliquid ducimus rem, dolorum minima error ipsa mollitia sapiente.
    </CardBody>
  </Card>
);

export default FeedCard;
