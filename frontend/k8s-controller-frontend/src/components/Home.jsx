import React from 'react';
import Header from './Header';
import MetricsDashboard from './MetricsDashboard';

const Home = () => {
    return (
        <div className="components-home">
          <div>
            <MetricsDashboard />
          </div>
        </div>
      );
};

export default Home;
