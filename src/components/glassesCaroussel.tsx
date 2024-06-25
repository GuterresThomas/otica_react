'use client'

import React, { CSSProperties } from 'react';

export default function GridDefaultGlasses() {
  const images = [
    "/oculos5.jpeg", "/oculos6.jpeg", "/oculos7.jpeg", "/oculos8.jpeg",
    "/oculos9.jpeg", "/oculos10.jpeg", "/oculos11.jpeg", "/oculos12.jpeg",
    "/oculos13.jpg", "/oculos14.jpg", "/oculos15.jpg", "/oculos16.jpg",
    "/oculos17.jpg", "/oculos18.jpg", "/oculos19.jpg", "/oculos20.jpg",
    "/oculos21.jpg", "/oculos22.jpg", "/oculos23.jpg", "/oculos24.jpg",
    "/oculos25.jpg", "/oculos26.jpg", "/oculos27.jpg", "/oculos28.jpg",
    "/oculos29.jpg", "/oculos30.jpg", "/oculos31.jpg", "/oculos32.jpg"
  ];

  const containerStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
    padding: '16px'
  };

  const itemStyle: CSSProperties = {
    backgroundColor: '#E2E8F0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imgStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div style={containerStyle}>
      {images.map((src, index) => (
        <div key={index} style={itemStyle}>
          <img src={src} alt={`Óculos ${index + 1}`} style={imgStyle} />
        </div>
      ))}
    </div>
  );
}
