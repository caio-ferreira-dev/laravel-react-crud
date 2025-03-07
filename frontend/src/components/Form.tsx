import FormProps from "../types/FormProps";


export default function Form({ page }: FormProps) {
    return(
        <form className="max-w-[90%] w-md flex flex-col gap-6 bg-white py-6 px-10 rounded-lg shadow-lg mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">{page === "Registro" ? "Criar uma nova conta" : page === "Login" ? "Fazer Login" : ''}</h1>

            <div className="flex flex-col gap-2">
                <label htmlFor="nameInput" className="text-gray-700">Nome de usuário</label>
                <input
                id="nameInput"
                className="p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-800 transition duration-500 focus:outline-none"
                type="text"
                name="name"
                placeholder="Nome de usuário..."
                required
                />
            </div>

            {page === "Registro" && (
                <div className="flex flex-col gap-2">
                <label htmlFor="emailInput" className="text-gray-700">Email</label>
                <input
                    id="emailInput"
                    className="p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-800 transition duration-500 focus:outline-none"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                />
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="passwordInput" className="text-gray-700">Senha</label>
                <input
                id="passwordInput"
                className="p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-800 transition duration-500 focus:outline-none"
                type="password"
                name="password"
                placeholder="Senha..."
                required
                minLength={6}
                />
            </div>

            <button
                className="mt-5 w-fit px-10 mx-auto py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-900 focus:outline-none transition-colors duration-500 ease-in-out disabled:bg-gray-400 hover:cursor-pointer"
                type="submit"
                disabled={false} // Desabilitar o botão se os campos estiverem inválidos
            >
                {page}
            </button>
        </form>

    )
}

/*

<form class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
  <div class="mb-4">
    <label class="block text-gray-700">Nome</label>
    <input type="text" class="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
  </div>
  <div class="mb-4">
    <label class="block text-gray-700">Email</label>
    <input type="email" class="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
  </div>
  <button type="submit" class="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
    Enviar
  </button>
</form>

*/