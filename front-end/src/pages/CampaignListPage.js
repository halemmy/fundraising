import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavBar from "../components/PublicNavbar";
import SearchBar from "../components/SearchBar";

const CampaignListPage = () => {
  return (
    <div>
      <PublicNavBar />
      <SearchBar />

      <h2>HERE IS CAMPAIGN LIST PAGE</h2>
    </div>
  );
};
export default CampaignListPage;
