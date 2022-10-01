import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
    render() {
        return (
            <>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={{ marginLeft: '10px', fontSize: '25px' }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={{ marginLeft: '10px', fontSize: '25px' }}>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ marginLeft: '10px', fontSize: '25px' }}>Ghế chưa đặt</span>
                </div>

                <table className="table mt-5"  border='2'>
                    <thead>
                        <tr className='text-light'>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                </table>

            </>
        )
    }
}
