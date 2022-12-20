import { RenderType } from '../const';
import { Genre } from '../types/genre';

export const GENRES = [
  { id: 1, genre: 'Фольклор' },
  { id: 2, genre: 'Фольклор.Эпосы' },
  { id: 3, genre: 'Фольклор.Эпосы.Джангар' },
  { id: 4, genre: 'Фольклор.Эпосы.Гэсэр' },
  { id: 5, genre: 'Фольклор.Сказки' },
  { id: 6, genre: 'Фольклор.Поэмы' },
  { id: 7, genre: 'Фольклор.Песни' },
  { id: 8, genre: 'Поэзия' },
  { id: 9, genre: 'Поэзия.Дореволюционная поэзия' },
  { id: 10, genre: 'Поэзия.Советская поэзия' },
  { id: 11, genre: 'Поэзия.Современная поэзия' },
  { id: 12, genre: 'Поэзия.Советские песни' },
  { id: 13, genre: 'Поэзия.Современные песни' },
  { id: 14, genre: 'Религиозная литература' },
  { id: 15, genre: 'Религиозная литература.Буддийские тексты' },
  { id: 16, genre: 'Религиозная литература.Христианские тексты' }
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

export const BREADCRUMB: Genre[] = [
  { id: 0, genre: 'Жанры' },
  { id: 1, genre: 'Проза' },
  { id: 101, genre: 'Грустная проза' },
  { id: 201, genre: 'И немного былин' }
];

export const LiteratureCards = {
  renderStyle: RenderType.Cards,
  items: [
    {
      id: 1,
      title: 'Фольклор',
      picture: 'assets/icon-folklore.png'
    },
    {
      id: 2,
      title: 'Поэзия',
      picture: 'assets/icon-poetry.png'
    },
    {
      id: 3,
      title: 'Проза',
      picture: 'assets/icon-prose.png'
    },
    {
      id: 4,
      title: 'Религиозная литература',
      picture: 'assets/icon-religion.png'
    },
    {
      id: 5,
      title: 'Манга',
      picture: 'assets/icon-books.png'
    }
  ]
};

export const LiteratureTable = {
  renderStyle: RenderType.Table,
  page: 1,
  items: [
    {
      id: 122,
      title: 'Идиот',
      author: 'Достоевский Федор Михайлович',
      year: 1868
    },
    {
      id: 120,
      title: 'Преступление и наказание',
      author: 'Достоевский Федор Михайлович',
      year: 2016
    },
    {
      id: 121,
      title: 'Война и мир',
      author: 'Толстой Лев Николаевич',
      year: null
    },
    {
      id: 123,
      title: 'Трудно быть богом',
      author: 'Стругацкие Аркадий и Борис',
      year: 2030
    },
    {
      id: 124,
      title: 'Былины',
      author: null,
      year: null
    },
    {
      id: 125,
      title:
        'Жизнь, необыкновенные и удивительные приключения Робинзона Крузо, моряка из Йорка, прожившего 28 лет в полном одиночестве на необитаемом острове у берегов Америки близ устьев реки Ориноко, куда он был выброшен кораблекрушением, во время которого весь экипаж корабля, кроме него, погиб, с изложением его неожиданного освобождения пиратами; написанные им самим',
      author: 'Даниэль Дефо',
      year: 1719
    }
  ]
};

export const document = {
  id: 125,
  title: `Жизнь, необыкновенные и удивительные приключения Робинзона Крузо,
          моряка из Йорка, прожившего 28 лет в полном одиночестве на необитаемом
          острове у берегов Америки близ устьев реки Ориноко, куда он был
          выброшен кораблекрушением, во время которого весь экипаж корабля,
          кроме него, погиб, с изложением его неожиданного освобождения
          пиратами; написанные им самим`,
  author: 'Даниэль Дефо',
  year: 1719,
  body: `Глава №1

Термин

Однако термин а priori еще недостаточно определен, чтобы надлежащим образом обозначить весь смысл поставленного вопроса. В самом деле, обычно относительно некоторых знаний, выведенных из эмпирических источников, говорят, что мы способны или причастны к ним а priori потому, что мы выводим их не непосредственно из опыта, а из общего правила, которое, однако, само заимствовано нами из опыта. Так, о человеке, который подрыл фундамент своего дома, говорят: он мог а priori знать, что дом обвалится, иными словами, ему незачем было ждать опыта, т.е. когда дом действительно обвалится. Но хотя всякое наше познание и начинается с опыта, отсюда вовсе не следует, что оно целиком происходит из опыта. Вполне возможно, что даже наше опытное знание складывается из того, что мы воспринимаем посредством впечатлений, и из того, что наша собственная познавательная способность (только побуждаемая чувственными впечатлениями) дает от себя самой, причем это добавление мы отличаем от основного чувственного материала лишь тогда, когда продолжительное упражнение обращает на него наше внимание и делает нас способными к обособлению его.

Однако термин а priori еще недостаточно определен, чтобы надлежащим образом обозначить весь смысл поставленного вопроса. В самом деле, обычно относительно некоторых знаний, выведенных из эмпирических источников, говорят, что мы способны или причастны к ним а priori потому, что мы выводим их не непосредственно из опыта, а из общего правила, которое, однако, само заимствовано нами из опыта. Так, о человеке, который подрыл фундамент своего дома, говорят: он мог а priori знать, что дом обвалится, иными словами, ему незачем было ждать опыта, т.е. когда дом действительно обвалится. Но хотя всякое наше познание и начинается с опыта, отсюда вовсе не следует, что оно целиком происходит из опыта. Вполне возможно, что даже наше опытное знание складывается из того, что мы воспринимаем посредством впечатлений, и из того, что наша собственная познавательная способность (только побуждаемая чувственными впечатлениями) дает от себя самой, причем это добавление мы отличаем от основного чувственного материала лишь тогда, когда продолжительное упражнение обращает на него наше внимание и делает нас способными к обособлению его.`
};
