/* @ds-bundle: {"format":4,"namespace":"Sangsang","components":[{"name":"GridPattern"},{"name":"GridHub"},{"name":"PageHeader"},{"name":"Button"},{"name":"IconButton"},{"name":"Icon"},{"name":"TextField"},{"name":"Select"},{"name":"SearchBar"},{"name":"Checkbox"},{"name":"RadioGroup"},{"name":"FileUpload"},{"name":"Badge"},{"name":"StatusBadge"},{"name":"TypeTag"},{"name":"Tag"},{"name":"ProgressBar"},{"name":"ApprovalSteps"},{"name":"Banner"},{"name":"Toast"},{"name":"Modal"},{"name":"EmptyState"},{"name":"Header"},{"name":"SideNav"},{"name":"Breadcrumb"},{"name":"Tabs"},{"name":"Pagination"},{"name":"DataTable"},{"name":"StatTile"},{"name":"Avatar"},{"name":"NotificationItem"},{"name":"CourseCard"},{"name":"CheckInCard"},{"name":"LearningCalendar"},{"name":"MissionList"},{"name":"FeedCard"},{"name":"OpenLabCard"},{"name":"PersonCard"},{"name":"SkillRadar"},{"name":"GapBars"},{"name":"ActivityTimeline"}]} */
(function () {
  var R = window.React;
  var h = R.createElement;
  var useState = R.useState;
  var Fragment = R.Fragment;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(' ');
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k]; }
    return o;
  }
  var uid = 0;
  function useId(given) {
    var s = useState(function () { uid += 1; return given || 'ss-' + uid; });
    return s[0];
  }

  /* ---------- Icons (1.75px stroke, 24 grid) ---------- */
  var ICONS = {
    search: [['circle', { cx: 11, cy: 11, r: 7 }], ['path', { d: 'M20 20l-3.6-3.6' }]],
    bell: [['path', { d: 'M6 9a6 6 0 0 1 12 0c0 6 2.5 8 2.5 8h-17S6 15 6 9z' }], ['path', { d: 'M10 20.5a2.2 2.2 0 0 0 4 0' }]],
    'chevron-right': [['path', { d: 'M9 6l6 6-6 6' }]],
    'chevron-left': [['path', { d: 'M15 6l-6 6 6 6' }]],
    'chevron-down': [['path', { d: 'M6 9l6 6 6-6' }]],
    check: [['path', { d: 'M5 12.5l4.5 4.5L19 7.5' }]],
    x: [['path', { d: 'M6 6l12 12M18 6L6 18' }]],
    upload: [['path', { d: 'M12 15V4M7.5 8.5L12 4l4.5 4.5' }], ['path', { d: 'M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4' }]],
    file: [['path', { d: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z' }], ['path', { d: 'M14 3v5h5' }]],
    calendar: [['rect', { x: 3.5, y: 5, width: 17, height: 15.5, rx: 2 }], ['path', { d: 'M3.5 10h17M8 3v4M16 3v4' }]],
    info: [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M12 11v5.5M12 7.8v.2' }]],
    alert: [['path', { d: 'M12 3.5L21.5 20h-19z' }], ['path', { d: 'M12 10v4.5M12 17.3v.2' }]],
    'check-circle': [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M8 12.3l2.8 2.8L16.2 9.5' }]],
    'x-circle': [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M9 9l6 6M15 9l-6 6' }]],
    home: [['path', { d: 'M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z' }]],
    user: [['circle', { cx: 12, cy: 8, r: 4 }], ['path', { d: 'M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5' }]],
    users: [['circle', { cx: 9, cy: 8, r: 3.5 }], ['path', { d: 'M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6' }], ['path', { d: 'M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2.1.7 3.5 2.8 3.5 5.7' }]],
    clock: [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M12 7v5l3.2 2' }]],
    plus: [['path', { d: 'M12 5v14M5 12h14' }]],
    'arrow-right': [['path', { d: 'M5 12h14M13 6l6 6-6 6' }]],
    sparkle: [['path', { d: 'M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6L4.5 11l5.6-1.9z' }], ['path', { d: 'M19 3v3M17.5 4.5h3' }]],
    book: [['path', { d: 'M4.5 5.5A2.5 2.5 0 0 1 7 3h12.5v15H7a2.5 2.5 0 0 0-2.5 2.5z' }], ['path', { d: 'M4.5 20.5A2.5 2.5 0 0 0 7 23h12.5v-5' }]],
    menu: [['path', { d: 'M4 6.5h16M4 12h16M4 17.5h16' }]],
    globe: [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z' }]],
    award: [['circle', { cx: 12, cy: 9, r: 5.5 }], ['path', { d: 'M8.6 13.4L7.5 21l4.5-2.5 4.5 2.5-1.1-7.6' }]],
    flag: [['path', { d: 'M5 21V4M5 4.5h11l-2 4 2 4H5' }]],
    edit: [['path', { d: 'M4 20h4.5L19.3 9.2a2.1 2.1 0 0 0-3-3L5.5 17v3z' }]],
    qr: [['rect', { x: 3.5, y: 3.5, width: 7, height: 7, rx: 1 }], ['rect', { x: 13.5, y: 3.5, width: 7, height: 7, rx: 1 }], ['rect', { x: 3.5, y: 13.5, width: 7, height: 7, rx: 1 }], ['path', { d: 'M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM14 19.5h1.5M19.5 14v2' }]],
    message: [['path', { d: 'M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v10a1.5 1.5 0 0 1-1.5 1.5H9l-5 4z' }]],
    'trend-up': [['path', { d: 'M4 16l5.5-5.5 4 4L20 8' }], ['path', { d: 'M15 8h5v5' }]],
    'trend-down': [['path', { d: 'M4 8l5.5 5.5 4-4L20 16' }], ['path', { d: 'M15 16h5v-5' }]],
    lightbulb: [['path', { d: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z' }]]
  };
  function Icon(props) {
    var size = props.size || 16;
    var parts = ICONS[props.name] || ICONS.info;
    var kids = parts.map(function (p, i) { return h(p[0], Object.assign({ key: i }, p[1])); });
    var a11y = props.label ? { role: 'img', 'aria-label': props.label } : { 'aria-hidden': 'true' };
    return h('svg', Object.assign({ className: cx('ss-icon', props.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: props.strokeWidth || 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', style: props.style }, a11y), kids);
  }

  /* ---------- Identity: Blueprint Grid ---------- */
  function rng(seed) {
    var s = ((seed || 1) * 2654435761) >>> 0 || 1;
    return function () { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  }
  function GridPattern(props) {
    var W = props.width || 960, Hh = props.height || 240, c = props.cell || 40;
    var pid = useId();
    var rand = rng(props.seed || 7);
    var cols = Math.ceil(W / c), rows = Math.ceil(Hh / c);
    var fade = props.fade || 'none';
    var defs = [
      h('pattern', { key: 'g', id: pid + '-g', width: c, height: c, patternUnits: 'userSpaceOnUse' },
        h('path', { className: 'gl', d: 'M' + c + ' 0V' + c + 'M0 ' + c + 'H' + c }),
        props.dots === false ? null : [1, 2, 3, 4].map(function (i) { return [1, 2, 3, 4].map(function (j) { return h('circle', { key: i + '-' + j, className: 'gd', cx: c * i / 5, cy: c * j / 5, r: 0.6 }); }); })),
      h('pattern', { key: 'x', id: pid + '-x', width: c, height: c, patternUnits: 'userSpaceOnUse', patternTransform: 'translate(' + (-c / 2) + ' ' + (-c / 2) + ')' },
        h('path', { className: 'gx', d: 'M' + (c / 2 - 4) + ' ' + c / 2 + 'H' + (c / 2 + 4) + 'M' + c / 2 + ' ' + (c / 2 - 4) + 'V' + (c / 2 + 4) }))
    ];
    if (fade !== 'none') {
      var grad = fade === 'radial'
        ? h('radialGradient', { key: 'fg', id: pid + '-fg', cx: '50%', cy: '50%', r: '60%' }, h('stop', { offset: '0%', stopColor: '#fff' }), h('stop', { offset: '100%', stopColor: '#fff', stopOpacity: 0 }))
        : h('linearGradient', { key: 'fg', id: pid + '-fg', x1: fade === 'left' ? '0%' : '100%', x2: fade === 'left' ? '100%' : '0%', y1: '0%', y2: '0%' }, h('stop', { offset: '0%', stopColor: '#fff', stopOpacity: 0 }), h('stop', { offset: '55%', stopColor: '#fff', stopOpacity: 0.55 }), h('stop', { offset: '100%', stopColor: '#fff' }));
      defs.push(grad);
      defs.push(h('mask', { key: 'm', id: pid + '-m' }, h('rect', { width: W, height: Hh, fill: 'url(#' + pid + '-fg)' })));
    }
    var lit = [], n = props.lit == null ? 5 : props.lit, used = {};
    for (var i = 0; i < n * 4 && lit.length < n; i++) {
      var col = Math.floor(rand() * cols), row = Math.floor(rand() * rows), key = col + ':' + row;
      if (used[key]) continue; used[key] = 1;
      lit.push(h('rect', { key: key, className: rand() < 0.3 ? 'lit lit-strong' : 'lit', x: col * c + 1, y: row * c + 1, width: c - 1, height: c - 1 }));
    }
    return h('svg', { className: cx('ss-grid', 'ss-grid-' + (props.tone || 'light'), props.className), width: '100%', height: '100%', viewBox: '0 0 ' + W + ' ' + Hh, preserveAspectRatio: 'xMidYMid slice', 'aria-hidden': 'true', style: props.style },
      h('defs', null, defs),
      h('g', { mask: fade !== 'none' ? 'url(#' + pid + '-m)' : undefined },
        lit,
        h('rect', { width: W, height: Hh, fill: 'url(#' + pid + '-g)' }),
        h('rect', { width: W, height: Hh, fill: 'url(#' + pid + '-x)' })));
  }
  var HUB_TONE = { brand: 'info', success: 'success', warning: 'warning', danger: 'danger', neutral: 'neutral' };
  function GridHub(props) {
    var Hh = props.height || 168, W = props.width || 360, size = props.size || 64;
    return h('div', { className: cx('ss-root ss-hub', props.className), style: { height: Hh } },
      h(GridPattern, { width: W, height: Hh, cell: props.cell || 32, fade: 'radial', lit: props.lit == null ? 4 : props.lit, seed: props.seed || 3 }),
      h('div', { className: 'ss-hub-ring', style: { width: size + 16, height: size + 16 } },
        h('div', { className: cx('ss-hub-core', 'ss-bg-' + (HUB_TONE[props.tone] || 'info')), style: { width: size, height: size } }, h(Icon, { name: props.icon || 'check', size: Math.round(size * 0.46), strokeWidth: 2.25 }))));
  }
  function PageHeader(props) {
    return h('section', { className: cx('ss-root ss-phead', props.className) },
      h('div', { className: 'ss-phead-art' }, h(GridPattern, { width: 1200, height: 240, tone: 'dark', fade: 'left', seed: props.seed || 11, lit: 6 })),
      h('div', { className: 'ss-phead-body' },
        props.eyebrow ? h('span', { className: 'ss-phead-eyebrow' }, props.eyebrow) : null,
        h('h1', null, props.title),
        props.description ? h('p', null, props.description) : null,
        props.actions ? h('div', { className: 'ss-phead-actions' }, props.actions) : null));
  }

  /* ---------- Actions ---------- */
  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var rest = omit(props, ['variant', 'size', 'icon', 'iconRight', 'block', 'className', 'children']);
    var isz = size === 'lg' ? 18 : 16;
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('ss-root ss-btn', 'ss-btn-' + variant, size !== 'md' && 'ss-btn-' + size, props.block && 'ss-btn-block', props.className) }),
      props.icon ? h(Icon, { name: props.icon, size: isz }) : null,
      props.children,
      props.iconRight ? h(Icon, { name: props.iconRight, size: isz }) : null);
  }
  function IconButton(props) {
    var rest = omit(props, ['icon', 'label', 'dot', 'className']);
    return h('button', Object.assign({ type: 'button', 'aria-label': props.label }, rest, { className: cx('ss-iconbtn', props.className) }),
      h(Icon, { name: props.icon, size: 20 }),
      props.dot ? h('span', { className: 'ss-dot' }, h('span', { className: 'ss-sr' }, '새 알림')) : null);
  }

  /* ---------- Forms ---------- */
  function FieldShell(p, id, control) {
    return h('div', { className: cx('ss-root ss-field', p.error && 'is-error', p.className), style: p.style },
      p.label ? h('label', { className: 'ss-label', htmlFor: id }, p.label, p.required ? h('span', { className: 'ss-req', 'aria-hidden': 'true' }, '*') : null) : null,
      control,
      p.error ? h('div', { className: 'ss-help', id: id + '-help' }, h(Icon, { name: 'alert', size: 14 }), p.error)
        : (p.helper ? h('div', { className: 'ss-help', id: id + '-help' }, p.helper) : null));
  }
  function TextField(props) {
    var id = useId(props.id);
    var rest = omit(props, ['label', 'helper', 'error', 'icon', 'className', 'style', 'id']);
    var input = h('input', Object.assign({ type: 'text' }, rest, { id: id, className: 'ss-input', 'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': (props.error || props.helper) ? id + '-help' : undefined }));
    var control = h('div', { className: cx('ss-control', props.icon && 'has-icon') }, props.icon ? h(Icon, { name: props.icon, size: 18, className: 'ss-icon-lead' }) : null, input);
    return FieldShell(props, id, control);
  }
  function Select(props) {
    var id = useId(props.id);
    var rest = omit(props, ['label', 'helper', 'error', 'options', 'placeholder', 'className', 'style', 'id']);
    var opts = (props.options || []).map(function (o) { var v = typeof o === 'string' ? { value: o, label: o } : o; return h('option', { key: v.value, value: v.value }, v.label); });
    if (props.placeholder) opts.unshift(h('option', { key: '__ph', value: '' }, props.placeholder));
    var sel = h('select', Object.assign({}, rest, { id: id, className: 'ss-select', 'aria-invalid': props.error ? 'true' : undefined }), opts);
    return FieldShell(props, id, h('div', { className: 'ss-control' }, sel, h(Icon, { name: 'chevron-down', size: 18, className: 'ss-chev' })));
  }
  function SearchBar(props) {
    var rest = omit(props, ['scope', 'className', 'label', 'onSearch']);
    return h('form', { role: 'search', className: cx('ss-root ss-search', props.className), onSubmit: function (e) { e.preventDefault(); if (props.onSearch) props.onSearch(e.target.elements.q.value); } },
      props.scope ? h('span', { className: 'ss-scope' }, props.scope) : null,
      h('input', Object.assign({ name: 'q', type: 'search', 'aria-label': props.label || '통합 검색', placeholder: '과정, 전문가, Open Lab 검색' }, rest)),
      h('button', { type: 'submit', className: 'ss-iconbtn', 'aria-label': '검색' }, h(Icon, { name: 'search', size: 20 })));
  }
  function Checkbox(props) {
    var rest = omit(props, ['label', 'className']);
    return h('label', { className: cx('ss-root ss-check', props.disabled && 'is-disabled', props.className) },
      h('input', Object.assign({ type: 'checkbox' }, rest)), props.label ? h('span', null, props.label) : null);
  }
  function RadioGroup(props) {
    var name = useId(props.name);
    var s = useState(props.defaultValue);
    var value = props.value !== undefined ? props.value : s[0];
    return h('fieldset', { className: cx('ss-root ss-radiogroup', props.direction === 'row' && 'is-row', props.className) },
      props.label ? h('legend', { className: 'ss-label' }, props.label) : null,
      (props.options || []).map(function (o) {
        var v = typeof o === 'string' ? { value: o, label: o } : o;
        return h('label', { key: v.value, className: cx('ss-check', v.disabled && 'is-disabled') },
          h('input', { type: 'radio', name: name, value: v.value, checked: value === v.value, disabled: v.disabled, onChange: function () { s[1](v.value); if (props.onChange) props.onChange(v.value); } }),
          h('span', null, v.label));
      }));
  }
  function FileUpload(props) {
    var id = useId(props.id);
    var s = useState(props.files || []);
    var files = s[0];
    return h('div', { className: cx('ss-root ss-field', props.className) },
      props.label ? h('span', { className: 'ss-label' }, props.label, props.required ? h('span', { className: 'ss-req', 'aria-hidden': 'true' }, '*') : null) : null,
      h('div', { className: 'ss-drop' },
        h('div', { className: 'ss-drop-ico' }, h(Icon, { name: 'upload', size: 20 })),
        h('div', null, h('strong', null, '파일을 끌어다 놓거나 '), h('label', { htmlFor: id, style: { color: 'var(--link)', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' } }, '찾아보기')),
        h('div', { className: 'ss-help' }, props.hint || 'PDF, JPG, PNG · 최대 10MB'),
        h('input', { id: id, type: 'file', className: 'ss-sr', accept: props.accept, multiple: props.multiple })),
      files.length ? h('ul', { className: 'ss-files' }, files.map(function (f, i) {
        return h('li', { key: f.name + i, className: 'ss-file' },
          h(Icon, { name: 'file', size: 18, style: { color: 'var(--ink-muted)' } }),
          h('span', { className: 'ss-file-name' }, f.name),
          f.size ? h('span', { className: 'ss-file-size ss-num' }, f.size) : null,
          h('button', { type: 'button', className: 'ss-tag-x', 'aria-label': f.name + ' 삭제', onClick: function () { s[1](files.filter(function (_, j) { return j !== i; })); } }, h(Icon, { name: 'x', size: 16 })));
      })) : null,
      props.helper ? h('div', { className: 'ss-help' }, props.helper) : null);
  }

  /* ---------- Status ---------- */
  function Badge(props) {
    var size = props.size || 'md';
    return h('span', { className: cx('ss-root ss-badge', 'ss-tone-' + (props.tone || 'neutral'), size !== 'md' && 'ss-badge-' + size, props.className) },
      props.icon ? h(Icon, { name: props.icon, size: size === 'sm' ? 12 : 14 }) : null, props.children);
  }
  var STATUS = {
    draft: ['neutral', '작성중'], pending: ['warning', '승인 대기'], approved: ['success', '승인'], rejected: ['danger', '반려'],
    'not-started': ['neutral', '수강 전'], 'in-progress': ['info', '학습 중'], completed: ['success', '수료'], incomplete: ['danger', '미이수'],
    due: ['warning', '마감'], present: ['success', '출석'], late: ['warning', '지각'], 'early-leave': ['warning', '조퇴'], absent: ['danger', '결석'],
    recruiting: ['info', '모집중'], closed: ['neutral', '모집 마감'], ongoing: ['collab', '진행중'], done: ['neutral', '종료'], expiring: ['warning', '만료 임박'], expired: ['danger', '만료']
  };
  function StatusBadge(props) {
    var s = STATUS[props.status] || STATUS.draft;
    var label = props.children || s[1];
    var extra = props.status === 'due' && props.dday != null ? h('span', { className: 'ss-num' }, 'D-' + props.dday) : null;
    return h(Badge, { tone: s[0], size: props.size, className: props.className }, label, extra);
  }
  var TYPES = { required: ['required', '필수'], elective: ['info', '선택'], collab: ['collab', '협업'], external: ['neutral', '외부교육'], legal: ['required', '법정'] };
  function TypeTag(props) {
    var t = TYPES[props.type] || TYPES.elective;
    return h(Badge, { tone: t[0], size: props.size || 'sm', className: cx('ss-type', 'ss-type-' + (TYPES[props.type] ? props.type : 'elective'), props.className) }, props.children || t[1]);
  }
  function Tag(props) {
    if (props.static) return h('span', { className: cx('ss-root ss-tag is-static', props.className) }, props.children);
    var rest = omit(props, ['selected', 'onRemove', 'className', 'children', 'static']);
    return h('button', Object.assign({ type: 'button', 'aria-pressed': props.onRemove ? undefined : !!props.selected }, rest, { className: cx('ss-root ss-tag', props.selected && 'is-selected', props.className) }),
      props.children,
      props.onRemove ? h('span', { className: 'ss-tag-x', role: 'button', 'aria-label': '제거', onClick: function (e) { e.stopPropagation(); props.onRemove(); } }, h(Icon, { name: 'x', size: 14 })) : null);
  }
  function ProgressBar(props) {
    var v = Math.max(0, Math.min(100, props.value || 0));
    var tone = props.tone || (v >= 100 ? 'success' : null);
    return h('div', { className: cx('ss-root', props.className) },
      props.label ? h('div', { className: 'ss-progress-label' }, h('span', null, props.label), props.caption ? h('span', null, props.caption) : null) : null,
      h('div', { className: cx('ss-progress', props.size === 'sm' && 'ss-progress-sm') },
        h('div', { className: 'ss-progress-track', role: 'progressbar', 'aria-valuenow': v, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': props.label || '진도율' },
          h('div', { className: cx('ss-progress-fill', tone && 'is-' + tone), style: { width: v + '%' } })),
        props.showValue === false ? null : h('span', { className: 'ss-progress-value ss-num' }, Math.round(v) + '%')));
  }
  function ApprovalSteps(props) {
    var steps = props.steps || [];
    var cur = props.current || 0;
    return h('ol', { className: cx('ss-root ss-steps', props.className) }, steps.map(function (st, i) {
      var state = i < cur ? 'is-done' : (i === cur ? (props.rejected ? 'is-rejected' : 'is-current') : 'is-todo');
      var mark = i < cur ? h(Icon, { name: 'check', size: 14, strokeWidth: 2.5 }) : (i === cur && props.rejected ? h(Icon, { name: 'x', size: 14, strokeWidth: 2.5 }) : h('span', { className: 'ss-num' }, i + 1));
      return h('li', { key: i, className: cx('ss-step', state), 'aria-current': i === cur ? 'step' : undefined },
        h('span', { className: 'ss-step-dot' }, mark),
        h('span', { className: 'ss-step-label' }, st.label),
        st.meta ? h('span', { className: 'ss-step-meta' }, st.meta) : null);
    }));
  }

  /* ---------- Feedback ---------- */
  var TONE_ICON = { info: 'info', success: 'check-circle', warning: 'alert', danger: 'x-circle' };
  function Banner(props) {
    var tone = props.tone || 'info';
    return h('div', { role: tone === 'danger' ? 'alert' : 'status', className: cx('ss-root ss-banner', 'ss-banner-' + tone, props.className) },
      h(Icon, { name: TONE_ICON[tone], size: 18 }),
      h('div', { className: 'ss-banner-body' }, props.title ? h('div', { className: 'ss-banner-title' }, props.title) : null, props.children ? h('p', null, props.children) : null),
      props.action ? h('div', { className: 'ss-banner-action' }, props.action) : null);
  }
  function Toast(props) {
    var tone = props.tone || 'success';
    return h('div', { role: 'status', className: cx('ss-root ss-toast', props.className) },
      h('span', { className: cx('ss-toast-icon', 'is-' + tone) }, h(Icon, { name: TONE_ICON[tone], size: 18 })),
      h('span', null, props.children),
      props.actionLabel ? h('button', { type: 'button', className: 'ss-toast-action', onClick: props.onAction }, props.actionLabel) : null);
  }
  function Modal(props) {
    var titleId = useId();
    if (props.open === false) return null;
    return h('div', { className: cx('ss-root ss-overlay', props.inline && 'is-inline'), onClick: function (e) { if (e.target === e.currentTarget && props.onClose) props.onClose(); } },
      h('div', { className: 'ss-modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId, style: props.width ? { maxWidth: props.width } : null },
        h('div', { className: 'ss-modal-head' }, h('h2', { id: titleId }, props.title), h(IconButton, { icon: 'x', label: '닫기', onClick: props.onClose })),
        h('div', { className: 'ss-modal-body' }, props.children),
        props.footer ? h('div', { className: 'ss-modal-foot' }, props.footer) : null));
  }
  function EmptyState(props) {
    return h('div', { className: cx('ss-root ss-empty', props.className) },
      h(GridHub, { icon: props.icon || 'book', tone: 'neutral', width: 320, height: 128, size: 48, lit: 3, seed: 5, className: 'ss-empty-hub' }),
      h('h3', null, props.title),
      props.description ? h('p', null, props.description) : null,
      props.action || null);
  }

  /* ---------- Navigation ---------- */
  function Header(props) {
    var menus = props.menus || ['나의 학습', '온라인 과정', '함께 배우는 학습', '나의 성장 기록'];
    return h('header', { className: cx('ss-root ss-gnb', props.className) },
      h('a', { className: 'ss-gnb-logo', href: props.homeHref || '#', 'aria-label': '상상이상 홈' }, h('b', null, '상상이상'), h('span', null, 'MiCo School')),
      h('nav', { 'aria-label': '주 메뉴', style: { flex: 1, minWidth: 0 } },
        h('ul', { className: 'ss-gnb-menu' }, menus.map(function (m) { return h('li', { key: m }, h('a', { href: '#', 'aria-current': m === props.active ? 'page' : undefined }, m)); }))),
      h('div', { className: 'ss-gnb-right' },
        h('span', { className: 'ss-gnb-lang' }, props.lang || 'KOR'),
        h(IconButton, { icon: 'search', label: '통합 검색' }),
        h(IconButton, { icon: 'bell', label: '알림', dot: props.unread }),
        h('span', { className: 'ss-gnb-user' }, h(Avatar, { name: props.userName || '김미코', size: 32 }), props.userName || '김미코')));
  }
  function SideNav(props) {
    return h('nav', { className: cx('ss-root ss-sidenav', props.className), 'aria-label': props.label || '관리 메뉴' }, (props.sections || []).map(function (sec, i) {
      return h('div', { key: i },
        sec.title ? h('h4', null, sec.title) : null,
        h('ul', null, sec.items.map(function (it) {
          return h('li', { key: it.label }, h('a', { href: '#', 'aria-current': it.active ? 'page' : undefined }, h('span', null, it.label), it.count ? h('span', { className: 'ss-count', 'aria-label': it.count + '건' }, it.count) : null));
        })));
    }));
  }
  function Breadcrumb(props) {
    var items = props.items || [];
    return h('nav', { 'aria-label': '현재 위치', className: cx('ss-root', props.className) },
      h('ol', { className: 'ss-crumb' },
        h('li', null, h('a', { href: '#', 'aria-label': '홈' }, h(Icon, { name: 'home', size: 15 }))),
        items.map(function (it, i) {
          var last = i === items.length - 1;
          return h('li', { key: i }, h(Icon, { name: 'chevron-right', size: 14 }), last ? h('span', { 'aria-current': 'page' }, it) : h('a', { href: '#' }, it));
        })));
  }
  function Tabs(props) {
    var items = props.items || [];
    var s = useState(props.defaultValue || (items[0] && items[0].id));
    var value = props.value !== undefined ? props.value : s[0];
    return h('div', { role: 'tablist', className: cx('ss-root ss-tabs', props.className) }, items.map(function (t) {
      return h('button', { key: t.id, type: 'button', role: 'tab', className: 'ss-tab', 'aria-selected': value === t.id ? 'true' : 'false', onClick: function () { s[1](t.id); if (props.onChange) props.onChange(t.id); } },
        t.label, t.count != null ? h('span', { className: 'ss-tab-count' }, t.count) : null);
    }));
  }
  function Pagination(props) {
    var total = props.total || 1;
    var s = useState(props.page || 1);
    var page = s[0];
    function go(p) { if (p < 1 || p > total) return; s[1](p); if (props.onChange) props.onChange(p); }
    var nums = [];
    var start = Math.max(1, Math.min(page - 2, total - 4)), end = Math.min(total, start + 4);
    if (start > 1) { nums.push(1); if (start > 2) nums.push('gap1'); }
    for (var i = start; i <= end; i++) nums.push(i);
    if (end < total) { if (end < total - 1) nums.push('gap2'); nums.push(total); }
    return h('nav', { 'aria-label': '페이지', className: cx('ss-root ss-pagination', props.className) },
      h('button', { type: 'button', className: 'ss-page', 'aria-label': '이전 페이지', disabled: page <= 1, onClick: function () { go(page - 1); } }, h(Icon, { name: 'chevron-left', size: 16 })),
      nums.map(function (n) {
        if (typeof n === 'string') return h('span', { key: n, className: 'ss-page-gap' }, '…');
        return h('button', { key: n, type: 'button', className: 'ss-page', 'aria-current': n === page ? 'page' : undefined, onClick: function () { go(n); } }, n);
      }),
      h('button', { type: 'button', className: 'ss-page', 'aria-label': '다음 페이지', disabled: page >= total, onClick: function () { go(page + 1); } }, h(Icon, { name: 'chevron-right', size: 16 })));
  }

  /* ---------- Data ---------- */
  function DataTable(props) {
    var cols = props.columns || [];
    var rows = props.rows || [];
    return h('div', { className: cx('ss-root ss-table-wrap', props.className) },
      h('table', { className: 'ss-table' },
        props.caption ? h('caption', { className: 'ss-sr' }, props.caption) : null,
        h('thead', null, h('tr', null,
          props.selectable ? h('th', { className: 'is-center', style: { width: 48 } }, h(Checkbox, { 'aria-label': '전체 선택' })) : null,
          cols.map(function (c) { return h('th', { key: c.key, className: c.align ? 'is-' + c.align : null, style: c.width ? { width: c.width } : null, scope: 'col' }, c.title); }))),
        h('tbody', null, rows.map(function (r, i) {
          return h('tr', { key: r.id || i },
            props.selectable ? h('td', { className: 'is-center' }, h(Checkbox, { 'aria-label': '행 선택' })) : null,
            cols.map(function (c) { return h('td', { key: c.key, className: c.align ? 'is-' + c.align : null }, r[c.key]); }));
        }))));
  }
  function StatTile(props) {
    var dir = props.delta == null ? null : (props.delta >= 0 ? 'up' : 'down');
    return h('div', { className: cx('ss-root ss-stat', props.className) },
      h('div', { className: 'ss-stat-label' }, props.label),
      h('div', { className: 'ss-stat-value' }, h('span', { className: 'ss-num' }, props.value), props.unit ? h('span', { className: 'ss-stat-unit' }, props.unit) : null),
      dir ? h('div', { className: cx('ss-stat-delta', 'is-' + dir) }, h(Icon, { name: dir === 'up' ? 'trend-up' : 'trend-down', size: 14 }), h('span', { className: 'ss-num', style: { margin: 0, color: 'inherit', fontWeight: 700 } }, (props.delta > 0 ? '+' : '') + props.delta + (props.deltaUnit || '%p')), h('span', null, props.deltaLabel || '전월 대비')) : null);
  }
  function Avatar(props) {
    var size = props.size || 40;
    var initial = (props.name || '?').slice(-2);
    return h('span', { className: cx('ss-root ss-avatar', props.className), style: { width: size, height: size, fontSize: Math.round(size * 0.36) }, role: 'img', 'aria-label': props.name },
      props.src ? h('img', { src: props.src, alt: '' }) : initial);
  }
  var NOTI = { deadline: '학습 마감', approval: '승인 완료', rejected: '반려', invite: '협업 초대', badge: '배지 발급', expiry: '자격 만료', notice: '공지' };
  function NotificationItem(props) {
    return h('a', { href: props.href || '#', className: cx('ss-root ss-noti', props.unread && 'is-unread', props.className) },
      h('span', { className: 'ss-node', 'aria-hidden': 'true' }),
      h('span', { className: 'ss-noti-body' },
        h('span', { className: 'ss-noti-meta' }, h('b', null, props.category || NOTI[props.type] || '알림'), h('span', { className: 'ss-num' }, props.time)),
        h('span', { className: 'ss-noti-title' }, props.title)),
      props.unread ? h('span', { className: 'ss-sr' }, '읽지 않음') : null);
  }

  /* ---------- Learning ---------- */
  function CourseThumb(props) {
    var p = props.progress, done = p != null && p >= 100;
    return h('div', { className: 'ss-thumb' },
      props.thumbnail ? h('img', { src: props.thumbnail, alt: props.thumbnailAlt || '', loading: 'lazy' })
        : h('div', { className: 'ss-thumb-fallback' }, h(GridPattern, { width: 352, height: 218, cell: 32, fade: 'left', seed: props.seed || (props.title || '').length, lit: 4 }), h('span', { className: 'ss-thumb-mark' }, h(Icon, { name: props.icon || 'book', size: 22 }))),
      p != null ? h('div', { className: 'ss-thumb-progress', 'aria-hidden': 'true' }, h('i', { className: done ? 'is-done' : null, style: { width: Math.min(100, p) + '%' } })) : null);
  }
  function courseCta(props) {
    if (props.ctaLabel) return props.ctaLabel;
    if (props.status === 'completed') return '수료증 보기';
    if (props.progress == null || props.progress === 0) return '학습 시작';
    return '이어서 학습';
  }
  function CourseCard(props) {
    var p = props.progress;
    var done = p != null && p >= 100;
    var badges = h('div', { className: 'ss-card-top' }, h(TypeTag, { type: props.type }), props.status ? h(StatusBadge, { status: props.status, dday: props.dday, size: 'sm' }) : null);
    var meta = h('div', { className: 'ss-card-meta' },
      props.period ? h('span', null, h(Icon, { name: 'calendar', size: 16 }), props.period) : null,
      props.hours ? h('span', null, h(Icon, { name: 'clock', size: 16 }), props.hours) : null);

    if (props.layout === 'list') {
      var cta = courseCta(props);
      return h('article', { className: cx('ss-root ss-course-row', props.className) },
        h(CourseThumb, props),
        h('div', { className: 'ss-row-main' },
          badges,
          h('h3', { className: 'ss-row-title' }, h('a', { href: props.href || '#' }, props.title)),
          props.summary ? h('p', { className: 'ss-row-summary' }, props.summary) : null,
          meta),
        h('div', { className: 'ss-row-side' },
          p != null
            ? h('div', { className: 'ss-row-progress' },
                h('div', { className: 'ss-row-progress-head' }, h('span', null, '진도율'), h('span', { className: cx('ss-num', done && 'is-done') }, Math.round(p) + '%')),
                h('div', { className: 'ss-progress-track', role: 'progressbar', 'aria-valuenow': p, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': '진도율' }, h('div', { className: cx('ss-progress-fill', done && 'is-success'), style: { width: Math.min(100, p) + '%' } })))
            : h('div', { className: 'ss-row-progress' }, h('div', { className: 'ss-row-progress-head' }, h('span', null, '진도율'), h('span', { className: 'ss-row-empty' }, '시작 전'))),
          h(Button, { variant: done ? 'outline' : (p == null || p === 0 ? 'primary' : 'secondary'), size: 'sm', block: true, iconRight: done ? null : 'arrow-right' }, cta)));
    }

    return h('a', { href: props.href || '#', className: cx('ss-root ss-card ss-course', props.className) },
      h(CourseThumb, props),
      h('div', { className: 'ss-course-body' },
        badges,
        h('h3', { className: 'ss-card-title' }, props.title),
        h('div', { className: 'ss-course-meta' }, meta,
          p != null ? h('span', { className: cx('ss-course-pct ss-num', done && 'is-done') }, Math.round(p) + '%') : null)));
  }
  var CHECKIN = { present: ['success', 'check', '출석 완료'], late: ['warning', 'clock', '지각 처리'], 'early-leave': ['warning', 'clock', '조퇴 처리'], absent: ['danger', 'x', '결석'] };
  function CheckInCard(props) {
    var r = CHECKIN[props.result] || CHECKIN.present;
    return h('div', { className: cx('ss-root ss-checkin', props.className), role: 'status' },
      h('div', { className: 'ss-checkin-hero' },
        h(GridHub, { icon: r[1], tone: r[0], width: 360, height: 168, size: 64, lit: 5, seed: props.seed || 3 }),
        h('span', { className: 'ss-checkin-stamp ss-num' }, props.stamp || 'MiCo School · CHECK-IN')),
      h('div', { className: 'ss-ticket-cut', 'aria-hidden': 'true' }),
      h('div', { className: 'ss-checkin-body' },
        h('h3', null, props.heading || r[2]),
        h(StatusBadge, { status: props.result || 'present' }),
        h('div', { className: 'ss-checkin-time' }, props.time),
        h('dl', null,
          h('dt', null, '과정'), h('dd', null, props.course),
          h('dt', null, '차수'), h('dd', null, props.session),
          h('dt', null, '방식'), h('dd', null, props.method || 'QR 체크인'))));
  }
  function LearningCalendar(props) {
    var ym = (props.month || '2026-11').split('-');
    var y = +ym[0], m = +ym[1] - 1;
    var first = new Date(y, m, 1).getDay();
    var days = new Date(y, m + 1, 0).getDate();
    var prevDays = new Date(y, m, 0).getDate();
    var ev = {};
    (props.events || []).forEach(function (e) { var d = +e.date.split('-')[2]; (ev[d] = ev[d] || []).push(e.type); });
    var s = useState(props.selected || null);
    var cells = [];
    for (var i = 0; i < first; i++) cells.push({ d: prevDays - first + 1 + i, out: true });
    for (var d = 1; d <= days; d++) cells.push({ d: d });
    while (cells.length % 7) cells.push({ d: cells.length - first - days + 1, out: true });
    var dow = ['일', '월', '화', '수', '목', '금', '토'];
    return h('div', { className: cx('ss-root ss-cal', props.className) },
      h('div', { className: 'ss-cal-head' }, h('h3', null, y + '.' + (m + 1 < 10 ? '0' : '') + (m + 1)),
        h('div', { style: { display: 'flex' } }, h(IconButton, { icon: 'chevron-left', label: '이전 달' }), h(IconButton, { icon: 'chevron-right', label: '다음 달' }))),
      h('div', { className: 'ss-cal-grid' },
        dow.map(function (w, i) { return h('div', { key: w, className: cx('ss-cal-dow', i === 0 && 'is-sun') }, w); }),
        cells.map(function (c, i) {
          var types = c.out ? [] : (ev[c.d] || []);
          return h('button', { key: i, type: 'button', className: cx('ss-cal-day', c.out && 'is-out', !c.out && c.d === props.today && 'is-today', !c.out && c.d === s[0] && 'is-selected'), onClick: function () { if (!c.out) s[1](c.d); }, 'aria-label': c.out ? undefined : (m + 1) + '월 ' + c.d + '일' + (types.length ? ', 일정 ' + types.length + '건' : '') },
            h('span', null, c.d), h('span', { className: 'ss-cal-dots' }, types.slice(0, 3).map(function (t, j) { return h('i', { key: j, className: 'ss-ev-' + t }); })));
        })),
      h('div', { className: 'ss-cal-legend' },
        h('span', null, h('i', { className: 'ss-ev-deadline' }), '학습 마감'),
        h('span', null, h('i', { className: 'ss-ev-live' }), '라이브 세션'),
        h('span', null, h('i', { className: 'ss-ev-workshop' }), '워크숍')));
  }
  var MISSION_TAG = { deadline: ['warning', '마감 임박'], required: ['required', '필수'], gap: ['info', '역량 Gap'], collab: ['collab', '협업'] };
  function MissionList(props) {
    var s = useState((props.missions || []).map(function (x) { return !!x.done; }));
    var done = s[0].filter(Boolean).length;
    return h('section', { className: cx('ss-root ss-mission', props.className), 'aria-label': props.title || '오늘의 미션' },
      h('div', { className: 'ss-mission-head' }, h(Icon, { name: 'sparkle', size: 20, className: 'ss-ai' }), h('h3', null, props.title || '오늘의 미션'),
        h('span', { className: 'ss-mission-count' }, h('b', null, done), ' / ' + (props.missions || []).length)),
      h('ul', null, (props.missions || []).map(function (ms, i) {
        var tag = MISSION_TAG[ms.kind] || MISSION_TAG.gap;
        return h('li', { key: i, className: s[0][i] ? 'is-done' : null },
          h('input', { type: 'checkbox', checked: s[0][i], 'aria-label': ms.title + ' 완료', onChange: function () { var n = s[0].slice(); n[i] = !n[i]; s[1](n); }, style: { width: 18, height: 18, accentColor: 'var(--primary)' } }),
          h('div', { className: 'ss-mission-text' }, h('span', { className: 'ss-mission-title' }, ms.title), ms.why ? h('span', { className: 'ss-mission-why' }, ms.why) : null),
          h(Badge, { tone: tag[0], size: 'sm' }, tag[1]));
      })));
  }
  var FEED = { learnfit: ['info', '맞춤 과정'], openlab: ['collab', 'Open Lab'], mentor: ['success', '멘토 추천'], cop: ['collab', '학습 동아리'], required: ['required', '필수 교육'] };
  function FeedCard(props) {
    var k = FEED[props.kind] || FEED.learnfit;
    return h('article', { className: cx('ss-root ss-card', props.className) },
      h('div', { className: 'ss-eyebrow' }, h('span', { className: cx('ss-node ss-node-sm', 'is-' + k[0]), 'aria-hidden': 'true' }), props.kindLabel || k[1]),
      h('h3', { className: 'ss-card-title' }, props.title),
      props.description ? h('p', { className: 'ss-feed-desc' }, props.description) : null,
      props.reason ? h('div', { className: 'ss-why' }, h(Icon, { name: 'sparkle', size: 14 }), h('span', null, h('b', null, '추천 이유 '), props.reason)) : null,
      h('div', { className: 'ss-card-foot' }, h('div', { className: 'ss-card-meta' }, props.meta || null), props.cta ? h(Button, { variant: 'secondary', size: 'sm', iconRight: 'arrow-right' }, props.cta) : null));
  }

  /* ---------- Co-Lab ---------- */
  function OpenLabCard(props) {
    var cap = props.capacity || 0, n = props.members || 0;
    var seats = []; for (var i = 0; i < cap; i++) seats.push(h('i', { key: i, className: i < n ? 'is-on' : null }));
    return h('a', { href: props.href || '#', className: cx('ss-root ss-card', props.className) },
      h('div', { className: 'ss-card-top' }, h(TypeTag, { type: 'collab' }, 'Open Lab'), h(StatusBadge, { status: props.status || 'recruiting', size: 'sm' }), props.dday != null ? h(Badge, { tone: 'warning', size: 'sm' }, '모집 ', h('span', { className: 'ss-num' }, 'D-' + props.dday)) : null),
      h('h3', { className: 'ss-card-title' }, props.title),
      h('div', { className: 'ss-card-meta' }, h('span', null, h(Icon, { name: 'user', size: 16 }), props.owner)),
      props.skills ? h('div', { className: 'ss-skills', 'aria-label': '필요 역량' }, props.skills.map(function (s) { return h(Tag, { key: s, static: true }, s); })) : null,
      h('div', { className: 'ss-card-foot' }, h('div', { className: 'ss-seats' }, h('div', { className: 'ss-seats-bar', 'aria-hidden': 'true' }, seats), h('span', null, '참여 ', h('b', { className: 'ss-num' }, n), ' / ', h('span', { className: 'ss-num' }, cap)))));
  }
  function PersonCard(props) {
    return h('article', { className: cx('ss-root ss-card ss-person', props.className) },
      h(Avatar, { name: props.name, src: props.src, size: 48 }),
      h('div', { className: 'ss-person-body' },
        h('div', { className: 'ss-person-name' }, h('b', null, props.name), h('span', null, props.org)),
        props.skills ? h('div', { className: 'ss-skills' }, props.skills.map(function (s) { return h(Tag, { key: s, static: true }, s); })) : null,
        props.reason ? h('div', { className: 'ss-why' }, h(Icon, { name: 'sparkle', size: 14 }), h('span', null, h('b', null, '매칭 이유 '), props.reason)) : null,
        props.cta ? h('div', null, h(Button, { variant: 'outline', size: 'sm', icon: 'message' }, props.cta)) : null),
      props.match != null ? h('div', { className: 'ss-match' }, h('span', { className: 'ss-num' }, props.match + '%'), h('small', null, '매칭')) : null);
  }

  /* ---------- My Growth ---------- */
  function SkillRadar(props) {
    var axes = props.axes || [];
    var max = props.max || 5, size = props.size || 280, c = size / 2, rad = size / 2 - 44;
    var W = size + 120, cxp = W / 2;
    var n = axes.length || 1;
    function pt(i, v) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; var r = rad * v / max; return [cxp + r * Math.cos(a), c + r * Math.sin(a)]; }
    function poly(key) { return axes.map(function (ax, i) { return pt(i, ax[key]).join(','); }).join(' '); }
    var rings = []; for (var k = 1; k <= max; k++) { rings.push(h('polygon', { key: 'g' + k, className: 'grid', points: axes.map(function (_, i) { return pt(i, k).join(','); }).join(' ') })); }
    var axesEls = axes.map(function (ax, i) { var e = pt(i, max); return h('line', { key: 'a' + i, className: 'axis', x1: cxp, y1: c, x2: e[0], y2: e[1] }); });
    var labels = axes.map(function (ax, i) {
      var p = pt(i, max + 0.75); var anchor = Math.abs(p[0] - cxp) < 4 ? 'middle' : (p[0] > cxp ? 'start' : 'end');
      return h('g', { key: 'l' + i }, h('text', { className: 'lbl', x: p[0], y: p[1], textAnchor: anchor, dominantBaseline: 'middle' }, ax.label),
        h('text', { className: 'val', x: p[0], y: p[1] + 15, textAnchor: anchor, dominantBaseline: 'middle' }, ax.value.toFixed(1)));
    });
    var dots = axes.map(function (ax, i) { var p = pt(i, ax.value); return h('circle', { key: 'p' + i, className: 'pt', cx: p[0], cy: p[1], r: 3.5 }); });
    var desc = axes.map(function (a) { return a.label + ' ' + a.value + '/' + a.target; }).join(', ');
    return h('section', { className: cx('ss-root ss-chart ss-radar', props.className) },
      h('div', { className: 'ss-chart-head' }, h('h3', null, props.title || '3차원 학습 DNA'),
        h('div', { className: 'ss-legend' }, h('span', null, h('i', { className: 'is-cur' }), '현재'), h('span', null, h('i', { className: 'is-target' }), '목표'))),
      h('svg', { width: W, height: size + 8, viewBox: '0 -4 ' + W + ' ' + (size + 8), role: 'img', 'aria-label': '역량 레이더 차트: ' + desc },
        rings, axesEls, h('polygon', { className: 'target', points: poly('target') }), h('polygon', { className: 'cur', points: poly('value') }), dots, labels));
  }
  function GapBars(props) {
    var max = props.max || 5;
    var items = props.items || [];
    return h('section', { className: cx('ss-root ss-chart', props.className) },
      h('div', { className: 'ss-chart-head' }, h('h3', null, props.title || '역량 Gap'),
        h('div', { className: 'ss-legend' }, h('span', null, h('i', { className: 'is-cur' }), '현재 수준'), h('span', null, h('i', { className: 'is-target', style: { width: 2, height: 12, borderTop: 0, background: 'var(--navy-500)' } }), '목표'))),
      h('ul', { className: 'ss-gap' }, items.map(function (it) {
        var gap = Math.round((it.current - it.target) * 10) / 10;
        return h('li', { key: it.label },
          h('span', { className: 'ss-gap-label', title: it.label }, it.label),
          h('div', { className: 'ss-gap-track', role: 'img', 'aria-label': it.label + ' 현재 ' + it.current + ', 목표 ' + it.target },
            h('div', { className: 'ss-gap-cur', style: { width: (it.current / max * 100) + '%' } }),
            h('div', { className: 'ss-gap-target', style: { left: 'calc(' + (it.target / max * 100) + '% - 1px)' } })),
          h('span', { className: cx('ss-gap-val', gap >= 0 && 'is-met') }, gap >= 0 ? '충족' : gap.toFixed(1)));
      })),
      h('div', { className: 'ss-gap-scale', 'aria-hidden': 'true' }, h('span'), h('div', null, h('span', null, '0'), h('span', null, '1'), h('span', null, '2'), h('span', null, '3'), h('span', null, '4'), h('span', null, '5')), h('span')));
  }
  var TL = { course: '수강', assess: '평가', collab: '협업', mentoring: '멘토링', badge: '배지', external: '외부교육' };
  function ActivityTimeline(props) {
    return h('ol', { className: cx('ss-root ss-timeline', props.className) }, (props.items || []).map(function (it, i) {
      return h('li', { key: i, className: 'ss-tl-item' },
        h('span', { className: 'ss-tl-date' }, it.date),
        h('span', { className: 'ss-tl-rail' }, h('span', { className: cx('ss-node', i === 0 && 'is-live') })),
        h('span', { className: 'ss-tl-body' }, h('span', { className: 'ss-tl-kind' }, TL[it.kind] || '활동'), h('span', { className: 'ss-tl-title' }, it.title), it.meta ? h('span', { className: 'ss-tl-meta' }, it.meta) : null));
    }));
  }

  var api = {
    GridPattern: GridPattern, GridHub: GridHub, PageHeader: PageHeader,
    Button: Button, IconButton: IconButton, Icon: Icon, TextField: TextField, Select: Select, SearchBar: SearchBar, Checkbox: Checkbox, RadioGroup: RadioGroup, FileUpload: FileUpload,
    Badge: Badge, StatusBadge: StatusBadge, TypeTag: TypeTag, Tag: Tag, ProgressBar: ProgressBar, ApprovalSteps: ApprovalSteps,
    Banner: Banner, Toast: Toast, Modal: Modal, EmptyState: EmptyState,
    Header: Header, SideNav: SideNav, Breadcrumb: Breadcrumb, Tabs: Tabs, Pagination: Pagination,
    DataTable: DataTable, StatTile: StatTile, Avatar: Avatar, NotificationItem: NotificationItem,
    CourseCard: CourseCard, CheckInCard: CheckInCard, LearningCalendar: LearningCalendar, MissionList: MissionList, FeedCard: FeedCard,
    OpenLabCard: OpenLabCard, PersonCard: PersonCard, SkillRadar: SkillRadar, GapBars: GapBars, ActivityTimeline: ActivityTimeline
  };
  window.Sangsang = Object.assign(window.Sangsang || {}, api);
})();
