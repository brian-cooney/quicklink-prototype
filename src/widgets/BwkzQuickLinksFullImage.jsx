import React, { Component } from 'react';

import BwkzButtonComponent from '../components/BwkzButton/BwkzButton';
import api from './bwkzQuickLinksData';

import {
  BwkzQuickLinksFullImage,
  UlFullImage,
  LiFullImage,
  BwkzQuickLinksCardFullImage,
  BwkzQuickLinksImageFullImage,
  BwkzQuickLinksCardContentFullImage,
  BwkzQuickLinksCardTitleFullImage,
  BwkzQuickLinksCardTextFullImage
} from './bwkzQuickLinksFullImage.styled';

class BwkzQuickLinksComponentFullImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: api.quickLinks,
      isFullBackgroundImage: true
    };
  }
  render() {
    const { ...styles } = this.props;
    const { api } = this.state;
    console.log(api);
    return (
      <BwkzQuickLinksFullImage
        backgroundColor={styles.backgroundColor}
        backgroundImage={styles.backgroundImage}
      >
        <UlFullImage>
          {api.map((card, i) => (
            <LiFullImage key={i}>
              <BwkzQuickLinksCardFullImage
                backgroundImage={card.backgroundImage}
              >
                <BwkzQuickLinksImageFullImage />
                <BwkzQuickLinksCardContentFullImage>
                  <BwkzQuickLinksCardTitleFullImage>
                    {card.heading}
                  </BwkzQuickLinksCardTitleFullImage>
                  <BwkzQuickLinksCardTextFullImage>
                    {card.description}
                  </BwkzQuickLinksCardTextFullImage>
                  <BwkzButtonComponent
                    borderColor="#eee"
                    borderRadius="1em"
                    backgroundColor="#F5F2F0"
                    color="#E04B69"
                    lineHeight="3"
                  >
                    {card.buttonText}
                  </BwkzButtonComponent>
                </BwkzQuickLinksCardContentFullImage>
              </BwkzQuickLinksCardFullImage>
            </LiFullImage>
          ))}
        </UlFullImage>
      </BwkzQuickLinksFullImage>
    );
  }
}

export default BwkzQuickLinksComponentFullImage;
