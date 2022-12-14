import { RenderStyle } from '../const';

export const GENRES = [
  { id: 1, genre: 'Фольклор' },
  { id: 2, genre: 'Фольклор.Эпосы' },
  { id: 3, genre: 'Фольклор.Эпосы.Джангар' },
  { id: 4, genre: 'Фольклор.Эпосы.Гэсэр' },
  { id: 5, genre: 'Фольклор.Сказки' },
  { id: 6, genre: 'Фольклор.Поэмы' },
  { id: 7, genre: 'Фольклор.Песни' },
  { id: 8, genre: 'Поэзия' },
  { id: 9, genre: 'Поэзия.Дореволюционная_поэзия' },
  { id: 10, genre: 'Поэзия.Советская_поэзия' },
  { id: 11, genre: 'Поэзия.Современная_поэзия' },
  { id: 12, genre: 'Поэзия.Советские_песни' },
  { id: 13, genre: 'Поэзия.Современные_песни' },
  { id: 14, genre: 'Религиозная_литература' },
  { id: 15, genre: 'Религиозная_литература.Буддийские_тексты' },
  { id: 16, genre: 'Религиозная_литература.Христианские_тексты' }
];

export const AUTHORS = [
  'Адучиев Ц.М.',
  'Алексеева П.Э.',
  'Амур-Санан А.М.',
  'Бадакова Т.И.',
  'Бадмаев А.Б.',
  'Бадмаев С.М.',
  'Байдыев С.Л.',
  'Балакаев А.Г.',
  'Балыков С.Б.',
  'Бамбаев В.Х.',
  'Басангов Б.Б.',
  'Басангова Т.Г.',
  'Басхаев А.Н.',
  'Бембеев Т.О.',
  'Боован К.В.',
  'Буджалов Е.А.',
  'Габуншина А.',
  'Гавраева С.',
  'Гучинова Э.'
];

export const BREADCRUMB = [
  { id: 500, title: 'Жанры' },
  { id: 501, title: 'Проза' },
  { id: 502, title: 'Грустная проза' },
  { id: 503, title: 'И немного былин' }
];

export const LiteratureCards = {
  renderStyle: RenderStyle.Cards,
  literatureItems: [
    {
      id: '1',
      title: 'Фольклор',
      picture: '../images/icon-folklore.png'
    },
    {
      id: '2',
      title: 'Поэзия',
      picture: '../images/icon-poetry.png'
    },
    {
      id: '3',
      title: 'Проза',
      picture: '../images/icon-prose.png'
    },
    {
      id: '4',
      title: 'Религиозная_литература',
      picture: '../images/icon-religion.png'
    }
  ]
};

export const LiteratureTable = {
  renderStyle: RenderStyle.Table,
  literatureItems: [
    {
      id: '122',
      title: 'Идиот',
      author: 'Достоевский Федор Михайлович',
      year: 1868
    },
    {
      id: '120',
      title: 'Преступление и наказание',
      author: 'Достоевский Федор Михайлович',
      year: 2016
    },
    {
      id: '121',
      title: 'Война и мир',
      author: 'Толстой Лев Николаевич',
      year: null
    },
    {
      id: '123',
      title: 'Трудно быть богом',
      author: 'Стругацкие Аркадий и Борис',
      year: 2030
    },
    {
      id: '124',
      title: 'Былины',
      author: null,
      year: null
    }
  ]
};
