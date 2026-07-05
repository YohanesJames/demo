(function () {
  'use strict';

  const sharedDemonstrationVideos = Object.freeze([
    {
      src: 'mp4/R131-02/131-02动态车.mp4',
      zh: '车对车移动目标场景',
      en: 'Car-to-car moving target scenario'
    },
    {
      src: 'mp4/R131-02/70VS0.mp4',
      zh: '车对车静止目标场景',
      en: 'Car-to-car stationary target scenario'
    },
    {
      src: 'mp4/R131-02/带护栏静止目标.mp4',
      zh: '带护栏静止目标测试',
      en: 'Stationary Target with Guardrail'
    },
    {
      src: 'mp4/R131-02/行人横穿.mp4',
      zh: '行人横穿测试',
      en: 'Pedestrian Crossing Test'
    },
    {
      src: 'mp4/R131-02/误响应左右转.mp4',
      zh: '左右转误响应测试',
      en: 'False Activation During Left and Right Turns'
    },
    {
      src: 'mp4/R131-02/路口左右转.mp4',
      zh: '路口左右转测试',
      en: 'Left and Right Turns at Intersections'
    }
  ]);

  const ais162Videos = Object.freeze([
    {
      src: 'mp4/AIS162/Car-to-car moving target scenario.mp4',
      zh: '车对车移动目标场景',
      en: 'Car-to-car moving target scenario'
    }
  ]);

  const bswRegulationVideos = Object.freeze([
    {
      src: 'mp4/BSW/regulation/Frontview-BSW.mp4',
      zh: '前视 BSW 法规测试',
      en: 'Front-view BSW Regulation Test'
    },
    {
      src: 'mp4/BSW/regulation/R151-Bus turning.mp4',
      zh: '公交车转弯测试（R151）',
      en: 'Bus Turning Test (R151)'
    },
    {
      src: 'mp4/BSW/regulation/TFL2.5-Bus turning.mp4',
      zh: '公交车转弯测试（TFL2.5）',
      en: 'Bus Turning Test (TFL2.5)'
    }
  ]);

  window.ComplianceVideoLibrary = Object.freeze({
    'R131-02': sharedDemonstrationVideos,
    'R152-02': sharedDemonstrationVideos,
    'AIS-162': ais162Videos,
    'BSW': bswRegulationVideos
  });
})();
