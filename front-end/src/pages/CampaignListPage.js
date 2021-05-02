import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavBar from "../components/PublicNavbar";
// import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Spinner,
  CardColumns,
  Button,
} from "react-bootstrap";

const CampaignListPage = () => {
  const API_URL = process.env.REACT_APP_BACKEND_API;
  const [campaign, setCampaign] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrorMsg] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${API_URL}/campaigns`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setCampaign(data.results);
        } else {
          setErrorMsg(`FETCH ERROR: ${data.message}`);
        }
      } catch (error) {
        setErrorMsg(`FETCH ERROR: ${error.message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [API_URL]);

  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  useEffect(() => {
    let newCampaigns = campaign.filter((campaign) =>
      campaign.campaignName.toLowerCase().startsWith(filterTerm)
    );
    setFilteredCampaigns(newCampaigns);
  }, [filterTerm, campaign]);

  return (
    <div>
      <PublicNavBar />
      {/* <SearchBar /> */}

      <Container>
        <Row>
          <Col>
            <p>Tìm kiếm chiến dịch gây quỹ</p>
          </Col>

          <Col>
            <input
              label="Tên chiến dịch"
              type="text"
              onChange={(event) => setFilterTerm(event.target.value)}
              value={filterTerm}
            />
            <p>
              <small>
                <em>Tìm chiến dịch gây quỹ</em>
              </small>
            </p>
          </Col>
        </Row>

        <CardColumns>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            filteredCampaigns.map((campaign) => (
              <Card mr-auto style={{ weight: "30px" }}>
                <Card.Body>
                  <Card.Img
                    className="pb-2"
                    src={`${campaign.imgURL}`}
                    alt="slide"
                  />

                  <p>
                    <strong>{campaign.campaignName}</strong>
                  </p>
                  <p className="py-0">
                    <small>
                      <strong>Mục tiêu gây quỹ:</strong>
                      {campaign.campaignTarget}
                      <br />
                      <strong>Mô tả:</strong>
                      {campaign.campaignDescription}
                    </small>
                  </p>

                  <Button
                    variant="outline-dark"
                    size="sm"
                    href={`${API_URL}/campaigns/${campaign._id}`}
                  >
                    Xem thêm
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </CardColumns>
      </Container>
    </div>
  );
};
export default CampaignListPage;
