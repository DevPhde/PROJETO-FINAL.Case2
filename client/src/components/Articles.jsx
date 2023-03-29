import { useState,useEffect } from 'react'
import { AxiosProvider } from '../providers/axiosProvider'
import { Table } from 'react-bootstrap'
import { Loading } from './Loading'
import { VerticalModal } from './modals/VerticalModal'
import { BackdropModal } from './modals/BackdropModal'

function Articles(props) {
const hash = sessionStorage.getItem('authorization')
const [data, setData] = useState([])
const [feedbackUser, setFeedbackUser] = useState({
    error: false,
    message: ''
})
const [update, setUpdate] = useState(0);
const [loadingReq, setLoadingReq] = useState(false)

const [editing, setEditing] = useState({
    edit: false,
    key: 0
});
const [deleting, setDeleting] = useState({
    delete: false,
    key: 0
});

const [loadingScreen, setLoadingScreen] = useState(false)
useEffect(() => {
    async function getArticles(param) {
        setLoadingScreen(true)
        try {
            const response = await AxiosProvider.communication("GET", param, hash)
            setData(response.data)
            console.log(data)
            setLoadingScreen(false)
        } catch(e) {
            console.log(e)
            setLoadingScreen(false)
        }
    }
    getArticles(props.param)
}, [update])
console.log(data)

const handleDelete = (i) => {
    setDeleting(prevState => ({ ...prevState, delete: true, key: i.id }));
}

const handleDeleteRow = async () => {
    let path;

    props.param == "allArticles" ? path = `admin/delete/article/${deleting.key}` : path = `admin/deleteUser/${deleting.key}`

    

    try {
        setLoadingReq(true)
        const response = await AxiosProvider.communication("DELETE", path, hash)
        setFeedbackUser(prevState => ({...prevState, error: false, message: response.data.message}))
        setUpdate(update + 1)
        setDeleting(false)
        setLoadingReq(false)
    } catch(e) {
        console.log(e)
    }
    
}


const handleEdit = (i) => {
    setValues(() => ({
        id: i.id,
        date: i.date,
        name: i.name,
        amount: i.amount,
        local: (i.local ? i.local : null),
        TypeExpenseId: (i.TypeExpenseId ? i.TypeExpenseId : null)
    }));
    setEditing(prevState => ({ ...prevState, edit: true, key: i.id }));
    setUpdate(update + 1);
}

const handleEditRow = async () => {
    if (Object.values(isValid).every(value => value == true)) {
        const data = {
            name: values.name,
            amount: Number(values.amount.replace(/\./g, "").replace(",", "")),
            local: values.local
        }
        if (values.TypeExpenseId !== null) {
            data.TypeExpenseId = selectedTypeExpense.id;
        }
        setLoadingReq(true)
        const response = await AxiosProvider.communication("PUT", `${props.param}/edit/${values.id}`, hash, data);
        setMessage(response.data.message);
        setUpdate(update + 1);
        setEditing(prevState => ({ ...prevState, edit: false, key: 0 }));
        setLoadingReq(false)
    }
}

  return (
    <div>
        <VerticalModal
                show={deleting.delete}
                onHide={() => setDeleting(prevState => ({ ...prevState, delete: false, key: 0 }))}
                title={`Deletar ${props.param == 'expenses' ? "Despesa" : "Receita"}`}
                change={() => handleDeleteRow()}
                to={'/'}
                anotherbutton={loadingReq ? "loading" : "true"}
                classanotherbutton={"btn table-modal-btn btn-danger"}
                clickanotherbutton={() => handleDeleteRow()}
                anotherbuttonmessage={"Deletar"}
                namebutton={"Cancelar"}
                message={
                    <>
                        <p>Tem certeza que deseja deletar a {props.param == 'expenses' ? "despesa" : "receita"}?</p>
                    </>
                }
            />

         <section className="p-5 tables">
                {data.status ? (
                    <div>
                        {feedbackUser.message && <p className="text-success">{feedbackUser.message}</p>}
                        {data.message.length != 0 ? (<div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Texto</th>
                                        <th>link da imagem</th>
                                        <th>Opções</th>
                                    </tr>
                                </thead>
                                {data.message.map((info) => (
                                    <tbody key={info.id}>
                                        <tr>
                                            <td>{info.title}</td>
                                            <td>{info.text}</td>
                                            <td>{info.image}</td>
                                            <td className="text-center"><button onClick={() => handleEdit(info)} type="button" className="btn ms-1 p-1 px-2 btn-success">Editar</button>
                                                <button onClick={() => handleDelete(info)} type="button" className="btn ms-1 p-1 btn-danger">Deletar</button></td>
                                        </tr>

                                    </tbody>

                                ))}
                            </Table>
                        </div>) : (<div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Texto</th>
                                        <th>link da imagem</th>
                                        <th>Opções</th>
                                    </tr>
                                </thead>
                            </Table>
                            {props.param == 'allArticles' ? <p className="text-center">Nenhum artigo cadastrado.</p> :  <p className="text-center">Nenhum usuário cadastrado.</p>}


                        </div>)}


                    </div>
                ) : (
                    <div>
                        {loadingScreen ?
                            (
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Título</th>
                                                <th>Texto</th>
                                                <th>link da imagem</th>
                                                {props.param == 'expenses' && <th>Local</th>}
                                                {props.param == 'expenses' && <th>Tipo de despesa</th>}
                                                <th>Opções</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Loading className="loader-position" />
                                </div>
                            ) : (
                                <div>
                                    <p className="mt-5 text-center">{feedbackUser.message}</p>
                                </div>
                            )}
                    </div>
                )}
            </section>
    </div>
  )
}

export default Articles