export default function Intro({ done }) {
  return (
    <div className={`intro${done ? ' intro--done' : ''}`} aria-hidden={done}>
      <div className="intro__mark">
        <span>P</span>
        <span>S</span>
      </div>
      <div className="intro__rail intro__rail--top" />
      <div className="intro__rail intro__rail--right" />
      <div className="intro__rail intro__rail--bottom" />
      <div className="intro__rail intro__rail--left" />
    </div>
  )
}
