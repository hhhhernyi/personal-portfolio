const links = [
    {Link: "About Me", section: "about"},
    {Link: "Skills", section: "skills"},
    {Link: "Experience", section: "experience"},
    {Link: "Projects", section: "projects"},
    {Link: "Contact", section: "contact"},
]

const FooterMain = () => {
  return (
    <div className="px-4">
        <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
        <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
            <p className="text-3xl text-lightGrey">Lee Hern Yi</p>
            <ul className="flex gap-4 text-lightGrey text-xl">
                {links.map((item,index)=>(
                    <li key={index}><a href='#' className="hover:text-white transition-all duration-500 cursor-pointer">{item.Link}</a></li>
                ))}

            </ul>
        </div>
        <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">2024 | All Rights Rreserved</p>
    </div>
  )
}

export default FooterMain