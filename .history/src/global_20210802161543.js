import { createFromIconfontCN } from '@ant-design/icons';
import cookie from 'js-cookie';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

if (!window.IconFont) {
  window.IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_650262_2250uvy5xdd.js', // icon-javascript
    ],
  });
}

if (!window.cookie) {
  window.Cookies = cookie;
}
