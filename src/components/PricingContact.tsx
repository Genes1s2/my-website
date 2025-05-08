import React from 'react'
import { useNavigate } from 'react-router'

const PricingContact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section className="py-20 bg-gray-100 dark:bg-gray-900 ">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 dark:text-white">Prêt à commencer ?</h2>
                    <p className="text-xl mb-8 dark:text-white">Inscrivez-vous aujourd'hui et faites passer votre entreprise au niveau supérieur.</p>
                    <button onClick={()=> navigate("/contact")} className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Contactez-Nous
                    </button>
                </div>
            </section>
        </div>
    )
}

export default PricingContact