

const reducer = (state = [], action) => {
  // state를 수정해서는 안되고
  // useSelector는 참조하는 state의 값의 변화

  // let temp = state; // state와 같은 곳을 참조하게 됨. 
 
  switch (action.type) {

    case 'like/ADD':
      console.log('변경전 state', state);
      if (state.findIndex(item => item.id == action.payload.id) == -1) {
        return [{...action.payload}, ...state ]
      }
      // 객체가 바뀐다(=주소가 바뀐다) -> Like컴포넌트에서
      // useSelector가 갱신되어 반응한다?
      return [...state]
      // return state

      // state vs [...state] 차이
      // state는 객체의 주소를 가지고 있다. return하면 state는 
      // 같은 주소를 참조하게 되고, [...state]하게되면 state가 참조하는 객체의 값들로
      // 새로운 객체를 생성(주소가 바뀜)

      // return [...state, {...action.payload}]



    case 'like/REMOVE':
      // if (state.findIndex(item => item.id == action.payload.id) == -1) {
      //   temp.unshift(action.payload)
      // }
      // return temp
      return [...state.filter(item => item.id != action.payload.id)]
    
    case 'like/CHECK':
      console.log(state);
      return state

    default:
      return state
  }

}
export default reducer