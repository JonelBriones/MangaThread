const FAKE_DATA_PROFILE = {
  user: "ijonel906",
  id: 906,
  icon: "https://lh3.googleusercontent.com/ogw/AF2bZyguZwD8JOe52YGQuoTJ4azrOXJukSvFq2a391Y9=s32-c-mo",

  mode: true,
  threads: [
    {
      id: 0,
      manga: "Dragonball",
      text: "My favorite managa ever!!!  assumenda hic temporibus commodi maiores eius suscipit estnobis deleniti accusamus quidem, pariatur aut sunt eos. Lorem loremwgwighwg wgwiqhgqwih ",
      replies: [
        {
          user: "Toriyama",
          comment: "Thank you!!",
        },
      ],
      likes: ["Toriyama", "Josh"],
    },
    {
      id: 1,
      manga: "One Piece",
      text: "FIND THE TREASURE!!!",
      likes: ["Toriyama", "Josh"],
      // replies: [
      //   {
      //     user: "Toriyama",
      //     comment: "Thank you!!",
      //   },
      // ],
    },
    {
      id: 204,
      manga: "Bleach",
      text: "My favorite managa ever!!!  assumenda hic temporibus commodi maiores eius suscipit estnobis  ",
      replies: [
        {
          user: "Toriyama",
          comment: "Thank you!!",
        },
      ],
      likes: ["Toriyama"],
    },
    {
      id: 10,
      manga: "Nisekoi",
      text: "My favorite managa ever!!!  assumenda hic temporibus commodi maiores eius suscipit estnobis deleniti accusamus quidem, pariatur ",
      replies: [
        {
          user: "Toriyama",
          comment: "Thank you!!",
        },
      ],
      likes: ["Toriyama", "Josh", "Paul", "Tam"],
    },
  ],
};
const FAKE_DATA_USERS = [
  {
    user: "JOSH",
    id: 4242,
    icon: "https://lh3.googleusercontent.com/ogw/AF2bZyguZwD8JOe52YGQuoTJ4azrOXJukSvFq2a391Y9=s32-c-mo",
  },
  {
    user: "Kim Chaewon",
    id: 902266266,
    icon: "data:image/jpeg;base64,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",
  },
  {
    user: "Jung Kook",
    id: 2626,
    icon: "https://variety.com/wp-content/uploads/2023/07/Variety_Jung-Kook-1-e1689281508873.jpg",
  },
];

const FAKE_DATA_MANGAS = [
  {
    title: "Dragonball",
    author: "Akira Toriyama",
    id: 111,
  },
  {
    title: "One Piece",
    author: "Echiro Oda",
    id: 333,
  },
  {
    title: "Oe Piece",
    author: "Echiro Oda",
    id: 444,
  },
  {
    title: "One Piec",
    author: "Echiro Oda",
    id: 255522,
  },
  {
    title: "One Pie",
    author: "Echiro Oda",
    id: 22632,
  },
  {
    title: "Oe ece",
    author: "Echiro Oda",
    id: 245,
  },
];
export { FAKE_DATA_MANGAS, FAKE_DATA_PROFILE, FAKE_DATA_USERS };
