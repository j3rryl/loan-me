import { useRouter } from 'next/router'
import React from 'react'

const Loan = () => {
    const router  = useRouter()
    const loanId = router.query.loanId
  return (
    <div className=''>
      <h2 className=''>{loanId}</h2>
      </div>
  )
}

export default Loan