import { MailBuilder } from './mailBuilder.js';
import * as nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();


export class Mailer extends MailBuilder {
    constructor() {
        super();
        this.transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_AUTH_USER,
                pass: process.env.EMAIL_AUTH_PASS,
            }
        })
    }

    async sendMail(sub,status, identifier, message, recipient) {
        const mailInfos = await this.ResponseMail(status, identifier, message, recipient);
       
        try {
            this.transport.sendMail({
                from: `noreply <${process.env.EMAIL_AUTH_USER}>`,
                to: `${mailInfos.email}`,
                subject:sub,
                text: `Olá, ${mailInfos.name}!
    ${mailInfos.message}

Atenciosamente,
Equipe Save Your Money - SYM.`
            })
            return true
        }
        catch {
            return false
        }
    }
}
