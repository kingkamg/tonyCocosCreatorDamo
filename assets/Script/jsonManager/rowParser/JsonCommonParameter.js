var JsonBase = require('../JsonBase'),
util = require('util');

var JosnCommonParameter = function () {

	var data = [["relive",2,"","复活次数"],["relivecost","50#60","","复活价格"],["buytime",2,"","买时间次数"],["buytimeoncetime",60,"","单次延长时间（秒"],["buytimecost","50#60","","买时间价格"],["strengthmax",100,"","体力自动回复的上限（服务端用）"],["Custom_JingYingOpen",10109,"","精英难度开启条件，填的是关卡id"],["Custom_SaoDang",10105,"","扫荡功能开放条件，填的是关卡id"],["Sys_UndoPicColor01","0.3#0.3#0.3#1","","图片压暗的色值"],["Sys_UndoColor01","ba4d4dFF","","数量不足的文字颜色：红色"],["Sys_UndoColor02","0.73#0.30#0.30#1","","数量不足的文字颜色：红色"],["Sys_SuggestTextNum",200,"","建议系统玩家可以输入的字符数。"],["Sys_StrengthRenewTime",300,"","每5分钟整恢复一次（仅客户端在用，服务器值和这个一样，不过是自己那边写的）。"],["Sys_StrengthRenewNum",1,"","体力自动恢复每次恢复几点。"],["Sys_RoleGradeIcon_1","11#12#13#14#15#16#17","","填写不同的评级ID对应的评级图标ID，界面用（按评级id对应顺序读取，比如评级1，就读取11）"],["Sys_RoleGradeIcon_2","91#92#93#94#95#96#97","","填写不同的评级ID对应的评级图标ID，头像用（按评级id对应顺序读取，比如评级1，就读取11）"],["Sys_RoleGradeEffect","551#552#553#554#555#556#557","","填写不同的评级ID对应的评级特效ID（按评级id对应顺序读取，比如评级1，就读取551）"],["Player_RoleSellList","407#307#207#107","","商店猎魔人购买和解锁中，可以购买或解锁的猎魔人ID列表（程序按顺序从左到右显示）。"],["Player_RoleQuality","1#2#3#3#3#3#4#4#4#4#4","","填写不同品质显示的品质框的图片ID（按品质数值顺序读取，比如品质是2，则品质框的图片ID就是2）"],["Player_RoleQualityColor","#dcdcdc;#479f3b;#416d97;#416d97;#416d97;#416d97;#a74e80;#a74e80;#a74e80;#a74e80;#a74e80","不同品质角色的名字颜色","填写不同品质角色显示的名字颜色色值（按品质数值顺序读取，比如品质是2，则名字颜色色值就是#479f3b），注意，这里用；号隔开"],["Equip_QualityColor","#dcdcdc;#479f3b;#416d97;#a74e80;#d3653f;#ba4d4d;#cc9f25","不同品质装备的名字颜色","填写不同品质的装备显示的名字颜色色值（按品质数值顺序读取，比如品质是2，则名字颜色色值就是#479f3b）"],["Item_QualityColor","#dcdcdc;#479f3b;#416d97;#a74e80;#d3653f;#ba4d4d;#cc9f25","不同品质物品的名字颜色","填写不同品质的物品显示的名字颜色色值（按品质数值顺序读取，比如品质是2，则名字颜色色值就是#479f3b）"],["Player_FightValueMax",2500,"","战斗力--战力最大值。"],["Player_HeadNumQuality",3,"","品质大于等于多少，才开始在头像上面显示+x"],["Player_IsSkillOpen",1,"","决定角色培养界面上，技能分页是否打开的开关。"],["Player_HeroBagNum",100,"","初始化角色背包格子上限"],["Player_ItemBagNum",100,"","初始背包格子上限"],["Player_EquipmentBagNum",108,"","装备包裹上限"],["Player_EquipmentWakeBagNum",100,"","觉醒材料上限"],["player_buycustomsclean",20,"","购买扫荡券消耗的钻石数"],["player_buycustomscost","30#60#100","","关卡每次重置对应花费的钻石数量（Boss关）。"],["player_buycustomsmaxtime",3,"","关卡每天可以重置的次数（Boss关）。"],["player_buystrengthtime",10,"","体力购买次数上限"],["player_buystrengthcost","80#100#100#200#200#400#400#800#800#800","","各次购买体力消耗的钻石数间用#隔开"],["player_buystrengthget",100,"","单次购买体力获得的体力值"],["Battle_IsPenMonsterShow",0,"","怪物展示动作开关（0是关，1是开）"],["Battle_itematk",30000,"","主动伤害道具基本输出"],["Battle_hurtspace",2000,"","最短受击间隔时间（毫秒）"],["Battle_MonsterBulletLivingDistance",55,"","怪物子弹存活距离"],["Battle_MonsterAimPlayerYOff",0.5,"","怪物弹幕瞄准猎魔人的高度（预瞄准和追踪类，不受此影响）"],["Battle_MonsterHitShake_Time",0.1,"","怪物被击的震动时间，单位秒"],["Battle_MonsterHitShake_Strong","0.6#1#0.6","","怪物被击的震动的三维幅度（米）"],["Battle_MonsterHitShake_Direction","0#0#0","","怪物被击的震动的方向(绕轴旋转)"],["Battle_DeadMonsterBornSpace01",5000,"","非boss战斗时送死怪物出生间隔"],["Battle_DeadMonsterBornSpace02",7000,"","打boss时送死怪物的出生间隔"],["Battle_DeadMonsterDouble",0,"","出两波送死怪的几率"],["Battle_MonsterSkillGroupCd01",0.5,"","送死怪物的攻击套路cd，单位秒。"],["Battle_MonsterSkillGroupCd02",1.5,"","普通怪物的攻击套路cd，单位秒。"],["Battle_MonsterSkillGroupCd03",1.5,"","精英怪物的攻击套路cd，单位秒。"],["Battle_BossCd01",1,"","Boss攻击套路cd，单位秒。"],["Battle_playerhp",10000,"","玩家标准生命"],["Battle_playeratk",2000,"","玩家标准攻击"],["Battle_monstershp",100,"","标准送死怪生命"],["Battle_monstersatk",1500,"","标准送死怪攻击"],["Battle_monstermhp",900,"","标准小怪生命"],["Battle_monstermatk",1500,"","标准小怪攻击"],["Battle_monsterlhp",6000,"","标准精英怪生命"],["Battle_monsterlatk",1500,"","标准精英怪攻击"],["Battle_bosshp",200000,"","标准boss生命"],["Battle_bossatk",3000,"","标准boss攻击"],["Battle_traphp",1000,"","标准陷阱生命"],["Battle_trapatk",1500,"","标准陷阱攻击"],["Battle_monstersscore",5,"","标准送死怪积分"],["Battle_monstermscore",200,"","标准小怪积分"],["Battle_monsterlscore",400,"","标准精英怪积分"],["Battle_bossscore",2500,"","标准boss积分"],["Battle_trapscore",50,"","标准陷阱积分"],["Battle_monstersdropsoul","1#3","","送死怪掉落魔灵数，积分=4"],["Battle_monstermdropsoul","1#5","","小怪掉落魔灵数，积分=150"],["Battle_monsterdropsoul","5#5","","精英怪掉落魔灵数，积分=300"],["Battle_bossdropsoul","25#25","","BOSS掉落魔灵数，积分=1800"],["Battle_trapdropsoul","1#3","","陷阱掉落魔灵数，积分=100"],["Battle_monstersSoulId",6,"","送死怪掉落魔灵道具ID，积分=2"],["Battle_monstermSoulId",7,"","小怪掉落魔灵道具ID，积分=50"],["Battle_monsterSoulId",8,"","精英怪掉落魔灵道具ID，积分=60"],["Battle_bossSoulId",9,"","BOSS掉落魔灵道具ID，积分=72"],["Battle_trapSoulId",7,"","陷阱掉落魔灵道具ID，积分=50"],["Battle_SoulDropRange",5,"","魔灵爆在怪物身边的范围半径"],["Battle_timescore",50,"","剩余时间加分系数（秒）"],["Battle_hpscore",10,"","剩余血量加分系数（1%)"],["Battle_difficultdegree",0.7,"","难度边际调节系数（值越小对战力依赖越高）（float类型）"],["Battle_monsterpowerup",4,"","低于战力怪物加成倍率（值越大低于战力越难）（float类型）"],["Battle_monsterpowerdown",1,"","高于战力怪物减弱倍率（值越大高于战力越容易）（float类型）"],["Battle_monsterpowerupmax",10,"","低于关卡要求战力怪物增强上限（float类型）"],["Battle_monsterpowerdownmax",0.1,"","高于关卡要求战力怪物减弱上限（float类型）"],["Battle_powerlv0",1,"","玩家普通攻击（float类型）"],["Battle_powerlv1",1.2,"","威力加强1对玩家加强比例（float类型）"],["Battle_powerlv2",1.5,"","威力加强2对玩家加强比例（float类型）"],["Battle_powerlv3",2,"","威力加强3对玩家加强比例（float类型）"],["Battle_rampagepower",4,"","暴走加强比例（float类型）"],["Battle_rampagescore",2,"","暴走积分增加比例（float类型）"],["Battle_rampagetime",5,"","暴走持续基础时间（float类型）"],["Battle_hpfight",0.2,"","每点生命提供的战斗力（生命战力系数）（float类型）"],["Battle_atkfight",1,"","每点攻击提供的战斗力（攻击战力系数）（float类型）"],["init_Diamond",100,"","创角初始钻石"],["init_Gold",10000,"","创角初始金币"],["init_Energy",200,"","创角初始体力"],["init_Hero","101#3101#6101#9101","","设置初始赠送并出战的角色，是一个列表（同类型角色，只能赠送一个，禁止填多个）。"],["init_Pet","0#101","","创角初始宠物"],["Battle_BattleItem01",1,"","每波怪物掉落战斗道具的上限个数"],["Battle_BattleItem02",0.05,"","每波送死怪物会掉落战斗道具的几率（float类型）"],["Battle_BattleItem03",8,"","战斗道具掉落半径范围"],["Battle_BattleItem04",3,"","战斗道具掉落在空中的高度，单位“米”"],["Battle_BattleItem05",5000,"","道具存活时间剩余多久后开始闪动，单位“毫秒”"],["Battle_BattleItem06","1#2#3#4","","战斗怪物可掉落道具ID：攻击升级、暴走、护盾、补血"],["Battle_BattleItem07","1#2#3","","送死怪客掉落道具ID：攻击升级、暴走、护盾"],["Battle_BattleItem08",2,"","战斗道具Y轴漂浮幅度（float类型）"],["BattlePrizeBoxDistEarth",1.5,"","战斗掉宝箱的离地高度，单位米"],["BattlePrizeBoxFloatRadiu",0.3,"","战斗掉宝箱漂浮幅度，单位米"],["BattlePrizeBoxItemFlyTime",1.5,"","战斗掉宝箱吃到后图标飞到右上角的时长，单位秒"],["Battle_BattleItem09","-8#8","","X轴移动范围（float类型）"],["Battle_BattleItem10",2,"","X轴移动速度（float类型）"],["Battle_BossWarningTime",3,"","boss出场warinning持续时间"],["lvupMoney",0.2,"","升级消耗金钱系数（float类型）"],["player_skillextralv",10,"","技能预留等级"],["Battle_PlayerHitShakeCamera_Enable",1,"","角色受击时的震屏设置:0关闭/1开启。"],["Battle_PlayerHitShakeCamera_Speed",70,"","角色受击时的震屏设置：震动速度"],["Battle_PlayerHitShakeCamera_Strong",2,"","角色受击时的震屏设置：震动幅度"],["Battle_PlayerHitShakeCamera_Counts",6,"","角色受击时的震屏设置：震动次数"],["Battle_PlayerHitShakeCamera_DeclineRate",0.8,"","角色受击时的震屏设置：每次震动速度和强度衰减比例"],["Battle_ClearAttackRange",40,"","清理攻击体的限制范围，单位“米”（比如boss警告特效播放时、角色放大招时……）"],["Custom_DropKeyNum",1,"","关卡胜利时，奖励的物品“战斗勋章”的数量。"],["Battle_PlayerDieDrop","1&4#3&1","","角色死亡掉落的道具。"],["Battle_PreciseHitEffectTime",0.2,"","精准打击瞄准特效变化间隔（不被攻击左转，被攻击右转）"],["Debug_BattleMonsterHealthDamage",0,"","调试专用之战斗时显示怪的血量伤害"],["Connet_Waiting",1.5,"","通讯中出等待框前的等待时间（网络延时）"],["Connet_ReLogin",15,"","通讯中出重登录框前的等待时间"],["Battle_RoleDieSoundDelayTime",0.3,"","对象死亡触发后多久播放死亡音效，因为前面要播受伤音效"],["Battle_MonsterPreciseBreakShakeId",3,"","怪物精准打击体被击爆时震屏编号"],["HeroGrowUpAction","growup","","角色成长时播放动作"],["Battle_PhysicalAtkWarnSoundId",109,"","物理攻击警告音效ID"],["Battle_PlayerAttackXangleDefault",40,"","战斗系统中玩家普通射击默认射角，它是相对于镜头的"],["Battle_PlayerAttackXangleMax",55,"","战斗系统中玩家普通射击最大射角，它是相对于镜头的"],["Battle_PlayerAttackRange",50,"","战斗系统中玩家攻击的最大射程"],["RedPos_HeroUpNeedMaterialNum",10,"","主界面玩家有10个以上角色升级经验材料（升级红点的其中一个条件）"],["RedPos_SkillConditionUpLvNum",1,"","玩家有足够的金币可以加当前最贵的技能点若干级（这个数量需要支持在参数表配置)"],["RedPos_minMoney",200,"","最低升级红点金币"],["Debug_guidebutton",1.5,"","引导的按钮亮度区域放大比例，小于1为缩小"],["RedPosRefreshTime",200,"","红点刷新频率（单位为毫秒）"],["Guide_WaitPassTime",8,"","引导出现跳过的时间"],["Guide_BossID",100,"","引导BOSS的BOSSid"],["Guide_BossHpRate",0.8,"","引导BOSS的剩余血量"],["Guide_effectDelay",1.5,"","有特效的情况下引导中按钮的延时"],["Guide_battleItem",3,"","战斗道具引导图出现的波次"],["Guide_rampage",9,"","暴走引导出现的波次"],["guide_Custom",20,"","显示提示闯关特效的限制等级（猎魔人历史最高等级）"],["Act_operationFlag","sd_js#sd_zb#sd_zbcl#dl_1#dl_2#dl_3#dl_4#dl_5#dl_6#dl_7#jl_gq#jl_jy#jl_wj#cz_dcfl1#cz_dcfl3#cz_dcfl4#cz_lcfl1#cz_lcfl2#gg_tlbj#ltl_cj#kf _zl","","活动运营标识初始值"],["recharge_operationFlag","cz1#cz2#cz3#cz4#cz5#cz6","","充值运营标志"],["equip_refineCostMoney",1.47,"","装备精炼消耗金币系数（float类型）"],["equip_refineCostDiamond","10#10#20#20#40#40#80#80","","装备精炼买次数价格"],["equip_refineCostTime",8,"","装备精炼可购买次数"],["equip_refineFree",8,"","装备免费精炼次数"],["equip_washMoney",1000,"","洗练消耗金币"],["equip_washDiamond",1,"","洗练钻石兑换比例"],["equip_washStone",20,"","单次洗练消耗洗练石"],["equip_washLock","1#2#4","","分别为，初始费用，锁定1倍数，锁定2倍数"],["equip_washqua","0.2#0.7#0.9#1","","洗练属性白#绿#蓝#紫区间"],["Equip_WashQualityColor","#8e8d84;#479f3b;#416d97;#a74e80;#d3653f","","洗练品质颜色"],["equip_washOpenDiamond",100,"","洗练开启钻石"],["Equip_QualityAdd","1#1.05#1.1#1.15#1.2#1.25","","装备品质加成倍率"],["Endless_ProgressSeting","5&222&9251#10&223&9252#15&224&9253#30&225&9254","","无尽战斗区段图片和文字设置，格式为：第x大关之前对应是什么区段的图标ID和程序字ID。"],["Endless_ProgressClips",3,"","多少小关算一个大关"],["Endless_GetRoleNumLimit",20,"","玩家从无尽中每天可以获得的角色数量上限。"],["Endless_RankMaxNum",1000,"","无尽--两个排行榜最多排几名"],["Endless_RankDisplayNum",10,"","无尽--两个排行榜下发前几名的"],["Endless_ResultNum",10,"","无尽--最多存储的赛果条目数量"],["Endless_MatchTime01",5,"","无尽--第1段匹配持续时间"],["Endless_MatchTime02",10,"","无尽--第2段匹配持续时间"],["Endless_MatchPower01","0.95&1.05","","无尽--匹配前5秒选取对象的战力在玩家周围多少比例范围"],["Endless_MatchPower02","0.9&1.1","","无尽--匹配前10秒选取对象的战力在玩家周围多少比例范围"],["Endless_FightNormalValue",1000,"","无尽模式战斗力标准值（值越大越容易） "],["Endless_DifficultLv",50,"","无尽难度倍数参数（值越大越容易） "],["Endless_FightParameter",60000,"","无尽难度战力参数（值越大越难） "],["Endless_AiScoreAddTime","2&4","","无尽--AI得分随机几秒刷新一次"],["Endless_ReliveCost","50#60","","无尽--每次复活价格"],["Endless_ReliveTimes",2,"","无尽--可以复活的次数"],["Endless_AiLoadingTime",1,"","无尽Ailoading花费的时间，单位秒"],["Endless_LoadingOverTime",30,"","无尽玩家loading超时时长，单位秒"],["Endless_AiWinRate01","0.6&0.8&1","","连胜次数，对应AI胜利几率（从连胜1次开始）"],["Endless_AiWinRate02","0.4&0.2&0","","连败次数，对应AI胜利几率（从连败1次开始）"],["Endless_AiWinRate03",0,"","连胜和连败都是0的时候，AI的胜利几率"],["Endless_AiLoseEndRate",0.2,"","AI如果是失败的，则每场有多少几率提前结束挑战"],["Endless_MatchPowerAdd",0.1,"","每次连胜，玩家匹配战力在实际战力基础上，提升的比例"],["Endless_MatchPowerReduce",0.1,"","每次连败，玩家匹配战力在实际战力基础上，降低的比例"],["Endless_WinAiScore01",1.1,"","胜利ai，得分可以取的最高分 = 玩家当前得分 * 这个值。"],["Endless_WinAiScore02","1.01&1.2","","胜利AI，最终需要矫正得分时，得分 = 玩家得分的一定倍率区间内随机取值"],["Endless_LoseAiScore",0.9,"","失败ai，得分可以取的最高分 = 玩家当前得分 * 这个值。"],["Endless_WinAiEndTime","10&30","","Ai如果是赢的，那么在玩家结束后，随机一定时间结束挑战（15到30秒之间随机一个时间）。"],["Endless_AiPowerRate","0.9&1.1","","AI战力从玩家匹配战力的一定倍率区间内随机选取一个值。"],["Endless_AiAddScoreRate","0.9&1.1","","AI得分加成，在玩家得分加成的一定倍率区间内，随机取一个值。"],["Endless_KuaFuAiMark",20,"","玩家在无尽两个排行榜任意一个榜超过该名次，则匹配到的AI，要增加“跨服玩家”标识显示。"],["Endless_KuaFuAiMark01",20,"","无尽任意一个榜已上榜玩家数量少于这个值，则匹配到的AI，要增加“跨服玩家”标识显示。"],["BattlePlayerMoveJoyXMin",60,"","战斗系统当使用摇杆时，至少左右移动手指多少像素时触发改变方向，针对1920*1280的尺寸"],["BattlePlayerMoveJoyRadiu",80,"","战斗系统的玩家移动摇杆的面板半径，主要是给手柄定位用的，针对1920*1280的尺寸"],["HitCountMaxItemProgress","700#800#1000#1500#2000","","连击功能之道具进度的最大值"],["HitCountDegreOfSecond",-100,"","连击功能之道具进度每秒减少的固定值"],["HitCountItemUp",275,"","连击功能之当发生击中怪时，道具进度值增加量"],["HitCountMaxHitWaitTime",3,"","连击功能之多久未击中怪连击值归0"],["HitCountHitAddNum",5,"","连击功能之当击中怪时增加多少连击值"],["HitCountDegreRateOnPlayerHit",-1,"","连击功能之当玩家受击时，道具进度值的衰减比例"],["HitCountProgressAddRate",0,"","连击功能之道具积分增长系数"],["item_heroPartNum",80,"","角色碎片合成需要数量"],["ScoreAddRateOnEnemyDieForMad",2,"","怪死亡时若玩家是暴走状态则基础分增长一定比例，并在显示魔灵分时有“X此值”的内容"],["PlayerHeadHpViewOnLowToRate",0.5,"","当变化终值低于指定比例时才显示"],["PlayerHeadHpViewOnHighChange",0.3,"","当变化量大于指定比例时一定显示"],["BattleNormalHitMatRedTime",0.1,"","通用受击模型材质变红时长"],["BattleNormalHitMatRedColor","1,0.5,0.5,1","","材质变红的滤色"],["DataNote_ChapterNum",8,"","数据统计---统计多少个普通关卡多少章节的星级数量"],["wastePlayerNote",1,"","服务器记录流失玩家的行为条目数"],["BattleBarrageRandomAngleDistance",10,"","弹幕使用瞄准时随机偏角发射的距离条件，超过这个距离的目标才会使用随机偏角。"],["Sys_ExpItemId",2010,"","经验不足的时候用来显示获取途径的经验物品ID"],["EndlessPlayerMinHit",1500,"","无尽模式下玩家受到的最低伤害值"],["EndlessBossMaxHp",400000,"","无尽模式下BOSS的最高生命值"],["EatAtkUpEffIdToFace",142,"战斗UI","吃升级道具时特效飞到头像的特效编号"],["EffToFaceTimeLeng",0.4,"战斗UI","特效飞至头像的时长"],["UiWeaponLvEffId",143,"战斗UI","战斗界面之武器等级变化事件特效"],["UiWeaponMadEffId",144,"战斗UI","战斗界面之武器暴走状态特效"]];

	var indexs = {"relive":3,"relivecost":4,"buytime":5,"buytimeoncetime":6,"buytimecost":7,"strengthmax":8,"Custom_JingYingOpen":9,"Custom_SaoDang":10,"Sys_UndoPicColor01":11,"Sys_UndoColor01":12,"Sys_UndoColor02":13,"Sys_SuggestTextNum":14,"Sys_StrengthRenewTime":15,"Sys_StrengthRenewNum":16,"Sys_RoleGradeIcon_1":17,"Sys_RoleGradeIcon_2":18,"Sys_RoleGradeEffect":19,"Player_RoleSellList":20,"Player_RoleQuality":21,"Player_RoleQualityColor":22,"Equip_QualityColor":23,"Item_QualityColor":24,"Player_FightValueMax":25,"Player_HeadNumQuality":26,"Player_IsSkillOpen":27,"Player_HeroBagNum":28,"Player_ItemBagNum":29,"Player_EquipmentBagNum":30,"Player_EquipmentWakeBagNum":31,"player_buycustomsclean":32,"player_buycustomscost":33,"player_buycustomsmaxtime":34,"player_buystrengthtime":35,"player_buystrengthcost":36,"player_buystrengthget":37,"Battle_IsPenMonsterShow":38,"Battle_itematk":39,"Battle_hurtspace":40,"Battle_MonsterBulletLivingDistance":41,"Battle_MonsterAimPlayerYOff":42,"Battle_MonsterHitShake_Time":43,"Battle_MonsterHitShake_Strong":44,"Battle_MonsterHitShake_Direction":45,"Battle_DeadMonsterBornSpace01":46,"Battle_DeadMonsterBornSpace02":47,"Battle_DeadMonsterDouble":48,"Battle_MonsterSkillGroupCd01":49,"Battle_MonsterSkillGroupCd02":50,"Battle_MonsterSkillGroupCd03":51,"Battle_BossCd01":52,"Battle_playerhp":53,"Battle_playeratk":54,"Battle_monstershp":55,"Battle_monstersatk":56,"Battle_monstermhp":57,"Battle_monstermatk":58,"Battle_monsterlhp":59,"Battle_monsterlatk":60,"Battle_bosshp":61,"Battle_bossatk":62,"Battle_traphp":63,"Battle_trapatk":64,"Battle_monstersscore":65,"Battle_monstermscore":66,"Battle_monsterlscore":67,"Battle_bossscore":68,"Battle_trapscore":69,"Battle_monstersdropsoul":70,"Battle_monstermdropsoul":71,"Battle_monsterdropsoul":72,"Battle_bossdropsoul":73,"Battle_trapdropsoul":74,"Battle_monstersSoulId":75,"Battle_monstermSoulId":76,"Battle_monsterSoulId":77,"Battle_bossSoulId":78,"Battle_trapSoulId":79,"Battle_SoulDropRange":80,"Battle_timescore":81,"Battle_hpscore":82,"Battle_difficultdegree":83,"Battle_monsterpowerup":84,"Battle_monsterpowerdown":85,"Battle_monsterpowerupmax":86,"Battle_monsterpowerdownmax":87,"Battle_powerlv0":88,"Battle_powerlv1":89,"Battle_powerlv2":90,"Battle_powerlv3":91,"Battle_rampagepower":92,"Battle_rampagescore":93,"Battle_rampagetime":94,"Battle_hpfight":95,"Battle_atkfight":96,"init_Diamond":97,"init_Gold":98,"init_Energy":99,"init_Hero":100,"init_Pet":101,"Battle_BattleItem01":102,"Battle_BattleItem02":103,"Battle_BattleItem03":104,"Battle_BattleItem04":105,"Battle_BattleItem05":106,"Battle_BattleItem06":107,"Battle_BattleItem07":108,"Battle_BattleItem08":109,"BattlePrizeBoxDistEarth":110,"BattlePrizeBoxFloatRadiu":111,"BattlePrizeBoxItemFlyTime":112,"Battle_BattleItem09":113,"Battle_BattleItem10":114,"Battle_BossWarningTime":115,"lvupMoney":116,"player_skillextralv":117,"Battle_PlayerHitShakeCamera_Enable":118,"Battle_PlayerHitShakeCamera_Speed":119,"Battle_PlayerHitShakeCamera_Strong":120,"Battle_PlayerHitShakeCamera_Counts":121,"Battle_PlayerHitShakeCamera_DeclineRate":122,"Battle_ClearAttackRange":123,"Custom_DropKeyNum":124,"Battle_PlayerDieDrop":125,"Battle_PreciseHitEffectTime":126,"Debug_BattleMonsterHealthDamage":127,"Connet_Waiting":128,"Connet_ReLogin":129,"Battle_RoleDieSoundDelayTime":130,"Battle_MonsterPreciseBreakShakeId":131,"HeroGrowUpAction":132,"Battle_PhysicalAtkWarnSoundId":133,"Battle_PlayerAttackXangleDefault":134,"Battle_PlayerAttackXangleMax":135,"Battle_PlayerAttackRange":136,"RedPos_HeroUpNeedMaterialNum":137,"RedPos_SkillConditionUpLvNum":138,"RedPos_minMoney":139,"Debug_guidebutton":140,"RedPosRefreshTime":141,"Guide_WaitPassTime":142,"Guide_BossID":143,"Guide_BossHpRate":144,"Guide_effectDelay":145,"Guide_battleItem":146,"Guide_rampage":147,"guide_Custom":148,"Act_operationFlag":149,"recharge_operationFlag":150,"equip_refineCostMoney":151,"equip_refineCostDiamond":152,"equip_refineCostTime":153,"equip_refineFree":154,"equip_washMoney":155,"equip_washDiamond":156,"equip_washStone":157,"equip_washLock":158,"equip_washqua":159,"Equip_WashQualityColor":160,"equip_washOpenDiamond":161,"Equip_QualityAdd":162,"Endless_ProgressSeting":163,"Endless_ProgressClips":164,"Endless_GetRoleNumLimit":165,"Endless_RankMaxNum":166,"Endless_RankDisplayNum":167,"Endless_ResultNum":168,"Endless_MatchTime01":169,"Endless_MatchTime02":170,"Endless_MatchPower01":171,"Endless_MatchPower02":172,"Endless_FightNormalValue":173,"Endless_DifficultLv":174,"Endless_FightParameter":175,"Endless_AiScoreAddTime":176,"Endless_ReliveCost":177,"Endless_ReliveTimes":178,"Endless_AiLoadingTime":179,"Endless_LoadingOverTime":180,"Endless_AiWinRate01":181,"Endless_AiWinRate02":182,"Endless_AiWinRate03":183,"Endless_AiLoseEndRate":184,"Endless_MatchPowerAdd":185,"Endless_MatchPowerReduce":186,"Endless_WinAiScore01":187,"Endless_WinAiScore02":188,"Endless_LoseAiScore":189,"Endless_WinAiEndTime":190,"Endless_AiPowerRate":191,"Endless_AiAddScoreRate":192,"Endless_KuaFuAiMark":193,"Endless_KuaFuAiMark01":194,"BattlePlayerMoveJoyXMin":195,"BattlePlayerMoveJoyRadiu":196,"HitCountMaxItemProgress":197,"HitCountDegreOfSecond":198,"HitCountItemUp":199,"HitCountMaxHitWaitTime":200,"HitCountHitAddNum":201,"HitCountDegreRateOnPlayerHit":202,"HitCountProgressAddRate":203,"item_heroPartNum":204,"ScoreAddRateOnEnemyDieForMad":205,"PlayerHeadHpViewOnLowToRate":206,"PlayerHeadHpViewOnHighChange":207,"BattleNormalHitMatRedTime":208,"BattleNormalHitMatRedColor":209,"DataNote_ChapterNum":210,"wastePlayerNote":211,"BattleBarrageRandomAngleDistance":212,"Sys_ExpItemId":213,"EndlessPlayerMinHit":214,"EndlessBossMaxHp":215,"EatAtkUpEffIdToFace":216,"EffToFaceTimeLeng":217,"UiWeaponLvEffId":218,"UiWeaponMadEffId":219};

	var indexNames = {"id":0,"value":1,"":2,"describe":3};

	JsonBase.call( this, data , indexs , indexNames );

};

util.inherits( JosnCommonParameter, JsonBase );

module.exports = JosnCommonParameter;

