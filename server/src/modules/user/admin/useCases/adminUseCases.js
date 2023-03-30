import { Response, ResponseError } from "../../../../models/response/Response.js";
import { ArticleDatabaseRepositories } from "../../../../repositories/databaseRepositories.js";
import { UserDatabaseRepositories } from "../../../../repositories/databaseRepositories.js";
import { DeleteUserUseCases } from "../../deleteAccount/useCases/deleteUserAccountUseCases.js";

export class AdminUseCases extends DeleteUserUseCases {
    static articleDbRepositories = new ArticleDatabaseRepositories();
    static userDbRepositories = new UserDatabaseRepositories();

    static async findUserById(id) {
        return await this.userDbRepositories.findOne({ id: id })
    }

    static async getUsers() {
        try {
            const users = await this.userDbRepositories.findAll();
            const filteredUsers = users
                .filter(({ admin }) => !admin)
                .map(({ id, name, email, cpf }) => ({ id, name, email, cpf }));
            return new Response(true, filteredUsers)
        } catch {
            return new ResponseError('AUS 16L')
        }
    }

    static async userDeleting(id) {
        try {
            const user = await this.findUserById(id);
            const deleted = await this.checkDelete(user.hash)
            return deleted
        } catch {
            return new ResponseError('AUC 33L')
        }

    }

    static async newArticle(data) {
        try {
            console.log(data)
            await this.articleDbRepositories.create(data)
            return new Response(true, "Artigo criado com sucesso!")
        } catch {
            return new ResponseError('AUC 39L')
        }
    }

    static async getAllArticles() {
        try {
            return new Response(true, await this.articleDbRepositories.findAll()) 
        } catch {
            return ResponseError('AUC 51L')
        }
    }

    
    static async editArticle(id, data) {
        try {
            await this.articleDbRepositories.update(data, {id: id})
            return new Response(true, "Artigo editado com sucesso!")
        }catch {
            return new ResponseError('AUC 60L')
        }
    }

    static async deleteArticle(id) {
        try {
            await this.articleDbRepositories.destroy({id: id})
            return new Response(true, "Artigo deletado com sucesso!")
        } catch {
            return new ResponseError('AUC 69L')
        }
    }

    static async filteredArticles(param) {
        try {
            return new Response(true, await this.articleDbRepositories.findAll({page: param}))
        } catch {
            return new ResponseError('AUC 77L')
        }
    }
}