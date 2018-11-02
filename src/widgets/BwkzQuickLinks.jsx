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
    console.log(props.data);
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
    const { api, isFullImage } = this.state;
    console.log(api[0].containerImage);

    return (
      <BwkzQuickLinks
        backgroundColor={api[0].containerColor}
        backgroundImage={api[0].containerImage}
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
                      <BwkzQuickLinksCardTitle headingColor={card.headingColor}>
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

BwkzQuickLinks.propTypes = {
  data: PropTypes.shape({
    quickLinks: PropTypes.shape({
      id: PropTypes.number.isRequired,
      heading: PropTypes.number,
      headingColor: PropTypes.string,
      backgroundColor: PropTypes.number,
      backgroundImage: PropTypes.string,
      buttonBackgroundColor: PropTypes.string,
      buttonText: PropTypes.string,
      buttonTextColor: PropTypes.string,
      containerColor: PropTypes.string,
      containerImage: PropTypes.string,
      description: PropTypes.string,
      descriptionColour: PropTypes.string
    })
  })
};

export default BwkzQuickLinksComponent;
