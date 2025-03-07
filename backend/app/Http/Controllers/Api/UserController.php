<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class UserController extends Controller
{
    /**
     * Cria um novo usuário
     */
    public function create(Request $req) {
        // Forçar resposta JSON
        $req->headers->set('Accept', 'application/json');

        // Validação dos campos obrigatórios
        $validatedData = $req->validate([
            "name" => "required|string|max:255",
            "email" => "required|email|unique:users,email",
            "password" => "required|string|min:6"
        ]);

        try {
            // Criar o usuário com a senha criptografada
            User::create([
                "name" => $validatedData["name"],
                "email" => $validatedData["email"],
                "password" => bcrypt($validatedData["password"]) // Criptografar senha
            ]);

            return response()->json(["message" => "Usuário criado com sucesso!"], 201);
        } catch (QueryException $e) {
            // Captura erros do banco de dados
            return response()->json(["error" => "Erro ao criar usuário!"], 500);
        }
    }

    /**
     * Retorna a lista de todos os usuários
     */
    public function read() {
        try {
            $users = User::all();

            return response()->json($users, 200);
        } catch (QueryException $e) {
            return response()->json(["error" => "Erro ao buscar usuários!"], 500);
        }
    }

    /**
     * Atualiza os dados de um usuário existente
     */
    public function update(Request $req, $id) {
        // Forçar resposta JSON
        $req->headers->set('Accept', 'application/json');

        // Validação dos campos obrigatórios (não valida o ID porque já vem da URL)
        $validatedData = $req->validate([
            "name" => "sometimes|string|max:255",
            "email" => "sometimes|email|unique:users,email,".$id,
            "password" => "sometimes|string|min:6"
        ]);

        try {
            // Buscar o usuário pelo ID fornecido na URL
            $user = User::find($id);

            // Se o usuário não for encontrado, retorna erro 404
            if (!$user) {
                return response()->json(["error" => "Usuário não encontrado!"], 404);
            }

            // Atualizar os campos fornecidos na requisição
            if (isset($validatedData["name"])) {
                $user->name = $validatedData["name"];
            }

            if (isset($validatedData["email"])) {
                $user->email = $validatedData["email"];
            }

            if (isset($validatedData["password"])) {
                $user->password = bcrypt($validatedData["password"]);
            }

            // Salvar as mudanças
            $user->save();

            return response()->json(["message" => "Usuário atualizado com sucesso!"], 200);
        } catch (QueryException $e) {
            return response()->json(["error" => "Erro ao atualizar usuário!"], 500);
        }
    }

    /**
     * Deleta um usuário pelo ID
     */
    public function delete($id) {
        try {
            // Buscar o usuário pelo ID fornecido na URL
            $user = User::find($id);

            // Se o usuário não existir, retorna erro 404
            if (!$user) {
                return response()->json(["error" => "Usuário não encontrado!"], 404);
            }

            // Deletar usuário
            $user->delete();

            return response()->json(["message" => "Usuário apagado com sucesso!"], 200);
        } catch (QueryException $e) {
            return response()->json(["error" => "Erro ao apagar usuário!"], 500);
        }
    }
}
