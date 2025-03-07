import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();

    return(
        <main className="min-h-screen max-w-screen-xl mx-auto flex flex-col justify-end items-start py-64 gap-5">
            <h1 className="text-4xl w-fit">Projeto Laravel + React + Tailwind </h1>
            <div className="flex gap-4 w-fit">
                <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-900 hover:cursor-pointer transition-colors duration-500 ease-in-out" onClick={() => {navigate('/login')}}>
                    Login
                </button>
                <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-900 hover:cursor-pointer transition-colors duration-500 ease-in-out" onClick={() => {navigate('/register')}}>
                    Registro
                </button>

            </div>
        </main>
    )
}