"use client";
import { useEffect, useState } from "react";

/**
 * listeners 存储所有订阅者的回调函数 setopen
 * 修改 通知的时候 查找对应项修改
 */
let count = 0;
// 生成id
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

// 全局状态管理器
const listeners = new Map();
// 为了区分 都是调用  useGallery 但是返回的值不一样
const states = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      state.open = true;
      //   states[action.id] = state;
      return Object.assign({}, state);
    case "close":
      state.open = false;
      //   states[action.id] = state;
      return Object.assign({}, state);
    case "toggle":
      const t = { ...state, open: !state.open };
      //   states[action.id] = t;
      return Object.assign({}, t);
    default:
      return state;
  }
};

const dispatch = (action) => {
  const setState = listeners.get(action.id);
  if (setState) {
    setState((state) => reducer(state, action));
  }
};

const defalutState = { open: false };

function getState(id) {
  const state = states[id];
  if (state) return state;
  return defalutState;
}

// 自定义 Hook
export function useGallery(id = genId()) {
  const [state, setState] = useState(defalutState);

  useEffect(() => {
    console.log("useEffect");
    listeners.set(id, setState);
    // 组件卸载时取消订阅
    return () => {
      console.log("卸载");
      listeners.delete(id);
      delete states[id];
    };
  }, []);

  useEffect(() => {
    states[id] = state;
  }, [state]);

  return {
    isOpen: getState(id).open,
    open: dispatch.bind(null, { id, type: "open" }),
    close: dispatch.bind(null, { id, type: "close" }),
    toggle: dispatch.bind(null, { id, type: "toggle" })
  };
}
