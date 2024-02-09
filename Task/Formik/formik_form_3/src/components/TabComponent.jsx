import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        {/* Add more tabs as needed */}
      </div>
      <div className="tab-content">
        {/* Render tab content based on activeTab state */}
        {activeTab === 0 && <div>Tab 1 Content</div>}
        {activeTab === 1 && <div>Tab 2 Content</div>}
        {/* Add more tab content as needed */}
      </div>
    </div>
  );
};

export default TabComponent;
