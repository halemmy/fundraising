import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const CampaignDetailPage = () => {
  const API_URL = process.env.REACT_APP_BACKEND_API;
  const [campaign, setCampaign] = useState([]);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setErrorMsg] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${API_URL}/cause/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setCampaign(data);
        } else {
          setErrorMsg(`FETCH ERROR: ${data.message}`);
        }
      } catch (error) {
        setErrorMsg(`FETCH ERROR: ${error.message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [API_URL, id]);

  return (
    <div>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Card>
            <Card.Img
              className="d-block w-100"
              src={`http://image.tmdb.org/t/p/original/${campaign.imgURL}`}
              alt="backdrop"
            />

            <Card.Body>
              <h1>{campaign.campaignName}</h1>
              <p>
                {campaign.campaignDescription}
                <br />
                <strong>Mục tiêu:</strong>
                {campaign.campaignTarget} VNĐ.
                <br />
                <strong>Chương trình / Dự án:</strong>
                {campaign.program} / {campaign.project}
              </p>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default CampaignDetailPage;
