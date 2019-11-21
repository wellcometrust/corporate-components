import arrowRight from './components/ArrowRight';
import circleCross from './components/CircleCross';
import close from './components/Close';
import download from './components/Download';
import emailAddress from './components/EmailAddress';
import externalLink from './components/ExternalLink';
import facebook from './components/Facebook';
import fax from './components/Fax';
import linkedin from './components/Linkedin';
import message from './components/Message';
import phone from './components/Phone';
import search from './components/Search';
import shareLink from './components/ShareLink';
import tag from './components/Tag';
import twitter from './components/Twitter';
import youTube from './components/YouTube';

// Map is used here instead of an object to ensure there is no type mismatch thrown by TypeScript
export default new Map([
  ['arrowRight', arrowRight],
  ['circleCross', circleCross],
  ['close', close],
  ['download', download],
  ['emailAddress', emailAddress],
  ['externalLink', externalLink],
  ['facebook', facebook],
  ['fax', fax],
  ['linkedin', linkedin],
  ['message', message],
  ['phone', phone],
  ['search', search],
  ['shareLink', shareLink],
  ['tag', tag],
  ['twitter', twitter],
  ['youTube', youTube]
]);
