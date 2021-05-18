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
  CardGroup,
  Button,
} from "react-bootstrap";
// import numeral from "numeral";

// var number = numeral(1000);

const CampaignListPage = () => {
  const API_URL = process.env.REACT_APP_BACKEND_API;
  const [campaigns, setCampaigns] = useState([]);

  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setErrorMsg] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${API_URL}/cause`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setCampaigns(data.data);
          // setFilteredCampaigns(data.results);
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

  useEffect(() => {
    let newCampaign = campaigns.filter((campaign) =>
      campaign.campaignName.toLowerCase().startsWith(filterTerm)
    );
    setFilteredCampaigns(newCampaign);
  }, [filterTerm, campaigns]);

  return (
    <div>
      <PublicNavBar />
      {/* <SearchBar /> */}

      <Container className="py-5">
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

        <CardGroup>
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
                      {campaign.campaignDescription}
                      <br />
                      <strong>Mục tiêu gây quỹ: </strong>
                      {campaign.campaignTarget} VND
                    </small>
                  </p>

                  <Button
                    variant="outline-dark"
                    size="sm"
                    href={`${API_URL}/cause/${campaign._id}`}
                  >
                    Xem thêm
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </CardGroup>
      </Container>
    </div>
  );
};
export default CampaignListPage;
