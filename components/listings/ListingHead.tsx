'use client'

import { SafeUser } from '@app/types'
import Heading from '@components/Heading'
import HeartButton from '@components/HeartButton'
import useCountries from '@hooks/useCountry'
import Image from 'next/image'

interface ListingHeadProps {
  title: string
  locationValue: string
  imageSrc: string
  id: string
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries()
  const location = getByValue(locationValue)

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className='relative h-[60vh] w-full overflow-hidden rounded-xl'>
        <Image
          alt='Image'
          src={imageSrc}
          fill
          className='w-full object-cover'
        />
        <div className='absolute right-5 top-5'>
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}

export default ListingHead
