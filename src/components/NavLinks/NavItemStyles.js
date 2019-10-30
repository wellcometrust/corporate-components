import styled from 'styled-components';
import classNames from 'classnames';
import { rem, rgba } from 'polished';

export const NavItem_S = styled.li.attrs(props => ({
  className: classNames({
    nav__item: process.env.ENV_TYPE === 'd7'
  })
}))`
  &.nav__item {
    margin: 0;
    padding: 0;
    position: static;

    &::before {
      content: none;
    }
  }

  .first {
    display: none;
  }

  ${props.theme.mediaQuery.max('medium')`
    border-bottom: 1px solid ${props.theme.colours.lightGrey};
    
    .nav-secondary &.first {
      display: block;
    }
  `}
`;

export const NavLink_S = styled.a`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  letter-spacing: ${rem(0.43)};
  line-height: 1.4;
  padding: ${rem(props.theme.spacingUnit * 2.25)} ${rem(props.theme.spacingUnit * 1.5)}
    ${rem(props.theme.spacingUnit * 2.25)} ${rem(props.theme.spacingUnit * 2)};
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: none;
  }

  &:active,
  &:focus,
  &:hover,
  &.active {
    color: ${props.theme.colours.darkBlue};
  }

  .nav__link-text {
    align-items: center;
    display: flex;
    height: 100%;
    padding-top: ${rem(props.theme.spacingUnit / 2)};
    padding-bottom: ${rem(props.theme.spacingUnit / 2)};
    position: relative;
  }

  .nav__link-text::before {
    background-color: ${props.theme.colours.darkBlue};
    bottom: 0;
    content: '';
    height: ${rem(props.theme.spacingUnit / 4)};
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  &.active .nav__link-text::before,
  &:hover .nav__link-text::before {
    transform: scaleX(1);
    width: 100%;
  }

  .nav-secondary & {
    ${props.theme.mediaQuery.min('medium')`
      align-items: stretch;
    `}
  }

  ${props.theme.mediaQuery.min('small')`
    padding-left: ${rem(props.theme.spacingUnit * 4)};
    padding-right: ${rem(props.theme.spacingUnit * 4)};
  `}

  ${props.theme.mediaQuery.min('medium')`
    color: ${props.theme.colours.white};
    padding: ${rem(2 * spacingUnit)};

    &:active,
    &:focus,
    &:hover,
    &.active {
      color: ${props.theme.colours.white};
    }

    .nav__link-text::before {
      background-color: ${props.theme.colours.white};
    }

    .icon {
      display: none;
    }

    &.active + .nav-secondary {
      display: block;
    }
  `}
`;

export const NavPane_S = styled.div`
  background: ${props.theme.colours.white};
  left: 0;
  position: absolute;
  z-index: 1;

  ${props.theme.mediaQuery.max('medium')`
    border-top: 1px solid ${props.theme.colours.lightGrey};
    bottom: 0;
    right: 0;
    top: ${rem(props.theme.spacingUnit * 8)};
    transform: translate3d(100%, 0, 0);
    transition:
      transform ease 0.4s,
      0s visibility ease 0.4s;
    visibility: hidden;
    z-index: 3;

    .is-active {
      top: 0;
      z-index: 4;
    }

    &.is-active {
      transform: translate3d(0, 0, 0);
      transition:
        transform ease 0.4s,
        visibility ease 0.4s;
      visibility: visible;
    }
  `}

  ${props.theme.mediaQuery.min('medium')`
    box-shadow: 
      0 ${rem(props.theme.spacingUnit / 2)} ${rem(props.theme.spacingUnit * 1.5)} 
      0 ${props.theme.colours.black && rgba(props.theme.colours.black, 0.1)};
    display: none;
    padding: 0 5%;
    top: 100%;
    width: 100%;

    .nav__link {
      color: ${props.theme.colours.darkBlue};
      font-size: ${rem(props.theme.fontSize.small)};
      min-height: ${rem(props.theme.spacingUnit * 4)};
      padding: 0 ${rem(props.theme.spacingUnit * 2)};
    }

    .nav__link:hover,
    .nav__link.active {
      color: ${props.theme.colours.darkBlue};
    }

    .nav__link-text::before {
      background-color: ${props.theme.colours.darkBlue};
    }

    ul {
      margin: 0 auto;
      max-width: ${rem(props.theme.maxWidth)};
      padding: 0 0 0 ${rem(props.theme.spacingUnit * 13.5)};
    }
  `}
`;

export default {
  NavItem_S,
  NavLink_S,
  NavPane_S
};
