import React from 'react';

function JournalSection() {
  const articles = [
    {
      title: '5 Must-Have Pieces for Your Autumn Wardrobe',
      description:
        'As the leaves change, so should your closet. Discover the essential items to keep you stylish and cozy this season.',
      image:
        'images/autumn.jpg',
      alt: 'A person in a stylish fall outfit.',
    },
    {
      title: 'Behind the Seams: Our Commitment to Quality',
      description:
        'From fabric selection to the final stitch, we take you on a journey through our meticulous production process.',
      image:
        'https://i.pinimg.com/1200x/20/5b/65/205b6579a630c693c5c83be4f67c77d0.jpg',
      alt: 'Close-up of different fabric textures.',
    },
    {
      title: 'The Art of Accessorizing: Elevate Any Look',
      description:
        'Learn how the right accessories can transform your outfit from simple to stunning with our expert tips and tricks.',
      image:
        'https://i.pinimg.com/736x/fd/c3/77/fdc3779f15afc03322967e51c6f91098.jpg',
      alt: 'A person accessorizing their outfit.',
    },
  ];

  return (
    <section className='mt-2' style={{padding: "20px 6%"}}>
      <h2 className="fs-3 fw-bold mb-4 ps-5">From The Journal</h2>
      <div className="row gap-4 justify-content-around">
        {articles.map((article, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex flex-column gap-3">
              <div
                className="rounded-4 overflow-hidden position-relative"
                style={{
                  aspectRatio: '4 / 3',
                  backgroundImage: `url(${article.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              ></div>
              <div className="d-flex flex-column gap-2">
                <h3 className="fs-5 fw-bold">{article.title}</h3>
                <p className="text-muted small">{article.description}</p>
                <a href="#" className="text-decoration-none fw-bold text-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JournalSection;
