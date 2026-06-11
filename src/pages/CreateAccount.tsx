import { useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../store/store";

const CreateAccount = () => {
    const navigate = useNavigate();
    const addUser = useStore((state) => state.addUser);

    const labelStyle = "text-[13px] leading-[17px] text-primary absolute -top-2.5 px-1 left-2 bg-white font-rubik"
    const inputStyle = "w-full h-[40px] text-[14px] rounded-[6px] border-1 px-3 border-gray-300 font-rubik";
    
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, name, value, type } = e.target;
        const fieldName = type === 'radio' ? name : id;
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with details:", formData);
        addUser(formData.fullName, formData.email);
        navigate('/account-settings');
    };

  return (
    <div className="flex flex-col items-start w-full h-full px-5 py-8 gap-3.5 overflow-hidden">
        <h1 className="text-[28px] leading-9 font-medium font-rubik">
            Create your PopX account
        </h1>
       
    <form className="w-full flex flex-col h-full justify-between" onSubmit={handleSubmit}>
    <div className="w-full flex flex-col gap-7.5">
                <div className="relative">
            <label className={labelStyle} htmlFor="fullName">
                Full Name <span className="text-red-600">*</span>
            </label>
            <input 
                id="fullName" 
                className={inputStyle} 
                value={formData.fullName}
                onChange={handleChange} 
                type="text" 
                required 
                placeholder="Enter Your Full Name"
            />
            </div>
                
                <div className="relative">
                    <label className={labelStyle} htmlFor="phoneNumber">
                Phone Number <span className="text-red-600">*</span>
            </label>
            <input 
                id="phoneNumber" 
                className={inputStyle} 
                value={formData.phoneNumber}
                onChange={handleChange} 
                type="tel" 
                required 
                placeholder="Enter Your Phone Number"
            />
            </div>
            <div className="relative">
                 <label className={labelStyle} htmlFor="email">
                Email address <span className="text-red-600">*</span>
            </label>
            <input 
                id="email" 
                className={inputStyle} 
                value={formData.email}
                onChange={handleChange} 
                type="email" 
                required 
                placeholder="Enter Your Email Address"
            />
            </div>
        
            <div className="relative">
            <label className={labelStyle} htmlFor="password">
                Password <span className="text-red-600">*</span>
            </label>
            <input 
                id="password" 
                className={inputStyle} 
                value={formData.password}
                onChange={handleChange} 
                type="password" 
                required 
                placeholder="Enter Password"
            />
            </div>
            <div>
                <div className="relative">
                    <label className={labelStyle} htmlFor="companyName">
                Company Name 
            </label>
            <input 
                id="companyName" 
                className={inputStyle} 
                value={formData.companyName}
                onChange={handleChange} 
                type="text"  
                placeholder="Enter Your Company Name"
            />
            </div>
            </div>
            <div className="flex flex-col gap-3">
                 <label className="text-[13px] leading-[17px] font-rubik">
                Are you an Agency? <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center">
                <input 
                    name="isAgency" 
                    className="accent-primary scale-140" 
                    id="yes" 
                    type="radio" 
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={handleChange}
                    required
                />
                <label className="text-[14px] leading-[17px] px-2 font-rubik" htmlFor="yes">Yes</label>
                <input 
                    name="isAgency" 
                    className="accent-primary scale-140" 
                    id="no" 
                    type="radio" 
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={handleChange}
                    required
                />
                <label className="text-[14px] leading-[17px] px-2 font-rubik" htmlFor="no">No</label>
            </div>
            </div>
    </div>
              <div className="w-full h-max pb-12">
                <button 
                className="bg-primary text-white w-full h-[46px] rounded-[6px] text-[16px] font-rubik font-medium disabled:opacity-[.4] disabled:cursor-not-allowed" 
                disabled={!formData.fullName || !formData.email || !formData.password} 
                type="submit"
              >
                Create Account
            </button>
              </div>
        </form>
    </div>
  )
}

export default CreateAccount;