import React from "react";
import { useParams } from "react-router-dom";
import hostingList from "../assets/hosting-list.json";
import ErrorPage from "./error-page";
import Carousel from "../components/Carousel/Carousel";

export default function Hosting() {
  const { logementId } = useParams();

  // Find the object in the hostingList array that matches the logementId
  const selectedLogement = hostingList.find(item => item.id === logementId);

  if (!selectedLogement) {
    return <ErrorPage />;
  }

  return (
    <main>
        <Carousel />
        <h2>Fiche Logement {selectedLogement.title}</h2>
        <p>Description: {selectedLogement.description}</p>
        <p>Host: {selectedLogement.host.name}</p>
        {/* Render other details as needed */}
    </main>
  );
}
