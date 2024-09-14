import React, { useEffect, useState, useRef } from 'react';
import './Realestate.css';
import { Row, Col , Button } from 'antd';
import Card from '../../components/Card/Card';
import Dataroom from '../../components/Dataroom/Dataroom';

const Realestate = () => {
  const [properties, setProperties] = useState([]);
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);
  const detailSectionRef = useRef(null); 

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('https://capital-advisors.s3.us-east-2.amazonaws.com/properties.json');
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  const [files] = useState([
    {
      path: 'Finance/1.docx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Finance/1.docx',
      time: 'Jan 15 2022',
    },
    {
      path: 'Finance/1.xlsx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Finance/1.xlsx',
      time: 'Feb 20 2023',
    },
    {
      path: 'Finance/2.docx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Finance/2.docx',
      time: 'Mar 10 2021',
    },
    {
      path: 'Finance/3.docx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Finance/3.docx',
      time: 'Apr 22 2023',
    },
    {
      path: 'Finance/4.docx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Finance/4.docx',
      time: 'May 11 2021',
    },
    { path: 'Docs/1.docx', url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Docs/1.docx', time: 'Jun 5 2022' },
    { path: 'Docs/2.docx', url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Docs/2.docx', time: 'Jul 18 2023' },
    { path: 'Docs/2.xlsx', url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Docs/2.xlsx', time: 'Aug 9 2022' },
    { path: 'Docs/3.pdf', url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Docs/3.pdf', time: 'Sep 25 2021' },
    { path: 'Docs/4.pdf', url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Docs/4.pdf', time: 'Oct 14 2023' },
    {
      path: 'Photos/+1.png',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Photos/+1.png',
      time: 'Nov 7 2022',
    },
    {
      path: 'Photos/+2.png',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Photos/+2.png',
      time: 'Dec 30 2021',
    },
    {
      path: 'Photos/+3.png',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Photos/+3.png',
      time: 'Jan 19 2022',
    },
    {
      path: 'Photos/+4.png',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Photos/+4.png',
      time: 'Feb 25 2023',
    },
    {
      path: 'Photos/+5.png',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/Photos/+5.png',
      time: 'Mar 17 2021',
    },
  ]);

  const [taxFiles] = useState([
    {
      path: 'AnnualReport/1.docx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/AnnualReport/1.docx',
      time: 'Jan 15 2022',
    },
    {
      path: 'AnnualReport/1.pdf',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/AnnualReport/1.pdf',
      time: 'Feb 20 2023',
    },
    {
      path: 'AnnualReport/2.docx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/AnnualReport/2.docx',
      time: 'Mar 10 2021',
    },
    {
      path: 'AnnualReport/1.pptx',
      url: 'https://elseware-test.s3.us-east-2.amazonaws.com/AnnualReport/1.pptx',
      time: 'Apr 22 2023',
    },
  ]);

  const handleDetailsClick = (index) => {
    if (selectedPropertyIndex === index) {
      // 再次点击同一个 property 时，隐藏细节
      setSelectedPropertyIndex(null);
    } else {
      // 点击不同 property 时，显示相应细节
      setSelectedPropertyIndex(index);

      // 滚动到详细信息部分
      setTimeout(() => {
        if (detailSectionRef.current) {
          detailSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  

  return (
    <div>
      <div className="real-estate-container">
        <h2>Real Estate Investment</h2>
        <p>
          Real estate investment is a popular way to build wealth and diversify your investment portfolio. At WZ Investment, we offer a range of real estate investment opportunities for our clients.
        </p>
        <p>
          Whether you’re looking to invest in residential properties, commercial real estate, or land development, we have the expertise to help you achieve your financial goals.
        </p>
        <p>
          Our team of real estate experts will guide you through the investment process, from property selection to closing the deal. We’ll help you make informed decisions and maximize your returns.
        </p>
      </div>

      <div className="real-estate-grid">
        {properties.map((property, index) => (
            <div key={index}>
          <Card
            key={index}
            title={property.title}
            imgUrl={property.imgUrl}
            propertyType={property.propertyType}
            price={property.price}
            marketCap={property.marketCap}
            capRate={property.capRate}
            priceChange={property.priceChange}
            button={
              <Button onClick={() => handleDetailsClick(index)}>
                {selectedPropertyIndex === index ? 'Hide Details' : 'Details'}
              </Button>}
          />
        
            </div>
        ))}
      </div>
      {selectedPropertyIndex !== null && (
        <div className="Page" ref={detailSectionRef}> 
        {/* Property Details Section */}
        <Row>
          <Col span={24}>
            <Dataroom title="Property Details" folders={['Photos', 'Docs', 'Finance']} files={files} />
          </Col>
        </Row>

        {/* Tax Document Section */}
        <Row>
          <Col span={24}>
            <Dataroom title="Tax Document" folders={['AnnualReport']} files={taxFiles} />
          </Col>
        </Row>
      </div>
      )}
    </div>
  );
};

export default Realestate;
