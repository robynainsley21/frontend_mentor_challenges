import { useEffect, useState } from "react";

//components
import Ext_Filter from "./Ext_Filter.jsx";

// Import all images at once using import.meta.glob
const imageModules = import.meta.glob(
  "/src/assets/images/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

export default function Ext_Parent() {
  const [data, setData] = useState([]);

  // Convert the image modules object into a more usable format
  const images = Object.entries(imageModules).reduce((acc, [path, module]) => {
    // Extract filename from path (e.g., "/src/assets/images/logo.svg" -> "logo.svg")
    const filename = path.split("/").pop();
    acc[filename] = module.default;
    return acc;
  }, {});

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((response) => response.json())
      .then((fetchedData) => {
        // Map the data and match images
        const dataWithImages = fetchedData.map((item) => {
          // Extract just the filename from the JSON path
          // "./assets/images/logo-devlens.svg" -> "logo-devlens.svg"
          const filename = item.logo.split("/").pop();

          return {
            ...item,
            logoSrc: images[filename] || item.logo,
          };
        });
        setData(dataWithImages);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="ext_header">
        <h1>Extensions List</h1>
        <Ext_Filter data={data} />
      </div>
      <div id="ext_items">
        {data.map((item) => {
          return (
            <div className="ext_item" key={item.name}>
              <div className="ext_item_desc">
                <img src={item.logoSrc} alt={`${item.name} logo`} />
                <div className="ext_item_text">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
