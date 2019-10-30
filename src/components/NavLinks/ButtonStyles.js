import styled from 'styled-components';
import { rem } from 'polished';

const NavButton = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: ${rem(props.theme.fontSize.small)};
  height: ${rem(props.theme.spacingUnit * 8)};
  justify-content: flex-start;
  letter-spacing: ${rem(0.4)};
  min-height: ${rem(props.theme.spacingUnit * 8)};
  padding: 0 ${rem(props.theme.spacingUnit * 2)};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  ${props.theme.mediaQuery.min('small')`
    padding: 0 ${rem(props.theme.spacingUnit * 4)};
  `}
`;

export const BackButton = styled(NavButton)`
  color: ${props.theme.colours.darkBlue};
  width: 100%;

  .icon {
    display: flex;
    justify-content: flex-end;
    margin-right: ${rem(props.theme.spacingUnit / 2)};
    transform: rotate(180deg);
  }

  ${props.theme.mediaQuery.min('medium')`
    display: none;
  `}
`;

export const CloseButton = styled(NavButton)`
  color: ${props.theme.colours.textGrey};

  .icon {
    margin-right: ${rem(props.theme.spacingUnit * 1.5)};
  }
`;

export const SearchButton = styled(NavButton)`
  color: ${props.theme.colours.textGrey};
  transition: opacity ease 0.4s;

  &:hover {
    color: ${props.theme.colours.textGrey};
  }

  .icon {
    margin-left: ${rem(props.theme.spacingUnit * 1.5)};
  }

  ${props.theme.mediaQuery.min('medium')`
    color: ${props.theme.colours.white};
    margin-right: -${rem(props.theme.spacingUnit * 4)};

    &:hover {
      color: ${props.theme.colours.white};
    }
  `}

  &.is-disabled {
    opacity: 0;
  }

  &.keyboard-nav {
    color: ${props.theme.colours.white};
    height: auto;
    min-height: 0;
    margin-right: ${rem(props.theme.spacingUnit * 2)};
    max-width: 0;
    opacity: 0;
    padding-left: 0;
    padding-right: 0;
    pointer-events: none;
    transition: max-width ease 0.4s, opacity ease 0.4s;
    visibility: hidden;

    &:focus {
      max-width: 100px;
      opacity: 1;
      transition: max-width ease 0.4s, opacity ease 0.4s;
    }

    ${props.theme.mediaQuery.min('medium')`
      display: none;
    `}
  }
`;

export default BackButton;
