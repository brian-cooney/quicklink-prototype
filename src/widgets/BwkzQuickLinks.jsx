import React, { Component } from 'react';

import BwkzButtonComponent from '../components/BwkzButton/BwkzButton';
import api from './bwkzQuickLinksData';

import {
  BwkzQuickLinks,
  Ul,
  Li,
  BwkzQuickLinksCard,
  BwkzQuickLinksImage,
  BwkzQuickLinksCardContent,
  BwkzQuickLinksCardTitle,
  BwkzQuickLinksCardText
} from './bwkzQuickLinks.styled';

class BwkzQuickLinksComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: api.quickLinks
    };
  }
  render() {
    const { ...styles } = this.props;
    const { api } = this.state;
    console.log(api);
    return (
      <BwkzQuickLinks
        backgroundColor={styles.backgroundColor}
        backgroundImage={styles.backgroundImage}
      >
        <Ul>
          {api.map((card, i) => (
            <Li key={i}>
              <BwkzQuickLinksCard>
                <BwkzQuickLinksImage backgroundImage={card.backgroundImage} />
                <BwkzQuickLinksCardContent>
                  <BwkzQuickLinksCardTitle>
                    {card.heading}
                  </BwkzQuickLinksCardTitle>
                  <BwkzQuickLinksCardText>
                    {card.description}
                  </BwkzQuickLinksCardText>
                  <BwkzButtonComponent
                    borderColor="#eee"
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

export default BwkzQuickLinksComponent;
