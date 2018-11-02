import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BwkzButtonComponent from '../components/BwkzButton/BwkzButton';

import {
  BwkzQuickLinks,
  Ul,
  Li,
  BwkzQuickLinksCard,
  BwkzQuickLinksCardFullImage,
  BwkzQuickLinksFullImage,
  BwkzQuickLinksImage,
  BwkzQuickLinksCardContent,
  BwkzQuickLinksCardTitle,
  BwkzQuickLinksCardText
} from './bwkzQuickLinks.styled';

class BwkzQuickLinksComponent extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      api: props.data.quickLinks,
      isFullImage: true
    };
  }
  toggleFullImage = () =>
    this.setState({
      isFullImage: !this.state.isFullImage
    });

  render() {
    const { ...styles } = this.props;
    const { api, isFullImage } = this.state;
    console.log(this.toggleFullImage);

    return (
      <BwkzQuickLinks
        backgroundColor={styles.backgroundColor}
        backgroundImage={styles.backgroundImage}
      >
        <button type="button" onClick={this.toggleFullImage}>
          Toggle type of card
        </button>
        <Ul>
          {isFullImage
            ? api.map((card, i) => (
                <Li key={i}>
                  <BwkzQuickLinksCardFullImage
                    backgroundImage={card.backgroundImage}
                  >
                    <BwkzQuickLinksFullImage />
                    <BwkzQuickLinksCardContent>
                      <BwkzQuickLinksCardTitle>
                        {card.heading}
                      </BwkzQuickLinksCardTitle>
                      <BwkzQuickLinksCardText>
                        {card.description}
                      </BwkzQuickLinksCardText>
                      <BwkzButtonComponent
                        borderColor={card.borderColor}
                        borderRadius="1em"
                        backgroundColor="#F5F2F0"
                        color="#E04B69"
                        lineHeight="3"
                      >
                        {card.buttonText}
                      </BwkzButtonComponent>
                    </BwkzQuickLinksCardContent>
                  </BwkzQuickLinksCardFullImage>
                </Li>
              ))
            : api.map((card, i) => (
                <Li key={i}>
                  <BwkzQuickLinksCard>
                    <BwkzQuickLinksImage
                      backgroundImage={card.backgroundImage}
                    />
                    <BwkzQuickLinksCardContent>
                      <BwkzQuickLinksCardTitle>
                        {card.heading}
                      </BwkzQuickLinksCardTitle>
                      <BwkzQuickLinksCardText>
                        {card.description}
                      </BwkzQuickLinksCardText>
                      <BwkzButtonComponent
                        borderColor="#fff"
                        borderRadius="1em"
                        backgroundColor="#F5F2F0"
                        color="#E04B69"
                        lineHeight="3"
                      >
                        {card.buttonText}
                      </BwkzButtonComponent>
                    </BwkzQuickLinksCardContent>
                  </BwkzQuickLinksCard>
                </Li>
              ))}
        </Ul>
      </BwkzQuickLinks>
    );
  }
}

BwkzQuickLinks.propTypes = {};

export default BwkzQuickLinksComponent;
