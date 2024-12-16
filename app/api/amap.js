// 高德地图信息
const amapKey = "76fc5a752309320e3ce28d7b23bdd3df";

export function getAdcode() {
  return fetch(`https://restapi.amap.com/v3/ip?key=${amapKey}`).then((res) =>
    res.json()
  );
}

// 获取高德天气
export function getWeather(cityCode) {
  return fetch(
    `https://restapi.amap.com/v3/weather/weatherInfo?key=${amapKey}&city=${cityCode}`
  ).then((res) => res.json());
}
