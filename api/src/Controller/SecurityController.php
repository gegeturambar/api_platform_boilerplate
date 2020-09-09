<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends  AbstractController
{
    /**
     * @Route("/api/usr", name="app_usr", methods={"POST", "PATCH"})
     */
    public function usr()
    {

        return $this->json([
            'user'=> $this->getUser() ? array(
                 'id'      => $this->getUser()->getId()
                , 'prenom'  => $this->getUser()->getPrenom()
                , 'nom'     => $this->getUser()->getNom()
                , 'nni'     => $this->getUser()->getNni()
                , 'email'   => $this->getUser()->getEmail())
            : null
        ]);
    }
}
