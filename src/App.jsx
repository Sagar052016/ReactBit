
import { useState } from 'react'
import './App.css'

const interests = [
  {
    title: 'Sports',
    category: 'SPORTS',
    description: 'Passion, teamwork and the thrill of the game.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
  },
  {
    title: 'Travel',
    category: 'ADVENTURE',
    description: 'Discover new places and unforgettable journeys.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
  },
  {
    title: 'Bikes',
    category: 'MACHINES',
    description: 'A love for motorcycles and beautiful machines.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800',
  },
  {
    title: 'Photography',
    category: 'CREATIVITY',
    description: 'Capturing moments worth remembering.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
  },
  {
    title: 'Gaming',
    category: 'ENTERTAINMENT',
    description: 'Challenges, strategy and fun.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
  },
  {
    title: 'Music',
    category: 'ENTERTAINMENT',
    description: 'Every moment has its own soundtrack.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800',
  },
]

const categories = ['ALL', ...new Set(interests.map((item) => item.category))]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedInterest, setSelectedInterest] = useState(null)

  const filteredInterests =
    selectedCategory === 'ALL'
      ? interests
      : interests.filter((item) => item.category === selectedCategory)

  return (
    <div className="app">
      <nav className="navbar">
        <h2>ReactBit ✦</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#interests">Interests</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <p className="eyebrow">WELCOME TO MY WORLD</p>
        <h1>Hey, I'm Vidya Sagar!</h1>
        <p>Sports • Travel • Bikes • Adventure</p>
        <a href="#interests" className="hero-button">Explore My World ↓</a>
      </header>

      <main id="interests">
        <section className="gallery-section">
          <p className="eyebrow">MY PASSIONS</p>
          <h2>Explore My Interests</h2>
          <p className="section-description">
            A little collection of the things I enjoy.
          </p>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="interest-grid">
            {filteredInterests.map((interest) => (
              <article
                className="interest-card"
                key={interest.title}
                onClick={() => setSelectedInterest(interest)}
              >
                <img src={interest.image} alt={interest.title} />
                <div className="card-content">
                  <span>{interest.category}</span>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                  <button
                    onClick={(event) => {
                      event.stopPropagation()
                      setSelectedInterest(interest)
                    }}
                  >
                    Explore more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Living Every Moment ✨</h2>
          <p>
            I'm Vidya Sagar. I enjoy sports, exploring new places,
            discovering bikes and making memories along the way.
            This is a small glimpse into my world!
          </p>
        </section>
      </main>

      {selectedInterest && (
        <div className="modal" onClick={() => setSelectedInterest(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedInterest(null)}
            >
              ×
            </button>
            <img src={selectedInterest.image} alt={selectedInterest.title} />
            <h2>{selectedInterest.title}</h2>
            <p>{selectedInterest.description}</p>
          </div>
        </div>
      )}

      <footer>
        <p>Made with ✦ by Vidya Sagar | ReactBit</p>
      </footer>
    </div>
  )
}

export default App
