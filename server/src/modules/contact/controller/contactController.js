import { ContactUseCases } from "../useCases/contactUseCases.js";

export class ContactController extends ContactUseCases {

    static newContact = async (req, res) => {
        const data = req.body
        const sendContact = await this.sendContact(data)
        sendContact.status ? res.status(200).send(sendContact) : res.status(500).send(sendContact)
    }
}