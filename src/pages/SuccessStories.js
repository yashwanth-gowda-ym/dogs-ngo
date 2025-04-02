import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      dogName: 'Max',
      image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24',
      family: 'The Johnson Family',
      story: 'Max was rescued from the streets and found his forever home with us. Now he\'s the happiest dog in the neighborhood!'
    },
    {
      id: 2,
      dogName: 'Luna',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea',
      family: 'Sarah & Mike',
      story: 'Luna was scared and shy when we first met her. Today, she\'s confident and brings joy to everyone she meets.'
    },
    // Add more stories as needed
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Success Stories</h1>
      <div className="row mb-4">
        <div className="col-12 text-center">
          <p className="lead">
            Every adoption is a story of hope, love, and new beginnings. 
            Here are some of our favorite happy endings that became happy beginnings.
          </p>
        </div>
      </div>

      <div className="row">
        {stories.map(story => (
          <div key={story.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <img 
                src={story.image} 
                className="card-img-top" 
                alt={story.dogName}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h3 className="card-title">{story.dogName}'s Story</h3>
                <h6 className="card-subtitle mb-2 text-muted">Adopted by {story.family}</h6>
                <p className="card-text">{story.story}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <h3>Share Your Story</h3>
        <p>Have you adopted from us? We'd love to hear your story!</p>
        <button className="btn btn-primary btn-lg">Share Your Story</button>
      </div>
    </div>
  );
};

export default SuccessStories;