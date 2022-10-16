import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import DashboardModel from '../../models/dashboard/DashboardModel';
import TransactionModel from '../../models/transaction/TransactionModel';
const DashboardController = () => {
  const [summary, setSummary] = useState({}); 
  const {getSummary} = DashboardModel(setSummary);


  useEffect(() => {
    const scores = getSummary(); 
    return (() => {
      setSummary(null); 
    })
  }, [])

  return {summary, setSummary }
}

export default DashboardController