import "./style.css";
const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Você não pode acessar essa página.</p>
          <button className="bnt" onClick={Login}>
            Entrar
          </button>
        </>
      ) : (
        <>
          <p>Bem vindo, {user}</p>
          <button className="bnt" onClick={Logout}>
            Sair
          </button>
        </>
      )}
    </div>
  );
};
export default RestrictedPage;
