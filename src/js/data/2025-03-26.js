dataSetVersion = "2021-01-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "groups",
    tooltip: "Check this to restrict to certain games.",
    checked: true,
    sub: [
	  { name: "Director Simulator", key: "DS"},
	  { name: "Five Hearts Under One Roof", key: "FHUOR"},
	  { name: "Hello Love: 18 Again", key: "HL18A"}, 
      { name: "Love is All Around", key: "LiAA" },
	  { name: "Love is All Around DLC", key: "LiAADLC"}
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  //LiAA
  {
    name: "",
    img: "4mSFkRZ.png",
    opts: 
	{
      groups: ["LiAA"]
    }
  },
  {
    name: "",
    img: "1ErBEOs.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "",
    img: "sQp6xrX.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "",
    img: "n1KgXdx.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "",
    img: "D0EeE0G.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "",
    img: "OExOGhf.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  //LiAA DLC
  {
    name: "",
    img: "4bbKWjk.png",
    opts: {
      groups: ["LiAADLC"]
    }
  },
  {
    name: "",
    img: "Ec4wWv3.png",
    opts: {
      groups: ["LiAADLC"]
    }
  },
  {
    name: "",
    img: "8UcfwBB.png",
    opts: {
      groups: ["LiAADLC"]
    }
  },
  //HL18A
  {
    name: "Su Xiaoxiao",
    img: "6DIkjKB.png",
    opts: {
      groups: ["HL18A"]
    }
  },
  {
    name: "Xu Jiajia",
    img: "6d5scqF.png",
    opts: {
      groups: ["HL18A"]
    }
  },
  {
    name: "Shen Mengxuan",
    img: "sG40OpX.png",
    opts: {
      groups: ["HL18A"]
    }
  },
  {
    name: "Lu Yue Ru",
    img: "quZXPCb.png",
    opts: {
      groups: ["HL18A"]
    }
  },
  {
    name: "Chu Yao",
    img: "lE8hxEU.png",
    opts: {
      groups: ["HL18A"]
    }
  },
  //DS
  {
    name: "",
    img: "E7wcAfl.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "",
    img: "jH413F1.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "",
    img: "tz3wsGz.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "",
    img: "43IMW0r.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "",
    img: "7Yg7P51.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "",
    img: "Xsj87La.png",
    opts: {
      groups: ["DS"]
    }
  },
  //FHUOR
  {
    name: "",
    img: "esDmbq0.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "",
    img: "7KEHYGB.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "",
    img: "sfFAo9g.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "",
    img: "Nt7mYTK.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "",
    img: "VCb0cwg.png",
    opts: {
      groups: ["FHUOR"]
    }
  }
]
