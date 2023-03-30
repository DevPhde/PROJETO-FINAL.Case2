import { Response, ResponseError } from "../../../models/response/Response.js"
import { Mailer } from "../../../provider/mailer/mailProvider.js"

export class ContactUseCases {

    static mailer = new Mailer();

    static async confirmContact(email, name) {
        try {
            const sendMail = await this.mailer.sendMail("Confirmação de Contato", "confirm", name, `
    Recebemos seu contato, nossa equipe irá retornar o mais rápido possível.
            `, email)
            return sendMail ? true : new ResponseError('CUC 13L')
        } catch (e) {
            return new ResponseError('CUC 15L')
        }
    }


    static async adminContact(data) {
        try {
            const sendMail = await this.mailer.sendMail("Email Contato", "contact", null, `
    Nova mensagem:
            Nome: ${data.name}
            Email: ${data.email},
            Assunto: ${data.subject},
            Mensagem: ${data.message}
            `)
            return sendMail ? true : new ResponseError('CUC 30L')
        } catch (e) {
            return new ResponseError('CUC 31L')
        }
    }

    static async sendContact(data) {
        try {
            const sendToAdmin = await this.adminContact(data);
            const confirmContact = await this.confirmContact(data.email, data.name);
            return sendToAdmin && confirmContact ?  new Response(true, "Mensagem de contato enviada com sucesso!") : new ResponseError('CUC 40L')
        }catch {
            new ResponseError('CUC 42L')
        }
    }
}