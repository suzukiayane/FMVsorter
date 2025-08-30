dataSetVersion = "2025-08-30"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "groups",
    tooltip: "Check this to restrict to certain games.",
    checked: true,
    sub: [
	  { name: "Charming Hearts", key: "CH"},	
	  { name: "Director Simulator", key: "DS"},
	  { name: "Don't Fool Me, Beauties!", key: "DFMB"},
	  { name: "Drive Me Crazy", key: "DMC"},	  
	  { name: "Exclusive Memory", key: "EM"},
	  { name: "Five Hearts Under One Roof", key: "FHUOR"},
	  { name: "Game of Fate", key: "GoF"},
	  { name: "Game of Fate 2", key: "GoF2"},
	  { name: "Half Billion: Love Choice", key: "HBLC"},
	  { name: "Hello Love: 18 Again", key: "HL18A"},
	  { name: "I've Fallen for You!", key: "IFfY"},
	  { name: "Knowledge, or Know Lady", key: "KoKL"},
	  { name: "Love Begins With Goodbye", key: "LBwG"},	  
      { name: "Love is All Around", key: "LiAA" },
	  { name: "Love is All Around DLC", key: "LiAADLC"},
	  { name: "Master of Love", key: "MoL"},
	  { name: "My Destiny Girls", key: "MDG"},
	  { name: "My love with the Girls Group", key: "MlwtGG"},
	  { name: "Rebirth! New Lover", key: "RNL"},
	  { name: "Secrets of the Heartbeat", key: "SotH"},
	  { name: "Superscout", key: "Scout"},
	  { name: "Taipei Dream", key: "TD"},
	  { name: "Vanity Fair: The Pursuit", key: "VFTP"}	  
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  //LiAA
  {
    name: "Zheng Ziyan",
    img: "4mSFkRZ.png",
    opts: 
	{
      groups: ["LiAA"]
    }
  },
  {
    name: "Zhong Zhen",
    img: "1ErBEOs.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "Shen Huixin",
    img: "sQp6xrX.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "Xiao Lu",
    img: "n1KgXdx.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "Lin Yueqin",
    img: "D0EeE0G.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  {
    name: "Li Yunsi",
    img: "OExOGhf.png",
    opts: {
      groups: ["LiAA"]
    }
  },
  //LiAA DLC
  {
    name: "Yan Jianing",
    img: "4bbKWjk.png",
    opts: {
      groups: ["LiAADLC"]
    }
  },
  {
    name: "Xia Tian",
    img: "Ec4wWv3.png",
    opts: {
      groups: ["LiAADLC"]
    }
  },
  {
    name: "Chen Sai",
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
    name: "Ye Wen",
    img: "E7wcAfl.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "Ouyang Lu",
    img: "jH413F1.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "Su Yimo",
    img: "tz3wsGz.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "Lin Xiyan",
    img: "43IMW0r.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "Gu Meng",
    img: "7Yg7P51.png",
    opts: {
      groups: ["DS"]
    }
  },
  {
    name: "Jiang Zhiwan",
    img: "Xsj87La.png",
    opts: {
      groups: ["DS"]
    }
  },
  //Five Hearts Under one Roof
  {
    name: "Min-jung Park",
    img: "esDmbq0.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "Eun-bi Go",
    img: "7KEHYGB.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "Seung-yi Jo",
    img: "sfFAo9g.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "Mal-sook Go",
    img: "Nt7mYTK.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  {
    name: "Gran Dong",
    img: "VCb0cwg.png",
    opts: {
      groups: ["FHUOR"]
    }
  },
  //CH
  {
    name: "Hu Luoyi",
    img: "vgefCZ2.png",
    opts: {
      groups: ["CH"]
    }
  },
  {
    name: "Shang Youya",
    img: "NcvzTYH.png",
    opts: {
      groups: ["CH"]
    }
  },
  {
    name: "Shen Tang",
    img: "t4mUG92.png",
    opts: {
      groups: ["CH"]
    }
  },
  {
    name: "Tian Yuning",
    img: "JveSjmu.png",
    opts: {
      groups: ["CH"]
    }
  },
  {
    name: "Xiang Wan",
    img: "mAw5ETO.png",
    opts: {
      groups: ["CH"]
    }
  },
  {
    name: "Xu Yanran",
    img: "6DLNDkW.png",
    opts: {
      groups: ["CH"]
    }
  },
  //Exclusive Memory  
  {
    name: "Chen Wanning",
    img: "2hnaOJo.png",
    opts: {
      groups: ["EM"]
    }
  },
  {
    name: "Ji Anna",
    img: "mPVHymY.png",
    opts: {
      groups: ["EM"]
    }
  },
  {
    name: "Meng Xin",
    img: "0o6xLTg.png",
    opts: {
      groups: ["EM"]
    }
  },
  {
    name: "Qian Shu",
    img: "quWR94e.png",
    opts: {
      groups: ["EM"]
    }
  },
  {
    name: "Wu Bingyu",
    img: "xPQdu9H.png",
    opts: {
      groups: ["EM"]
    }
  },
  {
    name: "Zhao Yawen",
    img: "A5ZdzHD.png",
    opts: {
      groups: ["EM"]
    }
  },
  //Game of Fate
  {
    name: "Cheng Linqiang",
    img: "Wt7idAt.png",
    opts: {
      groups: ["GoF"]
    }
  },
  {
    name: "Gu Siqi",
    img: "FCcIfpd.png",
    opts: {
      groups: ["GoF"]
    }
  },
  {
    name: "Cheng Linwei",
    img: "1Tv3P9y.png",
    opts: {
      groups: ["GoF"]
    }
  },
  {
    name: "Jiang Man",
    img: "o0jOl7y.png",
    opts: {
      groups: ["GoF"]
    }
  },
  {
    name: "Qiu Shuya",
    img: "7mEvESp.png",
    opts: {
      groups: ["GoF"]
    }
  },
  //Game of Fate 2
  {
    name: "Cheng Yuesheng",
    img: "DSxDHIZ.png",
    opts: {
      groups: ["GoF2"]
    }
  },
  {
    name: "Fang Zhilian",
    img: "KwEFwqN.png",
    opts: {
      groups: ["GoF2"]
    }
  },
  {
    name: "Gu Xinfan",
    img: "G4ob4mw.png",
    opts: {
      groups: ["GoF2"]
    }
  },
  {
    name: "Ye Kui",
    img: "dZQ2OXW.png",
    opts: {
      groups: ["GoF2"]
    }
  },
  {
    name: "Yoko Nakamura",
    img: "sNM07uf.png",
    opts: {
      groups: ["GoF2"]
    }
  },
  //I've Fallen For You!
  {
    name: "Yu Anxia",
    img: "fVFy6Kp.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Jiang Mi",
    img: "mkjEQOc.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Kawase Nana",
    img: "XE9HkdD.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Selina",
    img: "AwUk1Y9.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Song Jing",
    img: "BRqGrqY.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Tracy",
    img: "ddkPN1B.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Wang Yichen",
    img: "9PTYAVc.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  {
    name: "Xu Xingqing",
    img: "PMiVhaf.png",
    opts: {
      groups: ["IFfY"]
    }
  },
  //Master of Love
  {
    name: "Han Yoori",
    img: "WEpx3K9.png",
    opts: {
      groups: ["MoL"]
    }
  },
  {
    name: "Jeong Hana",
    img: "n0jrNSh.png",
    opts: {
      groups: ["MoL"]
    }
  },
  {
    name: "Lee Runa",
    img: "xdhJhHo.png",
    opts: {
      groups: ["MoL"]
    }
  },
  {
    name: "Rahee",
    img: "u1wfsKY.png",
    opts: {
      groups: ["MoL"]
    }
  },
  {
    name: "Yoon Yiso",
    img: "arNVW2b.png",
    opts: {
      groups: ["MoL"]
    }
  },
  //My Destiny Girls
  {
    name: "Gui Sihan",
    img: "Wm4rzJ5.png",
    opts: {
      groups: ["MDG"]
    }
  },
  {
    name: "He Yuxiao",
    img: "sEbn4SF.png",
    opts: {
      groups: ["MDG"]
    }
  },
  {
    name: "Lisa",
    img: "Ad77Zrh.png",
    opts: {
      groups: ["MDG"]
    }
  },
  {
    name: "Lu Xiaoyue",
    img: "vEZFlzw.png",
    opts: {
      groups: ["MDG"]
    }
  },
  {
    name: "Shao Na",
    img: "QOchSbm.png",
    opts: {
      groups: ["MDG"]
    }
  },
  {
    name: "Zhuang Shiying",
    img: "D5c91Rd.png",
    opts: {
      groups: ["MDG"]
    }
  },
  //Rebirth New Lover
  {
    name: "Gu Qiuhan",
    img: "m9PGDOB.png",
    opts: {
      groups: ["RNL"]
    }
  },
  {
    name: "Lin Miaoxian",
    img: "GSuuaJ5.png",
    opts: {
      groups: ["RNL"]
    }
  },
  {
    name: "Mingyue Rao",
    img: "mUTlvu7.png",
    opts: {
      groups: ["RNL"]
    }
  },
  {
    name: "Qing'er",
    img: "tWiCwJW.png",
    opts: {
      groups: ["RNL"]
    }
  },
  {
    name: "Xiaobai",
    img: "POsI60Q.png",
    opts: {
      groups: ["RNL"]
    }
  },
  //Superscout
  {
    name: "Duoduo",
    img: "cy1DrHu.png",
    opts: {
      groups: ["Scout"]
    }
  },
  {
    name: "Lin Jia",
    img: "DvYjhqZ.png",
    opts: {
      groups: ["Scout"]
    }
  },
  {
    name: "Lin Qian'er",
    img: "xrJp2HC.png",
    opts: {
      groups: ["Scout"]
    }
  },
  {
    name: "Tang Xiaolan",
    img: "0gSSYtR.png",
    opts: {
      groups: ["Scout"]
    }
  },
  {
    name: "Ye Shu",
    img: "yfMQw1L.png",
    opts: {
      groups: ["Scout"]
    }
  },
  {
    name: "Zhou Yang",
    img: "OD4SGHp.png",
    opts: {
      groups: ["Scout"]
    }
  },
  //Vanity Fair
  {
    name: "Gao Tingyu",
    img: "HUfEiJq.png",
    opts: {
      groups: ["VFTP"]
    }
  },
  {
    name: "Guan Haiyue",
    img: "dwIQMY2.png",
    opts: {
      groups: ["VFTP"]
    }
  },
  {
    name: "He Xiaomeng",
    img: "RbfY6Al.png",
    opts: {
      groups: ["VFTP"]
    }
  },
  {
    name: "Hemu",
    img: "xGZDFLh.png",
    opts: {
      groups: ["VFTP"]
    }
  },
  {
    name: "Nina",
    img: "7Vd8Kks.png",
    opts: {
      groups: ["VFTP"]
    }
  },
  {
    name: "Zhang Peng",
    img: "1WOEIew.png",
    opts: {
      groups: ["VFTP"]
    }
  },
  //Drive Me Crazy
  {
    name: "Cindy",
    img: "OF2fY9B.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Jialin Jiang",
    img: "3xbZViI.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Jingrui Cao",
    img: "fkUpL3b.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Kana Mikami",
    img: "OfGFvhv.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Ling Zhong",
    img: "xIwvyfc.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Meng Xia",
    img: "5rfCG6B.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Niannian Shen",
    img: "Uri2pEw.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Qing Dai",
    img: "bENo8L2.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "Siyu An",
    img: "QVOCZbC.png",
    opts: {
      groups: ["DMC"]
    }
  },
  {
    name: "You Qing",
    img: "7FO35I9.png",
    opts: {
      groups: ["DMC"]
    }
  },
  //Knowledge, or Know Lady  
  {
    name: "Ada Ouyang",
    img: "8GtvWnB.png",
    opts: {
      groups: ["KoKL"]
    }
  },
  {
    name: "Avril Lin",
    img: "yf4PnZr.png",
    opts: {
      groups: ["KoKL"]
    }
  },
  {
    name: "Leah Bai",
    img: "PLObcX9.png",
    opts: {
      groups: ["KoKL"]
    }
  },
  {
    name: "Nico",
    img: "m9PGeIV.png",
    opts: {
      groups: ["KoKL"]
    }
  },
  {
    name: "Nikita Xiao",
    img: "7e3Ohr0.png",
    opts: {
      groups: ["KoKL"]
    }
  },
  {
    name: "Serena Wen",
    img: "PaU2Z77.png",
    opts: {
      groups: ["KoKL"]
    }
  },
  //Secrets of the Heartbeat
  {
    name: "Dong Dong",
    img: "CILflrf.png",
    opts: {
      groups: ["SotH"]
    }
  },
  {
    name: "Le Le",
    img: "kcdJsBz.png",
    opts: {
      groups: ["SotH"]
    }
  },
  {
    name: "Qi Li",
    img: "LxMrlA8.png",
    opts: {
      groups: ["SotH"]
    }
  },
  {
    name: "You Jia",
    img: "N85QX5t.png",
    opts: {
      groups: ["SotH"]
    }
  },
  // Taipei Dream  
  {
    name: "Meng Ying",
    img: "P5UCGk0.png",
    opts: {
      groups: ["TD"]
    }
  },
  {
    name: "Xia Ri",
    img: "Fzu6Y5m.png",
    opts: {
      groups: ["TD"]
    }
  },
  {
    name: "Ye Zi",
    img: "FEIhu2W.png",
    opts: {
      groups: ["TD"]
    }
  },
  {
    name: "Zhi Xin",
    img: "GVSPOHE.png",
    opts: {
      groups: ["TD"]
    }
  },
  {
    name: "Zhong Yuan",
    img: "pyWVYWx.png",
    opts: {
      groups: ["TD"]
    }
  },
  //Half Billion: Love Choice  
  {
    name: "Chu Xiao",
    img: "gLQblI8.png",
    opts: {
      groups: ["HBLC"]
    }
  },
  {
    name: "Haruno",
    img: "BhXHY7r.png",
    opts: {
      groups: ["HBLC"]
    }
  },
  {
    name: "Jie Shen",
    img: "d94tGxB.png",
    opts: {
      groups: ["HBLC"]
    }
  },
  {
    name: "Lynn",
    img: "5zXoTkx.png",
    opts: {
      groups: ["HBLC"]
    }
  },
  {
    name: "Shiyu Ji",
    img: "8RbS5lh.png",
    opts: {
      groups: ["HBLC"]
    }
  },
  {
    name: "Yue Yang",
    img: "XCH2RZW.png",
    opts: {
      groups: ["HBLC"]
    }
  },
  //My love with the Girls Group
  {
    name: "Eunbi",
    img: "ruiFfV6.png",
    opts: {
      groups: ["MlwtGG"]
    }
  },
  {
    name: "Hye Rin",
    img: "8dImPVQ.png",
    opts: {
      groups: ["MlwtGG"]
    }
  },
  {
    name: "JJ",
    img: "Tzu9klw.png",
    opts: {
      groups: ["MlwtGG"]
    }
  },
  {
    name: "Moka",
    img: "fBeobD2.png",
    opts: {
      groups: ["MlwtGG"]
    }
  },
  {
    name: "Nari",
    img: "SSUYmav.png",
    opts: {
      groups: ["MlwtGG"]
    }
  },
  {
    name: "Yeonjae",
    img: "v1rgvqN.png",
    opts: {
      groups: ["MlwtGG"]
    }
  },
  //Don't Fool Me, Beauties!  
  {
    name: "Ah-young",
    img: "EFtuHhh.png",
    opts: {
      groups: ["DFMB"]
    }
  },
  {
    name: "Bit-na",
    img: "ENLjcXr.png",
    opts: {
      groups: ["DFMB"]
    }
  },
  {
    name: "Ga-Eun",
    img: "QqnyYvw.png",
    opts: {
      groups: ["DFMB"]
    }
  },
  {
    name: "Ji-woo",
    img: "oJNXqnN.png",
    opts: {
      groups: ["DFMB"]
    }
  },
  //Love Begins with Goodbye
  {
    name: "Enola",
    img: "PEFwUIa.png",
    opts: {
      groups: ["LBwG"]
    }
  },
  {
    name: "Leah",
    img: "i1B70OF.png",
    opts: {
      groups: ["LBwG"]
    }
  },
  {
    name: "Luo Xue'er",
    img: "K82noPB.png",
    opts: {
      groups: ["LBwG"]
    }
  },
  {
    name: "Zhenguo Yu",
    img: "woN8MFZ.png",
    opts: {
      groups: ["LBwG"]
    }
  }
]
