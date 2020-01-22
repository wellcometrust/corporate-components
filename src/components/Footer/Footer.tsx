import React from 'react';
// import cx from 'classnames';

// import Newsletter from 'Newsletter/Newsletter';
// import FooterSocial from './FooterSocial';
// import FooterNav from './FooterNav';
import FooterLinks from './FooterLinks/FooterLinks';

type FooterLinksItemProps = {
  links?: [];
};

export const Footer = ({ links }: FooterLinksItemProps) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__mission-statement">
          Wellcome exists to improve health by helping great ideas to thrive
        </h3>
        {/*
        <nav id="footer-nav" className="footer-nav">
            <ul className="footer-nav__list footer-nav__list--grid">
                <li className="has-children footer-nav__item"><a href="/funding" title="" className="footer-nav__link">Funding</a>
                    <ul className="footer-nav__list footer-nav-submenu">
                        <li className="footer-nav__item"><a href="/funding/schemes" title="" className="footer-nav__link">Find a scheme</a></li>
                        <li className="footer-nav__item"><a href="/funding/guidance" title="" className="footer-nav__link">Guidance</a></li>
                        <li className="footer-nav__item"><a href="/funding/research-careers" title="" className="footer-nav__link">Develop your research career</a></li>
                        <li className="footer-nav__item"><a href="/funding/people-and-projects" title="" className="footer-nav__link">Funded people and projects</a></li>
                    </ul>
                </li>
                <li className="has-children footer-nav__item"><a href="/key-issues" title="" className="footer-nav__link">Key issues</a>
                    <ul className="footer-nav__list footer-nav-submenu">
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/research-culture" title="" className="footer-nav__link">Research culture</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/drug-resistant-infections" title="" className="footer-nav__link">Drug-resistant infections</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/vaccines" title="" className="footer-nav__link">Vaccines</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/mental-health-transforming-research-and-treatments" title="" className="footer-nav__link">Mental health</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/our-planet-our-health" title="" className="footer-nav__link">Our Planet, Our Health</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/snakebites" title="" className="footer-nav__link">Snakebites</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/data-science-and-health-innovation-benefits-everyone" title="" className="footer-nav__link">Data for science and health</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work" title="" className="footer-nav__link">All our work</a></li>
                    </ul>
                </li>
                <li className="has-children footer-nav__item"><a href="/how-we-work" title="" className="footer-nav__link">How we work</a>
                    <ul className="footer-nav__list footer-nav-submenu">
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/understanding-health-and-disease" title="" className="footer-nav__link">Understanding health and disease</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/how-we-influence-and-inform-policy" title="" className="footer-nav__link">Influencing policy</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/public-engagement" title="" className="footer-nav__link">Engaging the public</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/improving-science-education" title="" className="footer-nav__link">Science education</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/reports" title="" className="footer-nav__link">Reports</a></li>
                        <li className="footer-nav__item"><a href="/reports/wellcome-global-monitor/2018" title="" className="footer-nav__link">Wellcome Global Monitor</a></li>
                        <li className="footer-nav__item"><a href="/what-we-do/our-work/wellcome-photography-prize/2020" title="" className="footer-nav__link">Wellcome Photography Prize</a></li>
                        <li className="footer-nav__item"><a href="/all-our-websites" title="" className="footer-nav__link">All our websites</a></li>
                    </ul>
                </li>
                <li className="has-children footer-nav__item"><a href="/about-us" title="" className="footer-nav__link">About us</a>
                    <ul className="footer-nav__list footer-nav-submenu">
                        <li className="footer-nav__item"><a href="/jobs" title="" className="footer-nav__link">Jobs</a></li>
                        <li className="footer-nav__item"><a href="/about-us/history-wellcome" title="" className="footer-nav__link">History</a></li>
                        <li className="footer-nav__item"><a href="/about-us/investments" title="" className="footer-nav__link">Investments</a></li>
                        <li className="footer-nav__item"><a href="/about-us/governance" title="" className="footer-nav__link">Governance</a></li>
                        <li className="footer-nav__item"><a href="/about-us/teams" title="" className="footer-nav__link">Teams</a></li>
                        <li className="footer-nav__item"><a href="/about-us/contact-us" title="" className="footer-nav__link">Contact us</a></li>
                    </ul>
                </li>
                <li className="has-children footer-nav__item"><a href="/news" title="" className="footer-nav__link">News</a>
                    <ul className="footer-nav__list footer-nav-submenu">
                        <li className="footer-nav__item"><a href="/news/all" title="" className="footer-nav__link">All news and views</a></li>
                        <li className="footer-nav__item"><a href="/news/media-office" title="" className="footer-nav__link">Media office</a></li>
                    </ul>
                </li>
                <li className="footer-nav__item">
                    { @todo get Newsletter component }
                </li>
            </ul>
        </nav> */}

        {/* @todo get FooterSocial component */}

        {/* @todo get FooterNav component */}
        <FooterLinks links={links} />
      </div>
    </footer>
  );
};

export default Footer;
