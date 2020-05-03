import React from "react";
import { string, node, bool } from "prop-types";
import { FaEllipsisH } from "react-icons/fa";

import Text from "../Text";
import Icon from "../Icon";
import Tag from "../Tag";
import Button from "../Button"

import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledCardActions,
  InfoWrapperStyled,
  LargeIconWrapper
} from "./Card.styled";

const Card = ({ title, tagText, tagSecondary, icon, meta, largeIcon }) => (
  <StyledCard largeIcon>
    {largeIcon && (
      <LargeIconWrapper>
        <Icon icon={icon} />
      </LargeIconWrapper>)
    }
    <InfoWrapperStyled>
      <StyledCardHeader>
        {!largeIcon && <Icon icon={icon} />}
        <Text size="large">{title}</Text>
      </StyledCardHeader>
      <StyledCardBody>
        <Tag isSecondary={tagSecondary}>{tagText}</Tag>
        <Text isSecondary>{meta}</Text>
      </StyledCardBody>
    </InfoWrapperStyled>
    <StyledCardActions>
      <Button isIcon>
        <Icon icon={<FaEllipsisH />} />
      </Button>
    </StyledCardActions>
  </StyledCard>
);

Card.propTypes = {
  title: string.isRequired,
  tagText: string.isRequired,
  icon: node.isRequired,
  meta: string.isRequired,
  tagSecondary: bool,
  largeIcon: bool
};

Card.defaultProps = {
  tagSecondary: false,
  largeIcon: false,
};

export default Card;
