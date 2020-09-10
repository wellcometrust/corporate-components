import arrow from './components/Arrow';
import chevron from './components/Chevron';
import chevronDown from './components/ChevronDown';
import chevronRight from './components/ChevronRight';
import chevronUp from './components/ChevronUp';
import chevronThin from './components/ChevronThin';
import close from './components/Close';
import closeSmall from './components/CloseSmall';
import closeBold from './components/CloseBold';
import closeCircle from './components/CloseCircle';
import cookie from './components/Cookie';
import download from './components/Download';
import email from './components/Email';
import exclamationMark from './components/ExclamationMark';
import externalLink from './components/ExternalLink';
import facebook from './components/Facebook';
import info from './components/Info';
import linkedin from './components/Linkedin';
import message from './components/Message';
import phone from './components/Phone';
import plus from './components/Plus';
import search from './components/Search';
import shareLink from './components/ShareLink';
import tag from './components/Tag';
import twitter from './components/Twitter';
import youTube from './components/YouTube';

// Map is used here instead of an object to ensure there is no type mismatch thrown by TypeScript
export default new Map([
  ['arrow', arrow],
  ['chevron', chevron],
  ['chevronDown', chevronDown],
  ['chevronRight', chevronRight],
  ['chevronUp', chevronUp],
  ['chevronThin', chevronThin],
  ['close', close],
  ['closeSmall', closeSmall],
  ['closeBold', closeBold],
  ['closeCircle', closeCircle],
  ['cookie', cookie],
  ['download', download],
  ['email', email],
  ['externalLink', externalLink],
  ['exclamationMark', exclamationMark],
  ['facebook', facebook],
  ['info', info],
  ['linkedin', linkedin],
  ['message', message],
  ['phone', phone],
  ['plus', plus],
  ['search', search],
  ['shareLink', shareLink],
  ['tag', tag],
  ['twitter', twitter],
  ['youTube', youTube]
]);
