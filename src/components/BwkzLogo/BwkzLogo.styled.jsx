import styled from 'styled-components';

export const BwkzLogoImage = styled.img`
    height: ${props => props.height};
    width: auto;
    display: inline-block;
`;

export const BwkzLogoLink = styled.a`
    height: auto;
    width: auto;
    display: inline-block;
    text-decoration: none;
    padding: ${props => props.padding};
    margin: ${props => props.margin};

    &:hover{
        text-decoration: none;
    }
`;