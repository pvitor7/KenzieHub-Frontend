const EditCard = () => {
    return(
        <div>
      <h2>Tecnologia Detalhes</h2>

      <label>Nome do projeto</label>
      <input type="text" placeholder="Ex: React" />

      <label>Status</label>
      <select>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <button type="submit">Salvar alterações</button>
      <button>Excluir</button>
    </div>
    )
}

export default EditCard;