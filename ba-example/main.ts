import { GPTVis } from '../src';

const gptVis = new GPTVis({
  container: 'container', //这里有 bug
  width: 600,
  height: 400,
});

// Render with markdown-like syntax
const visSyntax = `
vis line
data
  - time 2020
    value 100
  - time 2021
    value 120
  - time 2022
    value 150
  - time 2023
    value 10
`;

gptVis.render(visSyntax);

// 第二个实例
const gptVis1 = new GPTVis({
  container: 'container1', //这里有 bug
  width: 600,
  height: 400,
});

// Render with markdown-like syntax
const visSyntax1 = `
vis sankey
data
  - source 煤炭
    target 发电厂
    value 120
  - source 天然气
    target 发电厂
    value 80
  - source 发电厂
    target 工业
    value 100
  - source 发电厂
    target 居民
    value 60
  - source 发电厂
    target 商业
    value 40
nodeAlign justify
title 能源流动关系
`;

gptVis1.render(visSyntax1);

// 第三个实例
const gptVis2 = new GPTVis({
  container: 'container2', //这里有 bug
  width: 600,
  height: 400,
});

// Render with markdown-like syntax
const visSyntax2 = `
vis scatter
data
  - x 10
    y 15
  - x 20
    y 25
  - x 30
    y 35
  - x 40
    y 45
`;

gptVis2.render(visSyntax2);
