import React from 'react';

function Display({ data }) {
    return (
        <div className="px-[15px]">
            <div className='text-xl bg-[green] text-white font-semibold w-full text-center py-[20px] mb-[20px] h-[76px]'>Đăng ký thông tin thành công</div>
            <p><strong>Họ và tên:</strong> {data.name}</p>
            <p><strong>Tuổi:</strong> {data.age}</p>
            <p><strong>Số điện thoại:</strong> {data.phone}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Ghi chú:</strong> {data.note}</p>
            <form className='mt-[30px]'>
              <input type="submit" value="ĐĂNG KÝ LẠI" className="bg-[blue] text-[white] w-full cursor-pointer py-[10px] rounded-xl mb-[20px]" />
            </form>
        </div>  
    );
}
  
export default Display;