import { useState } from 'react';
import { Loading } from '../components/Loading';
import { AxiosProvider } from '../providers/axiosProvider';
import "../style/contact.css";
import Form from 'react-bootstrap/Form';
import { BackdropModal } from '../components/modals/BackdropModal';


export function FormContact() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)

    const [isValid, setIsValid] = useState({
        name: true,
        email: true,
        subject: true,
        message: true
    })

    const [feedbackUser, setFeedbackUser] = useState({
        error: false,
        message: ''
    })
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (!values.name || values.name.length < 3) {
            setIsValid(prevState => ({ ...prevState, name: false }))
        }
        if (!values.email || /\S+@\S+\.\S+/.test(values.email) == false) {
            setIsValid(prevState => ({ ...prevState, email: false }))
        }
        if (!values.subject) {
            setIsValid(prevState => ({ ...prevState, subject: false }))
        }
        if (!values.message) {
            setIsValid(prevState => ({ ...prevState, message: false }))

        } else if (Object.values(isValid).every(value => value == true)) {
            setFeedbackUser(prevState => ({...prevState, error: false, message: ''}))
            try {
                console.log(values)
                const response = await AxiosProvider.communication("POST", 'contact', null, values)
                setFeedbackUser(prevState => ({ ...prevState, error: true, message: response.data.message }))
            } catch (e) {
                setFeedbackUser(prevState => ({ ...prevState, error: true, message: e.response.data.message }))
            }
        }
        setLoading(false)
    }

    return (
        <main>
            {feedbackUser.message && <BackdropModal title={feedbackUser.error ? "Mensagem enviada!" : "Erro interno"} message={feedbackUser.message} namebutton="Fechar" />}
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" onFocus={() => setIsValid(prevState => ({ ...prevState, name: true }))} onChange={(event) => setValues((prevState) => ({ ...prevState, name: event.target.value }))} value={values.name} />
                    <label htmlFor="floatingInput">Nome</label>
                </div>
                {!isValid.name && <p className="text-danger">Preencha o campo nome com pelo menos 3 caracteres.</p>}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" onFocus={() => setIsValid(prevState => ({ ...prevState, email: true }))} onChange={(event) => setValues((prevState) => ({ ...prevState, email: event.target.value }))} value={values.email} />
                    <label htmlFor="floatingInput">email</label>
                </div>
                {!isValid.email && <p className="text-danger">Preencha com um email válido.</p>}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" onFocus={() => setIsValid(prevState => ({ ...prevState, subject: true }))} onChange={(event) => setValues((prevState) => ({ ...prevState, subject: event.target.value }))} value={values.subject} />
                    <label htmlFor="floatingInput">Assunto</label>
                </div>
                {!isValid.subject && <p className="text-danger">O campo assunto deve ser preenchido.</p>}
                <div className="form-floating">
                    <textarea className="form-control text-quality" onFocus={() => setIsValid(prevState => ({ ...prevState, message: true }))} onChange={(event) => setValues((prevState) => ({ ...prevState, message: event.target.value }))} value={values.message}></textarea>
                    <label htmlFor="floatingTextarea2">Mensagem</label>
                </div>
                {!isValid.message && <p className="text-danger">O campo mensagem deve ser preenchido.</p>}

                <div>
                    {loading ? <Loading /> : <button type='submit' className='btn btn-contact'>Enviar</button>}

                </div>
            </form>
        </main >
    )
}