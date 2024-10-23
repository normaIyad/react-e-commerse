import style from './Landing.module.css'

export default function Landing({imgsrc , title , para , link }) {
  return (
    <div className={style.landing}>
      <img src={imgsrc} alt="landing" className='w-100' />
      <div className={style.overlay}>
        <h2 className='titleLanding'>{title}</h2>
        <p>{para}</p>
        <a href={link} className='btn btn-outline-light'> Shop now </a>
      </div>
    </div>
  )
}
