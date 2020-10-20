/**
 * Utility for setting active header nav links
 *
 * This code has been re-purposed from the Drupal 7 codebase and is intended as a short-term fix
 *
 * Long term the expectation is that header nav logic will be overhauled to work
 * in a more React-centred way hooking directly into the menu APIs
 *
 * @param {object} window  DOM `window` object passed as an argument to prevent undefined errors
 */
const headerNav = (window: Window) => {
  if (!window) return;

  const path = window?.location?.pathname;
  const navLinks = document.querySelectorAll('.nav__link');

  const setActive = (link: Element) =>
    link && !link.classList.contains('active') && link.classList.add('active');

  /**
   * Adds `subnav-active` class to body element on pages where secondary nav is visible
   */
  const setSubNavActive = (link: Element) =>
    link &&
    link.parentNode.querySelectorAll('.nav-secondary')[0] &&
    document.body.classList.add('subnav-active');

  /**
   * Detect parent link from data-parent attribute for non-hierarchical child links
   * e.g. About us > jobs page url is simply `/jobs` and would not be detected otherwise
   *
   * @param {HTMLElement} link  Context element
   */
  const findActiveParent = (link: HTMLAnchorElement) => {
    const parentUrl = link.dataset.parent;

    if (!parentUrl) return;

    const level = parseInt(link.dataset.level, 10);
    const parentLink = document.querySelector(
      `.nav__link[href="${parentUrl}"][data-level="${level - 1}"`
    );

    setSubNavActive(parentLink);
    setActive(parentLink);
  };

  const findActive = (link: HTMLAnchorElement) => {
    if (path.indexOf(link.pathname) > -1) {
      setActive(link);
      setSubNavActive(link);

      findActiveParent(link);
    }
  };

  navLinks.forEach(findActive);
};

export default headerNav;
