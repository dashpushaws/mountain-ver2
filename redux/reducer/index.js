import { combineReducers } from 'redux'
import likes from './reducer-like'
import flag from './reducer-flag'

const rootReducer = combineReducers({
  // state : reducer
  likes, // likes(state자리) : likes(reducer자리)
  // state 호출 시, 이 이름을 사용. 작은 리듀서의 함수명x
  //reducer2 가 있다면, 2개의 리듀서가 있는것인데, state는 각각 독립
  flag
})
export default rootReducer;