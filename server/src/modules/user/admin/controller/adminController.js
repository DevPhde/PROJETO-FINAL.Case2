import { AdminUseCases } from "../useCases/adminUseCases.js";

export class AdminController extends AdminUseCases {
    static listAllUsers = async (req, res) => {
        const users = await this.getUsers();
        users.status ? res.status(200).send(users) : res.status(500).send(users)
    }

    static deleteUser = async (req, res) => {
        const id = req.params.id;
        const deleted = await this.userDeleting(id)
        deleted.status ? res.status(200).send(deleted) : res.status(500).send(deleted)
    }

    static createArticle = async (req, res) => {
        const data = req.body;
        const created = await this.newArticle(data);
        created.status ? res.status(200).send(created) : res.status(500).send(created);

    }

    static listAllArticles = async (req, res) => {
        const articles = await this.getAllArticles();
        articles.status ? res.status(200).send(articles) : res.status(500).send(articles);
    }

    static articleEdit = async (req, res) => {
        const data = req.body;
        const id = req.params.id;
        const edited = await this.editArticle(id, data)
        edited.status ? res.status(200).send(edited) : res.status(500).send(edited);
    }

    static articleDelete = async (req,res) => {
        const id = req.params.id;
        const deleted = await this.deleteArticle(id);
        deleted.status ? res.status(200).send(deleted) : res.status(500).send(deleted)
    }

    static listFilteredArticles = async (req, res) => {
        const param = req.params.page
        const filteredArticles = await this.filteredArticles(param)
        filteredArticles.status ? res.status(200).send(filteredArticles) : res.status(500).send(filteredArticles);
    }
}