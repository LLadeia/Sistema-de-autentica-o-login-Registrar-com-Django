import { useState } from "react";
import { atualizarUser } from "../services/api";

function EditarUser({ user, onAtualizado }) {
  const [nome, setNome] = useState(user.nome);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState(user.senha);

  const [preview, setPreview] = useState(null);


    async function handleSubmit(e) {
    await atualizarUser(user.id, {
      nome,
        email,
        senha,
    });

    onAtualizado();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button type="submit">💾 Salvar</button>
    </form>
  );
}

export default EditarUser;