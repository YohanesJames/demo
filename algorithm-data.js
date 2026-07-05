(function () {
  'use strict';

  const groups = [
    {
      id: 'cabin',
      zh: '内部算法功能',
      en: 'Internal Algorithm Functions',
      descriptionZh: '面向驾驶员、乘员与座舱场景的内部算法能力。',
      descriptionEn: 'Internal algorithm capabilities for drivers, passengers, and in-cabin scenarios.'
    },
    {
      id: 'road',
      zh: '外部算法功能',
      en: 'External Algorithm Functions',
      descriptionZh: '面向道路环境、车辆身份与盲区风险的外部算法能力。',
      descriptionEn: 'External algorithm capabilities for road environments, vehicle identity, and blind-zone risks.'
    }
  ];

  const algorithms = {
    dms: {
      id: 'dms', group: 'cabin', icon: 'dms',
      zh: 'DMS 驾驶员监测', en: 'DMS',
      summaryZh: '识别疲劳、分心、抽烟、打电话等驾驶员状态。',
      summaryEn: 'Detects fatigue, distraction, smoking, phone use, and other driver states.'
    },
    'facial-recognition': {
      id: 'facial-recognition', group: 'cabin', icon: 'face',
      zh: '人脸识别', en: 'Facial Recognition',
      summaryZh: '面向授权驾驶员与人员身份核验的视觉识别能力。',
      summaryEn: 'Visual identity recognition for authorized drivers and personnel workflows.'
    },
    'p3-passenger-flow': {
      id: 'p3-passenger-flow', group: 'cabin', icon: 'passengers',
      zh: 'APC', en: 'APC',
      summaryZh: '面向公共交通的 AI 客流监测系统，支持上下客统计、身高估算、OD 匹配、物品计数、车门状态检测与自动标定。',
      summaryEn: 'AI passenger-flow monitoring for public transport, supporting boarding/alighting counts, height estimation, OD matching, item counting, door detection, and self-calibration.'
    },
    'volume-measurement': {
      id: 'volume-measurement', group: 'cabin', icon: 'volume',
      zh: '体积测量', en: 'Volume Measurement',
      summaryZh: '采用单摄像头大模型感知，实时估算货物体积、剩余空间、分道可用长度与装载率。',
      summaryEn: 'Single-camera large-model perception estimates cargo volume, remaining space, lane-level availability, and load rate in real time.'
    },
    adas: {
      id: 'adas', group: 'road', icon: 'adas',
      zh: 'ADAS 驾驶辅助', en: 'ADAS',
      summaryZh: '感知道路车辆、行人、车道与前向碰撞风险。',
      summaryEn: 'Perceives vehicles, pedestrians, lanes, and forward-collision risks.'
    },
    'license-plate-recognition': {
      id: 'license-plate-recognition', group: 'road', icon: 'plate',
      zh: '车牌识别', en: 'License Plate Recognition',
      summaryZh: '检测并识别车牌字符，支持车辆通行与运营记录。',
      summaryEn: 'Detects and recognizes license plates for vehicle-access and operations records.'
    },
    bsw: {
      id: 'bsw', group: 'road', icon: 'bsw',
      zh: 'BSW 盲区预警', en: 'BSW',
      summaryZh: '识别行人、骑行者等盲区目标，感知道路边界并预测行人碰撞风险。',
      summaryEn: 'Identifies blind-spot targets, perceives road boundaries, and predicts pedestrian collision risk.'
    }
  };

  const details = {
    dms: {
      pageTitleZh: '驾驶员监测系统（DMS）',
      pageTitleEn: 'Driver Monitoring System (DMS)',
      statusZh: '驾驶员状态与安全行为实时监测',
      statusEn: 'Real-time driver-state and safety-behavior monitoring',
      overviewTitleZh: '驾驶员状态与风险行为感知',
      overviewTitleEn: 'Driver State and Risk-behavior Awareness',
      overviewZh: 'DMS 通过座舱摄像头与 AI 算法实时监测驾驶员状态，识别疲劳、分心、异常行为与安全合规风险，同时监控摄像头遮挡和人脸可见状态。',
      overviewEn: 'DMS uses in-cabin camera perception and AI algorithms to monitor driver status in real time, identify fatigue, distraction, unsafe behavior, and safety-compliance risks, and monitor camera occlusion and face availability.',
      mediaTitleZh: '计划演示视频',
      mediaTitleEn: 'Planned Demonstration Videos',
      mediaSummaryZh: '以下六项演示位置已预留，视频文件添加后即可直接展示。',
      mediaSummaryEn: 'Six demonstration slots are prepared and will display the videos once the files are provided.',
      plannedVideos: [
        { zh: '疲劳驾驶检测', en: 'Fatigue Driving Detection' },
        { zh: '抽烟检测', en: 'Smoking Detection' },
        { zh: '未系安全带检测', en: 'Unfastened Seat Belt Detection' },
        { zh: '使用手机检测', en: 'Mobile Phone Use Detection' },
        { zh: '进食和饮水检测', en: 'Eating and Drinking Detection' },
        { zh: '镜头遮挡检测', en: 'Lens Occlusion Detection' }
      ],
      metrics: [
        { valueZh: '实时', valueEn: 'Real Time', labelZh: '驾驶员状态与行为监测', labelEn: 'Driver-state and behavior monitoring' },
        { valueZh: '摄像头 + AI', valueEn: 'Camera + AI', labelZh: '座舱视觉感知', labelEn: 'In-cabin visual perception' },
        { valueZh: '11 项', valueEn: '11', labelZh: '驾驶员监测功能', labelEn: 'Driver-monitoring functions' }
      ],
      capabilitiesTitleZh: '核心监测能力',
      capabilitiesTitleEn: 'Core Monitoring Capabilities',
      capabilities: [
        { titleZh: '疲劳驾驶检测', titleEn: 'Fatigue Driving Detection', bodyZh: '结合闭眼时长、困倦眨眼、面部表情和头部姿态等特征识别驾驶疲劳。', bodyEn: 'Combines eye-closure duration, sleepy blinking, facial expression, and head posture to identify driver fatigue.' },
        { titleZh: '分心驾驶检测', titleEn: 'Distracted Driving Detection', bodyZh: '通过头部姿态和视线方向识别左右分心、低头及其他异常注意力状态。', bodyEn: 'Uses head pose and gaze direction to identify left/right distraction, downward glances, and other abnormal attention states.' },
        { titleZh: '打哈欠检测', titleEn: 'Yawning Detection', bodyZh: '分析驾驶员张嘴幅度与持续时间，并在超过设定阈值时触发告警。', bodyEn: 'Analyzes mouth-opening amplitude and duration, triggering an alarm when the configured threshold is exceeded.' },
        { titleZh: '使用手机检测', titleEn: 'Mobile Phone Use Detection', bodyZh: '结合手机特征与手部姿态识别驾驶过程中的手机使用行为。', bodyEn: 'Uses mobile-phone features and hand gestures to identify phone use while driving.' },
        { titleZh: '抽烟检测', titleEn: 'Smoking Detection', bodyZh: '识别驾驶员嘴部附近的香烟及抽烟相关特征，并按持续时间触发告警。', bodyEn: 'Detects cigarettes and smoking-related features near the driver’s mouth and triggers an alarm based on duration.' },
        { titleZh: '口罩检测', titleEn: 'Mask Detection', bodyZh: '识别驾驶员是否佩戴口罩，并根据设定的持续时间输出状态告警。', bodyEn: 'Identifies whether the driver is wearing a mask and reports the condition after the configured duration.' },
        { titleZh: '红外阻断墨镜检测', titleEn: 'Infrared-Blocking Sunglasses Detection', bodyZh: '分析眼部区域，识别可能阻挡红外成像并影响驾驶员状态判断的墨镜。', bodyEn: 'Analyzes the eye region for sunglasses that block infrared visibility and may affect driver-state monitoring.' },
        { titleZh: '未系安全带检测', titleEn: 'Unfastened Seat Belt Detection', bodyZh: '分析驾驶员上半身区域，持续未检测到安全带时触发告警。', bodyEn: 'Analyzes the driver’s upper body and triggers an alarm when no seat belt is detected for the configured duration.' },
        { titleZh: '镜头遮挡检测', titleEn: 'Lens Occlusion Detection', bodyZh: '监测摄像头画面质量，在画面全黑或被持续遮挡时输出异常告警。', bodyEn: 'Monitors camera-image quality and reports an alarm when the view remains black or obstructed.' },
        { titleZh: '无人脸检测', titleEn: 'No Driver Face Detection', bodyZh: '持续无法检测到驾驶员人脸时，上报无人脸异常状态。', bodyEn: 'Reports a no-driver-face condition when the driver’s face remains undetected beyond the configured time.' },
        { titleZh: '进食和饮水检测', titleEn: 'Eating and Drinking Detection', bodyZh: '识别驾驶过程中的进食或饮水行为，并根据行为持续时间触发告警。', bodyEn: 'Detects eating or drinking while driving and triggers an alarm based on the behavior duration.' }
      ]
    },
    'p3-passenger-flow': {
      pageTitleZh: '自动客流统计系统（APC）',
      pageTitleEn: 'Auto Person Counter (APC)',
      statusZh: 'AI 客流统计与运营分析',
      statusEn: 'AI passenger counting and operations analysis',
      overviewTitleZh: '公共交通智能客流监测',
      overviewTitleEn: 'Intelligent Passenger-flow Monitoring for Public Transport',
      overviewZh: 'AutoPersonCounter（APC）是一套面向公交车、旅游车辆及其他客运场景的 AI 客流监测系统，可实时测量、分析和管理乘客流动，为线路优化、服务效率、安全保障与业务分析提供可靠数据。',
      overviewEn: 'AutoPersonCounter (APC) is an AI passenger-flow monitoring system for buses, tourist vehicles, and other passenger-transport scenarios. It measures, analyzes, and manages passenger movement in real time, providing reliable data for route optimization, service efficiency, safety, and business analysis.',
      mediaTitleZh: '计划功能演示视频',
      mediaTitleEn: 'Planned Function Videos',
      mediaSummaryZh: '六项 APC 核心功能均已预留演示位置，后续添加视频文件即可直接展示。',
      mediaSummaryEn: 'A demonstration slot is prepared for each of the six APC functions and will display the video once its file is added.',
      plannedVideos: [
        { zh: '客流统计', en: 'Passenger Flow Counting' },
        { zh: '身高估算', en: 'Height Estimation' },
        { zh: 'OD 智能跟踪', en: 'OD Intelligent Tracking' },
        { zh: '物品计数', en: 'Item Counting' },
        { zh: '车门状态检测', en: 'Door Status Detection' },
        { zh: '自动标定', en: 'Self-Calibration' }
      ],
      metrics: [
        { valueZh: '实时客流统计', valueEn: 'Real-time Passenger Count', labelZh: '上下客人数统计', labelEn: 'Boarding & alighting statistics' },
        { valueZh: 'OD 路径匹配', valueEn: 'OD Path Matching', labelZh: '乘客上下车身份跟踪', labelEn: 'Passenger boarding/alighting identity tracking' },
        { valueZh: '自动标定', valueEn: 'Auto Calibration', labelZh: '降低安装与维护工作量', labelEn: 'Lower installation and maintenance workload' }
      ],
      capabilitiesTitleZh: 'APC 核心功能',
      capabilitiesTitleEn: 'APC Core Functions',
      capabilities: [
        { titleZh: '客流统计', titleEn: 'Passenger Flow Counting', bodyZh: '准确统计指定车门的上车与下车人数，并减少临时移动造成的重复计数和误计数。', bodyEn: 'Accurately counts passengers boarding and alighting through designated doors while reducing repeated or false counts from temporary movement.' },
        { titleZh: '身高估算', titleEn: 'Height Estimation', bodyZh: '根据图像中的头部尺寸估算乘客身高，误差控制在约 10% 范围内，可支持儿童票识别等场景。', bodyEn: 'Estimates passenger height from head size in the camera image, with error controlled within about 10%, supporting scenarios such as child-ticket identification.' },
        { titleZh: 'OD 智能跟踪', titleEn: 'OD Intelligent Tracking', bodyZh: '为每位乘客生成唯一特征并匹配上下车信息，帮助分析出行路径与优化线路规划。', bodyEn: 'Generates a unique passenger signature to match boarding and alighting information, supporting travel-path analysis and route planning.' },
        { titleZh: '物品计数', titleEn: 'Item Counting', bodyZh: '检测并统计婴儿车、轮椅、自行车等特定物品，提升特殊乘客服务与车内空间管理能力。', bodyEn: 'Detects and counts strollers, wheelchairs, bicycles, and other selected items to improve special-passenger service and space management.' },
        { titleZh: '车门状态检测', titleEn: 'Door Status Detection', bodyZh: '识别车门开启与关闭状态，并控制客流统计启停，减少异常 IO 信号造成的计数误差。', bodyEn: 'Detects whether the vehicle door is open or closed and controls counting start/stop to reduce errors caused by abnormal IO signals.' },
        { titleZh: '自动标定', titleEn: 'Self-Calibration', bodyZh: '安装时自动识别车辆边缘并设置触发线，同时监测摄像头角度异常并上报平台。', bodyEn: 'Automatically identifies vehicle edges and sets trigger lines during installation, while detecting abnormal camera-angle changes and reporting them to the platform.' }
      ]
    },
    adas: {
      pageTitleZh: 'ADAS 功能优化',
      pageTitleEn: 'ADAS Function Optimization',
      statusZh: '道路感知与碰撞预警优化',
      statusEn: 'Road perception and collision-warning optimization',
      overviewTitleZh: '先进的 ADAS 感知与预警智能',
      overviewTitleEn: 'Advanced ADAS Perception and Warning Intelligence',
      overviewZh: 'ADAS 算法融合交通标志识别、车辆感知、行人检测与车道线理解，为更安全的驾驶决策提供支持。系统适配多区域道路标志，可同时监测本车道与相邻车道目标，并在复杂光照与道路条件下保持稳定可靠的感知能力。',
      overviewEn: 'The ADAS algorithms combine traffic-sign recognition, vehicle perception, pedestrian detection, and lane-line understanding to support safer driving decisions. They adapt to multi-region road signs, monitor targets across the ego and adjacent lanes, and maintain reliable perception under complex lighting and road conditions.',
      mediaTitleZh: '计划功能演示视频',
      mediaTitleEn: 'Planned Function Videos',
      mediaSummaryZh: '已为 TSR、FCW、PCW 与 LDW 四项功能分别预留演示位置，后续添加视频文件即可直接展示。',
      mediaSummaryEn: 'A dedicated demonstration slot is prepared for TSR, FCW, PCW, and LDW and will display each video once its file is added.',
      plannedVideos: [
        { zh: 'TSR — 交通标志识别', en: 'TSR — Traffic Sign Recognition' },
        { zh: 'FCW — 前向碰撞预警', en: 'FCW — Forward Collision Warning' },
        { zh: 'PCW — 行人碰撞预警', en: 'PCW — Pedestrian Collision Warning' },
        { zh: 'LDW — 车道偏离预警', en: 'LDW — Lane Departure Warning' }
      ],
      metrics: [
        { valueZh: '4 项功能', valueEn: '4 Functions', labelZh: 'TSR · FCW · PCW · LDW', labelEn: 'TSR · FCW · PCW · LDW' },
        { valueZh: '三车道感知', valueEn: 'Three-Lane Awareness', labelZh: '同时理解本车道与相邻车道目标', labelEn: 'Ego and adjacent-lane obstacle awareness' },
        { valueZh: '多区域适配', valueEn: 'Multi-region', labelZh: '中国、北美、南非及其他市场', labelEn: 'China, North America, South Africa, and more' }
      ],
      capabilitiesTitleZh: 'ADAS 算法功能',
      capabilitiesTitleEn: 'ADAS Algorithm Functions',
      capabilities: [
        {
          titleZh: 'TSR — 交通标志识别',
          titleEn: 'TSR — Traffic Sign Recognition',
          bodyZh: '识别中国、北美、南非及其他市场不同道路环境中的限速与 STOP 标志。算法支持电子限速、车身限速和学校区域限速等多种标志类型，同时过滤无关的路边标志、商业标识及远距离标志。',
          bodyEn: 'Recognizes speed-limit and STOP signs across different regional road environments, including China, North America, South Africa, and other markets. The algorithm supports multiple sign types such as electronic signs, vehicle-body signs, and school-zone signs, while filtering irrelevant roadside, commercial, and distant signs.'
        },
        {
          titleZh: 'FCW — 前向碰撞预警',
          titleEn: 'FCW — Forward Collision Warning',
          bodyZh: '通过道路场景感知识别并跟踪本车前方车辆。算法分析本车道及相邻车道目标的距离、速度、车道位置和运动趋势，以识别静止车辆、偏置目标、切入车辆及邻近大型卡车等潜在碰撞风险。',
          bodyEn: 'Detects and tracks vehicles ahead of the ego vehicle using road-scene perception. The algorithm evaluates target distance, speed, lane position, and movement trends across the ego lane and adjacent lanes to identify potential collision risks such as stationary vehicles, offset targets, cut-in vehicles, and nearby large trucks.'
        },
        {
          titleZh: 'PCW — 行人碰撞预警',
          titleEn: 'PCW — Pedestrian Collision Warning',
          bodyZh: '识别车辆前方行人，并分析其相对于可行驶区域的位置。算法可区分行人与路边物体、阴影、路缘及前挡风玻璃附近物体，从而在复杂道路场景中提供更可靠的行人风险评估。',
          bodyEn: 'Identifies pedestrians in front of the vehicle and analyzes their position relative to the drivable area. The algorithm distinguishes pedestrians from roadside objects, shadows, curbs, and windshield-adjacent objects to support more reliable pedestrian risk assessment in complex road scenarios.'
        },
        {
          titleZh: 'LDW — 车道偏离预警',
          titleEn: 'LDW — Lane Departure Warning',
          bodyZh: '识别车道标线及其类型，以判断车辆在车道内的位置。算法支持实线、虚线及其他车道标线形式，并可在强逆光、标线模糊和复杂道路环境下保持稳定的车道感知。',
          bodyEn: 'Recognizes lane markings and lane-line types to determine the vehicle’s position within the lane. The algorithm supports solid, dashed, and other lane-marking patterns, and maintains lane perception under challenging conditions such as strong backlight, blurred markings, and complex road environments.'
        }
      ]
    },
    bsw: {
      statusZh: '功能说明与实车演示',
      statusEn: 'Function overview and vehicle demonstrations',
      overviewTitleZh: '增强型盲区风险感知',
      overviewTitleEn: 'Enhanced Blind-Spot Risk Awareness',
      overviewZh: 'BSW 盲区预警功能符合 TFL2.5 与 R151 法规要求，可识别行人、骑行者等多类盲区目标，并结合道路边界和目标运动趋势评估真实碰撞风险。',
      overviewEn: 'The BSW function complies with TFL2.5 and R151 requirements. It identifies a wide range of blind-spot targets, including pedestrians and cyclists, and evaluates real collision risk using road boundaries and target movement trends.',
      mediaTitleZh: 'BSW 实车演示',
      mediaTitleEn: 'BSW Vehicle Demonstrations',
      mediaSummaryZh: '通过后向与侧向视角展示盲区目标检测和风险预警能力。',
      mediaSummaryEn: 'Rear and side views demonstrate blind-spot target detection and risk-warning capabilities.',
      videos: [
        { src: 'mp4/BSW/back.mp4', zh: '后向盲区检测演示', en: 'Rear Blind-spot Detection' },
        { src: 'mp4/BSW/side.mp4', zh: '侧向盲区检测演示', en: 'Side Blind-spot Detection' }
      ],
      regulationKey: 'BSW',
      regulationTitleZh: '法规合规',
      regulationTitleEn: 'Regulation Compliance',
      metrics: [
        { valueZh: '最高 98%', valueEn: 'Up to 98%', labelZh: '盲区目标识别准确率', labelEn: 'Blind-spot target recognition accuracy' },
        { valueZh: 'TFL2.5 / R151', valueEn: 'TFL2.5 / R151', labelZh: '法规合规', labelEn: 'Regulation compliance', opensRegulation: true },
        { valueZh: '行人 / 骑行者', valueEn: 'Pedestrians / Cyclists', labelZh: '重点目标覆盖', labelEn: 'Key target coverage' }
      ],
      capabilitiesTitleZh: '核心能力',
      capabilitiesTitleEn: 'Core Capabilities',
      capabilities: [
        { titleZh: '多类型盲区目标识别', titleEn: 'Multi-target Blind-spot Recognition', bodyZh: '识别车辆盲区内的行人、骑行者及其他高风险目标，输出及时的风险事件。', bodyEn: 'Identifies pedestrians, cyclists, and other high-risk targets inside configured blind zones and produces timely risk events.' },
        { titleZh: '道路边界感知', titleEn: 'Road-boundary Perception', bodyZh: '检测路缘石、护栏等道路边界，理解目标是否处于安全区域。', bodyEn: 'Detects road boundaries such as curbs and guardrails to understand whether targets remain inside safe areas.' },
        { titleZh: '低风险告警过滤', titleEn: 'Low-risk Alarm Filtering', bodyZh: '结合安全区域与道路边界信息过滤低风险告警，减少不必要的驾驶员干扰。', bodyEn: 'Uses safe-area and boundary information to filter low-risk alarms and reduce unnecessary driver distraction.' },
        { titleZh: '行人轨迹预测', titleEn: 'Pedestrian Trajectory Prediction', bodyZh: '根据行人与车辆的相对运动趋势预测轨迹，并进一步评估潜在碰撞风险。', bodyEn: 'Predicts pedestrian trajectories from relative movement trends between pedestrians and vehicles, then evaluates potential collision risk.' }
      ]
    },
    'volume-measurement': {
      statusZh: '单摄像头 AI 测量与演示',
      statusEn: 'Single-camera AI measurement and demonstrations',
      overviewTitleZh: '智能货物空间测量',
      overviewTitleEn: 'Intelligent Cargo-Space Measurement',
      overviewZh: '系统仅使用一颗车内或货厢摄像头，通过训练后的大模型感知货物、货厢地板和边界，实时估算已占用体积、剩余装载区域、分道可用长度与整体装载率。',
      overviewEn: 'Using only one in-vehicle or container camera, a trained large-model perception pipeline detects cargo, the container floor, and boundaries to estimate occupied volume, remaining loading area, lane-level available length, and overall load rate in real time.',
      mediaTitleZh: '体积测量演示',
      mediaTitleEn: 'Volume Measurement Demonstrations',
      mediaSummaryZh: '展示单摄像头对货物空间、剩余区域与装载状态的实时分析。',
      mediaSummaryEn: 'Single-camera demonstrations show real-time analysis of cargo space, remaining area, and loading status.',
      videos: [
        { src: 'mp4/Volume Measurement/web/cargo-volume-load-rate.mp4', zh: '货物体积与装载率估算', en: 'Cargo Volume & Load Rate Estimation' },
        { src: 'mp4/Volume Measurement/web/remaining-load-space.mp4', zh: '剩余装载空间测量', en: 'Remaining Load Space Measurement' },
        { src: 'mp4/Volume Measurement/web/cargo-securing-monitor.mp4', zh: '货物固定状态监测', en: 'Cargo Securing Monitor' }
      ],
      metrics: [
        { valueZh: '单摄像头', valueEn: 'Single Camera', labelZh: '无需雷达', labelEn: 'No radar required' },
        { valueZh: '实时', valueEn: 'Real Time', labelZh: '空间与装载状态分析', labelEn: 'Space and loading-state analysis' },
        { valueZh: 'SAFE / ALERT', valueEn: 'SAFE / ALERT', labelZh: '货物固定状态提示', labelEn: 'Cargo-securing status' }
      ],
      capabilitiesTitleZh: '测量与感知能力',
      capabilitiesTitleEn: 'Measurement and Perception Capabilities',
      capabilities: [
        { titleZh: '货物与货厢感知', titleEn: 'Cargo and Container Perception', bodyZh: '通过摄像头识别货物、货厢地板、边界、安全带、储物柜和剩余空间。', bodyEn: 'Camera-based AI detects cargo, the container floor, boundaries, safety belts, lockers, and remaining space.' },
        { titleZh: '分道剩余长度计算', titleEn: 'Lane-level Remaining Length', bodyZh: '将货厢地板划分为测量通道，计算每个通道的剩余可用长度与地面剩余装载率。', bodyEn: 'Divides the container floor into measurement lanes and calculates the remaining available length and ground loading availability in each lane.' },
        { titleZh: '体积与装载率估算', titleEn: 'Volume and Load-rate Estimation', bodyZh: '估算实际已占用货物体积，并换算为整体装载率，同时显示剩余装载区域。', bodyEn: 'Estimates actual occupied cargo volume, converts it into an overall load rate, and displays the remaining loading area.' },
        { titleZh: '装载安全检查', titleEn: 'Loading-safety Check', bodyZh: '检查货物是否正确固定，并通过 SAFE / ALERT 状态提示运输风险。', bodyEn: 'Checks whether cargo is properly secured and uses SAFE / ALERT status to communicate transportation risk.' }
      ]
    }
  };

  function iconSvg(name) {
    const paths = {
      dms: '<path d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z"/><circle cx="12" cy="12" r="2.2"/><path d="M8 4.5A8.5 8.5 0 0112 3c1.5 0 2.9.4 4.1 1.1"/>',
      face: '<path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3"/><circle cx="12" cy="10" r="3"/><path d="M7.5 18c.8-2.4 2.3-3.6 4.5-3.6s3.7 1.2 4.5 3.6"/>',
      passengers: '<circle cx="9" cy="8" r="2.5"/><circle cx="16.5" cy="9" r="2"/><path d="M4.5 18c.5-3.4 2-5 4.5-5s4 1.6 4.5 5M14 14c2.7-.4 4.4.9 5 4"/><path d="M4 5h4M4 5l2-2M4 5l2 2"/>',
      volume: '<path d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10"/><path d="M7 13h2M15 13h2"/>',
      adas: '<path d="M5 20l3-16M19 20L16 4M10.5 20l.5-4M13.5 20l-.5-4"/><path d="M9 12h6l1 3H8l1-3z"/><circle cx="9.5" cy="15.5" r=".8"/><circle cx="14.5" cy="15.5" r=".8"/>',
      plate: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h4M7 14h2M14 10h3M13 14h4"/><path d="M3 9V6h3M21 9V6h-3M3 15v3h3M21 15v3h-3"/>',
      bsw: '<path d="M5 15l1.5-4.5A2 2 0 018.4 9h7.2a2 2 0 011.9 1.5L19 15"/><path d="M4 15h16v4H4z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M19 7c1.2.5 2 1.5 2 2.8M18 4c2.9.8 5 3.2 5 6"/>'
    };
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (paths[name] || paths.dms) + '</svg>';
  }

  window.AlgorithmLibrary = { groups, algorithms, details, iconSvg };
})();
