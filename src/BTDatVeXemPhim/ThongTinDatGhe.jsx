import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
    render() {
        // console.log(this.props)
        return (
            <>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={{ marginLeft: '10px', fontSize: '25px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={{ marginLeft: '10px', fontSize: '25px' }}>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ marginLeft: '10px', fontSize: '25px' }}>Ghế chưa đặt</span>
                </div>

                <table className="table mt-5" border='2'>
                    <thead>
                        <tr className='text-light'>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-warning'>
                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia.toLocaleString()}</td>
                                <td><button onClick={() => {
                                    let action = {
                                        type: 'HUY_GHE',
                                        soGhe: gheDangDat.soGhe
                                    }
                                    this.props.dispatch(action)
                                }} className='btn btn-danger'>Hủy</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr className='text-warning'>
                            <td></td>
                            <td>Tổng tiền:</td>
                            <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                return tongTien += gheDangDat.gia
                            }, 0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)