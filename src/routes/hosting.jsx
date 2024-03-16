import { useParams } from "react-router-dom";

export default function Hosting() {
  
  const { logementId } = useParams();
  
  return (
    <>
      {/* image container -> prop hostingID */}
      {/* detail Container -> Title/Place/Rating/owner/ownerPic/tags... */}
      <div>
        <h2>Fiche Logement {logementId}</h2>
      </div>
    </>
  );
}