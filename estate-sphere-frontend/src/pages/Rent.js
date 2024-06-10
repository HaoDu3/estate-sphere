import { useEffect, useState } from "react";
import axios from "axios";
import AdCard from "../components/cards/AdCard";
//import SearchForm from "../components/forms/SearchForm";

export default function Rent() {
  // context
  // state
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const { data } = await axios.get("/ads-for-rent");
      console.log(data,data.ads);
      setAds(data.ads);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      
      <h1 className="display-1 bg-primary text-light p-5">For Rent</h1>
      <div className="container">
        <div className="row">
        {ads?.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
