<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OffreInfosRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=OffreInfosRepository::class)
 */
class OffreInfos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $AnneeDebut;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $AnneeFin;

    /**
     * @ORM\Column(type="float")
     */
    private $coutEuro;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Intitule;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Aide;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Formule;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $TitreCatalogue;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Structure;

    /**
     * @ORM\ManyToOne(targetEntity=Offre::class, inversedBy="offreInfos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $offre;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAnneeDebut(): ?\DateTimeInterface
    {
        return $this->AnneeDebut;
    }

    public function setAnneeDebut(\DateTimeInterface $AnneeDebut): self
    {
        $this->AnneeDebut = $AnneeDebut;

        return $this;
    }

    public function getAnneeFin(): ?\DateTimeInterface
    {
        return $this->AnneeFin;
    }

    public function setAnneeFin(\DateTimeInterface $AnneeFin): self
    {
        $this->AnneeFin = $AnneeFin;

        return $this;
    }

    public function getCoutEuro(): ?float
    {
        return $this->coutEuro;
    }

    public function setCoutEuro(float $coutEuro): self
    {
        $this->coutEuro = $coutEuro;

        return $this;
    }

    public function getIntitule(): ?string
    {
        return $this->Intitule;
    }

    public function setIntitule(string $Intitule): self
    {
        $this->Intitule = $Intitule;

        return $this;
    }

    public function getAide(): ?string
    {
        return $this->Aide;
    }

    public function setAide(?string $Aide): self
    {
        $this->Aide = $Aide;

        return $this;
    }

    public function getFormule(): ?string
    {
        return $this->Formule;
    }

    public function setFormule(string $Formule): self
    {
        $this->Formule = $Formule;

        return $this;
    }

    public function getTitreCatalogue(): ?string
    {
        return $this->TitreCatalogue;
    }

    public function setTitreCatalogue(string $TitreCatalogue): self
    {
        $this->TitreCatalogue = $TitreCatalogue;

        return $this;
    }

    public function getStructure(): ?string
    {
        return $this->Structure;
    }

    public function setStructure(string $Structure): self
    {
        $this->Structure = $Structure;

        return $this;
    }

    public function getOffre(): ?Offre
    {
        return $this->offre;
    }

    public function setOffre(?Offre $offre): self
    {
        $this->offre = $offre;

        return $this;
    }
}
