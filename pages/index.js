
export default function Home() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/icons/document.svg" alt="logo" style={{ height: '24px', marginRight: '8px' }} />
          SkillFuel.ai
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">AI Tools</a>
          <button>Get Started</button>
        </div>
      </div>

      <div className="hero">
        <h1>Empowering Professionals<br />with AI Tools</h1>
      </div>

      <h2 style={{ marginTop: '60px' }}>Featured AI Tools</h2>

      <div className="tools">
        <div className="tool-card">
          <img src="/icons/document.svg" alt="Document Generator" />
          <p>Document Generator</p>
        </div>
        <div className="tool-card">
          <img src="/icons/pencil.svg" alt="Content Assistant" />
          <p>Content Assistant</p>
        </div>
        <div className="tool-card">
          <img src="/icons/price-tag.svg" alt="Pricing Optimizer" />
          <p>Pricing Optimizer</p>
        </div>
        <div className="tool-card">
          <img src="/icons/chat.svg" alt="Communication" />
          <p>Communication</p>
        </div>
      </div>
    </>
  )
}
