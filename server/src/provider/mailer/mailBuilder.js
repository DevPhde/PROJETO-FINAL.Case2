import { MailStructure } from "../../models/email/EmailResponse.js";
import { UserDatabaseRepositories } from "../../repositories/databaseRepositories.js";
import dotenv from "dotenv";
dotenv.config();

export class MailBuilder {

    userDbRepositories = new UserDatabaseRepositories();

    async ResponseMail(status, identifier, message, emailContact) {
        if (status == "recoveryPassword") {
            const user = await this.userDbRepositories.findOne(identifier)
            return new MailStructure(status, user.name, user.email, message);
        } 
        if (status == "contact") {
            return new MailStructure(status, "Admin", process.env.EMAIL_AUTH_USER, message);
        }
        if (status == "confirm") {
            return new MailStructure(status, identifier, emailContact , message);
        }

    }
}