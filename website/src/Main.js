import './Main.css';
import './Scroll.js'

const Web = () => {
  return (
<div className="main">
<header>
<a href='#profile'><img src="Icon.png" className="logo" /></a>
  <nav className="header-nav">
      <a href='#profile' class="active">Profile</a>
      <a href='#portfolio'>Portfolio</a>
      <a href='#contact'>Contact</a>
  </nav>
</header>

<section id="profile">
  <div id="tilt">
  <div class="text-box">
    <div class="text-wrapper">
       <div class="words">
           <span class="word">Hello👋 I'm</span>
           <span class="word">Halo👋 Saya</span>
           <span class="word">你 好 呀👋 我 是</span>
           <span class="word">Hallo👋 Ich bin</span>
           <span class="word">Hello👋 I'm</span>
       </div>
    </div>
    <h1>MARIE</h1> 
    <h2><h3>SAM</h3> ANTHA</h2>
  </div>
  </div>
  <div class="desc">
    <p2>&lt;/Software Sorcerer In The Making&gt;</p2>
    <div class="hidden">
      <div className="jump">
      <a href='#portfolio' className="explore">Explore My Projects <span>&#x27F6;</span></a>
      <a href='#contact' className="connect">Connect With Me 🙌</a>
      </div>
    </div>
  </div>
  <div id='icons'>
    <a href='https://drive.google.com/file/d/18LWYla920C4FaV_P4nnHr5-viNb-3aoT/view?usp=sharing'><img src="resumeicon.png" className="resume" /></a>
    <a href='https://www.linkedin.com/in/marie-samantha-fidelia-82a3151b0/'><img src="linkedin.png" className="linkedin" /></a>
    <a href='https://github.com/msamanthaf'><img src="github.png" className="github" /></a>
  </div>
</section>

<section id="portfolio">
<div class="subheading">
  <div class="hidden">
    <p3>A glimpse of my creations 🎨✨</p3>
  </div>
</div>
</section>
<section id="contact"><div class="subheading"><p3>What's Next?</p3> <br></br> Contact Me</div></section>
</div>
  );
}

export default Web;
