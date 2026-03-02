import React from 'react'
import ManagedCard from '../../components/Managed/Managedcard/ManagedCard'
import BackupSection from '../../components/Managed/Backup-section/BackupSection'
import AverageSection from '../../components/Managed/Average-section/AverageSection'
import StrategyExecution from '../../components/Managed/Strategy-execution/StrategyExecution'
import FAQ from '../../components/Managed/faq/Faq'
import CTASection from '../../components/Managed/Cta-section/CTASection'

export default function ManagedServices() {
  return (
    <div>
      
      <ManagedCard />
      <BackupSection />
      <AverageSection />
      <StrategyExecution />
      <FAQ />
      <CTASection />

    </div>
  )
}
