import { useRef } from "react";

function Contato() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    console.log("Dados do Formulário:", formData);

    form.current.reset();
  };

  return (
    <section className="contato-page">
      <h1 className="subtitulo-page">Contato</h1>
      <form ref={form} onSubmit={sendEmail} className="container-pages form-contato">
        <div>
          <label htmlFor="name" className="label-form">Nome</label>
          <input type="text" name="name" id="name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        <div>
          <label htmlFor="email" className="label-form">E-mail</label>
          <input type="email" name="email" id="email" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        <div>
          <label htmlFor="message" className="label-form">Mensagem</label>
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        <input type="submit" value="Enviar" className="input-contato"/>
      </form>
    </section>
  )
}

export default Contato