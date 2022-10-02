const initialState = {
    danhSachGheDangDat: [
        // {soGhe: 'A1', gia: 1000},
        // {soGhe: 'B3', gia: 1000}
    ]
}

export const DatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_GHE':
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            // Nếu ktra đã có trong mảng => remove đi
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else { // ktra chưa có trong mảng => push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate

            return { ...state }


        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            // Nếu ktra đã có trong mảng => remove đi
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate

            return { ...state }
        }
        default:
            return state
    }
}
