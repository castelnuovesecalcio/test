/* @ds-bundle: {"format":4,"namespace":"SmashTagDesignSystem_921f7f","components":[{"name":"MenuItemRow","sourcePath":"components/commerce/MenuItemRow.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"PromoBanner","sourcePath":"components/commerce/PromoBanner.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Display","sourcePath":"components/core/Display.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Starburst","sourcePath":"components/core/Starburst.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/MenuItemRow.jsx":"202fb8bb7c72","components/commerce/ProductCard.jsx":"e7c47dd88ca3","components/commerce/PromoBanner.jsx":"cb27721fbb8e","components/core/Badge.jsx":"31ed758d7693","components/core/Button.jsx":"be398b5e4b25","components/core/Card.jsx":"ec0ad532ac0c","components/core/Display.jsx":"73c417709150","components/core/IconButton.jsx":"327901a81850","components/core/Logo.jsx":"0eab06c7ee63","components/core/Starburst.jsx":"3a8eff450c48","components/core/Tag.jsx":"6dc366ad3b71","components/feedback/Dialog.jsx":"030b30129201","components/feedback/Toast.jsx":"c3f8a8f37de4","components/feedback/Tooltip.jsx":"96f2e44981ff","components/forms/Checkbox.jsx":"1fef66391be4","components/forms/Input.jsx":"634bd05b2d68","components/forms/QuantityStepper.jsx":"86ead9c66ae8","components/forms/Radio.jsx":"d3c0bd4ec255","components/forms/Select.jsx":"668709d6108a","components/forms/Switch.jsx":"52ce5af691aa","components/navigation/NavBar.jsx":"4c248dc9ae44","components/navigation/Tabs.jsx":"3f0cd993b1da","ui_kits/app/Screens.jsx":"5dae932cdf38","ui_kits/web/App.jsx":"3f6cb905c015","ui_kits/web/Chrome.jsx":"6d2841706145","ui_kits/web/Home.jsx":"954d2c4aef01","ui_kits/web/Locali.jsx":"0cf1cf74c2b3","ui_kits/web/Menu.jsx":"d15c58e4c81c","ui_kits/web/Product.jsx":"ae74a87dab06","ui_kits/web/data.js":"851bf64e02ea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SmashTagDesignSystem_921f7f = window.SmashTagDesignSystem_921f7f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  value,
  label,
  shape = 'circle',
  tone = 'yellow',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['st-badge', 'st-badge--' + shape, tone === 'inverse' ? 'st-badge--inverse' : '', size === 'sm' ? 'st-badge--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "st-badge__value"
  }, value), label ? /*#__PURE__*/React.createElement("span", {
    className: "st-badge__label"
  }, label) : null));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: 'st-btn--primary',
  inverse: 'st-btn--inverse',
  outline: 'st-btn--outline',
  ghost: 'st-btn--ghost'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  tilt = false,
  iconLeft,
  iconRight,
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['st-btn', VARIANTS[variant] || VARIANTS.primary, 'st-btn--' + size, block ? 'st-btn--block' : '', tilt ? 'st-btn--tilt' : '', className].filter(Boolean).join(' ');
  const style = tilt ? {
    '--st-btn-rot': 'var(--st-tilt)',
    ...(rest.style || {})
  } : rest.style;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest, {
    style: style
  }), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  white: '',
  yellow: 'st-card--yellow',
  inverse: 'st-card--inverse'
};
function Card({
  children,
  title,
  tone = 'white',
  shadow = 'sm',
  square = false,
  interactive = false,
  media,
  className = '',
  ...rest
}) {
  const cls = ['st-card', TONES[tone] || '', shadow === 'hard' ? 'st-card--hard' : shadow === 'none' ? 'st-card--flat' : '', square ? 'st-card--square' : '', interactive ? 'st-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    className: "st-card__media"
  }, media) : null, title ? /*#__PURE__*/React.createElement("div", {
    className: "st-card__title"
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Display.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Display({
  children,
  level = 1,
  wide = false,
  tone = 'black',
  tilt = false,
  treatment,
  stroke = false,
  press = false,
  as,
  className = '',
  ...rest
}) {
  const Tag = as || (level === 'mega' ? 'h1' : 'h' + Math.min(3, Number(level) || 1));
  const cls = ['st-display', 'st-display--' + level, wide ? 'st-display--wide' : '', tone === 'yellow' ? 'st-display--yellow' : tone === 'white' ? 'st-display--white' : '', tilt ? 'st-display--tilt' : '', treatment ? 'st-display--' + treatment : '', stroke === 'lg' ? 'st-display--stroke-lg' : stroke ? 'st-display--stroke' : '', press ? 'st-display--press' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Display });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Display.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PromoBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoBanner({
  headline,
  sub,
  image,
  imageAlt = '',
  badge,
  ctaLabel,
  onCta,
  tone = 'yellow',
  className = '',
  ...rest
}) {
  const cls = ['st-promo', tone === 'inverse' ? 'st-promo--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-promo__copy"
  }, /*#__PURE__*/React.createElement(__ds_scope.Display, {
    level: 3,
    tone: tone === 'inverse' ? 'yellow' : 'black'
  }, headline), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, sub) : null, ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone === 'inverse' ? 'primary' : 'inverse',
    onClick: onCta
  }, ctaLabel) : null), image ? /*#__PURE__*/React.createElement("div", {
    className: "st-promo__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  })) : null, badge ? /*#__PURE__*/React.createElement("span", {
    className: "st-promo__badge"
  }, badge) : null);
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: '',
  yellow: 'st-iconbtn--yellow',
  inverse: 'st-iconbtn--inverse',
  bare: 'st-iconbtn--bare'
};
function IconButton({
  icon,
  label,
  variant = 'default',
  round = false,
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['st-iconbtn', VARIANTS[variant] || '', round ? 'st-iconbtn--round' : '', size === 'sm' ? 'st-iconbtn--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  badge: 'smashtag-badge-color.svg',
  badgeBlack: 'smashtag-badge-black.svg',
  badgeWhite: 'smashtag-badge-white.svg',
  lockupBlack: 'smashtag-lockup-black.svg',
  stickerCircle: 'sticker-badge-circle.svg',
  smashHand: 'sticker-smash.svg',
  tasteIt: 'sticker-taste-it.svg',
  burgerReloaded: 'sticker-burger-reloaded.svg',
  mascot: 'mascot-bob.svg',
  claim: 'claim-we-make-it-better.png'
};
const ALT = {
  stickerCircle: 'Smash Tag — Let\u2019s Burger',
  smashHand: 'Smash Tag — Smash',
  burgerReloaded: 'Smash Tag — Burger Reloaded',
  tasteIt: 'Smash Tag — Taste It',
  mascot: 'Bob, the Smash Tag mascot',
  claim: "We didn't create burger, we make it better"
};
function Logo({
  variant = 'badge',
  width = 160,
  basePath = 'assets/logo',
  className = '',
  style,
  ...rest
}) {
  const src = basePath.replace(/\/$/, '') + '/' + (FILES[variant] || FILES.badge);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['st-logo', className].filter(Boolean).join(' '),
    style: {
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ALT[variant] || 'Smash Tag — Let\u2019s Burger'
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Starburst.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Starburst({
  children,
  size = 160,
  tone = 'yellow',
  rotate = -8,
  className = '',
  style,
  ...rest
}) {
  const cls = ['st-starburst', tone === 'inverse' ? 'st-starburst--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      width: size,
      height: size,
      transform: 'rotate(' + rotate + 'deg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-starburst__inner",
    style: {
      fontSize: Math.round(size / 6)
    }
  }, children));
}
Object.assign(__ds_scope, { Starburst });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Starburst.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  white: '',
  yellow: 'st-tag--yellow',
  inverse: 'st-tag--inverse',
  positive: 'st-tag--positive',
  negative: 'st-tag--negative'
};
function Tag({
  children,
  tone = 'white',
  square = false,
  icon,
  className = '',
  ...rest
}) {
  const cls = ['st-tag', TONES[tone] || '', square ? 'st-tag--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/MenuItemRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MenuItemRow({
  name,
  description,
  price,
  image,
  imageAlt = '',
  tags = [],
  trailing,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['st-row', className].filter(Boolean).join(' ')
  }, rest), image ? /*#__PURE__*/React.createElement("span", {
    className: "st-row__thumb"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name
  })) : null, /*#__PURE__*/React.createElement("span", {
    className: "st-row__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-row__name"
  }, name), description ? /*#__PURE__*/React.createElement("p", {
    className: "st-row__desc"
  }, description) : null, tags.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 8
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))) : null), /*#__PURE__*/React.createElement("span", {
    className: "st-price"
  }, price), trailing);
}
Object.assign(__ds_scope, { MenuItemRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/MenuItemRow.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  name,
  description,
  price,
  oldPrice,
  image,
  imageAlt = '',
  tags = [],
  badge,
  actionLabel = 'Aggiungi',
  onAction,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ['st-product', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-product__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name
  }) : null, tags.length ? /*#__PURE__*/React.createElement("span", {
    className: "st-product__flag"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    tone: "yellow"
  }, t))) : null, badge), /*#__PURE__*/React.createElement("div", {
    className: "st-product__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-product__name"
  }, name), description ? /*#__PURE__*/React.createElement("p", {
    className: "st-product__desc"
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    className: "st-product__foot"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-price"
  }, price), oldPrice ? /*#__PURE__*/React.createElement("span", {
    className: "st-price st-price--strike"
  }, oldPrice) : null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      onAction && onAction(e);
    }
  }, actionLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  className = '',
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "st-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['st-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-dialog__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "st-dialog__title"
  }, title), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "st-iconbtn st-iconbtn--sm st-iconbtn--bare",
    "aria-label": "Chiudi",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  })) : null), /*#__PURE__*/React.createElement("div", null, children), actions ? /*#__PURE__*/React.createElement("div", {
    className: "st-dialog__actions"
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  children,
  tone = 'inverse',
  icon,
  action,
  className = '',
  ...rest
}) {
  const cls = ['st-toast', tone === 'yellow' ? 'st-toast--yellow' : tone === 'negative' ? 'st-toast--negative' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "st-toast__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), action);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['st-tooltip', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "st-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['st-check', 'st-check--box', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || 'st-in-' + (label || 'field').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "st-field__label",
    htmlFor: inputId
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['st-input', error ? 'st-input--invalid' : ''].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "st-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "st-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  className = '',
  ...rest
}) {
  const set = n => onChange && onChange(Math.min(max, Math.max(min, n)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['st-stepper', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Togli uno",
    disabled: value <= min,
    onClick: () => set(value - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "st-stepper__value",
    "aria-live": "polite"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Aggiungi uno",
    disabled: value >= max,
    onClick: () => set(value + 1)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['st-check', 'st-check--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  children,
  id,
  chevron,
  className = '',
  ...rest
}) {
  const selId = id || 'st-sel-' + (label || 'field').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "st-field__label",
    htmlFor: selId
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: "st-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId
  }, rest), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "st-select__chevron"
  }, chevron || /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down"
  }))), hint ? /*#__PURE__*/React.createElement("span", {
    className: "st-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "data-on": checked ? 'true' : 'false',
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    className: ['st-switch', className].filter(Boolean).join(' '),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "st-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-switch__knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand,
  links = [],
  actions,
  tone = 'inverse',
  className = '',
  ...rest
}) {
  const cls = ['st-nav', tone === 'yellow' ? 'st-nav--yellow' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "st-nav__brand"
  }, brand), /*#__PURE__*/React.createElement("span", {
    className: "st-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    className: "st-nav__link",
    href: l.href || '#',
    "aria-current": l.current ? 'page' : undefined,
    onClick: l.onClick
  }, l.label)), actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'inverse',
  className = '',
  ...rest
}) {
  const cls = ['st-tabs', tone === 'yellow' ? 'st-tabs--yellow' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": value === id,
      className: "st-tabs__tab",
      onClick: () => onChange && onChange(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
const NS = window.SmashTagDesignSystem_921f7f;
const {
  NavBar,
  Button,
  IconButton,
  Logo,
  Display,
  Tabs,
  ProductCard,
  MenuItemRow,
  Badge,
  Tag,
  Card,
  QuantityStepper,
  PromoBanner,
  Toast,
  Radio,
  Input
} = NS;
const P = '../../assets/photography/',
  L = '../../assets/logo/';
function AppBar({
  title,
  onBack,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 60,
      padding: '0 12px',
      background: 'var(--st-black)',
      color: 'var(--st-white)',
      flex: '0 0 auto'
    }
  }, onBack ? /*#__PURE__*/React.createElement(IconButton, {
    label: "Indietro",
    size: "sm",
    variant: "inverse",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-left"
    }),
    onClick: onBack
  }) : /*#__PURE__*/React.createElement(Logo, {
    variant: "stickerCircle",
    width: 40,
    basePath: L
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--st-font-heading)',
      fontWeight: 900,
      textTransform: 'uppercase',
      fontSize: 18,
      flex: 1
    }
  }, title), right);
}
function TabBar({
  tab,
  setTab,
  cart
}) {
  const items = [['home', 'home', 'Home'], ['menu', 'utensils', 'Menu'], ['cart', 'shopping-bag', 'Carrello'], ['me', 'user', 'Tu']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '3px solid var(--st-black)',
      background: 'var(--st-yellow-bg)',
      flex: '0 0 auto'
    }
  }, items.map(([id, ic, lab]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      flex: 1,
      minHeight: 60,
      border: 0,
      background: tab === id ? 'var(--st-black)' : 'transparent',
      color: tab === id ? 'var(--st-yellow)' : 'var(--st-black)',
      display: 'grid',
      placeItems: 'center',
      gap: 2,
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, lab), id === 'cart' && cart > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: '28%',
      background: 'var(--st-black)',
      color: 'var(--st-yellow)',
      fontSize: 10,
      fontWeight: 900,
      borderRadius: 999,
      minWidth: 18,
      height: 18,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--st-yellow)'
    }
  }, cart))));
}
function HomeScreen({
  go,
  add
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--st-yellow-bg)',
      padding: '20px 16px 24px',
      borderBottom: '3px solid var(--st-black)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-label"
  }, "Ciao Giulia \xB7 Roma Prati"), /*#__PURE__*/React.createElement(Display, {
    level: 3,
    style: {
      marginTop: 6
    }
  }, "Fame?", /*#__PURE__*/React.createElement("br", null), "Ci pensiamo noi."), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "md",
    variant: "inverse",
    style: {
      marginTop: 16
    },
    onClick: () => go('menu')
  }, "Ordina ora")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PromoBanner, {
    headline: "Marted\xEC 2x1",
    sub: "Su tutti gli Smash.",
    image: P + 'smash-red.jpg',
    ctaLabel: "Attiva",
    badge: /*#__PURE__*/React.createElement(Badge, {
      value: "2x1",
      size: "sm"
    }),
    style: {
      padding: 16,
      gap: 16
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "st-label",
    style: {
      display: 'block',
      marginBottom: 10
    }
  }, "Ordina di nuovo"), /*#__PURE__*/React.createElement(MenuItemRow, {
    name: "Smash Pink",
    description: "Bacon, cheddar, baddie sauce.",
    price: "9,50\u20AC",
    image: P + 'smash-pink.jpg',
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "Aggiungi",
      size: "sm",
      variant: "yellow",
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "plus"
      }),
      onClick: () => add({
        id: 'pink',
        name: 'Smash Pink'
      })
    })
  }), /*#__PURE__*/React.createElement(MenuItemRow, {
    name: "Frikies Cheddar",
    description: "Crinkle cut, cheddar fuso.",
    price: "4,90\u20AC",
    image: P + 'frikies-cheddar.jpg',
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "Aggiungi",
      size: "sm",
      variant: "yellow",
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "plus"
      }),
      onClick: () => add({
        id: 'frikies',
        name: 'Frikies'
      })
    })
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    square: true,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'sticker-taste-it.svg',
    alt: "",
    style: {
      width: 88
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "Salse nostre, fatte ogni giorno. Provale tutte."))));
}
function MenuScreen({
  add
}) {
  const [cat, setCat] = React.useState('smash');
  const items = window.ST_DATA[cat];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      background: 'var(--st-yellow-bg)',
      borderBottom: '3px solid var(--st-black)',
      position: 'sticky',
      top: 0,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'smash',
      label: 'Smash'
    }, {
      id: 'chick',
      label: 'Chick'
    }, {
      id: 'fries',
      label: 'Fries'
    }, {
      id: 'drink',
      label: 'Drink'
    }],
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    price: p.price,
    image: P + p.img,
    tags: p.tags.slice(0, 1),
    actionLabel: "+",
    onAction: () => add(p)
  }))));
}
function CartScreen({
  go
}) {
  const [q1, setQ1] = React.useState(1);
  const [q2, setQ2] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(MenuItemRow, {
    name: "Smash Pink",
    price: "9,50\u20AC",
    image: P + 'smash-pink.jpg',
    trailing: /*#__PURE__*/React.createElement(QuantityStepper, {
      value: q1,
      onChange: setQ1
    })
  }), /*#__PURE__*/React.createElement(MenuItemRow, {
    name: "Frikies Cheddar",
    price: "4,90\u20AC",
    image: P + 'frikies-cheddar.jpg',
    trailing: /*#__PURE__*/React.createElement(QuantityStepper, {
      value: q2,
      onChange: setQ2
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-label"
  }, "Come lo vuoi"), /*#__PURE__*/React.createElement(Radio, {
    name: "modo",
    label: "Ritiro \u2014 Roma Prati",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "modo",
    label: "Consegna a domicilio"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Codice promo",
    placeholder: "MARTEDI2X1"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '3px solid var(--st-black)',
      background: 'var(--st-yellow-bg)',
      padding: 16,
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "Totale"), /*#__PURE__*/React.createElement("span", {
    className: "st-price"
  }, (9.5 * q1 + 4.9 * q2).toFixed(2).replace('.', ','), "\u20AC")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    variant: "inverse",
    onClick: () => go('done')
  }, "Paga e ordina")));
}
function DoneScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--st-yellow-bg)',
      padding: 24,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: L + 'mascot-bob.svg',
    alt: "",
    style: {
      width: 150,
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement(Display, {
    level: 2,
    style: {
      marginTop: 12
    }
  }, "Ci siamo"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, "Ordine #4821 \u2014 pronto tra 12 minuti a Roma Prati."), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 20
    },
    variant: "inverse",
    onClick: () => go('home')
  }, "Torna alla home")));
}
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: 'var(--st-white)',
      border: '5px solid var(--st-black)',
      borderRadius: 14,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--st-shadow-hard-lg)'
    }
  }, children);
}
function AppKit() {
  const [tab, setTab] = React.useState('home');
  const [cart, setCart] = React.useState(2);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  });
  const add = p => {
    setCart(c => c + 1);
    setToast(p.name + ' aggiunto');
    clearTimeout(window.__t);
    window.__t = setTimeout(() => setToast(null), 2200);
  };
  const TITLES = {
    home: "Let's burger",
    menu: 'Il menu',
    cart: 'Carrello',
    me: 'Il tuo profilo',
    done: 'Ordine'
  };
  const go = t => setTab(t);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      padding: 32,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(AppBar, {
    title: TITLES[tab],
    onBack: tab === 'cart' || tab === 'done' ? () => setTab('home') : null,
    right: /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifiche",
      size: "sm",
      variant: "inverse",
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "bell"
      })
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      position: 'relative'
    }
  }, tab === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    add: add
  }), tab === 'menu' && /*#__PURE__*/React.createElement(MenuScreen, {
    add: add
  }), tab === 'cart' && /*#__PURE__*/React.createElement(CartScreen, {
    go: go
  }), tab === 'done' && /*#__PURE__*/React.createElement(DoneScreen, {
    go: go
  }), tab === 'me' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      textAlign: 'center',
      color: 'var(--st-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Nessuna schermata profilo \xE8 stata fornita nel kit di brand.")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "yellow",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check"
    })
  }, toast))), tab !== 'done' && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab,
    cart: cart
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300,
      fontFamily: 'var(--st-font-body)'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    level: 3
  }, "App kit"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: 'var(--st-text-muted)'
    }
  }, "Usa la tab bar per passare tra Home, Menu e Carrello. Aggiungi un prodotto per vedere il toast, poi paga per la schermata di conferma."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "yellow"
  }, "Home"), /*#__PURE__*/React.createElement(Tag, {
    tone: "yellow"
  }, "Menu"), /*#__PURE__*/React.createElement(Tag, {
    tone: "yellow"
  }, "Carrello"), /*#__PURE__*/React.createElement(Tag, {
    tone: "yellow"
  }, "Conferma"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AppKit, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/App.jsx
try { (() => {
const {
  Toast,
  Dialog,
  Button
} = window.SmashTagDesignSystem_921f7f;
function App() {
  const [page, setPage] = React.useState('home');
  const [item, setItem] = React.useState(null);
  const [cart, setCart] = React.useState(0);
  const [toast, setToast] = React.useState(null);
  const [upsell, setUpsell] = React.useState(false);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  });
  const go = p => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  const openProduct = p => {
    setItem(p);
    go('product');
  };
  const add = (p, q = 1) => {
    setCart(c => c + q);
    setToast(p.name + ' aggiunto al carrello');
    clearTimeout(window.__t);
    window.__t = setTimeout(() => setToast(null), 2600);
    if (!/fries|frikies/i.test(p.id)) setUpsell(true);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    page: page,
    go: go,
    cart: cart
  }), page === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: go,
    add: add
  }), page === 'menu' && /*#__PURE__*/React.createElement(Menu, {
    go: go,
    add: add,
    openProduct: openProduct
  }), page === 'product' && item && /*#__PURE__*/React.createElement(Product, {
    item: item,
    go: go,
    add: add
  }), page === 'locali' && /*#__PURE__*/React.createElement(Locali, {
    go: go
  }), /*#__PURE__*/React.createElement(SiteFooter, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "yellow",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check"
    })
  }, toast)), /*#__PURE__*/React.createElement(Dialog, {
    open: upsell,
    title: "Aggiungi le frikies?",
    onClose: () => setUpsell(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setUpsell(false)
    }, "No grazie"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setCart(c => c + 1);
        setUpsell(false);
      }
    }, "S\xEC, aggiungi 4,90\u20AC"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Crinkle cut, cheddar fuso. Non ci pensare troppo.")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Chrome.jsx
try { (() => {
const {
  NavBar,
  Button,
  IconButton,
  Logo,
  Display
} = window.SmashTagDesignSystem_921f7f;
const A = '../../assets/';
function SiteHeader({
  page,
  go,
  cart
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('home');
      },
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "stickerCircle",
      width: 54,
      basePath: A + 'logo'
    })),
    links: [{
      label: 'Menu',
      current: page === 'menu' || page === 'product',
      onClick: e => {
        e.preventDefault();
        go('menu');
      }
    }, {
      label: 'Locali',
      current: page === 'locali',
      onClick: e => {
        e.preventDefault();
        go('locali');
      }
    }, {
      label: 'Franchising',
      onClick: e => e.preventDefault()
    }, {
      label: 'Lavora con noi',
      onClick: e => e.preventDefault()
    }],
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      label: 'Carrello (' + cart + ')',
      variant: "yellow",
      size: "sm",
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "shopping-bag"
      })
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('menu')
    }, "Ordina"))
  });
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--st-black)',
      color: 'var(--st-white)',
      padding: '48px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "stickerCircle",
    width: 92,
    basePath: A + 'logo'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Display, {
    level: 3,
    tone: "yellow"
  }, "Let\u2019s burger"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      maxWidth: 420,
      color: 'var(--st-ink-30)'
    }
  }, "Nati a Roma. Manzo schiacciato sulla piastra, pane brioche, salse nostre. Niente di pi\xF9.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-label",
    style: {
      color: 'var(--st-yellow)'
    }
  }, "Segui"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "instagram"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "music-2"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "facebook"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      fontSize: 14,
      color: 'var(--st-ink-30)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-label",
    style: {
      color: 'var(--st-yellow)'
    }
  }, "Info"), /*#__PURE__*/React.createElement("span", null, "Allergeni"), /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Contatti"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '32px auto 0',
      paddingTop: 20,
      borderTop: '2px solid var(--st-ink-90)',
      fontSize: 12,
      color: 'var(--st-ink-50)'
    }
  }, "\xA9 Smash Tag srl \u2014 Roma"));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  ST_A: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Home.jsx
try { (() => {
const {
  Button,
  Display,
  Badge,
  ProductCard,
  PromoBanner,
  Card,
  Logo,
  Tag
} = window.SmashTagDesignSystem_921f7f;
const P = '../../assets/photography/';
function Home({
  go,
  add
}) {
  const top = window.ST_DATA.smash.slice(0, 4);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--st-yellow-bg)',
      borderBottom: '5px solid var(--st-black)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '56px 24px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "st-label",
    style: {
      display: 'inline-block',
      background: 'var(--st-black)',
      color: 'var(--st-yellow)',
      padding: '6px 12px',
      borderRadius: 4,
      whiteSpace: 'nowrap'
    }
  }, "Roma \xB7 smash burger"), /*#__PURE__*/React.createElement(Display, {
    level: 1,
    style: {
      marginTop: 18
    }
  }, "We didn\u2019t create burger,", /*#__PURE__*/React.createElement("br", null), "we make it better"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: 440,
      marginTop: 18
    }
  }, "Manzo schiacciato sulla piastra. Cheddar che cola. Pane brioche. Basta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go('menu')
  }, "Ordina ora"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go('locali')
  }, "Trova un locale"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'hand-smash-square.jpg',
    alt: "Smash burger in mano",
    style: {
      width: '100%',
      border: '5px solid var(--st-black)',
      borderRadius: 8,
      boxShadow: 'var(--st-shadow-hard-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -22,
      left: -26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    value: "2x1",
    label: "il marted\xEC"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--st-black)',
      color: 'var(--st-yellow)',
      padding: '12px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--st-font-display)',
      fontWeight: 900,
      fontSize: 22,
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginRight: 28
    }
  }, "Smash \xB7 Taste it \xB7 Let\u2019s burger \xB7")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    level: 2
  }, "I pi\xF9 smashati"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('menu')
  }, "Tutto il menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, top.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    description: p.desc,
    price: p.price,
    image: P + p.img,
    tags: p.tags,
    onAction: () => add(p)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--st-ink-08)',
      borderTop: '3px solid var(--st-black)',
      borderBottom: '3px solid var(--st-black)',
      padding: '56px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PromoBanner, {
    headline: "Marted\xEC 2x1 su tutti gli Smash",
    sub: "Porta un amico. Paghi uno.",
    image: P + 'smash-brown.jpg',
    imageAlt: "Smash Brown",
    ctaLabel: "Ordina ora",
    onCta: () => go('menu'),
    badge: /*#__PURE__*/React.createElement(Badge, {
      value: "2x1",
      size: "sm"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PromoBanner, {
    tone: "inverse",
    headline: "Smashbox",
    sub: "Chicken, frikies, due salse. Da dividere (o no).",
    image: P + 'smashbox.jpg',
    imageAlt: "Smashbox",
    ctaLabel: "Provala",
    onCta: () => go('menu')
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "yellow",
    shadow: "hard",
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/logo/sticker-taste-it.svg',
    alt: "Taste it",
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Display, {
    level: 3
  }, "Le nostre salse"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, "Smash Tag Sauce e Baddie Sauce. Fatte da noi, ogni giorno."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "inverse"
  }, "Smash Tag Sauce"), /*#__PURE__*/React.createElement(Tag, {
    tone: "inverse"
  }, "Baddie Sauce"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    level: 2,
    style: {
      marginBottom: 24
    }
  }, "Dove trovarci"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, window.ST_DATA.locali.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.name,
    square: true,
    shadow: "sm",
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-label"
  }, l.note), /*#__PURE__*/React.createElement("div", {
    className: "st-card__title",
    style: {
      fontSize: 20,
      margin: 0
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--st-text-muted)'
    }
  }, l.addr), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, l.hours))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Locali.jsx
try { (() => {
const {
  Display,
  Card,
  Button,
  Select,
  Input,
  Tag
} = window.SmashTagDesignSystem_921f7f;
function Locali({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--st-yellow-bg)',
      borderBottom: '5px solid var(--st-black)',
      padding: '44px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    level: 1
  }, "I locali"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10
    }
  }, "Quattro a Roma. Altri stanno arrivando."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '40px 24px 72px',
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Cerca",
    placeholder: "Via, quartiere, CAP"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Servizio",
    options: ['Tutti', 'Sala', 'Asporto', 'Delivery']
  }), window.ST_DATA.locali.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.name,
    interactive: true,
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-card__title",
    style: {
      fontSize: 20,
      margin: 0
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--st-text-muted)'
    }
  }, l.addr), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, l.hours), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Tag, null, l.note)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    style: {
      marginTop: 8,
      justifySelf: 'start'
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "navigation"
    })
  }, "Indicazioni")))), /*#__PURE__*/React.createElement(Card, {
    square: true,
    shadow: "hard",
    style: {
      padding: 0,
      overflow: 'hidden',
      minHeight: 520,
      background: 'var(--st-ink-08)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-label"
  }, "Mappa"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      color: 'var(--st-text-muted)',
      maxWidth: 360
    }
  }, "Nessuna mappa \xE8 stata fornita nel kit di brand: qui va la mappa dei locali, in bianco e nero con i pin gialli.")))));
}
Object.assign(window, {
  Locali
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Locali.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Menu.jsx
try { (() => {
const {
  Tabs,
  Display,
  ProductCard,
  MenuItemRow,
  Button,
  Badge,
  QuantityStepper
} = window.SmashTagDesignSystem_921f7f;
const P = '../../assets/photography/';
const CATS = [{
  id: 'smash',
  label: 'Smash'
}, {
  id: 'chick',
  label: "Let's Chick"
}, {
  id: 'fries',
  label: 'Fries'
}, {
  id: 'drink',
  label: 'Drink'
}];
function Menu({
  go,
  add,
  openProduct
}) {
  const [cat, setCat] = React.useState('smash');
  const [view, setView] = React.useState('grid');
  const items = window.ST_DATA[cat];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--st-black)',
      padding: '40px 24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Display, {
    level: 1,
    tone: "yellow"
  }, "Il menu"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--st-ink-30)',
      marginTop: 10
    }
  }, "Otto smash, il pollo, le patatine. Scegli e vai."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      background: 'var(--st-yellow-bg)',
      borderBottom: '3px solid var(--st-black)',
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: CATS,
    value: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: view === 'grid' ? 'inverse' : 'outline',
    onClick: () => setView('grid'),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "layout-grid"
    })
  }, "Griglia"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: view === 'list' ? 'inverse' : 'outline',
    onClick: () => setView('list'),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "list"
    })
  }, "Lista")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '32px 24px 72px'
    }
  }, view === 'grid' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    description: p.desc,
    price: p.price,
    image: P + p.img,
    tags: p.tags,
    onAction: () => add(p),
    onClick: () => openProduct(p),
    style: {
      cursor: 'pointer'
    }
  }))) : /*#__PURE__*/React.createElement("div", null, items.map(p => /*#__PURE__*/React.createElement(MenuItemRow, {
    key: p.id,
    name: p.name,
    description: p.desc,
    price: p.price,
    image: P + p.img,
    tags: p.tags,
    trailing: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => add(p)
    }, "Aggiungi")
  })))));
}
Object.assign(window, {
  Menu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Product.jsx
try { (() => {
const {
  Display,
  Button,
  Tag,
  Badge,
  QuantityStepper,
  Checkbox,
  Radio,
  Card,
  Tooltip,
  IconButton
} = window.SmashTagDesignSystem_921f7f;
const P = '../../assets/photography/';
function Product({
  item,
  go,
  add
}) {
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-left"
    }),
    onClick: () => go('menu')
  }, "Torna al menu")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--st-container)',
      margin: '0 auto',
      padding: '16px 24px 72px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--st-yellow-bg)',
      border: '5px solid var(--st-black)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + item.img,
    alt: item.name,
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -24,
      right: -20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    value: item.price.replace('€', ''),
    label: "euro",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12
    }
  }, item.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "yellow"
  }, t))), /*#__PURE__*/React.createElement(Display, {
    level: 1
  }, item.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      marginTop: 14
    }
  }, item.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--st-text-muted)'
    }
  }, "Manzo 100% italiano, schiacciato sulla piastra e servito subito. Pane brioche tostato."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "st-label",
    style: {
      display: 'block',
      marginBottom: 10
    }
  }, "Come lo vuoi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "pane",
    label: "Pane brioche",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "pane",
    label: "Pane ai semi"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "st-label",
    style: {
      display: 'block',
      marginBottom: 10
    }
  }, "Aggiungi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Doppio cheddar (+1,50\u20AC)"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Bacon croccante (+2,00\u20AC)"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Baddie sauce (+0,80\u20AC)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    max: 10
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => add(item, qty)
  }, "Aggiungi ", qty > 1 ? '(' + qty + ')' : '', " \u2014 ", item.price), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Glutine, latte, uova, senape"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Allergeni",
    variant: "bare",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "info"
    })
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    square: true,
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mascot-bob.svg",
    alt: "",
    style: {
      width: 76
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Prendi anche le frikies. Fidati, \xE8 il nostro lavoro.")))));
}
Object.assign(window, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
window.ST_DATA = {
  smash: [{
    id: 'white',
    name: 'Smash White',
    desc: 'Doppio manzo, cheddar, salsa Smash Tag.',
    price: '8,50€',
    img: 'smash-white.jpg',
    tags: ['Il classico']
  }, {
    id: 'yellow',
    name: 'Smash Yellow',
    desc: 'Manzo, cheddar, cipolla croccante, lattuga.',
    price: '8,50€',
    img: 'smash-yellow.jpg',
    tags: []
  }, {
    id: 'red',
    name: 'Smash Red',
    desc: 'Doppio manzo, cheddar, salsa rossa piccante.',
    price: '9,00€',
    img: 'smash-red.jpg',
    tags: ['Piccante']
  }, {
    id: 'green',
    name: 'Smash Green',
    desc: 'Manzo, lattuga, pomodoro, salsa verde.',
    price: '8,50€',
    img: 'smash-green.jpg',
    tags: []
  }, {
    id: 'orange',
    name: 'Smash Orange',
    desc: 'Pollo croccante, cheddar, salsa arancio.',
    price: '9,00€',
    img: 'smash-orange.jpg',
    tags: ["Let's Chick"]
  }, {
    id: 'black',
    name: 'Smash Black',
    desc: 'Doppio manzo, rucola, maionese al tartufo.',
    price: '9,50€',
    img: 'smash-black.jpg',
    tags: []
  }, {
    id: 'brown',
    name: 'Smash Brown',
    desc: 'Doppio manzo, cheddar, bacon, BBQ.',
    price: '9,50€',
    img: 'smash-brown.jpg',
    tags: ['Novità']
  }, {
    id: 'pink',
    name: 'Smash Pink',
    desc: 'Doppio manzo, cheddar, bacon, baddie sauce.',
    price: '9,50€',
    img: 'smash-pink.jpg',
    tags: ['Piccante']
  }],
  fries: [{
    id: 'fries',
    name: 'Fries',
    desc: 'Patatine classiche, sale.',
    price: '3,50€',
    img: 'fries.jpg',
    tags: []
  }, {
    id: 'fries-cheddar',
    name: 'Fries Cheddar',
    desc: 'Patatine e cheddar fuso.',
    price: '4,50€',
    img: 'fries-cheddar.jpg',
    tags: []
  }, {
    id: 'frikies',
    name: 'Frikies Cheddar',
    desc: 'Crinkle cut, cheddar fuso.',
    price: '4,90€',
    img: 'frikies-cheddar.jpg',
    tags: ['Novità']
  }, {
    id: 'frikies-bacon',
    name: 'Frikies Cheddar & Bacon',
    desc: 'Crinkle cut, cheddar, bacon croccante.',
    price: '5,90€',
    img: 'frikies-cheddar-bacon.jpg',
    tags: []
  }],
  chick: [{
    id: 'nuggets',
    name: 'Nuggets 8pz',
    desc: 'Pollo croccante, salsa a scelta.',
    price: '5,90€',
    img: 'nuggets.jpg',
    tags: ["Let's Chick"]
  }, {
    id: 'smashbox',
    name: 'Smashbox',
    desc: 'Chicken, frikies, pane, due salse.',
    price: '12,90€',
    img: 'smashbox.jpg',
    tags: ['Da condividere']
  }],
  drink: [{
    id: 'coca',
    name: 'Coca-Cola 33cl',
    desc: 'Fredda. Molto fredda.',
    price: '2,50€',
    img: 'drink-coca-cola.jpg',
    tags: []
  }, {
    id: 'beer',
    name: 'Birra 33cl',
    desc: 'Bionda, in bottiglia.',
    price: '4,00€',
    img: 'drink-beer.jpg',
    tags: []
  }],
  locali: [{
    name: 'Roma — Prati',
    addr: 'Via Cola di Rienzo 121',
    hours: '12:00 – 23:30',
    note: 'Sala + asporto'
  }, {
    name: 'Roma — Trastevere',
    addr: 'Viale di Trastevere 88',
    hours: '12:00 – 00:30',
    note: 'Sala + asporto + delivery'
  }, {
    name: 'Roma — Tuscolana',
    addr: 'Via Tuscolana 402',
    hours: '12:00 – 23:30',
    note: 'Asporto + delivery'
  }, {
    name: 'Roma — Ostiense',
    addr: 'Via Ostiense 210',
    hours: '18:00 – 00:30',
    note: 'Solo la sera'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.MenuItemRow = __ds_scope.MenuItemRow;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Display = __ds_scope.Display;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Starburst = __ds_scope.Starburst;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
