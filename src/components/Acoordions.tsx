import React from 'react'
import { Accordion } from "flowbite-react";

const Faqs = () => {
  return (
    <div className=' bg-white dark:bg-gray-900'>
      <div className=' max-w-screen-xl px-4 py-10 mx-auto'>
        <div className="mx-auto max-w-screen-sm text-center mb-3 lg:mb-2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">FAQ's</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Que voulez-vous savoir ?</p>
        </div>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-900 dark:text-white">Quelle est la différence entre le développement web et le développement mobile ?</Accordion.Title>
            <Accordion.Content className="bg-gray-50 dark:bg-gray-800">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Le développement web consiste à créer des sites accessibles via un navigateur (comme Chrome, Firefox, etc.), tandis que le développement mobile se concentre
                sur la création d'applications pour smartphones et tablettes (iOS, Android).
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Les technologies utilisées sont différentes : pour le web, on utilise souvent HTML, CSS, JavaScript, et pour le mobile, des langages comme Swift (iOS) ou Kotlin (Android),
                ou des frameworks comme React Native pour des applications multiplateformes.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-900 dark:text-white">Combien de temps faut-il pour développer une application mobile ou un site web ?</Accordion.Title>
            <Accordion.Content className="bg-gray-50 dark:bg-gray-800">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Le temps de développement dépend de la complexité du projet. Un site web simple peut prendre de 2 à 6 semaines, tandis qu'une application mobile basique peut nécessiter de 3 à 6 mois. Pour des projets plus complexes (comme une plateforme e-commerce ou une application
                avec des fonctionnalités avancées), cela peut prendre de 6 mois à 1 an ou plus.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Nous travaillons en étroite collaboration avec nos clients pour établir des délais réalistes et respecter les échéances.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-900 dark:text-white">Comment garantissez-vous la sécurité des données dans vos applications et sites web ?</Accordion.Title>
            <Accordion.Content className="bg-gray-50 dark:bg-gray-800">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                La sécurité est une priorité absolue. Nous utilisons des protocoles de chiffrement (comme HTTPS et SSL), des méthodes d'authentification robustes (comme OAuth ou JWT),
                et nous suivons les meilleures pratiques en matière de développement sécurisé.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Nous effectuons également des tests de pénétration et des audits de sécurité pour identifier et corriger les vulnérabilités avant le déploiement.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-900 dark:text-white">Pouvez-vous créer une application qui fonctionne à la fois sur iOS et Android ?</Accordion.Title>
            <Accordion.Content className="bg-gray-50 dark:bg-gray-800">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Absolument ! Nous utilisons des technologies multiplateformes comme React Native, Flutter ou Xamarin pour
                développer des applications qui fonctionnent à la fois sur iOS et Android.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Cela permet de réduire les coûts et les délais de développement tout en offrant
                une expérience utilisateur native sur les deux plateformes.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-gray-900 dark:text-white">Que se passe-t-il après la livraison du projet ?</Accordion.Title>
            <Accordion.Content className="bg-gray-50 dark:bg-gray-800">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Notre engagement ne s'arrête pas à la livraison. Nous proposons un support technique continu pour assurer le bon fonctionnement de votre site web ou application. Cela inclut des mises à jour régulières,
                la correction de bugs, et l'ajout de nouvelles fonctionnalités si nécessaire.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Nous offrons également des services de maintenance pour garantir que
                votre projet reste performant et sécurisé dans le temps.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  )
}

export default Faqs