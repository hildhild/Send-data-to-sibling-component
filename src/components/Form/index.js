import React, { useState } from 'react';

function Form({ onFormSubmit }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');

    const handleInputChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
    
        if (field === 'name') {
            setName(value);
        } else if (field === 'age') {
            setAge(value);
        } else if (field === 'phone') {
            setPhone(value);
        } else if (field === 'email') {
            setEmail(value);
        } else if (field === 'note') {
            setNote(value);
        }
      };
    
    const handleSubmit = (event) => {
        event.preventDefault(); //Ngăn chặn hành vi mặc định (load lại trang)
        const formData = { name, age, phone, email, note };
        const inputs = document.getElementsByTagName('input'); //chi can set props disabled = {submitted?}
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        document.getElementsByTagName('textarea')[0].disabled = true;
        onFormSubmit(formData);
    };
    
    return (
      <div className="px-[15px] border-r-[1px] border-solid">
        <div className='text-3xl text-[red] text-center mb-[20px] py-[20px] font-semibold'>ĐĂNG KÝ THÔNG TIN</div>
        <form onSubmit={handleSubmit} className=''>
            <div>
                <div className='font-semibold mb-[10px]'>Họ và tên:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="text" name="name" value={name} onChange={handleInputChange} placeholder="Nhập họ và tên..."/>
            </div>
            <div>
                <div className='font-semibold mb-[10px]'>Tuổi:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="number" name="age" value={age} onChange={handleInputChange} placeholder="Nhập tuổi..."/>
            </div><div>
                <div className='font-semibold mb-[10px]'>Số điện thoại:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="text" name="phone" value={phone} onChange={handleInputChange} placeholder="Nhập số điện thoại..."/>
            </div><div>
                <div className='font-semibold mb-[10px]'>Email:</div>
                <input className='mb-[20px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' type="email" name="email" value={email} onChange={handleInputChange} placeholder="Nhập email ..."/>
            </div>
            <div>
                <div className='font-semibold mb-[10px]'>Ghi chú:</div>
                <textarea className='mb-[50px] w-full border-[1px] border-solid px-[15px] py-[5px] rounded-xl' placeholder="Nhập ghi chú..." name='note' value={note} onChange={handleInputChange}></textarea>
            </div>
            <input type="submit" value="ĐĂNG KÝ" className="bg-[blue] text-[white] w-full cursor-pointer py-[10px] rounded-xl mb-[20px]" />
        </form>
      </div>
    );
}
  
export default Form;