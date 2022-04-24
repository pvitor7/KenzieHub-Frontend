const NewCard = () => {
  return (
    <div>
      <h2>Cadastrar Tecnologia</h2>

      <label>Nome</label>
      <input type="text" placeholder="Ex: React" />

      <label>Selecione status</label>
      <select>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <button type="submit">Cadastrar Tecnologia</button>
    </div>
  );
};

export default NewCard;
