const SingleContactSocial = ({Icon}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center'>
        <a  className='cursor-pointer'>
            <Icon />
        </a>
    </div>
  )
}

export default SingleContactSocial