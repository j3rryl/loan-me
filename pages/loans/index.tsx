import Link from 'next/link'
import React from 'react'

const Loans = () => {
  return (
    <div>
      <h2 className='mt-12 text-center uppercase'>No loans have been applied for yet.</h2>
      <Link href='/loans/form'>Apply New Loan</Link>
    </div>
  )
}

export default Loans