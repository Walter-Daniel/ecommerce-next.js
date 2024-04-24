import { Inputs } from '@/app/types';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface FormProps {
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
}

export const FormAuth: FC<FormProps> = ({register, errors}) => {
  return (
    <div>
        {/* Email */}
        <div className="flex flex-col pb-5 relative">
                <label htmlFor="email" className="pb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Enter your email here..." 
                  className="border-small rounded-md p-2 border-gray-400"
                  {...register('email')}
                  />
                  {
                    errors.email?.message && <small className="text-red-500 absolute bottom-0">{errors.email?.message}</small>
                  }
            </div>
            {/* Password */}
            <div className="flex flex-col pb-5 relative">
                <label htmlFor="password" className="pb-1">Password</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="Enter your password here..." 
                  className="border-small rounded-md p-2 border-gray-400 font-medium" 
                  {...register('password')}
                  />
                  {
                    errors.password?.message && <small className="text-red-500 absolute bottom-0">{errors.password?.message}</small>
                  }
            </div>
    </div>
  )
}
