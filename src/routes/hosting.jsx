import React from "react";
import { useParams } from "react-router-dom";
import hostingList from "../assets/hosting-list.json";
import ErrorPage from "./error-page";
import Carousel from "../components/Carousel/Carousel";
import DropdownHosting from "../components/DropdownHosting/DropdownHosting";
import Detail from "../components/Detail/Detail";


export default function Hosting() {
  const { logementId } = useParams();

  // Find the object in the hostingList array that matches the logementId
  const selectedLogement = hostingList.find(item => item.id === logementId);

  if (!selectedLogement) {
    return <ErrorPage />;
  }

  return (
    <main id="hosting-main">
        <Carousel pictures={selectedLogement.pictures}/>
        <Detail title={selectedLogement.title} location={selectedLogement.location} tags={selectedLogement.tags} host={selectedLogement.host} rating={selectedLogement.rating}/>
        <DropdownHosting description={selectedLogement.description} equipments={selectedLogement.equipments} />
    </main>
  );
}
