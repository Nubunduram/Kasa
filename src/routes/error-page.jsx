import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main id="error-page">
      <h1>404</h1>
      <p><span>Oups! La page que</span> vous demandez n'existe pas</p>
      <Link to={`/Kasa/`}>Retourner sur la page d’accueil</Link>
    </main>
  );
}