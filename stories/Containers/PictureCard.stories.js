import React from 'react';
import { storiesOf } from '@storybook/react';
import { PictureCard, Paragraph, SmallText } from '../../src';
import { Dog, Poo } from 'styled-icons/fa-solid';

storiesOf('PictureCard', module)
    .add('with image', () => (
        <PictureCard
            image="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif"
            tags={[]}
            alt="coding Dog"
            width="400px"
            height="200px"
        />
    ))
    .add('with tags', () => (
        <PictureCard
            image="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif"
            tags={[{ icon: Dog, text: 'Dog' }, { icon: Poo }, { text: 'hmm?' }]}
            alt="coding Dog"
            width="400px"
            height="200px"
        />
    ));
