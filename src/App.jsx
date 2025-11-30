import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="profile-image-container">
              <img 
                src="profile.jpg" 
                alt="Liu Yang" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder">LY</div>
            </div>
            <div className="header-text">
              <h1 className="name">Liu Yang</h1>
              <p className="title">Marketing Professional</p>
              <div className="contact-info">
                <span>2040995194@QQ.com</span>
                <span className="separator">|</span>
                <span>1220009168@student.must.edu.mo</span>
                <span className="separator">|</span>
                <span>+86 135 8152 8087</span>
              </div>
            </div>
            <div className="school-badge-container">
              <img 
                src="must-logo.jpeg" 
                alt="MUST Logo" 
                className="school-badge-header"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        <div className="container">
          
          {/* Personal Profile Section */}
          <section className="section">
            <h2 className="section-title">Personal Profile</h2>
            <div className="section-content">
              <p>
                Currently pursuing a Bachelor of Business Administration in Marketing at Macau University of Science and Technology, expected to graduate in May 2026.
                Proficient in using <strong>SPSS</strong> and <strong>Excel</strong> for data analysis, and applying models such as <strong>SWOT</strong> and <strong>7Ps</strong> for strategic analysis.
              </p>
            </div>
          </section>

          {/* Career Goals Section */}
          <section className="section">
            <h2 className="section-title">Career Goals</h2>
            <div className="section-content">
              <p>
                <strong>Short Term:</strong> Lay a solid foundation and master core marketing tools such as SEO/SEM, social media operation, and become familiar with business processes.
              </p>
              <p>
                <strong>Medium to Long Term:</strong> Through the acquisition of skills and accumulation of experience, aspire to become a marketing supervisor, leading a team of 3 to 10 people, responsible for the marketing of product lines, and gradually progress to the position of marketing department head.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              <div className="education-item">
                <div className="education-header">
                  <h3>Macau University of Science and Technology</h3>
                  <span className="date">2022 - Present</span>
                </div>
                <p className="degree">Bachelor of Business Administration in Marketing</p>
                <p className="location">Macao Special Administrative Region • Expected Graduation: May 2026</p>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>No.1 Middle School of Sanhe City</h3>
                  <span className="date">2019 - 2022</span>
                </div>
                <p className="degree">Senior High School</p>
                <p className="location">Langfang City, Hebei Province</p>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>Capital Normal University Affiliated Experimental School</h3>
                  <span className="date">2016 - 2019</span>
                </div>
                <p className="degree">Junior High School</p>
                <p className="location">Chaoyang District, Beijing</p>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>Wanghua Road Primary School</h3>
                  <span className="date">2010 - 2016</span>
                </div>
                <p className="degree">Primary Education</p>
                <p className="location">Chaoyang District, Beijing</p>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
              
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Supply Chain and Human Resources Department Intern</h3>
                  <span className="date">June - July 2025</span>
                </div>
                <p className="company">Shenzhen Songshun Taizhen Holdings Co., Ltd.</p>
                <ul className="responsibilities">
                  <li>Recruiting, including posting positions, screening resumes, and arranging interviews</li>
                  <li>Handling basic employee relations affairs and participating in corporate culture construction</li>
                  <li>Supporting the organization and implementation of training activities</li>
                  <li>Entering human resources data and organizing reports</li>
                  <li>Participated in attendance statistics and personnel file management</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Trade Business Department Intern</h3>
                  <span className="date">June - July 2024</span>
                </div>
                <p className="company">China Metal Mining Economic Research Institute of China Minmetals Group Co., Ltd.</p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Sales Department Intern</h3>
                  <span className="date">July - August 2023</span>
                </div>
                <p className="company">Changsha Xinda Engineering Management Co., Ltd.</p>
                <ul className="responsibilities">
                  <li>Assisting in market information collection and competitor analysis</li>
                  <li>Supported sales engineers in completing quotations, preparing bid documents and contract preparations</li>
                  <li>Participated in customer communication and relationship maintenance</li>
                  <li>Gained deep understanding of the engineering sales process</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Finance Department Intern</h3>
                  <span className="date">June - July 2023</span>
                </div>
                <p className="company">Changsha Zuirui Consulting Service Co., Ltd.</p>
                <ul className="responsibilities">
                  <li>Reviewing and organizing original vouchers, and preparing accounting vouchers</li>
                  <li>Assisted in bank reconciliation and verifying accounts receivable and payable</li>
                  <li>Conducted asset inventory</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">Skills and Tools</h2>
            <div className="section-content">
              <div className="skills-grid">
                <div className="skill-group">
                  <h3>Technical Skills</h3>
                  <p>SPSS • Excel • WPS</p>
                </div>
                <div className="skill-group">
                  <h3>Marketing Frameworks</h3>
                  <p>SWOT Analysis • 7Ps Marketing Mix</p>
                </div>
                <div className="skill-group">
                  <h3>Martial Arts</h3>
                  <p>Taekwondo Black Belt 1st Dan • Multiple national youth competition first places</p>
                </div>
                <div className="skill-group">
                  <h3>Arts</h3>
                  <p>Grade 9 in Art • Grade 4 in Sketching</p>
                </div>
                <div className="skill-group">
                  <h3>Interests</h3>
                  <p>Football • Cooking • Traveling</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects and Activities Section */}
          <section className="section">
            <h2 className="section-title">Projects and Activities</h2>
            <div className="section-content">
              <div className="project-item">
                <h3>Douyin Video Account Management</h3>
                <p>Established and managed a Douyin video account with team members for advertising slogan promotion management class</p>
              </div>
              <div className="project-item">
                <h3>Community Service</h3>
                <p>Participated in charity events for underprivileged children</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Liu Yang</p>
        </div>
      </footer>
    </div>
  )
}

export default App
