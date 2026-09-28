import logo from '../assets/logo.jpg'
import { club } from '../data.js'

export default function Crest({ size = 48 }) {
  return <img className="crest" src={logo} width={size} height={size} alt={`${club.name} logo`} />
}
