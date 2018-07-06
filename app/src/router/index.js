import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Commander from '@/components/Commander'
import Connexion from '@/components/Connexion'
import QuiSommesNous from '@/components/QuiSommesNous'
import Profil from '@/components/Profil'
import Panier from '@/components/Panier'
import MentionsLegales from '@/components/MentionsLegales'
import Inscription from '@/components/Inscription'
import Paiement from '@/components/Paiement'
import Suivi from '@/components/Suivi'
import Personnalisation from '@/components/Personnalisation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Commander',
      name: 'Commander',
      component: Commander
    },
    {
      path: '/Connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/Personnalisation',
      name: 'Personnalisation',
      component: Personnalisation
    },
    {
      path: '/Qui-sommes-nous',
      name: 'QuiSommesNous',
      component: QuiSommesNous
    },
    {
      path: '/Mentions-legales',
      name: 'MentionsLegales',
      component: MentionsLegales
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/Panier',
      name: 'Panier',
      component: Panier
    },
    {
      path: '/Inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/Paiement',
      name: 'Paiement',
      component: Paiement
    },
    {
      path: '/Suivi',
      name: 'Suivi',
      component: Suivi
    },
  ]
})
