import { TcComponent, TcComponentProps } from './models';

const TfColors = [
  'primary',
  'error',
  'alarm',
  'success',
  'lightBlue',
  'darkBlue'
];
const apiAutoBackground: TcComponentProps = {
  name: 'autoBackground',
  type: 'boolean',
  values: [true, false]
};
const apiDark: TcComponentProps = {
  name: 'dark',
  type: 'boolean',
  values: [true, false]
};
const apiFrosted: TcComponentProps = {
  name: 'frosted',
  type: 'boolean',
  values: [true, false]
};
const apiFullColor: TcComponentProps[] = [
  {
    name: 'tfcolor',
    type: 'string',
    values: TfColors,
    default: 'primary'
  },
  {
    name: 'color',
    type: 'string'
  }
];
const apiFullBackground: TcComponentProps[] = [
  {
    name: 'tfbackground',
    type: 'string',
    values: TfColors
  },
  {
    name: 'background',
    type: 'string'
  }
];

const apiIcon: TcComponentProps = {
  name: 'icon',
  type: 'string'
};
const apiURLs: TcComponentProps[] = [
  {
    name: 'href',
    type: 'string'
  },
  {
    name: 'to',
    type: 'Route ({name: string})'
  },
  {
    name: 'routeName',
    type: 'string'
  },
  {
    name: '@click',
    type: 'function(event: MouseEvent)'
  }
];

export const tccomponents: TcComponent[] = [
  {
    name: 'tcInput',
    slots: [],
    props: [
      apiIcon,
      apiFrosted,
      apiDark,
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'buttons',
        type: 'boolean'
      },
      {
        name: 'width',
        type: 'string',
        default: 'full',
        values: ['full', 'fit-content']
      },
      {
        name: 'placeholder',
        type: 'string'
      },
      {
        name: 'filePlaceholder',
        type: 'string',
        default: 'Choose File'
      },
      {
        name: 'type',
        type: 'string',
        default: 'text'
      },
      {
        name: 'value',
        type: 'any',
        default: 'false'
      },
      { name: 'v-model', type: 'any' },
      {
        name: '@input',
        type: 'function'
      },
      {
        name: '@change',
        type: 'function'
      },
      {
        name: '@fileLoaded',
        type: 'function(value: string)'
      },
      {
        name: 'accept',
        type: 'string'
      },
      {
        name: 'autocomplete',
        type: 'string',
        values: ['on', 'off']
      },
      {
        name: 'autofocus',
        type: 'boolean'
      },
      {
        name: 'disabled',
        type: 'boolean'
      },
      {
        name: 'form',
        type: 'string'
      },
      {
        name: 'max',
        type: 'number | date'
      },
      {
        name: 'maxlength',
        type: 'number'
      },
      {
        name: 'min',
        type: 'number'
      },
      {
        name: 'minlength',
        type: 'number'
      },
      {
        name: 'multiple',
        type: 'boolean',
        values: [true, false]
      },
      {
        name: 'pattern',
        type: 'string'
      },
      {
        name: 'readonly',
        type: 'boolean'
      },
      {
        name: 'required',
        type: 'boolean'
      },
      {
        name: 'step',
        type: 'number',
        default: '1'
      }
    ]
  },
  {
    name: 'tcCard',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'subtitle',
        type: 'string'
      },
      {
        name: 'shadow',
        type: 'boolean',
        default: true,
        values: [true, false]
      },
      {
        name: 'rounded',
        type: 'boolean'
      },
      {
        name: 'hover',
        type: 'boolean',
        values: [true, false]
      },
      apiDark,
      apiFrosted,
      ...apiFullColor,
      ...apiFullBackground
    ],
    slots: ['header', 'media', 'default']
  },
  {
    name: 'tcDivider',
    props: [
      {
        name: 'name',
        type: 'String'
      },
      {
        name: 'position',
        type: 'String',
        values: ['left', 'center', 'right'],
        default: 'center'
      },
      apiIcon,
      ...apiFullColor,
      apiDark
    ],
    slots: []
  },
  {
    name: 'tcButton',
    props: [
      {
        name: 'name',
        type: 'string'
      },
      apiIcon,
      {
        name: 'iconPosition',
        type: 'string',
        values: ['left', 'right'],
        default: 'left'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        values: [true, false]
      },
      {
        name: 'variant',
        type: 'string',
        default: 'border',
        values: ['opaque', 'border', 'filled']
      },
      ...apiFullColor,
      ...apiFullBackground,
      ...apiURLs
    ],
    slots: []
  },
  {
    name: 'tcCheckbox',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'position',
        type: 'string',

        values: ['left', 'right'],
        default: 'left'
      },
      apiDark,
      {
        name: 'iconChecked',
        type: 'string'
      },
      {
        name: 'iconUnchecked',
        type: 'string'
      },
      {
        name: 'iconAnimation',
        type: 'string',

        values: ['step', 'spin', 'flip'],
        default: 'step'
      },
      ...apiFullColor,
      ...apiFullBackground,
      {
        name: 'value',
        type: 'boolean',
        default: false
      },
      { name: 'v-model', type: 'boolean' },
      {
        name: '@input',
        type: 'function'
      }
    ],
    slots: []
  },
  {
    name: 'tcLink',
    props: [...apiURLs],
    slots: ['default']
  },
  {
    name: 'tcModal',
    props: [
      apiDark,
      apiFrosted,
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'subtitle',
        type: 'string'
      },
      {
        name: 'value',
        type: 'boolean',

        default: false,
        values: [true, false]
      },
      { name: 'v-model', type: 'boolean' },
      {
        name: '@close',
        type: 'function'
      }
    ],
    slots: ['default', 'header', 'buttons']
  },
  {
    name: 'tcTabbar',
    props: [apiDark, apiAutoBackground, ...apiFullBackground, ...apiFullColor],
    slots: ['default']
  },
  {
    name: 'tcTabbarItem',
    props: [
      { ...apiIcon, default: 'house' },
      {
        name: 'title',
        default: 'Home',
        type: 'string'
      },
      ...apiURLs,
      ...apiFullColor
    ],
    slots: []
  },
  {
    name: 'tcTable',
    props: [
      {
        name: 'selectable',
        type: 'boolean',
        values: [true, false]
      },
      {
        name: 'multiSelect',
        type: 'boolean',
        values: [true, false]
      },
      {
        name: 'striped',
        type: 'boolean',
        values: [true, false]
      },
      {
        default: true,
        name: 'border',
        type: 'boolean',
        values: [true, false]
      },
      {
        name: 'v-model',
        type: 'object | object[]'
      },
      {
        name: '@sort',
        type: '{attribute: string, direction: number}'
      },
      apiDark
    ],
    slots: ['head', 'search', 'default']
  },
  {
    name: 'tcTr',
    props: [
      {
        name: 'data',
        type: 'object'
      },
      ...apiFullBackground
    ],
    slots: ['expander']
  },
  {
    name: 'tcTh',
    props: [
      {
        name: 'attribute',
        type: 'string'
      }
    ],
    slots: []
  },
  {
    name: 'tcTd',
    props: [...apiFullColor],
    slots: ['default']
  },
  {
    name: 'tcTableSearch',
    props: [
      {
        default: 'lens',
        name: 'icon',
        type: 'string'
      },
      {
        default: 'Search',
        name: 'placeholder',
        type: 'string'
      },
      {
        name: 'value',
        type: 'string'
      },
      { name: 'v-model', type: 'string' }
    ],
    slots: []
  },
  {
    name: 'tcScrollUp',
    props: [
      {
        name: 'variant',
        type: 'string',
        values: ['filled', 'border'],
        default: 'border'
      },
      {
        name: 'size',
        type: 'number',
        default: '45 (px)'
      },
      ...apiFullColor,
      ...apiFullBackground,
      apiIcon
    ],
    slots: []
  },
  {
    name: 'tcImage',
    props: [
      {
        name: 'src',
        type: 'string'
      },
      {
        name: 'fallback',
        type: 'string'
      }
    ],
    slots: []
  },
  {
    name: 'tcSwitch',
    props: [
      {
        name: 'value',
        type: 'any',
        default: 'false'
      },
      { name: 'v-model', type: 'boolean' },
      apiDark,
      ...apiFullColor
    ],
    slots: []
  },
  {
    name: 'tcSpinner',

    props: [
      {
        name: 'size',
        type: 'number',
        default: 50
      },
      {
        name: 'variant',
        type: 'string',
        values: [
          'bars',
          'bars-breath',
          'dots',
          'dots-breath',
          'dots-spin',
          'dots-wave'
        ],
        default: 'bars'
      },
      apiDark,
      ...apiFullColor
    ],
    slots: []
  },
  {
    name: 'tcHero',
    props: [
      {
        default: '200',
        name: 'height',
        type: 'number'
      },
      {
        default: 'px',
        name: 'unit',
        type: 'string'
      },
      {
        default: 'true',
        name: 'hasFixedHeader',
        type: 'boolean'
      },
      ...apiFullColor,
      ...apiFullBackground,
      {
        name: 'gradient',
        type: 'string'
      }
    ],
    slots: ['background', 'default']
  },
  {
    name: 'tcRevealer',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'highlight',
        type: 'string',
        default: 'primary'
      },
      apiIcon,
      apiDark,
      ...apiFullBackground,
      ...apiFullColor
    ],
    slots: ['default', 'head']
  },
  {
    name: 'tcProgress',
    props: [
      {
        name: 'percent',
        type: 'number',
        default: '0'
      },
      {
        name: 'type',
        type: 'string',
        default: 'bar',
        values: ['bar', 'ring']
      },
      ...apiFullColor,
      ...apiFullBackground,
      {
        name: 'barHeight',
        type: 'number',
        default: '4'
      },
      {
        name: 'ringSize',
        type: 'number',
        default: '70'
      },
      {
        name: 'ringWidth',
        type: 'number',
        default: '8'
      }
    ],
    slots: []
  },
  {
    name: 'tcQuote',
    props: [
      {
        name: 'title',
        type: 'String'
      },
      apiDark,
      ...apiFullColor
    ],
    slots: ['default', 'header']
  },
  {
    name: 'tcHeader',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      apiDark,
      {
        name: 'variant',
        type: 'string',

        values: ['fixed', 'floating', 'sticky'],
        default: 'fixed'
      },
      {
        name: 'top',
        type: 'number',

        default: '0 (if variant=floating +40)'
      },
      ...apiFullBackground,
      ...apiFullColor
    ],
    slots: ['button', 'title', 'default']
  },
  {
    name: 'tcHeaderButton',
    props: [
      {
        name: 'name',
        type: 'string',
        default: 'back'
      },
      { ...apiIcon, default: 'chevron-left' },
      ...apiURLs
    ],
    slots: []
  },
  {
    name: 'tcHeadline',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      apiIcon,
      apiDark
    ],
    slots: ['title', 'default']
  },
  {
    name: 'tcSegments',
    props: [
      {
        name: 'value',
        type: 'number',
        default: 0
      },
      {
        name: 'v-model',
        type: 'number'
      },
      apiDark,
      ...apiFullBackground,
      ...apiFullColor,
      {
        name: 'highlight',
        type: 'string'
      }
    ],
    slots: ['default']
  },
  {
    name: 'tcSegmentItem',
    props: [
      {
        name: 'title',
        type: 'string'
      }
    ],
    slots: ['default']
  },

  {
    name: 'tcSlider',
    props: [
      { default: 0, name: 'min', type: 'number' },
      {
        default: 100,
        name: 'max',
        type: 'number'
      },
      {
        default: 50,
        name: 'value',
        type: 'number'
      },
      { name: 'v-model', type: 'number' },
      ...apiFullBackground,
      ...apiFullColor,
      apiDark,
      {
        ...apiIcon,
        name: 'iconStart'
      },
      {
        ...apiIcon,
        name: 'iconEnd'
      }
    ],
    slots: []
  },
  {
    name: 'tcNavbar',
    props: [apiDark, apiAutoBackground, ...apiFullColor, ...apiFullBackground],
    slots: ['logo', 'actions', 'default']
  },
  {
    name: 'tcNavbarItem',
    props: [
      {
        name: 'name',
        type: 'string'
      },
      apiIcon,
      ...apiURLs,
      ...apiFullColor
    ],
    slots: []
  },
  {
    name: 'tcSelect',
    props: [
      { name: 'title', type: 'string' },
      { ...apiIcon, default: 'list' },
      apiFrosted,
      apiDark,
      {
        name: 'multiple',
        type: 'boolean',
        values: [true, false]
      },
      {
        default: 'Select one',
        name: 'placeholder',
        type: 'string'
      },
      {
        name: 'value',
        type: 'any | any[]'
      },
      {
        name: 'values',
        type: 'any[]'
      },
      {
        name: 'v-model',
        type: 'any | any[]'
      }
    ],
    slots: []
  },
  {
    name: 'tcTooltip',
    props: [
      {
        name: 'position',
        default: 'top',
        type: 'string',
        values: ['top', 'bottom', 'left', 'right']
      },
      {
        name: 'tooltip',
        default: '',
        type: 'string'
      },
      ...apiFullBackground
    ],
    slots: ['default']
  },
  {
    name: 'tcList',
    props: [
      apiDark,
      apiFrosted,
      ...apiFullColor,
      {
        name: 'title',
        type: 'string'
      }
    ],
    slots: ['default']
  },
  {
    name: 'tcListItem',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      ...apiURLs,
      apiIcon,
      {
        name: 'v-model',
        type: 'boolean'
      },
      {
        name: 'description',
        type: 'string'
      }
    ],
    slots: []
  },

  {
    name: 'tcSteps',
    props: [
      {
        name: 'current',
        type: 'number'
      },
      {
        name: 'direction',
        type: 'string',
        values: ['row', 'column'],
        default: 'row'
      },
      apiDark
    ],
    slots: ['default']
  },
  {
    name: 'tcStepItem',
    props: [
      {
        name: 'title',
        type: 'string'
      },
      apiIcon,
      {
        name: 'description',
        type: 'string'
      }
    ],
    slots: []
  },
  {
    name: 'tcBadge',
    props: [
      {
        name: 'value',
        type: 'string | number'
      },
      ...apiFullColor,
      {
        name: 'max',
        type: 'number'
      },
      {
        name: 'showEmpty',
        type: 'boolean'
      },
      {
        name: 'position',
        type: 'string',
        values: ['corner', 'behind', 'inside'],
        default: 'corner'
      }
    ],
    slots: ['default']
  },
  {
    name: 'tcAvatar',
    props: [
      {
        name: 'background',
        type: 'string',
        default: 'none'
      },
      {
        name: 'src',
        type: 'string'
      },
      {
        name: 'size',
        type: 'string',
        values: ['large', 'medium', 'small', 'tiny'],
        default: 'small'
      },
      {
        name: 'border',
        type: 'string',
        values: ['rounded', 'circle', 'square'],
        default: 'circle'
      }
    ],
    slots: []
  },
  {
    name: 'Textarea',
    props: [
      apiDark,
      apiFrosted,
      ...apiFullColor,
      { name: 'value', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'tooltip', type: 'string' },

      {
        name: 'autofocus',
        type: 'boolean',
        values: [true, false]
      },
      { name: 'cols', type: 'number' },
      { name: 'dirname', type: 'string' },
      {
        name: 'disabled',
        type: 'boolean',
        values: [true, false]
      },
      { name: 'form', type: 'string' },
      { name: 'maxlength', type: 'string' },
      { name: 'name', type: 'string' },
      {
        name: 'placeholder',
        type: 'string',

        default: 'Enter text'
      },
      {
        name: 'readonly',
        type: 'boolean',
        values: [true, false]
      },
      {
        name: 'required',
        type: 'boolean',
        values: [true, false]
      },
      { name: 'rows', type: 'string', default: 10 },
      { name: 'wrap', type: 'string' }
    ],
    slots: []
  },
  {
    name: 'tlGrid',
    props: [
      {
        default: '300',
        name: 'minWidth',
        type: 'number'
      },
      {
        default: '30',
        name: 'gap',
        type: 'number'
      },
      {
        default: 'auto-fit',
        name: 'arrangement',
        type: 'string',
        values: ['auto-fit', 'auto-fill']
      }
    ],
    slots: ['default']
  },
  {
    name: 'tlFlow',
    props: [
      {
        name: 'vertical',
        default: 'center',
        type: 'string',
        values: ['center', 'start', 'end']
      },
      {
        name: 'horizontal',
        default: 'center',
        type: 'string',
        values: ['center', 'space-between', 'space-around', 'start', 'end']
      },
      {
        name: 'flow',
        default: 'row',
        type: 'string',
        values: ['row', 'column']
      }
    ],
    slots: ['default']
  },
  {
    name: 'tlSidebar',
    props: [], // TODO:
    slots: ['default', 'sidebar-header', 'sidebar-content', 'sidebar-footer']
  }
];
