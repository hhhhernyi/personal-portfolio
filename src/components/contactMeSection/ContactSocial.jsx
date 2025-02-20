import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4 '>
        <SingleContactSocial link='https://github.com/hhhhernyi' Icon={FaGithub} />
        <SingleContactSocial link='https://www.linkedin.com/in/hern-yi-lee/' Icon={FaLinkedin} />
        <SingleContactSocial link='https://www.instagram.com/hhhhernyi/' Icon={FaInstagram} />
    </div>
  )
}

export default ContactSocial