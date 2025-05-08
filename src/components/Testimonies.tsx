import React from 'react'
import { Avatar, Blockquote, Carousel, Rating } from "flowbite-react";

const Testimonies = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-5">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="mx-auto max-w-screen-sm text-center mb-3 lg:mb-2">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Témoignages
                    </h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Ce que disent nos partenaires et clients
                    </p>
                </div>
                <div className=" h-64 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel className="text-left  px-3">
                        {/* Slide 1 */}
                        <div className="lg:flex h-full items-center justify-center gap-8 dark:bg-gray-800 dark:text-white text-left">
                            <figure className="max-w-screen-md bg-gray-200 dark:bg-gray-700 rounded p-4 hidden lg:flex">
                                <div>
                                    <div className="mb-4 flex items-center">
                                        <Rating size="sm md:md">
                                            <Rating.Star className="text-yellow-400" />
                                            <Rating.Star className="text-yellow-400" />
                                            <Rating.Star className="text-yellow-400" />
                                        </Rating>
                                    </div>
                                    <Blockquote>
                                        <p className="text-sm md:text-2xl font-semibold text-gray-900 dark:text-white">
                                            "Grâce à l'équipe de développement, nous avons pu créer une application mobile qui a révolutionné notre interaction avec nos clients. Leur professionnalisme et leur réactivité ont dépassé nos attentes. Je recommande vivement leurs services à toute entreprise cherchant à innover."
                                        </p>
                                    </Blockquote>
                                    <figcaption className="mt-6 flex items-center space-x-3">
                                        <Avatar
                                            rounded
                                            size="xs"
                                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                            alt="profile picture"
                                        />
                                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-600">
                                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Marie Dupont</cite>
                                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Directrice Marketing, TechInnov</cite>
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>
                            <figure className="max-w-screen-md bg-gray-200 dark:bg-gray-700 rounded p-4">
                                <div className="mb-4 flex items-center">
                                    <Rating size="sm md:md">
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                    </Rating>
                                </div>
                                <Blockquote>
                                    <p className="text-sm md:text-2xl font-semibold text-gray-900 dark:text-white">
                                        "L'application mobile développée pour notre service de covoiturage est un véritable succès. L'équipe a su intégrer des fonctionnalités complexes tout en gardant une interface utilisateur simple et intuitive. Nos utilisateurs adorent, et nous aussi !"
                                    </p>
                                </Blockquote>
                                <figcaption className="mt-6 flex items-center space-x-3">
                                    <Avatar
                                        rounded
                                        size="xs"
                                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                        alt="profile picture"
                                    />
                                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-600">
                                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Camille Rousseau</cite>
                                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Directrice de la Communication, EcoDrive</cite>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>

                        {/* Slide 2 */}
                        <div className="lg:flex h-full items-center justify-center gap-8 dark:bg-gray-800 dark:text-white">
                            <figure className="max-w-screen-md bg-gray-200 dark:bg-gray-700 rounded p-4 hidden lg:flex">
                                <div>
                                    <div className="mb-4 flex items-center">
                                        <Rating size="sm md:md">
                                            <Rating.Star className="text-yellow-400" />
                                            <Rating.Star className="text-yellow-400" />
                                            <Rating.Star className="text-yellow-400" />
                                        </Rating>
                                    </div>
                                    <Blockquote>
                                        <p className="text-sm md:text-2xl font-semibold text-gray-900 dark:text-white">
                                            "Nous avions besoin d'une solution web et mobile pour suivre la traçabilité des aliments. L'équipe a non seulement livré un produit de haute qualité, mais elle a également formé notre personnel pour une utilisation optimale. Un partenariat gagnant-gagnant !"
                                        </p>
                                    </Blockquote>
                                    <figcaption className="mt-6 flex items-center space-x-3">
                                        <Avatar
                                            rounded
                                            size="xs"
                                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                            alt="profile picture"
                                        />
                                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-600">
                                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Karim El Amrani</cite>
                                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Fondateur, FoodTracker</cite>
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>
                            <figure className="max-w-screen-md bg-gray-200 dark:bg-gray-700 rounded p-4">
                                <div className="mb-4 flex items-center">
                                    <Rating size="sm md:md">
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                    </Rating>
                                </div>
                                <Blockquote>
                                    <p className="text-sm md:text-2xl font-semibold text-gray-900 dark:text-white">
                                        "Le site e-commerce développé pour notre marque artisanale a permis de booster nos ventes en ligne. L'équipe a su capturer l'esprit de notre marque et le traduire en une plateforme moderne et fonctionnelle. Nous sommes ravis du résultat !"
                                    </p>
                                </Blockquote>
                                <figcaption className="mt-6 flex items-center space-x-3">
                                    <Avatar
                                        rounded
                                        size="xs"
                                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                        alt="profile picture"
                                    />
                                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-600">
                                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Élodie Petit</cite>
                                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Responsable Digital, ArtisanCo</cite>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>

                        {/* Slide 3 */}
                        <div className="lg:flex h-full items-center justify-center gap-8 dark:bg-gray-800 dark:text-white">
                            <figure className="max-w-screen-md bg-gray-200 dark:bg-gray-700 rounded p-4 hidden lg:flex">
                                <div>
                                    <div className="mb-4 flex items-center">
                                        <Rating size="sm md:md">
                                            <Rating.Star className="text-yellow-400" />
                                            <Rating.Star className="text-yellow-400" />
                                            <Rating.Star className="text-yellow-400" />
                                        </Rating>
                                    </div>
                                    <Blockquote>
                                        <p className="text-sm md:text-2xl font-semibold text-gray-900 dark:text-white">
                                            "L'application mobile développée pour contrôler nos appareils connectés est un véritable bijou de technologie. L'équipe a su anticiper nos besoins et proposer des solutions innovantes. Nous avons déjà prévu de nouveaux projets ensemble !"
                                        </p>
                                    </Blockquote>
                                    <figcaption className="mt-6 flex items-center space-x-3">
                                        <Avatar
                                            rounded
                                            size="xs"
                                            img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                            alt="profile picture"
                                        />
                                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-600">
                                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Julien Bernard</cite>
                                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Responsable Innovation, SmartHome Tech</cite>
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>
                            <figure className="max-w-screen-md bg-gray-200 dark:bg-gray-700 rounded p-4">
                                <div className="mb-4 flex items-center">
                                    <Rating size="sm md:md">
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                        <Rating.Star className="text-yellow-400" />
                                    </Rating>
                                </div>
                                <Blockquote>
                                    <p className="text-sm md:text-2xl font-semibold text-gray-900 dark:text-white">
                                        "Notre site web et notre application mobile ont été entièrement repensés pour offrir une expérience utilisateur exceptionnelle. L'équipe a été à l'écoute de nos besoins et a livré un produit qui dépasse nos attentes. Nos clients adorent !"
                                    </p>
                                </Blockquote>
                                <figcaption className="mt-6 flex items-center space-x-3">
                                    <Avatar
                                        rounded
                                        size="xs"
                                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                        alt="profile picture"
                                    />
                                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-600">
                                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Sarah Lefevre</cite>
                                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Directrice Générale, BeautyBox</cite>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonies