import React from 'react';

const PhotoGallery = () => {
  const photos = [
    'url1.jpg',
    'url2.jpg',
    'url3.jpg',
    'url4.jpg',
    'url5.jpg',
    'url6.jpg',
    'url7.jpg',
    'url8.jpg',
    'url9.jpg',
    'url10.jpg',
    'url11.jpg',
    'url12.jpg',
    'url13.jpg',
    'url14.jpg',
    'url15.jpg',
  ];

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const photoRows = chunkArray(photos, 5);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: '#333' }}>Photo Gallery</h2>
      {photoRows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
          {row.map((photo, index) => (
            <div key={index} style={{ marginRight: '10px' }}>
              <img
                src={photo}
                alt=""
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
