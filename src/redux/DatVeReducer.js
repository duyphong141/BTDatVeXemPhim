const initialState = {
    danhSachGheDangDat: [
        {soGhe: 'A1', gia: 1000},
        {soGhe: 'B3', gia: 1000}
    ]
}

export const DatVeReducer = (state = initialState, action) => {
  switch (action.type) {

//   case first:
//     return { ...state, ...payload }

  default:
    return state
  }
}
