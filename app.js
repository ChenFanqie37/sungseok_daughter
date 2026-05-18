const STORAGE_KEY = "chengshuo-daughter-simulator:v1";

const stages = {
  baby: "0 岁 · 呱呱坠地",
  toddler: "1-3 岁 · 牙牙学语",
  kindergarten: "4-6 岁 · 幼儿园",
  primarySchool: "7-12 岁 · 小学",
  middleSchool: "13-15 岁 · 青春期",
  highSchool: "16-18 岁 · 选择前夜",
  adult: "19 岁+ · 成年终章"
};

const statLabels = [
  ["security", "家庭安全感"],
  ["sungchan", "成灿亲密"],
  ["eunseok", "银硕亲密"],
  ["parentLove", "父母甜度"],
  ["independence", "独立值"],
  ["talent", "才艺/事业"],
  ["uncleCare", "叔叔团宠"],
  ["fanBlessing", "粉丝祝福"],
  ["privacy", "隐私保护"]
];

const contacts = [
  { id: "family", name: "成硕家今日也和平", short: "家", type: "group" },
  { id: "sungchan", name: "郑成灿爸爸", short: "灿", type: "single" },
  { id: "eunseok", name: "宋银硕爹地", short: "硕", type: "single" },
  { id: "shotaro", name: "Shotaro 叔叔", short: "太", type: "single" },
  { id: "wonbin", name: "Wonbin 叔叔", short: "元", type: "single" },
  { id: "sohee", name: "Sohee 叔叔", short: "熙", type: "single" },
  { id: "anton", name: "Anton 叔叔", short: "灿", type: "single" }
];

const phoneApps = [
  { id: "kkt", label: "KKT", icon: "K", color: "sun" },
  { id: "gallery", label: "相册", icon: "相", color: "mint" },
  { id: "memory", label: "回忆", icon: "忆", color: "coral" },
  { id: "fanwall", label: "祝福墙", icon: "祝", color: "blue" },
  { id: "diary", label: "日记", icon: "记", color: "lilac" },
  { id: "calendar", label: "日历", icon: "18", color: "cream" }
];

const agents = {
  sungchan: {
    name: "郑成灿（Sungchan）家庭版父亲 Agent",
    role: "直球保护型爸爸",
    style: "外放、温暖、保护欲强，常把爱变成具体行动。青春期时先担心，但会很快放软语气。"
  },
  eunseok: {
    name: "宋银硕（Eunseok）家庭版父亲 Agent",
    role: "清冷反差型爹地",
    style: "短句、冷幽默、细节型关心，嘴上淡定但行动很宠。"
  },
  shotaro: {
    name: "大崎将太郎（Shotaro）叔叔 Agent",
    role: "温柔舞蹈叔叔",
    style: "稳定、会倾听、轻声鼓励，不强迫。"
  },
  wonbin: {
    name: "朴元彬（Wonbin）叔叔 Agent",
    role: "嘴硬酷叔叔",
    style: "短句、有艺术感，偶尔毒舌但不伤人，懂青春期的孤独。"
  },
  sohee: {
    name: "李炤熙（Sohee）叔叔 Agent",
    role: "明亮主唱叔叔",
    style: "活泼、会哄人，像家庭气氛担当。"
  },
  anton: {
    name: "李灿荣（Anton）叔叔 Agent",
    role: "安静创作叔叔",
    style: "慢、温柔、带一点笨拙，适合聊作品、语言、远方和选择。"
  },
  family: {
    name: "FamilyGroupAgent",
    role: "成硕家庭群",
    style: "用家庭群碎片回复，包含父母和叔叔们的自然接话。"
  }
};

const memories = [
  {
    id: "M01",
    title: "练习室门口的第一瓶水",
    source: "旧相册 + Shotaro 叔叔转述",
    tag: "行动型照顾",
    condition: "完成练习室小枕头",
    content: "年轻时郑成灿练到很晚，宋银硕路过时把水放在门边，便利贴只写了两个字：喝掉。成灿后来才发现字迹，开始留意这个看起来冷淡、却把所有细节放在心上的人。"
  },
  {
    id: "M02",
    title: "雨夜便利店",
    source: "粉丝考古帖 + 父母私聊残片",
    tag: "笨拙偏伞",
    condition: "小学后解锁",
    content: "行程结束后的雨夜，两个人在便利店门口等车。成灿把伞偏向银硕那边，自己的肩膀湿了一半。银硕看了很久才说：你肩膀湿了。成灿笑得像终于被看见。"
  },
  {
    id: "M03",
    title: "出道前夜",
    source: "家庭纪录片片段",
    tag: "被看见",
    condition: "完成小学后台探班",
    content: "灯关以后，成灿躺在练习室地板上说怕自己做得不够好。银硕沉默很久，最后只说：你已经做了很多。那句话后来被成灿反复提起，像一盏不刺眼但一直亮着的灯。"
  },
  {
    id: "M04",
    title: "第一次公开牵手",
    source: "新闻截图 + 粉丝祝福墙",
    tag: "公开祝福",
    condition: "完成纪念日事件",
    content: "平行世界里，他们第一次在正式场合并肩牵手。现场先是安静，随后掌声一点点铺满场馆。你后来看到那张照片，才明白自己出生前，爱也曾经需要勇气。"
  },
  {
    id: "M05",
    title: "家里第一张餐桌",
    source: "相册 + 银硕备忘录",
    tag: "从恋人到家庭",
    condition: "完成幼儿园家长日",
    content: "成灿坚持买很大的餐桌，说以后成员来、家人来、小孩来都坐得下。银硕嘴上说浪费空间，后来却把桌角防撞条贴得最认真。"
  },
  {
    id: "M06",
    title: "你出生前的凌晨",
    source: "父母私聊残片",
    tag: "成为父亲前",
    condition: "完成出生公告",
    content: "成灿发了很长一串：我会不会做不好爸爸。银硕只回：会紧张说明你会认真做。后来这句话被截图保存，藏在旧手机最深的相册里。"
  },
  {
    id: "M07",
    title: "第一次因为育儿吵架",
    source: "旧手机语音转文字",
    tag: "修复",
    condition: "完成深夜厨房谈心",
    content: "成灿想把你所有事都亲手包办，银硕觉得他太紧绷。那天厨房的灯亮到很晚，最后银硕说：她需要的是两个稳定的大人，不是两个抢着牺牲的人。"
  },
  {
    id: "M08",
    title: "十年纪念日采访",
    source: "采访视频文字版",
    tag: "长期陪伴",
    condition: "成年礼解锁",
    content: "主持人问彼此最像什么。成灿说银硕像家里的灯，不亮得刺眼，但一直在。银硕说成灿像门口的伞，下雨时总是先撑起来。"
  }
];

const episodes = [
  {
    id: "EP01",
    age: 0,
    stage: "baby",
    title: "出生公告：今天家里多了一个小小的人",
    location: "医院清晨",
    body: "清晨的医院走廊还带着消毒水和暖气混在一起的味道。你躺在浅色小被子里，听不懂世界，却能感觉到两道视线一直落在你身上。郑成灿抱你的姿势僵硬得像刚学会使用手臂，嘴里反复小声确认：这样可以吗，会不会压到她。宋银硕坐在旁边，声音淡淡地让他别把你吵醒，可他自己的眼睛也没有离开过你。KKT 家庭群从第一张照片发出去后就没有安静过，叔叔们抢着说要当第一个抱你的人，粉丝祝福墙也被公司放出的平行世界家庭公告点亮。你来到这个家，不是秘密，也不是负担，而是被很多人一起等来的小小答案。",
    basePhone: [
      message("family", "郑成灿爸爸", "她刚才握住我手指了。真的握住了。"),
      message("family", "宋银硕爹地", "你已经重复三遍。"),
      message("family", "Sohee 叔叔", "我要当第一个唱生日歌的人！"),
      album("第一张全家福", "0 岁", "医院窗边。成灿爸爸眼睛红红的，银硕爹地把小被角压得很平。", "soft-coral"),
      fan("布栗子_春天版", "公开祝福的家庭设定也太温柔了，愿小朋友一辈子被爱包围。"),
      calendar("出生纪念日", "每年今天，家里要拍一张全家福。")
    ],
    unlockMemories: ["M06"],
    choices: [
      {
        id: "A",
        text: "抓住成灿爸爸的手指",
        effects: { security: 8, sungchan: 10, parentLove: 3 },
        outcome: "你的手指只是本能地收紧了一下，郑成灿却像被世界正式任命成了爸爸。他压低声音说：她选我了。宋银硕看了他一眼，没有拆穿，只把你的帽檐往上拨了拨。",
        phone: [message("sungchan", "郑成灿爸爸", "小手好小，可是力气很大。爸爸记住了。")]
      },
      {
        id: "B",
        text: "听银硕爹地哼歌睡着",
        effects: { security: 8, eunseok: 10, parentLove: 3 },
        outcome: "宋银硕没有说自己会唱摇篮曲，只是把声音放得很低。你在那一点稳定的音调里睡着，郑成灿在旁边用气声说：你看，她喜欢你的声音。",
        phone: [message("eunseok", "宋银硕爹地", "睡得很稳。看来今天可以少紧张一点。")]
      },
      {
        id: "C",
        text: "被叔叔们围观",
        effects: { security: 5, uncleCare: 12, fanBlessing: 4 },
        outcome: "叔叔们隔着玻璃排成一排，像一场安静又滑稽的探班。Shotaro 最先放轻动作，Sohee 忍不住比了个无声的加油，Wonbin 拿手机拍下成灿手忙脚乱的样子，Anton 小声说：她好像在听我们说话。",
        phone: [message("family", "Wonbin 叔叔", "成灿哥抱娃姿势：需要排练。")]
      }
    ]
  },
  {
    id: "EP02",
    age: 2,
    stage: "toddler",
    title: "第一句话战争",
    location: "客厅地毯",
    body: "你学会扶着沙发边缘站起来以后，家里最幼稚的比赛也开始了。郑成灿每天趴在你面前，一遍遍教你说成灿爸爸，语气郑重得像在录舞台开场。宋银硕表面上完全不参与，甚至会路过时吐槽他幼稚，可晚上给你盖被子的时候，他会把灯调暗，慢慢重复银硕爸爸四个字。叔叔们在家庭群里下注，Shotaro 说不要给孩子压力，Sohee 说不如先教她叫叔叔，Wonbin 说你们都输给零食的概率比较大。你还不知道语言会让大人这么紧张，只觉得每次咿咿呀呀时，两位爸爸都会停下所有事看向你。",
    basePhone: [
      message("family", "Shotaro 叔叔", "今天不要比赛了，让她慢慢来。"),
      message("family", "郑成灿爸爸", "我没有比赛，我只是科学教育。"),
      message("family", "宋银硕爹地", "科学输给幼稚了。"),
      diary("今天他们一直看着我。我说了一点点声音，家里就像过节。")
    ],
    choices: [
      {
        id: "A",
        text: "先叫成灿爸爸",
        effects: { sungchan: 9, parentLove: 4, security: 4 },
        outcome: "成灿爸爸愣了两秒，随后把你抱起来转了半圈，又怕你晕，立刻停住。银硕爹地低头笑了一下，嘴上说吵，手却已经打开相机。",
        phone: [message("sungchan", "郑成灿爸爸", "她叫我了。今天开始我可以靠这句话活一周。")]
      },
      {
        id: "B",
        text: "先叫银硕爹地",
        effects: { eunseok: 9, parentLove: 4, security: 4 },
        outcome: "银硕爹地的表情变化很小，只是把你抱得更稳了一点。成灿爸爸在旁边假装受伤，最后还是第一个把这段视频发进家庭群。",
        phone: [message("eunseok", "宋银硕爹地", "视频我保存了。你爸说他没有哭，可信度不高。")]
      },
      {
        id: "C",
        text: "叫出模糊的“爸”",
        effects: { security: 8, sungchan: 5, eunseok: 5 },
        outcome: "你只发出一个含糊的音节，两位爸爸却同时安静下来。那一刻比赛失去意义，他们低头看着你，像第一次意识到自己真的被一个小孩需要。",
        phone: [message("family", "Anton 叔叔", "她赢了。两个爸爸同时输了。")]
      }
    ]
  },
  {
    id: "EP03",
    age: 3,
    stage: "toddler",
    title: "练习室小枕头",
    location: "RIIZE 练习室",
    body: "回归期的练习室灯总是亮得很晚。你被安置在镜墙角落的小垫子上，旁边有水杯、软毯和银硕爹地提前检查过三次的备用衣服。音乐响起时，地板会轻轻震动，你听见运动鞋摩擦地面的声音，也看见成灿爸爸练完一遍就跑过来摸摸你的额头。银硕爹地嘴上说他这样会打断节奏，却在你翻身时第一个蹲下来把毯子拉好。叔叔们经过你身边都会下意识放低脚步，像这间练习室忽然多了一个所有人共同守护的秘密基地。",
    basePhone: [
      album("练习室小枕头", "3 岁", "镜墙角落的一小块软垫。旁边有贴着名字的水杯。", "soft-mint"),
      message("family", "Shotaro 叔叔", "她刚才跟着节拍拍手了，很准。"),
      fan("成硕考古bot", "从练习室到家庭相册，这个家把陪伴两个字过成了日常。")
    ],
    unlockMemories: ["M01"],
    choices: [
      {
        id: "A",
        text: "醒来跟着拍手",
        effects: { talent: 8, uncleCare: 5, security: 4 },
        outcome: "你睡醒后对着镜子里的队形拍手，节奏意外地准。Shotaro 叔叔笑着蹲下来教你一个很小的动作，成灿爸爸在旁边立刻说我们家小孩有天赋。",
        phone: [message("shotaro", "Shotaro 叔叔", "今天的节奏感很好。下次教你更可爱的动作。")]
      },
      {
        id: "B",
        text: "哭着找爸爸",
        effects: { security: 7, sungchan: 5, eunseok: 5, privacy: 3 },
        outcome: "音乐停下的一瞬间，成灿爸爸已经冲到你面前。银硕爹地没有多说，只是把你抱到安静的休息室，低声说：怕了就说，没关系。",
        phone: [message("eunseok", "宋银硕爹地", "下次休息室灯开一盏。她醒来会安心一点。")]
      },
      {
        id: "C",
        text: "把玩具递给练习中的叔叔",
        effects: { uncleCare: 10, fanBlessing: 3, talent: 3 },
        outcome: "你把手里的小玩具递给路过的 Sohee 叔叔，他接得像收到舞台奖杯。家庭群立刻多了十几张照片，每个人都说自己才是你最喜欢的叔叔。",
        phone: [message("family", "Sohee 叔叔", "她给我礼物了！今天我是第一名叔叔！")]
      }
    ]
  },
  {
    id: "EP04",
    age: 5,
    stage: "kindergarten",
    title: "幼儿园家长日：两个爸爸一起出现",
    location: "幼儿园教室",
    body: "家长日那天，你第一次认真意识到自己的家庭会被别人多看几眼。老师让大家介绍家人时，成灿爸爸坐在小椅子上，背挺得比舞台采访还直；银硕爹地站在门口，手里拿着你早上忘带的手工作业，表情淡定得像只是顺路经过。其他孩子小声说你的爸爸们好帅，你的耳朵慢慢发热。成灿爸爸想站起来帮你解释，被银硕爹地用眼神按住。于是你站在小画纸前，第一次需要自己说出：这是我的家。",
    basePhone: [
      album("幼儿园亲子画", "5 岁", "三个人的手印贴在同一张纸上，成灿爸爸的手印最大。", "soft-blue"),
      fan("01line守护协会", "他们没有把爱藏起来，也没有把孩子推到镜头前，这种边界感好珍贵。"),
      calendar("幼儿园家长日", "家里第一次正式一起参加你的学校活动。")
    ],
    unlockMemories: ["M05"],
    choices: [
      {
        id: "A",
        text: "骄傲介绍他们",
        effects: { security: 9, fanBlessing: 7, privacy: 4 },
        outcome: "你说这是成灿爸爸，这是银硕爹地。教室安静了一下，然后老师笑着让大家鼓掌。成灿爸爸眼睛亮得像要把这一幕记到老，银硕爹地把作业递给你时轻声说：说得很好。",
        phone: [message("family", "郑成灿爸爸", "她今天介绍我们的时候一点都没犹豫。")]
      },
      {
        id: "B",
        text: "害羞躲到银硕身后",
        effects: { eunseok: 8, security: 6, privacy: 6 },
        outcome: "你躲到银硕爹地身后，手指抓住他的衣角。银硕爹地没有把你推出去，只是蹲下来和你平视：不想说也可以，家不是考试题。",
        phone: [message("eunseok", "宋银硕爹地", "今天不想勇敢也没关系。能来就很好。")]
      },
      {
        id: "C",
        text: "拉着两人一起做亲子画",
        effects: { parentLove: 8, security: 7, sungchan: 4, eunseok: 4 },
        outcome: "你把两位爸爸都拉到画纸前，三个人的手印重在一起。成灿爸爸故意把颜料蹭到银硕爹地指尖，银硕爹地看了他一眼，最后还是没有躲。",
        phone: [diary("今天我画了家。老师说颜色很多，我觉得因为我有两个爸爸，所以颜色也会比较多。")]
      }
    ]
  },
  {
    id: "EP05",
    age: 7,
    stage: "primarySchool",
    title: "第一次意识到他们是偶像",
    location: "客厅电视前",
    body: "电视里的舞台灯光像另一个宇宙。你坐在沙发上，看见早上给你扎头发、提醒你带水杯的人站在镜头中央，被很多人呼喊名字。成灿爸爸在屏幕里笑得很亮，银硕爹地的表情冷静又漂亮，和家里那个会检查你作业、把葱挑出去的人重合在一起。你忽然有点困惑：为什么全世界都认识他们，为什么别人可以喊他们的名字，为什么你熟悉的家会被舞台灯切成另一个样子。两位爸爸没有急着解释，只把遥控器音量调小，等你自己问出口。",
    basePhone: [
      message("family", "Wonbin 叔叔", "她今天看完整场舞台了，很认真。"),
      album("第一次看完整场舞台", "7 岁", "电视反光里有你盘腿坐着的影子。", "soft-cream"),
      fan("不会再熬夜了", "小朋友终于发现爸爸们在舞台上也闪闪发光了吧。")
    ],
    choices: [
      {
        id: "A",
        text: "问“为什么大家都叫你们名字”",
        effects: { security: 6, privacy: 8, fanBlessing: 3 },
        outcome: "成灿爸爸认真想了很久，说因为他们的工作会被很多人喜欢，但回到家以后，他们还是你的爸爸。银硕爹地补了一句：名字可以被很多人叫，饭只给你留。",
        phone: [message("eunseok", "宋银硕爹地", "公众身份解释第一课：先吃饭，再理解世界。")]
      },
      {
        id: "B",
        text: "认真看完整场舞台",
        effects: { talent: 8, fanBlessing: 5, parentLove: 3 },
        outcome: "你没有说话，只是把整场舞台看完。最后谢幕时，成灿爸爸回头看银硕爹地，两个人交换了一个很短的眼神。你突然觉得，舞台也是他们彼此确认的地方。",
        phone: [diary("原来爸爸们在外面也会累，也会发光。我有一点骄傲，也有一点想把他们藏回家里。")]
      },
      {
        id: "C",
        text: "吃醋说不想和粉丝分享爸爸",
        effects: { security: -2, sungchan: 6, eunseok: 4, privacy: 5 },
        outcome: "成灿爸爸先愣住，随后把你抱到膝盖上，说爸爸可以被很多人喜欢，但最想回的地方只有家。银硕爹地递来切好的水果，说：分享舞台，不分享你的睡前故事。",
        phone: [message("sungchan", "郑成灿爸爸", "爸爸今天的睡前故事加长版，只给你一个人。")]
      }
    ]
  },
  {
    id: "EP06",
    age: 9,
    stage: "primarySchool",
    title: "运动会：成灿爸爸过度认真",
    location: "学校操场",
    body: "亲子接力赛开始前，成灿爸爸已经热身三次。你站在跑道边，觉得他比你还紧张，鞋带检查了两遍，水壶也被他拧开又盖上。银硕爹地坐在遮阳棚下，手里拿着毛巾和水，语气平稳地说：他今天早上差点把号码布别在睡衣上。你本来有点嫌丢脸，可当哨声响起，成灿爸爸把接力棒递到你手里时，他只说了一句：慢慢跑，摔了也没事，爸爸在后面。你忽然明白，他想赢只是表面，真正紧张的是怕你在人群里一个人。",
    basePhone: [
      album("运动会接力", "9 岁", "跑道尽头，成灿爸爸弯腰等你冲线。银硕爹地手里的水已经拧开。", "soft-coral"),
      message("family", "宋银硕爹地", "他今天热身过度。晚饭少给他一点炫耀时间。"),
      fan("小鹿汽水", "运动会照片里，银硕爸爸吐槽归吐槽，水一直拿在手上。")
    ],
    choices: [
      {
        id: "A",
        text: "和成灿全力冲刺",
        effects: { sungchan: 10, talent: 5, security: 4 },
        outcome: "你们没有拿第一，但冲线时成灿爸爸比冠军还开心。他把你举起来，又立刻被银硕爹地提醒：放下，孩子要喝水。",
        phone: [message("sungchan", "郑成灿爸爸", "我们今天精神上第一名。绝对第一。")]
      },
      {
        id: "B",
        text: "让银硕也参加",
        effects: { eunseok: 8, parentLove: 5, fanBlessing: 4 },
        outcome: "银硕爹地说自己只是后勤，却还是被你拉到亲子游戏区。他动作不夸张，但每一步都很稳。成灿爸爸在旁边鼓掌，比你还像观众。",
        phone: [message("family", "郑成灿爸爸", "银硕刚才那个转弯很帅。")]
      },
      {
        id: "C",
        text: "觉得丢脸但最后笑出来",
        effects: { independence: 4, security: 5, privacy: 4 },
        outcome: "你假装嫌弃他挥手太大力，嘴角却忍不住翘起来。银硕爹地看见了，只把毛巾递给你，没有揭穿。",
        phone: [diary("我今天说爸爸丢脸。其实跑到一半看到他在终点等我，我就不觉得丢脸了。")]
      }
    ]
  },
  {
    id: "EP07",
    age: 11,
    stage: "primarySchool",
    title: "小学后台探班",
    location: "回归后台",
    body: "你不再是只会在练习室角落睡觉的小孩了。后台的灯、妆发、耳返和工作人员的脚步声让你第一次看见舞台背后的疲惫。成灿爸爸坐在椅子上让造型师补妆，看到你时立刻想站起来，被银硕爹地用一句别乱动按回去。叔叔们从不同方向经过，有人塞给你糖，有人问作业，有人让你不要被电线绊倒。你看见成灿爸爸和银硕爹地在人群里用一个很短的眼神确认彼此状态，没有夸张，也没有台词，却比很多话都更像爱。你突然想把这一幕写下来。",
    basePhone: [
      album("后台探班证", "11 岁", "你的临时通行证贴在书包侧袋，旁边是银硕爹地写的小便签。", "soft-blue"),
      message("family", "Anton 叔叔", "她今天观察得很认真。像在收集声音。"),
      diary("原来舞台不是从灯亮开始的。它从很多人很累但还在互相照顾的时候开始。")
    ],
    unlockMemories: ["M03", "M02"],
    choices: [
      {
        id: "A",
        text: "给他们递水",
        effects: { security: 5, sungchan: 5, eunseok: 5, talent: 3 },
        outcome: "你把水递过去时，成灿爸爸夸张地说我们小孩长大了。银硕爹地接过水，只说谢谢，瓶盖却被他握在掌心很久。",
        phone: [message("eunseok", "宋银硕爹地", "今天的水很及时。谢谢。")]
      },
      {
        id: "B",
        text: "观察叔叔们工作",
        effects: { uncleCare: 8, talent: 6, independence: 3 },
        outcome: "你坐在不挡路的角落，看叔叔们在上台前从玩笑切换成专注。Wonbin 叔叔路过时说：别只看漂亮的地方，也看看它怎么被做出来。",
        phone: [message("wonbin", "Wonbin 叔叔", "今天看到的，记下来。以后会用得上。")]
      },
      {
        id: "C",
        text: "写日记“原来爱也可以很安静”",
        effects: { parentLove: 7, independence: 5, security: 5 },
        outcome: "你在备忘录里打下那句话。成灿爸爸没有看见，银硕爹地却像知道一样，在离开前把你的书包带调短了一格。",
        phone: [diary("原来爱也可以很安静。不是每次都要说出来，有时候只是在人很多的地方确认对方有没有撑住。")]
      }
    ]
  },
  {
    id: "EP08",
    age: 14,
    stage: "middleSchool",
    title: "青春期第一次吵架",
    location: "校门口雨棚",
    body: "你开始不想让爸爸来接了。不是不爱他们，只是每一次车停在校门口、每一次同学小声议论，都会提醒你：你不是普通家庭里的普通小孩。那天你故意晚出来，看到成灿爸爸站在雨棚下等了很久，手里还拿着你忘带的外套。你心里一酸，说出口的话却变成了：能不能不要总管我。成灿爸爸的表情像被雨声砸了一下，银硕爹地没有立刻打电话，只在 KKT 发来一句：回来吃饭。你盯着屏幕，第一次觉得被爱也会让人喘不过气。",
    basePhone: [
      message("sungchan", "郑成灿爸爸", "我在校门口。外套带来了。"),
      message("eunseok", "宋银硕爹地", "回来吃饭。今天有你喜欢的汤。"),
      diary("我知道他们是爱我。可是我也想有一点不被看见的地方。")
    ],
    choices: [
      {
        id: "A",
        text: "和成灿吵“别管我”",
        effects: { independence: 8, sungchan: -6, security: -5, privacy: 4 },
        outcome: "成灿爸爸没有立刻追上来。他站在原地，把外套攥得很紧，最后只说：那爸爸在远一点的地方等。你走出几步，忽然更难受了。",
        phone: [message("family", "Shotaro 叔叔", "青春期不是坏事。给她一点空间，也给成灿哥一点时间。")]
      },
      {
        id: "B",
        text: "已读不回银硕",
        effects: { independence: 6, eunseok: -4, security: -4, privacy: 5 },
        outcome: "你没有回复。银硕爹地也没有连发消息，只是在一个小时后发来第二句：汤温着。不是催你，是告诉你家还在。",
        phone: [message("eunseok", "宋银硕爹地", "汤温着。不是催你。")]
      },
      {
        id: "C",
        text: "回家后主动道歉",
        effects: { security: 8, sungchan: 5, eunseok: 5, independence: 3 },
        outcome: "你在玄关说对不起。成灿爸爸先松了一口气，银硕爹地把拖鞋推到你脚边，说先进来，门口不适合长大。",
        phone: [diary("我今天说了很重的话。可他们没有把门关上。原来家也可以接住难听的话。")]
      }
    ]
  },
  {
    id: "EP09",
    age: 15,
    stage: "middleSchool",
    title: "深夜厨房谈心",
    location: "凌晨厨房",
    body: "凌晨一点，厨房只开着一盏小灯。你以为所有人都睡了，却看见银硕爹地坐在餐桌边，面前放着一杯热牛奶。客厅电视也亮着，成灿爸爸坐在沙发上，音量调到零，假装自己不是在等你。你突然意识到，他们不是不懂你长大，只是不知道该怎么把手松开一点，又不让你摔疼。银硕爹地没有问你为什么难过，只把杯子推过来。成灿爸爸隔着客厅说：我不进来，但我在。那一刻你终于想说点真话。",
    basePhone: [
      message("eunseok", "宋银硕爹地", "牛奶在厨房。喝不喝随你。"),
      album("厨房小灯", "15 岁", "凌晨的餐桌，杯口冒着一点热气。", "soft-cream"),
      diary("他们没有逼我说话。可是我忽然很想告诉他们，我其实也不是讨厌回家。")
    ],
    unlockMemories: ["M07"],
    choices: [
      {
        id: "A",
        text: "坦白自己的压力",
        effects: { security: 12, independence: 5, eunseok: 5, sungchan: 5 },
        outcome: "你说不想永远被叫成硕家的小孩。成灿爸爸的眼睛红了一点，但没有抢话。银硕爹地说：那就慢慢把自己的名字写大。我们在旁边，不替你写。",
        phone: [message("sungchan", "郑成灿爸爸", "你不是我们的附属品。你是你自己。爸爸记住了。")]
      },
      {
        id: "B",
        text: "问他们以前怎么熬过来",
        effects: { parentLove: 8, security: 8, fanBlessing: 3 },
        outcome: "成灿爸爸沉默很久，说年轻时也有很多不知道怎么办的时候。银硕爹地补了一句：所以我们学会了吃饭、睡觉、第二天继续。听起来不浪漫，但很有用。",
        phone: [message("eunseok", "宋银硕爹地", "先活过今天，再讨论人生。这个方法很土，但有效。")]
      },
      {
        id: "C",
        text: "靠在其中一人肩膀上哭",
        effects: { security: 12, sungchan: 4, eunseok: 4, independence: -1 },
        outcome: "你没有解释太多，只是哭。成灿爸爸最终还是走进厨房，坐在离你不远的地方。银硕爹地把纸巾放到左手边，说哭完再洗脸，没哭完也可以继续。",
        phone: [diary("我十五岁了，还是会哭。可是他们没有说我幼稚。")]
      }
    ]
  },
  {
    id: "EP10",
    age: 16,
    stage: "highSchool",
    title: "父母纪念日：我成为他们爱情的见证人",
    location: "家中餐桌",
    body: "整理旧手机时，你看见一段很久以前的聊天记录。成灿爸爸发了很长一段话，字里行间全是紧张和喜欢；银硕爹地只回了一句很短的话，却被置顶了很多年。你忽然有点想笑，也有点鼻酸。原来他们在成为你的爸爸之前，也曾经笨拙、试探、害怕被拒绝。纪念日的餐桌上，成灿爸爸仍然会把最好看的那块蛋糕推给银硕爹地，银硕爹地仍然嘴上嫌甜，叉子却没有放下。你坐在他们对面，第一次觉得自己不是偷看爱情的人，而是被这份爱养大的人。",
    basePhone: [
      message("family", "Sohee 叔叔", "纪念日快乐！今天谁负责不哭？"),
      message("family", "Wonbin 叔叔", "成灿哥大概率失败。"),
      fan("成硕考古bot", "他们把公开后的每一年都过得很稳，这才是最难的浪漫。")
    ],
    unlockMemories: ["M04"],
    choices: [
      {
        id: "A",
        text: "偷偷帮他们准备蛋糕",
        effects: { parentLove: 10, security: 5, fanBlessing: 4 },
        outcome: "蛋糕端出来时，成灿爸爸先看你，再看银硕爹地，最后又看你。银硕爹地说你们两个都很夸张，但切蛋糕时分给你的那块最大。",
        phone: [album("纪念日蛋糕", "16 岁", "餐桌中间的小蛋糕。蜡烛光照在三个人的手上。", "soft-coral")]
      },
      {
        id: "B",
        text: "在家庭群发合照",
        effects: { fanBlessing: 8, uncleCare: 5, parentLove: 5 },
        outcome: "你把合照发到家庭群，叔叔们立刻刷屏祝福。成灿爸爸说这是他今年最喜欢的照片，银硕爹地说前提是不要被他拿去做手机壁纸第十二次。",
        phone: [message("family", "Anton 叔叔", "这张照片可以做今年家庭纪录片结尾。")]
      },
      {
        id: "C",
        text: "去问叔叔们当年的故事",
        effects: { uncleCare: 8, parentLove: 7, independence: 4 },
        outcome: "叔叔们像终于等到你问一样，把那些旧故事一点点拼给你。Shotaro 说他们那时就很照顾彼此，Wonbin 说只有成灿哥以为没人看出来。",
        phone: [message("shotaro", "Shotaro 叔叔", "有些爱不是突然开始的，是大家回头时才发现一直在。")]
      }
    ]
  },
  {
    id: "EP11",
    age: 18,
    stage: "highSchool",
    title: "毕业演出：他们坐在台下",
    location: "学校礼堂",
    body: "灯光落下来的瞬间，你突然理解了他们年轻时为什么愿意一遍遍练习。台下坐着两位爸爸，成灿爸爸的手握得很紧，像比你还紧张；银硕爹地举着手机，镜头却稳得出奇。叔叔们分散在观众席不同位置，Sohee 叔叔在你上台前发来加油语音，Wonbin 叔叔只发了两个字：漂亮。你站在舞台中央，第一次不只是他们的女儿，而是一个要完成自己作品的人。你知道他们会看着你，但这一次，你想先看见自己。",
    basePhone: [
      message("sungchan", "郑成灿爸爸", "不管结果怎么样，今天站上去就已经很厉害。"),
      message("wonbin", "Wonbin 叔叔", "漂亮。别抖。"),
      album("毕业演出谢幕", "18 岁", "台下的灯很暗，但你知道家人都在。", "soft-blue")
    ],
    choices: [
      {
        id: "A",
        text: "看向父母完成演出",
        effects: { security: 8, sungchan: 4, eunseok: 4, talent: 10 },
        outcome: "你在最后一个动作看向台下。成灿爸爸已经红了眼眶，银硕爹地没有放下手机，只是对你点了一下头。那一下比掌声更稳。",
        phone: [diary("我今天在台上看见他们。不是为了确认他们在不在，而是想告诉他们：我做到了。")]
      },
      {
        id: "B",
        text: "把表演献给自己",
        effects: { independence: 12, talent: 10, security: 4 },
        outcome: "你没有寻找任何一个熟悉的脸。你把灯光、呼吸和节拍都收回自己身体里。谢幕时，你才看向台下，然后发现他们一直在等你先成为自己。",
        phone: [message("eunseok", "宋银硕爹地", "今天很好。不是因为像谁，是因为像你。")]
      },
      {
        id: "C",
        text: "邀请叔叔们一起谢幕",
        effects: { uncleCare: 12, talent: 8, fanBlessing: 6 },
        outcome: "谢幕后，叔叔们被你拉上台合照。Sohee 叔叔差点比你还兴奋，Shotaro 叔叔替你整理衣领，Anton 叔叔说这张照片以后一定会很珍贵。",
        phone: [message("family", "Sohee 叔叔", "我们小孩毕业快乐！！我刚才真的没有哭太大声吧？")]
      }
    ]
  },
  {
    id: "EP12",
    age: 19,
    stage: "adult",
    title: "成年礼纪录片：爱不是把我留住，而是送我往前走",
    location: "家庭纪录片放映室",
    body: "纪录片最后一段，是你坐在两位爸爸中间，看完他们从年轻恋人到父亲的所有片段。镜头里的他们曾经笨拙、紧张、热烈，也曾经争执、修复、学着把一个小孩养成完整的大人。成灿爸爸说我们的小孩长大了，声音里还有一点不舍。银硕爹地说嗯，但饭还是要回来吃。你笑出声，又觉得眼眶发热。回忆档案全部解锁，家庭群安静了很久，然后叔叔们一个个发来消息。你终于明白，家不是把你留在原地的绳子，而是你走远以后仍然亮着的灯。",
    basePhone: [
      calendar("成年礼纪录片", "旧手机、家庭相册和粉丝祝福墙全部开放回看。"),
      message("family", "Shotaro 叔叔", "长大快乐。以后累了，也可以回到我们这里。"),
      fan("布栗子_春天版", "看完纪录片突然懂了：被爱养大的人，会带着光往前走。")
    ],
    unlockMemories: ["M08"],
    choices: [
      {
        id: "A",
        text: "留在首尔，常回家吃饭",
        route: "harbor",
        effects: { security: 8, independence: 6, parentLove: 4 },
        outcome: "你选择把新的生活建在离家不远的地方。你有自己的钥匙、自己的计划，也有每周固定回家的晚饭。成灿爸爸学会少问一点，银硕爹地仍然会多煮一碗汤。",
        phone: [diary("我没有被家困住。只是知道自己有地方可以回去。")]
      },
      {
        id: "B",
        text: "出国读书，去看更远的世界",
        route: "faraway",
        effects: { independence: 12, privacy: 6, security: 3 },
        outcome: "机场那天，成灿爸爸努力不表现得太舍不得，银硕爹地把文件夹检查到最后一页。你过安检前回头，他们都在。你知道之后的消息会跨过时差抵达你手机里。",
        phone: [message("anton", "Anton 叔叔", "到那边以后，如果想写歌，先录城市的声音给我。")]
      },
      {
        id: "C",
        text: "进入音乐行业，站到自己的灯下",
        route: "stage",
        effects: { talent: 12, uncleCare: 8, independence: 5 },
        outcome: "你没有复制他们的人生，而是带着他们教会你的耐心和勇气，走进自己的排练室。第一次正式演出时，他们坐在台下，终于只是观众，也是家人。",
        phone: [message("sungchan", "郑成灿爸爸", "今天爸爸坐台下。只当你的观众，也当你的家。")]
      },
      {
        id: "D",
        text: "选择普通而明亮的生活",
        route: "ordinary",
        effects: { privacy: 10, independence: 8, fanBlessing: 4 },
        outcome: "你选择不进入娱乐圈。你拥有普通工作的通勤、普通朋友的聚餐、普通日子的烦恼。可每次回家，成灿爸爸还是会问你吃饭了吗，银硕爹地还是会把你喜欢的布丁放在冰箱第二层。",
        phone: [diary("普通不是离开他们的爱。普通只是我终于可以用自己的方式生活。")]
      }
    ]
  }
];

let state = loadState();

document.addEventListener("submit", event => {
  const form = event.target;
  if (form.matches("[data-setup-form]")) {
    event.preventDefault();
    const name = form.querySelector("[name='playerName']").value.trim() || "小星";
    state = createInitialState(name);
    saveState();
    tapBurst(window.innerWidth / 2, window.innerHeight / 2);
    render();
  }

  if (form.matches("[data-chat-form]")) {
    event.preventDefault();
    const input = form.querySelector("[name='chatText']");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    sendChat(text);
  }
});

document.addEventListener("click", event => {
  const clickable = event.target.closest("button, [data-choice], [data-app], [data-chat]");
  if (clickable) tapBurst(event.clientX, event.clientY);

  const choice = event.target.closest("[data-choice]");
  if (choice) {
    chooseOption(choice.dataset.choice);
    return;
  }

  const app = event.target.closest("[data-app]");
  if (app) {
    state.phoneApp = app.dataset.app;
    saveState();
    render();
    return;
  }

  const chat = event.target.closest("[data-chat]");
  if (chat) {
    state.activeChat = chat.dataset.chat;
    state.phoneApp = "kkt";
    saveState();
    render();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (!action) return;

  if (action.dataset.action === "reset") {
    if (confirm("要重新开始这一轮人生吗？")) {
      localStorage.removeItem(STORAGE_KEY);
      state = null;
      render();
    }
  }

  if (action.dataset.action === "home") {
    state.phoneApp = "home";
    saveState();
    render();
  }

  if (action.dataset.action === "next-ending") {
    state.showEndingDetail = !state.showEndingDetail;
    saveState();
    render();
  }
});

render();

function createInitialState(playerName) {
  return {
    playerName,
    age: 0,
    episodeIndex: 0,
    finished: false,
    finalRoute: "",
    showEndingDetail: false,
    currentChapterId: "family-growth",
    stats: {
      security: 62,
      sungchan: 55,
      eunseok: 55,
      parentLove: 72,
      independence: 18,
      talent: 22,
      uncleCare: 48,
      fanBlessing: 70,
      privacy: 62
    },
    phoneApp: "home",
    activeChat: "family",
    unlockedMemories: [],
    recentChoices: [],
    recentEvents: [],
    relationshipNotes: ["平行世界虚构家庭线，父母公开受祝福，家人重视边界与隐私。"],
    lastOutcome: "",
    chats: seedChats(playerName),
    album: [],
    fanWall: [
      { name: "布栗子_春天版", text: "这条世界线好温柔，愿小朋友被爱养大。", time: "置顶" },
      { name: "成硕考古bot", text: "从练习室到家庭相册，他们真的把陪伴过成了人生。", time: "热帖" }
    ],
    diary: [],
    calendar: [
      { title: "家庭相册日", note: "每个阶段至少留下一张照片。", time: "长期" }
    ],
    memorySummaries: []
  };
}

function seedChats(playerName) {
  return {
    family: [
      chatLine("郑成灿爸爸", "家庭群建好了。我们小孩以后长大可以考古。", "08:12"),
      chatLine("宋银硕爹地", "先别发太多照片。"),
      chatLine("Sohee 叔叔", "不行！！我要云围观！！"),
      chatLine(playerName, "我还不会打字。")
    ],
    sungchan: [chatLine("郑成灿爸爸", "爸爸在。任何年龄都在。", "已保存")],
    eunseok: [chatLine("宋银硕爹地", "冰箱第二层通常有你喜欢的东西。", "已保存")],
    shotaro: [chatLine("Shotaro 叔叔", "慢慢长大就好，不急。", "已保存")],
    wonbin: [chatLine("Wonbin 叔叔", "有事可以说。没事也可以。", "已保存")],
    sohee: [chatLine("Sohee 叔叔", "今天也要开心！不开心我负责逗你。", "已保存")],
    anton: [chatLine("Anton 叔叔", "以后想做什么，都可以先从一个小 demo 开始。", "已保存")]
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return normalizeState(parsed);
  } catch {
    return null;
  }
}

function normalizeState(saved) {
  const fresh = createInitialState(saved.playerName || "小星");
  return {
    ...fresh,
    ...saved,
    stats: { ...fresh.stats, ...(saved.stats || {}) },
    chats: { ...fresh.chats, ...(saved.chats || {}) },
    album: saved.album || [],
    fanWall: saved.fanWall || fresh.fanWall,
    diary: saved.diary || [],
    calendar: saved.calendar || fresh.calendar,
    unlockedMemories: saved.unlockedMemories || [],
    recentChoices: saved.recentChoices || [],
    recentEvents: saved.recentEvents || [],
    relationshipNotes: saved.relationshipNotes || fresh.relationshipNotes,
    activeChat: saved.activeChat || "family",
    phoneApp: saved.phoneApp || "home"
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render() {
  const app = document.querySelector("#app");
  if (!state) {
    app.innerHTML = renderSetup();
    return;
  }

  app.innerHTML = `
    <main class="game-shell">
      ${renderStoryPanel()}
      ${renderPhonePanel()}
    </main>
  `;
  scrollChatToBottom();
}

function renderSetup() {
  return `
    <main class="setup-screen">
      <section class="setup-card">
        <p class="kicker">平行世界家庭成长文游</p>
        <h1>成硕女儿模拟器</h1>
        <p class="setup-copy">从出生到成年，在一个公开受祝福、边界清楚、爱意稳定的家里长大。</p>
        <form data-setup-form class="setup-form">
          <label>
            <span>你的名字</span>
            <input name="playerName" maxlength="12" placeholder="小星" autocomplete="off">
          </label>
          <button class="primary-button" type="submit">开始人生</button>
        </form>
        <p class="disclaimer">虚构同人互动故事，不代表现实人物、关系或私生活。</p>
      </section>
    </main>
  `;
}

function renderStoryPanel() {
  const episode = episodes[state.episodeIndex];
  const stage = episode ? stages[episode.stage] : stages.adult;
  return `
    <section class="story-panel">
      <header class="story-header">
        <div>
          <p class="kicker">Chengshuo Daughter Simulator</p>
          <h1>${escapeHtml(state.playerName)}的成长线</h1>
        </div>
        <button class="icon-button" data-action="reset" title="重新开始">↺</button>
      </header>

      <div class="meta-strip">
        <span>${escapeHtml(stage)}</span>
        <span>${state.finished ? "终章完成" : `主线 ${state.episodeIndex + 1}/${episodes.length}`}</span>
        <span>${escapeHtml(episode ? episode.location : "成年之后")}</span>
      </div>

      ${renderStats()}
      ${state.lastOutcome ? `<aside class="outcome-card">${paragraphs(state.lastOutcome)}</aside>` : ""}
      ${state.finished ? renderEnding() : renderEpisode(episode)}
      <p class="tiny-note">所有故事均为平行世界虚构创作；孩子视角只呈现家庭陪伴、成长与边界清楚的爱。</p>
    </section>
  `;
}

function renderEpisode(episode) {
  return `
    <article class="episode-card">
      <p class="episode-id">${escapeHtml(episode.id)}</p>
      <h2>${escapeHtml(episode.title)}</h2>
      <div class="story-text">${paragraphs(episode.body)}</div>
      <div class="choice-grid">
        ${episode.choices.map(choice => `
          <button class="choice-button" data-choice="${choice.id}">
            <span>${choice.id}</span>
            ${escapeHtml(choice.text)}
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function renderStats() {
  return `
    <section class="stats-grid">
      ${statLabels.map(([key, label]) => {
        const value = clamp(state.stats[key] ?? 0);
        return `
          <div class="stat-row">
            <div class="stat-label"><span>${label}</span><strong>${value}</strong></div>
            <div class="stat-track"><span style="width:${value}%"></span></div>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function renderEnding() {
  const ending = getEnding();
  return `
    <article class="episode-card ending-card">
      <p class="episode-id">ENDING</p>
      <h2>${escapeHtml(ending.title)}</h2>
      <div class="story-text">${paragraphs(ending.text)}</div>
      <button class="primary-button slim" data-action="next-ending">${state.showEndingDetail ? "收起结算" : "查看结算"}</button>
      ${state.showEndingDetail ? `
        <div class="ending-detail">
          ${statLabels.map(([key, label]) => `<span>${label} ${clamp(state.stats[key] ?? 0)}</span>`).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function renderPhonePanel() {
  return `
    <aside class="phone-wrap">
      <div class="phone">
        <div class="phone-glass"></div>
        <div class="dynamic-island"></div>
        <div class="status-bar">
          <span>${getClock()}</span>
          <span>5G  ▰</span>
        </div>
        <div class="phone-top">
          <button class="phone-home-button" data-action="home" title="桌面">⌂</button>
          <div>
            <strong>${getPhoneTitle()}</strong>
            <span>${escapeHtml(stages[getCurrentStageKey()] || "")}</span>
          </div>
        </div>
        <div class="phone-screen">
          ${renderPhoneScreen()}
        </div>
        <div class="home-indicator"></div>
      </div>
    </aside>
  `;
}

function renderPhoneScreen() {
  switch (state.phoneApp) {
    case "kkt":
      return renderKktApp();
    case "gallery":
      return renderGalleryApp();
    case "memory":
      return renderMemoryApp();
    case "fanwall":
      return renderFanWallApp();
    case "diary":
      return renderDiaryApp();
    case "calendar":
      return renderCalendarApp();
    default:
      return renderPhoneHome();
  }
}

function renderPhoneHome() {
  return `
    <section class="phone-home">
      <div class="wallpaper-card">
        <span>${escapeHtml(state.playerName)}</span>
        <strong>${state.finished ? "成年快乐" : "今天也在长大"}</strong>
      </div>
      <div class="app-grid">
        ${phoneApps.map(app => `
          <button class="app-icon ${app.color}" data-app="${app.id}">
            <span>${escapeHtml(app.icon)}</span>
            <small>${escapeHtml(app.label)}</small>
          </button>
        `).join("")}
      </div>
      <div class="dock">
        <button data-app="kkt">KKT</button>
        <button data-app="diary">日记</button>
        <button data-app="memory">回忆</button>
      </div>
    </section>
  `;
}

function renderKktApp() {
  const active = contacts.find(contact => contact.id === state.activeChat) || contacts[0];
  const messages = state.chats[active.id] || [];
  return `
    <section class="kkt-app">
      <div class="contact-strip">
        ${contacts.map(contact => `
          <button class="contact-chip ${contact.id === active.id ? "active" : ""}" data-chat="${contact.id}">
            <span>${escapeHtml(contact.short)}</span>
            <small>${escapeHtml(contact.name)}</small>
          </button>
        `).join("")}
      </div>
      <div class="chat-card">
        <div class="chat-title">
          <strong>${escapeHtml(active.name)}</strong>
          <span>${active.type === "group" ? "가족톡" : "KKT"}</span>
        </div>
        <div class="message-list" data-message-list>
          ${messages.map(item => renderMessage(item, active)).join("")}
        </div>
        <form class="chat-form" data-chat-form>
          <input name="chatText" maxlength="80" autocomplete="off" placeholder="发一条消息">
          <button type="submit">发送</button>
        </form>
      </div>
    </section>
  `;
}

function renderMessage(item, active) {
  const mine = item.sender === state.playerName;
  const pending = item.pending ? " pending" : "";
  const senderLabel = active.type === "group" && !mine ? `<b>${escapeHtml(item.sender)}</b>` : "";
  return `
    <div class="message-row ${mine ? "mine" : "theirs"}${pending}">
      <div class="bubble">
        ${senderLabel}
        <span>${escapeHtml(item.text)}</span>
      </div>
      <small>${escapeHtml(item.time || "")}</small>
    </div>
  `;
}

function renderGalleryApp() {
  const items = state.album.length ? state.album : [{ title: "相册等待更新", year: "Soon", caption: "主线推进后，这里会留下家庭照片。", mood: "soft-cream" }];
  return `
    <section class="gallery-app">
      ${items.slice().reverse().map(item => `
        <article class="photo-card">
          <div class="photo-scene ${item.mood || "soft-blue"}">
            <span></span><span></span><span></span>
          </div>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <small>${escapeHtml(item.year)}</small>
            <p>${escapeHtml(item.caption)}</p>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderMemoryApp() {
  return `
    <section class="memory-app">
      ${memories.map(memory => {
        const unlocked = state.unlockedMemories.includes(memory.id);
        return `
          <article class="memory-card ${unlocked ? "" : "locked"}">
            <div class="film-mark">${unlocked ? memory.id : "LOCK"}</div>
            <h3>${escapeHtml(memory.title)}</h3>
            <p class="memory-source">${escapeHtml(memory.source)} · ${escapeHtml(memory.tag)}</p>
            <p>${escapeHtml(unlocked ? memory.content : memory.condition)}</p>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function renderFanWallApp() {
  const items = state.fanWall.slice().reverse();
  return `
    <section class="fanwall-app">
      ${items.map(item => `
        <article class="fan-post">
          <strong>${escapeHtml(item.name)}</strong>
          <p>${escapeHtml(item.text)}</p>
          <small>${escapeHtml(item.time || "刚刚")}</small>
        </article>
      `).join("")}
    </section>
  `;
}

function renderDiaryApp() {
  const items = state.diary.length ? state.diary.slice().reverse() : [{ text: "日记还没有开始。等第一段人生落下来，你会在这里听见自己的声音。", time: "空白页" }];
  return `
    <section class="diary-app">
      ${items.map(item => `
        <article class="diary-page">
          <small>${escapeHtml(item.time || "今天")}</small>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function renderCalendarApp() {
  const items = state.calendar.slice().reverse();
  return `
    <section class="calendar-app">
      ${items.map(item => `
        <article class="calendar-item">
          <span>${escapeHtml(item.time || "日程")}</span>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.note)}</p>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function chooseOption(choiceId) {
  if (state.finished) return;
  const episode = episodes[state.episodeIndex];
  const choice = episode.choices.find(item => item.id === choiceId);
  if (!choice) return;

  applyEffects(choice.effects || {});
  applyPhoneUpdates([...(episode.basePhone || []), ...(choice.phone || [])]);
  unlockMemories([...(episode.unlockMemories || []), ...(choice.unlockMemories || [])]);

  state.lastOutcome = choice.outcome;
  state.recentChoices.unshift(`${episode.id}-${choice.id} ${choice.text}`);
  state.recentEvents.unshift(`${episode.title}：${choice.outcome}`);
  state.recentChoices = state.recentChoices.slice(0, 8);
  state.recentEvents = state.recentEvents.slice(0, 8);
  state.memorySummaries.unshift({
    id: `mem_${Date.now()}`,
    age: episode.age,
    summary: `${state.playerName}在「${episode.title}」中选择了「${choice.text}」。${choice.outcome}`,
    emotionalImpact: "影响家庭理解、亲密度与玩家自我意识。",
    relatedCharacters: inferCharacters(choice.outcome),
    tags: [episode.stage, episode.id]
  });
  state.memorySummaries = state.memorySummaries.slice(0, 12);

  if (state.episodeIndex >= episodes.length - 1) {
    state.finished = true;
    state.finalRoute = choice.route || "";
    unlockMemories(memories.map(memory => memory.id));
  } else {
    state.episodeIndex += 1;
    state.age = episodes[state.episodeIndex].age;
  }

  const targetApp = getSuggestedPhoneApp([...(episode.basePhone || []), ...(choice.phone || [])]);
  state.phoneApp = targetApp || state.phoneApp;
  saveState();
  render();
}

function applyEffects(effects) {
  for (const [key, value] of Object.entries(effects)) {
    state.stats[key] = clamp((state.stats[key] || 0) + value);
  }
}

function applyPhoneUpdates(updates) {
  for (const update of updates) {
    if (update.kind === "message") {
      if (!state.chats[update.chat]) state.chats[update.chat] = [];
      state.chats[update.chat].push(chatLine(update.sender, update.text, update.time || "刚刚"));
    }
    if (update.kind === "album") state.album.push(update);
    if (update.kind === "fan") state.fanWall.push(update);
    if (update.kind === "diary") state.diary.push({ ...update, time: update.time || `${state.age} 岁` });
    if (update.kind === "calendar") state.calendar.push(update);
  }
}

function unlockMemories(ids) {
  for (const id of ids) {
    if (id && !state.unlockedMemories.includes(id)) state.unlockedMemories.push(id);
  }
}

async function sendChat(text) {
  const active = state.activeChat || "family";
  if (!state.chats[active]) state.chats[active] = [];
  state.chats[active].push(chatLine(state.playerName, text, "刚刚"));
  const pendingId = `pending_${Date.now()}`;
  state.chats[active].push({ id: pendingId, sender: getAgentSender(active), text: "正在输入…", time: "", pending: true });
  saveState();
  render();

  try {
    const replies = await callAgent(active, text);
    replacePending(active, pendingId, replies);
  } catch {
    const replies = fallbackReplies(active, text);
    replacePending(active, pendingId, replies);
  }

  saveState();
  render();
}

async function callAgent(target, userMessage) {
  const agent = agents[target] || agents.family;
  const compactState = {
    playerName: state.playerName,
    playerAge: state.age,
    lifeStage: getCurrentStageKey(),
    currentChapterId: state.currentChapterId,
    currentEpisodeId: episodes[state.episodeIndex]?.id || "END",
    familyMood: state.stats.security,
    daughterMood: state.stats.independence,
    sungchanBond: state.stats.sungchan,
    eunseokBond: state.stats.eunseok,
    uncleBonds: {
      shotaro: state.stats.uncleCare,
      wonbin: state.stats.uncleCare,
      sohee: state.stats.uncleCare,
      anton: state.stats.uncleCare
    },
    unlockedMemories: state.unlockedMemories,
    recentChoices: state.recentChoices.slice(0, 5),
    recentEvents: state.recentEvents.slice(0, 5),
    memorySummaries: state.memorySummaries.slice(0, 5),
    phoneContext: { currentApp: "KKT", currentChatTarget: target },
    relationshipNotes: state.relationshipNotes
  };

  const groupRule = target === "family"
    ? "你正在家庭群里回复。输出 2-4 行，每行格式为「角色：内容」，角色可从郑成灿爸爸、宋银硕爹地、Shotaro 叔叔、Wonbin 叔叔、Sohee 叔叔、Anton 叔叔中选择。"
    : "你正在私聊回复。只输出 1-3 条短消息，每条不超过 35 个汉字，不要编号，不要解释。";

  const systemPrompt = [
    `你正在扮演平行世界同人游戏中的【${agent.name}】。`,
    "这不是现实人物本人，不代表现实私生活；内容只服务虚构家庭成长文游。",
    `角色定位：${agent.role}。说话风格：${agent.style}`,
    `当前游戏状态：${JSON.stringify(compactState)}`,
    "必须根据当前年龄、最近事件和关系数值回复，不要空泛，不要泄露未解锁回忆。",
    "禁止露骨内容；孩子视角只写家庭陪伴、尊重边界、成长理解和温柔互动。",
    groupRule
  ].join("\n");

  const response = await fetch("/api/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      temperature: 0.86,
      max_tokens: 360
    })
  });

  if (!response.ok) throw new Error("LLM proxy unavailable");
  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error("Empty LLM response");
  return parseAgentContent(target, content);
}

function parseAgentContent(target, content) {
  const lines = content
    .split(/\n+/)
    .map(line => line.replace(/^[-*\d.\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, target === "family" ? 4 : 3);

  if (target === "family") {
    return lines.map(line => {
      const match = line.match(/^([^：:]{2,16})[：:]\s*(.+)$/);
      return {
        sender: match ? match[1].trim() : getAgentSender(target),
        text: match ? match[2].trim() : line
      };
    });
  }

  return lines.map(line => ({
    sender: getAgentSender(target),
    text: line.replace(/^([^：:]{2,16})[：:]\s*/, "")
  }));
}

function fallbackReplies(target, userMessage) {
  const age = state.age;
  const lower = userMessage.toLowerCase();
  const context = state.recentEvents[0] || "";

  const bank = {
    sungchan: [
      age >= 13 ? "爸爸不是要管你，是怕你一个人硬撑。" : "爸爸在，今天也第一个接住你。",
      lower.includes("累") ? "累了就先回家。饭、热水和爸爸都在。" : "你想说多少都可以，爸爸听着。"
    ],
    eunseok: [
      age >= 13 ? "先吃饭。吃完再决定要不要讨厌全世界。" : "嗯，知道了。你的小杯子已经放好了。",
      lower.includes("烦") ? "烦也可以。不要把晚饭一起烦掉。" : "不用马上回答。想好了再说。"
    ],
    shotaro: [
      "今天不想努力也没关系。休息也是明天继续的准备。",
      "你已经做得很好了，慢慢来。"
    ],
    wonbin: [
      "你不是奇怪。只是还没遇到懂你的人。",
      "别急着把自己改掉。现在这样也挺好。"
    ],
    sohee: [
      "谁让你不开心了？我先用高音帮你把坏心情赶走。",
      "今天奖励你一个超大声的加油：做得好！"
    ],
    anton: [
      "我不知道怎么说得很漂亮，但我觉得你已经做得很好了。",
      "如果想逃一会儿，先给我发一段你今天听到的声音。"
    ],
    family: [
      { sender: "郑成灿爸爸", text: context.includes("吵架") ? "爸爸今天会少问一点，但不会少爱你。" : "我们小孩发消息了，大家都看见了吗？" },
      { sender: "宋银硕爹地", text: "看见了。你先不要刷屏。" },
      { sender: "Sohee 叔叔", text: "刷屏怎么了！这是家庭群的生命力！" }
    ]
  };

  if (target === "family") return bank.family;
  return (bank[target] || bank.sungchan).map(text => ({ sender: getAgentSender(target), text }));
}

function replacePending(chatId, pendingId, replies) {
  const list = state.chats[chatId] || [];
  const index = list.findIndex(item => item.id === pendingId);
  if (index === -1) return;
  const lines = replies.map(reply => chatLine(reply.sender, reply.text, "刚刚"));
  list.splice(index, 1, ...lines);
}

function getAgentSender(id) {
  const names = {
    family: "成硕家今日也和平",
    sungchan: "郑成灿爸爸",
    eunseok: "宋银硕爹地",
    shotaro: "Shotaro 叔叔",
    wonbin: "Wonbin 叔叔",
    sohee: "Sohee 叔叔",
    anton: "Anton 叔叔"
  };
  return names[id] || "家人";
}

function getEnding() {
  const route = state.finalRoute;
  const s = state.stats;

  if (route === "stage" || (s.talent >= 80 && s.uncleCare >= 70)) {
    return {
      title: "GE · 我也站上舞台",
      text: "你走向音乐或舞台相关的道路，却没有变成任何人的复制。叔叔们成为你的专业后盾，两位爸爸坐在台下学着只做观众。成灿爸爸仍然会紧张，银硕爹地仍然会稳稳举着手机，但掌声落下时，你最先听见的是自己的呼吸。"
    };
  }

  if (route === "faraway") {
    return {
      title: "OE · 远方的家",
      text: "你去了更远的地方，生活开始有时差、陌生街道和新的语言。可手机每天都会亮起，成灿爸爸问你有没有吃饭，银硕爹地提醒你别把文件拖到最后，Anton 叔叔偶尔发来很短的 demo。家没有跟着你走，却一直在你身后亮着。"
    };
  }

  if (route === "ordinary" || (s.independence >= 80 && s.fanBlessing >= 65)) {
    return {
      title: "GE · 普通而明亮的人生",
      text: "你选择普通生活，也选择把自己的名字写在日常里。你不再需要被镜头证明，也不需要被任何标签定义。周末回家时，餐桌还是那张很大的餐桌，父母仍然相爱，而你终于能用自己的步速走向明亮。"
    };
  }

  if (s.security >= 80 && s.independence >= 60 && Math.abs(s.sungchan - s.eunseok) < 28) {
    return {
      title: "HE · 家仍然是港口",
      text: "你长成了完整的人，既能离开，也能回来。成灿爸爸学会把接送换成等待，银硕爹地学会把提醒藏得更轻。这个家不再替你选择方向，却永远在你需要时打开灯。"
    };
  }

  if (s.independence < 35 && s.sungchan > 78) {
    return {
      title: "BE · 被保护得太紧",
      text: "爱有时也会太满。你成年时很想证明自己可以独自站稳，成灿爸爸的担心却让你更想逃开。幸好回忆档案还在，后续支线里，你们仍然有机会学会新的距离。"
    };
  }

  if (s.eunseok < 35) {
    return {
      title: "BE · 冷淡误会",
      text: "你一度以为银硕爹地不够在意你，直到成年后翻开旧手机，才发现那些短句背后藏着很多沉默的照顾。理解来得晚了一点，但家里的灯还没有灭。"
    };
  }

  return {
    title: "HE · 在爱里长大",
    text: "你没有得到一种标准答案，却得到了稳定的爱、被尊重的边界和足够走向未来的底气。父母爱情是底色，你自己的成长才是主线。"
  };
}

function getSuggestedPhoneApp(updates) {
  if (updates.some(item => item.kind === "message")) return "kkt";
  if (updates.some(item => item.kind === "album")) return "gallery";
  if (updates.some(item => item.kind === "diary")) return "diary";
  if (updates.some(item => item.kind === "fan")) return "fanwall";
  if (updates.some(item => item.kind === "calendar")) return "calendar";
  return "";
}

function getCurrentStageKey() {
  if (state.finished) return "adult";
  return episodes[state.episodeIndex]?.stage || "adult";
}

function inferCharacters(text) {
  const result = [];
  if (text.includes("成灿")) result.push("Sungchan");
  if (text.includes("银硕")) result.push("Eunseok");
  if (text.includes("叔叔")) result.push("Uncles");
  return result.length ? result : ["Family"];
}

function message(chat, sender, text, time) {
  return { kind: "message", chat, sender, text, time };
}

function album(title, year, caption, mood) {
  return { kind: "album", title, year, caption, mood };
}

function fan(name, text) {
  return { kind: "fan", name, text, time: "刚刚" };
}

function diary(text) {
  return { kind: "diary", text, time: "" };
}

function calendar(title, note) {
  return { kind: "calendar", title, note, time: "提醒" };
}

function chatLine(sender, text, time = "刚刚") {
  return {
    id: `msg_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    sender,
    text,
    time
  };
}

function paragraphs(text) {
  return text
    .split(/\n{2,}/)
    .map(part => `<p>${escapeHtml(part)}</p>`)
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getClock() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function getPhoneTitle() {
  const app = phoneApps.find(item => item.id === state.phoneApp);
  if (!app || state.phoneApp === "home") return "iPhone";
  return app.label;
}

function scrollChatToBottom() {
  const list = document.querySelector("[data-message-list]");
  if (list) list.scrollTop = list.scrollHeight;
}

function tapBurst(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return;
  const burst = document.createElement("div");
  burst.className = "tap-burst";
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  for (let i = 0; i < 9; i += 1) {
    const dot = document.createElement("span");
    dot.style.setProperty("--angle", `${i * 40}deg`);
    dot.style.setProperty("--distance", `${24 + (i % 3) * 10}px`);
    burst.appendChild(dot);
  }
  document.body.appendChild(burst);
  window.setTimeout(() => burst.remove(), 700);
}
