// payload => [ { v_type: '', type_status: ''} ]
export function detectAndModifi (state, payload) {
  // 若 allTypes 长度为0
  // 则将第一次请求到的数据直接装入数组即可
  if (state.allTypes.length === 0) {
    state.allTypes.concat(payload)
  } else {
    for (let i = 0; i < payload.length; i++) {
      for (let j = 0; j < state.allTypes.length; j++) {
        if (state.allTypes[j].v_type === payload[i].v_type) {
          state.allTypes[j].type_status = payload[i].type_status
        }
      }
      if (!(state.allTypes.some(item => (item.v_type === payload[i].v_type)))) {
        state.allTypes.push(payload[i])
      }
    }
  }
}

// 若本地缓存中含有数据，读出本地缓存中的数据并存储到 state 中的 allTypes 中
export function DepositToTheLocal (state, payload) {
  // 清空数组
  state.allTypes.splice(0, state.allTypes.length)
  // 将本地缓存中的数据存入 vuex 中
  // concat 返回一个新数组
  state.allTypes = state.allTypes.concat(payload)
}
// 添加类型数组中数据
// payload => { v_type: String, type_status: String }
export function addTypeData (state, payload) {
  state.allTypes.push(payload)
}

// 在类型数组中删除相关对象
// payload => String(v_type)
export function delTypeData (state, payload) {
  for (let i = 0; i < state.allTypes.length; i++) {
    if (state.allTypes[i].v_type === payload) {
      state.allTypes.splice(i, 1)
    }
  }
}

// 在类型数组中隐藏相关类型对象
export function makeObjHide (state, payload) {
  const obj = state.allTypes.find(item => {
    return item.v_type === payload
  })
  obj.type_status = '0'
}

// 在类型数组中显示相关类型对象
export function makeObjShow (state, payload) {
  const obj = state.allTypes.find(item => {
    return item.v_type === payload
  })
  obj.type_status = '1'
}