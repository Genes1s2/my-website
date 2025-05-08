import NavBar from '../components/NavBar'
import PageFooter from '../components/Footer'
import PricingHeader from '../components/PricingHeader'
import PricingList from '../components/PricingList'
import PriceComparism from '../components/PriceComparism'
import CustomerPricing from '../components/CustomerPricing'
import PricingContact from '../components/PricingContact'

const PricingPage = () => {
  return (
    <div>
        <NavBar />
        <PricingHeader />
        <PricingList />
        <PriceComparism />
        <CustomerPricing />
        <PricingContact />
        <PageFooter />
    </div>
  )
}

export default PricingPage