import './autosize';
import './bind_in_out';
import './markdown/render_gfm';
import initGFMInput from './markdown/gfm_auto_complete';
import initCopyAsGFM from './markdown/copy_as_gfm';
import initCopyToClipboard from './copy_to_clipboard';
import './details_behavior';
import installGlEmojiElement from './gl_emoji';
import './quick_submit';
import './requires_input';
import initPageShortcuts from './shortcuts';
import './toggler_behavior';
import './preview_markdown';
import initCollapseSidebarOnWindowResize from './collapse_sidebar_on_window_resize';
import initSelect2Dropdowns from './select2';

installGlEmojiElement();
initGFMInput();
initCopyAsGFM();
initCopyToClipboard();
initPageShortcuts();
initCollapseSidebarOnWindowResize();
initSelect2Dropdowns();
