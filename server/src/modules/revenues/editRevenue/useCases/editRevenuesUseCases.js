import { Response, ResponseError } from "../../../../models/response/Response.js";
import { RevenueDatabaseRepositories } from "../../../../repositories/databaseRepositories.js";


export class EditRevenuesUseCases {

    static revenueDbRepositories = new RevenueDatabaseRepositories();

    static async revenueEdit(data) {
        try {
            console.log(data.info.amount)
            await this.revenueDbRepositories.update(data.info, {id: data.revenueId})
            return new Response(true, "Receita editada com sucesso!")
        } catch {
            return new ResponseError('ERUC 14L')
        }
    }
}