(function () {
  'use strict';

  const STORAGE_KEY = 'streamax:language';
  const supportedLanguages = ['zh', 'en'];

  function getLanguage() {
    const requested = new URLSearchParams(location.search).get('lang');
    if (supportedLanguages.includes(requested)) {
      localStorage.setItem(STORAGE_KEY, requested);
      return requested;
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    return supportedLanguages.includes(saved) ? saved : 'zh';
  }

  const english = {
    'Streamax AI研发能力全景': 'AI R&D Capabilities',
    '能力详情 - Streamax': 'Capability Details - Streamax',
    '首页入口，点击空白处进入 AI 研发能力全景': 'Home page. Click the blank area to enter the AI R&D capabilities overview.',
    '企业使命': 'Mission',
    '成为最值得信赖的交通安全守护者': 'To be the most trusted guardian of transportation safety',
    '企业愿景': 'Vision',
    '科技构筑美好交通未来': 'Building a better future for transportation through technology',
    '首页': 'Home',
    'AI研发能力全景': 'AI R&D Capabilities',
    '算力底座': 'Compute Infrastructure',
    '数据基础': 'Data Foundation',
    '算法能力': 'Algorithm Capabilities',
    '研发流程': 'R&D Workflow',
    '大模型能力': 'Large Model Capabilities',
    '业务落地': 'Business Applications',
    '打开菜单': 'Open menu',
    '关闭菜单': 'Close menu',
    '数据驱动 · 大模型赋能 · 持续迭代 · 落地闭环': 'Data-driven · Large-model empowered · Continuous iteration · Closed-loop delivery',
    '车端能力': 'On-vehicle Capabilities',
    '车端算法库': 'On-vehicle Algorithm Library',
    '72+ 种': '72+ algorithms',
    'DMS 疲劳监测': 'DMS Fatigue Monitoring',
    'DMS 驾驶员监测': 'DMS',
    'ADAS 安全辅助': 'ADAS Driver Assistance',
    'ADAS 驾驶辅助': 'ADAS',
    'BSD 盲区检测': 'BSD / Blind Spot Detection',
    'BSW 盲区预警': 'BSW',
    '人脸识别': 'Facial Recognition',
    'APC': 'APC',
    '体积测量': 'Volume Measurement',
    '车牌识别': 'License Plate Recognition',
    '行为分析': 'Behavior Analysis',
    '多目标跟踪': 'Multi-object Tracking',
    '交通事件检测': 'Traffic Event Detection',
    'safeGPT 理念': 'safeGPT Philosophy',
    '理解人 · 关注人 · 保护人': 'Understand people · Care about people · Protect people',
    '闭环引擎': 'Closed-loop Engine',
    '持续迭代加速': 'Accelerating continuous iteration',
    '数据处理': 'Data Processing',
    '数据清洗 / 场景筛选 / 自动化标注，转化为高质量训练集': 'Data cleaning, scenario filtering, and automated annotation turn raw data into high-quality training sets.',
    '模型训练': 'Model Training',
    '多源数据训练 + 任务调度，稳定支撑模型迭代': 'Multi-source data training and task scheduling reliably support model iteration.',
    '模型评估': 'Model Evaluation',
    '自动化评测 + 多维指标看板，定位长尾问题': 'Automated evaluation and multidimensional dashboards identify long-tail issues.',
    '软件集成': 'Software Integration',
    'SDK 封装 / 端侧部署，快速集成车载终端': 'SDK packaging and edge deployment enable rapid integration into in-vehicle terminals.',
    '自动化测试': 'Automated Testing',
    '回归测试 / 性能验证，保障版本质量与交付稳定性': 'Regression and performance testing ensure release quality and reliable delivery.',
    '部署上线': 'Deployment',
    'OTA 升级 / 灰度发布，降低上线风险并加速落地': 'OTA updates and staged releases reduce deployment risk and accelerate delivery.',
    '运营反馈': 'Operations Feedback',
    '数据回流 / 难例挖掘，持续驱动下一轮优化迭代': 'Data feedback loops and hard-case mining continuously drive the next optimization cycle.',
    '车端采集数据': 'On-vehicle Data Collection',
    '千万级车载终端实时回传，覆盖复杂路况与极端天气场景': 'Real-time data uploaded from tens of millions of in-vehicle terminals covers complex road conditions, extreme weather, and real driving behavior.',
    '合作接入数据': 'Partner Data',
    '与主机厂、Tier1 深度协作，获取量产车型真实标注样本': 'Deep collaboration with OEMs and Tier 1 suppliers provides real annotated samples from mass-produced vehicle models.',
    '行业数据沉淀': 'Industry Data Assets',
    '十余年交通行业积累，场景库覆盖 8 大行业 2000+ 场景': 'Built on more than a decade of transportation-industry experience, with a scenario library covering 8 industries and 2,000+ representative scenarios.',
    '大模型能力赋能': 'Large Model Capabilities',
    '样本生成': 'Sample Generation',
    '按天气、道路、光照等条件补齐长尾训练样本': 'Generate long-tail training samples based on weather, road, lighting, and other conditions.',
    '多模态检索': 'Multimodal Retrieval',
    '以文搜图 / 以图搜图，秒级定位海量路采目标场景': 'Text-to-image and image-to-image retrieval locates target road scenarios in seconds.',
    '自动标注': 'Automated Annotation',
    '预标注 + 人工审核，覆盖检测、分割、跟踪': 'Pre-annotation plus human review supports detection, segmentation, and tracking.',
    '行业感知模型（检测/分割）': 'Industry-specific Perception Model (Detection/Segmentation)',
    '面向交通场景训练，支撑检测、分割等核心任务': 'Trained for transportation scenarios to support detection, segmentation, and other core tasks.',
    '知识问答系统': 'R&D Knowledge Q&A System',
    '基于 RAG 架构的研发知识库问答，快速检索文档与规范': 'RAG-based R&D knowledge Q&A enables fast retrieval of documents and standards.',
    'GPU 服务器算力': 'GPU server computing power',
    '以算力支撑工程交付': 'Computing Infrastructure for Project delivery',
    '自建 GPU 服务器集群承载模型训练、样本生成、自动标注与多模态检索，让数据处理、训练评测和版本交付具备稳定吞吐。': 'Our in-house GPU server cluster supports model training, sample generation, automated annotation, and multimodal retrieval, providing reliable throughput for data processing, training/evaluation, and release delivery.',
    '高性能 GPU 卡': 'High-performance GPUs',
    '训练数据与样本存储': 'Training Data and Sample Storage',
    '全天候训练调度': '24/7 Training Scheduling',
    '多任务并行': 'Parallel Tasks',
    '研发提速': 'Accelerated R&D',
    '多任务并行\n研发提速': 'Parallel Tasks\nAccelerated R&D',
    '训练 / 生成 / 标注 / 检索一体化算力池': 'Unified Compute Pool for Training, Generation, Annotation, and Retrieval',
    '统一调度 GPU、存储与数据管线，支撑车端模型训练、长尾样本生成、自动标注预处理和研发知识检索。': 'Unified scheduling of GPUs, storage, and data pipelines supports on-vehicle model training, long-tail sample generation, automated annotation preprocessing, and R&D knowledge retrieval.',
    '算力能力标签': 'Compute Capability Tags',
    '面向车内安全、车外感知与交通事件识别，沉淀可组合、可量产的车端能力。': 'Composable, production-ready on-vehicle capabilities for in-cabin safety, external perception, and traffic event recognition.',
    '覆盖内部与外部两大类算法功能，包括 DMS、人脸识别、APC、ADAS、车牌识别与 BSW 等 72+ 种车端算法。': 'More than 72 on-vehicle algorithms across internal and external algorithm functions, including DMS, facial recognition, APC, ADAS, license plate recognition, and BSW.',
    '座舱智能': 'In-Cabin Intelligence',
    '道路与车辆感知': 'Road & Vehicle Perception',
    '内部算法功能': 'Internal Algorithm Functions',
    '外部算法功能': 'External Algorithm Functions',
    '7 项重点功能': '7 Featured Functions',
    'safeGPT（人因大脑）': 'safeGPT (Human Factors Intelligence)',
    '面向驾驶安全的风险理解框架，融合驾驶员状态、道路环境、车辆动力学等多维信号，实现主动安全预警与个性化干预。': 'A driving safety risk-understanding framework that combines driver state, road environment, vehicle dynamics, and other multidimensional signals to enable proactive safety warnings and personalized intervention.',
    '理解人': 'Understand People',
    '关注人': 'Care about People',
    '保护人': 'Protect People',
    '舱驾融合': 'Cabin-driving Integration',
    '风险预警': 'Risk Warning',
    '数据基础独立承载车端采集、合作接入与行业沉淀，为算法训练、评测和运营回流提供稳定底座。': 'A dedicated data foundation supports on-vehicle data collection, partner-sourced data, and accumulated industry data, providing a stable base for algorithm training, evaluation, and operational feedback loops.',
    '千万级车载终端实时回传，覆盖复杂路况、极端天气和真实驾驶行为。': 'Real-time data uploaded from tens of millions of in-vehicle terminals covers complex road conditions, extreme weather, and real driving behavior.',
    '多传感器同步': 'Multi-sensor Synchronization',
    '摄像头、雷达、IMU 与车辆状态数据统一入库。': 'Camera, radar, IMU, and vehicle-state data are synchronized and stored in a unified repository.',
    '真实运营场景': 'Real-world Operations',
    '沉淀城市道路、夜间、雨雾、遮挡等高价值样本。': 'Accumulates high-value samples from urban roads, nighttime conditions, rain, fog, occlusions, and other scenarios.',
    '与主机厂、Tier1、运营平台深度协作，获取量产车型真实标注样本。': 'Deep collaboration with OEMs, Tier 1 suppliers, and operations platforms provides real annotated samples from mass-produced vehicle models.',
    '量产车型样本': 'Production Vehicle Samples',
    '补齐不同车型、摄像头位置和系统配置差异。': 'Covers differences in vehicle models, camera positions, and system configurations.',
    '联合评测数据': 'Joint Evaluation Data',
    '围绕客户专项场景构建可验证的数据集。': 'Verifiable datasets are built around customer-specific scenarios.',
    '十余年交通行业积累，场景库覆盖 8 大行业 2000+ 典型场景。': 'Built on more than a decade of transportation-industry experience, with a scenario library covering 8 industries and 2,000+ representative scenarios.',
    '行业场景库': 'Industry Scenario Library',
    '覆盖出租、货运、公交、校车、网约车等运营场景。': 'Covers taxi, freight, public transit, school bus, ride-hailing, and other operational scenarios.',
    '长尾知识沉淀': 'Long-tail Knowledge Assets',
    '沉淀标注规范、难例样本和评测经验。': 'Accumulates annotation standards, difficult samples, and evaluation expertise.',
    '模块二 · 核心亮点': 'Module 2 · Core Highlights',
    '研发交付流程': 'R&D Delivery Workflow',
    '从原始数据到量产版本的工程化流水线，让每一次迭代更可控、更可追溯': 'An engineering pipeline from raw data to production releases makes every iteration more controllable and traceable.',
    '数据清洗 / 场景筛选 / 自动化标注流水线，将原始数据转化为高质量训练集。': 'A pipeline for data cleaning, scenario filtering, and automated annotation transforms raw data into high-quality training sets.',
    '多源数据训练与任务微调，单卡到千卡弹性调度训练集群。': 'Multi-source data training and task fine-tuning are supported by elastic scheduling from a single GPU to multi-GPU clusters.',
    '自动化评测体系 + 多维指标看板，精准定位长尾问题并驱动优化。': 'Automated evaluation and multidimensional dashboards pinpoint long-tail issues and drive optimization.',
    'SDK 封装 / 系统适配 / 端侧部署，快速集成到车载终端。': 'SDK packaging, system adaptation, and edge deployment enable rapid integration into in-vehicle terminals.',
    '回归测试 / 性能验证 / 稳定性检查，保障算法版本可交付、可上线。': 'Regression, performance, and stability testing ensure algorithm releases are ready for delivery and deployment.',
    'OTA 升级 / 灰度发布 / 版本准入，降低上线风险并加速业务落地。': 'OTA updates, staged rollout, and release approval reduce launch risk and accelerate business implementation.',
    '数据回流 / 难例挖掘 / 线上问题复盘，持续驱动下一轮研发迭代。': 'Data feedback, hard-case mining, and production issue reviews continuously drive the next R&D cycle.',
    '模块三': 'Module 3',
    '围绕样本生成、多模态检索、自动标注和知识问答，提升 AI 研发各环节效率': 'Sample generation, multimodal retrieval, automated annotation, and knowledge Q&A improve efficiency across the AI R&D workflow.',
    '按场景、天气、光照和道路条件生成补充样本，解决长尾数据不足问题。': 'Generate supplemental samples based on scenario, weather, lighting, and road conditions to address long-tail data gaps.',
    '以文搜图 / 以图搜图的多模态检索系统，从海量路采数据中秒级定位目标场景片段。': 'A multimodal retrieval system uses text-to-image and image-to-image search to locate target road-scene clips from massive road datasets in seconds.',
    '样本去重': 'Sample Deduplication',
    '基于特征嵌入的语义去重引擎，自动识别并剔除冗余帧，提升训练数据信息密度。': 'A semantic deduplication engine based on feature embeddings automatically identifies and removes redundant frames to increase training-data density.',
    '预标注 + 人工审核微调，将标注效率提升数倍，覆盖检测、分割、跟踪等多任务。': 'Pre-annotation plus human review significantly improves annotation efficiency across detection, segmentation, tracking, and other tasks.',
    '面向交通场景训练，支持目标检测、语义分割、实例分割等核心感知任务。': 'Trained for transportation scenarios to support object detection, semantic segmentation, instance segmentation, and other core perception tasks.',
    '基于 RAG 架构的研发知识库问答，让团队快速检索标注规范、算法文档、评测报告。': 'A RAG-based R&D knowledge Q&A system helps teams quickly retrieve annotation standards, algorithm documents, and evaluation reports.',
    '模块四': 'Module 4',
    '业务落地与价值': 'Business Applications and Value',
    '从数据、工具链到可量产产品，帮助客户实现更安全、更高效的车辆运营': 'From data and toolchains to production-ready products, helping customers operate vehicles more safely and efficiently.',
    '更安全的驾驶辅助': 'Safer Driver Assistance',
    'L2 舱驾一体化 AEB': 'L2 Cabin-driving Integrated AEB',
    '集成座舱监测与自动驾驶辅助的系统级解决方案，实现驾驶员状态感知与紧急制动联动，显著降低事故风险。': 'A system-level solution combining cabin monitoring and driving assistance, linking driver-state awareness with emergency braking to reduce accident risk.',
    '更高效的车辆运营': 'More Efficient Vehicle Operations',
    'L4 自动驾驶巴士': 'L4 Autonomous Bus',
    '面向园区、景区、BRT 等固定路线的 L4 级自动驾驶解决方案，已投入多城市运营，累计安全运行超百万公里。': 'An L4 autonomous driving solution for fixed routes in campuses, scenic areas, and BRT corridors, deployed in multiple cities and demonstrated through real-world operation videos.',
    '出租车': 'Taxi',
    '货运物流': 'Freight and Logistics',
    '公交客运': 'Public Transit',
    '校车': 'School Bus',
    '网约车': 'Ride-hailing',
    '危化品运输': 'Hazardous Materials Transport',
    '全栈自研能力': 'Full-stack In-house R&D',
    '从数据到模型，从平台到工具链，端到端支撑研发交付': 'End-to-end R&D delivery from data and models to platforms and toolchains.',
    '算法': 'Algorithms',
    '数据': 'Data',
    '平台': 'Platform',
    '工具链': 'Toolchain',
    '隐私政策': 'Privacy Policy',
    '服务条款': 'Terms of Service',
    '联系我们': 'Contact Us',
    '主导航': 'Main navigation',
    '← 返回上一层': '← Back',
    '能力详情': 'Capability Details',
    '千万级车载终端实时回传数据': 'Live data from tens of millions of vehicle terminals',
    '千万级车载终端实时回传': 'Live feeds from tens of millions of vehicle terminals',
    '台终端在线采集 · 事件片段持续入湖': 'terminals collecting data online · event clips continuously ingested into the data lake',
    '实时数据吞吐': 'Real-time Data Throughput',
    '条事件 / 分钟': 'events / minute',
    '有效片段 / 小时': 'valid clips / hour',
    '数据质检通过率': 'data quality pass rate',
    '全天候回传监控': '24/7 upload monitoring',
    '最新回传事件': 'Latest Uploaded Events',
    '高性能 GPU 卡算力总览': 'GPU server computing power overview',
    '训练 / 生成 / 标注一体化算力池': 'Unified compute pool for training, generation, and annotation',
    '高性能 GPU 卡在线纳管': 'high-performance GPUs centrally managed online',
    '集群综合利用率': 'overall cluster utilization',
    '显存使用水位': 'GPU memory utilization',
    '平均核心温度': 'average core temperature',
    '训练任务排队': 'training jobs queued',
    '资源使用状态': 'Resource Utilization',
    '模型训练池': 'Model Training Pool',
    '自动标注推理': 'Automated Annotation Inference',
    '正在运行的任务': 'Running Jobs',
    '业务落地运营成果视频': 'Business Application Results Videos',
    '实车运营成果': 'Real-world Operating Results',
    '进入页面后自动播放实际运营视频，用真实道路与场景证明产品能力。': 'Real operating videos play automatically to demonstrate product capabilities on actual roads and scenarios.',
    '能力流程': 'Capability Workflow',
    '返回上一层': 'Back',
    '关键指标': 'Key Metrics',
    '典型场景': 'Typical Scenarios',
  
    '查看车端算法库详情': 'View On-vehicle Algorithm Library details',
    '查看 safeGPT 理念详情': 'View safeGPT Philosophy details',
    '打开数据处理标注任务': 'Open Data Processing and Annotation tasks',
    '查看模型训练详情': 'View Model Training details',
    '查看模型评估详情': 'View Model Evaluation details',
    '查看软件集成详情': 'View Software Integration details',
    '打开自动化测试平台': 'Open Automated Testing platform',
    '打开自动化测试选项': 'Open Automated Testing options',
    '关闭自动化测试选项': 'Close Automated Testing options',
    '查看部署上线详情': 'View Deployment details',
    '查看运营反馈详情': 'View Operations Feedback details',
    '查看车端采集数据详情': 'View On-vehicle Data Collection details',
    '查看合作接入数据详情': 'View Partner Data details',
    '查看行业数据沉淀详情': 'View Industry Data Assets details',
    '查看 safeGPT 人因大脑详情': 'View safeGPT Human Factors Intelligence details',
    '查看高性能 GPU 卡算力详情': 'View GPU server computing power details',
    '新页面打开样本生成系统': 'Open Sample Generation system in a new page',
    '打开多模态检索系统': 'Open Multimodal Retrieval system',
    '查看样本去重详情': 'View Sample Deduplication details',
    '打开自动标注任务': 'Open Automated Annotation tasks',
    '查看行业感知模型详情': 'View Industry-specific Perception Model details',
    '查看知识问答系统详情': 'View R&D Knowledge Q&A System details',
    '查看 L2 舱驾一体化 AEB 运营成果': 'View L2 Cabin-driving Integrated AEB operating results',
    '查看 L4 自动驾驶巴士运营成果': 'View L4 Autonomous Bus operating results',
  };

  const detailTopicsEn = {
    'l2-product': ['Business Applications and Value', 'L2 Cabin-driving Integrated AEB', 'A system-level solution that integrates cabin monitoring and driver assistance, linking driver-state perception with emergency braking to significantly reduce accident risk.', ['Risk detection|Combines driver state, forward road conditions, and vehicle motion to identify high-risk scenarios.', 'Cabin-driving coordination|Links DMS with AEB and ADAS to create a proactive safety loop.', 'Production validation|Completes integration, calibration, testing, and delivery for customer vehicle models.'], ['L2|Integrated cabin-driving assistance', 'Milliseconds|Risk detection and coordinated response', 'Production-ready|Integration with real vehicle models'], ['Fatigue response|Detects abnormal driver states and triggers assistance alerts.', 'Forward collision risk|Combines cabin and road signals to reduce rear-end collisions and false activations.'], ['AEB', 'DMS', 'Cabin-driving integration', 'Proactive safety']],
    'l4-product': ['Business Applications and Value', 'L4 Autonomous Bus', 'An L4 autonomous driving solution for fixed routes in campuses, scenic areas, and BRT corridors, deployed in multiple cities and demonstrated through real-world operation videos.', ['Route perception|Combines vehicle, road, traffic-light, and surrounding road-user information.', 'Autonomous decision-making|Supports traffic lights, lane changes, obstacle avoidance, and station stops.', 'Safe operations|Continuously captures vehicle video, takeover records, and operating data.'], ['L4|Fixed-route autonomous driving', 'Multiple scenarios|Campuses, scenic areas, and BRT corridors', 'Operational grade|Real-road results'], ['Traffic-light response|Responds to traffic signals at real intersections.', 'Lever-controlled lane change and driver-incapacitation control|Demonstrates autonomous driving decisions and safety redundancy.'], ['L4 Bus', 'Real-world operations', 'Autonomous driving', 'Safety redundancy']],
    'gpu-cards': ['GPU server computing power', 'Computing Infrastructure for Project delivery', 'Our in-house GPU server cluster supports model training, sample generation, automated annotation, and multimodal retrieval, providing reliable throughput for data processing, training/evaluation, and release delivery.', ['Resource management|Centrally manages GPUs, memory, temperature, power, and node health.', 'Task scheduling|Dynamically allocates compute to training, generation, annotation, and retrieval.', 'Status monitoring|Displays utilization, queues, failures, and throughput in real time to guide R&D resource decisions.'], ['128+|High-performance GPUs', '76%|Overall cluster utilization', '24h|24/7 Training Scheduling'], ['Model Training|Supports pre-training and fine-tuning for transportation large models.', 'Sample Generation and Automated Annotation|Runs sample completion, automated annotation, and batch inference.'], ['GPU cluster', 'Training scheduling', 'Memory monitoring', 'Compute infrastructure']],
    'vehicle-ai-algorithm': ['Algorithm Capabilities', 'On-vehicle Algorithm Library 72+', 'On-vehicle algorithms spanning in-cabin safety, external perception, and traffic event detection, adapted to different terminal computing capabilities and business scenarios.', ['Algorithm selection|Selects combinations for DMS, ADAS, BSW, and other business needs.', 'Edge adaptation|Compresses and deploys models for camera placement, chip capacity, frame rate, and power constraints.', 'Scenario validation|Evaluates performance and iterates releases on real roads, in cabins, and in operations.'], ['72+|On-vehicle algorithm capabilities', 'Multiple scenarios|Cabin, road, and traffic events', 'On edge|Low-power real-time inference'], ['Driving safety|Detects fatigue, distraction, smoking, phone use, and other driver states.', 'Road perception|Detects forward collisions, blind-spot objects, lanes, pedestrians, and vehicles.'], ['Internal Algorithm Functions', 'External Algorithm Functions', 'Edge AI', 'Behavior analysis']],
    'safegpt': ['Algorithm Philosophy', 'safeGPT Human Factors Intelligence', 'Centered on understanding people, caring about people, and protecting people, safeGPT unifies driver state, road context, and vehicle behavior in a safety cognition engine.', ['Multisource perception|Combines face, posture, gaze, behavior, road, and vehicle-state signals.', 'Risk understanding|Uses the R&D toolchain to distinguish momentary actions, sustained risks, and emergencies.', 'Proactive intervention|Produces warnings, reminders, braking coordination, or operating recommendations to close the safety loop.'], ['Human factors|Understanding driver state', 'Fusion|Multidimensional cabin and road signals', 'Closed loop|Detection, warning, and intervention'], ['Proactive safety alerts|Detects fatigue, distraction, occlusion, and other risks.', 'Cabin-driving coordination|Coordinates cabin monitoring with AEB and ADAS.'], ['Human factors safety', 'Model cognition', 'Risk warning', 'Cabin-driving integration']],
    'data-processing': ['R&D Delivery Workflow', 'Data Processing', 'Transforms raw road data, operations feedback, and partner samples into trainable, measurable, and traceable data assets.', ['Data ingestion|Unifies video, CAN, radar, IMU, and business metadata with sample indexing.', 'Scenario filtering|Selects high-value clips by weather, road, behavior, and risk level.', 'Quality governance|Cleans, deduplicates, validates annotations, and versions data.'], ['Tens of millions|Device data ingestion', 'Minutes|Clip retrieval and distribution', 'Closed loop|Collection through training'], ['Long-tail mining|Finds scarce nighttime, rain, fog, and occlusion scenarios.', 'Training-set creation|Builds reusable data packages for different algorithm tasks.'], ['Data cleaning', 'Scenario library', 'Automated annotation', 'Version governance']],
    'model-training': ['R&D Delivery Workflow', 'Model Training', 'Provides elastic training from pre-training through fine-tuning for perception, safety, and multimodal tasks.', ['Task configuration|Defines datasets, model structures, loss functions, and evaluation criteria.', 'Training scheduling|Schedules single-card, multi-card, and cluster jobs based on available resources.', 'Model archiving|Stores weights, logs, metrics, and reproducible experiment records.'], ['Large-scale|Elastic training resources', 'Multimodal|Video, image, and text fusion', 'Traceable|Experiment version management'], ['Algorithm iteration|Accelerates DMS, ADAS, BSD, and other model iterations.', 'Vertical model training|Trains specialized foundation models for transportation scenarios.'], ['Pre-training', 'Fine-tuning', 'Experiment management', 'Model versions']],
    'model-evaluation': ['R&D Delivery Workflow', 'Model Evaluation', 'Continuously measures stability, accuracy, and long-tail performance in real transportation scenarios through automated evaluation.', ['Evaluation-set selection|Selects benchmark datasets by task, scenario, and release.', 'Automated evaluation|Calculates precision, recall, false positives, false negatives, and other metrics in batches.', 'Issue feedback|Returns failed samples to data governance and training.'], ['Multidimensional|Accuracy, performance, and stability', 'Automated|Release regression evaluation', 'Long tail|Hard-case identification and feedback'], ['Release gating|Determines whether a model meets deployment thresholds.', 'Issue diagnosis|Locates false detections, missed detections, and scenario bias.'], ['Evaluation sets', 'Regression testing', 'Metric dashboards', 'Hard-case feedback']],
    'software-integration': ['R&D Delivery Workflow', 'Software Integration', 'Packages algorithms as SDKs, services, or edge modules for rapid integration into vehicle terminals and business systems.', ['Interface packaging|Produces standardized SDKs, APIs, and model configurations.', 'Edge adaptation|Adapts compute platforms, camera pipelines, and business protocols.', 'Integration delivery|Completes performance validation, stability testing, and launch preparation.'], ['SDK|Standardized algorithm packaging', 'On edge|Vehicle-terminal deployment', 'Low risk|Staged rollout and rollback'], ['Production integration|Connects real vehicle models and terminal devices.', 'Platform coordination|Closes the loop with cloud configuration and operations systems.'], ['SDK', 'Edge deployment', 'Interface adaptation', 'Production delivery']],
    'auto-testing': ['R&D Delivery Workflow', 'Automated Testing', 'Uses regression, performance, and stability testing to ensure algorithm releases are ready for delivery and launch.', ['Test orchestration|Defines releases, devices, scenarios, and metric thresholds.', 'Automated execution|Runs functional, performance, and exception tests in batches.', 'Report output|Generates reports and records risk items.'], ['Automated|Regression test execution', 'Stable|Long-duration validation', 'Reported|Closed-loop issue tracking'], ['Pre-launch validation|Confirms release quality and performance limits.', 'Issue reproduction|Quickly reproduces field issues.'], ['Regression testing', 'Performance validation', 'Quality gates', 'Risk tracking']],
    'deployment': ['R&D Delivery Workflow', 'Deployment', 'OTA, staged rollout, and rollback mechanisms move algorithms smoothly into real operating scenarios.', ['Release planning|Defines release scope, target devices, and rollout pace.', 'OTA delivery|Upgrades edge devices by policy and monitors status.', 'Operations observation|Monitors results, exceptions, and user feedback.'], ['OTA|Remote upgrades', 'Staged|Phased release', 'Rollback|Launch risk control'], ['Vehicle upgrades|Releases in phases by model, region, and customer.', 'Risk control|Quickly rolls back abnormal releases.'], ['OTA', 'Staged rollout', 'Version management', 'Operations monitoring']],
    'ops-feedback': ['R&D Delivery Workflow', 'Operations Feedback', 'Captures issues, hard cases, and new needs from real operations to drive the next algorithm and product iteration.', ['Data feedback loops|Collects online alerts, false positives, misses, and user feedback.', 'Hard-case mining|Automatically discovers high-value samples and frequent issues.', 'Iteration input|Feeds findings back to data processing, training, and evaluation.'], ['Closed loop|Operations-to-R&D feedback', 'Hard cases|Continuous mining', 'Iteration|Improved product results'], ['Field optimization|Continuously corrects model performance for customer scenarios.', 'New scenario discovery|Finds emerging risk patterns in operating data.'], ['Data feedback', 'Hard-case mining', 'Operations dashboards', 'Continuous iteration']],
    'vehicle-data': ['Data Foundation', 'On-vehicle Data Collection', 'Real driving data from tens of millions of vehicle terminals, covering complex roads, weather, and driving behavior.', ['Edge collection|Synchronizes cameras, radar, IMU, and vehicle-state data.', 'Live upload|Uploads key clips and event data according to policy.', 'Sample ingestion|Moves cleaned data into scenario and training pools.'], ['Tens of millions|Vehicle terminals', 'Multiple sensors|Video, radar, and IMU', 'Real|Operational road scenarios'], ['Extreme weather|Rain, fog, nighttime, and glare.', 'Driving behavior|Fatigue, distraction, occlusion, and other states.'], ['Vehicle data', 'Multiple sensors', 'Real scenarios', 'Data upload']],
    'partner-data': ['Data Foundation', 'Partner Data', 'Works with OEMs, Tier 1 suppliers, and operating platforms to ingest production samples and fill scenario and annotation gaps.', ['Partner ingestion|Aligns data protocols, annotation standards, and compliance boundaries.', 'Sample governance|Desensitizes, filters, inspects, and categorizes samples.', 'Joint evaluation|Validates customer-specific scenarios.'], ['OEMs|Real production samples', 'Tier 1|System integration data', 'Compliant|Data governance process'], ['Vehicle adaptation|Validates differences across vehicle models.', 'Customer programs|Builds datasets around specific industry scenarios.'], ['OEMs', 'Tier 1', 'Joint evaluation', 'Annotated samples']],
    'industry-data': ['Data Foundation', 'Industry Data Assets', 'Long-term transportation operating data and scenario knowledge form reusable industry sample assets.', ['Scenario classification|Organizes data by industry, road, risk, and device type.', 'Knowledge capture|Stores annotation standards, evaluation experience, and long-tail samples.', 'Reusable output|Supports algorithm training, product validation, and customer delivery.'], ['8 industries|Business scenario coverage', '2,000+|Scenarios captured', 'Long-term|Transportation expertise'], ['Taxi and ride-hailing|Frequent urban-road and passenger-behavior scenarios.', 'Freight and transit|Complex routes, long operations, and safety supervision.'], ['Industry scenarios', 'Scenario library', 'Transportation data', 'Long-term assets']],
    'sample-generation': ['Large Model Capabilities', 'Sample Generation', 'Generates multi-scenario training samples under specified conditions to address long-tail shortages.', ['Scenario description|Specifies weather, lighting, road, and behavior conditions.', 'Sample synthesis|Generates diverse images or clips for scarce scenarios.', 'Quality filtering|Filters low-quality samples before adding them to the training pool.'], ['Long tail|Scarce scenario completion', 'Multiple conditions|Weather, lighting, and roads', 'Trainable|Ready for model iteration'], ['Rain, fog, and night|Fills low-frequency extreme-weather gaps.', 'Risky behavior|Generates occlusion, distraction, and other risk samples.'], ['Sample generation', 'Diffusion models', 'Synthetic data', 'Long-tail samples']],
    'multimodal-search': ['Large Model Capabilities', 'Multimodal Retrieval', 'Uses text-to-image and image-to-image retrieval to quickly locate target scenarios in massive road datasets.', ['Semantic input|Accepts text, images, or combined conditions.', 'Vector retrieval|Performs cross-modal similarity matching in the sample library.', 'Clip location|Outputs clips ready for annotation, evaluation, and training.'], ['Seconds|Target scenario location', 'Cross-modal|Text and image retrieval', 'Massive scale|Road-data indexing'], ['Find long-tail scenarios|Retrieves samples such as pedestrians crossing in rain.', 'Find similar issues|Uses failure samples to locate similar clips.'], ['Text-to-image', 'Image-to-image', 'Vector retrieval', 'Semantic retrieval']],
    'sample-dedup': ['Large Model Capabilities', 'Sample Deduplication', 'Uses feature embeddings and semantic similarity to identify redundant frames and increase training-data density.', ['Feature extraction|Creates shared features for images, video clips, and metadata.', 'Similarity clustering|Finds duplicate, near-duplicate, and low-value samples.', 'Data refinement|Keeps representative samples and produces a deduplication report.'], ['Semantic|Similar-sample detection', 'High density|Training-data optimization', 'Explainable|Recorded deduplication rationale'], ['Road-data cleanup|Removes consecutive duplicate frames.', 'Training-set compression|Reduces interference from repeated samples.'], ['Feature embeddings', 'Semantic deduplication', 'Sample governance', 'Data compression']],
    'auto-labeling': ['Large Model Capabilities', 'Automated Annotation', 'Combines model pre-annotation with human review to improve efficiency for detection, segmentation, and tracking.', ['Pre-annotation|Automatically generates boxes, masks, tracks, and attributes.', 'Human review|Corrects boundaries, classes, and temporal consistency.', 'Quality feedback|Uses corrected samples in the next training cycle.'], ['Multiple times|Higher annotation efficiency', 'Multiple tasks|Detection, segmentation, and tracking', 'Quality controlled|Human-review loop'], ['Traffic objects|Vehicles, pedestrians, cyclists, and road events.', 'Cabin states|Drivers, passengers, and behavioral states.'], ['Pre-annotation', 'Human review', 'Detection', 'Segmentation', 'Tracking']],
    'foundation-model': ['Large Model Capabilities', 'Industry-specific Perception Model: Detection/Segmentation', 'An industry-specific perception model trained for transportation scenarios and core perception tasks.', ['Industry pre-training|Builds foundational capabilities from transportation data.', 'Task adaptation|Fine-tunes for detection, semantic segmentation, and instance segmentation.', 'Scenario evaluation|Validates generalization on real roads and in-cabin scenarios.'], ['Vertical domain|Transportation foundation model', 'Multiple tasks|Detection, segmentation, and perception', 'Generalizable|Adaptation to complex scenarios'], ['External perception|Road users, lanes, and traffic events.', 'In-cabin perception|Driver state, passenger behavior, and safety risks.'], ['Foundation model', 'Object detection', 'Semantic segmentation', 'Instance segmentation']],
    'rag-qa': ['Large Model Capabilities', 'R&D Knowledge Q&A System: RAG', 'An R&D knowledge-base assistant that helps teams quickly retrieve standards, documents, and evaluation reports.', ['Knowledge ingestion|Connects annotation standards, algorithm documents, test reports, and customer materials.', 'Semantic retrieval|Recalls relevant passages based on a question.', 'Answer generation|Produces traceable R&D answers grounded in retrieved context.'], ['RAG|Knowledge-enhanced Q&A', 'Traceable|Answers cite sources', 'Efficient|R&D information retrieval'], ['Annotation standards|Quickly checks classes, boundaries, and quality rules.', 'Troubleshooting|Retrieves historical evaluation reports and solutions.'], ['RAG', 'Knowledge base', 'Document retrieval', 'R&D assistant']]
  };

  function translateTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const value = node.nodeValue;
      const trimmed = value.trim();
      if (!english[trimmed]) return;
      node.nodeValue = value.replace(trimmed, english[trimmed]);
    });
  }

  function translateAttributes(root) {
    root.querySelectorAll('[aria-label], [title]').forEach(element => {
      ['aria-label', 'title'].forEach(attribute => {
        const value = element.getAttribute(attribute);
        if (value && english[value]) element.setAttribute(attribute, english[value]);
      });
    });
  }

  function applyEnglishNavigationLabels(root) {
    root.querySelectorAll('[data-en-label]').forEach(element => {
      element.textContent = element.dataset.enLabel;
    });
  }

  function localizeInternalLinks(language) {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || (!href.startsWith('dididi.html') && !href.startsWith('detail.html') && !href.startsWith('algorithm.html'))) return;
      const url = new URL(href, location.href);
      url.searchParams.set('lang', language);
      link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    });
  }

  function createLanguageSwitcher(language) {
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', language === 'en' ? 'Choose language' : '选择语言');
    switcher.innerHTML = '<button type="button" data-language="zh">中文</button><button type="button" data-language="en">EN</button>';
    switcher.querySelectorAll('button').forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
      button.addEventListener('click', () => {
        const nextLanguage = button.dataset.language;
        if (nextLanguage === language) return;
        localStorage.setItem(STORAGE_KEY, nextLanguage);
        const url = new URL(location.href);
        url.searchParams.set('lang', nextLanguage);
        location.href = url.href;
      });
    });
    document.body.appendChild(switcher);
  }

  function installStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .language-switcher {
        position: fixed;
        top: 17px;
        right: 22px;
        z-index: 300;
        display: grid;
        grid-template-columns: repeat(2, minmax(42px, auto));
        min-height: 34px;
        padding: 3px;
        border: 1px solid hsl(var(--border, 220 16% 86%) / .75);
        border-radius: 6px;
        background: hsl(var(--background, 0 0% 100%) / .9);
        box-shadow: 0 8px 28px rgba(0, 0, 0, .12);
        backdrop-filter: blur(14px);
      }
      .detail-page .language-switcher {
        top: auto;
        right: max(16px, env(safe-area-inset-right));
        bottom: max(16px, env(safe-area-inset-bottom));
        box-shadow: 0 12px 34px rgba(0, 0, 0, .24);
      }
      .language-switcher button {
        min-width: 42px;
        min-height: 28px;
        padding: 0 9px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: hsl(var(--muted-foreground, 220 9% 46%));
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 0;
        cursor: pointer;
        transition: background-color .18s ease, color .18s ease;
      }
      .language-switcher button:hover,
      .language-switcher button:focus-visible {
        color: hsl(var(--foreground, 222 47% 11%));
        outline: 2px solid hsl(var(--primary, 217 91% 60%) / .45);
        outline-offset: -2px;
      }
      .language-switcher button.active {
        background: hsl(var(--foreground, 222 47% 11%));
        color: hsl(var(--background, 0 0% 100%));
      }
      @media (max-width: 1100px) {
        .language-switcher { right: 116px; }
      }
    `;
    document.head.appendChild(style);
  }

  function initialize() {
    const language = getLanguage();
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    const currentPage = location.pathname.toLowerCase();
    document.body.classList.add(currentPage.endsWith('detail.html') || currentPage.endsWith('algorithm.html') ? 'detail-page' : 'overview-page');
    installStyles();
    if (language === 'en') {
      translateTextNodes(document.body);
      translateAttributes(document.body);
      applyEnglishNavigationLabels(document.body);
      if (english[document.title]) document.title = english[document.title];
    }
    localizeInternalLinks(language);
    createLanguageSwitcher(language);
  }

  window.StreamaxI18n = {
    detailTopicsEn,
    getLanguage,
    text(chinese, fallback) {
      return getLanguage() === 'en' ? (english[chinese] || fallback || chinese) : chinese;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
