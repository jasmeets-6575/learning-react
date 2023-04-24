import heroImg from './assets/hero.svg'
const Hero = () => {
  return (<section className="hero">
    <div className="hero-center">
      <div className="hero-title">
        <h1>Contentful CMS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium numquam assumenda animi illo quas quaerat minima ullam impedit vel consequatur. Iusto, velit distinctio? Accusamus asperiores aliquam perferendis illum, officiis ut. </p>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="women and the browser" className='img' />
      </div>
    </div>
  </section>
  )
}
export default Hero