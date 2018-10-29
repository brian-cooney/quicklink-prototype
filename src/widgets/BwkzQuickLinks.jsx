import React, { Component } from 'react';
import { Flex, Box, Card, Text, Image } from 'rebass';
import styled from 'styled-components';
import BwkzButtonComponent from '../components/BwkzButton/BwkzButton';

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
    this.state = {};
  }
  render() {
    const { ...styles } = this.props;

    return (
      <BwkzQuickLinks
        backgroundColor={styles.backgroundColor}
        backgroundImage={styles.backgroundImage}
      >
        <Ul>
          <Li>
            <BwkzQuickLinksCard>
              <BwkzQuickLinksImage />
              <BwkzQuickLinksCardContent>
                <BwkzQuickLinksCardTitle>Flex</BwkzQuickLinksCardTitle>
                <BwkzQuickLinksCardText>
                  This is the shorthand for flex-grow, flex-shrink and
                  flex-basis combined. The second and third parameters
                  (flex-shrink and flex-basis) are optional. Default is 0 1
                  auto.{' '}
                </BwkzQuickLinksCardText>
                <BwkzButtonComponent
                  borderColor="#eee"
                  borderRadius="1em"
                  backgroundColor="#F5F2F0"
                  color="#E04B69"
                >
                  View
                </BwkzButtonComponent>
              </BwkzQuickLinksCardContent>
            </BwkzQuickLinksCard>
          </Li>
          <Li>
            <BwkzQuickLinksCard>
              <BwkzQuickLinksImage />
              <BwkzQuickLinksCardContent>
                <BwkzQuickLinksCardTitle>Flex</BwkzQuickLinksCardTitle>
                <BwkzQuickLinksCardText>
                  This is the shorthand for flex-grow, flex-shrink and
                  flex-basis combined. The second and third parameters
                  (flex-shrink and flex-basis) are optional. Default is 0 1
                  auto.{' '}
                </BwkzQuickLinksCardText>
                <BwkzButtonComponent
                  borderColor="#eee"
                  borderRadius="1em"
                  backgroundColor="#F5F2F0"
                  color="#E04B69"
                >
                  View
                </BwkzButtonComponent>
              </BwkzQuickLinksCardContent>
            </BwkzQuickLinksCard>
          </Li>
          <Li>
            <BwkzQuickLinksCard>
              <BwkzQuickLinksImage />
              <BwkzQuickLinksCardContent>
                <BwkzQuickLinksCardTitle>Flex</BwkzQuickLinksCardTitle>
                <BwkzQuickLinksCardText>
                  This is the shorthand for flex-grow, flex-shrink and
                  flex-basis combined. The second and third parameters
                  (flex-shrink and flex-basis) are optional. Default is 0 1
                  auto.{' '}
                </BwkzQuickLinksCardText>
                <BwkzButtonComponent
                  borderColor="#eee"
                  borderRadius="1em"
                  backgroundColor="#F5F2F0"
                  color="#E04B69"
                >
                  View
                </BwkzButtonComponent>
              </BwkzQuickLinksCardContent>
            </BwkzQuickLinksCard>
          </Li>
          <Li>
            <BwkzQuickLinksCard>
              <BwkzQuickLinksImage />
              <BwkzQuickLinksCardContent>
                <BwkzQuickLinksCardTitle>Flex</BwkzQuickLinksCardTitle>
                <BwkzQuickLinksCardText>
                  This is the shorthand for flex-grow, flex-shrink and
                  flex-basis combined. The second and third parameters
                  (flex-shrink and flex-basis) are optional. Default is 0 1
                  auto.{' '}
                </BwkzQuickLinksCardText>
                <BwkzButtonComponent
                  borderColor="#eee"
                  borderRadius="1em"
                  backgroundColor="#F5F2F0"
                  color="#E04B69"
                >
                  View
                </BwkzButtonComponent>
              </BwkzQuickLinksCardContent>
            </BwkzQuickLinksCard>
          </Li>
        </Ul>
      </BwkzQuickLinks>
    );
  }
}

export default BwkzQuickLinksComponent;