import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;

            // ghế đã đặt
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            // ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }


            return <button disabled={disabled} className={`ghe ${cssGheDaDat}  ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderHangDauTien = () => {
        return this.props.hangGhe.danhSachGhe.map((hangDau, index) => {
            return <button className='rowNumber' key={index}>{hangDau.soGhe}</button>
        })
    }

    renderHangGhe = () => {
        // hàng đầu tiên
        if (this.props.soHangGhe === 0) {
            return <div className="ml-4">
                {this.props.hangGhe.hang} {this.renderHangDauTien()}
            </div>
        } else { // các hàng còn lại
            return <>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </>
        }

    }

    render() {
        console.log(this.props)
        return (
            <div className='text-light text-left ml-5 mt-1' style={{ fontSize: 25 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}




const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.DatVeReducer.danhSachGheDangDat
    }
}



export default connect(mapStateToProps)(HangGhe)