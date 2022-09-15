interface IButton {
  title: string;
}

function Button({ title }: IButton) {
  return <button>{title}</button>;
}

function App() {
  return (
    <>
      <Button title="Criar" />
      <Button title="Salvar" />
      <Button title="Excluir" />
    </>
  );
}

export default App;
