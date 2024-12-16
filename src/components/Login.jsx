import { X } from "lucide-react"
import { useState } from "react";
import { Eye,EyeOff } from "lucide-react";

const Login = ({ isOpen, onClose }) => {
    const [isPasswordVisible, setIsPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisibility(prevState => !prevState);
    }


    if (!isOpen) return null;


    return (
        <div className='fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50 '>
            <div className='bg-neutral-600 p-6 rounded-lg shadow-xl w-96 relative'>
                <button onClick={onClose} className="absolute top-3 right-3 hover:text-gray-400"><X /></button>
                <h2 className='font-semibold text-2xl text-center mb-4 text-neutral-400 '>Login
                </h2>
                <form action="#">
                    <div className="mb-6">
                        <label htmlFor="Email" className="block text-lg font-medium ml-1">Email</label>
                        <input type="text" className="w-full px-4 py-2 mt-1 border border-grey-200 rounded-md focus:right-2 focus-ring-blue-500" placeholder="Enter Your Email" />
                    </div>
                    <div className="relative mb-6">
                        <label htmlFor="password" className="block text-lg font-medium ml-1">Password</label>
                        <input type={isPasswordVisible ? "text":"password"} className="w-full px-4 py-2 mt-1 border border-grey-200 rounded-md focus:right-2 focus-ring-blue-500" placeholder="Enter Your Password" />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-[70%] right-3 transform -translate-y-1/2"
                        >
                            {isPasswordVisible ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    <div className="text-sm text-center">
                        <h6>Don't have an account ? <span className="font-semibold hover:text-gray-400">Create</span></h6>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login
