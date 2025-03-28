'use client';

import { useTheme } from '@/context/theme-context';
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
  const { theme, toggleTheme} = useTheme();

  return (
    <button 
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] border border-white border-opacity-40 bg-opacity-80 backdrop-blur-[.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer dark:bg-slate-950 dark:border-none"
        onClick={toggleTheme}  
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  )
}
