import React, { Component } from 'react';
import './baiTapDatVe.css'
import ThongTinDatGhe from './ThongTinDatGhe';
import HangGhe from './HangGhe';
import danhSachGheData from './danhSachGhe.json'

export default class BTDatVeXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div className='bg'>
                <div className="overlay">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center" style={{overflow:'auto'}}>
                                <h1 className='text-warning'>ĐẶT VÉ XEM PHIM</h1>
                                <h3 className='text-light mt-5'>Màn hình</h3>
                                <div className="screen mx-auto"></div>
                                {this.renderHangGhe()}
                            </div>

                            <div className="col-4">
                            <h1 className='text-light text-center'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                            <ThongTinDatGhe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

